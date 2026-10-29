# Pac-Man Clone

A Pac-Man-style maze game in a single HTML file — no dependencies.

## Play

Open `index.html` in a browser.

- **Arrow keys / WASD** — move
- **Space / P** — pause/resume
- **Enter** — start / restart
- **Swipe** — move on touch devices (tap to start)

Eat every dot to clear the level. Power pellets (the big flashing dots) turn the ghosts blue so you can eat them for 200 → 400 → 800 → 1600 points. You have 3 lives, and each level is a little faster.

The four ghosts each hunt differently, like the original:

- **Blinky** (red) chases you directly
- **Pinky** (pink) aims 4 tiles ahead of you
- **Inky** (cyan) uses Blinky's position to flank you
- **Clyde** (orange) chases until he gets close, then wanders off

Ghosts alternate between chasing you and retreating to their corners. Your best score is saved locally.
