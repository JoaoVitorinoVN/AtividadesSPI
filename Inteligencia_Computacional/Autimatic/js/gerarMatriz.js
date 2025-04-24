let teachers = [];
let subjects = [];

Promise.all([
  fetch('../data/professores.json').then(res => res.json()),
  fetch('../data/materias.json').then(res => res.json())
])
.then(([professoresData, materiasData]) => {
  teachers = Object.values(professoresData);
  subjects = Object.values(materiasData);

  document.querySelector(".generator button").addEventListener("click", () => {
    const matrix = createMatrix();
    console.log(matrix);
  });
})
.catch(err => console.error("Erro ao carregar os dados:", err));


function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function createMatrix() {
  const pop = Array.from({ length: 10 }, () => Array(100).fill("Livre"));

  for (let i = 0; i < 100; i++) {
    const t = generateRandomNumber(0, 9);
    const subjectIndex = generateRandomNumber(0, subjects.length - 1);
    pop[t][i] = `${teachers[t]}: ${subjects[subjectIndex]}`;
  }

  return pop;
}
