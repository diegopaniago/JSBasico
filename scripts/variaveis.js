'use strict';

var numero = 1;

var texto = 'Ola mundo';

var lista = [1,2,3,4,5,6];

var object = {
	nome: 'Diego',
	sexo: 'Masculino'
};

var funcao = function(){
	for(var i = 0; i < lista.length; i++){
		console.log(lista[i]);
	}
};

var meDigaSeusTipos = function(){
	console.log('numero é', typeof numero);
	console.log('texto é', typeof texto);
	console.log('lista é', typeof lista);
	console.log('object é', typeof object);
	console.log('funcao é', typeof funcao);
};

var funcaoComAlert = function(){
	for(var i = 0; i < lista.length; i++){
		console.log(lista[i]);
		alert('Um alert para a execução do seu códico...');
	}
};