import { useSelector } from "react-redux";
import Board from "../components/Board";
import RestartBtn from "../components/RestartBtn";
import TurnIndicator from "../components/TurnIndicator";
import { GlobalStyle, Heading, Wrapper } from "./App.styles";
import useCheckResult from "./useCheckResult";

function App() {
  useCheckResult();
  const { result } = useSelector(({ game }: IStore) => game);

  return (
    <Wrapper>
      <GlobalStyle />
      <Heading>Tic tac toe</Heading>
      <TurnIndicator />
      <Board />
      {result && <RestartBtn />}
    </Wrapper>
  );
}

export default App;
