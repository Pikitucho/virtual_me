const STATS = {
  STR: { name: 'Strength', description: 'Power, lifting, explosive effort' },
  DEX: { name: 'Dexterity', description: 'Coordination, accuracy, craft' },
  CON: { name: 'Constitution', description: 'Endurance, health, discipline' },
  INT: { name: 'Intelligence', description: 'Learning, reasoning, analysis' },
  WIS: { name: 'Wisdom', description: 'Judgment, awareness, planning' },
  CHA: { name: 'Charisma', description: 'Communication, leadership, presence' },
};

const SKILL_UNIVERSE = [
  {
    id: 'body',
    name: 'Body Galaxy',
    theme: 'Vitality and physical capability',
    constellations: [
      {
        id: 'strength-path',
        name: 'Strength Path',
        stars: [
          {
            id: 'first-lift',
            name: 'First Lift',
            type: 'Milestone',
            description: 'Complete and record a strength-focused IRL session.',
            requiredStats: { STR: 4 },
            prerequisites: [],
            perkPointCost: 1,
            nextStep: 'Do one safe strength session and log it with notes.',
          },
          {
            id: 'consistent-training',
            name: 'Consistent Training',
            type: 'Milestone',
            description: 'Show enough current conditioning to maintain a training rhythm.',
            requiredStats: { STR: 8, CON: 6 },
            prerequisites: ['first-lift'],
            perkPointCost: 1,
            nextStep: 'Train strength and recovery until STR 8 and CON 6 are active.',
          },
        ],
      },
      {
        id: 'resilience-path',
        name: 'Resilience Path',
        stars: [
          {
            id: 'steady-stamina',
            name: 'Steady Stamina',
            type: 'Milestone',
            description: 'Build a sustainable endurance or health habit.',
            requiredStats: { CON: 7 },
            prerequisites: [],
            perkPointCost: 1,
            nextStep: 'Log a walk, run, recovery session, or sleep-support habit.',
          },
        ],
      },
    ],
  },
  {
    id: 'mind',
    name: 'Mind Galaxy',
    theme: 'Learning, judgment, and creative problem solving',
    constellations: [
      {
        id: 'learning-path',
        name: 'Learning Path',
        stars: [
          {
            id: 'focused-study',
            name: 'Focused Study',
            type: 'Milestone',
            description: 'Complete a focused study block with clear evidence.',
            requiredStats: { INT: 5 },
            prerequisites: [],
            perkPointCost: 1,
            nextStep: 'Study one topic for a focused block and summarize what changed.',
          },
          {
            id: 'applied-insight',
            name: 'Applied Insight',
            type: 'Apex',
            description: 'Turn learning into a real project, decision, or taught concept.',
            requiredStats: { INT: 10, WIS: 8 },
            prerequisites: ['focused-study'],
            perkPointCost: 2,
            nextStep: 'Apply a learned concept in public, in a project, or in a decision log.',
          },
        ],
      },
    ],
  },
  {
    id: 'social',
    name: 'Social Galaxy',
    theme: 'Communication, trust, and leadership',
    constellations: [
      {
        id: 'presence-path',
        name: 'Presence Path',
        stars: [
          {
            id: 'clear-voice',
            name: 'Clear Voice',
            type: 'Milestone',
            description: 'Practice communication with intention and reflection.',
            requiredStats: { CHA: 5, WIS: 3 },
            prerequisites: [],
            perkPointCost: 1,
            nextStep: 'Have a meaningful conversation, presentation, or writing session.',
          },
        ],
      },
    ],
  },
];

const STORAGE_KEY = 'virtual-me-origins-state-v1';

const defaultState = {
  displayName: 'Origin Walker',
  spentPerkPoints: 0,
  unlockedStars: [],
  activities: [],
  stats: Object.fromEntries(
    Object.keys(STATS).map((key) => [
      key,
      {
        abilityNow: 0,
        legacyPoints: 0,
        permanentStatPoints: 0,
        fragments: 0,
        lastActivityAt: null,
      },
    ]),
  ),
};

let state = loadState();

