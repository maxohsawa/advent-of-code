import { tests } from './data.js';

// for (const test of tests) {
//   console.log(findMarker(test), test);
// }

// mkSize is the size of the marker
export function findMarker(input, mkSize) {
  const cursor = input.slice(0, mkSize).split('');
  for (let i = mkSize; i < input.length; i++) {
    const cursorSet = new Set(cursor);

    if (cursorSet.size === mkSize) {
      return i;
    } else {
      cursor.shift();
      cursor.push(input[i]);
    }
  }
}
