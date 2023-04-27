import { useContext, useEffect, useRef, useState } from "react";
import userContext from "../context/users/userContext";

import * as React from 'react';
import {Button} from '@mui/material';
// import Dialog from '@mui/material/Dialog';
import {DialogActions} from '@mui/material';
import {DialogContent} from '@mui/material';
import {DialogContentText} from '@mui/material';
import {DialogTitle} from '@mui/material';
import { Dialog } from '@mui/material';

 

const Rows = ({user}) => {
  const context = useContext(userContext);
  const { deleteUser} = context;

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
      
    
  
  
  return (
    <>
<div>
        {/* <Button variant="outlined" onClick={handleClickOpen}>
          Open alert dialog
        </Button> */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Delete?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure to Delete the User...
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={()=>{
                deleteUser(user._id);
                handleClose()
                }} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>

         <tr>            
            <td>{user.firstname}</td>
            <td>{user.lastname} </td>
            <td><button type="button" class="btn btn-dark" onClick={handleClickOpen}>Delete</button></td>
            {/* <td><button type="button" class="btn btn-dark" onClick={()=>{deleteUser(user._id)}}>Delete</button></td> */}
          </tr>
    </>
  )
}

export default Rows