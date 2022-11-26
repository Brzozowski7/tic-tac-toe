import { useSelector } from "react-redux";
import { Wrapper } from "./TurnIndicator.styles";
import { displayGameInformation } from "./TurnIndicator.utils";

export default function TurnIndicator() {
  const { player1Turn, result } = useSelector(({ game }: IStore) => game);

  return <Wrapper>{displayGameInformation(player1Turn, result)}</Wrapper>;
}
