// Require Packages
const express = require('express');
const hbs = require('hbs');

// Express Configuration
const app = express();

// HBS Configuration
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// Route Params
app.get('/users/:artist', (req, res)=>{
    //console.log(req);
    //res.send(req.params);
    let data = {
        artist: req.params.artist
    };

    res.render("index", data);
}); 

// Library Web App

app.get('/users/:username/books/:bookId', (req,res)=>{
    let data = {
        user: req.params.username, 
        bookId : req.params.bookId
    }; 
    res.render("book", data);
})

// Create a Get Route with '/ironhack/:bootcamp'
// Create a bootcamp.hbs inside views
// Connect the value of the route parameter to HBS; 
// It could be inside a <h1>{{exampleValue}}</h1>

// Exercise 1
// Creating the 'GET' Route
app.get('/ironhack/:bootcamp', (req, res)=>{
    let data = {
        bootcamp: req.params.bootcamp
    }

    res.render("bootcamp", data);
});


/* Query Strings */
// First Example
/* 
app.get('/search', (req, res)=> {
    res.send(req.query);
});
*/

// Search Form
app.get('/', (req,res)=>{
    res.render('search');
}); 

// Return of the Search
app.get('/artist-search', (req,res)=>{
    let data = req.query; 
    res.render('artist', data);
})

// Exercise 1 
// Create a '/search-animals' route
// Render to a 'search-animals' hbs file
// Create a form inside 'search-animals.hbs' with a text input 
// that returns you to '/animals-info' route. 

// Create a 'animals-info' route and display the searched animal
// inside a hbs file.

// Create the Form
app.get('/search-animals', (req,res)=>{
    res.render('search-animals');
});

// Returned Route of the Form
// Displays req.query
app.get('/animals-info', (req, res)=>{
    let data = req.query; 
    res.render('animals-info',data);
});

app.listen(3000, ()=> console.log('Express is ready on PORT 3000'));