// In SQl, we apply constraint
// just similarly
// In schema, we apply validations

// prefer website for validations
// https://mongoosejs.com/docs/schematypes.html
// https://mongoosejs.com/docs/validation.html

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
main()
    .then((res) => {
        console.log("Connection Successful");
    })
    .catch((err) => {
        console.log(err);
    })

    
const bookSchema = new Schema({
    title: {
        type: String,
        maxlength: 20, // max length of title
        minlength: 3, // min length of title
        unique: true, // title should be unique
        // unique = Unique in Sql
        trim: true, // removes leading and trailing spaces
        // trim = Trim in Sql
        lowercase: true, // converts title to lowercase
        // lowercase = Lowercase in Sql
        required: true
        // required = Not Null in Sql
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: 0, // price should be greater than or equal to 0
    },
    discount:{
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction", "comics", "biography"], // only these values are allowed
        default: "fiction" // default value if not provided
    },
    pricee: {
        type: Number,
        min: [0, "Price must be greater than 0"] // custom error message if price is less than 0
    } 
});
const Book = new model("Book", bookSchema); 


// const book1 = new Book({
//     title: "Mathematics XII",
//     author: "RD Sharma",
//     price: 350
// })
// book1.save()
//     .then((res) =>{
//         console.log(res);
//     })
//     .catch((err) =>{
//         console.log(err);
//     })

// In mongoDB compass
    // use this 
        //db.books.find()

// const book2 = new Book({
//     title: "Gone with the Wind",
//     author: "Margaret Mitchell"
// })
// book2.save()
//     .then((res) =>{
//         console.log(res);
//     })
//     .catch((err) =>{
//         console.log(err);
//     })       
// const book3 = new Book({
//     title: "Gone with the Wind werrrrrrrrrrrrrrrrrrrrrrrrrrrr",
//     author: "Margaret Mitchell"
// })
// book3.save()
//     .then((res) =>{
//         console.log(res);
//     })
//     .catch((err) =>{
//         console.log(err);
//     })  


// UPDATION

// it will update the document with the given condition
// Book.findByIdAndUpdate("6833512588d2ffc80bb830bd", { price: 8000 })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// runValidators helps to run the statement with defined validations in the schema
// Book.findByIdAndUpdate("6833512588d2ffc80bb830bd", { price: -500 }, { runValidators: true })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


//  PREDEFINED ERROR 
// check error in this code
// if we try to save a book with negative price, it will throw an error
const book1 = new Book({
    title: "Mathematics XII",
    pricee: -350
})
book1.save()
    .then((res) =>{
        console.log(res);
    })
    .catch((err) =>{
        console.log(err);
    })