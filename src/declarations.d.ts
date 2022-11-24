interface IStore {
  game: {
    player1Turn: boolean;
    player1Squares: number[];
    player2Squares: number[];
    gameOn: boolean;
    winner: "Player 1 won" | "Player 2 won" | "Draw" | "";
  };
}
