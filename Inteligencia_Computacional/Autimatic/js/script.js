const pop = [];

fetch('../data/professores.json')
  .then(response => response.json())
  .then(data => {
    const teachers = Object.values(data);
    console.log(teachers);
  })
  .catch(erro => console.error('Erro ao carregar o JSON:', erro));

for (let i = 0; i < 10; i++) {
  pop[i] = [];
  for (let j = 0; j < 100; j++) {
    pop[i][j] = 0;
  }
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateClass(teacher) {
  return `P${teacher}-M${subject}`;
}

function executeGeneration() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 100; j++) {
      pop[i][j] = generateClass();
    }
  }
}

function doMapping() {
  const tables = document.querySelectorAll(".viewClasses table");

  for (let semester = 0; semester < tables.length; semester++) {
    const table = tables[semester];
    const lines = table.querySelectorAll("tbody tr");

    for (let line = 0; line < lines.length; line++) {
      const camps = lines[line].querySelectorAll("td");

      for (let column = 0; column < camps.length; column++) {
        const index = line * 5 + column;
        const value = pop[semester][index]; 
        camps[column].textContent = value;
      }
    }
  }
}

document.querySelector(".generator button").addEventListener("click", () => {
  executeGeneration();
  doMapping();
});
