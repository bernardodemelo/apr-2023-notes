// Express method to create routes and export them to app.js
const router = require('express').Router();

// Require Book Model 
const Book = require('../models/Book.model.js');

// GET route to retrieve and display all the books
router.get('/books', (req,res)=>{
  async function findAllBooksFromDb(){
    try{
        // Find all the books inside the collection 
        let allBooksFromDb = await Book.find();

        // Feedback regarding to found books
        // console.log('Retrieved books from DB:', allBooksFromDb);

        // Render all books from DB with hbs view
        res.render('books/book-list.hbs', {books: allBooksFromDb});
    }
    catch(error){
        console.log(error);
    }
  }
  findAllBooksFromDb();
})

// Export Routes
module.exports = router;