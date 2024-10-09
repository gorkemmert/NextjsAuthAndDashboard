/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';  // Bu bileşen istemci tarafında çalışacak

import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import { TextField, Button, Container } from '@mui/material';
import { Box, Button, Container, TextField, Typography, CircularProgress} from '@mui/material';
import Image from 'next/image';
import axios from 'axios';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Yeni loading durumu
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await axios.post('/api/auth',{
        username,
        password
      })
      //Token 'ı cookie olarak yarlama 
      document.cookie = `token=${response.data.token}; path=/; SameSite=Strict`;
      localStorage.setItem('username', username);
      localStorage.setItem('access_token', response.data.token);
      axios.defaults.headers.common['Authorization'] = response.data.token
      //Giris işlemi başarılı ise dashboarda yönlendirme
      
      router.push('/')
    } catch (err) {
      console.log(err);
      setError("Giriş Başarızız.Lütfen bilgilerinizi kontrol edin")
    }  finally {
      setLoading(false); // Loading durumunu durdur
    }
  };

  return (
    <Box
    sx={{
      backgroundImage: 'url("images/signin2.jpg")', // Kendi arka plan resminizi buraya ekleyin
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Koyuluk ekleyen yarı şeffaf siyah katman
          zIndex: 0,
        },
    }}
  >
    <Container
      component="form"
      onSubmit={handleSignIn}
      maxWidth="xs"
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1,
      }}
    >
      {/* Logo */}
      <Box sx={{ mb: 4 }}>
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </Box>
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="username"
        name="username"
        autoComplete="username"
        autoFocus
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {loading ? <CircularProgress size={24} /> : 'Sign In'}
      </Button>
      {error && <p className='text-red-400'>{error}</p>}
    </Container>
  </Box>
  );
};

export default SignIn;