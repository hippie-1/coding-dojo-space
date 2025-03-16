// https://nodejs.org/api/fs.html#file-system

import * as fs from 'node:fs';
const content = 'Hello, world!';

/*
2. WRITING Files
To write data to a file, use the fs.writeFile or fs.writeFileSync method.
*/

// Example (Asynchronous):
fs.writeFile('example.txt', content, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully!');
});

// Example (Synchronous):
// try {
//   fs.writeFileSync('example.txt', content);
//   console.log('File written successfully!');
// } catch (err) {
//   console.error('Error writing file:', err);
// }

/*
1. READING Files
To read the contents of a file, use the fs.readFile or fs.readFileSync method.
*/

// Example (Asynchronous):
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});

// Example (Synchronous):
// try {
//   const data = fs.readFileSync('example.txt', 'utf8');
//   console.log('File contents:', data);
// } catch (err) {
//   console.error('Error reading file:', err);
// }

/*
3. APPENDING to Files
Use fs.appendFile or fs.appendFileSync to add content to an existing file.
*/

// Example (Asynchronous):
const additionalContent = '\nThis is appended text.';

fs.appendFile('example.txt', additionalContent, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }
  console.log('Content appended successfully!');
});

/*
4. CHECKING if a File Exists
You can use fs.existsSync to check if a file exists.
*/

// Example:
if (fs.existsSync('example.txt')) {
  console.log('File exists!');
} else {
  console.log('File does not exist.');
}

/*
5. DELETING Files
To delete a file, use fs.unlink or fs.unlinkSync.
*/

// Example (Asynchronous):
fs.unlink('example.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File deleted successfully!');
});
