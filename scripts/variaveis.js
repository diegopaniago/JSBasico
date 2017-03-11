'use strict';

var numero = 1;

var texto = 'Ola mundo';

var lista = [1,2,3,4,5,6];

var object = {
	nome: 'Diego',
	sexo: 'Masculino'
};

var verdade = true;

var funcao = function(){
	for(var i = 0; i < lista.length; i++){
		console.log(lista[i]);
	}
};

function meDigaSeusTipos(){
	console.log('numero é', typeof numero);
	console.log('texto é', typeof texto);
	//possui representacao Object devido ao fato de se poder fazer uma lista de qualquer tipo
	console.log('lista é', typeof lista);
	console.log('object é', typeof object);
	console.log('funcao é', typeof funcao);
	console.log('verdade é', typeof verdade);
}

function funcaoComAlert(){
	for(var i = 0; i < lista.length; i++){
		console.log(lista[i]);
		alert('Um alert para a execução do seu códico...');
	}
}