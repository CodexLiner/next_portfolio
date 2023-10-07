import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import Layout from '../layouts';
import Page from '../components/Page';

import { AllProjects, Github, HomeHero, Skills, Experiences, RecentProjects } from '../sections/home';
import ContactMe from 'src/sections/home/ContactMe';

// ----------------------------------------------------------------------
const RootStyle = styled('div')(() => ({
  height: '100%',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

HomePage.getLayout = function getLayout(page) {
  return <Layout variant="main">{page}</Layout>;
};

export default function HomePage() {
  return (
    <Page title="meenagopal24.live">
      <RootStyle>
        <HomeHero />
        <ContentStyle>
          <Skills />
          <RecentProjects />
          <Experiences />
          <AllProjects />
          <Github />
          <ContactMe />
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}
