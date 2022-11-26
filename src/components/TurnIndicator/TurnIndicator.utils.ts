export const displayGameInformation = (
  player1Turn: boolean,
  result: string
) => {
  if (result) {
    return result;
  } else {
    if (player1Turn) {
      return "Player 1's turn";
    } else {
      return "Player 2's turn";
    }
  }
};
