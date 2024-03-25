//Change avatar on click

const avatar = document.getElementById("avatar");

let isOriginalImg = true;

avatar.addEventListener("click", () =>{

    if (isOriginalImg){
    avatar.src = "./image/avatar.svg"
    }else{
    avatar.src = "./image/avatar-bis.png"
    }
    isOriginalImg = !isOriginalImg;
}
);

// change name and color of it in description

const userName = document.getElementById("firstname");
const buttonName = document.querySelector(".button");
const bgColor = document.querySelectorAll(".pink-bg");
const textColor = document.querySelectorAll(".pink-text");
const linkColor = document.getElementsByTagName("a")

buttonName.onclick = () =>{
    userName.innerText = prompt("Enter your name");
    userName.style.color = "white";
    let colorTheme = prompt("Choose a color");
    bgColor.forEach(e => {
        e.style.backgroundColor = colorTheme;
    });
    textColor.forEach(e => {
        e.style.color = colorTheme;
    });
    };
