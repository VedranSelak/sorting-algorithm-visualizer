import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface UiState {
  isButtonClicked: boolean;
  toastList: {
    type: string;
    message: string;
  }[];
}

const initialState: UiState = {
  isButtonClicked: false,
  toastList: [],
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
    addToast: (
      state,
      action: { payload: { type: string; message: string } }
    ) => {
      state.toastList.push(action.payload);
    },
    deleteToast: (state, action: { payload: { toastIndex: number } }) => {
      state.toastList.splice(action.payload.toastIndex, 1);
    },
  },
});

export const { setIsButtonClicked, addToast, deleteToast } = uiSlice.actions;

export const selectIsButtonClicked = (state: RootState) =>
  state.ui.isButtonClicked;
export const selectToastList = (state: RootState) => state.ui.toastList;

export default uiSlice.reducer;
