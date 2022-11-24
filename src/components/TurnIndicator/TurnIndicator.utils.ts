export const displayGameInformation = (player1Turn: boolean, winner: string) => {
  if (winner) {
    return winner;
  } else {
    if (player1Turn) {
      return "Player 1's turn";
    } else {
      return "Player 2's turn";
    }
  }
};
