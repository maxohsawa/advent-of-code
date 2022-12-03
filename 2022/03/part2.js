import { splitData, findMatch2, convertor } from './helpers.js';

let sum = 0;

for (let i = 0; i < splitData.length - 2; i += 3) {
  const knap1 = splitData[i];
  const knap2 = splitData[i + 1];
  const knap3 = splitData[i + 2];

  const match = findMatch2(knap1, knap2, knap3);

  sum += convertor(match);
}

console.log(sum);
