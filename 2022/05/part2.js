import { processedData } from './helpers.js';

const { state, instructions } = processedData;

for (const [move, from, to] of instructions) {
  const newFrom = state[from].slice(0, state[from].length - move);
  state[to].push(...state[from].slice(state[from].length - move));
  state[from] = newFrom;
}

console.log(state);

let answer = '';

for (let i = 0; i < state.length; i++) {
  if (state[i].length) answer += state[i].pop();
}

console.log(answer);
