import { Player } from '../components/player.js';
import { createBoardUI } from '../ui/boardUI.js';

export class gameController {
    constructor() {
        this.human = new Player('human');
        this.computer = new Player('computer');
    }

    startGame() {
        createBoardUI(this.human, this.computer);
    }
}