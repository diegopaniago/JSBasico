/* Crie uma tela que após clicar em um botão apareçam 3 itens de uma lista qualquer.
Cada Item deve aparecer respectivamente separados por um intervalo de tempo de 3 segundos. */

'use strict';

window.onload = registrarEventos;

function registrarEventos() {
	document.querySelector('button[data-js="botao-mostra-lista"]').onclick = mostrarItensInvisiveisEnquantoHouver;
}

function mostrarItensInvisiveisEnquantoHouver(){
	var itemParaMostrar = document.querySelector('li[style="display: none;"]');
	if(itemParaMostrar != undefined){
		mostrarItem(itemParaMostrar);
	}
}

function mostrarItem(itemParaMostrar){
	setTimeout(function(){
		itemParaMostrar.style.display = 'list-item';
		mostrarItensInvisiveisEnquantoHouver();
	}, 3000);
}