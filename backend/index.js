// import express
const express = require("express");

// import cors
const cors = require("cors");

// initialize express
const app = express();

// only allow from the origin
const corsOptions = {
  origin: "http://localhost:8080",
};

// database
let chats = [
  {
    text: "Hiii",
    createdAt: new Date(),
  },
  {
    text: "Hello",
    createdAt: new Date(),
  },
  {
    text: "afaff",
    createdAt: new Date(),
  },
  {
    text: "fefe",
    createdAt: new Date(),
  },
  {
    text: "yefiw",
    createdAt: new Date(),
  },
  {
    text: "kaaa",
    createdAt: new Date(),
  },
];

app.use(cors(corsOptions));

// GET to get all the messages
app.get("/getMessages", (request, response) => {
  response.send(chats);
});

// GET to get a list of shopping items
app.get("/shopping", (req, res) => {
  console.log("Shopping route is called");
  let items = [
    {
      name: "bruh",
      id: 1,
    },
    {
      name: "Laptop",
      id: 2,
    },
    {
      name: "Food",
      id: 3,
    },
  ];
  res.send(items);
});

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
