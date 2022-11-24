import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  player1Turn: true,
  player1Squares: [] as number[],
  player2Squares: [] as number[],
  gameOn: true,
  winner: "",
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
    setWinner: (state, action) => {
      state.gameOn = false;
      state.winner = action.payload;
    },
    restartGame: () => initialState,
  },
});

export const { chooseSquare, setWinner, restartGame } = gameSlice.actions;

export default gameSlice.reducer;
