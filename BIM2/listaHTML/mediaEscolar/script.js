const btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', function () {
    const nome = document.getElementById('nomeAluno').value;
    const n1 = Number(document.getElementById('nota1').value);
    const n2 = Number(document.getElementById('nota2').value);
    const n3 = Number(document.getElementById('nota3').value);
    const divResultado = document.getElementById('resultado');

    if (!nome || isNaN(n1) || isNaN(n2) || isNaN(n3) ||
        document.getElementById('nota1').value === "" ||
        document.getElementById('nota2').value === "" ||
        document.getElementById('nota3').value === "") {
        alert("Por favor, preencha o nome e todas as notas.");
        return;
    }

    const media = (n1 + n2 + n3) / 3;

    divResultado.style.display = "block";
    divResultado.className = "";

    let mensagemHTML = `<strong>Aluno:</strong> ${nome}<br><strong>Média:</strong> ${media.toFixed(2)}<br>`;

    if (media >= 7.0) {
        divResultado.classList.add('aprovado');
        mensagemHTML += `<strong>Situação:</strong> APROVADO! 🎉`;
    }
    else if (media >= 4.0 && media < 7.0) {
        const notaFaltante = 10 - media;
        divResultado.classList.add('exame');
        mensagemHTML += `<strong>Situação:</strong> EM EXAME 📚<br>Você precisa tirar <strong>${notaFaltante.toFixed(2)}</strong> no exame.`;
    }
    else {
        divResultado.classList.add('reprovado');
        mensagemHTML += `<strong>Situação:</strong> REPROVADO 😢`;
    }

    divResultado.innerHTML = mensagemHTML;
});