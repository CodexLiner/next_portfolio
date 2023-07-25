import { m } from 'framer-motion';
import NextLink from 'next/link';
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack } from '@mui/material';
import Iconify from '../../components/Iconify';
import { MotionContainer, varFade } from '../../components/animate';
import CustomCursor from '../../components/CustomCursor';

import { useState, useEffect, useRef } from 'react';
import FullScreenDialogs from '../overview/mui/dialog/FullScreenDialogs';

// ----------------------------------------------------------------------

const SOCIAL = [
  {
    img: 'git.svg',
    name: 'github',
    link: 'https://github.com/CodexLiner',
  },
  {
    img: 'in.svg',
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/meenagopal24',
  },

  {
    img: 'tweet.svg',
    name: 'twitter',
    link: 'https://twitter.com/meenagopal_24',
  },
  {
    img: 'insta.svg',
    name: 'instagram',
    link: 'https://www.instagram.com/meenagopal24',
  },
  {
    img: 'wa.svg',
    name: 'whatsapp',
    link: 'https://wa.me/+919399846909',
  },
];

const my_font = 'Genos';

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
  [theme.breakpoints.down('sm')]: {
    textAlign: 'left',
    paddingTop: theme.spacing(25),
    paddingBottom: theme.spacing(1),
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
  [theme.breakpoints.down('mobile')]: {
    display: 'none',
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const [open, setopen] = useState({ value: false, link: '', title: '' });
  const mainCursor = useRef(null);
  const secondary = useRef(null);
  const clickAction = (props) => {
    setopen({ value: props.value, link: props.link, title: props.title });
  };

  const openLink = (link) => {
    window.open(link, '_blank');
  };

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
          src="./../images/hero_main.png"
          variants={varFade().inUp}
        />

        <Container>
          <ContentStyle>
            <m.div ref={mainCursor} variants={varFade().inRight}>
              <Typography variant="h3" sx={{ fontFamily: `${my_font}`, fontWeight: 'light', color: 'common.white' }}>
                Hello{' '}
                <Typography
                  component="span"
                  variant="h3"
                  sx={{ fontFamily: `${my_font}`, fontWeight: 'light', color: 'primary.main' }}
                >
                  I'm
                </Typography>
                <br />
                <Typography
                  component="span"
                  variant="h1"
                  sx={{ fontWeight: 'light', fontFamily: `${my_font}`, color: 'primary.main' }}
                >
                  Gopal Meena
                </Typography>
              </Typography>
              <m.div variants={varFade().inRight}>
                <Typography
                  variant="h4"
                  sx={{
                    mt: 2,
                    fontWeight: 'light',
                    fontFamily: `${my_font}`,
                    letterSpacing: '1',
                    color: 'common.white',
                  }}
                >
                  I'm an android developer by specialization and am a software engineer at heart
                </Typography>
              </m.div>
            </m.div>

            {/* <m.div variants={varFade().inRight}>
              <Typography
                variant="h5"
                sx={{ mt: -1.5, fontFamily: 'cursive', fontWeight: 'light', color: 'common.white' }}
              >
                Programmer | Learner | Student
              </Typography>
            </m.div> */}

            <m.div variants={varFade().inRight}>
              <Button
                onClick={() =>
                  clickAction({ value: true, link: 'https://meenagopal24.me/assets/resume.pdf', title: 'Resume' })
                }
                size="large"
                variant="outlined"
                startIcon={<Iconify icon={'mdi:resume'} width={20} height={20} />}
              >
                Download Resume
              </Button>
            </m.div>

            <Stack spacing={2.5}>
              <m.div variants={varFade().inRight}>
                <Typography variant="overline" sx={{ color: 'primary.light' }}>
                  Checkout Me On
                </Typography>
              </m.div>

              <Stack ref={secondary} direction="row" spacing={1.5} justifyContent={{ xs: 'left', md: 'flex-start' }}>
                {open.value ? (
                  <FullScreenDialogs key={Math.random()} callBack={clickAction} link={open.link} title={open.title} />
                ) : null}
                {SOCIAL.map((resource) => (
                  <>
                    <m.img
                      width={25}
                      height={25}
                      className="pointer"
                      onClick={() => openLink(resource.link)}
                      key={resource}
                      variants={varFade().inRight}
                      src={`/images/social/${resource.img}`}
                    />
                    <Typography
                      className="pointer"
                      onClick={() => openLink(resource.link)}
                      variant="overline"
                      sx={{
                        '@media (max-width:600px)': {
                          display: 'none',
                        },
                        alignSelf: 'center',
                        alignContent: 'center',
                        textAlign: 'left',
                        fontWeight: 'light',
                        fontFamily: `${my_font}`,
                        color: 'primary.light',
                      }}
                    >
                      {resource.name}
                    </Typography>
                  </>
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

// export getSocialLinks()
