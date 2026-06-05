//ASSET ARRAYS

let skin = skin[1];

const shirt = [
  {
    id: 1,
    src: "assets/shirt1.png",
    hanger: "assets/shirt2hang.png",
  },
  {
    id: 2,
    src: "assets/shirt2.png",
    hanger: "assets/shirt2hang.png",
  },
  {
    id: 3,
    src: "assets/shirt3.png",
    hanger: "assets/shirt3hang.png",
  },
  {
    id: 4,
    src: "assets/shirt4.png",
    hanger: "assets/shirt4hang.png",
  },
  {
    id: 5,
    src: "assets/shirt5.png",
    hanger: "assets/shirt5hang.png",
  },
  {
    id: 6,
    src: "assets/shirt6.png",
    hanger: "assets/shirt6hang.png",
  },
];

const pants = [
  {
    id: 1,
    src: "assets/pants1.png",
    hanger: "assets/pants1hang.png",
  },
  {
    id: 2,
    src: "assets/pants2.png",
    hanger: "assets/pants2hang.png",
  },
  {
    id: 3,
    src: "assets/pants3.png",
    hanger: "assets/pants3hang.png",
  },
  {
    id: 4,
    src: "assets/pants4.png",
    hanger: "assets/shirt4hang.png",
  },
  {
    id: 5,
    src: "assets/pants5.png",
    hanger: "assets/pants5hang.png",
  },
  {
    id: 6,
    src: "assets/pants6.png",
    hanger: "assets/pants6hang.png",
  },
];

const shoes = [
  {
    id: 1,
    src: "assets/shoes1.png",
  },
  {
    id: 2,
    src: "assets/shoes2.png",
  },
  {
    id: 3,
    src: "assets/shoes3.png",
  },
];

const skin = [
  {
    id: 1,
    src: "assets/skin1.png",
  },
  {
    id: 2,
    src: "assets/skin2.png",
  },
  {
    id: 3,
    src: "assets/skin3.png",
  },
];

const hair = [
  {
    id: 1,
    src: "assets/hair1.png",
  },
  {
    id: 2,
    src: "assets/hair2.png",
  },
  {
    id: 3,
    src: "assets/hair3.png",
  },
  {
    id: 4,
    src: "assets/hair4.png",
  },
  {
    id: 5,
    src: "assets/hair5.png",
  },
  {
    id: 6,
    src: "assets/hair6.png",
  },
  {
    id: 7,
    src: "assets/hair7.png",
  },
  {
    id: 8,
    src: "assets/hair8.png",
  },
];

const card = document.querySelector(".card");
console.log(card);
let draggedCard = null;

card.addEventListener("dragstart", function () {
  draggedCard = card;
});
const dropBox = document.querySelector(".dropbox");
dropBox.innerHTML = "";

dropBox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropBox.addEventListener("drop", function () {
  const clone = draggedCard;
  clone.classList.remove("flip");
  clone.addEventListener("click", function () {
    clone.classList.toggle("flip");
  });
  dropBox.appendChild(clone);
});
