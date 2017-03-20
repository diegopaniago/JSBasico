/*
Usando a mesma tela do exercício anterior, refatore para registrar eventos na tela usando o window.onload e adicione um campo na tabela para excluir a linha selecionada.
*/

'use strict';

window.onload = registrarEventos;

function registrarEventos(){
	document.querySelector('input[data-js="adiciona"]').onclick = adicionar;
	registrarEventosNoBotaoExcluir();
}

function registrarEventosNoBotaoExcluir(){
	document.querySelectorAll('button[data-js="exclui"]').forEach(function(botao){
		botao.onclick = excluir;
	});
}

function adicionar(){
	var nome = document.querySelector('input[data-js="nome"]').value;
	var sobrenome = document.querySelector('input[data-js="sobrenome"]').value;
	var idade = document.querySelector('input[data-js="idade"]').value;

	var novaLinhaHtml = '<tr><td>' + nome + 
	'</td><td>' + sobrenome + '</td><td>' +
	idade + '</td>' +
	'<td>'+
	'<button data-js="exclui">Excluir</button>'+
	'</td></tr>';
	var tabela = document.querySelector('table[data-js="tabela"] tbody');
	tabela.innerHTML = tabela.innerHTML + novaLinhaHtml;
	registrarEventosNoBotaoExcluir();
}

function excluir(evento){
	var botaoQueCliquei = evento.currentTarget;
	var linhaDaTabelaParaRemover = botaoQueCliquei.parentElement.parentElement;
	var tabela = linhaDaTabelaParaRemover.parentElement;
	tabela.removeChild(linhaDaTabelaParaRemover);
}