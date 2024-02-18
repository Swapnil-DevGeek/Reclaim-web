import * as React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import { Toolbar } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Dashboard from './Dashboard';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useNavigate} from 'react-router-dom';

const drawerWidth = 240;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#242526',
  color: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ResponsiveDrawer(props) {
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };


  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate('/login')
  }

  

  const drawer = (
    <div className='py-8 min-h-full w-full bg-[#161725] text-white'>
      <List>
        {['Home', 'Contact Us', 'About'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className='ml-2 mt-4'>
      <Button onClick={handleOpen}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to Log out ?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button onClick={handleLogOut}>Log Out</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  

  return (
    <Box sx={{ display: 'flex' }}>
    
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          
        > 
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <div>
          <h1 className='text-[2.5vw]'>Welcome Back 
          <span className='text-[3vw] font-semibold text-[#e70f2cf4]'> User</span></h1>
        </div>
        <div>
          <h3 className='font-semibold text-[1.5vw]'>Here you can see all the analytics related to your sales and consumers demands</h3>
        </div>
        <div className='mt-12 min-h-screen bg-zinc-200 rounded-xl flex flex-col justify-center items-center' >
          <Dashboard/>
        </div>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;