/*Faça uma animação na tela anterior para que após todos os itens da lista surgirem na tela, o JQuery anime toda a lista para 
a direita e depois volte ela para a esquerda.*/

'use strict';

window.onload = registrarEventos;

function registrarEventos() {
	document.querySelector('button[data-js="botao-anima-lista"]').onclick = mostrarItensInvisiveisEnquantoHouver;
}

function mostrarItensInvisiveisEnquantoHouver(){
	var itemParaMostrar = document.querySelector('li[style="display: none;"]');
	if(itemParaMostrar != undefined){
		mostrarItem(itemParaMostrar);
	}else{
		animarLista();
	}
}

function mostrarItem(itemParaMostrar){
	setTimeout(function(){
		itemParaMostrar.style.display = 'list-item';
		mostrarItensInvisiveisEnquantoHouver();
	}, 1000);
}

function animarLista(){
	var lista = document.querySelector('ul[data-js="lista"]');
	animarParaEsquerda(lista);
}

function animarParaEsquerda(lista){
	var configuracaoDaAnimacao = {
		left: '50%'
	}

	$(lista).animate(configuracaoDaAnimacao, 3000, function(){
		animarParaDireita(lista);
	});
}

function animarParaDireita(lista){
	var configuracaoDaAnimacao = {
		left: '5px'
	}
	$(lista).animate(configuracaoDaAnimacao, 3000);
}