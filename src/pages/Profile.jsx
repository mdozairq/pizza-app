import React from 'react'
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileCard from '../components/Card/ProfileCard';
import OrderCard from '../components/Card/OrderCard';
import PaymentCard from '../components/Card/PaymentCard';
import Addresscard from '../components/Card/AddressCard';

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isUser  = useSelector((state) => state.auth.authData);
    const orders  = useSelector((state)=> state.order.orderData)

    return (
        isUser ?
            <>
                <ProfileCard profile={isUser} />
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    width: "100%",
                    minHeight: "200px",
                    flexWrap: "wrap",
                }}>
                    <OrderCard />
                    <PaymentCard />
                    <Addresscard />
                </div>
            </>
            :
            <Navigate to="/" />
    )
}

export default Profile