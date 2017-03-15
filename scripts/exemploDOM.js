'use strict';

//Navegando as propriedades
function mostrarOTextoDoTitulo(){
	
	var textoDoTitulo;

	textoDoTitulo = document.getElementById('titulo').innerText;
	
	textoDoTitulo = document.getElementsByClassName('menu')[0].innerText;

	textoDoTitulo = document.querySelector('header[data-js="menu-da-dom"]').innerText;
	
	console.log(textoDoTitulo);
}

//Seletores
function selecionarPorId(id){
	return document.getElementById(id);
}

function selecionarPorClasse(classe){
	return document.getElementsByClassName(classe);
}

function selecionarPorTag(tag){
	return document.getElementsByTagName(tag);
}

function selecionarPorQualquerCoisa(identificacao){
	return document.querySelector(identificacao);
}

//Navegando propriedades do elemento
function mostrarDadosDoMenu(){
	var menu = document.querySelector('header[data-js="menu-da-dom"]');
	console.log('Classe do menu:', menu.className);
	console.log('Conteudo de texto do menu:', menu.innerText);
	console.log('Conteudo html do menu:', menu.innerHTML);
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

	console.log(nome);
	console.log(salario);

	var tabela = document.querySelector('table[data-js="tabela-de-salarios"] tbody');
	tabela.innerHTML = tabela.innerHTML + '<tr><td>' + nome + '</td>' + '<td>' + salario + '</td></tr>';

}