const elements = {
  displayName: document.querySelector('#display-name'),
  characterLevel: document.querySelector('#character-level'),
  totalStatPoints: document.querySelector('#total-stat-points'),
  availablePerkPoints: document.querySelector('#available-perk-points'),
  statsGrid: document.querySelector('#stats-grid'),
  activityForm: document.querySelector('#activity-form'),
  activityStat: document.querySelector('#activity-stat'),
  activityType: document.querySelector('#activity-type'),
  activityEffort: document.querySelector('#activity-effort'),
  effortValue: document.querySelector('#effort-value'),
  activityDescription: document.querySelector('#activity-description'),
  activityList: document.querySelector('#activity-list'),
  universeMap: document.querySelector('#universe-map'),
  nextSteps: document.querySelector('#next-steps'),
  passportOutput: document.querySelector('#passport-output'),
  privacyControls: document.querySelectorAll('[data-share]'),
 codex/outline-core-components-of-virtual-me-yjatpv
  navItems: document.querySelectorAll('[data-target-screen]'),
  screens: document.querySelectorAll('[data-screen]'),

 main
};

init();

function init() {
  elements.displayName.value = state.displayName;
  elements.activityStat.innerHTML = Object.entries(STATS)
    .map(([key, stat]) => `<option value="${key}">${key} — ${stat.name}</option>`)
    .join('');

  elements.displayName.addEventListener('input', () => {
    state.displayName = elements.displayName.value || 'Origin Walker';
    persistAndRender();
  });

  elements.activityEffort.addEventListener('input', () => {
    elements.effortValue.textContent = elements.activityEffort.value;
  });

  elements.activityForm.addEventListener('submit', (event) => {
    event.preventDefault();
    logActivity();
  });

  elements.privacyControls.forEach((control) => {
    control.addEventListener('change', renderPassport);
  });

 codex/outline-core-components-of-virtual-me-yjatpv
  elements.navItems.forEach((item) => {
    item.addEventListener('click', () => showScreen(item.dataset.targetScreen));
  });

  showScreen('stats');
  render();
}


function showScreen(screenName) {
  elements.screens.forEach((screen) => {
    screen.classList.toggle('is-active', screen.dataset.screen === screenName);
  });

  elements.navItems.forEach((item) => {
    const isActive = item.dataset.targetScreen === screenName;
    item.classList.toggle('is-active', isActive);
    item.setAttribute('aria-current', isActive ? 'page' : 'false');
  });
}


  render();
}

 main
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? mergeState(defaultState, JSON.parse(saved)) : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

function mergeState(base, saved) {
  return {
    ...structuredClone(base),
    ...saved,
    stats: {
      ...structuredClone(base.stats),
      ...(saved.stats || {}),
    },
    unlockedStars: saved.unlockedStars || [],
    activities: saved.activities || [],
  };
}

function persistAndRender() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  render();
}

function logActivity() {
  const statKey = elements.activityStat.value;
  const effort = Number(elements.activityEffort.value);
  const generatedFragments = effort * 45;
  const abilityGain = effort * 0.7;
  const stat = state.stats[statKey];
  const totalFragments = stat.fragments + generatedFragments;
  const permanentGain = Math.floor(totalFragments / 1000);

  stat.fragments = totalFragments % 1000;
  stat.permanentStatPoints += permanentGain;
  stat.legacyPoints += generatedFragments;
  stat.abilityNow = clamp(stat.abilityNow + abilityGain, 0, 100);
  stat.lastActivityAt = new Date().toISOString();

  state.activities.unshift({
    id: crypto.randomUUID(),
    statType: statKey,
    activityType: elements.activityType.value.trim(),
    description: elements.activityDescription.value.trim(),
    effortValue: effort,
    generatedFragments,
    verificationStatus: 'Self-attested',
    createdAt: new Date().toISOString(),
  });
  state.activities = state.activities.slice(0, 8);

  elements.activityForm.reset();
  elements.activityEffort.value = 5;
  elements.effortValue.textContent = '5';
  persistAndRender();
}

