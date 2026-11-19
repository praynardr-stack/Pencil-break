# Pencil Break — The Bundle

Old school lunch-table pencil break, built for phones. One file: `index.html`. No build step, no dependencies.

## Play
Open `index.html` in a browser, or host it with GitHub Pages:
1. Push this repo to GitHub.
2. Go to **Settings → Pages**, set the source to the `main` branch, root folder.
3. Your game will be live at `https://<your-username>.github.io/<repo-name>/`.

## How it works
- The aim slides along the other player's pencil. **Tap** to lock your spot.
- **Swipe back and forth** to bend your pencil back like a sling.
- The **eraser end** slams down. The middle breaks easiest. Hitting near their fists hurts your own pencil.
- When their pencil is close to breaking you get **ULTRA READY**. Finish it on that swing to fire your pencil's ultra.
- First pencil to snap loses the round. Best of 3.

## Features
- 8 pencils with their own stats and ultra finishers
- Lunch Table Ladder (7 opponents, unlock their pencils)
- Around the World tour (7 cities, one loss and you're out)
- Quick Match and 2-player pass-the-phone
- Ranks from Rookie up to Pencil Break King
- Scoreboard with career stats and badges
- 3 daily challenges
- Sound and vibration toggles

## Saving
Progress (rank, stats, unlocks, challenges) is saved in the browser with `localStorage`, so it stays on that phone/browser.

## Leaderboard note
The **Online** leaderboard tab only works when the page runs on claude.ai. On GitHub Pages it shows a message instead, and **The Table** tab (you vs the CPU rivals) works everywhere. To run a real online leaderboard from GitHub Pages you'd need to connect a backend like Firebase or Supabase.
