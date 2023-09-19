function calcular(operacao) {
    var x = parseFloat(document.getElementById("val1").value);
    var y = parseFloat(document.getElementById("val2").value);
    var resultado;
    if (isNaN(x) || isNaN(y)) {
        alert("Digite números válidos em ambos os campos.");
        return;
    }
    
    switch (operacao) {
        case "soma":
            var resultado = x + y;
        break;
        case "subtracao":
            var resultado = x - y;
        break;
        case "multiplicacao":
            var resultado = x * y;
        break;
        case "divisao":
            var resultado = x / y;
            if (y == 0) {
                alert("Não é possível dividir por zero.");
            }
        break;
    }
    document.getElementById("result").value = resultado;

}