# Virtual Me: Origins / Codex Vitae

Virtual Me: Origins is a persistent real-life character system where a user's actual habits, achievements, skills, credentials, and personal growth become a portable game-like identity.

The product is intended to be an infrastructure layer, not just a single game. A user's character can travel across connected games, apps, education platforms, career systems, and real-world development tools while preserving ethical progression rules.

## Core promise

> One Character, Many Worlds. Your progress follows you.

Virtual Me turns real-world growth into a durable character profile built around:

- A read-only-by-default Game Passport for connected experiences.
- Six core stats: STR, DEX, CON, INT, WIS, and CHA.
- Separate `Ability Now` and `Legacy` tracks.
- A cosmic Skill Universe made of galaxies, constellations, and stars.
- Verified achievements, credentials, perks, and privacy controls.

 codex/outline-core-components-of-virtual-me-l61ler

 codex/outline-core-components-of-virtual-me-yjatpv
 codex/outline-core-components-of-virtual-me-yjatpv

 codex/outline-core-components-of-virtual-me-kwkxod
 main

 codex/outline-core-components-of-virtual-me-uk5xv6
 main
 main

## Run the MVP prototype

This repository now includes a dependency-free browser prototype for checking IRL progression locally.

```bash
 codex/outline-core-components-of-virtual-me-l61ler
npm run dev

 codex/outline-core-components-of-virtual-me-yjatpv
 codex/outline-core-components-of-virtual-me-yjatpv

 codex/outline-core-components-of-virtual-me-kwkxod
 main
npm run dev

npm start
 main
 main
```

Then open <http://127.0.0.1:4173/> to log real actions, inspect Ability Now and Legacy, unlock available stars, and copy the read-only Game Passport export.

 codex/outline-core-components-of-virtual-me-l61ler

 codex/outline-core-components-of-virtual-me-yjatpv
 codex/outline-core-components-of-virtual-me-yjatpv

 codex/outline-core-components-of-virtual-me-kwkxod
 main
 main
For a production-style local check, run:

```bash
npm run build
npm start
```

The Vercel deployment guide is in [`docs/vercel-deployment.md`](docs/vercel-deployment.md).

 codex/outline-core-components-of-virtual-me-l61ler



 main
 main
 main
## Product principles

The system must preserve trust and avoid exploitative progression mechanics:

1. Never design pay-to-win mechanics.
2. Never allow stat purchases.
3. Never allow skill unlocks through cash.
4. Separate permanent progress from current performance.
5. Keep Legacy permanent: it never decreases.
6. Allow Ability Now to rise or decay based on real behavior.
7. Treat unlocking as ownership.
8. Treat activation as dependent on current requirements.
9. Pause progress-dependent power when requirements are not met, but never erase earned progress.
10. Require real-world evidence and credentials where appropriate.
11. Keep user-controlled data sharing at the center of all integrations.
12. Make developer access read-only unless explicitly authorized.
13. Make the Skill Universe exploratory, cosmic, and alive.
14. Give stars clear requirements and next steps.
15. Keep brand links optional, contextual, transparent, and non-manipulative.
16. Reward consistency instead of burnout.
17. Preserve the user's identity across games and experiences.
18. Build as an infrastructure layer, not as a closed single-app silo.

## MVP focus

The first build should prioritize trust, progression, and identity before monetization:

1. Core character profile.
2. Six stats.
3. Ability Now and Legacy separation.
4. Activity logging.
5. Fragment-to-stat conversion.
6. Basic level calculation.
7. Skill Universe hierarchy: Galaxy, Constellation, Star.
8. Star states: Locked, Available, Unlocked.
9. Stat requirements for stars.
10. Perk Point spending.
11. Simple visual Skill Universe map.
12. Read-only Game Passport export.
13. Privacy and data-sharing controls.

See [`docs/codex-vitae-product-context.md`](docs/codex-vitae-product-context.md) for the fuller product model and system design notes.
