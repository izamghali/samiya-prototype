let standardBlackBg = "#1c1c1c";
let standardWhiteBg = "hsl(0, 0%, 90%)";

let lightColor = "#ADADAD"

let buttonState = true;

let galleryCheckBoxOrientation = document.getElementById("galleryCheckBoxOrientation");


function buttonClick() {
    if (buttonState) {
        galleryCheckBoxOrientation.addEventListener("click", () => {
            let buttonTl = gsap.timeline()
            gsap.set("#galleryCheckBoxOrientationList a", { color: standardBlackBg, visibility: "hidden" });
            buttonTl.fromTo("#galleryCheckBoxOrientationList", { height: "0rem" }, {height: "auto", opacity: 1, duration: 0.4});
            buttonTl.to("#galleryCheckBoxOrientationList a", { color: lightColor, visibility: "visible"});
            buttonTl.to("#galleryCheckBoxOrientationList a", { cursor: "pointer" });
        });
    } else {
        galleryCheckBoxOrientation.addEventListener("click", () => {
            gsap.to("#galleryCheckBoxOrientationList", { opacity: 0, duration: 2 });
            gsap.to("#galleryCheckBoxOrientationList a", { cursor: "default" });
        });
    }
    buttonState = false;
}

buttonClick();

$(document).ready(function() {
    
    $("#galleryCheckBoxOrientationList a").on("mouseenter", (event) => {
        $(event.currentTarget).css("background", standardWhiteBg)
        $(event.currentTarget).css("color", standardBlackBg)
    })
    $("#galleryCheckBoxOrientationList a").on("mouseleave", (event) => {
        $(event.currentTarget).css("background", standardBlackBg)
        $(event.currentTarget).css("color", lightColor)
    })
    
});