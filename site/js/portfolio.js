const avatar = document.querySelector(".avatar");

avatar.addEventListener("click", function() {
    avatar.src = "./image/avatar-bis.png";
})

const description = document.querySelector(".description");
const descriptionColor = document.querySelectorAll(".pink-bg");
const text = document.querySelectorAll(".pink-text");
const firstname = document.querySelector("#firstname");

const button = document.createElement("button");
button.classList.add("button");
description.appendChild(button);
button.innerHTML = "Modify text and color";


button.addEventListener("click", function() {
    const userColor = prompt("Enter a color :");
    const username = prompt("Enter your name :");

    firstname.innerHTML = username;
    firstname.style.color = "white";

    descriptionColor.forEach(function (element) {
        element.style.backgroundColor = userColor;
    });

    text.forEach(function (element) {
        element.style.color = userColor;
    });
})

