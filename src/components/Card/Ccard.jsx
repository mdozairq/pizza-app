
import React from 'react';
import { Avatar } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import './Card.css'
import Tooltip from '@mui/material/Tooltip';
import Button from "@mui/material/Button";


function Ccard({ data, handleClickOpen }) {
  const myDate = new Date(data.result.dob)
  const dob = myDate.toDateString();
  console.log(data.result)
  return (
    <div className="cardDiv" >
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          UPDATE
        </Button>
      </div>
      <div className="upperHalf">
        <div className='imageDiv'>
          <Avatar alt={data.result.name} src={data.result.img ? data.result.img : "static/images/avatar/1.jpg"} sx={{ width: 150, height: 150 }} />
        </div>
        <div className='studentDetails'>
          <div><p>Name : </p>&ensp;<p style={{color:"gray"}}>{data.result.name}</p></div>
          <div><p>Username :</p>&ensp;<p style={{color:"gray"}}>{data.result.username}</p></div>
          <div><p>Date of Birth :</p> &ensp;<p style={{color:"gray"}}>{dob}</p></div>
          <div><p>Email:</p> &ensp; <p style={{color:"gray"}}>{data.result.email}</p></div>
        </div>
      </div>
      <div className='lowerDiv'>
        {/* <div className='buttonSection'>
                  <Button color="primary" variant="contained" onClick={()=>setCurrentId(data.result._id)}>Edit</Button>
                  <Button color="error" variant="contained" style={{marginLeft:"10px"}} onClick={() => dispatch(deleteManagement(data.result._id))}>Delete</Button>
              </div> */}
      </div>
    </div>
  )
}

export default Ccard
