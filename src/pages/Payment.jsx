import React, {useEffect} from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CircularProgress } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getOrder } from '../actions/order'
import PaymentForm from '../components/Form/PaymentForm';
import { getPayment } from '../actions/payment';

const Payment = () => {
  const isUser = useSelector((state) => state.auth.authData);
  const payment = useSelector((state) => state.payment.paymentData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!payment)
      dispatch(getPayment());
  }, [dispatch, payment])


  return (
    isUser ?
      <div div={{ width: "100%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={9} md={9}>
              Your All Payment Methods:
              
            </Grid>
            <Grid item xs={12} lg={3} md={3}>
              All Payments Options:
              <PaymentForm/>
            </Grid>
          </Grid>
        </Box>
      </div> :
      <Navigate to="/auth" />
  )
}

export default Payment