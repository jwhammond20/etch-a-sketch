const grid = document.querySelector(".grid");
const dropDown = document.getElementById('input-list')
const checkbox = document.getElementById("gridlines")


// Make grid
function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('divGrid');
        grid.appendChild(gridElement);
        gridElement.addEventListener('mouseover', changeColor)
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
    const elements = document.querySelectorAll('divGrid');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "";
    }
    resetGridLines();
}

function changeBackground() {
    const backGround = document.querySelectorAll('.grid');
    for (var i = 0; i < backGround.length; i++) {
        let backColor = document.querySelector('.colorSelect').value;
        backGround[i].style.backgroundColor = backColor;
    }
}

function resetGridLines() {
    let checkbox = document.getElementById('gridlines');
    checkbox.checked = false;
    gridLines();
}

function setCurrentMode(newMode) {
    currentMode = newMode;
}

function gridLines() {
    const outlines = document.querySelectorAll('divGrid');
    if (this.checked) {
        for (var i = 0; i < outlines.length; i++)
            outlines[i].style.outline = "1px solid rgba(194, 195, 195, 0.3)";
    } else {
        for (var i = 0; i < outlines.length; i++)
            outlines[i].style.outline = "0px";
        grid.style.gridGap = "0px";
    }
}



// event listeners for buttons
document.getElementById('clear-btn').addEventListener('click', clearGrid);
document.getElementById('back-btn').addEventListener('click', changeBackground);
dropDown.onchange = (e) => setCurrentMode(e.target.value);
checkbox.addEventListener('change', gridLines);
for(var i of document.querySelectorAll('[type=checkbox]')) { i.checked = false; }