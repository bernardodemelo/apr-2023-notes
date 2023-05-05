// Express
const express = require('express');
const app = express();

const path = require('path');

//HBS
const hbs = require('hbs');

// PunkApi
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

// Set View Engine as HBS
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// 'Get' Route to Search for a Beer
app.get('/', (req, res) => {
    res.render("index");
});


// Retrieves you a Random Beer
app.get('/searched-beer', (req, res)=>{
    async function getBeers(){
        try{ let randomBeer = await punkAPI.getRandom();
            res.render("beer", {randomBeer});
        } catch (error) {
            console.log(error);
        }
    }
    getBeers();
})

// Server Listening on PORT 3000
app.listen(3000, ()=> console.log('App is listening on PORT 3000!'))