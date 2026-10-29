# Pac-Man Surf 3D

A 3D Pac-Man game where Pac-Man and his girlfriend surf through stone sea-wall mazes on open ocean, dodging stingrays, crabs, and big set waves. It's a single HTML file that runs in the browser with [Three.js](https://threejs.org/) (loaded from a CDN, so it needs an internet connection and WebGL).

## Play

Open `index.html` in a browser.

| Key | Action |
| --- | --- |
| Arrow keys / WASD | Steer (when diving or surfing: ↑ forward, ← → turn) |
| X / Shift (or 🤿 button) | Dive for 4 seconds: swim *under* the walls, and nothing can touch you |
| F (or 🏄 button) | Catch a set wave as it reaches you and ride it over the maze |
| B (or 🍺 button) | Drink a beer: you get faster and plow through crabs, but you're drunk. Your controls go reversed and random, and everyone else gets drunk too. |
| J (or 🌿 button) | Smoke a joint: everything slows down (you a little, everyone else a lot), smoke fills the air, and your eyes go red and droopy. Your girlfriend will not be happy. |
| Space / P | Pause |
| C (or Camera button) | Switch between follow camera and overview |
| Enter / tap | Start or restart |
| Swipe | Steer on touch devices |

Eat every pearl to clear the level. The big glowing pearls turn the stingrays blue so you can eat them for 200 → 400 → 800 → 1600 points. You have 3 lives.

## Hazards

- **Stingrays** (3 of them) hunt you like the original ghosts: red chases you directly, pink aims 4 tiles ahead, and cyan flanks you.
- **Set waves** roll across the whole maze. A warning shows first. The wave shoves you south until you hit a wall, throws any crabs it hits out of the maze, and the swell makes your speed surge and stall.
- **Crabs** scuttle sideways around the maze (1 at first, up to 4 later). If one pinches you, you're stunned for a moment, so drink a beer to plow through them.

Beers and joints float into the maze as pickups. Grab them and save them for when you need them.

## Surfing and diving

- **Surf:** when a set wave reaches you, hit F to catch it. You ride the crest south over the walls, carve left and right with the arrows, and grab every pearl you pass over. Stingrays can't reach you up there. You land safely at the bottom for a 200-point tube-ride bonus.
- **Dive:** hit X to go under for 4 seconds. Underwater you can swim beneath the inner walls, past schools of fish, coral, and swaying seaweed. You come up at the nearest open water when your air runs out, and you have to wait 8 seconds before you can dive again.

Both switch to a close camera right behind Pac-Man.

## Chaos

Every 25–35 seconds something crazy happens:

- 🪩 **Disco party:** a disco ball drops, the walls go rainbow, everybody dances, and pearls are worth double.
- 🐋 **Whale breach:** a whale jumps beside the maze and sets off a big wave (catch it!).
- 🛸 **Alien abduction:** a UFO beams up the stingray closest to you.

Dolphins jump around the maze and seagulls circle overhead.

## Travel

Each level you clear flies you to the next surf spot, each with its own sky, water, and maze. The waves get bigger and come more often at each stop:

1. Malibu, California: golden hour
2. Waikiki, Hawaii: midday
3. Uluwatu, Bali: sunset, on a sandy beach with palm trees
4. Nazaré, Portugal: the big one

Your girlfriend surfs behind you the whole way, in heart-shaped sunglasses and gold hoops. Light up and she turns red, scowls, fumes, hangs back, and lets you hear about it until she forgives you.
