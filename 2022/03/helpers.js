import data from './data.js';

export const splitData = data.split('\n');

export function findMatch(comp1, comp2) {
  const set1 = new Set(comp1.split(''));
  for (const char of comp2) {
    if (set1.has(char)) return char;
  }
}

export function convertor(char) {
  const code = char.charCodeAt(0);
  if (code >= 97 && code <= 122) {
    return code - 96;
  } else if (code >= 65 && code <= 90) {
    return code - 38;
  }
}

export function findMatch2(knap1, knap2, knap3) {
  const set1 = new Set(knap1);
  const set2 = new Set(knap2);

  for (const char of knap3) {
    if (set1.has(char) && set2.has(char)) return char;
  }
}
