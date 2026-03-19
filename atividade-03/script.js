// Incrementar e Decrementar
let incrementar = document.getElementById("incrementar");
let decrementar = document.getElementById("decrementar");
let valor = document.getElementById("valor");

let contador = 0;
function atualizarValor() {
    valor.textContent = contador;
}

incrementar.addEventListener("click", function() {
    contador++;
    atualizarValor();
});

decrementar.addEventListener("click", function() {
    if (contador === 0) {
        alert("O contador já está em zero!");
        return;
    }
    contador = contador - 1;
    atualizarValor();
});

// Contagem de caracteres
let campo = document.getElementById("campo");
let contCaracteres = document.getElementById("caracteres");
let textoDigitado = document.getElementById("texto-digitado");
let historico = document.getElementById("historico");

campo.addEventListener("input", function() {
    let texto = campo.value; 
    let semEspacos = texto.replace(/\s/g, '');
    contCaracteres.textContent = semEspacos.length;
    textoDigitado.textContent = texto;
});

let hist = [];

campo.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let texto = campo.value.trim();
        if (texto === "") {
            return;
        } 

        let semEspacos = texto.replace(/\s/g, '');
        let numCaracteres = semEspacos.length;

        let entrada = {palavra: texto, caracteres: numCaracteres};
        hist.push(entrada);

        let li = document.createElement("li");
        li.textContent = `${entrada.palavra} -- ${entrada.caracteres} caracteres`;
        historico.appendChild(li);

        campo.value = "";
        contCaracteres.textContent = "0";
        textoDigitado.textContent = "";
    }
});

// Adicionar nova lista (ordenada ou não ordenada)
let tipoLista = document.getElementById("tipo-lista");
let adicionarLista = document.getElementById("lista");
let adicionarItem = document.getElementById("item");
let listaContainer = document.getElementById("lista-container");

adicionarLista.addEventListener("click", function() {
    let tipo = tipoLista.value;
    let novaLista = document.createElement(tipo);
    novaLista.className = "nova-lista";

    let li = document.createElement("li");
    let i = 1;
    li.textContent = "Item " + i++;
    novaLista.appendChild(li);

    listaContainer.appendChild(novaLista);
});

adicionarItem.addEventListener("click", function() {
    let listas = listaContainer.querySelectorAll('ul, ol');
    if (listas.length === 0) {
        alert("Nenhuma lista disponível. Adicione uma lista primeiro!");
        return;
    }
    let ultimaLista = listas[listas.length - 1];

    let textoItem = prompt("Digite o novo item: ");
    if (textoItem === null) return;
    let textoTrim = textoItem.trim();
    if (textoTrim === "") {
        alert("Texto vazio. Item não adicionado.");
        return;
    }

    let li = document.createElement("li");
    li.textContent = textoTrim;
    ultimaLista.appendChild(li);
});

// Botão para resetar tudo
let resetar = document.getElementById("resetar");

resetar.addEventListener("click", function() {

    if(typeof contador !== 'undefined') {
        contador = 0;
        if (typeof atualizarValor === 'function') {
            atualizarValor();
        }
    }
    if (typeof campo !== 'undefined') {
        campo.value = "";
    }
    if (typeof contCaracteres !== 'undefined') {
        contCaracteres.textContent = "0";
    }
    if (typeof textoDigitado !== 'undefined') {
        textoDigitado.textContent = "";
    }
    if (listaContainer) {
        listaContainer.innerHTML = "";
    }
    if (typeof hist !== 'undefined') {
        hist = [];
    }
    if (typeof historico !== 'undefined') {
        historico.innerHTML = "";
    }
}); 

atualizarValor();