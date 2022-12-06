import data from './data.js';

let diagram = '';
const instructions = [];

for (const line of data.split('\n')) {
  if (!line) continue;

  const splitLine = line.split(' ');
  if (splitLine[0] !== 'move') diagram += line + '\n';
  else {
    instructions.push([
      parseInt(splitLine[1]),
      parseInt(splitLine[3]) - 1,
      parseInt(splitLine[5]) - 1,
    ]);
  }
}

const splitDiagram = diagram.split('\n');
const numberOfBins = splitDiagram[splitDiagram.length - 2]
  .trim()
  .split('   ').length;

const state = [];
for (let i = 0; i < 9; i++) {
  state.push([]);
}

// 1, 5, 9, 13, 17, 21, 25, 29, 33
for (const line of splitDiagram.slice(0, numberOfBins - 1)) {
  let binNum = 0;
  for (let i = 1; i < line.length; i += 4) {
    if (line[i] !== ' ') {
      state[binNum].unshift(line[i]);
    }

    binNum++;
  }
}

export const processedData = {
  state,
  instructions,
};
