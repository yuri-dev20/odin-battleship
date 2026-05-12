export function createBoard() {
    const flexContainer = document.querySelector('#flex-container');

    const boardDiv = document.createElement('div');
    const playerGrid = document.createElement('div');
    const computerGrid = document.createElement('div');

    playerGrid.textContent = "PLAYER GRID";
    computerGrid.textContent = "COMPUTER GRID";
    
    boardDiv.classList.add('gameBoard');
    boardDiv.appendChild(playerGrid);
    boardDiv.appendChild(computerGrid);

    flexContainer.appendChild(boardDiv);
}