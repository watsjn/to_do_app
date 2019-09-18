import React, { useState } from 'react';
import AuthContext from './AuthContext';
import MainRouter from './routes/MainRouter';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MaterialLink from '@material-ui/core/Link';

const Copyright: React.FC = () => {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {'Copyright © '}
      <MaterialLink color="inherit" href="#">
        Your Website
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const App: React.FC = () => {
  const [
    isAuthorized,
    setIsAuthorized,
  ] = useState<boolean>(false);

  return (
    <AuthContext.Provider
      value={{
        isAuthorized,
        authorize: () => setIsAuthorized(true),
      }}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <MainRouter />
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </AuthContext.Provider>
  );
};

export default App;
