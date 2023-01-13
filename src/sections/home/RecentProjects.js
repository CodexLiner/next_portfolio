import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';
import { Block } from '../overview/Block';
import _mock from '../../_mock';

// const imagesLightbox = [...Array(8)].map((_, index) => _mock.image.feed(index + 1));
const imagesLightbox = ["billing.jpg" , "budget.jpg" , "fill.png" , "cc.jpg","tiktok.jpg"];

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(10),
  },
}));

function handleOpenLightbox(img) {}

export default function RecentProjects() {
  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box
          sx={{
            textAlign: 'left',
            mb: { xs: 10, md: 5 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
            {'<Projects/>'}
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">RECENT PROJECTS</Typography>
          </m.div>
        </Box>
        <Block
          sx={{
            p: 5,
            display: 'grid',
            gap: 4,
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(5, 1fr)',
            },
          }}
        >
          {imagesLightbox.slice(0, 5).map((img) => (
            <Image
              key={img}
              alt={img}
              src={`../../images/${img}`}
              ratio="1/1"
              onClick={() => handleOpenLightbox(img)}
              sx={{
                borderRadius: 1,
                cursor: 'pointer',
              }}
            />
          ))}
        </Block>
      </Container>
    </RootStyle>
  );
}
