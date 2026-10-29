# Pac-Man Surf 3D

A 3D Pac-Man game where Pac-Man and his girlfriend surf through stone sea-wall mazes on open ocean, dodging stingrays, crabs, and big set waves. It's a single HTML file that runs in the browser with [Three.js](https://threejs.org/) (loaded from a CDN, so it needs an internet connection and WebGL).

## Play

Open `index.html` in a browser.

| Key | Action |
| --- | --- |
| Arrow keys / WASD | Steer |
| B (or 🍺 button) | Drink a beer: speed boost, and you knock crabs out of the way |
| J (or 🌿 button) | Smoke a joint: everything slows down (you a little, everyone else a lot) and your eyes go red |
| Space / P | Pause |
| C (or Camera button) | Switch between follow camera and overview |
| Enter / tap | Start or restart |
| Swipe | Steer on touch devices |

Eat every pearl to clear the level. The big glowing pearls turn the stingrays blue so you can eat them for 200 → 400 → 800 → 1600 points. You have 3 lives.

## Hazards

- **Stingrays** hunt you like the original ghosts: red chases you directly, pink aims 4 tiles ahead, cyan flanks you, and orange chases until it gets close, then wanders off.
- **Set waves** roll across the whole maze. A warning shows first. The wave shoves you south until you hit a wall, and the swell makes your speed surge and stall.
- **Crabs** scuttle sideways around the maze. If one pinches you, you're stunned for a moment, so drink a beer to plow through them.

Beers and joints float into the maze as pickups. Grab them and save them for when you need them.

## Travel

Each level you clear flies you to the next surf spot, each with its own sky, water, and maze. The waves get bigger and come more often at each stop:

1. Malibu, California: golden hour
2. Waikiki, Hawaii: midday
3. Uluwatu, Bali: sunset
4. Nazaré, Portugal: the big one

Your girlfriend surfs behind you the whole way.
