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
let hyperlinkColor2 = "hsl(216, 98%, 52%)";

function arrowAppearAfterScroll() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      gsap.to("#arrowBox", {opacity: 1, duration: 0.4, display: 'block'})
  } else {
      gsap.to("#arrowBox", {opacity: 0, duration: 0.4, display: 'none'})
  }
}
window.onscroll = function() {arrowAppearAfterScroll()};

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
serviceHeadingMobile();

// light mode toggle clicked
function lightModeClicked() {
  let toggleState = true;
  const toggleAnimation = gsap.timeline({ paused: true });
  let colorChangeList = ["#aBrand", "#services, #services h1, #services h4", "#btsTextBoxCol h3, #btsTextBoxCol span", ".bts-heading-texts", "#professionalHeadingCol h2", ".client-col h2", ".client-col p", "#mainClientsTablet", "#companyTitleBoxMobile h1"]
  let backgroundColorChangeList = [".navbar-toggler-stripes"]
  toggleAnimation
    .to("#lightModeToggle", { x: "115%", duration: 0.3, ease: "linear" });
  lightModeBtn.addEventListener("click", () => {
    if (toggleState) {
      toggleAnimation.restart();
      gsap.to("body", {backgroundColor: standardWhiteBg})
      gsap.to(".carousel-layer", {border: "25px solid " + standardWhiteBg})
      gsap.to(colorChangeList, {color: standardBlackColor})
      gsap.to(backgroundColorChangeList, {backgroundColor: standardBlackColor})
      gsap.to("#navbarToggler", {border: "solid " + standardBlackColor})
      gsap.to("#lighModeBtn", {border: "solid " + standardBlackColor})
      gsap.to(".bts-card-text", {color: standardBlackColor, backgroundColor: standardWhiteBg})
      gsap.to(".white-layer", {backgroundColor: standardWhiteBg})
      gsap.to(".professional-cards", {color: standardBlackColor, backgroundColor: standardWhiteBg, border: "solid" + standardGrayColor})
      gsap.to(".professional-cards a", {color: hyperlinkColor2})
      gsap.to("footer", {backgroundColor: standardBlackBg})
      gsap.to("footer h4", {color: standardWhiteBg})
      gsap.to("#footerSocial a", {border: "0.5px solid " + standardWhiteBg, backgroundColor: standardBlackBg})
      gsap.to("#footerSocial svg", {fill: standardWhiteBg})
      gsap.to("#footerLeft p", {color: standardWhiteBg})
      gsap.to("#arrowBox svg", {fill: standardBlackBg})
      gsap.to("#whiteLogo", {opacity: 0, duration: 0.1})
      gsap.to("#whiteLogo", {display: "none"})
      gsap.to("#blackLogo", {opacity: 0, display: "block", duration: 0})
      gsap.to("#blackLogo", {opacity: 1, duration: 0.1, ease: "linear"}, "=+0.1")
    } else {
      toggleAnimation.reverse();
      gsap.to("body", {backgroundColor: standardBlackBg})
      gsap.to(".carousel-layer", {border: "25px solid " + standardBlackBg})
      gsap.to(colorChangeList, {color: standardWhiteColor})
      gsap.to(backgroundColorChangeList, {backgroundColor: standardWhiteColor})
      gsap.to("#navbarToggler", {border: "solid " + standardWhiteColor})
      gsap.to(".bts-card-text", {color: standardWhiteColor, backgroundColor: standardBlackBg})
      gsap.to(".white-layer", {backgroundColor: standardBlackBg})
      gsap.to(".professional-cards", {color: standardWhiteColor, backgroundColor: standardBlackBg, border: "solid" + standardGrayColor})
      gsap.to(".professional-cards a", {color: hyperlinkColor1})
      gsap.to("footer", {backgroundColor: standardWhiteBg})
      gsap.to("footer h4", {color: standardBlackColor})
      gsap.to("#footerSocial a", {border: "0.5px solid " + standardBlackBg, backgroundColor: standardWhiteBg})
      gsap.to("#footerSocial svg", {fill: standardBlackBg})
      gsap.to("#footerLeft p", {color: standardBlackBg})
      gsap.to("#arrowBox svg", {fill: standardWhiteBg})
      gsap.to("#blackLogo", {opacity: 0, duration: 0.1})
      gsap.to("#blackLogo", {display: "none"})
      gsap.to("#whiteLogo", {display: "block"}, "=+0.1")
      gsap.to("#whiteLogo", {opacity: 1, duration: 0.1, ease: "linear"}, "=+0.1")
    }
    toggleState = !toggleState;
  });
}
lightModeClicked();

