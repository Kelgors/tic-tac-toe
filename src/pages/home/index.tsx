import Stack from '@mui/material/Stack';
import { useCallback, useEffect } from 'react';
import { Trans } from 'react-i18next';
import { AppContainer } from '../../components/AppContainer';
import { AppTitle } from '../../components/AppTitle';
import { Button } from '../../components/Button';
import { gameState } from '../../game/GameState';

export function HomePage() {
  const onGameClosed = useCallback(function () {
    window.close();
  }, []);
  useEffect(function () {
    gameState.reset();
  }, []);
  return (
    <AppContainer>
      <AppTitle />
      <Stack spacing={2}>
        <Button href="/select-mode" variant="outlined">
          <Trans>home.buttons.play</Trans>
        </Button>
        <Button href="/options" variant="outlined" disabled>
          <Trans>home.buttons.options</Trans>
        </Button>
        <Button href="/credits" variant="outlined">
          <Trans>home.buttons.credits</Trans>
        </Button>
        <Button onClick={onGameClosed} variant="outlined">
          <Trans>home.buttons.quit</Trans>
        </Button>
      </Stack>
    </AppContainer>
  );
}
