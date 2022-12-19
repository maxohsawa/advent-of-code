import { testData, data, countMultiKnotTailCover } from './helpers.js';

if (testData.length < 20) {
  const count = countMultiKnotTailCover(testData, 10);
  console.log(count);
}
