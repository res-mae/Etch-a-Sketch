let gridSize = 16;
let eraserActive = false;

const grid = document.querySelector(".grid");

const input = document.querySelector("#size-input");
const resizeButton = document.querySelector(".resize-button");
const resetButton = document.querySelector(".reset-button");
const eraserButton = document.querySelector(".eraser-button");
const drawButton = document.querySelector(".draw-button");

eraserButton.addEventListener("click", () => {
    eraserActive = true;
})

drawButton.addEventListener("click", () => {
    eraserActive = false;
})

//reset the grid
resetButton.addEventListener("click", () => {
    grid.innerHTML = "";
    eraserActive = false;
    createGrid();
})

// resize the grid
resizeButton.addEventListener("click", () => {
    gridSize = Number(input.value);

    if(gridSize < 1 || gridSize > 100 || isNaN(gridSize)) {
        return;
    }
    eraserActive = false;
    grid.innerHTML = "";
    createGrid();
})

// function to create grid
function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {

        const squareWidth = 100 / gridSize;

        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        squareDiv.style.width = `${squareWidth}%`;
        squareDiv.style.height = `${squareWidth}%`;

        grid.appendChild(squareDiv);

        squareDiv.addEventListener("mouseover", () => {
            squareDiv.style.backgroundColor = eraserActive ? "white" : "black";
        });
    }
}

// initial grid
createGrid();
