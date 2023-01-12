import { m } from 'framer-motion';
import NextLink from 'next/link';
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack } from '@mui/material';
import Iconify from '../../components/Iconify';
import { MotionContainer, varFade } from '../../components/animate';
import CustomCursor from '../../components/CustomCursor';

import { useEffect, useRef } from 'react';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.primary[900],
  // backgroundColor: '#0F1626',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={4} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '55vh',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const mainCursor = useRef(null);
  const secondary = useRef(null);

  const position = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });
  useEffect(() => {
    document.addEventListener(
      'mousemove',
      (event) => {
        try {
          const { clientX, clientY } = event;
          const mouseY = clientY;
          const mouseX = clientX;

          position.current.mouseX = mouseX - secondary.current.clientWidth / 2;
          position.current.mouseY = mouseY - secondary.current.clientHeigth / 2;

          mainCursor.current.style.transform = `transalate3d(${mouseX - mainCursor.current.clientWidth / 2}px , ${
            mouseY - mainCursor.current.clientHeigth / 2
          }px , 0)`;
        } catch (err) {}
      },
      []
    );
  });

  useEffect(() => {
    const followMouse = () => {
      try {
        position.current.key = requestAnimationFrame(followMouse);
        const { mouseX, mouseY, destinationY, destinationX, distanceY, distanceX } = position.current;

        if (!destinationX | !destinationY) {
          position.current.destinationX = mouseX;
          position.current.destinationY = mouseY;
        } else {
          position.current.distanceX = (mouseX - destinationX) * 0.1;
          position.current.distanceY = (mouseY - destinationY) * 0.1;

          if (Math.abs(position.current.distanceX) + Math.abs(position.current.distanceY) < 0.1) {
            position.current.destinationX = mouseX;
            position.current.destinationY = mouseY;
          } else {
            position.current.destinationX += distanceX;
            position.current.destinationY += distanceY;
          }
          secondary.current.style.transform = `trasnlate3d${destinationX}px , ${destinationY}px , 0`;
        }
      } catch (err) {}
    };
    followMouse();
  }, []);
  return (
    <MotionContainer>
      {/* <CustomCursor/> */}
      <RootStyle>
        <HeroImgStyle
          alt="hero"
          // src="https://minimal-assets-api.vercel.app/assets/images/home/hero.png"
          src="https://meenagopal24.me/assets/hero11.png"
          variants={varFade().inUp}
        />

        <Container>
          <ContentStyle>
            <m.div ref={mainCursor} variants={varFade().inRight}>
              <Typography variant="h3" sx={{ color: 'common.white' }}>
                Hello{' '}
                <Typography component="span" variant="h3" sx={{ color: 'primary.main' }}>
                  I'm
                </Typography>
                <br />
                <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                  Gopal Meena
                </Typography>
              </Typography>
              <m.div variants={varFade().inRight}>
                <Typography variant="h5" sx={{ color: 'common.white' }}>
                  Programmer | Learner | Student
                </Typography>
              </m.div>
            </m.div>

            {/* <m.div variants={varFade().inRight}>
              <Typography variant="h4" sx={{ color: 'common.white' }}>Programmer | Learner | Student</Typography>
            </m.div> */}

            <m.div variants={varFade().inRight}>
              <NextLink href="/resume" target="_blank" passHref>
                <Button
                  size="large"
                  variant="contained"
                  startIcon={<Iconify icon={'mdi:resume'} width={20} height={20} />}
                >
                  Download Resume
                </Button>
              </NextLink>
            </m.div>

            <Stack spacing={2.5}>
              <m.div variants={varFade().inRight}>
                <Typography variant="overline" sx={{ color: 'primary.light' }}>
                  Checkout Me On
                </Typography>
              </m.div>

              <Stack ref={secondary} direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                {/* <m.div variants={varFade().inRight}>
                  <Typography variant="overline" sx={{ color: 'primary.light' }}>
                    Checkout My
                  </Typography>
                </m.div> */}

                {['ic_sketch', 'ic_figma', 'ic_js', 'ic_ts', 'ic_nextjs'].map((resource) => (
                  <m.img
                    key={resource}
                    variants={varFade().inRight}
                    src={`https://minimal-assets-api.vercel.app/assets/images/home/${resource}.svg`}
                  />
                ))}
              </Stack>
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}
