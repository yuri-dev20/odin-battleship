import { Ship } from "./ship";

export class GameBoard {
    constructor() {
        this.grid = this.createGameBoardGrid();
        this.ships = this.createShips();

        this.missedAttacks = [];
        this.successfulAttacks = [];
    }

    isValidPosition(positions) {
        return positions.every(([x, y]) => this.grid[x][y] === null);
    }

    createGameBoardGrid() {
        return Array(10)
            .fill(null)
            .map(() => Array(10).fill(null));
    }

    createShips() {
        return [
            {name: "carrier", ship: new Ship(5)},
            {name: "battleship", ship: new Ship(4)},
            {name: "cruiser", ship: new Ship(3)},
            {name: "submarine", ship: new Ship(3)},
            {name: "destroyer", ship: new Ship(2)},
        ];
    };

    placeShips() {
        this.ships = this.ships.map((shipObj) => {
            const positions = this.generateValidPositions(shipObj.ship.length);

            positions.forEach(([x, y]) => {
                this.grid[x][y] = shipObj;
            });

            return {
                ...shipObj,
                position: positions
            };
        });
    };

    generateValidPositions(length) {
        let positions;

        do {
            positions = this.generatePositions(length);
            
        } while (!this.isValidPosition(positions));

        return positions;
    }

    generatePositions(length) {
        const direction = Math.random() < 0.5 ? "horizontal" : "vertical";

        let x, y;

        if (direction === "horizontal") {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * (10 - length + 1));
        } else {
            x = Math.floor(Math.random() * (10 - length + 1));
            y = Math.floor(Math.random() * 10);
        }

        const positions = [];

        for (let i = 0; i < length; i++) {
            if (direction === "horizontal") {
                positions.push([x, y + i]);
            } else {
                positions.push([x + i, y]);
            }
        }

        return positions;
    };

    receiveAttack(x, y) {
        const currentCell = this.grid[x][y];

        const alreadyMissed = this.missedAttacks.some(
            ([row, col]) => row === x && col === y
        );

        const alreadyHit = this.successfulAttacks.some(
            ([row, col]) => row === x && col === y
        );

        if (alreadyMissed || alreadyHit) {
            return "already attacked";
        }

        if (currentCell !== null) {
            currentCell.ship.hit();

            this.successfulAttacks.push([x, y]);

            return "hit";
        }

        this.missedAttacks.push([x, y]);

        return "miss";
    };
}