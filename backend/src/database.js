const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/usuarios',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is Conected'))
    .catch(err => console.log(err));