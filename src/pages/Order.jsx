import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import NewOrderCard from '../components/OrderCard/NewOrderCard';
import { Navigate } from 'react-router-dom';



const Order = () => {
    
    const isUser = useSelector((state) => state.auth.authData);
    const orders = useSelector((state) => state.order.orderData);

    return (
        isUser ?
            < div style={{ width: "100%" }} >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={9} md={9}>
                            <>
                                <div style={{ width: "400px" }}>
                                    <h3>All Your Orders:</h3>
                                </div>
                                {orders && orders.data.map((allItems, index) =>
                                    <NewOrderCard allItems={allItems} key={index} />
                                )
                                }
                            </>
                        </Grid>
                    </Grid>
                </Box>
            </div > :
            <Navigate to="/auth" />
    )
}

export default Order