import React from "react";
import "./pizzaStyles.scss";
import veg from "../../assets/veg.png"
import nonVeg from "../../assets/non-veg.png"
import GroupButton from '../GroupButton/GroupButton'
import { Button, Rating } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_ITEM } from "../../constants/actionTypes";


const PizzaSection = ({ pizza, onAddToCart }) => {
	// styles hooks of material UI
	const isAdmin = useSelector((state) => state.admin.adminData);
	console.log("admin", isAdmin);
	const dispatch = useDispatch();
	const onDelete = (data) => {
		dispatch({ type: DELETE_ITEM, payload: { items: data } });
	}



	return (
		<div className="card">
			<div className="leftSection">
				<div className='imageDiv'>
					<img src={pizza.img_url} alt={pizza.name} />
				</div>
				<div className="type">
					<img src={pizza.isVeg ? veg : nonVeg} alt="" />
				</div>
			</div>
			<div className="rightSection">
				<div className="MainSec">
					<div className="textSec">
						<h3>{pizza.name}</h3>
						<div className="rating" >
							<Rating
								name="half-rating-read"
								label={pizza.rating}
								value={pizza.rating}
								precision={0.5}
								readOnly
							/>
							&ensp;{pizza.rating}
						</div>
						<p style={{ fontWeight: "600" }} > ${pizza.price}</p>
						<div className="descriptionSec">
							{pizza.description}
						</div>

					</div>
					{isAdmin && isAdmin ?
						<div className="buttonSec">
							<div style={{ background: "red", color: "#fff" }}>
								<Button variant="primary" style={{ background: "red" }} onClick={onDelete(pizza)}>Delete</Button>
							</div>
						</div>
						: <div className="buttonSec">
							<div>
								<GroupButton pizza={pizza} />
							</div>
						</div>
					}

				</div>

			</div>

		</div>
	);
};

export default PizzaSection;
