export function createBoard() {
    const flexContainer = document.querySelector('#flex-container');

    const boardDiv = document.createElement('div');
    const playerGrid = createGrid();
    const computerGrid = createGrid();

    playerGrid.classList.add("playersGrid")
    computerGrid.classList.add("playersGrid");
    
    boardDiv.classList.add('gameBoard');
    boardDiv.appendChild(playerGrid);
    boardDiv.appendChild(computerGrid);

    flexContainer.appendChild(boardDiv);
}

function createGrid() {
    const grid = document.createElement("div");
    grid.classList.add("playersGrid");

    for (let i = 0; i < 100; i++) {
        const cell = document.createElement("div");
        cell.classList.add("boardCell");
        grid.appendChild(cell);
    }

    return grid;
}
