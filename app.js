const data = window.SUNBREAK_DATA;
const app = document.querySelector('#app');
const weaponSwitch = document.querySelector('#weaponSwitch');
const materialsSwitch = document.querySelector('#materialsSwitch');
const themeToggle = document.querySelector('#themeToggle');
const materials = window.afflictedMaterials || [];
let currentView = 'matchups';

const validWeapons = new Set(data.weapons.map(w => w.id));
const savedWeapon = localStorage.getItem('shg_weapon');
const savedMonster = localStorage.getItem('shg_monster');

const state = {
  weapon: validWeapons.has(savedWeapon) ? savedWeapon : 'dual-blades',
  monster: data.monsters.some(m => m.id === savedMonster) ? savedMonster : 'primordial-malzeno',
  search: '',
  element: 'All',
  materialSearch: '',
  materialTier: 'All',
  selectedMaterialName: null,
  pins: loadPins()
};

function loadPins() {
  try {
    const pins = JSON.parse(localStorage.getItem('shg_pins'));
    return pins && typeof pins === 'object' ? pins : {};
  } catch {
    return {};
  }
}

function savePins() {
  localStorage.setItem('shg_pins', JSON.stringify(state.pins));
}

function currentWeapon() {
  return data.weapons.find(w => w.id === state.weapon) || data.weapons[0];
}

function findMonster(id = state.monster) {
  return data.monsters.find(m => m.id === id) || data.monsters[0];
}

function matchupFor(monster) {
  return monster.matchup[state.weapon];
}

function elementOptions() {
  return state.weapon === 'rf-elemental-lbg'
    ? ['All', 'Fire', 'Water', 'Thunder', 'Ice']
    : ['All', 'Fire', 'Water', 'Thunder', 'Ice', 'Dragon'];
}

function renderWeaponSwitch() {
  weaponSwitch.innerHTML = data.weapons.map(weapon => `
    <button class="weapon-tab ${currentView === 'matchups' && weapon.id === state.weapon ? 'active' : ''}" data-weapon="${weapon.id}">${weapon.name}</button>
  `).join('');

  materialsSwitch.innerHTML = `<button class="weapon-tab ${currentView === 'materials' ? 'active' : ''}" id="materialsTab">Afflicted</button>`;
  weaponSwitch.querySelectorAll('[data-weapon]').forEach(button => {
    button.addEventListener('click', () => {
      currentView = 'matchups';
      state.weapon = button.dataset.weapon;
      state.element = 'All';
      localStorage.setItem('shg_weapon', state.weapon);
      render();
    });
  });
  document.querySelector('#materialsTab')?.addEventListener('click', () => {
    currentView = 'materials';
    render();
  });
}

function filteredMonsters() {
  const query = state.search.trim().toLowerCase();
  return data.monsters.filter(monster => {
    const matchup = matchupFor(monster);
    const haystack = [
      monster.name,
      matchup.weapon,
      matchup.element,
      matchup.rampage || '',
      matchup.ammo || '',
      matchup.type || ''
    ].join(' ').toLowerCase();

    return (!query || haystack.includes(query)) &&
      (state.element === 'All' || matchup.element === state.element);
  });
}

function render() {
  renderWeaponSwitch();
  if (currentView === 'materials') {
    renderMaterials();
    return;
  }

  const weapon = currentWeapon();
  const monster = findMonster();
  const matchup = matchupFor(monster);
  const filtered = filteredMonsters();
  const elements = elementOptions();

  if (!elements.includes(state.element)) state.element = 'All';

  app.innerHTML = `
    <section class="page-heading">
      <div>
        <span class="eyebrow">${weapon.name}</span>
        <h1>Monster Matchups</h1>
      </div>
      <div class="toolbar">
        <div class="select-wrap">
          <select id="elementFilter" aria-label="Filter by element">
            ${elements.map(element => `
              <option value="${element}" ${element === state.element ? 'selected' : ''}>
                ${element === 'All' ? 'All elements' : element}
              </option>
            `).join('')}
          </select>
        </div>
        <input id="search" class="search-input" type="search" placeholder="Search monster, weapon, ammo…" value="${escapeHtml(state.search)}" />
      </div>
    </section>

    <section class="matchup-layout">
      <aside class="monster-panel">
        <div class="list-meta">
          <strong>Monster</strong>
        </div>
        <div class="monster-list" id="monsterList">
          ${filtered.length ? filtered.map(monsterRow).join('') : emptyList()}
        </div>
      </aside>

      <section id="matchupResult">
        ${resultCard(monster, matchup)}
      </section>
    </section>
  `;

  document.querySelector('#elementFilter').addEventListener('change', event => {
    state.element = event.target.value;
    ensureSelectedMonsterMatchesFilter();
    render();
  });

  document.querySelector('#search').addEventListener('input', event => {
    state.search = event.target.value;
    renderMonsterListOnly();
  });

  wireMonsterRows();
}

