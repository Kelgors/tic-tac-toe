export type TicTacToeValue = 'o' | 'x';
export type Playground = (TicTacToeValue | null)[];
export type Difficulty = 'easy' | 'medium' | 'hard';

export class GameState {
  public mode: 1 | 2 | null = null;
  public difficulty: Difficulty | null = null;
  public winner: TicTacToeValue | null = null;
  public playground: Playground = [];

  reset() {
    this.mode = null;
    this.difficulty = null;
    this.winner = null;
  }

  restart() {
    this.playground = Array.from(Array(9).keys()).map(() => null);
    this.winner = null;
  }

  isReady() {
    return this.mode === 2 || (this.mode === 1 && !!this.difficulty);
  }

  hasNextMove(): boolean {
    return this.playground.filter((item) => !item).length > 0;
  }

  getEmptySpaceIndexes(): number[] {
    return this.playground
      .map((item, index) => (item ? null : index))
      .filter((item): item is number => typeof item === 'number');
  }

  getWinner(): TicTacToeValue | null {
    if (this.isWinning(this.playground, 'x')) {
      return 'x';
    }
    if (this.isWinning(this.playground, 'o')) {
      return 'o';
    }
    return null;
  }

  isWinning(playground: Playground, player: TicTacToeValue): boolean {
    return (
      (playground[0] === player && playground[1] === player && playground[2] === player) ||
      (playground[3] === player && playground[4] === player && playground[5] === player) ||
      (playground[6] === player && playground[7] === player && playground[8] === player) ||
      (playground[0] === player && playground[3] === player && playground[6] === player) ||
      (playground[1] === player && playground[4] === player && playground[7] === player) ||
      (playground[2] === player && playground[5] === player && playground[8] === player) ||
      (playground[0] === player && playground[4] === player && playground[8] === player) ||
      (playground[2] === player && playground[4] === player && playground[6] === player)
    );
  }
}

export const gameState = new GameState();
