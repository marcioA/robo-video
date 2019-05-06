const readline = require('readline-sync');

function start(){
	const  content ={};
	content.searchTerm = askAndReturnSearchTerm();
	content.prefix = askAndReturnPrefix();

	function askAndReturnSearchTerm(){

		return readline.question('Qual termo da pesquisa? ');
	}

	function askAndReturnPrefix(){
		const prefixes = ['quem é', 'o que é', 'a historia de '];
		const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha um dos prefixos:');
		const selectedPrefixText = prefixes[selectedPrefixIndex];
		
		return (selectedPrefixText);
	}

	console.log(content);
}

start()
