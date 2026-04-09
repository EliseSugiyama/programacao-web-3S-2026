// Objetos
const pessoa = {
    nome: "Fulano",
    idade: 10,
    status: true
}; // Objeto

console.log(pessoa);

// Acessar as propriedades do objeto
console.log(pessoa.nome);

const veiculo = {};
veiculo.marca = "Fiat";
veiculo.ano = "2023";
console.log(veiculo);

veiculo.marca = "BYD";
console.log(veiculo);

// Construtor --> criar diversas instâncias de um mesmo objeto
class Veiculo2 {
    constructos(){};
    constructor(marca, ano) {
        this.marca = marca,
            this.ano = ano;
    };
};

const c1 = new Veiculo2("BYD", 2025);
const c2 = new Veiculo2("GWM", 2024);

console.log(c1);
console.log(c2);

// Modificadores de acesso
class ContaBancaria{
    saldo = 0; // # -- modificador de acesso privado
    constructor(saldoInicial){
        this.saldo = saldoInicial;
    }; 

    // Metodo
    getSaldo(){
        return this.saldo;
    };
};

const conta = new ContaBancaria(100);
console.log(conta.saldo);
// console.log(conta.#saldo); // erro: pois a propriedade é privada
console.log(conta.getSaldo());

const pessoa2 = ["Fulano", "Ciclano"]; // Array
pessoa2[2] = "Beltrano";
console.log(pessoa2);

// Métodos
pessoa2.push("Ana"); // Adiciona ao final do array
console.log(pessoa2);

pessoa2.unshift("Maria"); // Adiciona ao início do array
console.log(pessoa2);

pessoa2.splice(1, 0, "João"); // Adiciona na posição específica
console.log(pessoa2);

pessoa2.pop(); // Remove o último elemento
console.log(pessoa2);

pessoa2.shift(); // Remove o primeiro elemento
console.log(pessoa2);

pessoa2.splice(2, 1); // Remove na posição específica
console.log(pessoa2); 