function renderMonsterListOnly() {
  const list = document.querySelector('#monsterList');
  const filtered = filteredMonsters();
  list.innerHTML = filtered.length ? filtered.map(monsterRow).join('') : emptyList();
  wireMonsterRows();
}

function ensureSelectedMonsterMatchesFilter() {
  if (state.element === 'All') return;
  const selected = findMonster();
  if (matchupFor(selected).element === state.element) return;

  const replacement = data.monsters.find(m => matchupFor(m).element === state.element);
  if (replacement) {
    state.monster = replacement.id;
    localStorage.setItem('shg_monster', state.monster);
  }
}

function monsterRow(monster) {
  const matchup = matchupFor(monster);
  const detail = `${matchup.weapon} · ${matchup.rampage}`;

  return `
    <button class="monster-row ${monster.id === state.monster ? 'active' : ''}" data-monster="${monster.id}">
      <span class="monster-copy">
        <strong>${monster.name}</strong>
        <small>${escapeHtml(detail)}</small>
      </span>
      <span class="element-badge element-${matchup.element.toLowerCase()}">${matchup.element}</span>
    </button>
  `;
}

function wireMonsterRows() {
  document.querySelectorAll('[data-monster]').forEach(row => {
    row.addEventListener('click', () => {
      state.monster = row.dataset.monster;
      localStorage.setItem('shg_monster', state.monster);

      document.querySelectorAll('.monster-row').forEach(item => {
        item.classList.toggle('active', item.dataset.monster === state.monster);
      });

      renderResultOnly();
    });
  });
}

function renderResultOnly() {
  const result = document.querySelector('#matchupResult');
  if (!result) return;

  const monster = findMonster();
  const matchup = matchupFor(monster);
  result.innerHTML = resultCard(monster, matchup);
}

function resultCard(monster, matchup) {
  const config = {
    'dual-blades': {
      subtitle: 'Dual Blades matchup',
      label: 'Recommended Dual Blades'
    },
    'spread-bow': {
      subtitle: 'Spread Bow matchup',
      label: 'Recommended Bow'
    },
    'rf-elemental-lbg': {
      subtitle: 'RF Elemental LBG matchup',
      label: 'Recommended LBG'
    }
  }[state.weapon];

  const cells = [stat(config.label, matchup.weapon)];
  if (matchup.type) cells.push(stat('Shot Type', matchup.type));
  if (matchup.ammo) cells.push(stat('Ammo', matchup.ammo));
  cells.push(stat('Rampage Decoration', matchup.rampage));
  cells.push(stat('Priority Targets', matchup.targets, cells.length % 2 === 0 ? 'wide' : ''));
  if (matchup.handling) cells.push(stat('Handling', matchup.handling, 'wide'));

  return `
    <article class="result-card">
      ${resultHeader(monster, config.subtitle, matchup.element)}
      <div class="stat-grid matchup-grid">
        ${cells.join('')}
      </div>
      ${matchup.note ? `<div class="matchup-note"><small>Note</small><p>${escapeHtml(matchup.note)}</p></div>` : ''}
    </article>
  `;
}

function resultHeader(monster, subtitle, element) {
  return `
    <div class="result-hero">
      <div class="result-title-wrap">
        <div>
          <h2>${monster.name}</h2>
          <p>${subtitle}</p>
        </div>
      </div>
      <div class="verdict">
        <small>Recommended element</small>
        <strong class="element-text-${element.toLowerCase()}">${element}</strong>
      </div>
    </div>
  `;
}

function stat(label, value, className = '') {
  return `<div class="stat ${className}"><small>${label}</small><strong>${escapeHtml(value)}</strong></div>`;
}

function statList(label, value, className = '') {
  const items = String(value).split(',').map(item => item.trim()).filter(Boolean);
  if (items.length < 2) return stat(label, value, className);
  return `
    <div class="stat ${className}">
      <small>${label}</small>
      <ul class="stat-list">${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
    </div>
  `;
}

function emptyList() {
  return '<div class="empty"><strong>No matchups found</strong><span>Try a different search or element.</span></div>';
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}


