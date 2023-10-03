gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(Flip);

let standardBlackColor = "#212529";
let standardWhiteColor = "#adadad";
let standardGrayColor = "#c4c8cb";

let navbarWhite = "rgba(255,255,255,0.7)";
let navbarBlack = "rgba(0,0,0,0.7)";

let standardBlackBg = "#1c1c1c";
let standardWhiteBg = "hsl(0, 0%, 96%)";

let hyperlinkColor1 = "hsl(168, 100%, 76%)";
let hyperlinkColor2 = "hsl(216, 98%, 36%)";


function effectAfterScroll() {
  if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
    gsap.to("#arrowBox", {opacity: 1, duration: 0.4, display: 'block'})
  } else {
    gsap.to("#arrowBox", {opacity: 0, duration: 0.4, display: 'none'})
  }
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    gsap.to("#mainNavbar", { duration: 0.2, marginTop: 0, paddingBlock: '0.4rem', borderBottom: "solid " + standardGrayColor })
    gsap.to("#navContactBtn", { padding: "0px 1rem" })
  } else {
    gsap.to("#mainNavbar", { duration: 0.2, marginTop: '1.5rem',  paddingBlock: '0rem', borderBottom: 'none' })
    gsap.to("#navContactBtn", { padding: "0.2rem 1rem" })
  }
}
window.onscroll = function() {effectAfterScroll()};

// service heading switch
function serviceHeadingMobile() {
  if (window.matchMedia("(max-width: 500px)").matches) {
    document.getElementById("serviceBlock5h1").innerHTML = "03";
    document.getElementById("serviceBlock5h4").innerHTML = "Fashion Photography";
    document.getElementById("serviceBlock7h1").innerHTML = "04";
    document.getElementById("serviceBlock7h4").innerHTML = "Company Profile Photography";
    document.getElementById("serviceBlock9h1").innerHTML = "05";
    document.getElementById("serviceBlock9h4").innerHTML = "Architecture Photography";
  } else {
    document.getElementById("serviceBlock5h1").innerHTML = "05";
    document.getElementById("serviceBlock5h4").innerHTML = "Architecture Photography";
    document.getElementById("serviceBlock7h1").innerHTML = "03";
    document.getElementById("serviceBlock7h4").innerHTML = "Fashion Photography";
    document.getElementById("serviceBlock9h1").innerHTML = "04";
    document.getElementById("serviceBlock9h4").innerHTML = "Company Profile Photography";
  }
}
// serviceHeadingMobile();

