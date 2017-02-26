'use strict';

var numero1 = 1;
var numero1String = '1';

var verficarSeNumerosSaoIguais = function(primeiroNumero, segundoNumero){
	if(primeiroNumero == segundoNumero){
		console.log('Numeros iguais');
	}else{
		console.warn('Numeros diferentes');
	}
};

var verficarSeNumerosSaoIguaisValidandoTipo = function(primeiroNumero, segundoNumero){
	if(primeiroNumero === segundoNumero){
		console.log('Numeros iguais');
	}else{
		console.warn('Primeiro numero é ', typeof primeiroNumero);
		console.warn('Segundo numero é ', typeof segundoNumero)
	}
};

var verificarComSwitchCase = function(numero){
	switch(numero){
		case 1:
			console.log('Achou o numero');
			break;
		
		case '1':
			console.log('Achou o numero string');
			break;

		default:
			console.log('Fim das verificações não encontramos nada');
	}
};

var verficarComTernarioSeNumeroEhString = function(numero){
	const string = 'string';
	return typeof numero === string;
}