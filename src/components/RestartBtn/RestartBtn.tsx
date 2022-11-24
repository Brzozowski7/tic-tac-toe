import { useDispatch } from "react-redux";
import { restartGame } from "../../redux/gameSlice/gameSlice";
import { Wrapper } from "./RestartBtn.styles";

export default function RestartBtn() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(restartGame());
  };

  return <Wrapper onClick={handleClick}>Restart</Wrapper>;
}
