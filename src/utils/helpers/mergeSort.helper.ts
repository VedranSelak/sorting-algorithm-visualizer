export const mergeSort = (arrayToSort: number[]) => {
  const aux: number[] = new Array(arrayToSort.length);
  sort(arrayToSort, aux, 0, arrayToSort.length - 1);
};

const sort = (
  arrayToSort: number[],
  aux: number[],
  low: number,
  high: number
) => {
  if (high <= low) {
    return;
  }

  const mid = Math.floor((high + low) / 2);
  sort(arrayToSort, aux, low, mid);
  sort(arrayToSort, aux, mid + 1, high);
  merge(arrayToSort, aux, low, mid, high);
};

const merge = (
  arrayToSort: number[],
  aux: number[],
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
      arrayToSort[k] = aux[j++];
    } else if (j > high) {
      arrayToSort[k] = aux[i++];
    } else if (aux[j] < aux[i]) {
      arrayToSort[k] = aux[j++];
    } else {
      arrayToSort[k] = aux[i++];
    }
  }
};
