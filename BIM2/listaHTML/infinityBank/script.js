document.getElementById('btnSimular').addEventListener('click', function () {
    const inputValor = document.getElementById('valorVenda').value;
    const parcelas = parseInt(document.getElementById('parcelas').value);
    const bandeira = document.getElementById('bandeira').value;
    const divResultado = document.getElementById('resultado');

    if (!inputValor || inputValor <= 0 || isNaN(parcelas) || parcelas < 1) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const valorVenda = parseFloat(inputValor);
    let taxaBandeiraPerc = 0;

    switch (bandeira) {
        case 'visa': taxaBandeiraPerc = 0.02; break;
        case 'master': taxaBandeiraPerc = 0.0185; break;
        case 'elo': taxaBandeiraPerc = 0.03; break;
    }

    const valorTaxaBandeira = valorVenda * taxaBandeiraPerc;
    const jurosSimples = valorVenda * (0.0035 * parcelas);
    const taxaMensal = 12.50 * parcelas;

    const totalJurosTaxas = valorTaxaBandeira + jurosSimples + taxaMensal;
    const valorTotalCliente = valorVenda + totalJurosTaxas;
    const valorParcela = valorTotalCliente / parcelas;

    divResultado.style.display = "block";
    divResultado.innerHTML = `
                Valor original: R$ ${valorVenda.toFixed(2)}<br>
                Taxa da Bandeira: R$ ${valorTaxaBandeira.toFixed(2)}<br>
                Juros (0.35% a.m): R$ ${jurosSimples.toFixed(2)}<br>
                Taxa Fixa Mensal: R$ ${taxaMensal.toFixed(2)}<br>
                <hr style="border-color: #fcd34d; margin: 10px 0;">
                <span class="destaque">Valor Total p/ Cliente: R$ ${valorTotalCliente.toFixed(2)}</span><br>
                <span class="destaque">Valor da Parcela: ${parcelas}x de R$ ${valorParcela.toFixed(2)}</span>
            `;
});