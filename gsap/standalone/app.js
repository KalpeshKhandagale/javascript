gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    // markers: true,
    start: "top 6%",
    trigger: ".panel",
    toggleClass: { targets: "nav", className: "nav-active" },
});