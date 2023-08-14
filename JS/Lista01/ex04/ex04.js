nota1 = parseFloat(prompt(`Nota 1: `));
nota2 = parseFloat(prompt(`Nota 2: `));
notaFinal = nota1 + nota2;
if (notaFinal >= 60) {
    alert(`APROVADO! Pontuação final: ${notaFinal}`)
} else {
    alert(`REPROVADO! FALTARAM ${60 - notaFinal} pontos!`)
}