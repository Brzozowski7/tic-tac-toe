import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  player1Turn: true,
  player1Squares: [] as number[],
  player2Squares: [] as number[],
  gameOn: true,
  result: "",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    chooseSquare: (state, action) => {
      if (state.player1Turn) {
        state.player1Squares.push(action.payload);
        state.player1Turn = false;
      } else {
        state.player2Squares.push(action.payload);
        state.player1Turn = true;
      }
    },
    setResult: (state, action) => {
      state.gameOn = false;
      state.result = action.payload;
    },
    restartGame: () => initialState,
  },
});

export const { chooseSquare, setResult, restartGame } = gameSlice.actions;

export default gameSlice.reducer;
