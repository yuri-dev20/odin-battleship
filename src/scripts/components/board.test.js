import { createBoard } from "./board.js";

describe('create game board', () => {
    test('should create board inside flex container', () => {
        // Simulation
        document.body.innerHTML = `<div id="flex-container"></div>`;
        
        createBoard();

        const flexContainer = document.querySelector('#flex-container');
        const board = flexContainer.querySelector('.gameBoard');

        expect(board).not.toBeNull();
        expect(flexContainer.children.length).toBe(1);
        expect(board.children.length).toBe(2);
    });
});