var x = -1;
while (x <= 0) {
x = prompt("Insira um número natural não nulo:");
if (x <= 0) {alert("VALOR INVÁLIDO!")}
}

var nome = prompt(`Insira o seu NOME:`);

for (i = 0; i < x; i++) {
    document.write(`<p>${nome}</p>`)
}

