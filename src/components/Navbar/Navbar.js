import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/logo.png";
import './NavbarStyles.scss'
import { IconButton, Badge, Button } from "@mui/material";
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Dialog from '../Dialog/Dialog'
import { PizzaStoreContext } from "../../context/Context";
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useNavigate, NavLink } from "react-router-dom";
import { LOGOUT } from "../../constants/actionTypes";

const settings = ['Profile', 'Order', 'Payment', 'Logout'];

const Navbar = () => {
	// hooks
	const {
		state: { noOfItem },
	} = useContext(PizzaStoreContext);
	const [openCart, setopenCart] = useState(false)
	console.log(openCart);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isUser = useSelector((state) => state.auth.authData);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};


	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleMenu = (setting) => {
		console.log(setting);
		switch (setting) {
			case 'Profile':
				handleCloseUserMenu();
				navigate('/profile')
				break;
			case 'Order':
				handleCloseUserMenu();
				navigate('/order');
				break;
			case 'Payment':
				handleCloseUserMenu();
				navigate('/payment');
				break;
			case 'Logout':
				handleCloseUserMenu();
				dispatch({ type: LOGOUT });
				break;

			default:
				break;
		}
	};

	return (
		<nav className="appbar">
			<div className="appbar-logo">
				<img
					src={logo}
					alt="E-commerce"
					height="25px"
				></img>
				<NavLink to="/">&ensp; E-Pizza Store</NavLink>
			</div>
			{isUser ?
				<div className="cart">
					{
						<Dialog
							openCart={openCart}
							setopenCart={setopenCart}
						/>
					}
					<IconButton
						onClick={() => setopenCart(true)}
						aria-label="show cart"
						color="inherit"
					>
						<Badge
							badgeContent={noOfItem}
							color="secondary">
							<ShoppingCart />
						</Badge>
					</IconButton>
					&ensp;
					<Tooltip title="Open settings">
						<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
							<Avatar alt={isUser && isUser.result.name} src="/static/images/avatar/2.jpg" />
						</IconButton>
					</Tooltip>
					<Menu
						sx={{ mt: '45px' }}
						id="menu-appbar"
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorElUser)}
						onClose={handleCloseUserMenu}
					>
						{isUser && settings.map((setting) => (
							<MenuItem key={setting} onClick={() => handleMenu(setting)} name={setting}>
								<Typography textAlign="center">{setting}</Typography>
							</MenuItem>))}
					</Menu>
				</div> :
				<div>
					<Button color="inherit" onClick={() => navigate("/auth")}>Login</Button>
				</div>}
		</nav>

	);
};

export default Navbar;
