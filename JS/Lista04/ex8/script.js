function jokempo(jogada) {
    jogadaBlex = Math.floor((Math.random() * 3) + 1);

    if (jogada == 1 && jogadaBlex == 3 || jogada == 2 && jogadaBlex == 1 || jogada == 3 && jogadaBlex == 2) {
        document.getElementById("vitoria").innerHTML="JOGADOR 1 vence!";
    } else if (jogada == jogadaBlex) {
        document.getElementById("vitoria").innerHTML = "Empate!";
    } else {
        document.getElementById("vitoria").innerHTML = "JOGADOR 2 vence!";
    }

    document.getElementById("alex").src = `img/alex${jogada}.png`;
    document.getElementById("blex").src = `img/blex${jogadaBlex}.png`;
}