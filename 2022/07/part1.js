import { data, buildTrie, sumDirsLTE } from './helpers.js';

const trie = buildTrie(data);

const sum = sumDirsLTE(trie, 100000);

console.log(sum);
