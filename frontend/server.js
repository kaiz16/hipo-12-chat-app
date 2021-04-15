const express = require('express');
// server static library
// this will serve dist folder
const serveStatic = require("serve-static")
// 
const path = require('path');

// init express
const app = express();

// get dist folder in current directory
const folderPath = path.join(__dirname, 'dist')
// serve the contents from that folder
const rootFile = serveStatic(folderPath)

app.use(rootFile);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('App is now listening on Port 8080')
});