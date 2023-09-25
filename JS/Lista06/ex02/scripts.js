votos = [0,0,0,0]

function toVote(id) {
    votos[id]++
    document.getElementById(`votos${id}`).innerHTML = votos[id];
}