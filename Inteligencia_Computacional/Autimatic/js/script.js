import { createMatrix, checkConflicts } from "./gerarMatriz.js";

document.querySelector(".generator button").addEventListener("click", () => {
  const pop = createMatrix();
  const tables = document.querySelectorAll(".viewClasses table");

  tables.forEach((table, weekIndex) => {
    const tbody = table.querySelector("tbody");
    const rows = tbody.querySelectorAll("tr");

    for (let day = 0; day < 5; day++) {
      for (let time = 0; time < 4; time++) {
        const columnIndex = weekIndex * 20 + day * 4 + time;

        let teacherInfo = "Livre";
        for (let teacher = 0; teacher < 10; teacher++) {
          if (pop[teacher][columnIndex] !== "Livre") {
            teacherInfo = pop[teacher][columnIndex];
            break;
          }
        }

        rows[time].children[day].textContent = teacherInfo;
      }
    }
  });

  const conflicts = checkConflicts(pop);
  console.log(`Conflitos detectados: ${conflicts}`);
});