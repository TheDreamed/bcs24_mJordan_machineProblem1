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
// Function to allow prompt in the program.


// Declare a prompt to receive Student Name
var nameOfStudent = prompt("Enter the name of the student:");

// Declare a prompt to receive Enabling Grades
var enabling1 = parseFloat(prompt("Enter enabling assessment 1: ", "0"));
var enabling2 = parseFloat(prompt("Enter enabling assessment 2: ", "0"));
var enabling3 = parseFloat(prompt("Enter enabling assessment 3: ", "0"));
var enabling4 = parseFloat(prompt("Enter enabling assessment 4: ", "0"));
var enabling5 = parseFloat(prompt("Enter enabling assessment 5: ", "0"));

// Declare a prompt to receive Summative Grades
var summative1 = parseFloat(prompt("Enter enabling summative 1: ", "0"));
var summative2 = parseFloat(prompt("Enter enabling summative 2: ", "0"));
var summative3 = parseFloat(prompt("Enter enabling summative 3: ", "0"));

// Declare a prompt to receive Final Grade
var final = parseFloat(prompt("Enter Major Exam: ", "0"));


// Function to Compute the enabling grade for the total later 30%
function enablingGrade(enabling1, enabling2, enabling3, enabling4, enabling5){

    let enablingTotal = enabling1 + enabling2 + enabling3 + enabling4 + enabling5;
    let averageEnabling = enablingTotal / 5
    let enablingGrade = averageEnabling * 0.3;
        return enablingGrade;
    }

    // Function to Compute the summative grade for the total later 30%
function summativeGrade(summative1, summative2, summative3){

    let summativeTotal = summative1 + summative2 + summative3;
    let averageSummative = summativeTotal / 3
    let summativeGrade = averageSummative * 0.3;
        return summativeGrade;
    }

        // Function to Compute the final exam grade for the total later 40%
function finalGrade(final){

    let finalG = (final * 0.4)

        return finalG;
    }

    let totalEnabling = (enablingGrade(enabling1, enabling2, enabling3, enabling4, enabling5));
    let totalSummative = (summativeGrade(summative1, summative2, summative3));
    let totalFinal = (finalGrade(final));

// variable for total grade computation in numeric form
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
let enablingTotal = enabling1 + enabling2 + enabling3 + enabling4 + enabling5;
let averageEnabling = enablingTotal / 5

// Computes the average grade for the enabling part to be pushed in the table.
let summativeTotal = summative1 + summative2 + summative3;
let averageSummative = summativeTotal / 3

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
