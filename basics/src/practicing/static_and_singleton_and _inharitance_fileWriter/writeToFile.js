const fs = require('node:fs/promises');

async function example() {
  try {
    const content = 'Some content!';
    await fs.writeFile('./test.txt', content);
  } catch (err) {
    console.log(err);
  }
}

console.log(import.meta.url);

example();

