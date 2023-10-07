import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Container, Typography, useTheme } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';
import Masonry from '@mui/lab/Masonry';
import Paper from '@mui/material/Paper';

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  borderRadius: '2%',
  color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------

// const IMG = [...Array(10)].map(
//   (_, index) => `https://minimal-assets-api.vercel.app/assets/images/home/clean-${index + 1}.png`
// );
const IMG = [
  'billing.jpg',
  'budget.jpg',
  'fill.png',
  'cc.jpg',
  'tiktok.jpg',
  'call.png',
  'todo.jpg',
  'college.png',
  'loc.jpeg',
  'ext.jpg',
];

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  // maxWidth: 520,
  // margin: 'auto',
  // textAlign: 'center',
  // [theme.breakpoints.up('md')]: {
  //   zIndex: 11,
  //   textAlign: 'left',
  //   position: 'absolute',
  // },
}));

export default function () {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <ContentStyle>
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
              {'<Projects/>'}
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              variant="h2"
              paragraph
              sx={{
                ...(!isLight && {
                  textShadow: (theme) => `4px 4px 16px ${alpha(theme.palette.grey[800], 0.48)}`,
                }),
              }}
            >
              More Projects That I Have Built
            </Typography>
          </m.div>
        </ContentStyle>
        <Box sx={{ minHeight: 253 }}>
          <Masonry columns={4} spacing={2} defaultHeight={450} defaultColumns={4} defaultSpacing={1}>
            {IMG.map((height, index) => (
              <Item key={index} sx={{ height }}>
                <Image sx={{ borderRadius: '2%' }} disabledEffect visibleByDefault alt={`clean-${index + 1}`} src={`../../images/${height}`} />
              </Item>
            ))}
          </Masonry>
        </Box>

        {/* <Box sx={{ position: 'relative' }}>
          {IMG.map((_, index) => (
            <Box
              key={index}
              component={m.div}
              variants={varFade().inUp}
              sx={{
                top: 0,
                left: 0,
                position: 'absolute',
                ...(index === 0 && { zIndex: 8 }),
                ...(index === 9 && { position: 'relative', zIndex: 9 }),
              }}
            >
              <Image
                disabledEffect
                visibleByDefault
                alt={`clean-${index + 1}`}
                src={`https://minimal-assets-api.vercel.app/assets/images/home/clean-${index + 1}.png`}
              />
            </Box>
          ))}
        </Box> */}
      </Container>
    </RootStyle>
  );
}
