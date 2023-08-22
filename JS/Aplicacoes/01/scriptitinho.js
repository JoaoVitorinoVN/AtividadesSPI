var nome = prompt(`Insira o seu nome`);
document.write(`<p>Seu nome possui ${nome.length} caracteres</p>\n
                <p>A primeira letra do seu nome é ${nome.charAt(0)}</p>\n
                <p>Seu nome convertido para letras maiúsculas: ${nome.toUpperCase()}</p>\n
                <p>Seu nome possui ${nome.split(" ").length} palavras</p>\n
                <p>Seu nome <span style="color: red">${nome}</span> escrito na cor vermelho</p>\n
                <p>Seu nome escrito 5 vezes na cor azul:</p>\n
                <ul>\n`);

for (var i = 0; i < 5; i++) {
    document.write(`<li style="color: blue">${nome}</li>\n`);
}
document.write(`</ul>`)
