import React, { useState, useEffect } from "react";
import { Avatar, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { makeStyles } from "@mui/styles";
import Ccard from "./Ccard";


const useStyles = makeStyles({
  dialogPaper: {
    borderRadius: "20px"
  }
});


function Card({ profile }) {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    if (currentId)
      setOpen(true);
  }, [currentId])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <div>
      {open &&
        <Dialog open={open}
          onClose={handleClose}
          className={classes.dialogPaper}
        >
          <DialogTitle>Management Details</DialogTitle>
          {/* <ManagementForm setOpen={setOpen} setCurrentId={setCurrentId} currentId={currentId} /> */}
        </Dialog>
      }
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
          minHeight: "200px",
          flexWrap: "wrap",
        }}
      >
        {profile && <Ccard data={profile} handleClickOpen={handleClickOpen} />}
      </div>
    </div>
  );
}

export default Card;
