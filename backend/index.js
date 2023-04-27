const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userModel = require('./models/user');

const app = express();

app.use(cors());
app.use(express.json());
// key=process.env.MONGO_CONNECTION;
mongoose.connect("mongodb+srv://zeenatfirdoshquadri:zeenatfirdoshquadri@cluster0.tl3advw.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(
    console.log("success Mongo atlas connected")
);
// get ********************************
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Create a new user in the database********************
app.post('/user/create', async (req, res) => {
  const { firstname,lastname } = req.body;

  
  const newUser = await userModel.create({
    firstname,lastname,
  });

  res.json({
    message: 'User created successfully',
    data: newUser,
  });
});

// Get all users from the database*******************************
app.get('/users', async (req, res) => {
  try{
  const users = await userModel.find({});

  res.json( users)
  // res.json({
  //   message: 'Users fetched successfully',
  //   data: users,
  // })
}
catch(error){
  res.status(500).send("internal server error");
}
});

// ROUTE 3: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
app.delete('/deletenote/:id', async (req, res) => {
  try {
      // Find the user to be delete and delete it
      let user = await userModel.findById(req.params.id);
      if (!user) { return res.status(404).send("Not Found") } 
        
      user = await userModel.findByIdAndDelete(req.params.id)

      res.json({ "Success": "user has been deleted", user: user });
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

app.listen(4000, () => {
  console.log('Server started on port 4000');
});