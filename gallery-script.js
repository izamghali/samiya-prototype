let standardBlackBg = "#1c1c1c";
let standardWhiteBg = "hsl(0, 0%, 90%)";
let lightColor = "#ADADAD"

function gridLoader() {
    gsap.from(".grid-container", { y: 100, delay: 0.2, opacity: 0 });
    gsap.from("#galleryHeading", { y: -100, delay: 0.2, opacity: 0 });
    gsap.from("#galleryCheckBox", { y: -100, delay: 0.2, opacity: 0 });
}
gridLoader();

function rangeArr(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i)
    }
    return arr;
}
// handlebars JS
var source = document.getElementById('gridContainerScript').innerHTML;
var template = Handlebars.compile(source); 
var context = {
    title: "Photo Title",
    blocks_arch: rangeArr(1, 8),
    blocks_company: rangeArr(1, 17),
    blocks_fashion: rangeArr(1, 21),
    blocks_product: rangeArr(1, 13),
};
var compiledHtml = template(context);
var fill = document.getElementById('gridContainer');
fill.innerHTML = compiledHtml;

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

    // show/hide images after category clicked
    function showHideGalleryImages() {
        $("#categoryFood").on("click", () => {
            $(".grid-blocks").not(".grid-food-blocks").fadeOut(800);
            $(".grid-food-blocks").fadeIn(800);
        });
        $("#categoryProduct").on("click", () => {
            $(".grid-blocks").not(".grid-product-blocks").fadeOut(800);
            $(".grid-product-blocks").fadeIn(800);
        });
        $("#categoryFashion").on("click", () => {
            $(".grid-blocks").not(".grid-fashion-blocks").fadeOut(800);
            $(".grid-fashion-blocks").fadeIn(800);
        });
        $("#categoryCompany").on("click", () => {
            $(".grid-blocks").not(".grid-company-blocks").fadeOut(800);
            $(".grid-company-blocks").fadeIn(800);
        });
        $("#categoryArchitecture").on("click", () => {
            $(".grid-blocks").not(".grid-arch-blocks").fadeOut(800);
            $(".grid-arch-blocks").fadeIn(800);
        });
        $("#categoryAll").on("click", () => {
            $(".grid-blocks").fadeIn(800);
        });
    }
    showHideGalleryImages();
});


