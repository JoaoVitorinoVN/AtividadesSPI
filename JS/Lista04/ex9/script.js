input = prompt("Insira o nome de um líder de grupo");
grupos = []
while (input != null && input != "" && input != " ") {
    grupos.push(input);
    input = prompt("Insira o nome de um líder de grupo");
}

document.write(`
    <h1>Ordem de apresentação dos grupos</h1>
    <ol>
`)

x = Math.floor(Math.random() * grupos.length);
for (i = 0; i <= grupos.length; i++) {
    document.write(`<li>${grupos.splice(x, 1)}</li>
                    <hr>`)
    x = Math.floor(Math.random() * grupos.length);
}
document.write(`<li>${grupos.splice(x, 1)}</li>`)
document.write(`</ol>`)