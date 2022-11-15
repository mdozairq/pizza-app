import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
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
import { useNavigate, Navigate } from 'react-router-dom';
import { signin } from '../../actions/admin';
// import { signin } from '../../../redux/action/auth';
import { useDispatch } from 'react-redux';


const theme = createTheme();

const initialState = {
    email: '',
    password: '',
}

const AdminLogIn = () => {
    const is_admin = useSelector((state) => state.auth.isAdmin);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setformData] = useState(initialState)
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(signin(formData, navigate))
    };


    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    }

    return is_admin ? (
        <Navigate exact to="admindashboard" />
    )
        :
        (
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Admin Login
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/" variant="body2">
                                        Not Admin?
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>

        );
}

export default AdminLogIn