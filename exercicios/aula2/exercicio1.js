 /*
 Crie uma tela com um formulário de no mínimo 3 campos para preencher com um botão adicionar.
O botão adicionar deve pegar conteúdo do formulário e adicioná-lo em uma tabela.
*/

'use strict';

function adicionar(){
	var nome = document.querySelector('input[data-js="nome"]').value;
	var sobrenome = document.querySelector('input[data-js="sobrenome"]').value;
	var idade = document.querySelector('input[data-js="idade"]').value;

	var novaLinhaHtml = '<tr><td>' + nome + '</td><td>' + sobrenome + '</td><td>' + idade + '</td></tr>';
	var tabela = document.querySelector('table[data-js="tabela"] tbody');
	tabela.innerHTML = tabela.innerHTML + novaLinhaHtml;
}