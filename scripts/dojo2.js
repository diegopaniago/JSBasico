"use strict";

window.onload = registrarEventos;

function registrarEventos(){
	document.querySelector('input[data-js="botao-adicionar"]').onclick = adicionar;
	registrarEventosNasLinhas();
}

function adicionar(){
	var produto = document.querySelector('input[data-js="produto"]').value;
	var quantidade = document.querySelector('input[data-js="quantidade"]').value;
	var valor = document.querySelector('input[data-js="valor"]').value;

	var total = quantidade * valor;

	var tabela = document.querySelector('table[data-js="tabela"] tbody');
	tabela.innerHTML = 
	tabela.innerHTML 
	+ '<tr><td>' + produto + '</td>' 
	+ '<td>' + quantidade + '</td> '
	+ '<td>' + valor + '</td>'
	+ '<td>' + total + '</td> <tr>'
}

function registrarEventosNasLinhas(){
	var tabela = document.querySelector('table[data-js="tabela"] tbody tr');
}