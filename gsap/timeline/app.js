gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline({
//     scrollTrigger : {
//         trigger: ".box",
//         markers: true,
//         start: "top 80%;",
//         end: "top 30%",
//         scrub: 1
//     }
// }); 

// tl.to(".box", {x:500, duration: 5})
//   .to(".box", {y:200, duration: 2})
//   .to(".box", {x:0, duration: 2})



ScrollTrigger.create({
    markers: true,
    start: "top 80%",
    end: "top 50%",
    trigger: ".box",
    onUpdate: (self) => console.log(self)
    // onEnter: () => console.log("Enter!"),
    // onLeave: () => console.log("Leave!"),
    // onEnterBack: () => console.log("enterBack!"),
    // onLeaveBack: () => console.log("LeaveBack!")
})