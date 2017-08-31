"use strict"

let assert = require('assert')

const checkPalinDromo = function(word){

	for (var i = 0; i < word.length; i++) {

		try{
			assert.equal(word.charAt(0), word.charAt(word.length - 1))
		}
		catch(err) {
			return false
		}
	}
	
	return true
}

exports.checkPalinDromo = checkPalinDromo