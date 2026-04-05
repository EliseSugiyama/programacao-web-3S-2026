// Preços dos combustíveis 
const precos = {
    gasolina: 6.69,
    etanol: 4.30,
    diesel: 6.03
};

// Função atualizarValor
const atualizarValor = () => {
    const tipo = document.getElementById("combustivel").value;
    const litros = parseFloat(document.getElementById("litros").value);

    if (!tipo) {
        alert("Por favor, escolha um tipo de combustível.");
        return;
    }

    if (isNaN (litros) || litros <= 0){
        alert("Insira uma quantidade válida de litros.");
        return;
    }

    const precoPorLitro = precos[tipo];
    calcularValorAbastecimento(precoPorLitro, litros);
};

// Calcular valor do abastecimento = receber os dados do combustível (tipo e a quantidade de litros)
const calcularValorAbastecimento = (precoCombustivel, litros) => {
    const valorTotal = precoCombustivel * litros;
    document.getElementById("resultado").textContent = formatarMoeda(valorTotal);
};

// Formatar o valor
const formatarMoeda = valor => "R$ " + valor.toLocaleString("pt-br",
    {minimumFractionDigits: 2, maximumFractionDigits: 2});

document.getElementById("combustivel").addEventListener("change", atualizarValor);
document.getElementById("litros").addEventListener("input", atualizarValor);

// Evitar com que a página seja recarregada
document.getElementById("litros").addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        event.preventDefault();
        aualizarValor();
    }
});