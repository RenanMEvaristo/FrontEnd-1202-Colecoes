const capy = document.getElementById("capy");
const estados = {
    normal: "babilonico.png",
    bravo: "bravo.png",
    comendo: "comendo.png",
    feliz: "feliz.png",
    morto: "morto.png",
}

const fundoDia = "background.png";
const fundoNoite = "background_noite.png";

let contador = 0;
let intervalo = null;
let timeoutClique = null;
let timeoutBack = null;
let horas = 0;


function atualizarFundo() {
    setInterval(() => {
        horas++;
        if (horas >= 12) {
            document.body.style.backgroundImage = `url('${fundoNoite}')`;
        } else {
            document.body.style.backgroundImage = `url('${fundoDia}')`;
        }
        if (horas >= 24) horas = 0;
    }, 2000);
}


function controlador() {
    if (intervalo) clearInterval(intervalo);
    intervalo = setInterval(() => {
        contador++;
        console.log("tempo/fome: ", contador);

        if (contador == 5) {
            capy.src = estados.bravo;
        }

        if (contador >= 10) {
            capy.src = estados.morto;
            clearInterval(intervalo);
        }

    }, 1000);
}


function alimentar() {

    if (capy.src.includes(estados.morto)) {
        console.log("Tarde demais...");
        return;
    }

    contador = 0;
    capy.src = estados.comendo;


    if (timeoutClique) clearTimeout(timeoutClique);

    timeoutClique = setTimeout(() => {
        capy.src = estados.feliz;

        timeoutBack = setTimeout(() => {
            if (contador < 5) {
                capy.src = estados.normal;
            }
        }, 2000);

    }, 1000);
}


function alternarManual() {
    const toggle = document.getElementById("manualToggle");
    if (toggle.checked) {
        document.body.style.backgroundImage = `url('${fundoNoite}')`;
    } else {
        document.body.style.backgroundImage = `url('${fundoDia}')`;
    }
}


document.body.style.backgroundImage = `url('${fundoDia}')`;
controlador();
atualizarFundo();