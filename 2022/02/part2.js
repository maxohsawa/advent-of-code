import { data, points, conversion2, outcomes2 } from './helpers.js';

let sum = 0;

for (const line of data) {
  if (!line) continue;
  const [opponentHand, outcomeCode] = line.split(' ');
  const op = conversion2[opponentHand];
  const outcome = conversion2[outcomeCode];
  const myHand = outcomes2[op][outcome];

  sum += points[outcome] + points[myHand];
}

console.log(sum);
