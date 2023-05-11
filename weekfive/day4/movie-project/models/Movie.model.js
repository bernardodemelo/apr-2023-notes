// Require Mongoose
const mongoose = require ('mongoose');
const {Schema, model} = mongoose; 

// title, description, imageUrl
const movieSchema = new Schema(
    {
        title: String, 
        description: String, 
        imageUrl: String
    },
    {
        timestamps: true
    }
);

module.exports = model('Movie', movieSchema);