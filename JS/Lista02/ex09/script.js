texto = prompt("Insira um texto qualquer");
textoInvertido = texto.split("").reverse().join("");

if (texto == textoInvertido) {
    alert(`Este texto é um palíndromo!`);
} else {
    alert(`Este texto NÃO é um palíndromo!`)
}

