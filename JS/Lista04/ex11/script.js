var baralho = [];

for (var i = 0; i < 27; i++) {
    baralho.push(i);
}

for (var j = 1; j <= 4; j++) {
    for (var i = 0; i < 3; i++) {
        var carta = Math.floor((Math.random() * baralho.length));
        if (carta <= 0) { carta = 1; }
        document.getElementById(`Carta${i + 1}-${j}`).src = `img/carta${baralho.splice(carta, 1)}.png`;
    }
}