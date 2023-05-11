const express = require('express');
const router = express.Router();

// Require the Movie Model 
const Movie = require('../models/Movie.model');

// Require fileUploader
const fileUploader = require('../config/cloudinary.config');

// CRUD - ExpressJS Routes
// Create --> 1 GET route to display a form
// Create --> 1 POST route to submit the data of the form
// Read --> 1 GET route to display data
// Update --> 1 GET route to display a form with original data
// Update --> 1 POST route to submit the updated data
// Delete --> 1 POST route to delete the data

// Create a Movie

// Display a form
router.get('/movies/create', (req,res)=>{
    res.render('movie-views/movie-create');
});

router.post('/movies/create', fileUploader.single('movie-cover-image'), (req,res)=>{
    const {title, description} = req.body; 

    async function createMovieInDb(){
        try{
        await Movie.create({title, description, imageUrl: req.file.path});
        //console.log(createdMovie);
        res.redirect('/movies');
        }
        catch(error){
            console.log(error);
        }
    }

    createMovieInDb();
});

// GET route to display movies
router.get('/movies', (req,res)=>{
    async function getMoviesFromDb(){
        try{
        let foundMovies = await Movie.find();
        res.render('movie-views/movie-list.hbs', {movies: foundMovies});
        }
        catch(error){
            console.log(error);
        }
    }
    getMoviesFromDb();
});


// GET Route to Display a Form 
router.get('/movies/:id/edit', (req,res)=>{
    const {id} = req.params;

    async function getEditedMovie(){
        try{
            let foundMovie = await Movie.findById(id);
            res.render('movie-views/movie-edit', foundMovie);
        }
        catch(error){
            console.log(error);
        }
    }

    getEditedMovie();
});

// POST Route to save the updated data
router.post('/movies/:id/edit', fileUploader.single('movie-cover-image'), (req,res) =>{
    const {id} = req.params; 

    const {title, description, existingImage} = req.body;

    let imageUrl; 
    if(req.file){
        imageUrl = req.file.path;
    } else {
        imageUrl = existingImage;
    }

    async function findMoviesAndUpdate(){
        try{
            let foundMovie = await Movie.findByIdAndUpdate(id, {title, description, imageUrl}, {new: true});
            res.redirect('/movies');
        }
        catch(error){
            console.log(error);
        }
    }
    findMoviesAndUpdate();
})


module.exports = router; 

