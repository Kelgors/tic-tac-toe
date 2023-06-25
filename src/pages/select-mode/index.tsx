import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import { Trans } from 'react-i18next';
import { AppContainer } from '../../components/AppContainer';
import { AppTitle } from '../../components/AppTitle';
import { Button } from '../../components/Button';
import { gameState } from '../../game/GameState';

export function SelectModePage() {
  useEffect(function () {
    gameState.mode = 2;
  }, []);
  return (
    <AppContainer>
      <AppTitle />
      <Stack spacing={2}>
        <Button href="/select-difficulty" variant="outlined">
          <Trans>mode.one-players</Trans>
        </Button>
        <Button href="/play" variant="outlined">
          <Trans>mode.two-players</Trans>
        </Button>
      </Stack>
    </AppContainer>
  );
}
