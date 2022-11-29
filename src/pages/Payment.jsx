import React, { useEffect, useState } from 'react'
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
  const payments = useSelector((state) => state.payment.paymentData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!payments)
      dispatch(getPayment());
  }, [dispatch, payments])


  return (
    isUser ?
      <div div={{ width: "100%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={9} md={9}>
              <Box >
                <h2 color="gray">Your All Payment Methods:</h2>
                {payments && payments.data.length <= 0 ? <h2 style={{ textAlign: "center" }}>Not Available</h2> :
                  payments && payments.data.map((eachPayment, index) => (
                    <>
                      <div key={index}>
                        <h4>Payment Type Used: {eachPayment.paymentType}</h4>
                        {eachPayment.paymentType === 'upi' ? <>
                          <div style={{
                            display: "inline-flex",
                            margin: "5px",
                            flexDirection: "row"
                          }}><p>UPI ID: </p>&ensp;<p style={{ color: "gray" }}>{eachPayment.upi}</p></div>
                        </>
                          : eachPayment.paymentType === 'card' ? <>
                            <div style={{
                              display: "inline-flex",
                              margin: "5px",
                              flexDirection: "row"
                            }}><p>Card Number : </p>&ensp;<p style={{ color: "gray" }}>{eachPayment.cardNumber}</p></div>
                            <div style={{
                              display: "inline-flex",
                              margin: "5px",
                              flexDirection: "row"
                            }}><p>Expiry Date :</p>&ensp;<p style={{ color: "gray" }}>{eachPayment.expiryDate}</p></div>
                          </> : <>
                            <div style={{
                              display: "inline-flex",
                              margin: "5px",
                              flexDirection: "row"
                            }}><p>Bank Name : </p>&ensp;<p style={{ color: "gray" }}>{eachPayment.bankName}</p></div>
                            <div style={{
                              display: "inline-flex",
                              margin: "5px",
                              flexDirection: "row"
                            }}><p>IFSC Code:</p>&ensp;<p style={{ color: "gray" }}>{eachPayment.ifscCode}</p></div>
                            <div style={{
                              display: "inline-flex",
                              margin: "5px",
                              flexDirection: "row"
                            }}><p>Account Number:</p> &ensp;<p style={{ color: "gray" }}>{eachPayment.accountNumber}</p></div>
                          </>}
                      </div>
                    </>)
                  )}

              </Box>

            </Grid>
            <Grid item xs={12} lg={3} md={3}>
              <PaymentForm />
            </Grid>
          </Grid>
        </Box>
      </div> :
      <Navigate to="/auth" />
  )
}

export default Payment