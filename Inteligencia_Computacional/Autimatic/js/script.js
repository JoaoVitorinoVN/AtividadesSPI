function executeGeneration(params) {
    
}
const matriz = [];

for (let i = 0; i < 11; i++) {
  matriz[i] = [];
  for (let j = 0; j < 101; j++) {
    matriz[i][j] = 0; 
  }
}



function generateClass() {
    teacher = generateRandomNumber(1, 10)
    subject = generateRandomNumber(1, 25)
}

function generateRandomNumber(min, max) {
    Math.floor(Math.random * max) + min
}