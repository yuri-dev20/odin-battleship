export function createBoardUI(playerBoard, computerBoard) {
    const flexContainer = document.querySelector('#flex-container');

    const boardDiv = document.createElement('div');

    const playerGrid = createGrid(playerBoard, true);
    const computerGrid = createGrid(computerBoard, false);

    boardDiv.classList.add('gameBoard');

    boardDiv.appendChild(playerGrid);
    boardDiv.appendChild(computerGrid);

    flexContainer.appendChild(boardDiv);
}

function createGrid(board, showShips) {
    const grid = document.createElement("div");

    grid.classList.add("playersGrid");

    for (let row = 0; row < 10; row++) {

        for (let col = 0; col < 10; col++) {

            const cell = document.createElement("div");

            cell.classList.add("boardCell");

            cell.dataset.x = row;
            cell.dataset.y = col;

            const currentCell = board.grid[row][col];

            if (showShips && currentCell !== null) {
                cell.classList.add("ship");
            }

            grid.appendChild(cell);
        }
    }

    return grid;
}