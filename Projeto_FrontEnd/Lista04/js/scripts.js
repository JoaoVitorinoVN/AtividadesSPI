window.addEventListener("load", function () {
    var lista = document.getElementById('listaTop10');
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODQ4MzNhYmZmZTRmNGFkZDkxMjk4Y2FiYzBjODdhZiIsInN1YiI6IjY2MDM3ZTUwYjAyZjVlMDE3ZDIxYWY3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JBrH6THpvEreCD5_ek6J9yC-PBsnIuAKQAi-oFj6DG4'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=pt-br&page=1', options)
        .then(response => response.json())
        .then(data => {
            lista.innerHTML = '';
            data.results.slice(0,10).forEach(movie => {
                lista.innerHTML += `
                <div class="filme" onmouseover="selectmovie(${movie.id})">
                    <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
                    <h4>${movie.original_title}</h4>
                </div>`;
            });
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
        });
});

function selectmovie(id) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODQ4MzNhYmZmZTRmNGFkZDkxMjk4Y2FiYzBjODdhZiIsInN1YiI6IjY2MDM3ZTUwYjAyZjVlMDE3ZDIxYWY3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JBrH6THpvEreCD5_ek6J9yC-PBsnIuAKQAi-oFj6DG4'
        }
    };
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-br`, options)
        .then(response => response.json())
        .then(data => {
            document.getElementById("titulo").innerText = data.original_title;
            document.getElementById("genero").innerHTML = "Generos: ";
            data.genres.forEach(genre => {
                document.getElementById("genero").innerHTML += `<span>${genre.name}</span>`;
            })
            document.getElementById("descricao").innerText = data.overview;
            document.getElementById("views").innerText = `${data.popularity} pessoas já viram este título!`;
            document.getElementById("backdrop").src = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
        });
}