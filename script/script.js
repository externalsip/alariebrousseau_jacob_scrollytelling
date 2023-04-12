const circle = document.querySelector(".circle");

gsap.fromTo(circle, {y: 5, opacity: 0}, {y: 90, opacity: 1, repeat: -1, duration: 2.5, ease: "sine inOut"})