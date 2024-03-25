const avatar = document.querySelector("#avatar");
const firstname = document.querySelector("#firstname");
const button = document.querySelector(".color-change");
const description = document.querySelector(".description");
const pinkBg = document.querySelectorAll(".pink-bg");
const pinkText = document.querySelectorAll(".pink-text");

avatar.addEventListener("click", () => {
  avatar.src = "image/avatar.svg";
});

button.addEventListener("click", () => {
  const color = prompt("Enter your favorite color");
  const username = prompt("What's your name");
  firstname.innerText = username;
  firstname.style.color = "white";
  description.style.backgroundColor = color;

  for (let i = 0; i < pinkBg.length; i++) {
    pinkBg[i].style.backgroundColor = color;
  }

  for (let i = 0; i < pinkText.length; i++) {
    pinkText[i].style.color = color;
  }
});