// light mode toggle clicked
function lightModeClicked() {
  let toggleState = true;
  const toggleAnimation = gsap.timeline({ paused: true });
  let navbarLogoTl = gsap.timeline()
  let aboutLogoTl = gsap.timeline()
  let colorChangeList = ["#aBrand","#aboutTextBlock h2", "#aboutTextBlock p", "#servicesHeading","#services, #services h1, #services h4", ".project-texts h2", ".project-texts h4", ".project-texts p","#professionalHeadingCol h2", ".card-body h5", ".card-body p", "#clientContainer h2", "#clientContainer p", ".how-we-work-block-body h4, span", ".how-we-work-content h2", "#aboutImgBlock h2"]
  let backgroundColorChangeList = [".navbar-toggler-stripes", "#lightModeToggle", ".how-we-work-block-icons"]
  let backgroundColorChangeListTwo = ["body", "#mainNavbar"]
  let borderChangeList = ["#navContactBtn", ".how-we-work-blocks", ".how-we-work-block-icon-inner"]
  let hyperlinkColorChangeList = ["#aboutTextBlock span", ".professional-cards a"]
  let fillChangeListOne = [".how-we-work-block-icons svg", "#footerSocial svg"]
  let fillChangeListTwo = ["#arrowBox svg", ".how-we-work-block-icon-inner svg"]
  toggleAnimation
    .to("#lightModeToggle", { x: "115%", duration: 0.3, ease: "linear" });
  lightModeBtn.addEventListener("click", () => {
    if (toggleState) {
      toggleAnimation.restart();
      gsap.to(backgroundColorChangeListTwo, {backgroundColor: standardWhiteBg})
      gsap.to(".carousel-layer", {border: "25px solid " + standardWhiteBg})
      gsap.to(colorChangeList, {color: standardBlackColor})
      gsap.to(backgroundColorChangeList, {backgroundColor: standardBlackColor})
      gsap.to(hyperlinkColorChangeList, {color: hyperlinkColor2})
      if (window.matchMedia("(min-width:992px)").matches) {
        gsap.to(borderChangeList, {border: "2px solid " + standardBlackColor})
        gsap.to(".nav-link", { color: standardBlackColor})
      }
      gsap.to("#navbarToggler", {border: "solid " + standardBlackColor})
      gsap.to("#lightModeBtn", {border: "1.5px solid " + standardBlackColor})
      navbarLogoTl.to("#aBrandDark", { opacity: 0}).to("#aBrandDark", { display: 'none'}).to("#aBrandLight", { display: 'block'}).to("#aBrandLight", { opacity: 1})
      aboutLogoTl.to("#aboutImgDark", { opacity: 0}).to("#aboutImgDark", { display: 'none'}).to("#aboutImgLight", { display: 'block'}).to("#aboutImgLight", { opacity: 1})
      gsap.to(".professional-cards", {color: standardBlackColor, backgroundColor: standardWhiteBg, border: "solid" + standardGrayColor})
      gsap.to("footer", {backgroundColor: standardBlackBg})
      gsap.to("footer h4", {color: standardWhiteBg})
      gsap.to("#footerSocial a", {border: "0.5px solid " + standardWhiteBg, backgroundColor: standardBlackBg})
      gsap.to("#footerLeft p", {color: standardWhiteBg})
      gsap.to(fillChangeListOne, {fill: standardWhiteBg})
      gsap.to(fillChangeListTwo, {fill: standardBlackBg})
    } else {
      toggleAnimation.reverse();
      gsap.to(backgroundColorChangeListTwo, {backgroundColor: standardBlackBg})
      gsap.to(".carousel-layer", {border: "25px solid " + standardBlackBg})
      gsap.to(colorChangeList, {color: standardWhiteBg})
      gsap.to(backgroundColorChangeList, {backgroundColor: standardWhiteBg})
      gsap.to(hyperlinkColorChangeList, {color: hyperlinkColor1})
      if (window.matchMedia("(min-width:992px)").matches) {
        gsap.to(borderChangeList, {border: "2px solid " + standardWhiteColor})
        gsap.to(".nav-link", { color: standardWhiteBg})
      }
      gsap.to("#navbarToggler", {border: "solid " + standardWhiteBg})
      gsap.to("#lightModeBtn", {border: "1.5px solid " + standardWhiteBg})
      navbarLogoTl.to("#aBrandLight", { opacity: 0}).to("#aBrandLight", { display: 'none'}).to("#aBrandDark", { display: 'block'}).to("#aBrandDark", { opacity: 1})
      aboutLogoTl.to("#aboutImgLight", { opacity: 0}).to("#aboutImgLight", { display: 'none'}).to("#aboutImgDark", { display: 'block'}).to("#aboutImgDark", { opacity: 1})
      gsap.to(".professional-cards", {color: standardWhiteColor, backgroundColor: standardBlackBg, border: "solid" + standardGrayColor})
      gsap.to("footer", {backgroundColor: standardWhiteBg})
      gsap.to("footer h4", {color: standardBlackColor})
      gsap.to("#footerSocial a", {border: "0.5px solid " + standardBlackBg, backgroundColor: standardWhiteBg})
      gsap.to("#footerLeft p", {color: standardBlackBg})
      gsap.to(fillChangeListOne, {fill: standardBlackBg})
      gsap.to(fillChangeListTwo, {fill: standardWhiteBg})
    }
    toggleState = !toggleState;
  });
}
lightModeClicked();

const navbarScroll = gsap.registerEffect({
  name: "navbarScrollTo",
  effect: (targets, config) => {
    return gsap.to(window, {
      duration: config.duration,
      ease: config.ease,
      scrollTo: { y: config.y, offsetY: config.offsetY }
    })
  }, defaults: {ease: "elastic.out(1, 0.3)", duration: 0.1, scrollTo: {offsetY: 0}}
});
const verticalScroll = gsap.registerEffect({
  name: "verticalScrollFrom",
  effect: (targets, config) => {
    return gsap.from(targets, {
      y: config.y,
      scrollTrigger: {
        scrub: config.scrollTrigger.scrub
      },
    });
  }
});
const footerHover = gsap.registerEffect({
  name: "footerHover",
  effect: (targets, config) => {
    return gsap.set(targets, {
      duration: 3,
      backgroundColor: config.backgroundColor,
      fill: config.fill,
      border: config.border
    });
  }
});

// arrow up
let arrowUp = document.getElementById("arrowBox");
arrowUp.addEventListener("click", () => {
  gsap.effects.navbarScrollTo(window, {y: "#landingPage", offsetY: "-10%"});
})

// GSAP matchMedia
let mm = gsap.matchMedia()
function desktopSize() {
  mm.add("(max-width: 2560px) and (min-width: 2001px)", () => {
  })
  mm.add("(max-width: 2000px) and (min-width: 1513px)", () => {
  })
  mm.add("(max-width: 1512px) and (min-width: 1441px)", () => {
  });
  mm.add("(max-width: 1440px) and (min-width: 1025px)", () => {
  });
  mm.add("(max-width: 1024px) and (min-width: 769px)", () => {
  });

}
function tabletSize() {
  mm.add("(max-width: 768px) and (min-width: 680px)", () => {
  });
  mm.add("(max-width: 679px) and (min-width: 500px)", () => {
  });

}
function mobileSize() {
  mm.add("(max-width: 499px) and (min-width: 375px)", () => {
  });
  mm.add("(max-width: 374px)", () => {
  
    // bts vertical slide
    gsap.effects.verticalScrollFrom("#btsFrontImg", {y: "315%", scrollTrigger: {scrub: 4}});
    gsap.effects.verticalScrollFrom("#btsBackImg1", {y: "25%", scrollTrigger: {scrub: 5}});
    gsap.effects.verticalScrollFrom("#btsBackImg2", {y: "150%", scrollTrigger: {scrub: true}});
  
  });
}

