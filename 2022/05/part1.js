import { processedData } from './helpers.js';

const { state, instructions } = processedData;

for (const [move, from, to] of instructions) {
  for (let i = 0; i < move; i++) {
    const crate = state[from].pop();
    state[to].push(crate);
  }
}

let answer = '';

for (let i = 0; i < state.length; i++) {
  if (state[i].length) answer += state[i].pop();
}

console.log(answer);
