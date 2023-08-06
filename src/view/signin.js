import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import Breadcrumbs from '../component/CustomBreadcrumbs';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ color: '#000000' }}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.facebook.com/profile.php?id=100004005796627" sx={{ color: '#000000' }}>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>

  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
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
          { title: "Sign in", path: "/signin" },
          { title: "Sign up", path: "/signup" },
          { title: "Tournament", path: "/Tournament" },
          { title: "TournamentList", path: "/TournamentList" },
        ]}
      />

      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://scontent.fhdy3-1.fna.fbcdn.net/v/t39.30808-6/292086258_2750248301785336_7099719668975479912_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeE9xtCDVWBDPO3JnLcsIawglW-b68OGvFaVb5vrw4a8VsNTuljfHPhL1CY1eFahE_RdWpCDVUTBuJTntv_3cLyf&_nc_ohc=Jqwbx9uqz0MAX98-wc1&_nc_ht=scontent.fhdy3-1.fna&oh=00_AfBuKpBP0IsKaKJsMjeHGPQqA_cFnvElWtLPfCtdYRgfFg&oe=64D3BDB9)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#FF8C00' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
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
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
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
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2"
                    sx={{
                      color: '#000000',
                      textDecoration: 'underline',
                    }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2"
                    sx={{
                      color: '#000000',
                      textDecoration: 'underline',
                    }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}