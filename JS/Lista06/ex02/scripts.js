var cad1 = 0, cad2 = 0, cad3 = 0, cad4 = 0;

function toVote(id) {

    switch (id) {
        case 1:
            cad1++;
            break;
        case 2:
            cad2++;
            break;
        case 3:
            cad3++;
            break;
        case 4:
            cad4++;
            break;
    }

    document.getElementById(`votos1`).innerHTML = cad1;
    document.getElementById(`votos2`).innerHTML = cad2;
    document.getElementById(`votos3`).innerHTML = cad3;
    document.getElementById(`votos4`).innerHTML = cad4;
}