'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout'; // Logout icon from MUI Icons

// Define the drawer width
const drawerWidth = 240;

// Extend the MuiAppBarProps to include the `open` prop
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  handleDrawerOpen?: () => void;
}

// Create the AppBarStyled component
const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: 'white',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }, 
),
  ...(open && {
    // backgroundColor: 'white',
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const deleteToken = () => {
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};


export default function AppBar({ open, handleDrawerOpen }: AppBarProps) {
  const router = useRouter();
  const handleLogout = () => {
    deleteToken();
    router.push('/signin'); 
  };

  return (
    <AppBarStyled position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
        
          sx={{ color: '#111827', mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Persistent Drawer
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<LogoutIcon />} 
          sx={{ ml: 'auto', color: '#111827', borderColor: '#111827' }} 
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBarStyled>
  );
}