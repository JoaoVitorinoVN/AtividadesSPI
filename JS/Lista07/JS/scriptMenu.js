var nome = localStorage.getItem("nome");
nome = nome.split(" ");

document.write(`
    <h1>${nome[0] + " " + nome[nome.length - 1]}, seja bem-vindo ao Jogo dos Felinos!</h1>
    <button type="button" onclick="redirect();">Entrar como convidado</button>
    `);

function redirect() {
    window.location.href = "/felino.html";
}