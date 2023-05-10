// Require Axios 
const axios = require('axios');

class ApiService {
    constructor(){
        this.api = axios.create({
            baseURL: 'https://ih-crud-api.herokuapp.com'
        });
    }; 

    // CRUD Functions

    // Create
    createCharacter = (characterInfo) => { // characterInfo is a parameter
        return this.api.post('/characters', characterInfo);
    }

    // Read 
    getAllCharacters = () => {
        return this.api.get('/characters'); //this on arrow functions is referring to the Class
    }; 

    getOneCharacter = (characterId) =>{
        return this.api.get(`/characters/${characterId}`);
    };

    // Update 
    editCharacter = (characterId, characterInfo) => {
        return this.api.put(`/characters/${characterId}`, characterInfo);
    }

    // Delete
    deleteCharacter = (characterId) => {
        return this.api.delete(`/characters/${characterId}`);
    }
}

module.exports = ApiService;

