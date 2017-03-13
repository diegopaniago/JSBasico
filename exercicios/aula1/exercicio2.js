'use strict';

var listaDeNomes = ['Diego','Sergio', 'Wilson', 'Jakeline', 'Eduardo'];

function removerNomeDaLista(nome){
	var posicaoDoNomeNaLista = listaDeNomes.indexOf(nome);
	if(posicaoDoNomeNaLista > -1){
		listaDeNomes.splice(posicaoDoNomeNaLista, 1);
		console.info(nome, 'removido com sucesso');
	}else{
		console.warn('O nome que você deseja remover não foi encontrado na lista de nomes');
	}
}