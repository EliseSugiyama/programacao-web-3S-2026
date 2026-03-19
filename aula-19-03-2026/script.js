// trabalhar com eventos

// propriedades
let botao1 = document.getElementById("botao1");

// manipuladores de eventos
botao1.onclick = function(){
    alert("Primeiro evento");
};

// segunda ação --> se tiver dois blocos de eventos no mesmo botão neste modelo, só aparecerá o evento mais recente
/*botao1.onclick = function(){
    botao1.textContent = "Texto Alterado"
}; */

let botao2 = document.getElementById("botao2");
botao2.onmouseover = function(){
    // alert("Teste");
    botao2.style.backgroundColor = "red";
}

botao2.onmouseout = function(){
    botao2.style.backgroundColor = "";
}

botao2.ondblclick = function(){
    botao2.textContent = "Duplo clique";
}

let campoEntrada = document.getElementById("campo");
let resultado = document.getElementById("resultado");
campoEntrada.onkeydown = function(event){
    if(event.key == "Enter"){ // associar a uma tecla disponível
        console.log("teste");
        resultado.innerHTML = campoEntrada.value;
        campoEntrada.value = "";
    }
}

// addEventListener
let botao3 = document.getElementById("botao3");
let mensagem1 = document.getElementById("mensagem1");
let mensagem2 = document.getElementById("mensagem2");

botao3.addEventListener("click", function(){
    mensagem1.textContent = "Primeiro Evento";
});

botao3.addEventListener("click", function(){
    mensagem2.textContent = "Segundo Evento";
});