function render() {
  const totals = calculateTotals();
  elements.characterLevel.textContent = totals.level;
  elements.totalStatPoints.textContent = totals.totalStatPoints;
  elements.availablePerkPoints.textContent = totals.availablePerkPoints;

  renderStats();
  renderActivityLog();
  renderUniverse();
  renderNextSteps();
  renderPassport();
}

function calculateTotals() {
  const totalStatPoints = Object.values(state.stats).reduce(
    (sum, stat) => sum + stat.permanentStatPoints,
    0,
  );
  const level = 1 + Math.floor(totalStatPoints / 10);
  const earnedPerkPoints = 3 + Math.floor(level / 3);
  return {
    totalStatPoints,
    level,
    earnedPerkPoints,
    availablePerkPoints: earnedPerkPoints - state.spentPerkPoints,
  };
}

function renderStats() {
  elements.statsGrid.innerHTML = Object.entries(STATS)
    .map(([key, meta]) => {
      const stat = state.stats[key];
      const decayStatus = getDecayStatus(stat);
      return `
        <article class="stat-card ${decayStatus.tone}">
          <div class="stat-topline">
            <strong>${key}</strong>
            <span>${meta.name}</span>
          </div>
          <p>${meta.description}</p>
          <div class="meter-row">
            <span>Ability Now</span>
            <strong>${stat.abilityNow.toFixed(1)}</strong>
          </div>
          <div class="meter"><span style="width:${stat.abilityNow}%"></span></div>
          <div class="stat-meta">
            <span>Legacy ${stat.legacyPoints}</span>
            <span>Permanent ${stat.permanentStatPoints}</span>
            <span>${stat.fragments}/1000 fragments</span>
          </div>
          <p class="decay-note">${decayStatus.label}</p>
        </article>`;
    })
    .join('');
}

function getDecayStatus(stat) {
  if (!stat.lastActivityAt) {
    return { label: 'No activity logged yet. Start with one light action.', tone: 'quiet' };
  }

  const daysSince = Math.floor((Date.now() - Date.parse(stat.lastActivityAt)) / 86_400_000);
  if (daysSince <= 3) {
    return { label: 'Maintained recently. Ability Now is stable.', tone: 'healthy' };
  }
  if (daysSince <= 7) {
    return { label: 'Maintenance window open. A light action prevents decay.', tone: 'watch' };
  }
  return { label: 'Neglected. Future atrophy should reduce Ability Now only.', tone: 'risk' };
}

function renderActivityLog() {
  if (!state.activities.length) {
    elements.activityList.innerHTML = '<li>No IRL actions logged yet.</li>';
    return;
  }

  elements.activityList.innerHTML = state.activities
    .map(
      (activity) => `
        <li>
          <strong>${activity.statType}</strong> +${activity.generatedFragments} fragments
          <span>${activity.activityType} · Effort ${activity.effortValue}/10 · ${formatDate(activity.createdAt)}</span>
        </li>`,
    )
    .join('');
}

function renderUniverse() {
  const totals = calculateTotals();
  elements.universeMap.innerHTML = SKILL_UNIVERSE.map(
    (galaxy) => `
      <article class="galaxy">
        <div>
          <p class="eyebrow">${galaxy.theme}</p>
          <h3>${galaxy.name}</h3>
        </div>
        <div class="constellations">
          ${galaxy.constellations
            .map(
              (constellation) => `
                <section class="constellation">
                  <h4>${constellation.name}</h4>
                  <div class="stars">
                    ${constellation.stars.map((star) => renderStar(star, totals)).join('')}
                  </div>
                </section>`,
            )
            .join('')}
        </div>
      </article>`,
  ).join('');

  document.querySelectorAll('[data-unlock-star]').forEach((button) => {
    button.addEventListener('click', () => unlockStar(button.dataset.unlockStar));
  });
}

