$("#btnSend").click(function () {

    let assignments = $("#txtAssignments").val();
    let groupProject = $("#txtGroupProject").val();
    let quizzes = $("#txtQuizzes").val();
    let exams = $("#txtExams").val();
    let intex = $("#txtIntex").val();

     //let totalGrades = parseFloat(assignments) + parseFloat(groupProject) + parseFloat(quizzes) 
     //+ parseFloat(exams) + parseFloat(intex)

    percentage = (parseFloat(assignments) * 0.55) + (parseFloat(groupProject) * 0.05) + (parseFloat(quizzes) * 0.1)
        + (parseFloat(exams) * 0.20) + (parseFloat(intex) * 0.1)

    if (percentage <= 100 && percentage >= 94) {
        grades = "A";
    }
    else if (percentage < 94 && percentage >= 90) {
        grades = "A-";
    }
    else if (percentage < 90 && percentage >= 87) {
        grades = "B+";
    }
    else if (percentage < 87 && percentage >= 84) {
        grades = "B";
    }
    else if (percentage < 84 && percentage >= 80) {
        grades = "B-";
    }
    else if (percentage < 80 && percentage >= 77) {
        grades = "C+";
    }
    else if (percentage < 77 && percentage >= 74) {
        grades = "C";
    }
    else if (percentage < 74 && percentage >= 70) {
        grades = "C-";
    }
    else if (percentage < 70 && percentage >= 67) {
        grades = "D+";
    }
    else if (percentage < 67 && percentage >= 64) {
        grades = "D";
    }
    else if (percentage < 64 && percentage >= 60) {
        grades = "D-";
    }
    else {
        grades = "F";
    }

    alert("Your final grade is a/an " + grades + " with a percentage of " + percentage + "%");
})

//$("#btnSend").click(function () {
//    alert("Assignments Grade: " + $("#txtAssignments").val() +
//        ", Group Project Grade: " + $("#txtGroupProject").val() +
//        ", Quizzes Grade: " + $("#txtQuizzes").val() +
//        ", Exams Grade: " + $("#txtExams").val() +
//        ", INTEX Grade: " + $("#txtIntex").val());
//})