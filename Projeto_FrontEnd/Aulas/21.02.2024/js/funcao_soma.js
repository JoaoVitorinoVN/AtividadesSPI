window.addEventListener("load", function () {
    // console.log(somar(10,20));
    // console.log(s(30,40));
    // console.log(s2(30,30));
    // console.log(s3(30,30));
    console.log(soma(8,80));
});

/* Demonstração de formas de se escrever a função "Somar":
>  1ª Maneira: Função declarativa
    function somar(x, y) {
        return x+y;
    }

> 2ª Maneira: Função literal
    var s = function somar(x, y) {
        return x + y;
    }

> 3ª Maneira: Função anônima
    var s2 = function (x, y) {
        return x + y;
    }

> 4ª Maneira: Função por seta (Arrow Function)
    var s3 = (x, y) => {
        return x + y;
    }

+ Simplificação
    var s3 = (x, y) => x + y;
*/
var soma = (x, y) => x + y;