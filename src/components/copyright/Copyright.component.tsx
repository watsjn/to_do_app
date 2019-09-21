import React from 'react';
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

export default Copyright;
