'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FollowSchema = Schema({
	user: {type: Schema.ObjectId, ref: 'User'},
	followed: {type: Schema.ObjectId, ref: 'User'}
});

module.export = mongoose.model('Follow', FollowSchema); //para poder utilizar esto fuera del js