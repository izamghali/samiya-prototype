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

gsap.to("#btsFrontImg", {
  y: "-80%",
  delay: 0.6,
  duration: 5, 
  scrollTrigger: {
    scrub: 3,
  }
})

gsap.fromTo("#btsBackImg1",
{
  y: "80%",
  delay: 0.6,
  duration: 5, 
},
{
  y: "-20%",
  scrollTrigger: {
    scrub: 1,
  }
  }
);
gsap.fromTo("#btsBackImg2",
{
  y: "10%",
  delay: 0.6,
  duration: 5, 
},
{
  y: "-20%",
  scrollTrigger: {
    scrub: 4,
  }
  }
);


// GSAP matchMedia
let mm = gsap.matchMedia(),
  breakPoint = 768;

mm.add(
  { // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.,
    isDesktop: `(min-width: ${breakPoint}px)`,
    isMobile: `(max-width: ${breakPoint - 1}px)`,
    reduceMotion: "(prefers-reduced-motion: reduce)",
  },
  (context) => {
    // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
    let { isDesktop, isMobile, isTablet } = context.conditions;

    // carousel zoom-in
    gsap.fromTo( ".carousel-img",
      {
        backgroundSize: isDesktop ? "100%" : "410%",
      },
      {
        ease: "power1.inOut",
        duration: 12,
        yoyo: true,
        backgroundSize: isDesktop ? "130%" : "500%",
        repeat: -1,
      }
    );

    // bts images scroll smooth

    return () => {
      // optional
    };
  }
);

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
    $(".carousel-border").css("border", "25px solid #212529")
  })
  $("#toggleOn").on("click", () => {
    $("#toggleOff").show();
    $("#toggleOn").hide();
    $("#sunMode").fadeIn();
    $("#moonMode").hide();
    $body.dataset.bsTheme = "light";
    $(".carousel-border").css("border", "25px solid #fff");
  })

});
