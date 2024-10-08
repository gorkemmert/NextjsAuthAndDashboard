'use client';  // Bu bileşen istemci tarafında çalışacak

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Button, Container } from '@mui/material';
import axios from 'axios';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
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
      setError("Giriş Başarızız.Lütfen kontrol edin")
    }
  };

  return (
    <Container maxWidth="sm" className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-6">Sign In</h2>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        className="mt-4"
        onClick={handleSignIn}
      >
        Sign In
      </Button>
      {error && <p>{error}</p>}
    </Container>
  );
};

export default SignIn;