# File Download Organizer - Chrome Extension

A Chrome extension that automatically organizes your downloaded files into specific folders based on file extensions. Say goodbye to cluttered download directories!

## Features

- Automatically sorts downloads into categorized folders
- Supports multiple file types
- Zero configuration needed
- Lightweight and efficient

## Folder Organization

Files are automatically sorted into the following categories:

- 📄 **Documents**
  - PDFs
  - Word Documents
  - Text Files
- 🖼️ **Images**
  - JPG/JPEG
  - PNG
  - GIF
  - SVG
  - WebP
- 🎵 **Music**
  - MP3
  - WAV
  - FLAC
  - M4A
- 🎥 **Videos**
  - MP4
  - MKV
  - AVI
  - MOV
- 📦 **Archives**
  - ZIP
  - RAR
  - 7Z
  - TAR
  - GZ
- 💻 **Code**
  - JavaScript
  - Python
  - HTML
  - CSS
  - JSON
- ⚙️ **Programs**
  - EXE
  - MSI
  - DMG
- 📁 **Other**
  - All unrecognized file types

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/[your-username]/file-download-organizer.git
   ```

2. **Install in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked"
   - Select the directory containing the extension files

## Usage

Once installed, the extension works automatically:
1. Download any file in Chrome
2. The file will be automatically sorted into the appropriate folder
3. No additional configuration needed!

## Files Included

- `manifest.json` - Extension configuration
- `background.js` - Core functionality for file organization
- `icon48.png` and `icon128.png` - Extension icons
- `README.md` - This documentation

## Permissions Required

The extension requires the following permissions:
- `downloads` - To manage file downloads
- `downloads.shelf` - To interact with the downloads shelf

## Contributing

Feel free to contribute to this project:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have suggestions:
1. Open an issue in the GitHub repository
2. Provide detailed information about the problem
3. Include steps to reproduce the issue

---

Made with ❤️ by Kartik Kar
