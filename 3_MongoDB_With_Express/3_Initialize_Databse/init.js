//Initialize the database with some sample data
const mongoose = require('mongoose');
const Chat = require('./models/chat.js');
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}
main()
    .then((res) => {
        console.log("Connection Successful");
    })
    .catch((err) => {
        console.log(err);
    })

//Method 1
// Chat.insertMany([
//     {
//         from: "Yash",
//         to: "Tannu",
//         msg: "Hello Tannu",
//         created_at: new Date()
//     },
//     {
//         from: "Tannu",
//         to: "Yash",
//         msg: "Hi Yash! How are you?",
//         created_at: new Date()
//     },
//     {
//         from: "Aman",
//         to: "Neha",
//         msg: "Hey Neha, long time!",
//         created_at: new Date()
//     },
//     {
//         from: "Neha",
//         to: "Aman",
//         msg: "Yeah! How have you been?",
//         created_at: new Date()
//     },
//     {
//         from: "Riya",
//         to: "Karan",
//         msg: "Good morning!",
//         created_at: new Date()
//     },
//     {
//         from: "Karan",
//         to: "Riya",
//         msg: "Morning! Have a great day!",
//         created_at: new Date()
//     },
//     {
//         from: "Simran",
//         to: "Raj",
//         msg: "Ready for the meeting?",
//         created_at: new Date()
//     },
//     {
//         from: "Raj",
//         to: "Simran",
//         msg: "Yes, just about to join.",
//         created_at: new Date()
//     },
//     {
//         from: "Priya",
//         to: "Ankit",
//         msg: "Happy Birthday Ankit!",
//         created_at: new Date()
//     },
//     {
//         from: "Ankit",
//         to: "Priya",
//         msg: "Thanks a lot Priya!",
//         created_at: new Date()
//     }
// ]);

// Method 2
// let chats =[
//     {
//         from: "Yash",
//         to: "Tannu",
//         msg: "Hello Tannu",
//         created_at: new Date()
//     },
//     {
//         from: "Tannu",
//         to: "Yash",
//         msg: "Hi Yash! How are you?",
//         created_at: new Date()
//     },
//     {
//         from: "Aman",
//         to: "Neha",
//         msg: "Hey Neha, long time!",
//         created_at: new Date()
//     },
//     {
//         from: "Neha",
//         to: "Aman",
//         msg: "Yeah! How have you been?",
//         created_at: new Date()
//     },
//     {
//         from: "Riya",
//         to: "Karan",
//         msg: "Good morning!",
//         created_at: new Date()
//     },
//     {
//         from: "Karan",
//         to: "Riya",
//         msg: "Morning! Have a great day!",
//         created_at: new Date()
//     },
//     {
//         from: "Simran",
//         to: "Raj",
//         msg: "Ready for the meeting?",
//         created_at: new Date()
//     },
//     {
//         from: "Raj",
//         to: "Simran",
//         msg: "Yes, just about to join.",
//         created_at: new Date()
//     },
//     {
//         from: "Priya",
//         to: "Ankit",
//         msg: "Happy Birthday Ankit!",
//         created_at: new Date()
//     },
//     {
//         from: "Ankit",
//         to: "Priya",
//         msg: "Thanks a lot Priya!",
//         created_at: new Date()
//     }
// ];
// Chat.insertMany(chats);