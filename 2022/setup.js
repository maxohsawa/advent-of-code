const fs = require('fs');

if (process.argv.length !== 3) throw new Error('incorrect number of arguments');

const dirname = process.argv[2];

if (!fs.existsSync(dirname)) {
  fs.mkdirSync(dirname);
  console.log(`directory ${dirname} created`);
}

fs.writeFileSync(
  `${dirname}/package.json`,
  `{
  "name": "${dirname}",
  "version": "1.0.0",
  "description": "",
  "main": "setup.js",
  "type": "module",
  "scripts": {},
  "keywords": [],
  "author": "",
  "license": "ISC"
}
`
);
console.log('package.json created, type module');

const jsFiles = ['data.js', 'helpers.js', 'part1.js', 'part2.js'];

for (const file of jsFiles) {
  fs.openSync(`${dirname}/${file}`, 'wx');
  console.log(`created ${file}`);
}

console.log('complete!');
