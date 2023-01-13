import { alpha, useTheme, styled } from '@mui/material/styles';
import { Button, Paper, Box, Link, Container, Typography, Stack } from '@mui/material';
import { m } from 'framer-motion';
import { MotionContainer, MotionViewport, varFade } from '../../components/animate';
import {
  Masonry,
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineOppositeContent,
} from '@mui/lab';
import Iconify from '../../components/Iconify';

import { Block } from '../../sections/overview/Block';

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(10),
  },
}));

const TIMELINES = [
  {
    key: 1,
    title: 'Freelancing',
    des: 'Freelancing as an android developer',
    time: 'Current',
    icon: <Iconify icon="simple-icons:freelancer" width={24} height={24} />,
  },
  {
    key: 2,
    title: 'Internship',
    des: 'Netlux Systems Pvt. Ltd.r',
    time: 'June 2022',
    color: 'primary',
    icon: <Iconify icon="arcticons:training-peaks" width={24} height={24} />,
  },
  {
    key: 3,
    title: 'Teaching Assistance',
    des: 'Training associate at coding ninjas',
    time: 'May 2022',
    color: 'secondary',
    icon: <Iconify icon="twemoji:ninja-medium-skin-tone" width={24} height={24} />,
  },
  {
    key: 4,
    title: 'Teaching Assistance',
    des: 'Training associate at coding ninjas',
    time: 'January 2022',
    color: 'info',
    icon: <Iconify icon="twemoji:ninja-medium-skin-tone" width={24} height={24} />,
  },
  {
    key: 5,
    title: 'Freelancing',
    des: 'Freelancing as an android developer',
    time: '11:00 am',
    color: 'success',
    icon: <Iconify icon="simple-icons:freelancer" width={24} height={24} />,
  },
  {
    key: 6,
    title: 'Beginning',
    des: 'began my journey',
    time: 'Mid 2020',
    color: 'warning',
    icon: <Iconify icon="arcticons:birthday-calendar" width={24} height={24} />,
  }
];

export default function Experiences() {
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
            {'<Jobs/>'}
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">MY EXPERIENCE</Typography>
          </m.div>
        </Box>
        <Block variants={varFade().inUp} title="">
          <Timeline position="alternate">
            {TIMELINES.map((item) => (
              <TimelineItem key={item.key}>
                <TimelineOppositeContent>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.time}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color={item.color}>{item.icon}</TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    sx={{
                      p: 3,
                      bgcolor: 'grey.50012',
                    }}
                  >
                    <Typography variant="subtitle2">{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.des}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Block>
      </Container>
    </RootStyle>
  );
}
