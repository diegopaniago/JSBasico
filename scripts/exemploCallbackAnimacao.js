'use strict';

window.onload = registrarEventos;

function registrarEventos(){
	document.querySelector('button[data-js="botao-animar"]').onclick = animar;
}

function animar(evento){
	var elemento = evento.currentTarget.parentElement;
	var opcoesDaAnimacao = {
		left: "50%"
	};
	$(elemento).animate(opcoesDaAnimacao, 2000, function(){
		voltarParaOLugar(elemento);
	});
}

function voltarParaOLugar(elemento){
	var opcoesDaAnimacaoDeVolta = {
		left: "5px"
	};
	$(elemento).animate(opcoesDaAnimacaoDeVolta, 2000);
}