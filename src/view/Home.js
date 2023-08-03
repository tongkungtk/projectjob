import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Appbar from '../components/appbar';

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Appbar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            pt: 15,
            pb: 55,
            width: '100%',
            height: '100%',
          }}
        >
          <Container maxWidth="sm">
            <Box
              sx={{
                display: 'grid',
                placeItems: 'center',
                minHeight: '100vh', // ความสูงเท่ากับความสูงของหน้าจอ
              }}
            >
              <Typography
                component="h5"
                variant="h1"
                align="center"
                color="#ffff"
                gutterBottom
              >
                ยินดีต้อนรับสู่
              </Typography>
              <Typography
                component="h5"
                variant="h5"
                align="center"
                color="#ffff"
                gutterBottom
              >
                ระบบจัดการการแข่งจันกีฬาอีสปอร์ต
              </Typography>

            
            </Box>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
