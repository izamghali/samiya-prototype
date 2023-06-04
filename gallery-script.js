


let standardBlackBg = "#1c1c1c";
let standardWhiteBg = "hsl(0, 0%, 90%)";

let galleryContactButton = document.getElementById("galleryContactButton");

galleryContactButton.addEventListener("mouseenter", () => {
    gsap.to("#galleryContactButton", {backgroundColor: standardWhiteBg, color: standardBlackBg})
})

galleryContactButton.addEventListener("mouseleave", () => {
    gsap.to("#galleryContactButton", {backgroundColor: standardBlackBg, color: standardWhiteBg})
})