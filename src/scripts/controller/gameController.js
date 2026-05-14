import { Player } from '../components/player.js';
import { createBoardUI } from '../ui/boardUI.js';

export class gameController {
    constructor() {
        this.human = new Player('human');
        this.computer = new Player('computer');

        this.currentTurn = "human";
        this.gameOver = false;
    }

    startGame() {
        createBoardUI(this.human.board, this.computer.board, (x, y, cell) => this.handlePlayerAttack(x, y, cell));
    }

    endGame(message) {
        this.gameOver = true;
        alert(message);
    }

    switchTurn() {
        this.currentTurn = this.currentTurn === "human" ? "computer" : "human";
    }

    getCell(owner, x, y) {
        const grid = document.querySelector(`[data-owner="${owner}"]`);
        return grid.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    }

    handlePlayerAttack(x, y, cell) {
        if (this.currentTurn !== "human" || this.gameOver) return;
        
        const result = this.computer.board.receiveAttack(x, y);

        if (result === 'hit') {
            cell.classList.add("hit");
        }

        if (result === 'miss') {
            cell.classList.add("miss");
        }

        if (this.computer.board.allShipsSunk()) {
            this.endGame("Player wins!");
            return;
        }

        this.handleComputerTurn();
        this.switchTurn();
    }

    handleComputerTurn() {
        if (this.gameOver) return;

        let x;
        let y;
        let result;

        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);

            result = this.human.board.receiveAttack(x, y);

        } while (result === 'already attacked');

        const cell = this.getCell("human", x, y);

        if (result === "hit") {
            cell.classList.add("hit");
        }

        if (result === "miss") {
            cell.classList.add("miss");
        }

        if (this.human.board.allShipsSunk()) {
            this.endGame("Computer wins!");
            return;
        }

        this.switchTurn();
    }
}