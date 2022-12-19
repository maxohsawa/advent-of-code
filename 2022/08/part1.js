import {
  data,
  convertDataToArrays,
  isVisible,
  countVisibleTrees,
} from './helpers.js';

import testData from './testData.js';

const trees = convertDataToArrays(data);
const count = countVisibleTrees(trees);

console.log(count);
