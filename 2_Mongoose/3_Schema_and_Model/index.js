// Schema:
    // Overall structure
    // shape of document within that collection
    // https://mongoosejs.com/docs/guide.html


// Model:
    // A Model is a tool that uses a schema to interact with the database, allowing you to create, read, update, and delete documents.
    
const mongoose = require('mongoose');
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
main()
    .then((res) => {
        console.log("Connection Successful");
    })
    .catch((err) => {
        console.log(err);
    })


// const { Schema } = mongoose;
// const userSchema = new Schema({
//     name: String,
//     email: String,
//     age: Number
// });
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});


// const { model } = mongoose;
// const User = new model("User", userSchema); 
const User = mongoose.model("User", userSchema);
//    isko                   isko
// done ko same name


// In Terminal:
    // mongosh
    // test database have
        // User table/collection


