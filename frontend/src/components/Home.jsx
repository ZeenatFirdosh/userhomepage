import React, {useContext, useState} from 'react'
import userContext from "../context/users/userContext"



const Home = () => {

  const context = useContext(userContext);
  const {addUser} = context;

    const [user, setUser] = useState({firstname: "", lastname: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addUser(user.firstname, user.lastname);
        setUser({firstname: "", lastname: ""})
    }

    const onChange = (e)=>{
        setUser({...user, [e.target.name]: e.target.value})
    }

  return (


    <div>
      <div class="card w-75 mb-3 ">
        <h5 class="card-header">User Details</h5>
        <div class="card-body">
          <h5 class="card-title">Please write your name
          </h5>
                    
          <div class="mb-3 row">
        <label for="firstname" class="col-sm-2 col-form-label">
          First Name
        </label>
        <div class="col-sm-10">
          <input type="text"  class="form-control" id="firstname" name="firstname" value={user.firstname} onChange={onChange} placeholder= "First Name" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="lastname" class="col-sm-2 col-form-label">
          Last Name
        </label>
        <div class="col-sm-10">
          <input type="text"  class="form-control" id="lastname" name="lastname" value={user.lastname} onChange={onChange} placeholder= "Last Name" />
        </div>
        
      </div>

          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2" type="button">Cancel</button>
            <button class="btn btn-primary" type="submit" onClick={handleClick}>Save</button>
          </div>
        </div>
      </div>

      
      
    </div>
  );
};

export default Home;
