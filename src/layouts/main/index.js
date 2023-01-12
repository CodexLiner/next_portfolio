import PropTypes from 'prop-types';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, Link, Container, Grid, Typography, Stack } from '@mui/material';
// components
import Logo from '../../components/Logo';
import Label from '../../components/Label';
//
import MainFooter from './MainFooter';
import MainHeader from './MainHeader';

// ----------------------------------------------------------------------

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function MainLayout({ children }) {
  const { pathname } = useRouter();

  const isHome = pathname === '/';

  return (
    <Stack sx={{ minHeight: 1 }}>
      <MainHeader />

      {children}

      <Box sx={{ flexGrow: 1 }} />

      {!isHome ? (
        <MainFooter />
      ) : (
        <Box
          sx={{
            py: 5,
            textAlign: 'center',
            position: 'relative',
            bgcolor: 'background.default',
          }}
        >
          <Container>
            <Grid spacing={0} direction="row" alignItems="center" justifyContent="center" container>
              <Grid item xs={0}>
                <Logo sx={{ mb: 0, mx: 'auto' }} />
              </Grid>
              <Grid item xs={0}>
              <Label color="info" sx={{ ml: 1 }}>
           Meenagopal24.me
          </Label>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </Stack>
  );
}
