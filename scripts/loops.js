'use strict';

var listaDeNomes = ['Diego', 'Eduardo', 'Ciclano', 'Fulano'];
var listaDeCarros = [{carro: 'Uno'}, {carro: 'ferrari'}, {carro: 'gol'}];

function listarNomes(){
	for(var indice=0; indice<listaDeNomes.length; indice++){
		console.log(listaDeNomes[indice]);
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
		lista.splice(0,1);
		console.log(lista);
	}
};