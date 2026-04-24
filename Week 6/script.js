//********Interactive Media Class 6 Notes: JavaScript********//

//- Variables: A box where you can store a value- Constant (const) (not going to change), let (can change)
//- Boolean conditions: True or false e.g
let beer = true;

//Numeric: Maths Operations e.g
let a = 10;

//String: text
const text = "beer";

//Null or Undefined
// Object: group of properties same entity
let student = { name: Mia, id: 1385247659 };

//Accessing objects student.id student.name
//Arrays: like objects but for the same type e.g numbers, strings etc
let grades = [34, 45, 68, 78];

//Conditions if (condition) {true -> execute this}
//else {false -> do this}
if (beer) {
  console.log("yippee");
} else {
  console.log(":(");
}

//Loops: iterate through a function or set of instructions
for (let i = 0; i < names.length; i++) {
  console.log("hello", names[i]);
}

//Functions: actions you want to do repeatedly
let b = 20;
let c = a + b;

//defining a function
function add(a, b) {
  let c = a + b;
  console.log("value of c:", c);
}

//calling a function
add(4, 5);
//or
add(a, b);

// DOM: Document Object Model
//Seclecting DOM elements
querySelector(); //returns first matching element
querySelectorAll(); //returns all matching elements
