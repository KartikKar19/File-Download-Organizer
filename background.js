// File extension to folder mapping
const extensionFolders = {
  // Documents
  'pdf': 'Documents/PDFs',
  'doc': 'Documents/Word',
  'docx': 'Documents/Word',
  'txt': 'Documents/Text',
  'rtf': 'Documents/Text',
  
  // Images
  'jpg': 'Images',
  'jpeg': 'Images',
  'png': 'Images',
  'gif': 'Images',
  'svg': 'Images',
  'webp': 'Images',
  
  // Audio
  'mp3': 'Music',
  'wav': 'Music',
  'flac': 'Music',
  'm4a': 'Music',
  
  // Video
  'mp4': 'Videos',
  'mkv': 'Videos',
  'avi': 'Videos',
  'mov': 'Videos',
  
  // Archives
  'zip': 'Archives',
  'rar': 'Archives',
  '7z': 'Archives',
  'tar': 'Archives',
  'gz': 'Archives',
  
  // Code
  'js': 'Code',
  'py': 'Code',
  'html': 'Code',
  'css': 'Code',
  'json': 'Code',
  
  // Executables
  'exe': 'Programs',
  'msi': 'Programs',
  'dmg': 'Programs'
};

// Listen for download events
chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
  const fileExtension = downloadItem.filename.split('.').pop().toLowerCase();
  const targetFolder = extensionFolders[fileExtension] || 'Other';
  
  // Suggest the new file path with the organized folder structure
  suggest({
    filename: `${targetFolder}/${downloadItem.filename}`
  });
});