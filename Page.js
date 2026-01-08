const svg = document.querySelector("svg");
const sidebar = document.querySelector(".container2");
const links = document.querySelectorAll("li");


links.forEach(link => {
    link.addEventListener("mouseover", ()=>{
        link.style.border = "2px dashed red";
    });

    link.addEventListener("mouseout", ()=>{
        link.style.border="";
    });
})

svg.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
})

svg.addEventListener("click", ()=>{
    svg.classList.toggle("open");
})

const session3 = document.querySelector(".sec3");
const squares = document.querySelectorAll(".square");



session3.addEventListener("mouseover", ()=>{
    squares.forEach(square =>{
        square.classList.add("open");
    })
})

session3.addEventListener("mouseout", ()=>{
    squares.forEach(square =>{
        square.classList.remove("open");
    })
})