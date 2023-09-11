N = parseInt(prompt(`Insira um numero para iniciar!`));
M = parseInt(prompt(`Insira um numero limite!`));
num = Math.floor(Math.random() * (M - N + 1))+N;
document.write(`<p>Seu número da sorte é:</p> <h1>${num}</h1>`)