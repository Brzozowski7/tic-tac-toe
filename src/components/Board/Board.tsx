import { Wrapper } from "./Board.styles";
import Square from "./Square";
import { squaresQuantity } from "./Board.const";

export default function Board() {
  return (
    <Wrapper>
      {[...Array(squaresQuantity)].map((e, i) => (
        <Square key={i} index={i} />
      ))}
    </Wrapper>
  );
}
