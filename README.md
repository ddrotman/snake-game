# Pac-Man Surf 3D

A 3D Pac-Man game where Pac-Man and his girlfriend surf through stone sea-wall mazes on open ocean, dodging stingrays, crabs, and big set waves. It's a single HTML file that runs in the browser with [Three.js](https://threejs.org/) (loaded from a CDN, so it needs an internet connection and WebGL).

## Play

Open `index.html` in a browser.

| Key | Action |
| --- | --- |
| Arrow keys | Steer (when diving or surfing: ↑ forward, ← → turn) |
| W (or 🍺 button) | Drink a beer: you get faster and plow through crabs, but you're drunk. Your controls go reversed and random, and everyone else gets drunk too. |
| A (or 🌿 button) | Smoke a joint: everything slows down (you a little, everyone else a lot), smoke fills the air, and your eyes go red and droopy. Your girlfriend will not be happy. |
| S (or 🤿 button) | Dive: swim *under* the walls with your mask and snorkel. Each dive uses one charge. |
| D (or 🏄 button) | Surf the next wave. Press it any time a wave is coming and you'll pop up when it arrives. On the wave, ↑ = aerial 360, ↓ = backflip |
| X (or 🎣 button) | Fish: hook the nearest stingray, reel it in, and feed it to your girlfriend |
| T (or 🪤 button) | Drop a fish trap. It fills up over time, and she snacks on it when she swims past (up to 3 traps). |
| Space / P | Pause |
| C (or Camera button) | Switch between follow camera and overview |
| Enter / tap | Start or restart |
| Swipe | Steer on touch devices |

Eat every pearl to clear the level. The big glowing pearls turn the stingrays blue so you can eat them for 200 → 400 → 800 → 1600 points. You have 5 lives.

- ⭐ **Glowing starfish** float into the maze now and then. Eat one and every enemy is wiped out.
- 🔥 **On fire:** score about 1,200 points within 5 seconds and you catch fire. For 8 seconds you get triple points, extra speed, and the stingrays run scared.

## Hazards

- **Stingrays** hunt you like the original ghosts: red chases you directly, pink aims 4 tiles ahead, and cyan flanks you. You face 1 on the first level, 2 on the next two, and 3 after that.
- **Set waves** roll in from any side: north, south, east, or west. A warning tells you which. A wave you don't catch shoves you along until you hit a wall, and it throws any crabs out of the maze.
- **Crabs** scuttle sideways around the maze. If one pinches you, you're stunned for a moment, so drink a beer to plow through them.

Beers, joints, and goggles float into the maze as pickups.

## Surfing and diving

- **Surf:** hit D when a wave is coming. You ride the crest across the maze over the walls, carve left and right, and grab every pearl you pass over. Throw aerial 360s (↑) and backflips (↓): each trick in a ride scores more, and you get a combo bonus when you land. Stingrays can't reach you up there.
- **Dive:** hit S to go under. You have about 7 seconds of air (watch the meter) and you swim slower down there. You can pass beneath the inner walls, past fish, coral, and seaweed. You start with 3 dives, and each 🥽 **goggles** pickup gives you 2 more.
- 🪙 **Coins** float at swimming depth for 50 points each.
- 💰 **Treasure:** every level hides 3 chests on rock pillars under the walls, at the same depth you swim. Look for the gold shimmer on the water. Each chest wipes out every enemy, and your girlfriend gets a tiara, pearls, and a golden glow.

Both switch to a close camera right behind Pac-Man.

## Your girlfriend

She surfs behind you the whole way, in heart-shaped sunglasses and gold hoops.

- Light up and she turns red, scowls, fumes, hangs back, and lets you hear about it until she forgives you.
- Feed her (fished stingrays or fish from your traps) to win her back. Every fish goes straight to her waistline, and she falls further behind.
- 🦈 **More than 10 fish and she turns into a shark.** She eats any stingray she touches, but don't run into her: it costs a life. She turns back into herself at the next surf spot.

## Chaos

Every 40–55 seconds something crazy happens:

- 🪩 **Disco party:** a disco ball drops, the walls go rainbow, everybody dances, and pearls are worth double.
- 🐋 **Whale breach:** a whale jumps beside the maze and sets off a big wave (catch it!).
- 🛸 **Alien abduction:** a UFO beams up the stingray closest to you.

Dolphins jump around the maze and seagulls circle overhead.

## Travel

Each level you clear flies you to the next surf spot. Every stop has its own maze, stone, neon color, sky, and swell. The game starts slow and speeds up every level, with bigger, more frequent waves:

1. Malibu, California: golden hour, sandstone and blue neon
2. Waikiki, Hawaii: midday, black lava rock and cyan neon
3. Uluwatu, Bali: sunset, pink coral stone and magenta neon, on a sandy beach with palm trees
4. Nazaré, Portugal: the big one, gray granite and white neon
