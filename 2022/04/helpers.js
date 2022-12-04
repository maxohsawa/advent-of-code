import data from './data.js';

export const splitData = data.split('\n');

export function parse(line) {
  if (!line) return;
  const [pair1, pair2] = line.split(',');
  const [leftBound1, rightBound1] = pair1.split('-');
  const [leftBound2, rightBound2] = pair2.split('-');

  return [
    parseInt(leftBound1),
    parseInt(rightBound1),
    parseInt(leftBound2),
    parseInt(rightBound2),
  ];
}

export function isContainsOneAnother([
  leftBound1,
  rightBound1,
  leftBound2,
  rightBound2,
]) {
  // first contained within the second
  if (leftBound1 >= leftBound2 && rightBound1 <= rightBound2) return true;
  // second contained within the first
  if (leftBound2 >= leftBound1 && rightBound2 <= rightBound1) return true;

  return false;
}

export function isOverlap([left1, right1, left2, right2]) {
  function isNumberBetweenOtherTwo(num, left, right) {
    return num >= left && num <= right;
  }

  if (isNumberBetweenOtherTwo(left1, left2, right2)) return true;
  if (isNumberBetweenOtherTwo(right1, left2, right2)) return true;
  if (isNumberBetweenOtherTwo(left2, left1, right1)) return true;
  if (isNumberBetweenOtherTwo(right2, left1, right1)) return true;

  return false;
}
