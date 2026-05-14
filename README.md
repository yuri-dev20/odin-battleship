# Odin Battleship Game

Project developed as part of [The Odin Project](https://www.theodinproject.com/) curriculum, focusing on JavaScript, testing, and modular architecture.

A classic Battleship game built with vanilla JavaScript, HTML, and CSS, featuring object-oriented design, automated tests, and a simple AI opponent.

## Features

- Player vs Computer gameplay
- Random ship placement
- Turn-based system
- Hit and miss tracking
- Win condition detection
- Simple AI that avoids repeated moves
- Modular architecture (GameBoard, Player, Controller, UI)

---

## Architecture

The project is split into core modules:

### Game Logic
- `GameBoard`: handles grid, ship placement, and attacks
- `Ship`: tracks hits and sunk state
- `Player`: wraps a GameBoard instance

### Controller
- `GameController`: manages game flow, turns, and AI logic

### UI
- `boardUI`: renders the boards and handles user interactions

---

## How to Play

1. Click the **Play** button
2. Your board and the computer board will be generated
3. Click on the enemy grid to attack
4. Players take turns automatically
5. First to sink all enemy ships wins

---

## Tests

This project uses **Jest** for testing.

Run tests with:

```bash
npm test