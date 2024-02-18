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
import axios from 'axios';
import { useEffect, useState } from 'react';
import { user } from '@nextui-org/react';
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate('/login');
  } 

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
      <button onClick={handleLogOut}>
        <Avatar className='ml-4 my-8' sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      </button>
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