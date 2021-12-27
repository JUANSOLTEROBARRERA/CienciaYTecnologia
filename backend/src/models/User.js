const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    user: String,
    pass: String,
    email: String,
},{
    timestamps: true,
    versionKey: false
});

module.exports = model('User', userSchema);