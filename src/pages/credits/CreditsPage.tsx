import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Trans } from 'react-i18next';
import { AppContainer } from '../../components/AppContainer';
import { AppTitle } from '../../components/AppTitle';
import { Button } from '../../components/Button';

export function CreditsPage() {
  return (
    <AppContainer>
      <AppTitle />
      <Stack spacing={1}>
        <Typography>made by Kelgors</Typography>
        <Typography>in 2023</Typography>
        <Link target="_blank" href="https://github.com/Kelgors/tic-tac-toe/">
          Sources
        </Link>
        <Link target="_blank" href="https://www.kelgors.me/">
          https://www.kelgors.me/
        </Link>
      </Stack>
      <Button sx={{ m: 3 }} href="/">
        <Trans>back</Trans>
      </Button>
    </AppContainer>
  );
}
