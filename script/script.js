const circle = document.querySelector(".circle");
const chapitre2 = document.getElementById("chapitre2");

gsap.fromTo(circle, {y: 5, opacity: 0}, {y: 90, opacity: 1, repeat: -1, duration: 2.5, ease: "sine inOut"})

gsap.timeline({scrollTrigger: {
    pin:true,
    scrub:0.5,
    trigger:chapitre2,
}})
.fromTo("#buidling1", {y:"100vh", x:"100vw"}, {y:"bottom", x:"0%"})