console.log("Teste em javascript");

// variáveis:
var animal = "gato";
console.log(animal);

let nomeCompleto = 'Fulano da Silva'
console.log(nomeCompleto)

const valor0 = 10;
console.log(valor0);

valor1 = 12;
valor2 = '15'; // var, permite reatribuição
// valor0 = 14; -- const, não permite reatribuição

// verificação de tipos:
console.log(typeof valor1); 

// algoritmo: entrada + processamento + saída

/* var nome = window.prompt("Nome: ");
console.log("Seja bem-vindo, " + nome + "!" + " Aproveite!");
console.log(`Seja bem-vindo ${nome}. Aproveite!`); //template literal
document.writeln(`Seja bem-vindo ${nome}. Aproveite!`);
*/

// operadores aritméticos: + - * / **
// 2 + 4 * 2 --> 10

// operadores de comparação: < > <= >= == != === !==
console.log(5 == '5'); // igualdade --> olha apenas os valores
console.log (5 === '5'); // estritamente igual olhar para tipo e valor

/* crie um algoritmo que realize a soma de dois números, 
o usuário deverá informar os números e você deve apresentar o resultado */

var num1 = parseFloat(window.prompt("Digite o primeiro número: "));
console.log(typeof num1); 
var num2 = parseFloat(window.prompt("Digite o segundo número: "));
var soma = num1 + num2; 
console.log(`A soma do número ${num1} + ${num2} = ${soma}`);

// estruturas condicionais: if-else, switch-case

var idade = 10;
if (idade >= 18) {
    console.log("Maior de idade."); 
} else {
    console.log("Menor de idade.");
}

var hora = 10;
if (hora < 12) {
    console.log("Bom dia");
} else if (hora < 18){
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}

var diaSemana = 2;
switch (diaSemana) {
    case 1: 
        console.log("Domingo");
        break;
    case 2: 
        console.log("Segunda-feira");
        break;
    case 3: 
        console.log("Terça-feira");
        break;
    default: 
        console.log("Escolha uma opção.");
}

/* estruturas de repetição: while e for
    Diferença: 
    - sabe quantas iterações vai ter?  for
    - não sabe quantas iterações vai ter? while
*/

for( let i=0; i<5; i++){
    console.log("iteração: " + i);
}

var i=3;
while(i<5){
    console.log("iteração: " + i);
    i++; 
}