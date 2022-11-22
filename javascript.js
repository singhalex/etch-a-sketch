let gridSize = 16;
let flexBasis;
const reset = document.querySelector("#reset");
const container = document.querySelector("#container");
const setGridSize = document.querySelector("#set-grid");
const rainbow = document.querySelector("#rainbow");
const basic = document.querySelector("#basic");

function setFlexBasis(gridSize) {
    flexBasis = 1 / gridSize * 100;
}

function createPixel() {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    setFlexBasis(gridSize)
    pixel.style.flexBasis = `${flexBasis}%`;
    container.appendChild(pixel);
}

function createGrid() {
    for (let i = 1; i <= (gridSize * gridSize); i++) {
    createPixel();
    }
}

function removeGrid() {
    const pixels = document.querySelectorAll(".pixel");
    for (let i = 0; i < pixels.length; i++) {
        container.removeChild(pixels[i]);
    }
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function basicEtch() {
    const pixels = document.querySelectorAll(".pixel");
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener("mouseover", () => {
            pixels[i].style.backgroundColor = "#FF9F9F";
        })
    }
}

function defaultPixelColor() {
    const pixels = document.querySelectorAll(".pixel");
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = "#FFFAD7"
    }
}

function rainbowEtch() {
    const pixels = document.querySelectorAll(".pixel");
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener("mouseover", () => {
            pixels[i].style.backgroundColor = randomColor();
        })
    }
}

createGrid();
basicEtch();

setGridSize.addEventListener("click", () => {
    gridSize = prompt("Enter the grid size:");
    removeGrid();
    createGrid();
    basicEtch();
})

rainbow.addEventListener("click", rainbowEtch)
basic.addEventListener("click", basicEtch);
reset.addEventListener("click", defaultPixelColor)