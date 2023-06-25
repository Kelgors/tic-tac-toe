import { Playground, TicTacToeValue } from '../GameState';
import { IOpponent } from '../IOpponent';
import { EasyOpponent } from './easy';
import { HardOpponent } from './hard';

export class MediumOpponent implements IOpponent {
  private easyMode = new EasyOpponent();
  private hardMode = new HardOpponent();

  getNextMove(playground: Playground, player: TicTacToeValue): Playground {
    if (Math.random() > 0.5) {
      return this.easyMode.getNextMove(playground, player);
    }
    return this.hardMode.getNextMove(playground, player);
  }
}
