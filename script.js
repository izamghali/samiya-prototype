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

gsap.registerPlugin(ScrollTrigger);

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
zoomCarouselRegister();

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

// GSAP matchMedia
let mm = gsap.matchMedia()

function desktopSize() {
  mm.add("(max-width: 2560px) and (min-width: 2001px)", () => {
    // zoom carousel
    gsap.effects.zoomSuperDuperLargeDesktop(".carousel-img", {duration: 5, backgroundSize: "135%"});
  
    gsap.set("#btsFrontImg", {x: "60%"})
    gsap.effects.verticalScrollFrom("#btsFrontImg", {y: "270%", scrollTrigger: {scrub: 1}});
    gsap.effects.verticalScrollFrom("#btsBackImg1", {y: "25%", scrollTrigger: {scrub: 5}});
    gsap.effects.verticalScrollFrom("#btsBackImg2", {y: "50%", scrollTrigger: {scrub: 2}});
  })
  mm.add("(max-width: 2000px) and (min-width: 1513px)", () => {
    // zoom carousel
    gsap.effects.zoomSuperLargeDesktop(".carousel-img", {duration: 5, backgroundSize: "133%"});

    gsap.set("#btsFrontImg", {x: "60%"})
    gsap.effects.verticalScrollFrom("#btsFrontImg", {y: "240%", scrollTrigger: {scrub: 1}});
    gsap.effects.verticalScrollFrom("#btsBackImg1", {y: "25%", scrollTrigger: {scrub: 5}});
    gsap.effects.verticalScrollFrom("#btsBackImg2", {y: "50%", scrollTrigger: {scrub: 2}});
  })
  mm.add("(max-width: 1512px) and (min-width: 1441px)", () => {
    // zoom carousel
    gsap.effects.zoomLargeDesktop(".carousel-img", {duration: 5, backgroundSize: "130%"});
  
    // bts vertical slide
    gsap.set("#btsFrontImg", {x: "60%"})
    gsap.effects.verticalScrollFrom("#btsFrontImg", {y: 850, scrollTrigger: {scrub: 1}});
    gsap.effects.verticalScrollFrom("#btsBackImg1", {y: "25%", scrollTrigger: {scrub: 5}});
    gsap.effects.verticalScrollFrom("#btsBackImg2", {y: "50%", scrollTrigger: {scrub: 4}});
  
  });
  mm.add("(max-width: 1440px) and (min-width: 1025px)", () => {
    // zoom carousel
    gsap.effects.zoomMediumDesktop(".carousel-img", {duration: 5, backgroundSize: "148%"});
  
    // bts vertical slide
    gsap.set("#btsFrontImg", {x: "30%"})
    gsap.effects.verticalScrollFrom("#btsFrontImg", {y: 1200, scrollTrigger: {scrub: 1}});
    gsap.effects.verticalScrollFrom("#btsBackImg1", {y: "25%", scrollTrigger: {scrub: 5}});
    gsap.effects.verticalScrollFrom("#btsBackImg2", {y: "50%", scrollTrigger: {scrub: 4}});
  });
  mm.add("(max-width: 1024px) and (min-width: 769px)", () => {
    // zoom carousel
    gsap.effects.zoomSmallDesktop(".carousel-img", {duration: 4.8, backgroundSize: "160%"});
    
    // bts vertical slide
    gsap.set("#btsFrontImg", {x: "-5%", zIndex: -1})
    gsap.effects.verticalScrollFrom("#btsFrontImg", {y: "100%", scrollTrigger: {scrub: 4}});
    gsap.effects.verticalScrollFrom("#btsBackImg1", {y: "25%", scrollTrigger: {scrub: 5}});
    gsap.effects.verticalScrollFrom("#btsBackImg2", {y: "50%", scrollTrigger: {scrub: true}});
  
  });

}
function tabletSize() {
  mm.add("(max-width: 768px) and (min-width: 680px)", () => {
    // zoom carousel
    gsap.effects.zoomLargeTablet(".carousel-img", {duration: 5, backgroundSize: "160%"});
  
    gsap.set("#btsFrontImg", {x: "0%"})
    gsap.effects.verticalScrollFrom("#btsFrontImg", {y: 750, scrollTrigger: {scrub: 4}});
    gsap.effects.verticalScrollFrom("#btsBackImg1", {y: "50%", scrollTrigger: {scrub: 5}});
    gsap.effects.verticalScrollFrom("#btsBackImg2", {y: "50%", scrollTrigger: {scrub: true}});
  
  });
  mm.add("(max-width: 679px) and (min-width: 500px)", () => {
    // zoom carousel
    gsap.effects.zoomSmallTablet(".carousel-img", {duration: 4.8, backgroundSize: "220%"});
    
    gsap.set("#btsFrontImg", {x: "0%"})
    gsap.effects.verticalScrollFrom("#btsFrontImg", {y: 750, scrollTrigger: {scrub: 4}});
    gsap.effects.verticalScrollFrom("#btsBackImg1", {y: "20%", scrollTrigger: {scrub: 5}});
    gsap.effects.verticalScrollFrom("#btsBackImg2", {y: "50%", scrollTrigger: {scrub: true}});
  
  });
}
function mobileSize() {
  mm.add("(max-width: 499px) and (min-width: 375px)", () => {
    // zoom carousel
    gsap.effects.zoomLargeMobile(".carousel-img", {duration: 5, backgroundSize: "335%"});
  
    // bts vertical slide
    gsap.set("#btsFrontImg", {x: "0%"})
    gsap.effects.verticalScrollFrom("#btsFrontImg", {y: 550, scrollTrigger: {scrub: 4}});
    gsap.effects.verticalScrollFrom("#btsBackImg1", {y: "25%", scrollTrigger: {scrub: 5}});
    gsap.effects.verticalScrollFrom("#btsBackImg2", {y: "80%", scrollTrigger: {scrub: 1}});
  
   
  });
  mm.add("(max-width: 374px)", () => {
    // zoom carousel
    gsap.effects.zoomSmallMobile(".carousel-img", {duration: 5, backgroundSize: "450%"});
  
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
$(document).ready(() => {
  
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

  $("#footerHouseFill").hide();

  // footer house icon
  $("#footerHouseLink").on("mouseenter", () => {
    $("#footerHouseFill").show();
    $("#footerHouseNoFill").hide();
  });

  $("#footerHouseLink").on("mouseleave", () => {
    $("#footerHouseNoFill").show();
    $("#footerHouseFill").hide();
  });

  // dark/light mode toggle
  let $body = document.body;

  $("#toggleOff").on("click", () => {
    $("#toggleOn").show();
    $("#toggleOff").hide();
    $("#moonMode").fadeIn();
    $("#sunMode").hide();
    $body.dataset.bsTheme = "dark";
    $(".layer").css("border", "25px solid #212529");
    $(".navbar-link").css("color", "#212529");
    $(".navbar-dark-light-toggle").css("color", "#212529");
  })
  $("#toggleOn").on("click", () => {
    $("#toggleOff").show();
    $("#toggleOn").hide();
    $("#sunMode").fadeIn();
    $("#moonMode").hide();
    $body.dataset.bsTheme = "light";
    $(".layer").css("border", "25px solid #fff");
    $(".navbar-link").css("color", "#fff");
    $(".navbar-dark-light-toggle").css("color", "#fff");
  })

  // hover navbar
  $(".navbar-link").on("mouseenter", (event) => {
    $(".navbar-link").not(event.currentTarget).fadeTo("100", 0.4);
    if ($body.dataset.bsTheme === "dark") {
      $("#toggleOn").fadeTo("100", 0.4);
      $("#moonMode").fadeTo("100", 0.4);
      $("#toggleOff").hide();
      $("#sunMode").hide();
    } else {
      $("#toggleOff").fadeTo("100", 0.4);
      $("#sunMode").fadeTo("100", 0.4);
      $("#toggleOn").hide();
      $("#moonMode").hide();
      
    }
  }).on("mouseleave", (event) => {
    $(".navbar-link").not(event.currentTarget).fadeTo("100", 1);
    $(".navbar-dark-light-toggle").fadeTo("100", 1);
    if ($body.dataset.bsTheme === "dark") {
      $("#toggleOn").fadeTo("100", 1);
      $("#moonMode").fadeTo("100", 1);
      $("#toggleOff").hide();
      $("#sunMode").hide();
    } else {
      $("#toggleOff").fadeTo("100", 1);
      $("#sunMode").fadeTo("100", 1);
      $("#toggleOn").hide();
      $("#moonMode").hide();
    }
  })

  $(".navbar-dark-light-toggle").on("mouseenter", () => {
    $(".navbar-link").fadeTo("100", 0.4);
  }).on("mouseleave", () => {
    $(".navbar-link").fadeTo("100", 1);
  })

});
