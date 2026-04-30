function add() {

    const imgJogador = document.querySelector(".card-img-top");
    imgJogador.src = "img/_vinicius_junior.png";


    const spanNome = document.querySelector("#Nome span");
    if (spanNome) {
        spanNome.innerHTML = "Vinícius José Paixão de Oliveira Júnior";
    }

    document.getElementById("Rank").innerHTML = "9,5";
    document.getElementById("Data_Nas").innerHTML = "12/07/2000 (25 anos)";
    document.getElementById("Alutra").innerHTML = "1,76 m";
    document.getElementById("Posição ").innerHTML = "Ponta-esquerda / Atacante";


    const elementosPlaceholder = document.querySelectorAll(".placeholder, .placeholder-glow");

    elementosPlaceholder.forEach(el => {

        el.classList.remove("placeholder");
        el.classList.remove("placeholder-glow");


        if (el.tagName === "SPAN" || el.tagName === "P") {
            el.classList.add("card-text");
        }
    });


    const badge = document.getElementById("Rank");
    badge.classList.remove("text-bg-secondary");
    badge.classList.add("text-bg-warning");


    const btn = document.querySelector(".btn-primary");
    btn.innerHTML = "Revelado";
    btn.classList.add("disabled");
}