// jQuery
$(document).ready(function() {

  // hover navbar
  $(".navbar-link").on("mouseenter", (event) => {
    $(".navbar-link").not(event.currentTarget).fadeTo("50", 0.4);
  }).on("mouseleave", (event) => {
    $(".navbar-link").not(event.currentTarget).fadeTo("50", 1);
    $(".navbar-dark-light-toggle").fadeTo("50", 1);
  })
  $(".navbar-dark-light-toggle").on("mouseenter", () => {
    $(".navbar-link").fadeTo("50", 0.4);
  }).on("mouseleave", () => {
    $(".navbar-link").fadeTo("50", 1);
  })

  // hover dropdown menu
  $("#galleryDropDownBtn").on("mouseenter", () => {
    $(".dropdown-menu").slideDown();
  })
  $(".dropdown-area-leave").on("mouseleave", () => {
    $(".dropdown-menu").slideUp();
  })

  // clicked navbar list
  $("#navLinkOurServices").on("click", () => {
    gsap.effects.navbarScrollTo(window, {y: "#servicesHeading", offsetY: 80});
  })
  // if (window.matchMedia("(max-width:500px)").matches) {
  //   $("#navLinkBts").on("click", () => {
  //     gsap.effects.navbarScrollTo(window, {y: "#projectBlockBts", offsetY: 80});
  //   })
  // } else {
  //   $("#navLinkBts").on("click", () => {
  //     gsap.effects.navbarScrollTo(window, {y: "#projectBlockBts", offsetY: 0});
  //   })
  // }
  if (window.matchMedia("(max-width: 1024px)").matches) {
    $("#navLinkHowWeWork").on("click", () => {
      gsap.effects.navbarScrollTo(window, {y: "#howWeWork", offsetY: 100});
    })
  } else if (window.matchMedia("(min-width: 1500px)").matches) {
    $("#navLinkHowWeWork").on("click", () => {
      gsap.effects.navbarScrollTo(window, {y: "#howWeWork", offsetY: -50});
    })

  } else {
    $("#navLinkHowWeWork").on("click", () => {
      gsap.effects.navbarScrollTo(window, {y: "#howWeWork", offsetY: 100});
    })
  }

  $("#navLinkAbout").on("click", () => {
    gsap.effects.navbarScrollTo(window, {y: "#about", offsetY: 100});
  })
  
  // clicked contact us mini page
  if (window.matchMedia("(min-width:992px)").matches) {
    $('#navContactBtn').on('click', () => {
      gsap.to('.contact-us-page', { x:0 })
      gsap.to('.contact-us-hidden-layer', {display: 'block'})
    })
    $('.contact-us-hidden-layer').on('click', () => {
      gsap.to('.contact-us-page', { x:"100%" })
      gsap.to('.contact-us-hidden-layer', {display: 'none'})
    })
  } else {
    $('#navContactBtn').on('click', () => {gsap.effects.navbarScrollTo(window, {y: "#footerSocial", offsetY: 0});})
  }

  // navbar toggle click
  $('#navbarList').hide()
  let $togglerState = true;
  let $togglerButton = document.getElementById('navbarToggler');
  let $togglerAnimation = gsap.timeline({ paused: true });
  $togglerAnimation
  .to('#stripe3', { opacity: 0 })
  .to('#stripe1', { position: "sticky", rotate: 135, y: "5" }, "<")
  .to('#stripe2', { position: "sticky", rotate: 45, y: "0" }, "<");

  if (window.matchMedia("(max-width:991px)").matches) {
    $('#navbarToggler').on("click", () => {
      if ($togglerState) {
        $togglerAnimation.restart()
        $('#navbarList').slideDown()
        gsap.to('#navbarHiddenLayer', {display: 'block'})
      }
      $togglerState = false;
    })
    $('#navbarHiddenLayer').on('click', ()=> {
      $togglerAnimation.reverse()
      $('#navbarList').slideUp()
      $togglerState = true;
    })

  }

  // read more/less btn on about section
  $('.read-more-btn').on('click', (event)=> {
    $(event.currentTarget).parent().next().slideDown();
    $('.read-more-btn').hide(500);
    $('.read-less-btn').show(500);
  })
  $('.read-less-btn').on('click', (event)=> {
    $(event.currentTarget).parent().slideUp();
    $('.read-less-btn').hide(500);
    $('.read-more-btn').show(500);
  })

});

// handlebars JS
function rangeArr(start, end) {
  let arr = [];
  for (let i = start; i <= end; i++) {
      arr.push(i)
  }
  return arr;
}
var source = document.getElementById('clientsContainerScript').innerHTML;
var template = Handlebars.compile(source); 
var context = {
  clients: rangeArr(1, 24),
};
var compiledHtml = template(context);
var fill = document.getElementById('clientsGrid');
fill.innerHTML = compiledHtml;