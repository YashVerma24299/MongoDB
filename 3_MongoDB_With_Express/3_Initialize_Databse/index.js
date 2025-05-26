//express server setup
const express = require('express')
const app = express();
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
app.get('/', (req,res)=>{
    res.send("ROOT");
})
//mongodb setup
const mongoose = require('mongoose');
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
//views
const path = require('path');
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));




const Chat = require('./models/chat.js');
let chat1 = new Chat({
    from: "Yash",
    to: "Tannu",
    msg: "Hello Tannu",
    created_at: new Date()
})
chat1.save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })