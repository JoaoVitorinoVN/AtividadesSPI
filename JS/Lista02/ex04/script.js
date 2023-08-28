nomeUser = prompt("Insira o seu nome completo");
const nomeSeparado = nomeUser.split(" ");
const primeiroNome = nomeSeparado.shift(); 
alert(`Seu nome é: ${primeiroNome.toUpperCase()} ${nomeSeparado.join(" ").toLowerCase()}`)