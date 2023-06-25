import Stack from '@mui/material/Stack';
import { useCallback } from 'react';
import { Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AppContainer } from '../../components/AppContainer';
import { AppTitle } from '../../components/AppTitle';
import { Button } from '../../components/Button';
import { Difficulty, gameState } from '../../game/GameState';

export function SelectDifficultyPage() {
  const navigate = useNavigate();
  const selectDifficulty = useCallback(
    function (difficulty: Difficulty) {
      gameState.mode = 1;
      gameState.difficulty = difficulty;
      navigate('/play');
    },
    [navigate]
  );
  return (
    <AppContainer>
      <AppTitle />
      <Stack spacing={2}>
        <Button onClick={() => selectDifficulty('easy')} variant="outlined">
          <Trans>difficulty.easy</Trans>
        </Button>
        <Button onClick={() => selectDifficulty('medium')} variant="outlined">
          <Trans>difficulty.medium</Trans>
        </Button>
        <Button onClick={() => selectDifficulty('hard')} variant="outlined">
          <Trans>difficulty.hard</Trans>
        </Button>
      </Stack>
    </AppContainer>
  );
}
