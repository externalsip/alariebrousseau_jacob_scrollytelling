gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
/*gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);*/
let timer;
let spritesheetArr = document.querySelectorAll(".spritesheet");
let spritesheetCh1 = document.querySelectorAll(".spritesheet1");
const chapitre1 = document.getElementById("chapitre1");


gsap.timeline({scrollTrigger: {
    pin:true,
    scrub:true,
    trigger:chapitre1,
    end: "600% bottom",
    onUpdate: (self) => {
        if(self.direction == 1){
                    spritesheetCh1.forEach(element => {
                        element.classList.add("is-running");
                        element.classList.remove("reverse");
                    })
        }
        else{
            spritesheetCh1.forEach(element => {
                element.classList.remove("is-running");
                element.classList.add("reverse");
            })
        }
        window.clearTimeout(timer);
        timer = setTimeout(timerRemove, 250);
    },
}})
.to("#spritesheet1-2", {opacity: 1, duration: 0})
.to("#spritesheet1-1", {opacity: 0, duration: 0})
.to("#spritesheet1-2", {backgroundPositionX: "-160vw", ease: SteppedEase.config(8), duration: 0.5})
.to("#spritesheet1-2", {opacity: 0, duration: 0})
.to("#spritesheet1-1", {opacity: 1, duration: 0}, "<")
.fromTo(chapitre1, {backgroundPositionX: 0}, {backgroundPositionX: "-120vw"}, '<')
.fromTo(document.querySelector(".porte"), {x: 0}, {x: "-120vw"}, '<')



/*///////////////////////////////////////////////
CHAPITRE 2
//////////////////////////////////////////////// */


const circle = document.querySelector(".circle");
const chapitre2 = document.getElementById("chapitre2");
const buildingsArr = document.querySelectorAll(".building");
let spritesheetCh2 = document.querySelectorAll(".spritesheet2")

gsap.fromTo(circle, {y: 5, opacity: 0}, {y: 90, opacity: 1, repeat: -1, duration: 2.5, ease: "sine inOut"})

