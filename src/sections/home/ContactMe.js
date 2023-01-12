// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, CardHeader, CardContent } from '@mui/material';
// sections
import { ReactHookForm } from '../overview/extra/form';
import { m } from 'framer-motion';
import { MotionViewport, varFade } from '../../components/animate';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15),
}));

export default function ContactMe() {
  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box
          sx={{
            textAlign: 'left',
            mb: { xs: 0, md: 0 },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">CONNECT WITH ME</Typography>
          </m.div>
        </Box>
      </Container>
      <Container sx={{ mt: 2 }}>
        <Card>
          <CardHeader />
          <CardContent>
            <ReactHookForm />
          </CardContent>
        </Card>
      </Container>
    </RootStyle>
  );
}
