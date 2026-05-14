import { createBoardUI } from "./boardUI.js";
import { GameBoard } from "../components/gameBoard.js";

export function initUI() {

    const playBtn = document.querySelector('.play');
    const titles = document.querySelector('.titles');

    playBtn.addEventListener('click', () => {

        playBtn.classList.toggle('disable');

        titles.style.display = 'flex';

        const playerBoard = new GameBoard();
        const computerBoard = new GameBoard();

        playerBoard.placeShips();
        computerBoard.placeShips();

        createBoardUI(playerBoard, computerBoard);
    });
}