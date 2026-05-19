document.getElementById('btnCalcular').addEventListener('click', function () {
    const precoPacote = parseFloat(document.getElementById('pacote').value);
    const qtdPessoas = parseInt(document.getElementById('pessoas').value);
    const divResultado = document.getElementById('resultado');

    if (isNaN(qtdPessoas) || qtdPessoas <= 0) {
        alert("Por favor, insira uma quantidade válida de pessoas.");
        return;
    }

    const custoBruto = precoPacote * qtdPessoas;
    const taxaServico = custoBruto * 0.10;
    let subtotal = custoBruto + taxaServico;
    let desconto = 0;

    if (qtdPessoas > 100) {
        desconto = subtotal * 0.05;
    }

    const totalFinal = subtotal - desconto;

    let htmlResultado = `
                <div class="linha-resultado">
                    <span>Custo Bruto:</span>
                    <span>R$ ${custoBruto.toFixed(2)}</span>
                </div>
                <div class="linha-resultado">
                    <span>Taxa de Serviço (10%):</span>
                    <span>R$ ${taxaServico.toFixed(2)}</span>
                </div>
            `;

    if (desconto > 0) {
        htmlResultado += `
                    <div class="linha-resultado texto-desconto">
                        <span>Desconto Fidelidade (5%):</span>
                        <span>- R$ ${desconto.toFixed(2)}</span>
                    </div>
                `;
    }

    htmlResultado += `
                <div class="linha-total">
                    <span>Total Final:</span>
                    <span>R$ ${totalFinal.toFixed(2)}</span>
                </div>
            `;

    divResultado.style.display = "block";
    divResultado.innerHTML = htmlResultado;
});