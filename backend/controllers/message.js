const express = require('express')
const router = express.Router()
const Message = require('../models/message')

// GET all messages
router.get('/', async (req, res) => {
  const messages = await Message.find({});

  res.send(messages);
})

// POST to send message
router.post('/create', async(req, res) => {
  let username = req.body.username;
  let text = req.body.text;

  let message = new Message({
    username: username,
    text: text
  })

  await message.save();

  res.send(message);
})

// Delete to delete messages
router.delete('/delete', async (req, res) => {
  await Message.deleteMany({})
  res.send() // default 200
})


module.exports = router