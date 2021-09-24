import { swap } from "./swap.helper";

export const quickSort = (arrayToSort: number[]) => {
  const animations: number[][] = [];
  sort(arrayToSort, 0, arrayToSort.length - 1, animations);
  return animations;
};

const sort = (
  arrayToSort: number[],
  low: number,
  high: number,
  animations: number[][]
) => {
  if (high <= low) return;
  let j = partition(arrayToSort, low, high, animations);
  sort(arrayToSort, low, j - 1, animations);
  sort(arrayToSort, j + 1, high, animations);
};

const partition = (
  arrayToSort: number[],
  low: number,
  high: number,
  animations: number[][]
) => {
  let i = low;
  let j = high + 1;
  while (true) {
    while (arrayToSort[++i] < arrayToSort[low]) {
      if (i === high) break;
    }
    while (arrayToSort[low] < arrayToSort[--j]) {
      if (j === low) break;
    }
    if (i >= j) break;
    swap(arrayToSort, i, j);
    animations.push([i, j]);
    animations.push([i, j]);
  }
  swap(arrayToSort, low, j);
  animations.push([low, j]);
  animations.push([low, j]);
  return j;
};
