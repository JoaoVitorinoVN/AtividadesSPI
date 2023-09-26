votos = [0,0,0,0];  
function firstLoad () {
    for (var i = 0; i < 4; i++) {
        document.getElementById(`votos${i}`).innerHTML = 0;
    }
}
function toVote(id) {
    votos[id]++
    document.getElementById(`votos${id}`).innerHTML = votos[id];
}