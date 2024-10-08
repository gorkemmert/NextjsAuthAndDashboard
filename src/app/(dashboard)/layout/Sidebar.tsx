'use client';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { deepPurple } from '@mui/material/colors';
import Link from 'next/link';


const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


interface SidebarProps {
  open: boolean;
  handleDrawerClose: () => void;
}

export default function Sidebar({ open, handleDrawerClose }: SidebarProps) {
  const theme = useTheme();

  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    // localStorage'dan username bilgisini alıyoruz
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#111827',
          color: 'white',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton sx={{ color: 'white' }} onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>

      </DrawerHeader>
      <Divider />
      <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: 2 }}>
        <Avatar 
            sx={{ width: 56, height: 56, marginBottom: 1, bgcolor: deepPurple[500] }}
        />
        <Box className="mt-5">
          <Typography variant="body1" align="center" sx={{ textAlign: 'center' }} >Yunus</Typography>
          <Typography variant="body2" align="center" sx={{ textAlign: 'center' }} >{username}</Typography>
        </Box>
      </Box>
      <Divider />
      <List>
          <ListItem disablePadding>
            <Link className='w-full' href="/">
              <ListItemButton 
                  sx={{
                      '&:hover': {
                        backgroundColor: '#849DB5', // Hover rengini ayarlayın
                      },
                    }}
              >
                <ListItemIcon sx={{ color: 'white' }}>
                  <BatchPredictionIcon />
              </ListItemIcon>
                <ListItemText primary={"Forecast"} />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link className='w-full' href="/blacklist">
              <ListItemButton
                  sx={{
                      '&:hover': {
                        backgroundColor: '#849DB5', // Hover rengini ayarlayın
                      },
                    }}
              >
                <ListItemIcon sx={{ color: 'white' }}>
                  <CoronavirusIcon />
                </ListItemIcon>
                <ListItemText primary={"Blacklist"} />
              </ListItemButton>
            </Link>
          </ListItem>
              
      </List>
      <Divider />
      <Box className="flex justify-center mb-40" sx={{ mt: 'auto', mb: 2}} >
        <Image
          src="/logo.png" // Update the path to your logo
          alt="Logo"
          width={100} // Adjust the size
          height={100}
          style={{ opacity: 0.2 }} // Make the logo appear translucent (soluk)
        />
      </Box>
    </Drawer>
  );
}