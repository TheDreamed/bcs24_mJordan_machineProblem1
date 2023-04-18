/*
    Program: Computation of Grades using Function
    Programmer: Mark Spencer Jordan
    Section: BCS24
    Start Data: April 18, 2023
    End Date: April 18, 2023
*/

// These modules are needed in order for the program to the prompt and table methods.
const Table = require('cli-table');
const prompt = require('prompt-sync')();
// Created a new table from the cli-table module
let table = new Table({
  head: [
    'Name of Student',
    'Enabling Assessment',
    'Summative Assessment',
    'Exam Grade',
    'Grade Score',
    'Letter Grade',
  ],
});

// Loop 5 times in order to get 5 student grade data.
for (let i = 0; i < 5; i++){
  // Declare a prompt to receive Student Name
  var nameOfStudent = prompt("Enter the name of the student:");

  // Declare arrays for Enabling and Summative Grades
  var enablingGrades = [];
  var summativeGrades = [];

  // Use a for loop to receive Enabling Grades
  for (var j = 1; j <= 5; j++) {
    var enabling = parseFloat(prompt("Enter enabling assessment " + j + ": ", "0"));
    enablingGrades.push(enabling);
  }

  // Use a for loop to receive Summative Grades
  for (var j = 1; j <= 3; j++) {
    var summative = parseFloat(prompt("Enter enabling summative " + j + ": ", "0"));
    summativeGrades.push(summative);
  }

  // Declare a prompt to receive Final Grade
  var final = parseFloat(prompt("Enter Major Exam: ", "0"));

  // Modify the functions to accept arrays of grades instead of individual grades
  function enablingGrade(grades) {
    let enablingTotal = 0;
    for (let i = 0; i < grades.length; i++) {
      enablingTotal += grades[i];
    }
    let averageEnabling = enablingTotal / grades.length;
    let enablingGrade = averageEnabling * 0.3;
    return enablingGrade;
  }

  function summativeGrade(grades) {
    let summativeTotal = 0;
    for (let i = 0; i < grades.length; i++) {
      summativeTotal += grades[i];
    }
    let averageSummative = summativeTotal / grades.length;
    let summativeGrade = averageSummative * 0.3;
    return summativeGrade;
  }

function finalGrade(final){
    let finalG = (final * 0.4)
    return finalG;
  }

  let totalEnabling = enablingGrade(enablingGrades);
  let totalSummative = summativeGrade(summativeGrades);
  let totalFinal = finalGrade(final);

  let gradeScore = totalEnabling + totalSummative + totalFinal;

  console.log(gradeScore)


// Switch Case function to compute the letter grade.
function getLetterGrade(gradeScore) {
    let letterGrade = '';

    if (gradeScore >= 90 && gradeScore <= 100) {
        letterGrade = 'A';
    } else if (gradeScore >= 80 && gradeScore <= 89) {
        letterGrade = 'B';
    } else if (gradeScore >= 70 && gradeScore <= 79) {
        letterGrade = 'C';
    } else if (gradeScore >= 60 && gradeScore <= 69) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }

    return letterGrade;
}

// Computes the average grade for the enabling part to be pushed in the table.

let averageEnabling = enablingGrade(enablingGrades) * 3

// Computes the average grade for the enabling part to be pushed in the table.

let averageSummative = summativeGrade(summativeGrades) * 3

// Variable for letter grade
let letterGrade =  getLetterGrade(gradeScore)

// individual grade of student to be pushed in the table.
// toFixed(2) is for the decimal value counts.
let student = [
    nameOfStudent,
    averageEnabling.toFixed(2),
    averageSummative.toFixed(2),
    final.toFixed(2),
    gradeScore.toFixed(2),
    letterGrade,
  ]
//pushed the grades of students to the table.

table.push(student);
}

// This prints the table with a string data type.
console.log(table.toString());
