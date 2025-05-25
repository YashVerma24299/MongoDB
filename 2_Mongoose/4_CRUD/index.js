const mongoose = require('mongoose');
const { Schema } = mongoose;
const { model } = mongoose;

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

const userSchema = new Schema({
    name: String,
    email: String,
    age: Number
});
const User = new model("User", userSchema); 

                    //make User empty then run 1 by 1

// Insert single data in MongoDB
// const user1 = new User({
//     name:"Yash",
//     email: "Yash@gmail.com",
//     age:21
// })  
// user1.save();
// const user2 = new User({
//     name:"Bob",
//     email: "Bob@gmail.com",
//     age:15
// })  
// user2.save()
//     .then((res) =>{
//         console.log(res);
//     })
//     .catch((err) =>{
//         console.log(err);
//     })



// Insert multiple data in MongoDB
// User.insertMany([
//     {
//         name:"Tony111",
//         email:"Tony123@gmail.com",
//         age:20
//     },
//     {
//         name:"Mony",
//         email:"mony9876@gmail.com",
//         age:56
//     },
//     {
//         name:"Peter",
//         email:"abc@gmail.com",
//         age:45
//     },
// ]).then((res) =>{
//     console.log(res);
// })



// Find data in MongoDB
// Run in Terminal
// User.find({}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
// User.find({age:{$gt:44}}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
// User.find({}).then((res)=>{
//     console.log(res[0].name);
// })
// .catch((err)=>{
//     console.log(err);
// })

// below both are same 
// User.find({_id:"67f03d509f451b8ac12fdbf1"}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
// User.findById("67f03d509f451b8ac12fdbf1").then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })



//Update data using (update function + firse pura "find" function likhna)
        //one
// User.updateOne({name:"Tony111"}, {age:90})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
// User.find({}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
        //two
// User.updateMany({age: {$gt:44}}, {age:90})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
// User.find({}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })



//Update data using (findOneAndUpdate function)
// User.findOneAndUpdate({name:"Tony111"}, {name:"Tony"}, {new:true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })



//delete
//deleteOne
//deleteMany

