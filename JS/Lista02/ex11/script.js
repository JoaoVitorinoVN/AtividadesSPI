texto = prompt(`Insira um texto ;)`)
pal1 = prompt(`Insira uma palavra legal que tava nesse texto aí`)
pal2 = prompt(`Informe uma segunda palavra só para ser ainda mais legal que não tava lá, kkkk`)
for (i = 0; i < texto.length; i++) {
    texto = texto.replace(pal1, pal2)
}
alert(`Texto alterado:\n${texto}`)
