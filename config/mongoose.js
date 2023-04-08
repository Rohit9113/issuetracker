const mongoose = require('mongoose');
mongoose.connect(`mongodb+srv://rohitlohra3036:m8FP1u2VGNMS7SFVT@cluster0.lwpqlde.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;