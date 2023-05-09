const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        trim: true, // remove spaces 
        required: true, 
        unique: true
    },
    email: {
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true, 
        trim: true,
    }, 
    password: {
        type: String, 
        required: true,
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
}, 
{
    timestamps: true
}
);

module.exports = model('User', userSchema); // exporting the User Model