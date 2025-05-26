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
//views setup
const path = require('path');
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));
// css setup
app.use(express.static(path.join(__dirname, 'public')));
//post request setup for -> add new chat(post)
app.use(express.urlencoded({ extended: true }));
//method override setup for edit route(put)
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


const Chat = require('./models/chat.js');

//Index Route
app.get("/chats", async (req, res) => {
    // retrieving all chats from the database
    // it is an asynchronous operation
    // so we use async-await or promises
    let chats= await Chat.find();
    res.render("index.ejs", { chats});
});

// Add New Chat Route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
}); 
app.post("/chats", (req, res) => {
    let {from, msg, to} =req.body;
    let newchat = new Chat({
        from: from,
        msg: msg,
        to: to,
        created_at: new Date(),
    })
    newchat.save()
        .then((res) =>{
            console.log("New Chat Added Successfully");
        })
        .catch((err) => {
            console.log(err);
        });

    res.redirect("/chats");
}); 
//here, data store permanently
// if server restarts, data will not be lost


// Edit Route
app.get("/chats/edit/:id", async (req, res) => {
    let {id} = req.params;
    let chat= await Chat.findById(id);
    res.render("edit.ejs", { chat });
}); 
app.put("/chats/:id", async (req, res) => {
    let {id} =req.params;
    let {msg: newmsg} =req.body;
    console.log(newmsg);
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        {msg: newmsg},
        {runValidators: true, new: true}
    )
    console.log(updatedChat);
    res.redirect("/chats");
});


//delete route
app.delete("/chats/:id", async (req, res) => {
    let {id} = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
}); 