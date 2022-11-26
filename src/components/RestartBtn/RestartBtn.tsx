import { useDispatch } from "react-redux";
import { restartGame } from "../../redux/gameSlice/gameSlice";
import { StyledBtn } from "./RestartBtn.styles";

export default function RestartBtn() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(restartGame());
  };

  return <StyledBtn onClick={handleClick}>Restart</StyledBtn>;
}
