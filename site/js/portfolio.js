const avatar = document.querySelector("#avatar");

avatar.addEventListener("click", () => {
  avatar.src = "./image/avatar.svg";
});

const description = document.querySelector(".description");
const button = document.createElement("button");
button.innerText = "Modify Text And Color";
description.appendChild(button);

button.addEventListener("click", () => {
  const span = document.querySelector(".description span");
  span.style.color = "white";
  const descriptionBoxes = document.querySelectorAll(".description");
  const userColorChoice = prompt("Enter a color");
  descriptionBoxes.forEach((element) => (element.style.backgroundColor = userColorChoice));
  span.innerText = prompt("what's your name ?");
});
