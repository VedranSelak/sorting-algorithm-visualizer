import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface UiState {
  isButtonClicked: boolean;
}

const initialState: UiState = {
  isButtonClicked: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setIsButtonClicked: (
      state,
      action: { payload: { isButtonClicked: boolean } }
    ) => {
      state.isButtonClicked = action.payload.isButtonClicked;
    },
  },
});

export const { setIsButtonClicked } = uiSlice.actions;

export const selectIsButtonClicked = (state: RootState) =>
  state.ui.isButtonClicked;

export default uiSlice.reducer;
