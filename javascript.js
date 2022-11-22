let gridSize = 16;

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

const pixel = document.querySelector(".pixel");
