texto = prompt("Insira um texto qualquer");

textoSeparado = texto.split(" ");


for (j = 65; j < 90; j++) {
    for (i = 0; i < textoSeparado.length; i++) {
        if (textoSeparado[i].charAt(0) == String.fromCharCode(j) || textoSeparado[i].charAt(0) == String.fromCharCode(j + 32)) {
            document.write(`<p># Palavras iniciadas pela letra: ${String.fromCharCode(j)}</p>`);
            break;
        }
    }

    for (i = 0; i < textoSeparado.length; i++) {
        if (textoSeparado[i].charAt(0) == String.fromCharCode(j) || textoSeparado[i].charAt(0) == String.fromCharCode(j + 32))
            document.write(`<p>${textoSeparado[i]}</p>`)
    }
}