gsap.fromTo("#green", { 
    x: 200,
    y: 100,
    scale: 3,
}, {
    ease: "power4.out",
    scale: 3,
    x: 700,
    duration: 2, 
    delay: 0.6, 
});

// client slide 
function slideThreeImages() {
    function style1() {
        let tl1 = gsap.timeline({repeat: -1, repeatDelay: 0, yoyo: true});
        // style 1
        tl1.set(".style-1-img-two", {
            x: '-130%',
            y: '-100%'
        },);
        tl1.set(".style-1-img-three", {
            y: '-70%'
        },);
        tl1.to(".style-1-img-one", { 
            ease: "power4.inOut",
            x: '130%',
            duration: 3, 
            delay: 1,
        });
        tl1.to(".style-1-img-two", { 
            ease: "power4.inOut",
            x: '0%',
            duration: 3, 
        }, "<");
        tl1.to(".style-1-img-two", {
            y: '-230%',
            ease: "power4.inOut",
            duration: 3, 
        })
        tl1.to(".style-1-img-three", { 
            ease: "power4.inOut",
            y: '-200%',
            duration: 3, 
        }, "<");
    }
    
    function style2() {
        let tl2 = gsap.timeline({repeat: -1, repeatDelay: 0, yoyo: true});
        tl2.set(".style-2-img-two", {
            x: '130%',
            y: '-100%',
        },);
        tl2.set(".style-2-img-three", {
            y: '-330%',
        },);
        tl2.to(".style-2-img-one", { 
            ease: "power4.inOut",
            x: '-130%',
            duration: 3,
            delay: 3, 
        });
        tl2.to(".style-2-img-two", { 
            ease: "power4.inOut",
            x: '0%',
            duration: 3, 
        }, "<");
        tl2.to(".style-2-img-two", {
            y: '30%',
            ease: "power4.inOut",
            duration: 3, 
        })
        tl2.to(".style-2-img-three", { 
            ease: "power4.inOut",
            y: '-200%',
            duration: 3, 
        }, "<");

    }

    style1();
    style2();

}

function slideFourImages() {

    function style3() {
        let tl3 = gsap.timeline({repeat: -1, repeatDelay: 0, yoyo: true});
        
        // initial state
        tl3.set(".style-3-img-two", {
            x: '130%',
            y: '-100%'
        },);
        tl3.set(".style-3-img-three", {
            y: '-200%',
            x: '130%',
        });
        tl3.set(".style-3-img-four", {
            x: '0%',
            y: '-430%'
        })
        
        // 1# motion
        tl3.to(".style-3-img-one", { 
            x: '-130%',
            ease: "power4.inOut",
            duration: 3, 
            delay: 2
        });
        tl3.to(".style-3-img-two", { 
            x: '0%',
            ease: "power4.inOut",
            duration: 3, 
        }, "<");
        
        // 2# motion
        tl3.to(".style-3-img-one", {
            x: '-260%',
            ease: "power4.inOut",
            duration: 3, 
        });
        tl3.to(".style-3-img-two", {
            x: '-130%',
            ease: "power4.inOut",
            duration: 3, 
        }, "<");
        tl3.to(".style-3-img-three", { 
            x: '0%',
            ease: "power4.inOut",
            duration: 3, 
        }, "<");
        
        // 3# motion
        tl3.to(".style-3-img-three", {
            y: '-70%',
            ease: "power4.inOut",
            duration: 3, 
        })
        tl3.to(".style-3-img-four", {
            y: '-300%',
            ease: "power4.inOut",
            duration: 3, 
        }, "<")

    }

    function style4() {
        let tl4 = gsap.timeline({repeat: -1, repeatDelay: 0, yoyo: true});
            
        // // initial state
        tl4.set(".style-4-img-two", {
            x: '0%',
            y: '30%'
        },);
        tl4.set(".style-4-img-three", {
            y: '-70%',
            x: '0%',
        });
        tl4.set(".style-4-img-four", {
            x: '0%',
            y: '-170%'
        })
        
        // // 1# motion
        tl4.to(".style-4-img-one", { 
            y: '-130%',
            ease: "power4.inOut",
            duration: 3, 
            // delay: 5
        });
        tl4.to(".style-4-img-two", { 
            y: '-100%',
            ease: "power4.inOut",
            duration: 3, 
        }, "<");
        
        // // 2# motion
        tl4.to(".style-4-img-two", {
            y: '-230%',
            ease: "power4.inOut",
            duration: 3, 
        });
        tl4.to(".style-4-img-three", { 
            y: '-200%',
            ease: "power4.inOut",
            duration: 3, 
        }, "<");
        
        // 3# motion
        tl4.set(".style-4-img-one", {
            y: '130%',
            ease: "power4.inOut",
            duration: 3, 
        })
        tl4.to(".style-4-img-four", {
            y: '-300%',
            ease: "power4.inOut",
            duration: 3, 
        }, "<")
        tl4.to(".style-4-img-three", { 
            y: '-330%',
            ease: "power4.inOut",
            duration: 3, 
        }, "<");
        
        tl4.to(".style-4-img-one", {
            y: '0%',
            ease: "power4.inOut",
            duration: 3, 
        },)
        tl4.to(".style-4-img-four", {
            y: '-430%',
            ease: "power4.inOut",
            duration: 3, 
        }, "<")

    }

    function style5() {
        let tl5 = gsap.timeline({repeat: -1, repeatDelay: 0});
            
        // // initial state
        tl5.set(".style-5-img-two", {
            x: '0%',
            y: '-230%'
        },);
        tl5.set(".style-5-img-three", {
            y: '-330%',
            x: '0%',
        });
        tl5.set(".style-5-img-four", {
            x: '0%',
            y: '-430%'
        })
        
        // // 1# motion
        tl5.to(".style-5-img-one", { 
            y: '130%',
            ease: "power4.inOut",
            duration: 3, 
            delay: 4
        });
        tl5.to(".style-5-img-two", { 
            y: '-100%',
            ease: "power4.inOut",
            duration: 3, 
        }, "<");
        
        // // 2# motion
        tl5.to(".style-5-img-two", {
            y: '30%',
            ease: "power4.inOut",
            duration: 3, 
        });
        tl5.to(".style-5-img-three", { 
            y: '-200%',
            ease: "power4.inOut",
            duration: 3, 
        }, "<");
        
        // 3# motion
        tl5.set(".style-5-img-one", {
            y: '-130%',
            ease: "power4.inOut",
            duration: 3, 
        })
        tl5.to(".style-5-img-four", {
            y: '-300%',
            ease: "power4.inOut",
            duration: 3, 
        }, "<")
        tl5.to(".style-5-img-three", { 
            y: '-70%',
            ease: "power4.inOut",
            duration: 3, 
        }, "<");
        
        tl5.to(".style-5-img-one", {
            y: '0%',
            ease: "power4.inOut",
            duration: 3, 
        },)
        tl5.to(".style-5-img-four", {
            y: '-170%',
            ease: "power4.inOut",
            duration: 3, 
        }, "<")

    }

    function style6() {
        let tl6 = gsap.timeline({repeat: -1, repeatDelay: 0, yoyo: true});
            
        // // initial state
        tl6.set(".style-6-img-two", {
            y: '-100%',
            x: '-130%'
        },);
        tl6.set(".style-6-img-three", {
            y: '-200%',
            x: '-130%',
        });
        tl6.set(".style-6-img-four", {
            x: '-130%',
            y: '-300%'
        })
        
        // // 1# motion
        tl6.to(".style-6-img-one", { 
            x: '130%',
            ease: "power4.inOut",
            duration: 3, 
            delay: 5
        });
        tl6.to(".style-6-img-two", { 
            x: '0%',
            ease: "power4.inOut",
            duration: 3, 
        }, "<");
        
        // // 2# motion
        tl6.to(".style-6-img-two", {
            x: '130%',
            ease: "power4.inOut",
            duration: 3, 
        });
        tl6.to(".style-6-img-three", { 
            x: '0%',
            ease: "power4.inOut",
            duration: 3, 
        }, "<");
        
        // 3# motion
        tl6.set(".style-6-img-one", {
            y: '-130%',
            ease: "power4.inOut",
            duration: 3, 
        })
        tl6.to(".style-6-img-four", {
            x: '0%',
            ease: "power4.inOut",
            duration: 3, 
        }, "<")
        tl6.to(".style-6-img-three", { 
            x: '130%',
            ease: "power4.inOut",
            duration: 3, 
        }, "<");

    }

    style3();
    style4();
    style5();
    style6();

}

