import { createMatrix } from "./gerarMatriz.js";

document.querySelector(".generator button").addEventListener("click", () => {
  const matrix = createMatrix(); // gera nova matriz

  const tables = document.querySelectorAll(".viewClasses table");

  tables.forEach((table, weekIndex) => {
    const tbody = table.querySelector("tbody");
    const rows = tbody.querySelectorAll("tr");

    for (let day = 0; day < 5; day++) {
      for (let time = 0; time < 4; time++) {
        const columnIndex = weekIndex * 20 + day * 4 + time;

        let professorInfo = "Livre";
        for (let professor = 0; professor < 10; professor++) {
          if (matrix[professor][columnIndex] !== "Livre") {
            professorInfo = matrix[professor][columnIndex];
            break;
          }
        }

        rows[time].children[day].textContent = professorInfo;
      }
    }
  });
});
