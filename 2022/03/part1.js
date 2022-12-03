import { splitData, findMatch, convertor } from './helpers.js';

let sum = 0;

for (const line of splitData) {
  if (!line) continue;
  const compartment1 = line.slice(0, line.length / 2);
  const compartment2 = line.slice(line.length / 2);

  const match = findMatch(compartment1, compartment2);

  sum += convertor(match);
}

console.log(sum);
