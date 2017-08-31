"use strict"

let assert = require('assert')

const checkPalinDromo = function(word){
	for (var i = 0; i < Math.ceil(word.length / 2); i++) {

		try{
			console.log(`${word.charAt(i)} - ${word.charAt(word.length - 1 - i)}` )
			assert.equal(word.charAt(i), word.charAt(word.length - 1 - i))
		}
		catch(err) {
			return false
		}
	}
	return true
}

exports.checkPalinDromo = checkPalinDromo