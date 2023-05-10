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

// Submit info of Character Created
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

// Render a form to edit a character --> GET Route
router.get('/movie-characters/edit/:id', (req,res)=>{
    const characterId = req.params.id;

    async function getAPICharacterInfo(){
        try{
        let characterInfo = await api.getOneCharacter(characterId);
        res.render('pages/edit-character-form', {character: characterInfo. data})
        } 
        catch(error){
            console.log(error);
        }
    }

    getAPICharacterInfo();
});

// Submit the edited character --> POST Route

router.post('/movie-characters/edit/:id', (req,res)=>{
    const characterId = req.params.id; 

    const {name, occupation, weapon} = req.body;

    async function editAPICharacter(){
        try{
            let editedCharacter = await api.editCharacter(characterId, {name, occupation, weapon});
            res.redirect('/movie-characters/list');
        }
        catch(error){
            console.log(error);
        }
    }

    editAPICharacter();
});

// Delete a character with matching Id 

router.post('/movie-characters/delete/:id', (req,res)=>{
    // const characterId = req.params.characterId;
    // const {characterId} = req.params; --> CHICO MACAREU DOESN'T APPROVE 
    const {id} = req.params; // --> CHICO MACAREU APPROVES

    async function deleteAPICharacter(){
        try{
            // DRY - Don't Repeat Yourself
            await api.deleteCharacter(id);
            res.redirect('/movie-characters/list');
        }
        catch(error){
            console.log(error);
        }
    }

   deleteAPICharacter();
})

module.exports = router;