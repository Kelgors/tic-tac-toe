import { Playground, TicTacToeValue } from '../GameState';
import { IOpponent } from '../IOpponent';

export class EasyOpponent implements IOpponent {
  getNextMove(playground: Playground, player: TicTacToeValue): Playground {
    const blankSpaces = playground.reduce<number[]>((acc, item, index) => {
      if (!item) acc.push(index);
      return acc;
    }, []);
    const index = blankSpaces[Math.floor(Math.random() * blankSpaces.length)];
    const newPlayground = playground.slice(0);
    newPlayground[index] = player;
    return newPlayground;
  }
}
