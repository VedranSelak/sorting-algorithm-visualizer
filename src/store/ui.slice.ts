import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface UiState {
  isButtonClicked: boolean;
  errorList: string[];
}

const initialState: UiState = {
  isButtonClicked: false,
  errorList: [],
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
    addError: (state, action: { payload: { errorMessage: string } }) => {
      state.errorList.push(action.payload.errorMessage);
    },
    deleteError: (state, action: { payload: { errorIndex: number } }) => {
      state.errorList.splice(action.payload.errorIndex, 1);
    },
  },
});

export const { setIsButtonClicked, addError, deleteError } = uiSlice.actions;

export const selectIsButtonClicked = (state: RootState) =>
  state.ui.isButtonClicked;
export const selectErrorList = (state: RootState) => state.ui.errorList;

export default uiSlice.reducer;
