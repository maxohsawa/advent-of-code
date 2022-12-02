import data from './data.js';

const splitData = data.split('\n');
let max = 0;

for (let i = 0; i < splitData.length; i++) {
  let sum = 0;
  while (splitData[i]) {
    sum += parseInt(splitData[i]);
    i++;
  }
  if (sum > max) max = sum;
}

console.log(max);
