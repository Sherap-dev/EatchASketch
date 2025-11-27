const resizeBtn = document.querySelector("#resize");
const resetBtn = document.querySelector("#reset");
const randomBtn = document.querySelector("#randomColor");
const gridContainer = document.querySelector("#grid-container")
const grid = document.querySelector("#grid")

const initialSize = 16;
let size = undefined;
const gridWidth = grid.clientWidth;
const gridHeight = grid.clientHeight;

window.addEventListener("load", () =>{
    makePixels(initialSize)
})

resizeBtn.addEventListener("click",() => {
    const sizeInput = Math.floor(prompt("please choose a number to resize the sketch pad"))
    size = sizeInput
    if (isNaN(size) || size <= 0){
        alert("please add a valid number")
    }
   makePixels(size)

})

resetBtn.addEventListener("click", () => {
    makePixels(initialSize)
})

function makePixels(size){
    gridContainer.innerHTML = "";

        for(let i = 0; i < size * size; i++){
            const pixel = document.createElement("div")
            const pixelSize = gridWidth / size;
            pixel.style.width = `${pixelSize}px`
            pixel.style.height = `${pixelSize}px`
            pixel.classList.add("pixel")
            gridContainer.appendChild(pixel)
        }
    }

