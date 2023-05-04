// Requiring Mongoose
const mongoose = require('mongoose');

// Calling 'Schema' method
const Schema = mongoose.Schema;

const catSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        trim: true
    }, 
    age: {
        type: Number, 
        min: 0, 
        max: 83
    }, 
    color: {
        type: String, 
        lowercase: true, 
        enum: ['orange', 'yellow', 'brown', 'tan']
    }, 
    avatar: {
        type: String,
        default: 'https://i.guim.co.uk/img/media/dba3baaf6a32993d719f530263667aabd12c0573/0_207_2316_2893/master/2316.jpg?width=445&quality=85&dpr=1&s=none'
    }
})

// Creating the Model 
const Cat = mongoose.model('Cat', catSchema);

// Export the Model 
module.exports = Cat;