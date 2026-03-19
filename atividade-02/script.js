// Adivinhe o número
let comecar = document.getElementById("comecar");

comecar.addEventListener("click", function(){
    let numeroSecreto = Math.floor(Math.random() * 20) + 1;
    let tentativas = 0;

    while (true) {
        let entrada = prompt("Adivinhe o número secreto (entre 1 a 20): ");
        if (entrada === null) {
            alert ("Jogo Cancelado! O número secreto era: " + numeroSecreto);
            break;
        }

        let palpite = Number(entrada);
        tentativas++;
        if (!Number.isInteger(palpite)) {
            alert("Por favor, digite um número inteiro.");
            continue;
        }
        if (palpite < 1 || palpite > 20) {
            alert("Por favor, digite um número entre 1 e 20.");
            continue;
        }
        if (palpite === numeroSecreto) {
            alert("Parabéns! Você adivinhou o número em " + tentativas + " tentativas.");
            break;
        } else if (palpite < numeroSecreto) {
            alert("O número secreto é maior. Tente novamente.");
        } else {
            alert("O número secreto é menor. Tente novamente.");
        }
    }
})

// Papel, Pedra ou Tesoura
let comecar2 = document.getElementById("comecar2");

comecar2.addEventListener("click", function(){
    let opcoes = ["pedra", "papel", "tesoura"];
    let escolhaUsuario = prompt("Escolha entre pedra, papel ou tesoura: ").trim().toLowerCase();
    
    if (escolhaUsuario === null) {
        alert("Jogo Cancelado!");
        return;
    }
    if (opcoes.indexOf(escolhaUsuario) === -1) {
        alert("Opção inválida! Por favor escolha entre: pedra, papel ou tesoura.");
        return;
    }
    let escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
    let resultado = "";
    if (escolhaUsuario === escolhaComputador) {
        resultado = "Empate!";
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")) {
        resultado = "Você venceu!";
    } else {
        resultado = "Computador venceu!";
    } 
    alert ("Você escolheu: " + escolhaUsuario + "\nComputador escolheu: " + escolhaComputador + "\nResultado: " + resultado);
})

// Tabuada
let tabuada = document.getElementById("tabuada");

tabuada.addEventListener("click", function(){
    let entrada = prompt("Digite um número entre 1 a 10 para ver sua tabuada: ");
    if (entrada === null) {
        alert("Operação cancelada!");
        return;
    }
    let numero = Number(entrada);
    if (!Number.isInteger(numero)) {
        alert("Por favor, digite um número inteiro.");
        return;
    }
    if (numero < 1 || numero > 10) {
        alert("Por favor, digite um número entre: 1 e 10.");
        return;
    }
    let tabuada = "";
    for (let i = 1; i <= 10; i++) {
        tabuada += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    alert("Tabuada do " + numero + ":\n" + tabuada);
})

// Desenhar triângulo
let desenhar = document.getElementById("desenhar");

desenhar.addEventListener("click", function(){
    let entrada = prompt("Digite o número inteiro de linhas desejada para desenhar o triângulo: ");
    if (entrada === null) {
        alert("Operação cancelada!");
        return;
    }
    let linhas = Number(entrada);
    if (!Number.isInteger(linhas)) {
        alert("Por favor, digite um número inteiro.");
        return;
    }
    if (linhas < 1 || linhas > 10) {
        alert("Por favor, digite um número entre 1 e 10.");
        return;
    }
    let desenhar = "";
    for (let i = 1; i <= linhas; i++) {
        desenhar += "*".repeat(i) + "\n";
    }
    alert("Triângulo com " + linhas + " linhas:\n" + desenhar);
})

// Calcular a soma da série 1 + 11 + 111 + ...
let soma = document.getElementById("soma");

soma.addEventListener("click", function(){
    let entrada = prompt("Digite um número inteiro para informar quantos termos você deseja calcular: ");
    if (entrada === null) {
        alert("Operação cancelada!");
        return;
    }
    let termos = Number(entrada);
    if (!Number.isInteger(termos)) {
        alert("Por favor, digite um número inteiro.");
        return;
    }
    if (termos < 1 || termos > 10) {
        alert("Por favor, digite um número entre 1 e 10.");
        return;
    }
    let soma = 0;
    let termoAtual = 1;
    for (let i = 1; i <= termos; i++) {
        soma += termoAtual;
        termoAtual = termoAtual * 10 + 1; 
    } 
    alert("A soma da série com " + termos + " termos é: " + soma);
})