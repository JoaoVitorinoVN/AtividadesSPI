function mostrarMedia() {
    bimestre1 = document.getElementById("1bm").value;
    bimestre2 = document.getElementById("2bm").value;


    notaFinal = parseFloat(bimestre1) + parseFloat(bimestre2);

    if (bimestre1 > 50 || bimestre2 > 50 || bimestre1 < 0 || bimestre2 < 0) { alert(`Valores inválidos! Nota máxima é 50!`); }
    else {
        if (notaFinal > 60) {
            alert(`Aluno aprovado!`)
        } else alert(`Aluno reprovado!`)
    }

}