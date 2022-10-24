var btn = document.querySelector("#back-to-top");

window.addEventListener("scroll", (event)=> {
    if (window.scrollY == 0){
        btn.style.display = "none";
    } else {
        btn.style.display = "block";
    }
})

btn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        left: 0, 
        behavior: "smooth"
    });
});