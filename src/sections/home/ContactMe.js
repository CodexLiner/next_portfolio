// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, CardHeader, CardContent } from '@mui/material';
// sections
import { ReactHookForm } from '../overview/extra/form';
import { m } from 'framer-motion';
import { MotionViewport, varFade } from '../../components/animate';
import { Block } from '../../sections/overview/Block';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(5),
}));

export default function ContactMe() {
  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box
          sx={{
            textAlign: 'left',
            mb: { xs: 10, md: 5 },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">CONNECT WITH ME</Typography>
          </m.div>
        </Box>
      </Container>
      <Container sx={{ mt: 2 }}>
        <Block>
          {/* <Card> */}
          <CardHeader />
          <CardContent>
            <ReactHookForm />
          </CardContent>
          {/* </Card> */}
        </Block>
      </Container>
    </RootStyle>
  );
}
