import { swap } from "./swap.helper";

export const shellSort = (arrayToSort: number[]) => {
  const animations: number[][] = [];
  let h = 1;
  while (h < Math.floor(arrayToSort.length / 3)) {
    h = 3 * h + 1;
  }

  while (h >= 1) {
    for (let i = h; i < arrayToSort.length; i++) {
      for (let j = i; j >= h; j -= h) {
        if (arrayToSort[j] < arrayToSort[j - h]) {
          swap(arrayToSort, j, j - h);
          animations.push([j, j - h]);
          animations.push([j, j - h]);
        } else {
          break;
        }
      }
    }
    h = Math.floor(h / 3);
  }
  return animations;
};
