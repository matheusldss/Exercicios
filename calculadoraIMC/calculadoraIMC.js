function verificarAvaliacao(peso,altura) {
    peso = parseInt(document.querySelector("#peso").value);
    altura = parseInt(document.querySelector("#altura").value);

    // Verifica se os valores são números válidos
    if (isNaN(peso) || isNaN(altura)) {
        exibirTextoNaTela("#mensagem", "Por favor, insira valores válidos.");
        return;
    }

    // Calcula o IMC
    let imc = parseFloat(peso / (altura * altura)) * 10000;

    if (imc < 18.5) {
        exibirTextoNaTela("#resultado", "Abaixo do peso");
    } else if (imc >= 18.5 && imc < 25) {
        exibirTextoNaTela("#resultado", "Peso normal");
    } else if (imc >= 25 && imc < 30) {
        exibirTextoNaTela("#resultado", "Sobrepeso");
    } else if (imc >= 30 && imc < 35) {
        exibirTextoNaTela("#resultado", "Obesidade grau I");
    } else if (imc >= 35 && imc < 40) {
        exibirTextoNaTela("#resultado", "Obesidade grau II");
    } else if (imc >= 40) {
        exibirTextoNaTela("#resultado", "Obesidade grau III");
        }
    // Exibe o resultado
    exibirTextoNaTela("p", "Seu IMC é: " + imc.toFixed(2));

    // Limpa os campos
    limparCampo();
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemIniciais() {
    exibirTextoNaTela("h1", "Calculadora de IMC");
}

function limparCampo() {
    document.querySelector("#peso").value = "";
    document.querySelector("#altura").value = "";
}

function reiniciar() {
    limparCampo();
    exibirMensagemIniciais();
    exibirTextoNaTela("#resultado", ""); // Limpa o resultado
}

// Exibe a mensagem inicial ao carregar a página
document.addEventListener("DOMContentLoaded", exibirMensagemIniciais);
