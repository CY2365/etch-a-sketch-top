let numberOfSquares = 16

// creates and returns one square
function createSquare() {
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.borderStyle = 'solid';
    square.style.borderColor = 'red';
    square.style.borderWidth = '1px';
    console.log(square);
    return square;
}

// creates a row
function createRow() {
    let row = document.createElement('div');
    row.classList.add('column');
    return row
}

// fills the grid with squares
function fillGrid(squares) {
    
    let grid = document.querySelector('.grid');
    for (i = 0; i < squares; i++) {
        grid.appendChild(createRow())
    }
    
    let colums = document.querySelectorAll('.column');
    colums.forEach((column) => {
        for (i = 0; i < squares; i++){
            column.appendChild(createSquare())
        }
    })
    
}

fillGrid(numberOfSquares);
