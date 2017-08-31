"use strict"

const readline = require('readline');
const ovo = require('./palinnilap')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Manda uma palavra ai chapa! Dizer-te-ei se esta bagaça es um palindromo: \r', (answer) => {
	if(ovo.checkPalinDromo(answer)){
		console.log("És un palindromo! EITA PREULA!")
	} else{
		console.log("Tentar na próxima")
	}
	rl.close();
});