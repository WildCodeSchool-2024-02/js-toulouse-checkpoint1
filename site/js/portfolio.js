const avatar = document.querySelector("#avatar");
const firstname = document.querySelector("#firstname");
const button = document.querySelector(".color-change");

avatar.addEventListener("click", () => {
  avatar.src = "image/avatar.svg";
});

button.addEventListener("click", () => {
  const username = prompt("What's your name");
  firstname.innerText = username;
  firstname.style.color = "white";
});
