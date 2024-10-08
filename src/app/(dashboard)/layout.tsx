'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Sidebar from './layout/Sidebar';
import AppBar from './layout/AppBar';
import Main from './layout/Main';
import { AuthProvider } from '../components/AuthProvider';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <AuthProvider>
    <Box sx={{ display: 'flex' }}>
      <AppBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      <Main open={open}>
        {children}
      </Main>
    </Box>
    </AuthProvider>
  );
}
