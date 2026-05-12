import { createBoard } from "../components/board.js";

export function initUI() {
    const playBtn = document.querySelector('.play');
    
    playBtn.addEventListener('click', () => {
        playBtn.classList.toggle('disable');
        createBoard();
    });
};