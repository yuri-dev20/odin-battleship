import { GameBoard } from "./gameBoard";

describe('Gameboard', () => {
    test('do the board exist', () => {
        const gameBoard = new GameBoard();

        expect(gameBoard).toBeDefined();
        expect(gameBoard.grid).toBeDefined();
    });

    test('should create a 10x10 grid', () => {
        const gameBoard = new GameBoard();

        expect(gameBoard.grid.length).toBe(10);
        expect(gameBoard.grid[0].length).toBe(10);
    });
});