import { gameController } from "../controller/gameController.js";

export function initUI() {
    const playBtn = document.querySelector('.play');
    const titles = document.querySelector('.titles');

    playBtn.addEventListener('click', () => {
        playBtn.classList.add('disable');
        titles.style.display = 'flex';

        const game = new gameController();
        game.startGame();
    });
}