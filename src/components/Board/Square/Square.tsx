import { useDispatch, useSelector } from "react-redux";
import { chooseSquare } from "../../../redux/gameSlice/gameSlice";
import { Wrapper, PlayerMark } from "./Square.styles";
import CircleSvg from "../../../images/circle.svg";
import CrossSvg from "../../../images/cross.svg";

interface SquareProps {
  index: number;
}

export default function Square({ index }: SquareProps) {
  const dispatch = useDispatch();

  const { player1Squares, player2Squares, gameOn } = useSelector(
    ({ game }: IStore) => game
  );

  const handleClick = () => {
    if (
      !player1Squares.includes(index) &&
      !player2Squares.includes(index) &&
      gameOn
    )
      dispatch(chooseSquare(index));
  };

  return (
    <Wrapper onClick={handleClick}>
      {player1Squares.includes(index) && (
        <PlayerMark src={CircleSvg} alt="circle" />
      )}
      {player2Squares.includes(index) && (
        <PlayerMark src={CrossSvg} alt="cross" />
      )}
    </Wrapper>
  );
}
