import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@mui/material';
import { useNavigate, Navigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Icon from './icon';
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';
import Input from './Input';

const initialState = { name: '', dob: '', email: '', username: '', password: '' };



const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState()
  const dispatch = useDispatch();
  const isUser = useSelector((state) => state.auth.authData);
  const isError = useSelector((state) => state.auth.error);
  const navigate = useNavigate();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form, confirmPassword);
    if (isSignup) {
      form.password === confirmPassword ? dispatch(signup(form, navigate)) : setError('Password does not matched');
      setError('');
    } else {
      dispatch(signin(form, navigate));
    }
  };



  return (
    !isUser ?
      <Container component="main" maxWidth="xs">
        < Paper className={classes.paper} elevation={6} style={{ padding: "8px" }
        }>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {isError && <p style={{ color: 'red' }}>{error}</p>}
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input name="name" label="Name" handleChange={(e) => setForm({ ...form, name: e.target.value })} autoFocus />
                  <Input name="dob" label="Date Of Birth" handleChange={(e) => setForm({ ...form, dob: e.target.value })} type="Date" />
                  <Input name="email" label="Email Address" handleChange={(e) => setForm({ ...form, email: e.target.value })} type="email" />
                </>
              )}
              <Input name="username" label="Username" handleChange={(e) => setForm({ ...form, username: e.target.value })} type="text" />
              <Input name="password" label="Password" handleChange={(e) => setForm({ ...form, password: e.target.value })} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
              {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={(e) => setConfirmPassword(e.target.value)} type="password" />}
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper >
      </Container >
      : <Navigate to="/profile" />
  );
};

export default SignUp;
