import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface SortingState {
  arraySize: number;
}

const initialState: SortingState = {
  arraySize: 200,
};

export const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    setArraySize: (state, action: { payload: { arraySize: number } }) => {
      state.arraySize = action.payload.arraySize;
    },
  },
});

export const { setArraySize } = sortingSlice.actions;

export const selectCurrentArraySize = (state: RootState) =>
  state.sorting.arraySize;

export default sortingSlice.reducer;
