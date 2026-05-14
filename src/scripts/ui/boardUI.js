export function createBoardUI(playerBoard, computerBoard, onPlayerAttack) {
    const flexContainer = document.querySelector('#flex-container');

    const boardDiv = document.createElement('div');

    const playerGrid = createGrid(playerBoard, true);
    const computerGrid = createGrid(computerBoard, false);

    playerGrid.dataset.owner = "human";
    computerGrid.dataset.owner = "computer";

    computerGrid.addEventListener("click", (e) => {
        const cell = e.target;

        if (!cell.classList.contains("boardCell")) return;

        const x = Number(cell.dataset.x);
        const y = Number(cell.dataset.y);

        onPlayerAttack(x, y, cell);
    });

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