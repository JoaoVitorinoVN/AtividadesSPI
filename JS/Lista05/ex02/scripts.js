function exibir() {
    nome = document.getElementById("nome").value.trim();
    if (nome == "" || nome == null || nome == " ") {alert("Nome inválido!");}
    else alert(`${nome.toUpperCase()}`);
}