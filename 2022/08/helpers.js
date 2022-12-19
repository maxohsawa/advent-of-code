import rawData from './data.js';

export const data = rawData.split('\n');

export function convertDataToArrays(data) {
  const trees = [];
  for (let y = 0; y < data.length; y++) {
    trees.push([]);
    const line = data[y];
    for (let x = 0; x < line.length; x++) {
      trees[y].push(parseInt(data[y][x]));
    }
  }
  return trees;
}

export function isVisible(originalY, originalX, trees) {
  const lastY = trees.length - 1;
  const lastX = trees[0].length - 1;
  if (
    originalY === 0 ||
    originalX === 0 ||
    originalY === lastY ||
    originalX === lastX
  ) {
    return true;
  }
  const target = trees[originalY][originalX];

  // check up
  let y = originalY;
  let x = originalX;
  while (y > 0) {
    y--;
    if (trees[y][x] >= target) break;
    if (y === 0) return true;
  }
  // check right
  y = originalY;
  x = originalX;
  while (x < lastX) {
    x++;
    if (trees[y][x] >= target) break;
    if (x === lastX) return true;
  }
  // check down
  y = originalY;
  x = originalX;
  while (y < lastY) {
    y++;
    if (trees[y][x] >= target) break;
    if (y === lastY) return true;
  }
  // check left
  y = originalY;
  x = originalX;
  while (x > 0) {
    x--;
    if (trees[y][x] >= target) break;
    if (x === 0) return true;
  }

  return false;
}

export function countVisibleTrees(trees) {
  let count = 0;
  for (let y = 0; y < trees.length; y++) {
    for (let x = 0; x < trees[0].length; x++) {
      if (isVisible(y, x, trees)) {
        count++;
      }
    }
  }
  return count;
}

export function calculateScenicScore(originalY, originalX, trees) {
  const lastY = trees.length - 1;
  const lastX = trees[0].length - 1;
  if (
    originalY === 0 ||
    originalX === 0 ||
    originalY === lastY ||
    originalX === lastX
  ) {
    return 0;
  }
  const target = trees[originalY][originalX];

  // check up
  let y = originalY;
  let x = originalX;
  let upScore = 0;
  while (y > 0) {
    y--;
    upScore++;
    if (trees[y][x] >= target) break;
  }
  // check right
  y = originalY;
  x = originalX;
  let rightScore = 0;
  while (x < lastX) {
    x++;
    rightScore++;
    if (trees[y][x] >= target) break;
  }
  // check down
  y = originalY;
  x = originalX;
  let downScore = 0;
  while (y < lastY) {
    y++;
    downScore++;
    if (trees[y][x] >= target) break;
  }
  // check left
  y = originalY;
  x = originalX;
  let leftScore = 0;
  while (x > 0) {
    x--;
    leftScore++;
    if (trees[y][x] >= target) break;
  }

  return upScore * rightScore * downScore * leftScore;
}

export function findGreatestScenicScore(trees) {
  let max = 0;
  for (let y = 0; y < trees.length; y++) {
    for (let x = 0; x < trees[0].length; x++) {
      const score = calculateScenicScore(y, x, trees);
      if (score > max) max = score;
    }
  }
  return max;
}
