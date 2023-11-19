window.addEventListener("load", function() {
    function cadastrarUsuario () {
        var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;
        var confPass = document.getElementById("confPass").value;


        if (pass == confPass && pass != "" && user != "") {
            var objUsuario = { nome: user, senha: pass };
            var vetUsers = localStorage.getItem("users");
            
            if (!vetUsers) {
                var vet = [];
                vet.push(objUsuario);
                localStorage.setItem("users", JSON.stringify(vet));
            } else {
                vet = JSON.parse(vetUsers);
                vet.push(objUsuario);
                localStorage.setItem("users", JSON.stringify(vet));
            }

            alertWifi("Cadastrado!", false, 0, "", 30, "");
        } else {
            alertWifi("Erro!", false, 0, "", 30, "");
        }
    }


    document.getElementById("cadastrar").addEventListener("click" ,cadastrarUsuario);

});