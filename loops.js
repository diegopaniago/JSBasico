'use strict';

var listaDeNomes = ['Diego', 'Eduardo', 'Ciclano', 'Fulano'];
var listaDeCarros = [{carro: 'Uno'}, {carro: 'ferrari'}, {carro: 'gol'}];

var listarNomes = function(){
	for(var i=0; i<listaDeNomes.length; i++){
		console.log(listaDeNomes[i]);
	}
};

var listarCarros = function(){
	for(var i=0; i<listaDeCarros.length; i++){
		console.log(listaDeCarros[i].carro);
	}	
}

var listarComForEach = function(lista){
	lista.forEach(function(elementoDaLista){
		console.log(elementoDaLista);
	});
};