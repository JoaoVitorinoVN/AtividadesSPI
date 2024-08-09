window.addEventListener("load", function () {
    var vet = [1,2,3,4,5,6,7,8,9];
    vetPares(vet);
});

vetPares = pares => {
    impares = []
    for(i = 0; i < pares.length; i++) if(pares[i]%2 != 0) impares.push(pares[i]); pares.splice(i, 1);
    console.log(pares);
    console.log(impares);
}
