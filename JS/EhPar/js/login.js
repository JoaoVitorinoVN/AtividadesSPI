window.addEventListener("load", function () {
    document.getElementById("login").addEventListener("click", validarLogin);

    function validarLogin() {
        var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;
        var vetUsers = JSON.parse(localStorage.getItem("users"));
        if (user == "" || pass == "") {
            alertWifi("Preencha as informações!", false, 0, "", 30, "");
        } else {
            if (!vetUsers) {
                alertWifi("Não há usuários cadastrados!", false, 0, "", 30, "");
            } else {
                var find = false;
                for (let i = 0; i < vetUsers.length; i++) {
                    if (vetUsers[i].nome == user && vetUsers[i].senha == pass) {
                        find = true;
                        break;
                    }
                }
                if (find) {
                    alertWifi("Logado com sucesso!", false, 0, "", 30, "index.html");
                    localStorage.setItem("login", user);
                } else {
                    alertWifi("Nome de usuário ou senha incorretos!", false, 0, "", 30, "");
                }
            }
        }
        
    }
});