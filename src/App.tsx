import React from 'react';
import UserProvider from './components/userDetailsProvider/UserProvider.component';
import MainRouter from './routes/MainRouter';
import Copyright from './components/copyright/Copyright.component';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

const App: React.FC = () => {
  return (
    <UserProvider>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <MainRouter />
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </UserProvider>
  );
};

export default App;
