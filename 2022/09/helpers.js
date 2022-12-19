import rawData from './data.js';
import rawTestData from './testData.js';

export const data = rawData.split('\n');
export const testData = rawTestData.split('\n');

export function countTailCovers(data) {
  let head = [0, 0];
  let tail = [0, 0];

  const tailCoverSet = new Set();
  tailCoverSet.add(`${tail[0]}, ${tail[1]}`);

  for (const line of data) {
    const move = line.split(' ');

    const direction = move[0];
    const steps = parseInt(move[1]);

    for (let s = 0; s < steps; s++) {
      // move head
      head = moveHead(direction, head);

      // check adjacency
      if (!isKnotAdjacent(head, tail)) {
        // adjust tail
        tail = adjustKnot(direction, ...head, ...tail);
        // add new tail pos to cover set
        tailCoverSet.add(`${tail[0]}, ${tail[1]}`);
      }
    }
  }

  return tailCoverSet.size;
}

function moveHead(direction, hx, hy) {
  switch (direction) {
    case 'U':
      return [hx, hy - 1];
    case 'R':
      return [hx + 1, hy];
    case 'D':
      return [hx, hy + 1];
    case 'L':
      return [hx - 1, hy];
  }
}

function isKnotAdjacent(hx, hy, tx, ty) {
  if (Math.abs(hx - tx) <= 1 && Math.abs(hy - ty) <= 1) return true;
  else return false;
}

function adjustKnot(direction, hx, hy, tx, ty) {
  switch (direction) {
    case 'U':
      return [tx, ty - 1];
    case 'R':
      return [tx + 1, ty];
    case 'D':
      return [tx, ty + 1];
    case 'L':
      return [tx - 1, ty];
  }
}

export function countMultiKnotTailCover(data, numKnots) {
  const knots = [];
  for (let i = 0; i < numKnots; i++) {
    knots.push([0, 0]);
  }

  const tailCoverSet = new Set();
  tailCoverSet.add(`0,0`);

  // for (const line of data) {
  //   const move = line.split(' ');
  for (let i = 0; i < data.length; i++) {
    console.log(i, '************************');
    const move = data[i].split(' ');
    const direction = move[0];
    const steps = parseInt(move[1]);

    for (let s = 0; s < steps; s++) {
      console.log('before step', direction, s + 1, 'of', steps);
      console.log(knots);
      // move head
      let prevLoc = knots[0];
      knots[0] = moveHead(direction, ...knots[0]);
      // for each intermediate knot
      for (let k = 1; k < knots.length; k++) {
        console.log(k, ': looking at', knots[k - 1], 'and', knots[k]);
        if (!isKnotAdjacent(...knots[k - 1], ...knots[k])) {
          // adjust next knots knot
          console.log(knots[k - 1], 'is not adjacent to', knots[k]);
          console.log(direction, ': knots[k] before adjustment', knots[k]);
          // knots[k] = adjustKnot(direction, ...knots[k - 1], ...knots[k]);
          let temp = knots[k];
          knots[k] = [...prevLoc];
          prevLoc = temp;
          console.log('knots[k] after adjustment', knots[k]);
          if (k === knots.length - 1) {
            tailCoverSet.add(`${knots[k][0]},${knots[k][1]}`);
          }
        }
      }
      console.log('after step', direction, s + 1, 'of', steps);
      // console.log(knots);
    }
  }
  return tailCoverSet.size;
}
