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

    test('should register a missed attack', () => {
        const gameBoard = new GameBoard();

        gameBoard.receiveAttack(0, 0);

        expect(gameBoard.missedAttacks).toContainEqual([0, 0]);
    });

    test('should hit a ship', () => {
        const gameBoard = new GameBoard();
        const shipObj = gameBoard.ships[0];

        gameBoard.grid[0][0] = shipObj;
        gameBoard.receiveAttack(0, 0);

        expect(shipObj.ship.hitsTaken).toBe(1);
    });

    test('should register a successful attack', () => {
        const gameBoard = new GameBoard();
        const shipObj = gameBoard.ships[0];

        gameBoard.grid[2][3] = shipObj;
        gameBoard.receiveAttack(2, 3);

        expect(gameBoard.successfulAttacks).toContainEqual([2, 3]);
    });

    test('should not allow repeated attacks', () => {
        const gameBoard = new GameBoard();

        gameBoard.receiveAttack(1, 1);
        const result = gameBoard.receiveAttack(1, 1);

        expect(result).toBe('already attacked');
    });

    test('should return hit when ship is attacked', () => {
        const gameBoard = new GameBoard();
        const shipObj = gameBoard.ships[0];

        gameBoard.grid[4][4] = shipObj;
        const result = gameBoard.receiveAttack(4, 4);
        
        expect(result).toBe('hit');
    });

    test('should return miss when no ship is attacked', () => {
        const gameBoard = new GameBoard();

        const result = gameBoard.receiveAttack(5, 5);

        expect(result).toBe('miss');
    });
});