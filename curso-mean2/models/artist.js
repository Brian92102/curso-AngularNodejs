'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArtistSchema = Schema({
	nombre: String,
	description: String,
	//surname: String,
	//emai: String,
	//password: String,
	//role: String,
	image: String
});
module.exports = mongoose.model('Artist', ArtistSchema);