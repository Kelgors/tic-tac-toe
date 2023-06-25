import { Playground, TicTacToeValue } from './GameState';

export interface IOpponent {
  getNextMove(playground: Playground, player: TicTacToeValue): Playground;
}
