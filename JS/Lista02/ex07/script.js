texto = prompt("Insira um texto qualquer");
letra = prompt("Insira uma letra");

textoSeparado = texto.split(" ");

for (i = 0; i < textoSeparado.length; i++) {
    if (textoSeparado[i].charAt(0) == letra)
    document.write(`<p>${textoSeparado[i]}</p>`)
}