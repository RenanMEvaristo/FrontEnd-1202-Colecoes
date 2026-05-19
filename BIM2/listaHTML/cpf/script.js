function validarLogicaCPF(cpf) {

    cpf = cpf.replace(/\D/g, '');


    if (cpf.length != 11) {
        return false;
    }
    let soma1 = 0;
    let peso1 = 10;

    for (let i = 0; i < 9; i++) {

        soma1 = soma1 + (parseInt(cpf[i] * peso1));
        peso1--;

    }

    let soma2 = 0;
    let peso2 = 11;

    for (let i = 0; i < 10; i++) {

        soma2 = soma2 + (parseInt(cpf[i] * peso2));
        peso2--;

    }

    let resto2 = (soma2 * 10) % 11;
    if (resto2 === 10) resto2 = 0;

    if (resto2 !== parseInt(cpf[10])) {
        return false;
    }

    return true;
}

function verificarCPF() {

    let cpfDigitado = document.getElementById('cpfInput').value;

    let paragrafoResultado = document.getElementById('resultado');

    let ehValido = validarLogicaCPF(cpfDigitado);

    if (ehValido == true) {
        paragrafoResultado.textContent = 'CPF Válido!';
        paragrafoResultado.className = 'valido';

    } else {
        paragrafoResultado.textContent = 'CPF Inválido!';
        paragrafoResultado.className = 'invalido';

    }

}



