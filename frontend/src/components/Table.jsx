import React, { useContext, useEffect, useRef, useState } from "react";
import userContext from "../context/users/userContext";
import Rows from './Rows';

const Table = () => {
  const context = useContext(userContext);
  const {users, getUsers, deleteUser} = context;

  useEffect(() => {
    getUsers();
  
  }, [users])
  
  // const ref = useRef(null);
  // const refClose = useRef(null)
  // const [user, setUser] = useState({id: "", etitle: "", edescription: "", etag: ""})

  // const updateNote = (currentNote) => {
  //   ref.current.click();
  //   setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
    
  // };

  // const handleClick = (e) => {
  //   editNote(note.id, note.etitle, note.edescription, note.etag)
  //   refClose.current.click();
  // };

  // const onChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };
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
