import { data, buildTrie, getDirSizeMap } from './helpers.js';

const totalDiskSpace = 70000000;
const diskSpaceNeeded = 30000000;

const trie = buildTrie(data);

const { dirSizeList, totalUsedSpace } = getDirSizeMap(trie);

console.log('total disk space: ', totalDiskSpace);
console.log('total used space: ', totalUsedSpace);
console.log('disk space needed:', diskSpaceNeeded);

const additionalSpaceRequired =
  diskSpaceNeeded - (totalDiskSpace - totalUsedSpace);

console.log('additional space: ', additionalSpaceRequired);

const sortedValues = dirSizeList.sort((a, b) => a - b);

for (let i = 0; i < sortedValues.length; i++) {
  const directorySize = sortedValues[i];
  if (directorySize >= additionalSpaceRequired) {
    console.log('size of selection:', directorySize);
    break;
  }
}
