'use strict' //para poder utilizar lo nuevo de emascrip

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
	name: String,
	surname: String,
	nick: String,
	email: String,
	password: String,
	role: String,
	image: String
});

module.exports = mongoose.model('User', UserSchema);