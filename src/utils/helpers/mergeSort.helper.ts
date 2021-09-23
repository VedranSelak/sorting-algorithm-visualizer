export const mergeSort = (arrayToSort: number[]) => {
  const aux: number[] = new Array(arrayToSort.length);
  const animations: number[][] = [];
  sort(arrayToSort, aux, animations, 0, arrayToSort.length - 1);
  return animations;
};

const sort = (
  arrayToSort: number[],
  aux: number[],
  animations: number[][],
  low: number,
  high: number
) => {
  if (high <= low) {
    return;
  }

  const mid = Math.floor((high + low) / 2);
  sort(arrayToSort, aux, animations, low, mid);
  sort(arrayToSort, aux, animations, mid + 1, high);
  merge(arrayToSort, aux, animations, low, mid, high);
};

const merge = (
  arrayToSort: number[],
  aux: number[],
  animations: number[][],
  low: number,
  mid: number,
  high: number
) => {
  for (let k = low; k <= high; k++) {
    aux[k] = arrayToSort[k];
  }

  let i = low;
  let j = mid + 1;
  for (let k = low; k <= high; k++) {
    if (i > mid) {
      animations.push([k, j]);
      animations.push([k, aux[j], j]);
      arrayToSort[k] = aux[j++];
    } else if (j > high) {
      animations.push([k, i]);
      animations.push([k, aux[i], i]);
      arrayToSort[k] = aux[i++];
    } else if (aux[j] < aux[i]) {
      animations.push([k, j]);
      animations.push([k, aux[j], j]);
      arrayToSort[k] = aux[j++];
    } else {
      animations.push([k, i]);
      animations.push([k, aux[i], i]);
      arrayToSort[k] = aux[i++];
    }
  }
};
