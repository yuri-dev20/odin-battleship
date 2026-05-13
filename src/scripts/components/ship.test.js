import { Ship } from "./ship.js";

describe('emulate ship funcionality', () => {
    test('show ship properties', () => {
        const aircraft = new Ship(5);

        expect(aircraft.length).toBe(5);
        expect(aircraft.hitsTaken).toBe(0);
        expect(aircraft.sunk).toBeFalsy();
    });
});