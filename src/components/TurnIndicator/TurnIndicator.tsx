import { useSelector } from "react-redux";
import { Wrapper } from "./TurnIndicator.styles";
import { displayGameInformation } from "./TurnIndicator.utils";

export default function TurnIndicator() {
  const { player1Turn, winner } = useSelector(({ game }: IStore) => game);

  return <Wrapper>{displayGameInformation(player1Turn, winner)}</Wrapper>;
}
