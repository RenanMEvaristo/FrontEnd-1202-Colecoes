const inputNome = document.getElementById('inputNome');
const btnAdicionar = document.getElementById('btnAdicionar');
const listaConvidados = document.getElementById('listaConvidados');

btnAdicionar.addEventListener('click', adicionarConvidado);

inputNome.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') adicionarConvidado();
});

function adicionarConvidado() {
    const nomeTexto = inputNome.value.trim();

    if (nomeTexto === "") {
        alert("Por favor, insira o nome do convidado.");
        return;
    }

    const li = document.createElement('li');

    const spanNome = document.createElement('span');
    spanNome.textContent = nomeTexto;
    spanNome.className = 'nome-convidado';

    const divBotoes = document.createElement('div');
    divBotoes.className = 'botoes-acao';

    const btnConcluir = document.createElement('button');
    btnConcluir.textContent = 'Concluir';
    btnConcluir.className = 'btn-acao btn-concluir';
    btnConcluir.addEventListener('click', function () {
        spanNome.classList.toggle('classe-riscado');
    });

    const btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
    btnEditar.className = 'btn-acao btn-editar';
    btnEditar.addEventListener('click', function () {
        const novoNome = prompt("Edite o nome do convidado:", spanNome.textContent);
        if (novoNome !== null && novoNome.trim() !== "") {
            spanNome.textContent = novoNome.trim();
        }
    });

    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'Excluir';
    btnExcluir.className = 'btn-acao btn-excluir';
    btnExcluir.addEventListener('click', function () {
        li.remove();
    });

    divBotoes.appendChild(btnConcluir);
    divBotoes.appendChild(btnEditar);
    divBotoes.appendChild(btnExcluir);

    li.appendChild(spanNome);
    li.appendChild(divBotoes);

    listaConvidados.appendChild(li);

    inputNome.value = "";
    inputNome.focus();
}