const grid = document.querySelector(".grid");
const dropDown = document.getElementById('input-list')

let currentMode = 'eraser'


// Make grid
function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.addEventListener('mouseover', changeColor)
        grid.appendChild(gridElement);
    }
}

//grid size adjustment than clears
function sliderChange(val) {
    document.getElementById('output').innerHTML = `${val} x ${val}`;
    setupGrid(val);
    clearGrid();
}

//change current color of grid
function changeColor(e) {
    if (currentMode === 'solidColor') {
        let currentColor = document.querySelector('.colorSelect').value;
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'ranColor') {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        e.target.style.backgroundColor = "#" + randomColor;
    } else if (currentMode === 'eraser') {
        e.target.style.backgroundColor = "";
    }
}

// clear grid 
function clearGrid() {
    const elements = document.querySelectorAll('div');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "";
    }
}

function setCurrentMode(newMode) {
    currentMode = newMode;
}







// event listeners for buttons
document.getElementById('clear-btn').addEventListener('click', clearGrid);
dropDown.onchange = (e) => setCurrentMode(e.target.value);