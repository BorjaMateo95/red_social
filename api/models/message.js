'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = Schema({
	text: String,
	viewed: String,
	created_at: String,
	emitter: {type: Schema.ObjectId, ref: 'User'},
	receiver: {type: Schema.ObjectId, ref: 'User'}

});

module.export = mongoose.model('Message', MessageSchema); //para poder utilizar esto fuera del js