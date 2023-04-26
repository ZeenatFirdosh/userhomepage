import React, { useContext, useEffect, useRef, useState } from "react";
import userContext from "../context/users/userContext";

const Rows = ({user}) => {
  const context = useContext(userContext);
  const { deleteUser} = context;

  return (
    
         <tr>            
            <td>{user.firstname}</td>
            <td>{user.lastname} </td>
            <td><button type="button" class="btn btn-dark" onClick={()=>{deleteUser(user._id)}}>Delete</button></td>
          </tr>
    
  )
}

export default Rows