// hover social btn
let darkMode = document.body.style.backgroundColor === standardBlackBg;
function socialMouseOver(a) {
  if (toggleState) {
    gsap.to(a, {backgroundColor: standardBlackBg, duration: 0.1, ease: "expo.out"})
    gsap.to(a.children, {fill: standardWhiteBg, duration: 0.1, ease: "expo.in"})
  } else {
    gsap.to(a, {backgroundColor: standardWhiteBg, duration: 0.1, ease: "expo.out"})
    gsap.to(a.children, {fill: standardBlackBg, duration: 0.1, ease: "expo.in"})
  }
}
function socialMouseOut(a) {
  if (toggleState) {
    gsap.to(a, {backgroundColor: standardWhiteBg, duration: 0.1, ease: "expo.out"})
    gsap.to(a.children, {fill: standardBlackBg, duration: 0.1, ease: "expo.in"})
  } else {
    gsap.to(a, {backgroundColor: standardBlackBg, duration: 0.1, ease: "expo.out"})
    gsap.to(a.children, {fill: standardWhiteBg, duration: 0.1, ease: "expo.in"})
  }
}

// client slide
function slideThreeImages() {
  function style1() {
    let tl1 = gsap.timeline({ scrollTrigger: {
        trigger: ".style-1-img-two", 
        start: "top 90%",
    }, repeat: -1, yoyo: true, delay: 1.5, defaults: {
        duration: 3,
        ease: "power4.inOut",
    }});
    // style 1
    tl1.set(".style-1-img-two", {
      x: "-130%",
      y: "-100%",
    });
    tl1.set(".style-1-img-three", {
      y: "-70%",
    });
    tl1.to(".style-1-img-one", {
      x: "130%",

    });
    tl1.to(
      ".style-1-img-two",
      {
        x: "0%",
      },
      "<"
    );
    tl1.to(".style-1-img-two", {
      y: "-230%",
    });
    tl1.to(
      ".style-1-img-three",
      {
        y: "-200%",
      },
      "<"
    );
  }

  function style2() {
    let tl2 = gsap.timeline({ scrollTrigger: {
        trigger: ".style-2-img-two", 
        start: "top 90%",
    }, repeat: -1, yoyo: true, delay: 0.3, defaults: {
        duration: 3,
        ease: "power4.inOut",
    } });
    tl2.set(".style-2-img-two", {
      x: "130%",
      y: "-100%",
    });
    tl2.set(".style-2-img-three", {
      y: "-330%",
    });
    tl2.to(".style-2-img-one", {
      x: "-130%",
    });
    tl2.to(
      ".style-2-img-two",
      {
        x: "0%",
      },
      "<"
    );
    tl2.to(".style-2-img-two", {
      y: "30%",
    });
    tl2.to(
      ".style-2-img-three",
      {
        y: "-200%",
      },
      "<"
    );
  }

  style1();
  style2();
}
function slideFourImages() {
  function style3() {
    let tl3 = gsap.timeline({ scrollTrigger: {
        trigger: ".style-3-img-two", 
        start: "top 90%",
    }, repeat: -1, yoyo: true, defaults: {
        duration: 3,
        ease: "power4.inOut",
    } });

    // initial state
    tl3.set(".style-3-img-two", {
      x: "130%",
      y: "-100%",
    });
    tl3.set(".style-3-img-three", {
      y: "-200%",
      x: "130%",
    });
    tl3.set(".style-3-img-four", {
      x: "0%",
      y: "-430%",
    });

    // 1# motion
    tl3.to(".style-3-img-one", {
      x: "-130%",
    });
    tl3.to(
      ".style-3-img-two",
      {
        x: "0%",
      },
      "<"
    );

    // 2# motion
    tl3.to(".style-3-img-one", {
      x: "-260%",
    });
    tl3.to(
      ".style-3-img-two",
      {
        x: "-130%",
      },
      "<"
    );
    tl3.to(
      ".style-3-img-three",
      {
        x: "0%",
      },
      "<"
    );

    // 3# motion
    tl3.to(".style-3-img-three", {
      y: "-70%",
    });
    tl3.to(
      ".style-3-img-four",
      {
        y: "-300%",
      },
      "<"
    );
  }

  function style4() {
    let tl4 = gsap.timeline({ scrollTrigger: {
        trigger: ".style-4-img-two", 
        start: "top 90%",
    }, repeat: -1, yoyo: true, delay: 0.6, defaults: {
        duration: 3,
        ease: "power4.inOut",
    }});

    // // initial state
    tl4.set(".style-4-img-two", {
      x: "0%",
      y: "30%",
    });
    tl4.set(".style-4-img-three", {
      y: "-70%",
      x: "0%",
    });
    tl4.set(".style-4-img-four", {
      x: "0%",
      y: "-170%",
    });

    // // 1# motion
    tl4.to(".style-4-img-one", {
      y: "-130%",
    });
    tl4.to(
      ".style-4-img-two",
      {
        y: "-100%",
      },
      "<"
    );

    // // 2# motion
    tl4.to(".style-4-img-two", {
      y: "-230%",
    });
    tl4.to(
      ".style-4-img-three",
      {
        y: "-200%",
      },
      "<"
    );

    // 3# motion
    tl4.set(".style-4-img-one", {
      y: "130%",
    });
    tl4.to(
      ".style-4-img-four",
      {
        y: "-300%",
      },
      "<"
    );
    tl4.to(
      ".style-4-img-three",
      {
        y: "-330%",
      },
      "<"
    );

    tl4.to(".style-4-img-one", {
      y: "0%",
    });
    tl4.to(
      ".style-4-img-four",
      {
        y: "-430%",
      },
      "<"
    );
  }

  function style5() {
    let tl5 = gsap.timeline({ scrollTrigger: {
        trigger: ".style-5-img-two", 
        start: "top 90%",
    }, repeat: -1, delay: 1, defaults: {
        duration: 3,
        ease: "power4.inOut",
    }});

    // // initial state
    tl5.set(".style-5-img-two", {
      x: "0%",
      y: "-230%",
    });
    tl5.set(".style-5-img-three", {
      y: "-330%",
      x: "0%",
    });
    tl5.set(".style-5-img-four", {
      x: "0%",
      y: "-430%",
    });

    // // 1# motion
    tl5.to(".style-5-img-one", {
      y: "130%",
    });
    tl5.to(
      ".style-5-img-two",
      {
        y: "-100%",
      },
      "<"
    );

    // // 2# motion
    tl5.to(".style-5-img-two", {
      y: "30%",
    });
    tl5.to(
      ".style-5-img-three",
      {
        y: "-200%",
      },
      "<"
    );

    // 3# motion
    tl5.set(".style-5-img-one", {
      y: "-130%",
    });
    tl5.to(
      ".style-5-img-four",
      {
        y: "-300%",
      },
      "<"
    );
    tl5.to(
      ".style-5-img-three",
      {
        y: "-70%",
      },
      "<"
    );

    tl5.to(".style-5-img-one", {
      y: "0%",
    });
    tl5.to(
      ".style-5-img-four",
      {
        y: "-170%",
      },
      "<"
    );
  }

  function style6() {
    let tl6 = gsap.timeline({ scrollTrigger: {
        trigger: ".style-6-img-two", 
        start: "top 90%",
    }, repeat: -1, yoyo: true, delay: 1.2, defaults: {
        duration: 3,
        ease: "power4.inOut",
    }});

    // // initial state
    tl6.set(".style-6-img-two", {
      y: "-100%",
      x: "-130%",
    });
    tl6.set(".style-6-img-three", {
      y: "-200%",
      x: "-130%",
    });
    tl6.set(".style-6-img-four", {
      x: "-130%",
      y: "-300%",
    });

    // // 1# motion
    tl6.to(".style-6-img-one", {
      x: "130%",
    });
    tl6.to(
      ".style-6-img-two",
      {
        x: "0%",
      },
      "<"
    );

    // // 2# motion
    tl6.to(".style-6-img-two", {
      x: "130%",
    });
    tl6.to(
      ".style-6-img-three",
      {
        x: "0%",
      },
      "<"
    );

    // 3# motion
    tl6.set(".style-6-img-one", {
      y: "-130%",
    });
    tl6.to(
      ".style-6-img-four",
      {
        x: "0%",
      },
      "<"
    );
    tl6.to(
      ".style-6-img-three",
      {
        x: "130%",
      },
      "<"
    );
  }

  style3();
  style4();
  style5();
  style6();
}
slideThreeImages();
slideFourImages();

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

