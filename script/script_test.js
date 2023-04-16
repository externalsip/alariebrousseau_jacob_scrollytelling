let body = document.querySelector("body");

window.addEventListener("scroll", () => {
    body.classList.add("is-scrolling");    
    window.clearTimeout(timer);
    timer = setTimeout(removeClass, 100);
});
let timer = setTimeout(removeClass, 100);
function removeClass(){
    console.log("removed");
    body.classList.remove("is-scrolling");
}