function renderMaterials() {
  const query = (state.materialSearch || '').toLowerCase();
  const filtered = materials.filter(m => {
    if (state.pins[m.material]) return false;
    const text = Object.values(m).join(' ').toLowerCase();
    return (!query || text.includes(query)) && (state.materialTier === 'All' || m.tier === state.materialTier);
  });
  const selected = materials.find(m => m.material === state.selectedMaterialName) || filtered[0];
  const pinned = materials.filter(m => state.pins[m.material]);
  const prevScroll = document.querySelector('#materialList')?.scrollTop || 0;

  app.innerHTML = `
    <section class="page-heading">
      <div>
        <span class="eyebrow">Qurious Crafting</span>
        <h1>Afflicted Materials</h1>
      </div>
      <input id="materialSearch" class="search-input" type="search" placeholder="Search material, monster, tier..." value="${escapeHtml(state.materialSearch)}">
    </section>
    <div class="tier-filter">${['All','A1','A2','A3','A4','A5','A6','A7','A8','A9'].map(t=>`<button class="${state.materialTier===t?'active':''}" data-tier="${t}">${t}</button>`).join('')}</div>
    <section class="matchup-layout">
      <aside class="monster-panel">
        ${pinned.length ? `
        <div class="list-meta"><strong>Pinned</strong><strong>${pinned.length}</strong></div>
        <div class="pinned-list">
          ${pinned.map(m => materialRow(m, selected)).join('')}
        </div>` : ''}
        <div class="list-meta"><strong>Material</strong></div>
        <div class="monster-list" id="materialList">
          ${filtered.length ? filtered.map(m => materialRow(m, selected)).join('') : emptyList()}
        </div>
      </aside>
      <section id="materialResult">
        ${selected ? materialCard(selected) : emptyList()}
      </section>
    </section>`;

  const list = document.querySelector('#materialList');
  if (list) list.scrollTop = prevScroll;

  document.querySelector('#materialSearch').addEventListener('input', e => {
    state.materialSearch=e.target.value;
    state.selectedMaterialName=null;
    renderMaterials();
  });
  document.querySelectorAll('[data-tier]').forEach(b=>b.addEventListener('click',()=>{
    state.materialTier=b.dataset.tier;
    state.selectedMaterialName=null;
    renderMaterials();
  }));
  document.querySelectorAll('[data-material-name]').forEach(b=>b.addEventListener('click',()=>{
    state.selectedMaterialName=b.dataset.materialName;
    const chosen = materials.find(m => m.material === state.selectedMaterialName);
    document.querySelectorAll('[data-material-name]').forEach(item=>{
      item.classList.toggle('active', item.dataset.materialName===state.selectedMaterialName);
    });
    document.querySelector('#materialResult').innerHTML = chosen ? materialCard(chosen) : '';
    if (chosen) wirePinControls(chosen);
  }));

  if (selected) wirePinControls(selected);
}

function materialRow(material, selected) {
  const amount = state.pins[material.material];
  return `
    <button class="monster-row material-row ${selected === material ? 'active' : ''}" data-material-name="${escapeHtml(material.material)}">
      <span class="monster-glyph">${material.tier}</span>
      <span class="monster-copy">
        <strong>${escapeHtml(material.material)}</strong>
        <small>${escapeHtml(material.farmTarget || material.monsters)}</small>
      </span>
      ${amount ? `<span class="pin-amount">&times;${amount}</span>` : ''}
    </button>
  `;
}

function wirePinControls(material) {
  const result = document.querySelector('#materialResult');
  const name = material.material;
  const rerender = () => {
    state.selectedMaterialName = name;
    savePins();
    renderMaterials();
  };

  result.querySelector('[data-pin]')?.addEventListener('click', () => {
    state.pins[name] = 1;
    rerender();
  });
  result.querySelector('[data-unpin]')?.addEventListener('click', () => {
    delete state.pins[name];
    rerender();
  });
  result.querySelector('[data-pin-inc]')?.addEventListener('click', () => {
    state.pins[name] += 1;
    rerender();
  });
  result.querySelector('[data-pin-dec]')?.addEventListener('click', () => {
    state.pins[name] = Math.max(1, state.pins[name] - 1);
    rerender();
  });
  result.querySelector('#pinAmount')?.addEventListener('change', e => {
    state.pins[name] = Math.max(1, Math.floor(Number(e.target.value) || 1));
    rerender();
  });
}

function materialCard(material) {
  const amount = state.pins[material.material];
  return `
    <article class="result-card">
      <div class="result-hero">
        <div>
          <h2>${escapeHtml(material.material)}</h2>
          <p>Qurious crafting material</p>
        </div>
        <div class="verdict">
          <small>Tier</small>
          <strong>${escapeHtml(material.tier)}</strong>
        </div>
      </div>
      <div class="pin-bar">
        ${amount ? `
          <span class="pin-status">Pinned</span>
          <div class="amount-ctrl">
            <button type="button" data-pin-dec aria-label="Decrease amount needed">&minus;</button>
            <input id="pinAmount" type="number" min="1" value="${amount}" aria-label="Amount needed">
            <button type="button" data-pin-inc aria-label="Increase amount needed">+</button>
          </div>
          <span class="pin-hint">needed</span>
          <button type="button" class="pin-btn" data-unpin>Unpin</button>
        ` : `
          <button type="button" class="pin-btn primary" data-pin>Pin material</button>
          <span class="pin-hint">Track how many you need</span>
        `}
      </div>
      <div class="stat-grid matchup-grid">
        ${stat('Best Farm Target', material.farmTarget)}
        ${stat('Anomaly Level', material.level)}
        ${statList('Monster Sources', material.monsters, 'wide')}
      </div>
    </article>
  `;
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
}

let theme = localStorage.getItem('shg_theme') ||
  (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(theme);

themeToggle.addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('shg_theme', theme);
  applyTheme(theme);
});

render();
