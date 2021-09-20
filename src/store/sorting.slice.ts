import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface SortingState {
  arraySize: number;
  selectedAlgorithm: string;
}

const initialState: SortingState = {
  arraySize: 200,
  selectedAlgorithm: "",
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
  },
});

export const { setArraySize, selectAlgorithm } = sortingSlice.actions;

export const selectCurrentArraySize = (state: RootState) =>
  state.sorting.arraySize;
export const selectCurrentAlgorithm = (state: RootState) =>
  state.sorting.selectedAlgorithm;

export default sortingSlice.reducer;