function renderStar(star, totals) {
  const status = getStarStatus(star);
  const requirementText = Object.entries(star.requiredStats)
    .map(([key, value]) => `${key} ${value}`)
    .join(', ');
  const canSpend = status.state === 'available' && totals.availablePerkPoints >= star.perkPointCost;

  return `
    <article class="star ${status.state}">
      <span class="star-orb"></span>
      <div>
        <p class="star-type">${star.type} Star · ${status.label}</p>
        <h5>${star.name}</h5>
        <p>${star.description}</p>
        <small>Requires ${requirementText} · Cost ${star.perkPointCost} perk point${star.perkPointCost === 1 ? '' : 's'}</small>
        ${status.reason ? `<small>${status.reason}</small>` : ''}
        ${canSpend ? `<button class="button mini" data-unlock-star="${star.id}">Unlock star</button>` : ''}
      </div>
    </article>`;
}

function getStarStatus(star) {
  if (state.unlockedStars.includes(star.id)) {
    const active = hasRequiredStats(star);
    return {
      state: active ? 'unlocked' : 'paused',
      label: active ? 'Unlocked and active' : 'Owned, paused',
      reason: active ? '' : 'Ability Now dropped below activation requirements.',
    };
  }

  const missingPrerequisite = star.prerequisites.find((id) => !state.unlockedStars.includes(id));
  if (missingPrerequisite) {
    return { state: 'locked', label: 'Locked', reason: 'Unlock prerequisite stars first.' };
  }

  if (!hasRequiredStats(star)) {
    return { state: 'locked', label: 'Locked', reason: `Raise Ability Now: ${missingStats(star)}.` };
  }

  return { state: 'available', label: 'Available', reason: 'Requirements met. Spend a Perk Point to own it.' };
}

function hasRequiredStats(star) {
  return Object.entries(star.requiredStats).every(
    ([key, value]) => state.stats[key].abilityNow >= value,
  );
}

function missingStats(star) {
  return Object.entries(star.requiredStats)
    .filter(([key, value]) => state.stats[key].abilityNow < value)
    .map(([key, value]) => `${key} +${(value - state.stats[key].abilityNow).toFixed(1)}`)
    .join(', ');
}

function unlockStar(starId) {
  const star = findStar(starId);
  const totals = calculateTotals();
  if (!star || state.unlockedStars.includes(starId) || totals.availablePerkPoints < star.perkPointCost) {
    return;
  }

  const status = getStarStatus(star);
  if (status.state !== 'available') {
    return;
  }

  state.unlockedStars.push(starId);
  state.spentPerkPoints += star.perkPointCost;
  persistAndRender();
}

function findStar(starId) {
  for (const galaxy of SKILL_UNIVERSE) {
    for (const constellation of galaxy.constellations) {
      const star = constellation.stars.find((candidate) => candidate.id === starId);
      if (star) return star;
    }
  }
  return null;
}

function renderNextSteps() {
  const available = allStars().filter((star) => getStarStatus(star).state === 'available');
  const locked = allStars().filter((star) => getStarStatus(star).state === 'locked');

  const suggestions = [
    ...available.map((star) => `Unlock ${star.name} if it matches your identity path.`),
    ...locked.slice(0, 4).map((star) => star.nextStep),
  ].slice(0, 5);

  elements.nextSteps.innerHTML = suggestions.length
    ? suggestions.map((step) => `<li>${step}</li>`).join('')
    : '<li>Your current stars are stable. Keep logging sustainable IRL actions.</li>';
}

function allStars() {
  return SKILL_UNIVERSE.flatMap((galaxy) =>
    galaxy.constellations.flatMap((constellation) => constellation.stars),
  );
}

function renderPassport() {
  const share = Object.fromEntries(
    [...elements.privacyControls].map((control) => [control.dataset.share, control.checked]),
  );

  const passport = {
    character: {
      displayName: state.displayName,
      level: calculateTotals().level,
      exportedAt: new Date().toISOString(),
      permissions: share,
      mode: 'read-only',
    },
    stats: share.stats ? state.stats : 'hidden by player',
    unlockedStars: share.stars ? state.unlockedStars.map((id) => findStar(id)?.name || id) : 'hidden by player',
    recentActivity: share.activities ? state.activities.slice(0, 3) : 'hidden by player',
  };

  elements.passportOutput.textContent = JSON.stringify(passport, null, 2);
}

function formatDate(value) {
  return new Intl.DateTimeFormat(undefined, {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(value));
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
