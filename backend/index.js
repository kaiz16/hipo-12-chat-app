// import express
const express = require("express");
const url =
  "mongodb+srv://admin:123@cluster0.gxxib.mongodb.net/database?retryWrites=true&w=majority";
const mongoose = require("mongoose");
// import cors
const cors = require("cors");

const Schema = mongoose.Schema;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});
// creating message schema
let messageSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

let userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true
  }
})

// model
const Message = mongoose.model("messages", messageSchema);
const User = mongoose.model("users", userSchema);

// initialize express
const app = express();

// only allow from the origin
const corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));

// tell express to use json
app.use(express.json())

// GET to get all the messages
app.get("/messages", (request, response) => {
  response.send([]);
});

app.get('/users', async (req, res) => {
   const users = await User.find({})

   res.send(users)
})

app.post('/newUser', async (req, res) => {
  let username = req.body.username
  let email = req.body.email
  let firstName = req.body.firstName

  let user = new User({
    firstName: firstName,
    email: email,
    username: username,
  })

  await user.save()

  res.send(user)
})

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
