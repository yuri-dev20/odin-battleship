describe('create game board', () => {
    const board = createBoard();

    expect(board).toBeInstanceOf(HTMLDivElement);
});