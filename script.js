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

// gsap.fromTo(
//   ".carousel-img",
//   {
//     backgroundSize: isDesktop ? "100%" : "410%",
//   },
//   {
//     ease: "power1.inOut",
//     duration: 12,
//     yoyo: true,
//     backgroundSize: isDesktop ? "130%" : "500%",
//     repeat: -1,
//   }
// );

slideThreeImages();
slideFourImages();

gsap.registerPlugin(ScrollTrigger);

// GSAP matchMedia
let mm = gsap.matchMedia()

mm.add("(max-width: 2560px) and (min-width: 1441px)", () => {
  gsap.fromTo("#btsFrontImg",
  { 
    y: "85%",
    scale: 1.1,
    x: "-40%",
  },{ 
    y: "-100%",
    scrollTrigger: {
      scrub: 2,
    }
    }
  );
  gsap.fromTo("#btsBackImg1",
{
  y: "10%",
},
{
  y: "-40%",
  scrollTrigger: {
    scrub: 1,
  }
  }
  );
  gsap.fromTo("#btsBackImg2",
  {
    y: "150%",
    scale: 1,
    x: "-5%",
    zIndex: 0,
  },
  {
    y: "-100%",
    scrollTrigger: {
      scrub: 2,
    }
    }
  );

});
mm.add("(max-width: 1440px) and (min-width: 1025px)", () => {
  gsap.fromTo("#btsFrontImg",
  { 
    y: "200%",
    scale: 1.2,
    x: "-30%",
  },{ 
    y: "-120%",
    scrollTrigger: {
      scrub: 2,
    }
    }
  );
  gsap.fromTo("#btsBackImg1",
{
  y: "50%",
},
{
  y: "-40%",
  scrollTrigger: {
    scrub: 1,
  }
  }
  );
  gsap.fromTo("#btsBackImg2",
  {
    y: "150%",
    scale: 1.2,
    x: "-15%",
    zIndex: 0,
  },
  {
    y: "-100%",
    scrollTrigger: {
      scrub: 2,
    }
    }
  );

});
mm.add("(max-width: 1024px) and (min-width: 769px)", () => {
  gsap.fromTo("#btsFrontImg",
  {
    y: "90%",
    x: "0%",
    zIndex: 1,
  },
  {
    y: "-50%",
    scrollTrigger: {
      scrub: 3,
    }
  }
  );
  gsap.fromTo("#btsBackImg1",
{
  y: "50%",
  scale: 1.2,
},
{
  y: "-20%",
  scrollTrigger: {
    scrub: 10,
  }
  }
  );
  gsap.fromTo("#btsBackImg2",
  {
    y: "30%",
    zIndex: 2,
  },
  {
    y: "-30%",
    scrollTrigger: {
      scrub: 1,
    }
    }
  );

});
mm.add("(max-width: 768px) and (min-width: 680px)", () => {
  gsap.fromTo("#btsFrontImg",
  {
    y: "90%",
    x: "-7%",
    zIndex: 1,
  },
  {
    y: "-80%",
    scrollTrigger: {
      scrub: 3,
    }
  }
  );
  gsap.fromTo("#btsBackImg1",
{
  y: "10%",
},
{
  y: "-20%",
  scrollTrigger: {
    scrub: 10,
  }
  }
  );
  gsap.fromTo("#btsBackImg2",
  {
    y: "30%",
    zIndex: 2,
  },
  {
    y: "-30%",
    scrollTrigger: {
      scrub: 1,
    }
    }
  );

});
mm.add("(max-width: 679px) and (min-width: 500px)", () => {
  gsap.fromTo("#btsFrontImg",
  {
    y: "60%",
    x: "20%",
    scale: 1.2,
    zIndex: 1,
  },
  {
    y: "-120%",
    scrollTrigger: {
      scrub: 3,
    }
  }
  );
  gsap.fromTo("#btsBackImg1",
{
  y: "0%",
},
{
  y: "-20%",
  scrollTrigger: {
    scrub: 10,
  }
  }
  );
  gsap.fromTo("#btsBackImg2",
  {
    y: "30%",
    zIndex: 2,
  },
  {
    y: "-30%",
    scrollTrigger: {
      scrub: 1,
    }
    }
  );

});
mm.add("(max-width: 499px) and (min-width: 375px)", () => {
  gsap.fromTo("#btsFrontImg",
  {
    y: "90%",
    x: "10%",
    scale: 1,
    zIndex: 1,
  },
  {
    y: "-120%",
    scrollTrigger: {
      scrub: 3,
    }
  }
  );
  gsap.fromTo("#btsBackImg1",
{
  y: "0%",
},
{
  y: "-20%",
  scrollTrigger: {
    scrub: 10,
  }
  }
  );
  gsap.fromTo("#btsBackImg2",
  {
    y: "30%",
    zIndex: 2,
  },
  {
    y: "-30%",
    scrollTrigger: {
      scrub: 1,
    }
    }
  );

});
mm.add("(max-width: 374px)", () => {
  gsap.fromTo("#btsFrontImg",
  {
    y: "45%",
    x: "5%",
    scale: 1.2,
    zIndex: 1,
  },
  {
    y: "-60%",
    scrollTrigger: {
      scrub: 3,
    }
  }
  );
  gsap.fromTo("#btsBackImg1",
{
  y: "0%",
},
{
  y: "-20%",
  scrollTrigger: {
    scrub: 10,
  }
  }
  );
  gsap.fromTo("#btsBackImg2",
  {
    y: "30%",
    zIndex: 2,
  },
  {
    y: "-30%",
    scrollTrigger: {
      scrub: 1,
    }
    }
  );

});

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
