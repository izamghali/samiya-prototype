let standardBlackBg = "#1c1c1c";
let standardWhiteBg = "hsl(0, 0%, 90%)";

let lightColor = "#ADADAD"



$(document).ready(function() {
    
    // hover contact btn
    $("#galleryCheckBoxOrientationList a").on("mouseenter", (event) => {
        $(event.currentTarget).css("background", standardWhiteBg)
        $(event.currentTarget).css("color", standardBlackBg)
    })
    $("#galleryCheckBoxOrientationList a").on("mouseleave", (event) => {
        $(event.currentTarget).css("background", standardBlackBg)
        $(event.currentTarget).css("color", lightColor)
    })

    // category highlight click
    $("#galleryCheckBoxCategory a").not("#categoryAll").on("click", (event) => {
        $("#galleryCheckBoxCategory a").not(event.currentTarget).fadeTo("50", 0.4);
        $(event.currentTarget).fadeTo("50", 1);
    })
    $("#categoryAll").on("click", () => {
        $("#galleryCheckBoxCategory a").fadeTo("50", 1)
    })
    
});