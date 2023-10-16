var carinhos = 0;
document.getElementById("carinhos").innerHTML = carinhos;


function gato01() {
    var nome = localStorage.getItem("nome");
    nome = nome.split(" ");

    alert(`Oi, ${nome[0]}! Tudo bem com você?`);
}

function gato02() {
    carinhos++;
    document.getElementById("carinhos").innerHTML = carinhos;
}

function gato03() {
    document.getElementById("gato03").src = "/IMG/gato06.gif"
}
function gato03Out() {
    document.getElementById("gato03").src = "/IMG/gato03.gif"
}

function gato04() {
    document.getElementById("gato04").innerHTML = "Ai! Ai! Ai! Pare de fazer cócegas!"
}
function gato04Out() {
    document.getElementById("gato04").innerHTML = "lá lá lá lá lá!"
}

function gato05() {
    var random = Math.floor(Math.random() * 100 + 1);
    document.querySelector("input").value = parseInt(random);
}