function whiteLayerFlash() {
  gsap.to(".white-layer", {
    x: 400,
    ease: "power2.inOut",
    delay: 0.1,
    duration: 0.9,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".white-layer",
      start: "top 75%",
      end: "top 40%",
    }});

  gsap.to(".white-layer", {
    visibility: "hidden",
    delay: 1, 
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".white-layer",
      start: "top 85%",
      end: "top 40%",
    }
  });

  gsap.to(".bts-image-box", {
    overflowX: "visible",
    delay: 1, 
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".white-layer",
      start: "top 85%",
      end: "top 40%",
    }
  });
    
  gsap.to(".bts-image-box img", {
    duration: 0.5,
    stagger: 0.2,
    delay: 1.6,
    ease: "power4.inOut",
    boxShadow: "-10px 20px 25px rgba(0,0,0,0.3)",
    scrollTrigger: {
      trigger: ".white-layer",
      start: "top 85%",
      end: "top 40%",
    }
  })  
}
function zoomCarouselRegister() {
  // super duper large desktop
  gsap.registerEffect({
    name: "zoomSuperDuperLargeDesktop",
    effect: (targets, config) => {
      return gsap.fromTo(targets, {
        backgroundSize: "127%", 
      }, {
        backgroundSize: config.backgroundSize, 
        ease: "power1.inOut",
        repeat: -1, 
        yoyo: true,
        duration: config.duration})
    }
  })
  // super large desktop
  gsap.registerEffect({
    name: "zoomSuperLargeDesktop",
    effect: (targets, config) => {
      return gsap.fromTo(targets, {
        backgroundSize: "117%", 
      }, {
        backgroundSize: config.backgroundSize, 
        ease: "power1.inOut",
        repeat: -1, 
        yoyo: true,
        duration: config.duration})
    }
  })
  // large desktop
  gsap.registerEffect({
    name: "zoomLargeDesktop",
    effect: (targets, config) => {
      return gsap.fromTo(targets, {
        backgroundSize: "115%", 
      }, {
        backgroundSize: config.backgroundSize, 
        ease: "power1.inOut",
        repeat: -1, 
        yoyo: true,
        duration: config.duration})
    }
  })
  // medium desktop
  gsap.registerEffect({
    name: "zoomMediumDesktop",
    effect: (targets, config) => {
      return gsap.fromTo(targets, {
        backgroundSize: "121%", 
      }, {
        backgroundSize: config.backgroundSize, 
        ease: "power1.inOut",
        repeat: -1, 
        yoyo: true,
        duration: config.duration})
    }
  })
  // small desktop
  gsap.registerEffect({
    name: "zoomSmallDesktop",
    effect: (targets, config) => {
      return gsap.fromTo(targets, {
        backgroundSize: "127%", 
      }, {
        backgroundSize: config.backgroundSize, 
        ease: "power1.inOut",
        repeat: -1, 
        yoyo: true,
        duration: config.duration})
    }
  })
  // large tablet
  gsap.registerEffect({
    name: "zoomLargeTablet",
    effect: (targets, config) => {
      return gsap.fromTo(targets, {
        backgroundSize: "143%", 
      }, {
        backgroundSize: config.backgroundSize, 
        ease: "power1.inOut",
        repeat: -1, 
        yoyo: true,
        duration: config.duration})
    }
  })
  // small tablet
  gsap.registerEffect({
    name: "zoomSmallTablet",
    effect: (targets, config) => {
      return gsap.fromTo(targets, {
        backgroundSize: "194%", 
      }, {
        backgroundSize: config.backgroundSize, 
        ease: "power1.inOut",
        repeat: -1, 
        yoyo: true,
        duration: config.duration})
    }
  })
  // large mobile
  gsap.registerEffect({
    name: "zoomLargeMobile",
    effect: (targets, config) => {
      return gsap.fromTo(targets, {
        backgroundSize: "296%", 
      }, {
        backgroundSize: config.backgroundSize, 
        ease: "power1.inOut",
        repeat: -1, 
        yoyo: true,
        duration: config.duration})
    }
  })
  // small mobile
  gsap.registerEffect({
  name: "zoomSmallMobile",
    effect: (targets, config) => {
      return gsap.fromTo(targets, {
        backgroundSize: "346%", 
      }, {
        backgroundSize: config.backgroundSize, 
        ease: "power1.inOut",
        repeat: -1, 
        yoyo: true,
        duration: config.duration})
    }
  })
}
function footerSlide() {
  let footerTl = gsap.timeline();

  footerTl.set("footer", {
    position: "absolute",
    y: "-10%",
  });

  footerTl.to("footer", {
    y: "-60%",
    scrollTrigger: {
      trigger: "#arrowBox",
      scrub: 1,
      start: "top 100%",
      end: "top 75%",
    }
  });

  footerTl.to(".bi-arrow-up-circle-fill", {
    y: "-100%",
  });
}
zoomCarouselRegister();

