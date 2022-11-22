let gridSize = 16;
const reset = document.querySelector("#reset");
const container = document.querySelector("#container");

function createPixel() {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = "#FF9F9F";
    })
    container.appendChild(pixel);
}

for (let i = 1; i <= (gridSize * gridSize); i++) {
    createPixel();
}

const pixel = document.querySelectorAll(".pixel");

reset.addEventListener("click", () => {
    for (let i = 0; i < pixel.length; i++) {
        pixel[i].style.backgroundColor = "#FFFAD7";
    }
})