import Stack from '@mui/material/Stack';
import { useEffect, useMemo } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AppContainer } from '../../components/AppContainer';
import { AppTitle } from '../../components/AppTitle';
import { Button } from '../../components/Button';
import { gameState } from '../../game/GameState';

export function EndPage() {
  const navigate = useNavigate();
  useEffect(function () {
    if (gameState.isReady()) return;
    navigate('/');
    return;
  }, []);

  const { t } = useTranslation();
  const message = useMemo(
    function () {
      if (gameState.mode === 2 && gameState.winner) {
        return t('end.multi-player.win', { player: gameState.winner });
      }
      if (gameState.mode === 1) {
        if (gameState.winner === 'x') {
          return t('end.single-player.win');
        }
        if (gameState.winner === 'o') {
          return t('end.single-player.lose');
        }
      }
      return t('end.draw');
    },
    [t]
  );

  return (
    <AppContainer>
      <AppTitle />
      <h2>{message}</h2>
      <Stack spacing={2}>
        <Button href="/play">
          <Trans>end.buttons.restart</Trans>
        </Button>
        <Button href="/">
          <Trans>end.buttons.quit</Trans>
        </Button>
      </Stack>
    </AppContainer>
  );
}
