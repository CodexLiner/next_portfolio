import { forwardRef, useState } from 'react';
// @mui
import {
  List,
  Slide,
  Button,
  Dialog,
  AppBar,
  Toolbar,
  Divider,
  IconButton,
  Typography,
  ListItemText,
  ListItemButton,
} from '@mui/material'
// components
import Iconify from '../../../../components/Iconify';
import Iframe from 'react-iframe';

// ----------------------------------------------------------------------

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function FullScreenDialogs(props) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    // setOpen(false);
    props.callBack({ value: false, link: '', title: '' });
  };

  return (
    <>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar position="relative">
          <Toolbar>
            <IconButton color="inherit" edge="start" onClick={handleClose}>
              <Iconify icon="eva:close-fill" />
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: 'light', flex: 1, ml: 2 }}>
              {props.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Iframe url={props.link} width="100%" height="100%" frameBorder="none" />
      </Dialog>
    </>
  );
}
