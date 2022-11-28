import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import NewOrderCard from '../components/OrderCard/NewOrderCard';
import { Navigate } from 'react-router-dom';
import { getOrder } from '../actions/order'



const Order = () => {

    const isUser = useSelector((state) => state.auth.authData);
    const orders = useSelector((state) => state.order.orderData);
    const dispatch = useDispatch();

    

    useEffect(() => {
        if (!orders)
            dispatch(getOrder());

    }, [dispatch, orders])

    return (
        isUser ?
            < div style={{ width: "100%" }} >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} lg={9} md={9}>
                            <>
                                <div style={{ width: "400px" }}>
                                    <h3>Orders History:</h3>
                                </div>
                                {orders && orders.data.map((allItems, index) =>
                                    <>
                                        <h4 style={{ textDecoration: "underline", color:"gray"}}>{new Date(allItems.createdAt).toLocaleString()}</h4>
                                        <NewOrderCard allItems={allItems} key={index} />
                                    </>
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