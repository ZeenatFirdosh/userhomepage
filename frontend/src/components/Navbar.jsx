import React, { useContext, useEffect, useRef, useState } from "react";
import userContext from "../context/users/userContext";




const Navbar = () => {

  const context = useContext(userContext);
  const {users, getUsers, addUser} = context;
  
  const ref = useRef(null);
  const refClose = useRef(null)
  const [user, setUser] = useState({ fname: "", lname: ""})

  const updateNote = (currentNote) => {
    ref.current.click();
    setUser({ fname: currentNote.fname, lname: currentNote.lname})
    
  };

  const handleClick = (e) => {
    addUser( user.fname, user.lname);
    setUser({ fname: "", lname: ""});
    refClose.current.click();
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <nav class="navbar bg-body-tertiary sticky-top">
        <form class="container-fluid justify-content-end">
          <button onClick={()=>{updateNote(user)}} class="btn btn-outline-success me-2" type="button">
            Add User
          </button>
        </form>
        </nav>

        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add User</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="fname" name="fname" value={user.fname} onChange={onChange} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="lname" name="lname" value={user.lname} onChange={onChange} />
                                </div>
                                 
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button  onClick={handleClick} type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default Navbar;
