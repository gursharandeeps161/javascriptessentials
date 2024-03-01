function markToGrade() {
    var markInput = document.getElementById('mark-input').value;
    var validationMessage = document.getElementById('validation-message');
    var consoleOutput = document.getElementById('console-output');
    var gradeResult = document.getElementById('grade-result');

    consoleOutput.innerHTML = '';
    gradeResult.textContent = '';


    // Check if mark is a valid number between 0 and 100
    if (isNaN(markInput) || markInput === '' || markInput < 0 || markInput > 100) {
        validationMessage.textContent = 'Please enter valid marks between 0 and 100.';
        gradeResult.textContent = '';
        return;
    }

    var mark = parseFloat(markInput);
    var grade;

    // Determine grade based on mark
    if (mark >= 90) {
        consoleOutput.innerHTML += "<p>You did excellent.</p>";
        grade = 'A';
    } else if (mark >= 80) {
        consoleOutput.innerHTML += "<p>Very good.</p>";
        grade = 'B';
    } else if (mark >= 70) {
        consoleOutput.innerHTML += "<p>Good</p>";
        grade = 'C';
    } else if (mark >= 50) {
        consoleOutput.innerHTML += "<p>pass</p>";
        grade = 'D';
    } else {
        consoleOutput.innerHTML += "<p>You are fail.</p>";
        grade = 'F';
    }

    validationMessage.textContent = '';
    gradeResult.textContent = 'Grade: ' + grade;
}
document.getElementById('current-year').innerText = new Date().getFullYear();
