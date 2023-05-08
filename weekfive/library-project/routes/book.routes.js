// Express method to create routes and export them to app.js
const router = require('express').Router();

// Require Book Model 
const Book = require('../models/Book.model.js');

// GET route to display the form
router.get('/books/create', (req,res)=>{
    res.render('books/book-create.hbs');
});

// POST route to save a new book to the database in the books collection
router.post('/books/create', (req,res)=>{
   //console.log(req.body); 

   // destructuring the req.body object
   const {title, author, description, rating} = req.body;

   async function createBookInDb(){
    try{
        // Creating the Book in Db
        let createdBook = await Book.create({title, author, description, rating});
        //Feedback regarding the Book Created in Db
        ///console.log(`New book created: ${createdBook.title} `);
        res.redirect('/books');
    }
    catch(error){
        console.log(error);
    }
   }

   createBookInDb();
});


// GET route to display the form to update a specific book
router.get('/books/:bookId/edit', (req, res)=>{
    // Destructuring the req.params.bookId object
    const {bookId} = req.params;

    // Feedback regarding req.params.bookId
    // console.log(bookId);

    async function findInfoFromABook(){
        try{
            // get info of the book we want to edit
            let bookToEdit = await Book.findById(bookId);
            // Render info with hbs view
            res.render('books/book-edit.hbs', {book: bookToEdit});
        }
        catch (error){
            console.log(error);
        }
    }

    findInfoFromABook();
});

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
});

// POST route to actually make updates on a specific book

router.post('/books/:bookId/edit', (req, res)=>{
    // destructuring the req.params.bookId
    const {bookId} = req.params; 
    const {title, description,author,rating} = req.body;

    async function updateABookFromDb(){
        try{
          let updatedBook = await Book.findByIdAndUpdate(bookId, {title, description, author, rating}, {new: true});
          res.redirect(`/books/${updatedBook._id}`);
        }
        catch(error){
            console.log(error);
        }
    }

    updateABookFromDb();
});

// POST route to delete a book from the database

router.post('/books/:bookId/delete', (req, res)=>{
    const {bookId} = req.params; 

    async function deleteABookFromDb(){
        try{
            let deletedBook = await Book.findByIdAndDelete(bookId);
            res.redirect('/books');
        }
        catch(error){
            console.log(error);
        }
    }
    deleteABookFromDb();
});

// GET route to retrieve and display details of a specific book
router.get('/books/:bookId', (req,res)=>{
   // Destructuring the req.params.bookId
   const {bookId} = req.params; 

   // Feedback regarding to req.params.bookId
   //console.log('The Id from the URL is:', bookId);

   async function findBookFromDb(){
    try{
        // Finding the Book via Id
        let foundBook = await Book.findById(bookId);
        // Feedback Regarding the found Book
        // console.log(foundBook);
        // Render 
        res.render('books/book-details.hbs', {book: foundBook});
    }
    catch(error){
        console.log(error);
    }
   }

   findBookFromDb();
})

// Export Routes
module.exports = router;