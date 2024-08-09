document.getElementById("select").addEventListener("change", () => {
    fetch('json/alunos.json')
        .then(response => response.json())
        .then(data => function () {
            const view = document.getElementById("select").value;
            switch (value) {
                case "all":
                    showAllStudents();
                    break;
                case "male":
                    showMaleStudents();
                    break;
                case "female":
                    showFemaleStudents();
                    break;
                case "approved":
                    showApprovedStudents();
                    break;
                case "failed":
                    showFailedStudents();
                    break;
                default:
                    view.innerHTML = "";
            }
        })
})

    