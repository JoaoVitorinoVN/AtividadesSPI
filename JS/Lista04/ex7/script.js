var girar = true;
function jogarDado() {
    
    if (girar == true) {
        lado = Math.floor((Math.random() * 6) + 1);
        document.getElementById("dado").src = `img/dado${lado}.png`;
        girar = false
    } else {
        document.getElementById("dado").src = `img/dadoGiro.gif`;
        girar = true
    }

}