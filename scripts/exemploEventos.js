'use strict';

window.onload = registrarEventos;

function registrarEventos(){
	document.querySelector('input[data-js="diga-oi"]').onclick = digaOi;
	document.querySelector('input[data-js="mostra-tabela"]').onclick = mostrarTabela;
	document.querySelector('input[data-js="esconde-tabela"]').onclick = esconderTabela;
	document.querySelector('input[data-js="adiciona-aluninho"]').onclick = adicionarAluninho;
	registrarEventosNasLinhasDeTabela();
}

function registrarEventosNasLinhasDeTabela(){
	document.querySelectorAll('table tbody tr').forEach(function(elemento){
		elemento.addEventListener('click', duplicarLinha, false);
		elemento.querySelector('button[data-js="exclui-linha"]').onclick = excluirLinha;
	});
}

function digaOi(){
	alert('Oi');
}

function mostrarTabela(){
	var tabela = document.querySelector('table[data-js="tabela-de-salarios"]');
	tabela.style.display = 'table';
}

function esconderTabela(){
	var tabela = document.querySelector('table[data-js="tabela-de-salarios"]');
	tabela.style.display = 'none';
}

function adicionarAluninho(){
	var nome = document.querySelector('input[data-js="nome"]').value;
	var salario = document.querySelector('input[data-js="salario"]').value;
	salario = salario + ' temers';
	var tabela = document.querySelector('table[data-js="tabela-de-salarios"] tbody');
	tabela.innerHTML = tabela.innerHTML + '<tr><td>' + nome + '</td>' + '<td>' + salario + 
	'<td><button data-js="exclui-linha">Excluir</button></td>' + '</td></tr>';
	registrarEventosNasLinhasDeTabela();
}

function duplicarLinha(evento){
	var linhaDaTabelaOndeCliquei = evento.currentTarget;
	var tabela = linhaDaTabelaOndeCliquei.parentElement;
	tabela.innerHTML = tabela.innerHTML + linhaDaTabelaOndeCliquei.innerHTML;
	registrarEventosNasLinhasDeTabela();
}

function excluirLinha(evento){
	evento.stopPropagation();
	var botaoQueCliquei = evento.currentTarget;
	var linhaDaTabela = botaoQueCliquei.parentElement.parentElement;
	linhaDaTabela.parentNode.removeChild(linhaDaTabela);
	registrarEventosNasLinhasDeTabela();
}