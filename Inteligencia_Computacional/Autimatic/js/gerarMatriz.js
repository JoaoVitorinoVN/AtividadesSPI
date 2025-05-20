let teachers = [];
let subjects = [];

Promise.all([
  fetch('Inteligencia_Computacional/Autimatic/data/professores.json').then(res => res.json()),
  fetch('Inteligencia_Computacional/Autimatic/data/materias.json').then(res => res.json())
])
.then(([professoresData, materiasData]) => {
  teachers = Object.values(professoresData);
  subjects = Object.values(materiasData);

  document.querySelector(".generator button").addEventListener("click", () => {
    const matrix = createMatrix();
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

export function checkConflicts(pop) {
  const teacherConflicts = Array(10).fill(0);

  for (let time = 0; time < 20; time++) {
    const co = {}; 
    for (let semester = 0; semester < 5; semester++) {
      const colIndex = semester * 20 + time;
      for (let teacher = 0; teacher < 10; teacher++) {
        const value = pop[teacher][colIndex];
        if (value !== "Livre") {
          const name = value.split(":")[0].trim();
          if (!co[name]) co[name] = 0;
          co[name]++;
        }
      }
    }

    for (let name in co) {
      if (co[name] > 1) {
        const conflicts = co[name] - 1;
        const t = pop.findIndex(row =>
          row.some(cell => cell.startsWith(name))
        );
        if (t !== -1) {
          teacherConflicts[t] += conflicts;
        }
      }
    }
  }

  return [...teacherConflicts].sort((a, b) => a - b);
}


