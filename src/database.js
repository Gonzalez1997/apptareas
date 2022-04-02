const mongoose = require('mongoose');

const URI = 'mongodb+srv://useralex:useralex21@cluster0.kpo4n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;