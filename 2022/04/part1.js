import { splitData, parse, isContainsOneAnother } from './helpers.js';

let count = 0;

for (const line of splitData) {
  const bounds = parse(line);
  if (!bounds) continue;
  if (isContainsOneAnother(bounds)) count++;
}

console.log(count);
