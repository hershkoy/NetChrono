document.addEventListener('DOMContentLoaded', function() {
  const networkRequestsTable = document.getElementById('network-requests');
  const fileTypeButtons = document.querySelectorAll('.file-type-button');
  const fileNameFilter = document.getElementById('fileName');
  
  let requests = []; // Store all requests
  let activeFileType = 'all'; // Track active file type filter

  // File type patterns
  const fileTypePatterns = {
    js: ['.js', '.jsx', '.mjs'],
    css: ['.css', '.scss', '.sass', '.less'],
    img: ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.ico', '.bmp'],
    media: ['.mp4', '.mp3', '.wav', '.ogg', '.webm'],
    font: ['.woff', '.woff2', '.ttf', '.eot', '.otf'],
    doc: ['.html', '.htm', '.pdf', '.doc', '.docx'],
    fetch: ['xhr', 'fetch'] // Special case handled in isFileType
  };

  function isFileType(url, type) {
    const urlObj = new URL(url);
    const path = urlObj.pathname.toLowerCase();
    
    if (type === 'all') return true;
    
    if (type === 'fetch') {
      // Implement fetch/XHR detection logic here
      // This is a simplified version - you might want to use the actual request type from chrome.devtools.network
      return path.includes('/api/') || path.includes('/rest/') || path.endsWith('.json');
    }
    
    if (type === 'other') {
      // Check if it doesn't match any other known type
      return !Object.values(fileTypePatterns)
        .flat()
        .some(ext => path.endsWith(ext));
    }
    
    // Check against known file extensions for the type
    return fileTypePatterns[type]?.some(ext => path.endsWith(ext)) || false;
  }

  // Filter function
  function filterRequests() {
    const fileName = fileNameFilter.value.toLowerCase();

    // Clear the table
    while (networkRequestsTable.firstChild) {
      networkRequestsTable.removeChild(networkRequestsTable.firstChild);
    }

    // Apply filters and display matching requests
    requests.forEach(request => {
      const url = request.url.toLowerCase();
      
      const matchesFileType = isFileType(url, activeFileType);
      const matchesFileName = !fileName || url.includes(fileName);

      if (matchesFileType && matchesFileName) {
        const newRow = networkRequestsTable.insertRow(-1);
        const urlCell = newRow.insertCell(0);
        const timeCell = newRow.insertCell(1);
        urlCell.textContent = request.url;
        timeCell.textContent = request.time.toFixed(2);
      }
    });
  }

  // Handle file type button clicks
  fileTypeButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      fileTypeButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');
      // Update active file type
      activeFileType = button.dataset.type;
      // Reapply filters
      filterRequests();
    });
  });

  // Add event listener for file name filter
  fileNameFilter.addEventListener('input', filterRequests);

  chrome.devtools.network.onRequestFinished.addListener(function(request) {
    const startTime = new Date(request.startedDateTime).getTime();
    chrome.devtools.inspectedWindow.eval('performance.timing.navigationStart', function(navStart) {
      const relativeStartTime = startTime - navStart;
      
      // Store the request
      requests.push({
        url: request.request.url,
        time: relativeStartTime
      });

      // Apply current filters
      filterRequests();
    });
  });
});
