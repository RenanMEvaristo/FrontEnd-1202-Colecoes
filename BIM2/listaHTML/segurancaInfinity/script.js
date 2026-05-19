document.getElementById('numeroCartao').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    e.target.value = value;
});

document.getElementById('btnAnalisar').addEventListener('click', function () {
    const inputCartao = document.getElementById('numeroCartao').value;
    const numeroLimpo = inputCartao.replace(/[\s.]/g, '');
    const painel = document.getElementById('painel-info');

    if (numeroLimpo.length < 13 || numeroLimpo.length > 16) {
        alert("O número do cartão deve conter entre 13 e 16 dígitos.");
        return;
    }

    let soma = 0;
    let alternar = false;
    for (let i = numeroLimpo.length - 1; i >= 0; i--) {
        let digito = parseInt(numeroLimpo.charAt(i), 10);
        if (alternar) {
            digito *= 2;
            if (digito > 9) digito -= 9;
        }
        soma += digito;
        alternar = !alternar;
    }
    const isValido = (soma % 10 === 0);

    const primeiroDigito = numeroLimpo.charAt(0);
    let bandeira = "Desconhecida";
    if (primeiroDigito === '4') bandeira = "Visa";
    else if (primeiroDigito === '5') bandeira = "Mastercard";
    else if (primeiroDigito === '3') bandeira = "American Express / Diners";
    else if (primeiroDigito === '6') bandeira = "Discover / Elo";

    let setor = "Desconhecido";
    switch (primeiroDigito) {
        case '1': case '2': setor = "Companhias Aéreas"; break;
        case '3': setor = "Viagens e Entretenimento"; break;
        case '4': case '5': setor = "Bancário e Financeiro"; break;
        case '6': setor = "Comércio e Bancário"; break;
        case '7': setor = "Petróleo"; break;
        case '8': setor = "Saúde e Telecomunicações"; break;
        case '9': setor = "Nacional"; break;
    }

    painel.style.display = "block";
    painel.innerHTML = `
                <div class="linha-info">
                    <strong>Status:</strong>
                    <span class="badge ${isValido ? 'valido' : 'invalido'}">${isValido ? 'VÁLIDO' : 'INVÁLIDO'}</span>
                </div>
                <div class="linha-info">
                    <strong>Bandeira:</strong>
                    <span>${bandeira}</span>
                </div>
                <div class="linha-info">
                    <strong>Setor Industrial (MII):</strong>
                    <span>${setor}</span>
                </div>
                <div class="linha-info">
                    <strong>Banco Emissor (IIN):</strong>
                    <span>Identificador: ${numeroLimpo.substring(1, 5)}</span>
                </div>
            `;
});