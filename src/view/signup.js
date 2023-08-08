import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Breadcrumbs from '../component/CustomBreadcrumbs';




// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (


    <ThemeProvider theme={defaultTheme}>
      <Breadcrumbs
        pages={[
          { title: "Home", path: "/" },
          { title: "Tournament", path: "/Tournament" },
        ]}
      />

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundImage: 'linear-gradient(45deg, #4a1a1c,#0f1849)', // เพิ่มสีพื้นหลังที่ต้องการ
            padding: '20px', // ปรับขนาดการเว้นระยะของ Box
            borderRadius: '10px', // เพิ่มเส้นขอบของพื้นหลัง
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#FF8C00' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5"
            sx={{
              color: '#ffffff',
            }}>
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
  <Grid item xs={12} sm={6}>
    <TextField
      autoComplete="given-name"
      name="firstName"
      required
      fullWidth
      id="firstName"
      label="First Name"
      autoFocus
      sx={{
        backgroundColor: '#ffffff',
        borderRadius: '10px',
      }}
    />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField
      required
      fullWidth
      id="lastName"
      label="Last Name"
      name="lastName"
      autoComplete="family-name"
      sx={{
        backgroundColor: '#ffffff',
        borderRadius: '10px',
      }}
    />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField
      required
      fullWidth
      id="age"
      label="Age"
      name="age"
      type="number" // กำหนดให้เป็นช่องกรอกตัวเลข
      sx={{
        backgroundColor: '#ffffff',
        borderRadius: '10px',
      }}
    />
  </Grid>
  <Grid item xs={12} sm={6}>
    <TextField
      required
      fullWidth
      id="aka"
      label="AKA"
      name="aka"
      sx={{
        backgroundColor: '#ffffff',
        borderRadius: '10px',
      }}
    />
  </Grid>
  <Grid item xs={12}>
    <TextField
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      sx={{
        backgroundColor: '#ffffff',
        borderRadius: '10px',
      }}
    />
  </Grid>
  <Grid item xs={12}>
    <TextField
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="new-password"
      sx={{
        backgroundColor: '#ffffff',
        borderRadius: '10px',
      }}
    />
  </Grid>
</Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3, mb: 2,
                backgroundColor: '#FF8C00',
                '&:hover': {
                  bgcolor: '#B22222',
                },
              }}

            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2"
                  sx={{
                    color: '#FFFFFF',
                    textDecoration: 'underline',
                  }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}