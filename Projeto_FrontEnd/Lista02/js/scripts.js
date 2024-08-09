document.getElementById('start').addEventListener("click", function () {
    const input = document.getElementById('input').value;
    const vetIdades = [10, 23, 30, 41, 21];
    const idadeDeterminada = Math.floor(Math.random() * 35);

    document.write(`<p>Soma das idades: ${somaIdades(vetIdades)}</p>`);
    document.write(`<p>Média aritmética: ${somaIdades(vetIdades) / vetIdades.length}</p>`);
    document.write(`<p>Maior idade: ${maiorIdade(vetIdades)}</p>`);
    document.write(`<p>Idades ímpares: ${idadesImpares(vetIdades)}</p>`);
    document.write(`<p>Maiores de idade? ${verMaioridade(vetIdades)}</p>`);
    document.write(`<p>Idades maiores ou iguais a ${input}: ${verMaiorValor(vetIdades, input)}</p>`);
    document.write(`<p>Idades maiores ou iguais a ${idadeDeterminada}: ${maiorQueIdade(vetIdades, idadeDeterminada)}</p>`);
    document.write(`<p>Média das idades maiores que ${idadeDeterminada}: ${mediaMaiorQueIdade(vetIdades, idadeDeterminada)}</p>`);
})

somaIdades = vetor => {
    return vetor.reduce((soma, elemento) => soma += elemento);;
}

maiorIdade = vetor => {
    return vetor.reduce((maior, idade) => (idade > maior ? idade : maior), 0);
}

idadesImpares = vetor => {
    return vetor.filter(idade => idade % 2 !== 0);
}

verMaioridade = vetor => {
    return vetor.every(idade => idade >= 18);
}

verMaiorValor = (vetor, input) => {
    return vetor.filter(idade => idade >= input);
}

maiorQueIdade = (vetor, idadeDeterminada) => {
    return vetor.filter(idade => idade >= idadeDeterminada);
}

mediaMaiorQueIdade = (vetor, idadeDeterminada) => {
    const valores = maiorQueIdade(vetor, idadeDeterminada);
    return valores.length > 0 ? valores.reduce((acc, idade) => acc + idade, 0) / valores.length : 0;
}