window.addEventListener("load", function () {
    vet = [10,20,30,44,21];
    document.write(`<p>A soma das idades é: ${somaIdades(vet)}</p>`);
});

somaIdades = (vetor) => {
    x = 0; 
    for(i = 0; i < vetor.length; i++) x+=vetor[i];
    return x;
}