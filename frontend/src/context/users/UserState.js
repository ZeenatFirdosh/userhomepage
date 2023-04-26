import UserContext from "./userContext";
import { useState } from "react";

const UserState = (props) => {
  const host = "http://localhost:4000";
//   const host = "https://yellow-optician-esbgq.pwskills.app:4000/";
  const usersInitial = [
    {
      "_id": "64495b4a562b3eb7031cc616",
      "firstname": "zee",
      "lastname": "nat",
      "createdAt": "2023-04-26T17:11:38.448Z",
      "updatedAt": "2023-04-26T17:11:38.448Z",
      "__v": 0
    },
    {
      "_id": "64495b59562b3eb7031cc618",
      "firstname": "zeenat",
      "lastname": "for",
      "createdAt": "2023-04-26T17:11:53.574Z",
      "updatedAt": "2023-04-26T17:11:53.574Z",
      "__v": 0
    }
  ];
  const [users, setUsers] = useState(usersInitial);

  // Get all Notes
  const getUsers = async () => {
    // API Call
    const response = await fetch(`${host}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        
      },
    });
    const json = await response.json();
    console.log(json);
    setUsers(json);
  };

  // Add a User*********************************************************
  const addUser = async (firstname,lastname) => {
    
    // API Call
    const response = await fetch(`${host}/user/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
                  
      },
      body: JSON.stringify({ firstname,lastname }),
    });

    const user = await response.json();
    // console.log(json)

   
    setUsers(users.concat(user));
  };

  // Delete a Note********************************************************************
    const deleteUser = async (id) => {
      // API Call
      const response = await fetch(`${host}/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          
        }
      });
      const json = response.json();
      console.log(json)
    console.log("Deleting the note with id" + id);
    const newUsers = users.filter((user) => { return user._id !== id });
    setUsers(newUsers);
  };

 
  return (
    <UserContext.Provider value={{ users, addUser, deleteUser, getUsers }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
