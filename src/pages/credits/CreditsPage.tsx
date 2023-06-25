import { Link, Typography } from '@mui/material';
import { AppContainer } from '../../components/AppContainer';
import { AppTitle } from '../../components/AppTitle';

export function CreditsPage() {
  return (
    <AppContainer>
      <AppTitle />
      <h3>v1.0</h3>
      <Typography>
        made by Kelgors
        <br />
        in 2023
      </Typography>
      <Link target="_blank" href="https://www.kelgors.me/">
        https://www.kelgors.me/
      </Link>
    </AppContainer>
  );
}
