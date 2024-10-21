"use client";
import React, { useState } from 'react';
import { Button, TextField, Typography, Box, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Image from 'next/image';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (!email) {
      setEmailError('Email ou número de telefone é obrigatório.');
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('A senha é obrigatória.');
    } else {
      setPasswordError('');
    }

    if (email && password) {
      if (email !== 'valid@example.com' || password !== 'correctpassword') {
        setLoginError('Usuário ou senha incorretos');
      } else {
        setLoginError('');
      }
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fb',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: { xs: '90%', sm: '480px' },
          padding: '50px',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <Box mb={3}>
          <Image src="/bazar.png" alt="Bazaar Logo"  width={120} height={100}  />
        </Box>

        <Typography variant="h4" sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '24px', mb: 2, color: '#2f3349' }}>
          Bem-vindo ao Bazaar
        </Typography>

        <TextField
          id="email"
          fullWidth
          label="Email ou número de telefone"
          placeholder="exemplo.email.com"
          variant="outlined"
          margin="normal"
          InputProps={{
            style: { fontFamily: 'Poppins, sans-serif' },
          }}
          error={!!emailError}
          helperText={emailError}
        />

        <Box position="relative" width="100%">
          <TextField
            id="password"
            fullWidth
            label="Senha"
            placeholder="**********"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            margin="normal"
            InputProps={{
              style: { fontFamily: 'Poppins, sans-serif' },
            }}
            error={!!passwordError}
            helperText={passwordError}
          />
          <Button
            onClick={togglePasswordVisibility}
            sx={{ position: 'absolute', right: 2, top: 28 }}
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </Button>
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{
            marginTop: 2,
            backgroundColor: '#ff4b5c',
            color: '#fff',
            fontFamily: 'Poppins, sans-serif',
            '&:hover': {
              backgroundColor: '#ff4b5c',
            },
          }}
          onClick={handleLogin}
        >
          Entrar
        </Button>

        {loginError && (
          <Typography variant="body2" sx={{ color: '#f44336', fontFamily: 'Poppins, sans-serif', mt: 1 }}>
            {loginError}
          </Typography>
        )}

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            marginTop: '10px',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1" sx={{ fontFamily: 'Poppins, sans-serif', color: '#777', mt: 2 }}>
            ou
          </Typography>
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{
            marginBottom: 1,
            backgroundColor: '#4285F4', //azul
            color: '#fff',
            padding: '10px',
            fontSize: '14px',
            textTransform: 'none',
            fontFamily: 'Poppins, sans-serif',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#357ae8',
            },
          }}
          startIcon={<GoogleIcon sx={{ mr: 1 }} />}
        >
          Continuar com google
        </Button>

        <Button
          fullWidth
          variant="contained"
          sx={{
            marginBottom: 2,
            backgroundColor: '#1877F2', // azul
            color: '#fff',
            padding: '10px',
            fontSize: '14px',
            textTransform: 'none',
            fontFamily: 'Poppins, sans-serif',
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#166fe5',
            },
          }}
          startIcon={<FacebookIcon sx={{ mr: 1 }} />}
        >
          Continuar com facebook
        </Button>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            marginTop: '10px',
            alignItems: 'center',
          }}
        >
          <Link href="#" underline="hover" sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: '#2f3349', mb: 1, border: '1px solid #ccc', padding: '10px', width: '100%', textAlign: 'center', borderRadius: '5px' }}>
            Esqueceu a senha?
          </Link>
          <Link href="#" underline="hover" sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: '#2f3349', border: '1px solid #ccc', padding: '10px', width: '100%', textAlign: 'center', borderRadius: '5px' }}>
            Criar conta
          </Link>
        </Box>
      </Box>
    </Box>
  );
}