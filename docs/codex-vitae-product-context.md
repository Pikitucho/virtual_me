# Codex Vitae Product Context

Codex Vitae, also called Virtual Me: Origins, is a real-life identity and progression infrastructure layer. It represents a user's habits, achievements, skills, credentials, and personal growth as a persistent game-like character that can travel across many digital worlds.

## 1. Game Passport System

The Game Passport System gives the user one persistent character identity that can move across connected games and experiences.

Core principle:

> One Character, Many Worlds. Your progress follows you.

Traditional games reset progress, isolate skills, fragment player identity, and make time invested in one game disappear when another starts. Virtual Me fixes this by storing a portable profile with:

- Core stats: STR, DEX, CON, INT, WIS, and CHA.
- Ability Now values.
- Legacy values.
- Skill Universe progress.
- Galaxies, constellations, and stars.
- Unlocked perks.
- Achievements.
- Verified credentials.
- History.

When a connected game imports a character, it reads the Virtual Me profile, checks stats, unlocked stars, and active perks, then adapts the experience without manual setup or player guessing.

Stats are universal but interpreted per game. High STR might create melee bonuses, high INT might unlock dialogue options, and high CHA might affect faction influence. Games should use stat caps, scaling curves, and soft normalization so high stats unlock options, flavor, and personalization instead of dominance.

Developer integration should be open, modular, optional, read-only by default, based on opt-in mappings, and flexible enough for RPGs, strategy games, simulations, narrative games, and other genres. Virtual Me should behave as a layer rather than a lock-in.

Security and trust requirements:

- Only authentic progress counts.
- Verified achievements and credentials matter.
- Anti-cheat and fraud detection are required.
- No stat editing or stat injection is allowed.
- The player controls what data is shared.

## 2. Stat, Level-Up & Atrophy System

The Stat, Level-Up & Atrophy System turns real life into meaningful progression.

Core philosophy:

> Growth, not grinding.

Progress should come from real-world actions. Stats represent foundational human capacities and should reward consistency, sustainability, and self-development instead of short bursts of fake XP grinding.

### Core stats

| Stat | Name | Represents |
| --- | --- | --- |
| STR | Strength | Physical strength and explosive power |
| DEX | Dexterity | Accuracy, fine control, coordination, and precision |
| CON | Constitution | Endurance, health, discipline, resilience, and stamina |
| INT | Intelligence | Learning, reasoning, problem-solving, and analytical thinking |
| WIS | Wisdom | Awareness, planning, judgment, intuition, and decision-making |
| CHA | Charisma | Communication, leadership, persuasion, influence, and social presence |

Each stat has two parallel tracks:

- **Ability Now:** a 0–100 current capability value that responds quickly to behavior changes and can rise or decay.
- **Legacy:** a permanent long-term record of effort that never decreases.

This separation keeps current condition distinct from lifelong mastery.

### Growth flow

1. The user logs a real activity or habit.
2. The activity is classified to a stat.
3. Effort generates stat fragments.
4. Every 1,000 fragments creates +1 permanent stat point.

Character Level increases by +1 for every +10 total stat points and reflects overall life progression across stats.

Perks and stats use an ownership-versus-activation model:

- Legacy unlocks perk ownership.
- Ability Now determines whether the perk is active.
- If Ability Now drops below the requirement, the perk is paused.
- Progress is not erased, but power can become inactive.

Atrophy affects only Ability Now. Higher stats require more maintenance, while Legacy remains untouched. Light consistent actions prevent decay, focused effort accelerates recovery, and a 90-day recalibration process should smooth anomalies.

## 3. Skill Universe System

The Skill Universe is a living map of who the user is becoming. It is not a flat checklist; it is a navigable world where every unlocked node represents a real achievement.

Hierarchy:

- **Galaxy:** a major life domain, such as Mind, Body, Soul, or Social.
- **Constellation:** a themed path within a galaxy that groups related skills.
- **Star:** an individual skill, perk, verified achievement, milestone, or apex accomplishment.

The Skill Universe should show what the user has unlocked, what comes next, what is required, and how to advance responsibly. A career or mastery path should be broken into foundational skills, intermediate milestones, and apex-level achievements.

Each star should answer:

- What skill am I unlocking?
- What stats does it require?
- What real-world actions move me closer?
- What knowledge or training is recommended?
- What evidence or verification is needed?

### Star types

- **Milestone Stars:** foundational stars that build toward mastery.
- **Apex Stars:** rare stars representing peak achievement and specialization.
- **Credential Stars:** stars requiring real-world verification such as degrees, certifications, work experience, linked services, or documents.

### Star states

- **Locked:** requirements are not met.
- **Available:** stat and prerequisite requirements are met.
- **Unlocked:** the star is owned and contributes to the character.

Unlock requirements may include minimum stats, previous stars, real-world evidence, verification, and Perk Point spending. There should be no shortcuts and no fake progression.

