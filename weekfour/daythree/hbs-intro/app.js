// Require Express
const express = require('express');

// Express server that handles requests and responses
const app = express();

// Make everything inside public available - static files
app.use(express.static('public'));

// Creating a path ponting to folder views
app.set("views", __dirname + "/views");

// Set Hbs as a view engine
app.set("view engine", "hbs");

//Create a Route

app.get("/", (req, res)=>{
    let data = {
        name: 'Ironhacker', 
        lastName: 'Blue',
        bootcamp: '<span>Ironhack Web Dev</span>', 
        address: {
            street: "Your heart",
            number: 87
        },
        cities: ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Mexico City", "Miami", "Paris", "Sao Paulo"] 
    }

    res.render("index", data);
})

// Server listens only on what is written on PORT 3000
app.listen(3000, ()=> console.log('Server is listening on PORT 3000'));