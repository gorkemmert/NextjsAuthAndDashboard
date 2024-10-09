'use client';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { usePathname} from 'next/navigation'
import Image from 'next/image';

const drawerWidth = 240;
const MainStyled = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  // padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

interface MainProps {
  open: boolean;
  children: React.ReactNode;
}

export default function Main({ open, children }: MainProps) {
  const pathname = usePathname()

  return (
  <MainStyled open={open}>
    <DrawerHeader/>
    <Box
        sx={{
          height: '140px',
          width: '100%',
          backgroundColor: '#f1f5f9',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '20px',
          gap: '10px'
        }}
      >
        <Image src="/calculate.png" alt="Logo" width={40} height={40} />
        {pathname === '/' && (
          <Typography className='font-bold text-lg'  color="#111827">
          Forecast
          </Typography>
        )}
        {pathname === '/blacklist' && (
          <Typography className='font-bold text-lg'  color="#111827">
          Blacklist
          </Typography>
        )}
        
      </Box>
    {children}
  </MainStyled>
  );
}