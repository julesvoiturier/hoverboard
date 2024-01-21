let body = document.querySelector("body")
let container = document.querySelector("#container")
let div = document.createElement("DIV")

body.style.background ="black"
body.style.display ="flex"
body.style.height = "100vh"
body.style.flexDirection = "column"
body.style.justifyContent = "center"
body.style.alignItems = "center"

container.style.width = "70%"
container.style.height = "500px"
container.style.display = "flex"
container.style.flexWrap = "wrap"
container.style.margin = "2px"
container.style.overflow = "hidden"

div.style.width = "15px"
div.style.height = "15px"
div.style.background = "rgb(20 ,20 ,20)"
div.style.margin = "0px"
div.style.transition = "0.3s"

div.setAttribute("class", "square")
body.appendChild(container)

for(let i = 0; i < 6000; i++){
    container.appendChild(div.cloneNode(true));
}



let colors = ["rgb(255, 206, 57)", "rgb(255, 229, 81)", "rgb(255, 217, 0)", "rgb(255, 191, 0)" ,"rgb(255, 102, 0)"]

let color1
let color2
let color3
let color4
let color5


container.addEventListener("mouseover", (e) => {

    if (e.target.className == "square") {
        color1 = colors[Math.floor(Math.random() * colors.length)];
        e.target.style.background = color1
    
        color2 = colors[Math.floor(Math.random() * colors.length)];
        e.target.previousElementSibling.style.background = color2
    
        color3 = colors[Math.floor(Math.random() * colors.length)];
        e.target.previousElementSibling.previousElementSibling.style.background = color3
    
        color4 = colors[Math.floor(Math.random() * colors.length)];
        e.target.nextElementSibling.style.background = color4
    
        color5 = colors[Math.floor(Math.random() * colors.length)];
        e.target.nextElementSibling.nextElementSibling.style.background = color5
    }
})

container.addEventListener("mouseout", (e) => {
    setTimeout(() => {

        if (e.target.className == "square") {
            e.target.style.transition = "0.2s ease-out"
            e.target.style.background = "rgb(20, 20, 20)"
    
            e.target.previousElementSibling.style.transition = "0.2s ease-out"
            e.target.previousElementSibling.style.background = "rgb(20, 20, 20)"
    
            e.target.previousElementSibling.previousElementSibling.style.transition = "0.2s ease-out"
            e.target.previousElementSibling.previousElementSibling.style.background = "rgb(20, 20, 20)"
    
            e.target.nextElementSibling.style.transition = "0.2s ease-out"
            e.target.nextElementSibling.style.background = "rgb(20, 20, 20)"
    
            e.target.nextElementSibling.nextElementSibling.style.transition = "0.2s ease-out"
            e.target.nextElementSibling.nextElementSibling.style.background = "rgb(20, 20, 20)"
    
        }
    }, 200)
})



