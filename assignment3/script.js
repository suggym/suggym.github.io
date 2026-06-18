let draggedElement = null;

const outfitStack = document.querySelector(".outfit-stack");

const shirtImage = document.querySelector("#shirtbox img");
const pantsImage = document.querySelector("#pantsbox img");
const shoesImage = document.querySelector("#shoesbox img");

const clothingItems = document.querySelectorAll(
  ".shirthang, .pantshang, .shoerack",
);

/*
  The drop function is the main/only logic of the dress-up game. When the player drops an item onto the outfit stack,
  the code checks what type of item it is and changes the matching character layer. Shirts change the shirt image,
  pants change the pants image, and shoes change the shoes image. This logic was based of the card drag and drop from week 9 
  with some debugging help from ChatGPT when I had try and adapt it for many different assets.

  I used one shared drop function instead of separate drop zones because it makes the game simpler to add assets to.
  They can drag any clothing item onto the character, and the code works out which layer should update. This also makes
  the project easier to expand in future because new clothing options only need the correct data attributes in the HTML.
*/

clothingItems.forEach(function (item) {
  item.addEventListener("dragstart", startDrag);
  item.addEventListener("dragend", endDrag);
});

function startDrag(event) {
  draggedElement = event.currentTarget;
  draggedElement.classList.add("is-pulling");

  event.dataTransfer.setData("text/plain", "clothing");
}

outfitStack.addEventListener("dragover", allowDrop);

function allowDrop(event) {
  event.preventDefault();
}

outfitStack.addEventListener("drop", handleDrop);

function handleDrop(event) {
  event.preventDefault();

  if (draggedElement) {
    const itemType = draggedElement.dataset.item;
    const newImage = draggedElement.dataset.image;

    if (itemType === "shirt") {
      shirtImage.src = newImage;
    }

    if (itemType === "pants") {
      pantsImage.src = newImage;
    }

    if (itemType === "shoes") {
      shoesImage.src = newImage;
    }
    draggedElement.classList.remove("is-pulling");
    draggedElement = null;
  }
}

function endDrag(event) {
  event.currentTarget.classList.remove("is-pulling");
}
