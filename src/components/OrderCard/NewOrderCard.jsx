import React, { useContext } from 'react'
import nonVeg from '../../assets/veg.png';
import veg from '../../assets/non-veg.png';
import { Button } from '@mui/material';
import { PizzaStoreContext } from '../../context/Context';


const NewOrderCard = ({ allItems }) => {
    const {
        state: { cartItem, noOfItem },
        PizzaStoreContextDispatch,
    } = useContext(PizzaStoreContext);

    const handleClick = (Item) => {
        PizzaStoreContextDispatch({
            type: "setCartItem",
            payload: Item,
        });
        PizzaStoreContextDispatch({
            type: "setNoOfItem",
            payload: noOfItem + 1,
        });
    }
    return (
        <div>
            {allItems.items.map((item, index) =>
                <div className='outer' key={index}>
                    <div className='itemDiv'>
                        <div className="Itype">
                            <img src={item.isVeg ? veg : nonVeg} alt="veg" />
                        </div>
                        <div className='rightSec'>
                            <div className='first'>
                                <div className='div1'>
                                    <h3>{item.name}</h3>
                                    <h5>{item.quantity} X ${item.amount}  :  ${item.finalAmount}</h5>
                                    <p>Size: {item.size.size}</p>
                                    <p>Toppings: {item.toppings.name} </p>
                                </div>
                                <div className='div2'>
                                    <Button variant='primary' style={{ background: "red", color: "#fff" }}
                                        onClick={()=> {handleClick(item)}}
                                    >Reorder</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}

export default NewOrderCard