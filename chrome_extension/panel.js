document.addEventListener('DOMContentLoaded', function() {
  const networkRequestsTable = document.getElementById('network-requests');

  chrome.devtools.network.onRequestFinished.addListener(function(request) {
    const startTime = new Date(request.startedDateTime).getTime();
    chrome.devtools.inspectedWindow.eval('performance.timing.navigationStart', function(navStart) {
      const relativeStartTime = startTime - navStart;
      const newRow = networkRequestsTable.insertRow(-1);
      const urlCell = newRow.insertCell(0);
      const timeCell = newRow.insertCell(1);
      urlCell.textContent = request.request.url;
      timeCell.textContent = relativeStartTime.toFixed(2);
    });
  });
});
