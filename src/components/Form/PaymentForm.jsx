import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container, RadioGroup, Radio, FormLabel } from '@mui/material';
import { useNavigate, Navigate } from 'react-router-dom';
import { Divider } from "@mui/material";
// import DatePicker from '@mui/lab/DatePicker';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { DatePicker } from '@mui/x-date-pickers';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { addPayment } from '../../actions/payment';


const initialState = { upi: '', cardNumber: 0, cardExpiry: '', bankName: '', ifscCode: '', accountNumber: 0 };
const theme = createTheme();


const PaymentForm = () => {
    const [paymentType, setPaymentType] = useState("upi");
    console.log("pay", paymentType);
    const [formData, setFormData] = useState(initialState);
    const [error, setError] = useState()
    const dispatch = useDispatch();
    const isUser = useSelector((state) => state.auth.authData);
    const isError = useSelector((state) => state.auth.errors);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPayment({paymentType, ...formData}))
    };
    useEffect(() => {
        if (isError)
            setError(isError);
    }, [isError])
    console.log("inAuth: ", error, isError, isUser);


    return (
        isUser ?
            <Container component="main" maxWidth="xs">
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
                                // onSubmit={handleSubmit} 
                                noValidate sx={{ mt: 1 }}>
                                <FormLabel id="demo-radio-buttons-group-label">Select Payment Type:</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    value={paymentType}
                                    name="radio-buttons-group"
                                    onChange={(e) => setPaymentType(e.target.value)}
                                >
                                    <FormControlLabel value="upi" control={<Radio />} label="UPI" />
                                    <FormControlLabel value="card" control={<Radio />} label="CARD" />
                                    <FormControlLabel value="bank" control={<Radio />} label="BANK" />
                                </RadioGroup>
                                {
                                    paymentType === "upi" ?
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="upi"
                                            label="Enter UPI ID"
                                            name="upi"
                                            autoComplete=""
                                            type="text"
                                            onChange={(e)=>{setFormData({...formData, upi: e.target.value })}}
                                            autoFocus
                                        />
                                        : paymentType === "card" ?
                                            <>
                                                <TextField
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="cardNumber"
                                                    label="Enrter Card Number"
                                                    name="cardNumber"
                                                    autoComplete=""
                                                    type="number"
                                                    onChange={(e)=>{setFormData({...formData, cardNumber: e.target.value })}}
                                                    // value={profile.result.name}
                                                    // onChange={handleChange}
                                                    autoFocus
                                                />
                                                {/* <DatePicker
                                                    variant="inline"
                                                    openTo="year"
                                                    views={["year", "month"]}
                                                    label="Year and Month"
                                                    value={"selectedDate"}
                                                    // onChange={handleDateChange}
                                                /> */}
                                            </> :
                                            <>
                                            <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="bankName"
                                            label="Enter Bank Name"
                                            name="bankName"
                                            autoComplete=""
                                            type="text"
                                            onChange={(e)=>{setFormData({...formData, bankName: e.target.value })}}
                                            autoFocus
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="ifscCode"
                                            label="Enter IFSC "
                                            name="ifscCode"
                                            onChange={(e)=>{setFormData({...formData, ifscCode: e.target.value })}}
                                            autoComplete=""
                                            type="text"/>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="accountNumber"
                                            label="Enter Account Number"
                                            name="accountNumber"
                                            onChange={(e)=>{setFormData({...formData, accountNumber: e.target.value })}}
                                            autoComplete=""
                                            type="number"/>
                                            </>
                                }

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick = {handleSubmit}
                                >
                                    ADD A METHOD
                                </Button>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </Container >
            : <Navigate to="/auth" />
    );
};

export default PaymentForm;
