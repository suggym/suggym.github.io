const subheading = document.querySelectorAll("h2");
console.log(subheading);

const blueItems = document.querySelectorAll(".blue-color");
console.log(blueItems);

const subHead = document.querySelector("#subHead-1");
console.log(subHead);

function toggleMe() {
  const cat = document.querySelector("#cat");
  console.log(cat);
  cat.classList.toggle("round");
}
const courseName = "Interactive Media";
const courseID = "OART1013";
//inner html allows me to write html in the JS file
const header = document.querySelector("header");
console.log(header);
console.log(header.innerHTML);
header.innerHTML += `<h3 class="blue-color"> ${courseName} </h3> <p> ${courseID} </p>`;
