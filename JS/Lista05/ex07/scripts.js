function logar() {
    valLogin = document.getElementById("login").value;
    valSenha = document.getElementById("senha").value;
    valConfSenha = document.getElementById("confSenha").value;

    if (isNaN(valLogin) || valLogin == "") {
        alert("Insira o seu usuario no campo de Login");
    } else {

    }


}

function limpar() {
    document.getElementById("login").value = NaN;
    document.getElementById("senha").value = "";
    document.getElementById("confSenha").value = "";
}