// import * as mongoose from 'mongoose';
const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({
    name: String,
    img: String,
    summary:String
});
const Movies = mongoose.model('Movies', moviesSchema);
module.exports= Movies;