Perk Points are a rare strategic currency earned through level milestones, consistent activity, and long-term dedication. They force meaningful choices, and users should not be able to unlock everything.

## 4. Skill Universe Visual and Navigation Experience

The Skill Universe visual experience should feel like identity visualization rather than ordinary UI.

Navigation should be fully spatial: users can pan, zoom, and glide through space with smooth camera transitions from Galaxy View to Constellation View to Star View. No hard cuts should be needed.

Visual language: **Cozy × Sci-Fi**.

It should combine:

- Soft cosmic backdrops.
- Subtle particle effects.
- Warm glow for available skills.
- Cool, vibrant light for unlocked stars.
- Dim, distant, desaturated styling for locked stars.
- Stable connected light for unlocked paths.

The universe should react to user actions. New paths should reveal themselves, neglected areas can dim, active galaxies should feel vibrant and close, and the Skill Universe should mirror real life.

## 5. Monetization and Revenue Model

The monetization model must be ethical, scalable, and aligned with player growth.

Core philosophy:

> Value first, revenue follows.

Strict rules:

- No pay-to-win mechanics.
- No stat purchases.
- No skill unlocking via cash.
- Monetization enhances expression, not power.
- Trust is the core asset.

Revenue pillars may include:

1. Player subscriptions.
2. Game and developer licensing.
3. Cosmetic and identity customization.
4. Marketplace and ecosystem fees.
5. Enterprise and institutional licensing.
6. Contextual brand integrations and brand skill links.
7. Credential and verification services.

Player subscriptions may unlock advanced analytics, extended history, priority verification processing, customization, and UI themes. Free players must never be power-gated.

Developer licensing should charge games rather than players through SDK/API access, per-user pricing, revenue-share models, and premium integration features.

Cosmetics may include avatar outfits, animation styles, galaxy themes, UI themes, and profile presentation elements. They must create zero gameplay advantage.

Contextual brand links may appear inside relevant Skill Stars, but they must be optional, transparent, non-manipulative, and contextually meaningful. There should be no banners, pop-ups, feed ads, behavioral targeting, forced engagement, or progression manipulation.

Data ethics:

- Do not sell personal data.
- Do not use behavior-targeted ads.
- Make data sharing player-controlled.
- Make transparency the default.

## Initial Data Model Candidates

### UserCharacter

- `id`
- `userId`
- `displayName`
- `level`
- `totalStatPoints`
- `createdAt`
- `updatedAt`

### Stat

- `id`
- `characterId`
- `type`: `STR | DEX | CON | INT | WIS | CHA`
- `abilityNow`: number from 0 to 100
- `legacyPoints`
- `permanentStatPoints`
- `fragments`: number from 0 to 999
- `lastActivityAt`
- `decayStatus`
- `maintenanceThreshold`

### ActivityLog

- `id`
- `userId`
- `statType`
- `activityType`
- `description`
- `effortValue`
- `generatedFragments`
- `verificationStatus`
- `createdAt`

### Skill Universe

- `Galaxy`: `id`, `name`, `description`, `theme`, `visualPosition`, `status`
- `Constellation`: `id`, `galaxyId`, `name`, `description`, `theme`, `visualPosition`, `status`
- `Star`: `id`, `constellationId`, `name`, `description`, `starType`, `state`, `requiredStats`, `prerequisiteStarIds`, `requiresVerification`, `requiredEvidenceTypes`, `perkPointCost`, `brandLinks`, `visualState`

### Progression and integration

- `Perk`: `id`, `starId`, `name`, `description`, `owned`, `active`, `activationRequirements`, `pausedReason`
- `PerkPointLedger`: `id`, `userId`, `amount`, `source`, `spentOnStarId`, `createdAt`
- `Credential`: `id`, `userId`, `type`, `issuer`, `documentUrl`, `verificationStatus`, `linkedStarId`, `createdAt`
- `GamePassport`: `id`, `userId`, `sharedStats`, `sharedStars`, `sharedPerks`, `permissions`, `connectedGameId`
- `ConnectedGame`: `id`, `name`, `developerId`, `statMappingRules`, `starMappingRules`, `scalingRules`, `softCaps`, `integrationType`
- `BrandLink`: `id`, `starId`, `brandName`, `linkType`, `url`, `disclosureText`, `optional`, `active`
- `Subscription`: `id`, `userId`, `plan`, `features`, `status`

## MVP Build Priority

The MVP should start with the trust and progression foundation:

1. Core character profile.
2. Six stats.
3. Ability Now and Legacy separation.
4. Activity logging.
5. Fragment-to-stat conversion.
6. Basic level calculation.
7. Galaxy, Constellation, and Star hierarchy.
8. Locked, Available, and Unlocked star states.
9. Stat requirements for stars.
10. Perk Point spending.
11. Simple visual Skill Universe map.
12. Read-only Game Passport export.
13. Privacy and data-sharing controls.

Monetization should not come first unless needed for architecture. The foundation must be trust, progression, and identity.