// arrow up
let arrowUp = document.getElementById("arrowBox");
arrowUp.addEventListener("click", () => {
  gsap.effects.navbarScrollTo(window, {y: "#landingPage", offsetY: 0});
})

// GSAP matchMedia
let mm = gsap.matchMedia()
function desktopSize() {
  mm.add("(max-width: 2560px) and (min-width: 2001px)", () => {
  
    gsap.set("#btsFrontImg", {x: "60%"})
    gsap.effects.verticalScrollFrom("#btsFrontImg", {y: "270%", scrollTrigger: {scrub: 1}});
    gsap.effects.verticalScrollFrom("#btsBackImg1", {y: "25%", scrollTrigger: {scrub: 5}});
    gsap.effects.verticalScrollFrom("#btsBackImg2", {y: "50%", scrollTrigger: {scrub: 2}});

    whiteLayerFlash();
    footerSlide();
  })
  mm.add("(max-width: 2000px) and (min-width: 1513px)", () => {

    gsap.set("#btsFrontImg", {x: "60%"})
    gsap.effects.verticalScrollFrom("#btsFrontImg", {y: "240%", scrollTrigger: {scrub: 1}});
    gsap.effects.verticalScrollFrom("#btsBackImg1", {y: "25%", scrollTrigger: {scrub: 5}});
    gsap.effects.verticalScrollFrom("#btsBackImg2", {y: "50%", scrollTrigger: {scrub: 2}});

    whiteLayerFlash();
    footerSlide();
  })
  mm.add("(max-width: 1512px) and (min-width: 1441px)", () => {
  
    // bts vertical slide
    gsap.set("#btsFrontImg", {x: "60%"})
    gsap.effects.verticalScrollFrom("#btsFrontImg", {y: 850, scrollTrigger: {scrub: 1}});
    gsap.effects.verticalScrollFrom("#btsBackImg1", {y: "25%", scrollTrigger: {scrub: 5}});
    gsap.effects.verticalScrollFrom("#btsBackImg2", {y: "50%", scrollTrigger: {scrub: 4}});
  
    whiteLayerFlash();
    footerSlide();
  });
  mm.add("(max-width: 1440px) and (min-width: 1025px)", () => {
  
    // bts vertical slide
    gsap.set("#btsFrontImg", {x: "30%"})
    gsap.effects.verticalScrollFrom("#btsFrontImg", {y: 1200, scrollTrigger: {scrub: 1}});
    gsap.effects.verticalScrollFrom("#btsBackImg1", {y: "25%", scrollTrigger: {scrub: 5}});
    gsap.effects.verticalScrollFrom("#btsBackImg2", {y: "50%", scrollTrigger: {scrub: 4}});

    whiteLayerFlash();
    footerSlide();
  });
  mm.add("(max-width: 1024px) and (min-width: 769px)", () => {
    
    // bts vertical slide
    gsap.set("#btsFrontImg", {x: "-5%", zIndex: -1})
    gsap.effects.verticalScrollFrom("#btsFrontImg", {y: "100%", scrollTrigger: {scrub: 4}});
    gsap.effects.verticalScrollFrom("#btsBackImg1", {y: "25%", scrollTrigger: {scrub: 5}});
    gsap.effects.verticalScrollFrom("#btsBackImg2", {y: "50%", scrollTrigger: {scrub: true}});

    whiteLayerFlash();
    footerSlide();
  });

}
function tabletSize() {
  mm.add("(max-width: 768px) and (min-width: 680px)", () => {
  
    gsap.set("#btsFrontImg", {x: "0%"})
    gsap.effects.verticalScrollFrom("#btsFrontImg", {y: 750, scrollTrigger: {scrub: 4}});
    gsap.effects.verticalScrollFrom("#btsBackImg1", {y: "50%", scrollTrigger: {scrub: 5}});
    gsap.effects.verticalScrollFrom("#btsBackImg2", {y: "50%", scrollTrigger: {scrub: true}});

    footerSlide();
  });
  mm.add("(max-width: 679px) and (min-width: 500px)", () => {
    
    gsap.set("#btsFrontImg", {x: "0%"})
    gsap.effects.verticalScrollFrom("#btsFrontImg", {y: 490, scrollTrigger: {scrub: 4}});
    gsap.effects.verticalScrollFrom("#btsBackImg1", {y: "20%", scrollTrigger: {scrub: 5}});
    gsap.effects.verticalScrollFrom("#btsBackImg2", {y: "50%", scrollTrigger: {scrub: true}});
  
    footerSlide();
  });

}
function mobileSize() {
  mm.add("(max-width: 499px) and (min-width: 375px)", () => {
  
    // bts vertical slide
    gsap.set("#btsFrontImg", {x: "0%"})
    gsap.effects.verticalScrollFrom("#btsFrontImg", {y: 550, scrollTrigger: {scrub: 4}});
    gsap.effects.verticalScrollFrom("#btsBackImg1", {y: "25%", scrollTrigger: {scrub: 5}});
    gsap.effects.verticalScrollFrom("#btsBackImg2", {y: "80%", scrollTrigger: {scrub: 1}});
  
   
  });
  mm.add("(max-width: 374px)", () => {
  
    // bts vertical slide
    gsap.effects.verticalScrollFrom("#btsFrontImg", {y: "315%", scrollTrigger: {scrub: 4}});
    gsap.effects.verticalScrollFrom("#btsBackImg1", {y: "25%", scrollTrigger: {scrub: 5}});
    gsap.effects.verticalScrollFrom("#btsBackImg2", {y: "150%", scrollTrigger: {scrub: true}});
  
  });
}

desktopSize();
tabletSize();
mobileSize();

// jQuery
$(document).ready(function() {
  
  // bts collapse
  $("#btsCollapse1").on("click", () => {
    // $('#btsCollapseText1').css("display", "block");
    $("#btsCollapseText1").slideToggle(250);
    $("#btsCollapseText2").slideUp(250);
    $("#btsCollapseText3").slideUp(250);
  });

  $("#btsCollapse2").on("click", () => {
    $("#btsCollapseText2").slideToggle(250);
    $("#btsCollapseText1").slideUp(250);
    $("#btsCollapseText3").slideUp(250);
  });

  $("#btsCollapse3").on("click", () => {
    $("#btsCollapseText3").slideToggle(250);
    $("#btsCollapseText1").slideUp(250);
    $("#btsCollapseText2").slideUp(250);
  });

  $("#green").on("click", (event) => {
    $(event.currentTarget).hide();
  });

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
    gsap.effects.navbarScrollTo(window, {y: "#servicesHeading", offsetY: 10});
  })
  $("#navLinkBts").on("click", () => {
    gsap.effects.navbarScrollTo(window, {y: "#btsCol", offsetY: 110});
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
});