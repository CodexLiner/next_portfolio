import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(0),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(0),
  },
}));
export default function RecentProjects() {
  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box
          sx={{
            textAlign: 'left',
            mb: { xs: 10, md: 15 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
              Projects
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">RECENT PROJECTS</Typography>
          </m.div>
        </Box>
      </Container>
    </RootStyle>
  );
}
