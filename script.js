let gridSize = 16;

const grid = document.querySelector(".grid");

const input = document.querySelector("#size-input");
const resizeButton = document.querySelector(".resize-button");

// resize the grid 
resizeButton.addEventListener("click", () => {
    gridSize = input.value;

    if(gridSize > 100 || gridSize === "") {
        return;
    }

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
            squareDiv.style.backgroundColor = "black";
        });
    }
}

// initial grid
createGrid();
