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
  const hFour = document.querySelectorAll("h4,a");

  const userColorChoice = prompt("Enter a color");
  descriptionBoxes.forEach((element) => (element.style.backgroundColor = userColorChoice));
  hFour.forEach((element) => (element.style.color = userColorChoice));
  span.innerText = prompt("what's your name ?");
});

const buttonFrontLi = document.createElement("button");
buttonFrontLi.innerText = "Modify";
const skillsContainer = document.querySelector(".skills-container");
const frontBox = skillsContainer.lastElementChild;
frontBox.appendChild(buttonFrontLi);

buttonFrontLi.addEventListener("click", () => {
  const arraySkills = ["VSCode", "Github", "Terminal"];
  const frontDevToolsLi = document.querySelectorAll("#front-dev-tools li");
  for (let i = 0; i < arraySkills.length; i++) {
    frontDevToolsLi[i].innerText = arraySkills[i];
  }
});

const backBox = skillsContainer.firstElementChild;
const input = document.createElement("input");
input.type = "text";
const buttonAddSkills = document.createElement("button");
buttonAddSkills.innerText = "Add Skill";
backBox.appendChild(input);
backBox.appendChild(buttonAddSkills);

buttonAddSkills.addEventListener("click", () => {
  const ul = document.querySelector("#back-dev-tools");
  const li = document.createElement("li");
  li.innerText = input.value;
  ul.appendChild(li);
});
