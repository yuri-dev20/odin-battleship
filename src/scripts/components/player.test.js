import { Player } from "./player.js";

describe('Player', () => {
    test('should create a real player', () => {
        const player = new Player('human');
        expect(player.type).toBe('human');
    });
});