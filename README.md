# NetChrono

A Chrome DevTools extension that provides enhanced network request timing analysis and filtering capabilities.

![NetChrono Screenshot](netChrono_custom_devtools_tab.jpeg)

## Features

- 🔍 Advanced request filtering:
  - Filter by file types (JS, CSS, Images, Media, Fonts, Documents)
  - Filter XHR/Fetch requests
  - Filter by file name/path
- ⏱️ Precise timing measurements for network requests
- 🎯 Real-time request monitoring
- 🎨 Clean and familiar Chrome DevTools-style interface

## Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/NetChrono.git
```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" in the top right corner

4. Click "Load unpacked" and select the `chrome_extension` directory from the cloned repository

5. Open Chrome DevTools (F12) and find the "NetChrono" tab

## Usage

1. Open Chrome DevTools
2. Navigate to the "NetChrono" tab
3. Browse websites to see network requests in real-time
4. Use the filter buttons to filter requests by type:
   - All
   - Fetch/XHR
   - JS
   - CSS
   - Img
   - Media
   - Font
   - Doc
   - Other
5. Use the filename filter to search for specific requests

## Development

### Project Structure

```
chrome_extension/
├── manifest.json     # Extension manifest
├── devtools.html    # DevTools page
├── devtools.js      # DevTools initialization
├── panel.html       # Main panel UI
└── panel.js         # Panel functionality
```

### Building from Source

1. Make your changes to the source files
2. Load the extension in Chrome using "Load unpacked"
3. Click the "Update" button in `chrome://extensions/` to apply changes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2024 NetChrono

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.