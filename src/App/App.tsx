import { useSelector } from "react-redux";
import Board from "../components/Board";
import RestartBtn from "../components/RestartBtn";
import TurnIndicator from "../components/TurnIndicator";
import { GlobalStyle, Heading, Wrapper } from "./App.styles";
import useCheckResult from "./useCheckWinner";

function App() {
  
  useCheckResult();
  const { winner } = useSelector(({ game }: IStore) => game);

  return (
    <Wrapper>
      <GlobalStyle />
      <Heading>Tic tac toe</Heading>
      <TurnIndicator />
      <Board />
      {winner && <RestartBtn />}
    </Wrapper>
  );
}

export default App;
