"use strict";

// https://gist.github.com/coryhouse/fd6232f95f9d601158e4

// This file mocks a web API by hard coding the data.
var authors = require('./authorData').authors;
var _ = require('lodash');

// This would be peformed on teh server in a real app. Just a stub for now.
var _generatedId = function (author){
	return author.firstName.toLowerCase() + '-';
};

var _clone = function(item){
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value
};

var AuthorApi = {
	getAllAuthors: function(){
		return _clone(authors);
	},
	getAuthorById: function(id){
		var author = _.find(authors, {id: id});
		return _clone(author);
	},
	saveAuthor: function(author){
		// pretend an ajax call to teh web api is made here
		console.log('Pretend this just saved the author');

		if (author.id){
			var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id}));
			authors.splice(existingAuthorIndex, 1, author);
		} else {
			// just simulating creation here
			//server would generate ids for the new author in real
			//cloning, so copy returned is passed by value
			author.id = _._generateId(author);
			authors.push(author);
		}

		return _clone(author);
	},
	deleteAuthor: function(id){
		console.log('Pretend this just deleted the author');
		_.remove(authors, {id: id});
	}
};

module.exports = AuthorApi;

//---------------