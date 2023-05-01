gsap.registerPlugin(ScrollTrigger);

let spritesheet1 = document.getElementById("spritesheet1");
const chapitre1 = document.getElementById("chapitre1");


gsap.timeline({scrollTrigger: {
    pin:true,
    scrub:true,
    trigger:chapitre1,
    end: "600% top",
    onUpdate: (self) => {
        if(self.direction == 1){
                    spritesheet1.classList.add('is-running');
                    spritesheet1.classList.remove('reverse');
        }
        else{
            spritesheet1.classList.add('reverse');
            spritesheet1.classList.remove('is-running');
        }
        window.clearTimeout(timer1);
        timer1 = setTimeout(timerCh1, 250);
        spritesheet1.addEventListener("animationend", () => {
            spritesheet1.classList.add("walk");
            spritesheet1.classList.remove("rise");
        })
    }
}})
.fromTo(chapitre1, {backgroundPositionX: 0}, {backgroundPositionX: "-180vw"})
.fromTo(document.querySelector(".porte"), {x: 0}, {x: "-180vw"}, '<')


let timer1;
function timerCh1() {
    spritesheet1.classList.remove('is-running', 'reverse');
}

/*///////////////////////////////////////////////
CHAPITRE 2
//////////////////////////////////////////////// */


const circle = document.querySelector(".circle");
const chapitre2 = document.getElementById("chapitre2");
const buildingsArr = document.querySelectorAll(".building");

gsap.fromTo(circle, {y: 5, opacity: 0}, {y: 90, opacity: 1, repeat: -1, duration: 2.5, ease: "sine inOut"})

gsap.timeline({scrollTrigger: {
    pin:true,
    scrub:true,
    trigger:chapitre2,
    end:"500% top"
}})
.fromTo("#building1", {y:"100%", x:"100vw"}, {y:"0", duration: 2, ease: "sine.out"})
.to("#building1", {x:"-20vw", duration:5, ease:"none"}, "<0.1")
.fromTo("#building2", {y:"100%", x:"100vw"}, {y:"0", duration: 2, ease: "sine.out"}, "-=5")
.to("#building2", {x:"-20vw", duration:5, ease:"none"}, "<0.1",)
.fromTo("#building3", {y:"100%", x:"100vw"}, {y:"0", duration: 2, ease: "sine.out"}, "-=4.8")
.to("#building3", {x:"-20vw", duration:5, ease:"none"}, "<0.1")
.fromTo("#building4", {y:"100%", x:"100vw"}, {y:"0", duration: 2, ease: "sine.out"}, "-=4.9")
.to("#building4", {x:"-20vw", duration:5, ease:"none"}, "<0.1")
.fromTo("#building5", {y:"100%", x:"100vw"}, {y:"0", duration: 2, ease: "sine.out"}, "-=4.5")
.to("#building5", {x:"-20vw", duration:5, ease:"none"}, "<0.1")
.fromTo("#building6", {y:"100%", x:"100vw"}, {y:"0", duration: 2, ease: "sine.out"}, "-=4.7")
.to("#building6", {x:"-20vw", duration:5, ease:"none"}, "<0.1")
.fromTo("#building7", {y:"100%", x:"100vw"}, {y:"0", duration: 2, ease: "sine.out"}, "-=5.4")
.to("#building7", {x:"-20vw", duration:5, ease:"none"}, "<0.1");

gsap.timeline({repeat:-1})
.from("#auto1", {x:"-150vw", duration:4, ease: "sine.inOut"})
.from("#auto2", {x:"-150vw", duration:4, ease:"sine.inOut"}, "-=3")
.from("#auto3", {x:"-150vw", duration:4, ease:"sine.inOut"}, "-=3")

gsap.fromTo(".poisson", {rotation:5}, {rotation:-5, yoyo:true, repeat:-1, ease:"sine.inOut", duration:2})
gsap.from("#poisson1", {x:"-50vw", duration: 60})
gsap.from("#poisson2", {x:"-50vw", duration: 60})

gsap.fromTo("#soleil", {scale: 0.9}, {scale: 1.1, duration:3, yoyo:true, ease:"sine.inOut", repeat:-1})

gsap.fromTo(".nuage", {opacity:0.6}, {opacity: 1, duration:2, yoyo:true, ease:"sine.inOut", repeat:-1})
gsap.fromTo(".nuage", {y:5}, {y:-5, duration:3, yoyo:true, ease:"sine.inOut", repeat:-1, stagger:1})