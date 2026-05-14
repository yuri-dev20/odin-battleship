import { Player } from "./player.js";

describe('Player', () => {
    test('should create a real player', () => {
        const player = new Player('human');
        expect(player.type).toBe('human');
    });

    test('should create a computer player', () => {
        const computer = new Player('computer');
        expect(computer.type).toBe('computer');
    });

    test('should create a game board for player', () => {
        const player = new Player('human');
        expect(player.board).toBeDefined();
    });

    test('should place ships automatically', () => {
        const player = new Player('human');
        const hasShips = player.board.grid.some(row => 
            row.some(cell => cell !== null)
        );

        expect(hasShips).toBe(true);
    });
});