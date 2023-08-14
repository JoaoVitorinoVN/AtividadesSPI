nome = prompt(`Digite seu nome completo: `).toUpperCase();

do {
    idade = prompt(`Insira sua idade: `);
    if (18 - idade == 1) {
        alert(`${nome}, você ainda NÃO POSSUI idade para tirar carteira! Ainda falta ${18 - idade} ano.`)
    }
    else if (18 - idade > 0) {
        alert(`${nome}, você ainda NÃO POSSUI idade para tirar carteira! Ainda faltam ${18 - idade} anos.`)
    }
    else if ((idade == null) || (idade == "")) {
        alert(`FAVOR, INSERIR SUA IDADE!`)
    }
} while ((idade == "") || (idade == null) || (idade < 18));

alert(`${nome}, você já POSSUI idade para tirar sua carteira de motorista!`);