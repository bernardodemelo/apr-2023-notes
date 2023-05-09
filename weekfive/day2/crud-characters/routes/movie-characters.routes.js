const router = require("express").Router();

const ApiService = require('../services/api.service');
const api = new ApiService();

// List All Characters from the API

router.get('/movie-characters/list', (req,res)=>{
    async function showAPICharacters(){
        try{
            // Find characters from the API
            let characters = await api.getAllCharacters();
            console.log(characters);
            res.render('pages/characters-list', {characters: characters.data})

            // render --> renders a hbs file with JS data; 
            // redirect --> redirects to a different Route. ex.: res.redirect('/')
        }
        catch (error){
            console.log(error);
        }
    }  
    showAPICharacters();
});

// Render a form to create a new Character
router.get('/movie-characters/create', (req, res)=>{
    res.render('pages/new-character-form');
});

// Submit info to create a new character

router.get('/movie-characters/:characterId', (req, res) =>{
    // characterId = req.params.characterId; 
    // const {idOfCharacter} = req.params; 
    // idOfCharacter = req.params.idOfCharacter;
    const {characterId} = req.params;
})

router.post('/movie-characters/create', (req,res) => {
    const {name, occupation, weapon}  = req.body;

    async function createAPICharacter(){
    try{
        let newCharacter = await api.createCharacter({name, occupation, weapon});
        res.redirect('/movie-characters/list');
    }
    catch(error){
        console.log(error);
    }
    }
    createAPICharacter();
})

module.exports = router;