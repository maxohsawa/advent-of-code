import { splitData, parse, isOverlap } from './helpers.js';

let count = 0;

for (const line of splitData) {
  const bounds = parse(line);
  if (!bounds) continue;
  if (isOverlap(bounds)) count++;
}

console.log(count);
