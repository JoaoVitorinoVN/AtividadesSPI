document.getElementById('submit').addEventListener("click", function () {
    const vet = [10,15,33,44,21];
    var valor = document.getElementById('value');

    document.write(`<p>A soma das idades é: <i>${somaIdades(vet)}</i></p>
    <p>A média artimética das idades é: <i>${mediaIdades(vet)}</i></p>
    <p>A maior idade é: <i>${maiorIdade(vet)}</i></p>
    <p>As idades impares são: <i>${ehImpar(vet)}</i></p>
    <p>Todos são maiores de idade? <i>${verficaMaiorIdade(vet)}</i></p>
    <p>Todas as idades são maiores ou iguais ao valor informado? <i>${maiorOuIgual(vet,valor)}</i></p>
    <p>As idades que são maiores ou iguais ao valor informado: <i>${idadesMaioresOuIguais(vet, valor)}</i></p>
    <p>A média de todas as idades são são maiores ou iguais ao valor informado? <i>${mediaIdadeMaiorOuIgual(vet, valor)}</i></p>`);
});

somaIdades = vetor => {
    x = 0; 
    for(i = 0; i < vetor.length; i++) x+=vetor[i];
    return x;
}

mediaIdades = vetor => {
    return somaIdades(vetor)/vetor.length;
}
maiorIdade = vetor => {
    maiorIdade = 0;
    for(i = 0; i < vetor.length; i++) if(vetor[i] > maiorIdade) maiorIdade = vetor[i];
    return maiorIdade;
}

ehImpar = vetor => {
    for(i = 0; i < vetor.length; i++) if(vetor[i] < 18) vetor.splice(i, 1);
    return vetor;
}

verficaMaiorIdade = vetor => {
    for(i = 0; i < vetor.length; i++) if (vetor[i] < 18) return "Não. Há menores de idade no vetor.";
    return "Sim. Todos são maiores de idade.";
}

maiorOuIgual = (vetor,x) => {
    for(i = 0; i < vetor.length; i++) if (vetor[i] < x) return "Não. Há idades menores que o valor informado no vetor.";
    return "Sim. Todos são maiores que o valor informado no vetor.";
}

idadesMaioresOuIguais = (vetor, x) => {
    for (i = 0; i < vetor.length; i++) if (vetor[i] < x) vetor.splice(i, 1);
    return vetor;
}
mediaIdadeMaiorOuIgual = (vetor, x) => {
    for (i = 0; i < vetor.length; i++) if (vetor[i] < x) vetor.splice(i, 1);
    var y = 0;
    for (i = 0; i < vetor.length; i++) y += vetor[i];
    return y / vetor.length;
}