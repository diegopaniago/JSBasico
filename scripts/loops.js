'use strict';

var listaDeNomes = ['Diego', 'Eduardo', 'Ciclano', 'Fulano'];
var listaDeCarros = [{carro: 'Uno'}, {carro: 'ferrari'}, {carro: 'gol'}];

function listarNomes(){
	for(var i=0; i<listaDeNomes.length; i++){
		console.log(listaDeNomes[i]);
	}
}

function listarCarros(){
	for(var i=0; i<listaDeCarros.length; i++){
		console.log(listaDeCarros[i].carro);
	}	
}

function listarComForEach(lista){
	lista.forEach(function(elementoDaLista){
		console.log(elementoDaLista);
	});
};

function removerDeUmaListaComWhile(lista){
	while(lista.length > 0){
		console.log(lista);
		lista.splice(0,1);
	}
};