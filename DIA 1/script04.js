function revelar() {
    const imgJogador = document.getElementById("foto-jogador");
    imgJogador.src = "img/_vinicius_junior.png";

    document.getElementById("NomeTexto").innerHTML = "Vinícius José Paixão de Oliveira Júnior";
    document.getElementById("Rank").innerHTML = "9,5";
    document.getElementById("Data_Nas").innerHTML = "12/07/2000 (25 anos)";
    document.getElementById("Altura").innerHTML = "1,76 m";
    document.getElementById("Posição").innerHTML = "Ponta-esquerda / Atacante";

    const spanNome = document.getElementById("NomeTexto");
    if (spanNome) spanNome.innerHTML = "Vinícius José Paixão de Oliveira Júnior";

    const elementosParaLimpar = document.querySelectorAll(".placeholder, .placeholder-glow");

    elementosParaLimpar.forEach(el => {
        el.classList.remove("placeholder");
        el.classList.remove("placeholder-glow");

        if (el.tagName === "SPAN") {
            el.classList.add("card-text");
        }
    });

    const badgeRank = document.getElementById("Rank");
    badgeRank.classList.replace("text-bg-secondary", "text-bg-warning");
}