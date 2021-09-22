import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface SortingState {
  arraySize: number;
  selectedAlgorithm: string;
  currentArray: number[];
  sortingSpeed: number;
}

const initialState: SortingState = {
  arraySize: 200,
  selectedAlgorithm: "",
  currentArray: [],
  sortingSpeed: 5,
};

export const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    setArraySize: (state, action: { payload: { arraySize: number } }) => {
      state.arraySize = action.payload.arraySize;
    },
    selectAlgorithm: (
      state,
      action: { payload: { selectedAlgorithm: string } }
    ) => {
      state.selectedAlgorithm = action.payload.selectedAlgorithm;
    },
    setCurrentArray: (
      state,
      action: { payload: { currentArray: number[] } }
    ) => {
      state.currentArray = action.payload.currentArray;
    },
    swapElements: (state, action: { payload: { i: number; j: number } }) => {
      const temp = state.currentArray[action.payload.i];
      state.currentArray[action.payload.i] =
        state.currentArray[action.payload.j];
      state.currentArray[action.payload.j] = temp;
    },
    setSortingSpeed: (state, action: { payload: { sortingSpeed: number } }) => {
      state.sortingSpeed = action.payload.sortingSpeed;
    },
  },
});

export const {
  setArraySize,
  selectAlgorithm,
  setCurrentArray,
  swapElements,
  setSortingSpeed,
} = sortingSlice.actions;

export const selectCurrentArraySize = (state: RootState) =>
  state.sorting.arraySize;
export const selectCurrentAlgorithm = (state: RootState) =>
  state.sorting.selectedAlgorithm;
export const selectCurrentArray = (state: RootState) =>
  state.sorting.currentArray;
export const selectSortingSpeed = (state: RootState) =>
  state.sorting.sortingSpeed;

export default sortingSlice.reducer;
