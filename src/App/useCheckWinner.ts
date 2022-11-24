import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWinner } from "../redux/gameSlice/gameSlice";
import { winningCombinations } from "./App.const";
import { compareArrays } from "./App.utils";

const useCheckResult = () => {
  const { player1Squares, player2Squares, winner } = useSelector(
    ({ game }: IStore) => game
  );
  const dispatch = useDispatch();

  const checkPlayer1Squares = () => {
    if (compareArrays(player1Squares, winningCombinations)) {
      dispatch(setWinner("Player 1 won"));
    } else if (player1Squares.length === 5 && winner === "") {
      dispatch(setWinner("Draw"));
    }
  };

  const checkPlayer2Squares = () => {
    if (compareArrays(player2Squares, winningCombinations)) {
      dispatch(setWinner("Player 2 won"));
    }
  };

  useEffect(() => {
    checkPlayer1Squares();
  }, [player1Squares]);

  useEffect(() => {
    checkPlayer2Squares();
  }, [player2Squares]);
};

export default useCheckResult;
