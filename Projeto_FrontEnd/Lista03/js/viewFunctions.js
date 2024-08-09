function showAllStudents() {
    getStudents().then(students => {
        view.innerHTML = "";
        students.forEach(student => {
            view.innerHTML += `<p>${student.nome} - ${student.sexo}</p>`;
        });
    });
}
function showMaleStudents() {
    getStudents().then(students => {
        const maleStudents = students.filter(student => student.sexo === "M");
        view.innerHTML = "";
        maleStudents.forEach(student => {
            view.innerHTML += `<p>${student.nome}</p>`;
        });
    });
}
function showFemaleStudents() {
    getStudents().then(students => {
        const femaleStudents = students.filter(student => student.sexo === "F");
        view.innerHTML = "";
        femaleStudents.forEach(student => {
            view.innerHTML += `<p>${student.nome}</p>`;
        });
    });
}
function showApprovedStudents() {
    getStudents().then(students => {
        const approvedStudents = students.filter(student => (student.notaBim1 + student.notaBim2) / 2 >= 50);
        view.innerHTML = "";
        approvedStudents.forEach(student => {
            view.innerHTML += `<p>${student.nome}</p>`;
        });
    });
}
function showFailedStudents() {
    getStudents().then(students => {
        const failedStudents = students.filter(student => (student.notaBim1 + student.notaBim2) / 2 < 50);
        view.innerHTML = "";
        failedStudents.forEach(student => {
            view.innerHTML += `<p>${student.nome}</p>`;
        });
    });
}
function clearTable() {
    let tab = document.getElementById("view");
    tab.innerHTML = "";
}