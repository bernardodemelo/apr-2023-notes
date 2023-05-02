// Require the Express npm Package
const express = require('express');

// Express App 
// Creating our server named app
const app = express();

// Make everything inside public available
app.use(express.static('public'));

// Route 

// HTTP Verbs: 
// GET - Get information; 
// POST - Post new information; 
// DELETE - Delete information; 
// PUT - Update Information

// Creating a 'GET' Route
app.get('/home', (request, response, next)=>{
    response.sendFile(__dirname + '/views/home-page.html');
}); 

// Create a Second Route 
app.get('/cat', (request, response)=>{
  response.sendFile(__dirname + '/views/cat-page.html');
})

// Start the Server
app.listen(3000, ()=> console.log('App is listening on PORT 3000'));