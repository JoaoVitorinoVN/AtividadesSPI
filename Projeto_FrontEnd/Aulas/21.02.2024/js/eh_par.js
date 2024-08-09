window.addEventListener("load", function () {
    ehPar(1);
    ehPar(2);
});

ehPar = valor => (valor % 2 == 0)?console.log("O número é par"):console.log("O número é impar");
// Uso do OPERADOR TERNÁRIO
