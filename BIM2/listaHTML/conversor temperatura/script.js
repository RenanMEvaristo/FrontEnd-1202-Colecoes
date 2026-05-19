function converterParaFahrenheit() {
    let campoC = document.getElementById('inputCelsius').value;
    let campoF = document.getElementById('inputFahrenheit');

    if (campoC === "") {
        campoF.value = "";
        return;
    }

    let c = parseFloat(campoC);

    let f = (c * 9 / 5) + 32;

    campoF.value = f.toFixed(2);
}

// Função 2: Transforma F em C
function converterParaCelsius() {
    let campoF = document.getElementById('inputFahrenheit').value;
    let campoC = document.getElementById('inputCelsius');

    if (campoF === "") {
        campoC.value = "";
        return;
    }

    let f = parseFloat(campoF);

    let c = (f - 32) * 5 / 9;

    campoC.value = c.toFixed(2);
}