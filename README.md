# Pac-Man Surf 3D

A 3D Pac-Man game where Pac-Man surfs through a maze of stone sea walls on open ocean. It's a single HTML file that runs in the browser with [Three.js](https://threejs.org/) (loaded from a CDN, so it needs an internet connection and WebGL).

## Play

Open `index.html` in a browser.

- **Arrow keys / WASD**: move
- **Space / P**: pause/resume
- **C** (or the Camera button): switch between follow camera and overview
- **Enter**: start / restart
- **Swipe**: move on touch devices (tap to start)

Eat every pearl to clear the level. The big glowing pearls turn the ghosts blue so you can eat them for 200 → 400 → 800 → 1600 points. You have 3 lives, and each level is a little faster.

## What's on screen

- Reflective ocean with animated ripples and sun glint under a golden-hour sky
- Stone sea walls with neon trim, soft shadows, and bloom
- Pac-Man rides a surfboard, leans into turns, and throws up wake and spray
- See-through glowing ghosts with wobbling hems that light up the walls around them

The four ghosts each hunt differently, like the original:

- **Blinky** (red) chases you directly
- **Pinky** (pink) aims 4 tiles ahead of you
- **Inky** (cyan) uses Blinky's position to flank you
- **Clyde** (orange) chases until he gets close, then wanders off
