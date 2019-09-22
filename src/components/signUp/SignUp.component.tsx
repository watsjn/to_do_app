import React, { useContext, useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import useAxios from 'axios-hooks';
import apiConfig from '../../config/api.config';
import UserContext from '../../context/user.context';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  wrapper: {
    // margin: theme.spacing(1),
    position: 'relative',
  },
  progress: {
    color: green[500],
    position: 'absolute',
    top: 2,
    left: 2,
    zIndex: 1,
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const { setUser } = useContext<any>(UserContext);

  const emailRef = useRef<any>(null);
  const passwordRef = useRef<any>(null);

  const errors: any = {};

  const [
    {
      data: postData,
      loading: postLoading,
      error: postError,
      response: postResponse,
    },
    executePost,
  ] = useAxios(
    {
      url: `${apiConfig.url}/api/auth/signup`,
      method: 'POST',
    },
    { manual: true },
  );

  const submitHandler = (e: any) => {
    e.preventDefault();
    executePost({
      data: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    });
    return e;
  };

  if (postError && postError.response) {
    if (postError.response.data.statusCode === 400) {
      postError.response.data.message.forEach(
        (element: any) => {
          errors[element.property] = element;
        },
      );
    }
  } else if (postData) {
    if (postData.token) {
      setUser(postData);
    } else {
      return <Redirect to={'/signin'} />;
    }
  }

  return (
    <div className={classes.paper}>
      <div className={classes.wrapper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        {postLoading && (
          <CircularProgress
            size={52}
            className={classes.progress}
          />
        )}
      </div>

      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              variant="outlined"
              error={!!errors.email}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              inputRef={emailRef}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              error={!!errors.password}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={passwordRef}
            />
          </Grid>
        </Grid>
        <Button
          disabled={!!postLoading}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={submitHandler}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <RouterLink to="/signin">
              Already have an account? Sign in
            </RouterLink>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
