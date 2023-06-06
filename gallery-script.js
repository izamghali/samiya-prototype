let standardBlackBg = "#1c1c1c";
let standardWhiteBg = "hsl(0, 0%, 90%)";

let lightColor = "#ADADAD"



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