function mostrarTabela() {
    const local = document.getElementById("container-imagem");

    const imagem = document.createElement("img");

    imagem.src = "img/Tabela_Jogos.png";

    local.appendChild(imagem);

    document.getElementById("btn-tabela").disabled = true;
}