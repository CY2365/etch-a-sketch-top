let squaresPerSide = 16;
let numberOfSquares = squaresPerSide * squaresPerSide;
let grid = document.querySelector('.grid');

function createGrid() {
    while (grid.firstChild){
        grid.removeChild(grid.lastChild)
    }
    for (i = 0; i < numberOfSquares; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        grid.appendChild(square)
        console.log(i)
    }
}

function addHover() {
    let allSquares = document.querySelectorAll('.square')
    allSquares.forEach((sq) => {
        sq.addEventListener('mouseover', function(){
            sq.classList.add('hover')
        })
    })
}

function clearGrid() {
    let clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', function() {
        let allSquares = document.querySelectorAll('.square')
        allSquares.forEach((sq) => {
            sq.classList.remove('hover')
        })
    })
}

function changeGrid() {
    let changeButton = document.querySelector('#squareSide');
    changeButton.addEventListener('click', function() {
        let sides = Number(prompt('Insert squares per side.(Min: 4 Max: 100)'));
        if (isNaN(sides)) {
            alert('That\'s not a number..')
            return
        } if (sides > 100) {
            alert('Maximum is 100..')
            return
        } if (sides < 4) {
            alert('Minimum is 4..')
            return
        }
        squaresPerSide = Number(sides);
        numberOfSquares = squaresPerSide * squaresPerSide;
        init()
    })
}

function init() {
    createGrid()
    grid.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`
    console.log(squaresPerSide)
    addHover()
    clearGrid()
}

init()
changeGrid()

