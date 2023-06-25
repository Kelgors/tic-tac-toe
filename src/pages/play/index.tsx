import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { wait } from '../../components/wait';
import { Playground, TicTacToeValue, gameState } from '../../game/GameState';
import { IOpponent } from '../../game/IOpponent';
import { EasyOpponent } from '../../game/ai/easy';
import { HardOpponent } from '../../game/ai/hard';
import { MediumOpponent } from '../../game/ai/medium';
import { OnCellClickedEvent, PlayGridCell } from './PlayGridCell';

export function PlayPage() {
  const [isLoading, setLoading] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState<TicTacToeValue>('x');
  const [playground, setPlayground] = useState<Playground>(() => Array.from(Array(9).keys()).map(() => null));
  const navigate = useNavigate();

  useEffect(function () {
    if (!gameState.isReady()) {
      navigate('/');
      return;
    }
    gameState.restart();
  }, []);

  // intialize opponent adapter
  const opponent = useMemo<IOpponent | null>(function () {
    if (gameState.mode === 2) return null;
    if (gameState.difficulty === 'hard') {
      return new HardOpponent();
    }
    if (gameState.difficulty === 'medium') {
      return new MediumOpponent();
    }
    return new EasyOpponent();
  }, []);

  const changePlayer = useCallback(function () {
    setCurrentPlayer((currentPlayer) => {
      return currentPlayer === 'x' ? 'o' : 'x';
    });
  }, []);

  const onCellClicked = useCallback(
    function (event: OnCellClickedEvent) {
      // Ignore user actions when opponent is making its move
      if (isLoading) return;

      setPlayground((playground) => {
        const newOne = playground.slice(0);
        newOne[event.position - 1] = currentPlayer;
        return newOne;
      });
      changePlayer();
    },
    [isLoading, currentPlayer, changePlayer]
  );

  useEffect(
    function () {
      if (currentPlayer !== 'o' || !opponent) return;
      setLoading(true);
      wait(500 + Math.floor(Math.random() * 500)).then(function () {
        setPlayground((playground) => opponent.getNextMove(playground, 'o'));
        setLoading(false);
        changePlayer();
      });
    },
    [currentPlayer]
  );

  useEffect(
    function () {
      gameState.playground = playground;
      const winner = gameState.getWinner();
      if (winner || !gameState.hasNextMove()) {
        gameState.winner = winner;
        navigate('/end');
      }
    },
    [playground]
  );

  return (
    <Container maxWidth="sm" sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
      <Grid container columns={3}>
        {playground.map(function (value, index) {
          return <PlayGridCell key={index} position={index + 1} content={value} onClick={onCellClicked} />;
        })}
        <Box position="absolute" top={0} left={0} right={0} width="100%">
          {isLoading ? <LinearProgress /> : null}
        </Box>
      </Grid>
    </Container>
  );
}
