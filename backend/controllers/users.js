const express = require('express')
const router = express.Router()
const User = require('../models/user.js')

// controller/route to create new user
router.post("/newUser", async (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let firstName = req.body.firstName;

  let user = new User({
    firstName: firstName,
    email: email,
    username: username,
  });

  await user.save();

  res.send(user);
});

// route to get alll users
router.get("/users", async (req, res) => {
  const users = await User.find({});

  res.send(users);
});

module.exports = router