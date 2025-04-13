const pop = [];

for (let i = 0; i < 10; i++) {
  pop[i] = [];
  for (let j = 0; j < 100; j++) {
    pop[i][j] = 0;
  }
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateClass() {
  const teacher = generateRandomNumber(1, 10);
  const subject = generateRandomNumber(1, 25);
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

  for (let periodo = 0; periodo < tables.length; periodo++) {
    const table = tables[periodo];
    const lines = table.querySelectorAll("tbody tr");

    for (let line = 0; line < lines.length; line++) {
      const camps = lines[line].querySelectorAll("td");

      for (let column = 0; column < camps.length; column++) {
        const index = line * 5 + column;
        const value = pop[periodo][index]; 
        camps[column].textContent = value;
      }
    }
  }
}

document.querySelector(".generator button").addEventListener("click", () => {
  executeGeneration();
  doMapping();
});
