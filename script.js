gsap.fromTo("#green", { 
    x: 100,
    fill: 'blue',
    scale: .5,
  }, {
    x: 400,
    y: 100,
    duration: 2,
    fill: 'green',
    scale: 1,
    rotation: 360
  });

// let tl = gsap.timeline();

// gsap.fromTo(".carousel-img", {
//     backgroundSize: '100%',
//     ease: "power1.in"
// }, {
//     duration: 12.1,
//     backgroundSize: '120%',
//     repeat: -1,
// })


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