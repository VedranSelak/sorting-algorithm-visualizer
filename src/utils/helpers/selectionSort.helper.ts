import { swap } from "./swap.helper";

export const selectionSort = (arrayToSort: number[]) => {
  const animations: number[][] = [];
  for (let i = 0; i < arrayToSort.length; i++) {
    let min = i;
    for (let j = i + 1; j < arrayToSort.length; j++) {
      if (arrayToSort[j] < arrayToSort[min]) {
        min = j;
      }
    }
    swap(arrayToSort, i, min);
    animations.push([i, min]);
    animations.push([i, min]);
  }
  return animations;
};
