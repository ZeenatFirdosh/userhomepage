import React, { useContext, useEffect, useRef, useState } from "react";
import userContext from "../context/users/userContext";
import Rows from './Rows';

const Table = () => {
  const context = useContext(userContext);
  const {users, getUsers, deleteUser} = context;

  useEffect(() => {
    getUsers();
  
  }, [users])
  
  return (
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">----</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
            
          {users.map((user) => {
          return <Rows key={user._id} user={user} deleteUser={deleteUser} />;
        })}

        </tbody>
      </table>
    </div>
  );
};

export default Table;
