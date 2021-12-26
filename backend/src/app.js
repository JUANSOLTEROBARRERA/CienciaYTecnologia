const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/CienciaYTecnologia',require('./routes/index'))


app.set('port', process.env.PORT || 3000);
//ESTO ES DEL CRUD
const morgan = require('morgan');
app.use(morgan('dev'));


app.use(require('./routes/index.js'))

module.exports = app;