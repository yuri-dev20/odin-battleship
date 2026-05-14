import { createBoardUI } from "./boardUI.js";
import { GameBoard } from "../components/gameBoard.js";

describe('create game board', () => {
    test('should create board inside flex container', () => {
        // Simulation
        document.body.innerHTML = `<div id="flex-container"></div>`;

        const playerBoard = new GameBoard();
        const computerBoard = new GameBoard();

        createBoardUI(playerBoard, computerBoard);

        const flexContainer = document.querySelector('#flex-container');

        const board = flexContainer.querySelector('.gameBoard');

        expect(board).not.toBeNull();

        expect(flexContainer.children.length).toBe(1);

        expect(board.children.length).toBe(2);
    });

    test('should create 100 cells for each grid', () => {
        document.body.innerHTML = `<div id="flex-container"></div>`;

        const playerBoard = new GameBoard();
        const computerBoard = new GameBoard();

        createBoardUI(playerBoard, computerBoard);

        const grids = document.querySelectorAll('.playersGrid');

        grids.forEach(grid => {
            expect(grid.children.length).toBe(100);
        });
    });

    test('should display player ships', () => {
        document.body.innerHTML = `<div id="flex-container"></div>`;

        const playerBoard = new GameBoard();
        const computerBoard = new GameBoard();

        playerBoard.placeShips();

        createBoardUI(playerBoard, computerBoard);

        const shipCells = document.querySelectorAll('.ship');

        expect(shipCells.length).toBeGreaterThan(0);
    });

    test('should not display computer ships', () => {
        document.body.innerHTML = `<div id="flex-container"></div>`;

        const playerBoard = new GameBoard();
        const computerBoard = new GameBoard();

        playerBoard.placeShips();
        computerBoard.placeShips();

        createBoardUI(playerBoard, computerBoard);

        const grids = document.querySelectorAll('.playersGrid');

        const computerGrid = grids[1];

        const computerShips = computerGrid.querySelectorAll('.ship');

        expect(computerShips.length).toBe(0);
    });
});