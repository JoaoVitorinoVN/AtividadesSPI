function toHover() {
    document.getElementById("persona").src = "img/Assustado.png";
    document.getElementById("texto").innerHTML = "O que você quer?";
}
function toDragOut() {
    document.getElementById("persona").src = "img/Pensativo.png";
    document.getElementById("texto").innerHTML = "Zzzzzzzzzz!";
}
function toClick() {
    texto = prompt("Diga-me, qual é o seu nome?");
    if (texto == "" || texto == null) {
        document.getElementById("persona").src = "img/Nervoso.png";
        document.getElementById("texto").innerHTML = "Não me faça perder o meu tempo com suas brincadeirinhas arrogantes!";
    } else {
        document.getElementById("persona").src = "img/alegre.png";
        document.getElementById("texto").innerHTML = `Oh, prazer em te conhecer, ${texto.trim()}, seja bem-vindo!`;

    }
}
