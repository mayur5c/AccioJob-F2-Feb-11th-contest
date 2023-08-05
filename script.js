/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log

const filteredStudents = arr.map(student => {
  if (student.marks > 50) {
    return student;
  } else {
    return null;
  }
});

for (const student of filteredStudents) {
  console.log(student);
  }
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
}

function addData() {
  //Write your code here, just console.log
}

function removeFailedStudent() {
  //Write your code here, just console.log
}

function concatenateArray() {
  //Write your code here, just console.log
}
