import { createSlice } from '@reduxjs/toolkit';

const boardSize = 3; //This is the number of cels for side in the square board

const resetBoard = (boardArr) => {
  boardArr.forEach((col) => col.fill(0));
};

const createBoard = () => {
  let boardArr = new Array(boardSize);
  boardArr.fill(new Array(boardSize));
  resetBoard(boardArr);
  return boardArr;
};

const initialState = {
  board: createBoard(),
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    changeCell: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeCell } = boardSlice.actions;

export default boardSlice.reducer;
