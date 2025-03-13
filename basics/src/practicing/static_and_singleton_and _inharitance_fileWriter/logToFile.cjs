const fs = require('fs');
const filePath = 'example2.txt';
const content = 'Hello, this is some content again and again!';

function writeToFile () {
  try {
    fs.writeFileSync(filePath, content);
    console.log('File written successfully.');
  } catch (error) {
    console.error('Error writing to file:', error);
  }
}

module.exports = { writeToFile };
