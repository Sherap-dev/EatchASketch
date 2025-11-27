const resizeBtn = document.querySelector("#resize");
const resetBtn = document.querySelector("#reset");
const randomBtn = document.querySelector("#randomColor");
const gridContainer = document.querySelector("#grid-container");
const grid = document.querySelector("#grid");

const initialSize = 16;
let size = undefined;
const gridWidth = grid.clientWidth;
const gridHeight = grid.clientHeight;

let randomColorClick = false;

window.addEventListener("load", () =>{
    makePixels(initialSize);
})

resizeBtn.addEventListener("click",() => {
    const sizeInput = Math.floor(prompt("Please choose a number between 1 and 100 to set the pixel size"));
    size = sizeInput;

    if(size === null){
        return
    }

    if (isNaN(size) || size <= 0 || size >= 100){
        makePixels(initialSize);
        alert("Please Type A Valid Number");
        return;
    }
   makePixels(size);

})

resetBtn.addEventListener("click", () => {
    makePixels(initialSize);
    randomColorClick = false;
})

randomBtn.addEventListener("click", () =>{
    randomColorClick = true;
   
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


            pixel.addEventListener("mouseover", () =>{
                 
                if(randomColorClick){
                    randomColor()
                    pixel.style.backgroundColor = randomColor();
                    
                }else if(!randomColorClick){
                    pixel.style.backgroundColor = "#494949";
                }
            })
        }
    }
    

function randomColor(){
    let hexDecimals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A","B","C","D","E","F"];
    let color = "#";

    for(let i = 0; i < 6; i++){
        let randomNum = Math.floor(Math.random() * hexDecimals.length);
        color += (hexDecimals[randomNum]);
    }
    return color;
}


