document.write(`<p>Seus números da mega-sena são:</p>`)
balaio = [];
for (i = 1; i <= 60; i++) {
    balaio.push(i);
}


x = Math.floor(Math.random() * balaio.length);
for (i = 0; i < 5; i++) {
    document.write(`${balaio.splice(x, 1)} - `)
    x = Math.floor(Math.random() * balaio.length);
;
}
document.write(`<p>${balaio.splice(x - 1, 1)}</p>`)