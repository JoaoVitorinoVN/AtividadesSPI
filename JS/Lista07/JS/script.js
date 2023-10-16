alert("Seja bem vindo!");

function acolherNome () {
    var nome = document.getElementById("nome").value;
    if (nome != null && nome != "" && nome != " " && nome.includes(" ")) {
        localStorage.setItem("nome", nome);
        window.location.href = "/menu.html";
    } else {
        alert("Nome inválido! Insira no mínimo duas palavras!")
    }
}