gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
     // x: 1000,
     duration: 8,
     scrollTrigger: {
          trigger: '.square2',
          start: "top 80%",
          end: "top 20%",
          scrub: true, 
          toggleActions: "restart pause resume complete",   
          pin: ".square",
          pinSpacing: true,
          markers: {
               startColor: "purple",
               endColor: "fuchsia",
               fontSize: "2rem"
          },
     }
})