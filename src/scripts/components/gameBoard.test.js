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

    test('should create all ships', () => {
        const gameBoard = new GameBoard();

        expect(gameBoard.ships).toHaveLength(5);
        expect(gameBoard.ships[0].name).toBe('carrier');
    });

    test('should place ships and assign position', () => {
        const gameBoard = new GameBoard();

        gameBoard.placeShips();
        const carrier = gameBoard.ships.find(ship => ship.name === 'carrier');

        expect(carrier.position).toBeDefined();
        expect(carrier.position.length).toBe(5);
    });

    test('should update grid when ships are placed', () => {
        const gameBoard = new GameBoard();

        gameBoard.placeShips();

        const hasShips = gameBoard.grid.some(row => 
            row.some(cell => cell !== null)
        );

        expect(hasShips).toBe(true);
    });
});