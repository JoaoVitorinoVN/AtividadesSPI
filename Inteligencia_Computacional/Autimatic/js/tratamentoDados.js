var teachers = [];
var subjects = [];

fetch('../data/professores.json')
    .then(response => response.json())
    .then(data => {
        teachers = Object.values(data);
    })
    .catch(erro => console.error('Erro ao carregar o JSON:', erro));

function assignSubjects() {
    for (let i = 0; i < 25; i++) {
        subjects[i] = i
    }
}

export function generateClass() {
    assignSubjects();
    if (teachers.length === 0) {
        console.error('Professores ainda não carregados!');
        return [];
    }

    const result = [];

    for (let i = 0; i < 25; i++) {
        const subject = subjects[i % subjects.length];
        const teacher = teachers[generateRandomNumber(0, teachers.length - 1)];
        result.push(`${teacher}: ${subject}`);
    }

    return result;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
