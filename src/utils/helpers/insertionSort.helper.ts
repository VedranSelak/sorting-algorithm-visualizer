import { swap } from "./swap.helper";

export const insertionSort = (arrayToSort: number[]) => {
  const animations: number[][] = [];
  for (let i = 0; i < arrayToSort.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arrayToSort[j] < arrayToSort[j - 1]) {
        swap(arrayToSort, j, j - 1);
        animations.push([j, j - 1]);
        animations.push([j, j - 1]);
      } else {
        break;
      }
    }
  }
  return animations;
};
