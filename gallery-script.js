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
var source = document.getElementById('testScript').innerHTML;
var template = Handlebars.compile(source); 
var context = {
  title: 'Hello World!',
  someArray: rangeArr(1, 8),
};
 
var compiledHtml = template(context);
var fill = document.getElementById('hello');

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
            $(".grid-blocks").not(".grid-food-blocks").slideUp(1000);
            $(".grid-food-blocks").slideDown(1000);
        });
        $("#categoryProduct").on("click", () => {
            $(".grid-blocks").not(".grid-product-blocks").slideUp(1000);
            $(".grid-product-blocks").slideDown(1000);
        });
        $("#categoryFashion").on("click", () => {
            $(".grid-blocks").not(".grid-fashion-blocks").slideUp(1000);
            $(".grid-fashion-blocks").slideDown(1000);
        });
        $("#categoryCompany").on("click", () => {
            $(".grid-blocks").not(".grid-company-blocks").slideUp(1000);
            $(".grid-company-blocks").slideDown(1000);
        });
        $("#categoryArchitecture").on("click", () => {
            $(".grid-blocks").not(".grid-arch-blocks").slideUp(1000);
            $(".grid-arch-blocks").slideDown(1000);
        });
        $("#categoryAll").on("click", () => {
            $(".grid-blocks").slideDown(1000);
        });
    }
    showHideGalleryImages();
});


