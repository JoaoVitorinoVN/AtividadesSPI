var teachers = [];
var subjects = [];

fetch('../data/professores.json')
  .then(response => response.json())
  .then(data => {
    teachers = Object.values(data);
  })
  .catch(erro => console.error('Erro ao carregar o JSON:', erro));

fetch('../data/materias.json')
  .then(response => response.json())
  .then(data => {
    subjects = Object.values(data);
  })
  .catch(erro => console.error('Erro ao carregar o JSON:', erro));


function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function createMatrix() {
  var pop = [];
  for (let i = 0; i < 10; i++) {
    pop[i] = [];
    for (let j = 0; j < 100; j++) {
      pop[i][j] = "Vago";
    }
  }

  for (let i = 0; i < 100; i++) {
    const t = generateRandomNumber(0,9);
      pop[t][i] = `${teachers[t]}: ${subjects[generateRandomNumber(0,24)]}`
  }
  return console.log(pop);
}

document.querySelector(".generator button").addEventListener("click", () => {
  createMatrix()
});
