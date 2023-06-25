import { Playground, TicTacToeValue, gameState } from '../GameState';
import { IOpponent } from '../IOpponent';

type MoveItem = {
  index: number;
  score: number;
};

const PLAYER_AI = 'o';
const PLAYER_HUMAN = 'x';

export class HardOpponent implements IOpponent {
  private fc: number = 0;

  getEmptySpaceIndexes(board: Playground): number[] {
    return board.map((item, index) => (item ? null : index)).filter((item): item is number => typeof item === 'number');
  }

  minimax(newBoard: Playground, player: TicTacToeValue): MoveItem {
    //add one to function calls
    this.fc += 1;

    //available spots
    const availSpots = this.getEmptySpaceIndexes(newBoard);

    // checks for the terminal states such as win, lose, and tie and returning a value accordingly
    if (gameState.isWinning(newBoard, PLAYER_HUMAN)) {
      return { score: -10, index: -1 };
    } else if (gameState.isWinning(newBoard, PLAYER_AI)) {
      return { score: 10, index: -1 };
    } else if (availSpots.length === 0) {
      return { score: 0, index: -1 };
    }

    // an array to collect all the objects
    const moves = [];

    // loop through available spots
    for (let i = 0; i < availSpots.length; i++) {
      //create an object for each and store the index of that spot that was stored as a number in the object's index key
      const move: MoveItem = { index: -1, score: 0 };
      move.index = availSpots[i];

      // set the empty spot to the current player
      newBoard[availSpots[i]] = player;

      //if collect the score resulted from calling minimax on the opponent of the current player
      if (player === PLAYER_AI) {
        move.score = this.minimax(newBoard.slice(0), PLAYER_HUMAN).score;
      } else {
        move.score = this.minimax(newBoard.slice(0), PLAYER_AI).score;
      }

      //reset the spot to empty
      newBoard[availSpots[i]] = null;

      // push the object to the array
      moves.push(move);
    }

    // if it is the computer's turn loop over the moves and choose the move with the highest score
    let bestMove;
    if (player === PLAYER_AI) {
      let bestScore = -10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      // else loop over the moves and choose the move with the lowest score
      let bestScore = 10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }

    if (typeof bestMove === 'undefined') {
      throw new Error('Hard: Unable to find a best move');
    }

    // return the chosen move (object) from the array to the higher depth
    return moves[bestMove];
  }

  getNextMove(playground: Playground, player: TicTacToeValue): Playground {
    const bestSpot = this.minimax(playground.slice(0), player);
    const newPlayground = playground.slice(0);
    newPlayground[bestSpot.index] = player;
    return newPlayground;
  }
}
