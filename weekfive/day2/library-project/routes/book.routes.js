// Express method to create routes and export them to app.js
const router = require('express').Router();

// Require Book Model 
const Book = require('../models/Book.model.js');
// Require User Model 
const User = require('../models/User.model.js');
// Require Review Model 
const Review = require('../models/Review.model.js');


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
        // Find all the users
        const users = await User.find();


        // Finding the Book via Id
        let foundBook = await Book.findById(bookId);
        await foundBook.populate('reviews author')
        await foundBook.populate({
            path:'reviews', 
            populate: {
                path:'author', 
                model: 'User'
            }
        });
        // Feedback Regarding the found Book
        // console.log(foundBook);
        // Render 
        res.render('books/book-details.hbs', {book: foundBook, users});
    }
    catch(error){
        console.log(error);
    }
   }

   findBookFromDb();
})

router.post('/review/create/:id', (req,res)=>{
    // Object destructuring
    // same as -> const id = req.params.id;
    const {id} = req.params; 

    // req.query --> queries of the form that was submitted via 'GET' method
    // req.body --> 'body' of the form that was submitted via 'POST' method
    const {content, author} = req.body;

    async function createReviewinDb(){
        try{
            // Create the Review
            const newReview = await Review.create({content, author});

            // Add the Review to the Book
            const bookUpdate = await Book.findByIdAndUpdate(id, {$push: {reviews: newReview._id}} );

            // Add the Review to the User
            const userUpdate = await User.findByIdAndUpdate(author, {$push: {reviews: newReview._id}} );

            res.redirect(`/books/${id}`);
        }
        catch(error){
            console.log(error);
        };
    }

    createReviewinDb();

}); 

router.post('/review/delete/:id', (req, res)=>{
    // :id --> review's id
    const {id} = req.params; 

    async function deleteReviewInDb(){
        try{
            const removedReview = await Review.findByIdAndRemove(id);

            await User.findByIdAndUpdate(removedReview.author, {
                $pull: {reviews: removedReview._id}
            });

            // BONUS AFTER LAB 
            // Remove the id of the review from the Book Object;

            res.redirect('/books');
        }
        catch(error){
            console.log(error)
        }
    }

    deleteReviewInDb();
})

// Export Routes
module.exports = router;