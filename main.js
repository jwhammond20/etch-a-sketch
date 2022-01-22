const grid = document.querySelector(".grid");

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        // gridElement.addEventListener('mouseover', changeColor)
        grid.appendChild(gridElement)
    }
}
function sliderChange(val) {
    document.getElementById('output').innerHTML = val;
    setupGrid(val);
}

document.getElementById('slider').value = 16;



