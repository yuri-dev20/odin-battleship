export class Ship {
    constructor(length) {
        this.length = length;
        this.hitsTaken = 0;
        this.sunk = false;
    }

    hit() {
        if (!this.sunk) this.hitsTaken++;
    }

    isSunk() {
        if (this.hitsTaken >= this.length) this.sunk = true;
        return this.sunk;
    }
}