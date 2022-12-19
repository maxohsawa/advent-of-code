import {
  data,
  convertDataToArrays,
  findGreatestScenicScore,
} from './helpers.js';

const trees = convertDataToArrays(data);

const max = findGreatestScenicScore(trees);

console.log(max);
