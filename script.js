// Função responsável por realizar os cálculos
function calcular() {
    
    // Obtém os elementos de entrada e o local onde será exibido o resultado
    var tx1 = document.getElementById('txtn1');
    var tx2 = document.getElementById('txtn2');
    var res = document.getElementById('res');

    // Converte os valores dos inputs para números
    var n1 = Number(tx1.value);
    var n2 = Number(tx2.value);

    // Verifica se os campos estão vazios e exibe uma mensagem de erro usando alert
    if (tx1.value === "" || tx2.value === "") {
        alert("Por favor, preencha os dois números!"); // Exibe o alert
        return; // Sai da função para evitar erros no cálculo
    }

    var resultado = 0; 

    // Verifica qual operação foi selecionada pelo usuário e realiza o cálculo correspondente
    if (document.getElementById("soma").checked) {
        resultado = n1 + n2; 
    } else if (document.getElementById("subtrair").checked) {
        resultado = n1 - n2;
    } else if (document.getElementById("dividir").checked) {
        // Verifica se o usuário está tentando dividir por zero
        if (n2 === 0) {
            alert("Erro: Divisão por zero não permitida!"); // Exibe o alert de erro
            return; 
        }
        resultado = n1 / n2; 
    } else if (document.getElementById("multiplicar").checked) {
        resultado = n1 * n2; 
    }

    res.innerHTML = `O resultado é: <strong>${resultado}</strong>`;
}

