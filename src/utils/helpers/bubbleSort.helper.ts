import { swap } from "./swap.helper";

export const bubbleSort = (arrayToSort: number[]) => {
  const animations = [];
  for (let i = 0; i < arrayToSort.length - 1; i++) {
    for (let j = 0; j < arrayToSort.length - i - 1; j++) {
      if (arrayToSort[j] > arrayToSort[j + 1]) {
        swap(arrayToSort, j, j + 1);
        animations.push([j, j + 1]);
        animations.push([j, j + 1]);
      }
    }
  }
  return animations;
};
