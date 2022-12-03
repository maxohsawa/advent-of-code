import rawData from './data.js';

export const data = rawData.split('\n');

export const points = {
  win: 6,
  tie: 3,
  loss: 0,
  rock: 1,
  paper: 2,
  scissors: 3,
};

export const conversion = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
  X: 'rock',
  Y: 'paper',
  Z: 'scissors',
};

export const outcomes = {
  rock: {
    rock: 'tie',
    paper: 'win',
    scissors: 'loss',
  },
  paper: {
    rock: 'loss',
    paper: 'tie',
    scissors: 'win',
  },
  scissors: {
    rock: 'win',
    paper: 'loss',
    scissors: 'tie',
  },
};

export const conversion2 = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
  X: 'loss',
  Y: 'tie',
  Z: 'win',
};

export const outcomes2 = {
  rock: {
    loss: 'scissors',
    tie: 'rock',
    win: 'paper',
  },
  paper: {
    loss: 'rock',
    tie: 'paper',
    win: 'scissors',
  },
  scissors: {
    loss: 'paper',
    tie: 'scissors',
    win: 'rock',
  },
};
