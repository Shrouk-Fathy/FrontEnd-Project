const Img = document.querySelector(".mode img");
const Body = document.body;
const Divs = document.querySelectorAll("div.dark-mode");
const H1 = document.querySelectorAll("h1");
const H2 = document.querySelectorAll("h2");
const H3 = document.querySelectorAll("h3");
const P = document.querySelectorAll("p");
function PageMood(){
    Body.classList.toggle("dark-mode");
    // body.classList.toggle("light");

    Divs.forEach((div) => {
        div.classList.toggle("dark-mode");
        div.classList.toggle("light-mode");
    });

    H1.forEach((h) => {
        h.classList.toggle("light");
        h.classList.toggle("dark");
    });
    H2.forEach((h) => {
        h.classList.toggle("light");
        h.classList.toggle("dark");
    });
    H3.forEach((h) => {
        h.classList.toggle("light");
        h.classList.toggle("dark");
    });

    P.forEach((p) => {
        p.classList.toggle("light");
        p.classList.toggle("dark");
    });

    if(Body.classList.contains("dark-mode")){
        Img.src = "images/moon.png";
    }
    else{
        Img.src = "images/sun.jpg";
    }
}