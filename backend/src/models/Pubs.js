const { Schema, model } = require('mongoose');

const pubsSchema = new Schema({
    nombre: {type:String, required: true},
    titulo: {type:String, required: true},
    desc: {type:String, required: true},
    enlace: {type:String, required: true},
},{
    timestamps: true,
    versionKey: false
});
module.exports = model('Pubs', pubsSchema);