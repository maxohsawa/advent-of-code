import data from './data.js';

const maxes = [0, 0, 0];

const innit = data.split('\n');

for (let i = 0; i < innit.length; i++) {
  let sum = 0;

  while (innit[i]) {
    sum += parseInt(innit[i]);
    i++;
  }

  if (sum > maxes[0]) {
    maxes[2] = maxes[1];
    maxes[1] = maxes[0];
    maxes[0] = sum;
  } else if (sum > maxes[1]) {
    maxes[2] = maxes[1];
    maxes[1] = sum;
  } else if (sum > maxes[0]) {
    maxes[0] = sum;
  }
}

console.log(maxes[0] + maxes[1] + maxes[2]);
