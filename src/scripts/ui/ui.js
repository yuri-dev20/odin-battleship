import { createBoardUI } from "./board.js";
import { GameBoard } from "../gameLogic/gameBoard.js";

export function initUI() {

    const playBtn = document.querySelector('.play');

    playBtn.addEventListener('click', () => {

        playBtn.classList.toggle('disable');

        const playerBoard = new GameBoard();
        const computerBoard = new GameBoard();

        playerBoard.placeShips();
        computerBoard.placeShips();

        createBoardUI(playerBoard, computerBoard);
    });
}