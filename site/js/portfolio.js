
const imgChange = document.querySelector(".banner-avatar")



imgChange.addEventListener("click", function () {


    if (imgChange.src.includes("avatar.svg")) {
        imgChange.setAttribute("src", "image/avatar-bis.png")
        console.log(imgChange.src);
    }
    else if (imgChange.src.includes("avatar-bis.png")) {
        imgChange.setAttribute("src", "image/avatar.svg")
        console.log(imgChange.src);

    }
    ;

})
