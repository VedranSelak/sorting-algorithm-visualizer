export const swap = (arrayToSwap: number[], i: number, j: number) => {
  let temp = arrayToSwap[i];
  arrayToSwap[i] = arrayToSwap[j];
  arrayToSwap[j] = temp;
};