gsap.timeline({scrollTrigger: {
    pin:true,
    scrub:true,
    trigger:chapitre2,
    end:"500% top",
    onUpdate: (self) => {
        if(self.direction == 1){
                    spritesheetCh2.forEach(element => {
                        element.classList.add("is-running");
                        element.classList.remove("reverse");
                    })
        }
        else{
            spritesheetCh2.forEach(element => {
                element.classList.remove("is-running");
                element.classList.add("reverse");
            })
        }
        window.clearTimeout(timer);
        timer = setTimeout(timerRemove, 250);
    },
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
.to("#building7", {x:"-20vw", duration:5, ease:"none"}, "<0.1")
.fromTo("#building8", {y:"100%", x:"100vw"}, {y:"0", duration: 2, ease: "sine.out"}, "-=5.6")
.to("#building8", {x:"-20vw", duration:5, ease:"none"}, "<0.1")
.fromTo("#building9", {y:"100%", x:"100vw"}, {y:"0", duration: 2, ease: "sine.out"}, "-=4.7")
.to("#building9", {x:"-20vw", duration:5, ease:"none"}, "<0.1")

let timer2;
function timerCh2() {
    spritesheetCh2.forEach(element => {
        element.classList.remove("reverse", "is-running");
    })
}

/*///////////////////////////////////////////////
CHAPITRE 3
//////////////////////////////////////////////// */

const chapitre3 = document.getElementById("chapitre3");
let spritesheetCh3 = document.querySelectorAll(".spritesheet3");

gsap.from("#auto1", {x:"-150vw", duration:4, ease: "sine.inOut", repeat: -1, scrollTrigger: chapitre3})
gsap.from("#auto2", {x:"-150vw", duration:5, ease:"sine.inOut", repeat: -1, scrollTrigger: chapitre3}, "-=3")
gsap.from("#auto3", {x:"-150vw", duration:2, ease:"sine.inOut", repeat: -1, scrollTrigger: chapitre3}, "-=3")

gsap.timeline({scrollTrigger: {
    trigger: chapitre3,
    pin:true,
    end:"400% top",
    toggleActions:"play complete reverse reset",
    onUpdate: (self) => {
        if(self.direction == 1){
                    spritesheetCh3.forEach(element => {
                        element.classList.add("is-running");
                        element.classList.remove("reverse");
                    })
        }
        else{
            spritesheetCh3.forEach(element => {
                element.classList.remove("is-running");
                element.classList.add("reverse");
            })
        }
        window.clearTimeout(timer);
        timer = setTimeout(timerRemove, 250);
    },
}})
.from("#arbre1", {x:"150vw", duration:5, ease:"none"})
.from("#arbre2", {x:"150vw", duration:5, ease:"none"}, "-=4.5")
.from("#arbre3", {x:"150vw", duration:5, ease:"none"}, "-=4.3")
.from("#arbre4", {x:"150vw", duration:5, ease:"none"}, "-=4.7")
.from("#arbre5", {x:"150vw", duration:5, ease:"none"}, "-=4.9")
.from("#arbre6", {x:"150vw", duration:5, ease:"none"}, "-=4")

/*///////////////////////////////////////////////
CHAPITRE 4
//////////////////////////////////////////////// */

const chapitre4 = document.getElementById("chapitre4")


/*gsap.fromTo(".ventSVG",{drawSVG: "0 0"}, {
    drawSVG:"0% 100%",
    duration: 2,
    repeat: -1,
    ease: "sine.inOut",
    opacity:0,
    stagger: 0.5,
    scrollTrigger: chapitre4,
});*/

gsap.timeline({scrollTrigger: {
    pin:true,
    scrub:true,
    trigger:chapitre4,
    end:"500% top",
    onUpdate: (self) => {
        if(self.direction == 1){
            document.querySelector("#spritesheet4-1").classList.add("is-running");
            document.querySelector("#spritesheet4-1").classList.remove("reverse");
        }
        else{
                document.querySelector("#spritesheet4-1").classList.add("reverse");
                document.querySelector("#spritesheet4-1").classList.remove("is-running");
        }
        window.clearTimeout(timer);
        timer = setTimeout(timerRemove, 250);
}}})
.fromTo(".spritesheet4div", {x: 0}, {x: "34vw"})
.to(".spritesheet4div", {x: "60vw", y:"-5vh"})
.to("#spritesheet4-1", {opacity: 0, duration: 0})
.to("#spritesheet4-2", {opacity: 1, duration: 0}, "<")
.to(".spritesheet4div", {y:"25vh"})


/*///////////////////////////////////////////////
CHAPITRE 5
//////////////////////////////////////////////// */

const chapitre5 = document.getElementById("chapitre5")

let hauteurChapitre5 = chapitre5.scrollHeight;

gsap.to("#poisson1", {motionPath: {
    path:"#motionPath1",
    align:"#motionPath1",
    autoRotate: true,
},
duration:60,
scrollTrigger: {
    trigger: chapitre5,
    toggleActions:"play complete restart restart",
}})
gsap.to("#poisson2", {motionPath: {
    path:"#motionPath2",
    align:"#motionPath2",
    autoRotate: true,
},
duration:60,
scrollTrigger: {
    trigger: chapitre5,
    toggleActions:"play complete restart restart",
}})


gsap.to('.spritesheet5div', {y: hauteurChapitre5 * (-1 * .20), scrollTrigger: {
    trigger:chapitre5,
    scrub:true,
    start: "25% bottom"
}})
gsap.to(".triangles_parralax", {y: hauteurChapitre5 * (-1 * .50), scrollTrigger: {
    trigger: chapitre5,
    scrub:true,
    start: "25% bottom",
}})

gsap.fromTo("#chapitre5", {backgroundPositionY: 0}, {backgroundPositionY: "100%", scrollTrigger: {
    trigger: chapitre5,
    scrub:true,
    start: "25% bottom",
}})

gsap.timeline({scrollTrigger: {
    scrub:true,
    pin:true,
    trigger: chapitre5,
    start:"bottom bottom",
    end: "500% top",
    onUpdate: (self) => {
        if(self.direction == 1){
            document.querySelector("#spritesheet5-3").classList.add("is-running");
            document.querySelector("#spritesheet5-3").classList.remove("reverse");
        }
        else{
                document.querySelector("#spritesheet5-3").classList.add("reverse");
                document.querySelector("#spritesheet5-3").classList.remove("is-running");
        }
        window.clearTimeout(timer);
        timer = setTimeout(timerRemove, 250);
}
}})
.to(".spritesheet5div2", {opacity: 1, duration: 1})

.to("#spritesheet5-3", {opacity: 0, duration: 0}, "<")
.to("#spritesheet5-2", {opacity: 1, duration: 0}, "<")
.to("#morphingSVG", {y: "-70vh", duration: 8})
//.to("#bubble", {morphSVG: "#cat", duration: 5}, '<')
.from(".spritesheet5div2", {y: "-200vh", duration: 4})
.to("#spritesheet5-2", {opacity: 0, duration: 0})
.to("#spritesheet5-3", {opacity: 1, duration: 0}, '<')
.fromTo(".spritesheet5div2", {x: 0, y: 0}, {x: "50vw", y: "-5vh", duration: 3})
.to(".spritesheet5div2", {y: "50vh"})
.to(".spritesheet5div2", {x: "-100vw"})
.to(".spritesheet5div2", {y: "-5vh"})
.to(".spritesheet5div2", {x: "20vw", duration: 9})
.to("#spritesheet5-3", {opacity: 0, duration: 0})
.to("#spritesheet5-2", {opacity: 1, duration: 0}, "<")
.to(".spritesheet5div2", {y: "-100vh", duration: 2});




/*///////////////////////////////////////////////
CHAPITRE 6
//////////////////////////////////////////////// */

const chapitre6 = document.getElementById("chapitre6");

gsap.fromTo("#soleil", {scale: 0.9}, {scale: 1.1, duration:3, yoyo:true, ease:"sine.inOut", repeat:-1, scrollTrigger: chapitre6})
gsap.fromTo(".nuageCh6", {opacity:0.6}, {opacity: 1, duration:2, yoyo:true, ease:"sine.inOut", repeat:-1, scrollTrigger: chapitre6})
gsap.fromTo(".nuageCh6", {y:5}, {y:-5, duration:3, yoyo:true, ease:"sine.inOut", repeat:-1, stagger:1, scrollTrigger: chapitre6})

gsap.timeline({scrollTrigger: {
    pin:true,
    scrub:true,
    trigger:chapitre6,
    end: "350% top"
}})
.to(".spritesheet6div", {y:"-160vh", duration:6})
.to(".spritesheet6div", {y:"0vh", duration:6})


/*///////////////////////////////////////////////
CHAPITRE 7
//////////////////////////////////////////////// */

const chapitre7 = document.getElementById("chapitre7");

gsap.timeline({scrollTrigger: {
    pin:true,
    scrub:true,
    trigger: chapitre7,
    end: "500% top",
    onUpdate: (self) => {
        if(self.direction == 1){
            document.querySelector("#spritesheet7-2").classList.add("is-running");
            document.querySelector("#spritesheet7-2").classList.remove("reverse");
            document.querySelector("#spritesheet7-3").classList.add("is-running");
            document.querySelector("#spritesheet7-3").classList.remove("reverse");
        }
        else{
                document.querySelector("#spritesheet7-2").classList.add("reverse");
                document.querySelector("#spritesheet7-2").classList.remove("is-running");
                document.querySelector("#spritesheet7-3").classList.add("reverse");
                document.querySelector("#spritesheet7-3").classList.remove("is-running");
        }
        window.clearTimeout(timer);
        timer = setTimeout(timerRemove, 250);
}

}})
.to(".spritesheet7div", {opacity: 0, duration:0})
.to("#spritesheet7-2", {opacity: 0, duration:0})
.to(".spritesheet7div", {opacity: 1, duration:1})
.to("#spritesheet7-1", {opacity: 1, duration:0})
.to(".spritesheet7div", {y: "125vh", duration: 7})
.to("#spritesheet7-1", {opacity: 0, duration:0})
.to("#spritesheet7-2", {opacity: 1, duration:0}, "<")
.to(".spritesheet7div", {x: "60vw", y: "115vmin", duration: 6})
.to("#spritesheet7-2", {opacity: 0, duration:0})
.to("#spritesheet7-3", {opacity: 1, duration:0}, "<")
.to("#spritesheet7-3", {backgroundPositionX: "-130vw", ease: SteppedEase.config(13), duration: 6});

gsap.fromTo(".nuageCh7", {opacity:0.6}, {opacity: 1, duration:2, yoyo:true, ease:"sine.inOut", repeat:-1, scrollTrigger: chapitre7})
gsap.fromTo(".nuageCh7", {y:5}, {y:-5, duration:3, yoyo:true, ease:"sine.inOut", repeat:-1, stagger:1, scrollTrigger: chapitre7})



/*///////////////////////////////////////////////
FONCTIONS
//////////////////////////////////////////////// */

function timerRemove() {
    spritesheetArr.forEach(element => {
        element.classList.remove("reverse", "is-running");
    })
}
