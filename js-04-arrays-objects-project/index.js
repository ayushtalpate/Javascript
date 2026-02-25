const prompt = require("prompt-sync")();

let students = [
  { id: 1, name: "Ayush", marks: 85 },
  { id: 2, name: "Rohan", marks: 72 },
  { id: 3, name: "Sneha", marks: 90 }
];

/* -------------------------
   ADD STUDENT
--------------------------*/
function addStudent() {
  const id = Number(prompt("Enter ID: "));
  const name = prompt("Enter Name: ");
  const marks = Number(prompt("Enter Marks: "));

  students.push({ id, name, marks });
  console.log("✅ Student Added");
}

/* -------------------------
   DELETE STUDENT
--------------------------*/
function deleteStudent() {
  const id = Number(prompt("Enter ID to delete: "));

  students = students.filter(student => student.id !== id);
  console.log("🗑 Student Deleted");
}

/* -------------------------
   UPDATE MARKS
--------------------------*/
function updateMarks() {
  const id = Number(prompt("Enter ID to update: "));
  const student = students.find(s => s.id === id);

  if (student) {
    const newMarks = Number(prompt("Enter New Marks: "));
    student.marks = newMarks;
    console.log("✏ Marks Updated");
  } else {
    console.log("❌ Student Not Found");
  }
}

/* -------------------------
   FILTER TOPPERS (>80)
--------------------------*/
function showToppers() {
  const toppers = students.filter(s => s.marks > 80);
  console.log("🏆 Toppers:", toppers);
}

/* -------------------------
   SORT BY MARKS
--------------------------*/
function sortByMarks() {
  const sorted = [...students].sort((a, b) => b.marks - a.marks);
  console.log("📊 Sorted by Marks:", sorted);
}

/* -------------------------
   AVERAGE MARKS
--------------------------*/
function calculateAverage() {
  const total = students.reduce((sum, student) => sum + student.marks, 0);
  const average = total / students.length;

  console.log("📈 Average Marks:", average.toFixed(2));
}

/* -------------------------
   MENU
--------------------------*/
function menu() {
  console.log(`
  1. Add Student
  2. Delete Student
  3. Update Marks
  4. Show Toppers
  5. Sort by Marks
  6. Calculate Average
  7. Exit
  `);

  const choice = prompt("Choose option: ");

  switch (choice) {
    case "1":
      addStudent();
      break;
    case "2":
      deleteStudent();
      break;
    case "3":
      updateMarks();
      break;
    case "4":
      showToppers();
      break;
    case "5":
      sortByMarks();
      break;
    case "6":
      calculateAverage();
      break;
    case "7":
      return;
    default:
      console.log("Invalid choice");
  }

  menu(); // recursive menu loop
}

menu();