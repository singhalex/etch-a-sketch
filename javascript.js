let gridSize = 16;

const container = document.querySelector("#container");

function createPixel(text) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.textContent = text;
    pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = "#FF9F9F";
    })
    container.appendChild(pixel);
}

for (let i = 1; i <= (gridSize * gridSize); i++) {
    createPixel(i);
}

const pixel = document.querySelector(".pixel");
