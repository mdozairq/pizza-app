import React, { useState, useEffect } from "react";
import { Avatar, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
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
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from "@mui/styles";
import Ccard from "./Ccard";


const useStyles = makeStyles({
  dialogPaper: {
    borderRadius: "20px"
  }
});

const theme = createTheme();



function Card({ profile }) {
  const initialState = {
    name: profile.result.name,
    username: profile.result.username,
    password: profile.result.password
  };
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(initialState);
  
  const classes = useStyles();



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () =>{
    handleClose();
  }

  return (

    <div>
      {open &&
        <Dialog open={open}
          onClose={handleClose}
          className={classes.dialogPaper}
        >
          <DialogTitle>Update Details</DialogTitle>
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
                <Box component="form"
                  onSubmit={handleSubmit} 
                  noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete=""
                    type="text"
                    value={data.name}
                    onChange={(e)=>{setData({...data, name: e.target.value})}}
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="username"
                    label="Username"
                    type="text"
                    id="username"
                    value={data.username}
                    onChange={(e)=>{setData({...data, username: e.target.value})}}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Update
                  </Button>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </Dialog>
      }
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
          minHeight: "200px",
          flexWrap: "wrap",
        }}
      >
        {profile && <Ccard data={profile} handleClickOpen={handleClickOpen} />}
      </div>
    </div>
  );
}

export default Card;
