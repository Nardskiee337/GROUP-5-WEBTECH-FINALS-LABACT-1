alert("Welcome To Group 5 Score Evaluation");

let name = prompt("Enter Your Name");
let grade = prompt("Enter Your Grade");

let result = document.getElementById("result-appear");

if (name === null || name.trim() === "" || !/^[A-Za-z ]+$/.test(name)) {
  result.innerHTML = "<h3>Invalid Input</h3><p>Please enter name.</p>";
} else if (grade === null || grade.trim() === "") {
  result.innerHTML = "<h3>Invalid Input</h3><p>Please enter your grade.</p>";
} else {
  let proceed = confirm("Do you want to continue?");

  if (proceed) {
    function evaluationGrade(grade) {
      grade = Number(grade);

      if (isNaN(grade) || grade < 0 || grade > 100) {
        return "Invalid Score";
      } else if (grade >= 90) {
        return "Excellent";
      } else if (grade >= 75) {
        return "Passed";
      } else {
        return "Failed";
      }
    }

    let remark = evaluationGrade(grade);

    result.innerHTML = `
            <h3>Hello, ${name}!</h3>
            <p><strong>Your Grade:</strong> ${grade}</p>
            <p><strong>Remark:</strong> ${remark}</p>
        `;
  } else {
    result.innerHTML = "<h3>Cancelled</h3><p>You chose not to continue.</p>";
  }
}
