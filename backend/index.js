// import express
const express = require("express");
const url =
  "mongodb+srv://admin:123@cluster0.gxxib.mongodb.net/database?retryWrites=true&w=majority";
const mongoose = require("mongoose");
// import cors
const cors = require("cors");

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

mongoose.connection.on('open', () => {
  console.log('yay')
})

// initialize express
const app = express();

// only allow from the origin
const corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));

// tell express to use json
app.use(express.json())

app.use('/messages', require('./controllers/message.js'))

app.listen(5000, () => {
  console.log("app is listening on port 5000");
});