slideThreeImages();
slideFourImages();


// GSAP matchMedia
let mm = gsap.matchMedia(),
    breakPoint = 768;

mm.add({

    // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.,
    isDesktop: `(min-width: ${breakPoint}px)`,
    isMobile: `(max-width: ${breakPoint - 1}px)`,
    reduceMotion: "(prefers-reduced-motion: reduce)"
  
  }, (context) => {
  
    // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
    let { isDesktop, isMobile, isTablet } = context.conditions;
  
    // carousel zoom-in
    gsap.fromTo(".carousel-img", { 
        backgroundSize: isDesktop ? '100%' : '410%',
    }, {
        ease: "power1.inOut",
        duration: 12,
        yoyo: true,
        backgroundSize: isDesktop ? '130%' : '500%',
        repeat: -1,
    })

    return () => { 
        // optional
    };
        
}); 

// jQuery
$(document).ready(() => {
  
    // bts collapse
    $('#btsCollapse1').on("click", () => {
        // $('#btsCollapseText1').css("display", "block");
        $('#btsCollapseText1').slideToggle(250);
        $('#btsCollapseText2').slideUp(250);
        $('#btsCollapseText3').slideUp(250);
        
    })
    
    $('#btsCollapse2').on("click", () => {
        $('#btsCollapseText2').slideToggle(250);
        $('#btsCollapseText1').slideUp(250);
        $('#btsCollapseText3').slideUp(250);

    })

    $('#btsCollapse3').on("click", () => {
        $('#btsCollapseText3').slideToggle(250);
        $('#btsCollapseText1').slideUp(250);
        $('#btsCollapseText2').slideUp(250);

    })

    $('#green').on("click", (event) => {
        $(event.currentTarget).hide();
    })

    $('#footerHouseFill').hide();
    
    // footer house icon
    $('#footerHouseLink').on("mouseenter", () => {
        $('#footerHouseFill').show();
        $('#footerHouseNoFill').hide();
    })
    
    $('#footerHouseFill').on("mouseleave", () => {
        $('#footerHouseNoFill').show();
        $('#footerHouseFill').hide();
        
    })

  
});