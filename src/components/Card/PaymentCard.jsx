
import React from 'react';
import { Avatar } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import './Card.css'
import Tooltip from '@mui/material/Tooltip';
import Button from "@mui/material/Button";


function PaymentCard() {  
//   console.log(data.result)
  return (
    <div className="cardDiv" >
    
      <div>
          <Button variant="outlined" color="primary" 
        //   onClick={handleClickOpen}
          >
            UPDATE
          </Button>
        </div>
      <div className="upperHalf">
      <h2>Payment Details</h2>
        {/* <div className='imageDiv'>
          <Avatar alt={data.result.name} src={data.result.img ? data.result.img : "static/images/avatar/1.jpg"} sx={{ width: 150, height: 150 }} />
        </div>
        <div className='studentDetails'>
          <h4>Name : &ensp;{data.result.name}</h4>
          <p>Username :&ensp;{data.result.username}</p>
          <p>Date of Birth :&ensp;{data.result.dob}</p>
          <p>Email: &ensp; {data.result.email}</p>
        </div>
      </div>
      <div className='lowerDiv'>
        <div className='linkSection'>
          <div><Tooltip title={data.result.email ? data.result.email : "Gmail"} placement="top" arrow><a href={`mailto:abc@gmail.com`} target='_blank' rel="noreferrer"><MailOutlineIcon /></a></Tooltip></div>
          <div><Tooltip title={data.result.phone ? data.result.phone : "Phone number"} placement="top" arrow><a href={`tel:+91${data.result.phone}`} target='_blank' rel="noreferrer"><PhoneIcon /></a></Tooltip></div>
        </div> */}
        {/* <div className='buttonSection'>
                  <Button color="primary" variant="contained" onClick={()=>setCurrentId(data.result._id)}>Edit</Button>
                  <Button color="error" variant="contained" style={{marginLeft:"10px"}} onClick={() => dispatch(deleteManagement(data.result._id))}>Delete</Button>
              </div> */}
      </div>
    </div>
  )
}

export default PaymentCard
