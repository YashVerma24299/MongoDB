//  Check this: https://mongoosejs.com/

const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/test');
// Protocal = mongodb
// localhost = 127.0.0.1
// Port = 27017
// Database = tests

// In General : http://localhost:3000/user
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
