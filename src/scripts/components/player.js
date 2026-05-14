import { GameBoard } from "./gameBoard.js";

export class Player {
    constructor(type) {
        this.type = type;
        this.board = new GameBoard();
        this.board.placeShips();
    }
}