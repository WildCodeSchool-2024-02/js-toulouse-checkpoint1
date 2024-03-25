const avatar = document.querySelector(".avatar-img");
avatar.addEventListener("click", () => (avatar.src = "./image/avatar.svg"));

const buttonChanges = document.querySelector(".btn-changes-name");
let name = document.querySelector("#firstname");
let backgrounds = document.querySelectorAll(".pink-bg");
let h4 = document.querySelectorAll("h4");

buttonChanges.addEventListener("click", () => {
  let newColor = prompt("Enter the new color");
  let newName = prompt("Enter your name");
  backgrounds.forEach((background) => {
    background.style.backgroundColor = newColor;
  });
  h4.forEach((title) => {
    title.style.color = newColor;
  });
  name.textContent = newName;
});
