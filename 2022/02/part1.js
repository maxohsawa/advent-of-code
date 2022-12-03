import { data, points, conversion, outcomes } from './helpers.js';

let sum = 0;

for (const line of data) {
  if (!line) continue;
  const [opponentHand, myHand] = line.split(' ');
  const op = conversion[opponentHand];
  const me = conversion[myHand];
  const outcome = outcomes[op][me];

  sum += points[outcome] + points[me];
}

console.log(sum);
