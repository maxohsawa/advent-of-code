import rawData from './data.js';

export const data = rawData.split('\n');

class Node {
  constructor(dirname, parent) {
    this.dirname = dirname;
    this.fileSum = 0;
    this.dirSum = 0;
    this.dirs = {};
    this.parent = parent;
  }
}

export function buildTrie(data) {
  const root = new Node('/');
  let cursor = root;

  for (let i = 1; i < data.length; i++) {
    // console.log(root);
    // console.log(data[i]);
    const line = data[i];
    const words = line.split(' ');

    // COMMANDS
    if (words[0] === '$') {
      // LS
      if (words[1] === 'ls') {
        i++;
        // SCROLL UNTIL NEXT COMMAND
        while (i < data.length) {
          const listing = data[i].split(' ');
          if (listing[0] === '$') {
            i--;
            break;
          }
          // CREATE NEW NODE FOR NEW DIRECTORY
          if (listing[0] === 'dir') {
            cursor.dirs[listing[1]] = new Node(listing[1], cursor);
            // ADD FILE SIZE TO FILE SUM
          } else {
            cursor.fileSum += parseInt(listing[0]);
          }
          i++;
        }
        // CD
      } else if (words[1] === 'cd') {
        // ..
        if (words[2] === '..') {
          cursor = cursor.parent;
        } else {
          cursor = cursor.dirs[words[2]];
        }
      }
    }
  }
  return root;
}

export function sumDirsLTE(root, max) {
  let total = 0;

  function recurse(cursor) {
    let subtreeSum = 0;

    for (const child of Object.keys(cursor.dirs)) {
      subtreeSum += recurse(cursor.dirs[child]);
    }
    cursor.dirSum = subtreeSum + cursor.fileSum;

    if (cursor.dirSum <= max) {
      total += cursor.dirSum;
    }
    return cursor.dirSum || 0;
  }

  recurse(root);

  return total;
}

export function getDirSizeMap(root) {
  const dirSizeList = [];
  function recurse(cursor) {
    let subtreeSum = 0;

    for (const child of Object.keys(cursor.dirs)) {
      subtreeSum += recurse(cursor.dirs[child]);
    }

    cursor.dirSum = subtreeSum + cursor.fileSum;
    dirSizeList.push(cursor.dirSum);

    return cursor.dirSum || 0;
  }

  const totalUsedSpace = recurse(root);

  return {
    dirSizeList,
    totalUsedSpace,
  };
}
