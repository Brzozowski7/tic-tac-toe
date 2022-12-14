import { configureStore } from "@reduxjs/toolkit";
import gameSliceReducer from "./gameSlice/gameSlice";

const store = configureStore({
  reducer: {
    game: gameSliceReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
