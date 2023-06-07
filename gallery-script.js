let standardBlackBg = "#1c1c1c";
let standardWhiteBg = "hsl(0, 0%, 90%)";
let lightColor = "#ADADAD"

function gridLoader() {
    gsap.from(".grid-container", { y: 100, delay: 0.2, opacity: 0 });
    gsap.from("#galleryHeading", { y: -100, delay: 0.2, opacity: 0 });
    gsap.from("#galleryCheckBox", { y: -100, delay: 0.2, opacity: 0 });
}

gridLoader();

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
        const $filterText = event.currentTarget.textContent;
        // if ($filterText === "COMPANY") {

        // }
    })
    $("#categoryAll").on("click", () => {
        $("#galleryCheckBoxCategory a").fadeTo("50", 1)
    })
    
});


