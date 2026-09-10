const data = window.SUNBREAK_DATA;
const app = document.querySelector('#app');
const homeSwitch = document.querySelector('#homeSwitch');
const weaponSwitch = document.querySelector('#weaponSwitch');
const materialsSwitch = document.querySelector('#materialsSwitch');
const changelogSwitch = document.querySelector('#changelogSwitch');
const themeToggle = document.querySelector('#themeToggle');
const materials = window.afflictedMaterials || [];
const changelog = window.APP_CHANGELOG || [];
const drops = (window.MONSTER_DROPS || []).slice().sort((a, b) => a.name.localeCompare(b.name));
const savedView = localStorage.getItem('shg_view');
let currentView = ['home', 'matchups', 'materials', 'changelog', 'drops'].includes(savedView) ? savedView : 'home';

function setView(view) {
  currentView = view;
  localStorage.setItem('shg_view', view);
}

const validWeapons = new Set(data.weapons.map(w => w.id));
const savedWeapon = localStorage.getItem('shg_weapon');
const savedMonster = localStorage.getItem('shg_monster');
const savedElement = localStorage.getItem('shg_element');
const savedTier = localStorage.getItem('shg_tier');
const savedMaterial = localStorage.getItem('shg_material');
const savedDropMonster = localStorage.getItem('shg_dropMonster');
const savedDropRank = localStorage.getItem('shg_dropRankFilter');

const state = {
  weapon: validWeapons.has(savedWeapon) ? savedWeapon : 'dual-blades',
  monster: data.monsters.some(m => m.id === savedMonster) ? savedMonster : 'primordial-malzeno',
  search: '',
  element: ['Fire', 'Water', 'Thunder', 'Ice', 'Dragon'].includes(savedElement) ? savedElement : 'All',
  materialSearch: '',
  materialTier: /^A[1-9]$/.test(savedTier || '') ? savedTier : 'All',
  selectedMaterialName: null,
  dropsSearch: '',
  selectedDropId: null,
  dropRankFilter: ['lowRank', 'highRank', 'masterRank'].includes(savedDropRank) ? savedDropRank : 'lowRank',
  pins: loadPins()
};
state.selectedMaterialName = materials.some(m => m.material === savedMaterial) ? savedMaterial : null;
state.selectedDropId = drops.some(m => m.id === savedDropMonster) ? savedDropMonster : null;

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
  homeSwitch.innerHTML = `
    <button class="weapon-tab ${currentView === 'home' ? 'active' : ''}" id="homeTab">Home</button>
  `;

  weaponSwitch.innerHTML = data.weapons.map(weapon => `
    <button class="weapon-tab ${currentView === 'matchups' && weapon.id === state.weapon ? 'active' : ''}" data-weapon="${weapon.id}">${weapon.name}</button>
  `).join('');

  materialsSwitch.innerHTML = `
    <button class="weapon-tab ${currentView === 'drops' ? 'active' : ''}" id="dropsTab">Monster Drops</button>
    <button class="weapon-tab ${currentView === 'materials' ? 'active' : ''}" id="materialsTab">Afflicted Materials</button>
  `;
  changelogSwitch.innerHTML = `
    <button class="weapon-tab ${currentView === 'changelog' ? 'active' : ''}" id="changelogTab">Changelog</button>
  `;
  weaponSwitch.querySelectorAll('[data-weapon]').forEach(button => {
    button.addEventListener('click', () => {
      setView('matchups');
      state.weapon = button.dataset.weapon;
      state.element = 'All';
      localStorage.setItem('shg_element', state.element);
      localStorage.setItem('shg_weapon', state.weapon);
      render();
    });
  });
  document.querySelector('#materialsTab')?.addEventListener('click', () => {
    setView('materials');
    render();
  });
  document.querySelector('#dropsTab')?.addEventListener('click', () => {
    setView('drops');
    render();
  });
  document.querySelector('#homeTab')?.addEventListener('click', () => {
    setView('home');
    render();
  });
  document.querySelector('#changelogTab')?.addEventListener('click', () => {
    setView('changelog');
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
  if (currentView === 'home') {
    renderHome();
    return;
  }
  if (currentView === 'materials') {
    renderMaterials();
    return;
  }
  if (currentView === 'changelog') {
    renderChangelog();
    return;
  }
  if (currentView === 'drops') {
    renderDrops();
    return;
  }

  const weapon = currentWeapon();
  const filtered = filteredMonsters();
  const monster = filtered.find(m => m.id === state.monster) || filtered[0] || null;
  const matchup = monster ? matchupFor(monster) : null;
  const elements = elementOptions();

  state.monster = monster ? monster.id : null;
  if (state.monster) localStorage.setItem('shg_monster', state.monster);

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
        ${monster && matchup ? resultCard(monster, matchup) : emptyList()}
      </section>
    </section>
  `;

  document.querySelector('#elementFilter').addEventListener('change', event => {
    state.element = event.target.value;
    localStorage.setItem('shg_element', state.element);
    ensureSelectedMonsterMatchesFilter();
    render();
  });

  document.querySelector('#search').addEventListener('input', event => {
    state.search = event.target.value;
    renderMonsterListOnly();
  });

  wireMonsterRows();
}

function renderHome() {
  app.innerHTML = `
    <section class="home-welcome" aria-labelledby="homeTitle">
      <span class="eyebrow">Welcome</span>
      <h1 id="homeTitle">Hello hunter.</h1>
      <p>Welcome to this Monster Hunter Rise: Sunbreak Utility.</p>
      <p class="home-credit">Made by <a href="https://github.com/Crabyy" target="_blank" rel="noopener">Craby</a></p>
      <small class="home-disclaimer">Monster Hunter Rise: Sunbreak &copy; Capcom &middot; Unofficial Fan Reference</small>
    </section>
  `;
}

function renderMonsterListOnly() {
  const list = document.querySelector('#monsterList');
  const filtered = filteredMonsters();
  const selected = filtered.find(m => m.id === state.monster) || filtered[0] || null;
  state.monster = selected ? selected.id : null;
  if (state.monster) localStorage.setItem('shg_monster', state.monster);
  list.innerHTML = filtered.length ? filtered.map(monsterRow).join('') : emptyList();
  document.querySelector('#matchupResult').innerHTML = selected ? resultCard(selected, matchupFor(selected)) : emptyList();
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

function emptyList(title = 'No matchups found', message = 'Try a different search or element.') {
  return `<div class="empty"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(message)}</span></div>`;
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}


function materialMatchesFilter(material) {
  const query = (state.materialSearch || '').toLowerCase();
  const text = Object.values(material).join(' ').toLowerCase();
  return (!query || text.includes(query)) && (state.materialTier === 'All' || material.tier === state.materialTier);
}

function materialsFiltered() {
  return materials.filter(m => {
    if (state.pins[m.material]) return false;
    return materialMatchesFilter(m);
  });
}

function selectedMaterialFrom(filtered) {
  const selected = materials.find(m => m.material === state.selectedMaterialName);
  if (selected && (materialMatchesFilter(selected) || state.pins[selected.material])) return selected;
  return filtered[0] || null;
}

function renderMaterials() {
  const filtered = materialsFiltered();
  const selected = selectedMaterialFrom(filtered);
  state.selectedMaterialName = selected ? selected.material : null;
  if (state.selectedMaterialName) localStorage.setItem('shg_material', state.selectedMaterialName);
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
        <div class="list-meta"><strong>Material</strong></div>
        <div class="monster-list" id="materialList">
          ${filtered.length ? filtered.map(m => materialRow(m, selected)).join('') : emptyList('No materials found', 'Try a different search or tier.')}
        </div>
      </aside>
      <section class="result-col">
        <div id="materialResult">
          ${selected ? materialCard(selected) : emptyList('No material selected', 'Try a different search or tier.')}
        </div>
        ${pinned.length ? `
        <aside class="monster-panel pinned-panel">
          <div class="list-meta">
            <strong>Pinned</strong>
            <span class="list-meta-actions">
              <strong>${pinned.length}</strong>
              <button type="button" class="unpin-all" id="unpinAll">Unpin all</button>
            </span>
          </div>
          <div class="pinned-list">
            ${pinned.map(m => materialRow(m, selected)).join('')}
          </div>
        </aside>` : ''}
      </section>
    </section>`;

  const list = document.querySelector('#materialList');
  if (list) list.scrollTop = prevScroll;

  document.querySelector('#materialSearch').addEventListener('input', e => {
    state.materialSearch=e.target.value;
    renderMaterialListOnly();
  });
  document.querySelectorAll('[data-tier]').forEach(b=>b.addEventListener('click',()=>{
    state.materialTier=b.dataset.tier;
    localStorage.setItem('shg_tier', state.materialTier);
    state.selectedMaterialName=null;
    renderMaterials();
  }));
  wireMaterialRows(document);

  const unpinAll = document.querySelector('#unpinAll');
  unpinAll?.addEventListener('click', () => {
    if (!unpinAll.classList.contains('armed')) {
      unpinAll.classList.add('armed');
      unpinAll.textContent = 'Sure?';
      setTimeout(() => {
        unpinAll.classList.remove('armed');
        unpinAll.textContent = 'Unpin all';
      }, 2500);
      return;
    }
    materials.forEach(m => delete state.pins[m.material]);
    savePins();
    renderMaterials();
  });

  if (selected) wirePinControls(selected);
}

function renderMaterialListOnly() {
  const list = document.querySelector('#materialList');
  if (!list) return;
  const filtered = materialsFiltered();
  const selected = selectedMaterialFrom(filtered);
  state.selectedMaterialName = selected ? selected.material : null;
  if (state.selectedMaterialName) localStorage.setItem('shg_material', state.selectedMaterialName);
  list.innerHTML = filtered.length ? filtered.map(m => materialRow(m, selected)).join('') : emptyList('No materials found', 'Try a different search or tier.');
  document.querySelector('#materialResult').innerHTML = selected ? materialCard(selected) : emptyList('No material selected', 'Try a different search or tier.');
  wireMaterialRows(list);
  if (selected) wirePinControls(selected);
}

function wireMaterialRows(scope) {
  scope.querySelectorAll('[data-material-name]').forEach(b=>b.addEventListener('click',()=>{
    state.selectedMaterialName=b.dataset.materialName;
    localStorage.setItem('shg_material', state.selectedMaterialName);
    const chosen = materials.find(m => m.material === state.selectedMaterialName);
    document.querySelectorAll('[data-material-name]').forEach(item=>{
      item.classList.toggle('active', item.dataset.materialName===state.selectedMaterialName);
    });
    document.querySelector('#materialResult').innerHTML = chosen ? materialCard(chosen) : '';
    if (chosen) wirePinControls(chosen);
  }));
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

const RANK_LABELS = { lowRank: 'Low Rank', highRank: 'High Rank', masterRank: 'Master Rank' };
const DROP_SECTION_KEYS = ['target', 'capture', 'carve', 'breaks', 'drops'];
const AFFLICTED_DROP_NAMES = new Set(materials.map(material => material.material));

function isAfflictedDropEntry(entry) {
  return AFFLICTED_DROP_NAMES.has(entry.item) ||
    entry.item.startsWith('Afflicted ') ||
    String(entry.part || '').toLowerCase().includes('anomaly');
}

function visibleDropEntries(rankData, key) {
  return (rankData[key] || []).filter(entry => !isAfflictedDropEntry(entry));
}

function firstMatchingItem(monster, query, rankFilter = null) {
  const ranks = rankFilter ? [rankFilter] : monster.order;
  for (const rank of ranks) {
    const rankData = monster[rank] || {};
    for (const key of DROP_SECTION_KEYS) {
      const hit = visibleDropEntries(rankData, key).find(row => row.item.toLowerCase().includes(query));
      if (hit) return hit.item;
    }
  }
  return null;
}

function dropsFiltered() {
  const query = (state.dropsSearch || '').trim().toLowerCase();
  return drops.filter(m => {
    if (!m.order.includes(state.dropRankFilter)) return false;
    return !query || m.name.toLowerCase().includes(query) || firstMatchingItem(m, query, state.dropRankFilter);
  });
}

function ensureSelectedDropMatchesFilter() {
  const selected = drops.find(m => m.id === state.selectedDropId);
  if (selected && selected.order.includes(state.dropRankFilter)) return;

  const replacement = drops.find(m => m.order.includes(state.dropRankFilter));
  if (replacement) {
    state.selectedDropId = replacement.id;
    localStorage.setItem('shg_dropMonster', replacement.id);
  }
}

function activeDropRank(monster) {
  return monster.order.includes(state.dropRankFilter) ? state.dropRankFilter : monster.order[0];
}

function dropsProgressText() {
  const total = data.monsters.length;
  if (drops.length >= total) return `${total} of ${total} large monsters added.`;
  return `${drops.length} of ${total} large monsters added so far - more coming soon.`;
}

function renderDrops() {
  const filtered = dropsFiltered();
  const selected = filtered.find(m => m.id === state.selectedDropId) || filtered[0] || null;
  state.selectedDropId = selected ? selected.id : null;
  if (state.selectedDropId) localStorage.setItem('shg_dropMonster', state.selectedDropId);
  const prevScroll = document.querySelector('#dropsList')?.scrollTop || 0;

  app.innerHTML = `
    <section class="page-heading">
      <div>
        <span class="eyebrow">Hunter's Notes</span>
        <h1>Monster Drops</h1>
      </div>
      <input id="dropsSearch" class="search-input" type="search" placeholder="Search monster or material..." value="${escapeHtml(state.dropsSearch)}">
    </section>
    <p class="drops-progress">${dropsProgressText()}</p>
    <div class="tier-filter">
      ${['lowRank', 'highRank', 'masterRank'].map(r => `
        <button class="${state.dropRankFilter === r ? 'active' : ''}" data-drop-rank="${r}">${RANK_LABELS[r]}</button>
      `).join('')}
    </div>
    <section class="matchup-layout">
      <aside class="monster-panel">
        <div class="list-meta"><strong>Monster</strong></div>
        <div class="monster-list" id="dropsList">
          ${filtered.length ? filtered.map(m => dropMonsterRow(m, selected)).join('') : emptyList('No drops found', 'Try a different search or rank.')}
        </div>
      </aside>
      <section class="result-col">
        <div id="dropsResult">
          ${selected ? dropCard(selected) : emptyList('No drops selected', 'Try a different search or rank.')}
        </div>
      </section>
    </section>`;

  const list = document.querySelector('#dropsList');
  if (list) list.scrollTop = prevScroll;

  document.querySelector('#dropsSearch').addEventListener('input', e => {
    state.dropsSearch = e.target.value;
    renderDropsListOnly();
  });
  document.querySelectorAll('[data-drop-rank]').forEach(b => b.addEventListener('click', () => {
    state.dropRankFilter = b.dataset.dropRank;
    localStorage.setItem('shg_dropRankFilter', state.dropRankFilter);
    ensureSelectedDropMatchesFilter();
    renderDrops();
  }));
  wireDropRows(document);
}

function renderDropsListOnly() {
  const list = document.querySelector('#dropsList');
  if (!list) return;
  const filtered = dropsFiltered();
  const selected = filtered.find(m => m.id === state.selectedDropId) || filtered[0] || null;
  state.selectedDropId = selected ? selected.id : null;
  if (state.selectedDropId) localStorage.setItem('shg_dropMonster', state.selectedDropId);
  list.innerHTML = filtered.length ? filtered.map(m => dropMonsterRow(m, selected)).join('') : emptyList('No drops found', 'Try a different search or rank.');
  document.querySelector('#dropsResult').innerHTML = selected ? dropCard(selected) : emptyList('No drops selected', 'Try a different search or rank.');
  wireDropRows(list);
}

function wireDropRows(scope) {
  scope.querySelectorAll('[data-drop-id]').forEach(b => b.addEventListener('click', () => {
    state.selectedDropId = b.dataset.dropId;
    localStorage.setItem('shg_dropMonster', state.selectedDropId);
    const chosen = drops.find(m => m.id === state.selectedDropId);
    document.querySelectorAll('[data-drop-id]').forEach(item => {
      item.classList.toggle('active', item.dataset.dropId === state.selectedDropId);
    });
    document.querySelector('#dropsResult').innerHTML = chosen ? dropCard(chosen) : '';
  }));
}

function dropMonsterRow(monster, selected) {
  const query = (state.dropsSearch || '').trim().toLowerCase();
  const nameMatches = !query || monster.name.toLowerCase().includes(query);
  const matchedItem = !nameMatches ? firstMatchingItem(monster, query, state.dropRankFilter) : null;

  return `
    <button class="monster-row ${selected && selected.id === monster.id ? 'active' : ''}" data-drop-id="${monster.id}">
      <span class="monster-copy">
        <strong>${escapeHtml(monster.name)}</strong>
        ${matchedItem ? `<small>Drops: ${escapeHtml(matchedItem)}</small>` : ''}
      </span>
    </button>
  `;
}

const DROP_CATEGORY_LABELS = { target: 'Target', capture: 'Capture', carve: 'Carve', breaks: 'Break', drops: 'Drop' };

function tabularDropData(rankData) {
  const categories = DROP_SECTION_KEYS.filter(key => visibleDropEntries(rankData, key).length > 0);
  const byItem = new Map();
  const order = [];
  categories.forEach(key => {
    visibleDropEntries(rankData, key).forEach(entry => {
      if (!byItem.has(entry.item)) { byItem.set(entry.item, {}); order.push(entry.item); }
      const cell = byItem.get(entry.item);
      if (!cell[key]) cell[key] = [];
      cell[key].push(entry.part ? `${entry.rate} · ${entry.part}` : entry.rate);
    });
  });
  return { categories, rows: order.map(item => ({ item, cells: byItem.get(item) })) };
}

function dropCard(monster) {
  const rank = activeDropRank(monster);
  const { categories, rows } = tabularDropData(monster[rank] || {});

  return `
    <article class="result-card">
      <div class="result-hero">
        <div>
          <h2>${escapeHtml(monster.name)}</h2>
          <p>Carve, capture &amp; break rewards</p>
        </div>
        <div class="verdict">
          <small>Showing</small>
          <strong>${RANK_LABELS[rank]}</strong>
        </div>
      </div>
      ${rows.length ? dropTable(categories, rows) : '<div class="empty"><strong>No reward data yet</strong><span>This rank hasn\'t been added yet.</span></div>'}
    </article>
  `;
}

function dropTable(categories, rows) {
  return `
    <div class="drop-table-wrap">
      <table class="drop-table">
        <thead>
          <tr>
            <th>Material</th>
            ${categories.map(c => `<th>${DROP_CATEGORY_LABELS[c]}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${rows.map(row => dropTableRow(row, categories)).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function dropTableRow(row, categories) {
  return `
    <tr class="drop-row">
      <td class="drop-item">${escapeHtml(row.item)}</td>
      ${categories.map(c => `<td class="drop-cell">${(row.cells[c] || []).map(escapeHtml).join('<br>') || '<span class="drop-empty">&ndash;</span>'}</td>`).join('')}
    </tr>
  `;
}

function renderChangelog() {
  app.innerHTML = `
    <section class="page-heading">
      <div>
        <span class="eyebrow">App</span>
        <h1>Changelog</h1>
      </div>
    </section>
    <section class="changelog">
      ${changelog.map((entry, index) => `
        <article class="log-entry">
          <div class="log-version">
            <strong>${escapeHtml(entry.version)}</strong>
            ${index === 0 ? '<span class="log-tag">Current</span>' : ''}
          </div>
          <ul class="log-list">
            ${entry.changes.map(change => `<li>${escapeHtml(change)}</li>`).join('')}
          </ul>
        </article>
      `).join('')}
    </section>
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

const versionEl = document.querySelector('#appVersion');
if (versionEl && changelog[0]) versionEl.textContent = changelog[0].version;

const navToggle = document.querySelector('#navToggle');
const navBackdrop = document.querySelector('#navBackdrop');

function setNavOpen(open) {
  document.body.classList.toggle('nav-open', open);
  navBackdrop.hidden = !open;
  navToggle.setAttribute('aria-expanded', String(open));
}

function focusCurrentSearch() {
  const search = app.querySelector('.search-input');
  if (!search) return false;
  search.focus();
  search.select();
  return true;
}

document.addEventListener('keydown', event => {
  const isFindShortcut = (event.ctrlKey || event.metaKey) && !event.altKey && event.key.toLowerCase() === 'f';
  if (!isFindShortcut) return;
  if (!focusCurrentSearch()) return;
  event.preventDefault();
});

navToggle.addEventListener('click', () => {
  setNavOpen(!document.body.classList.contains('nav-open'));
});
navBackdrop.addEventListener('click', () => setNavOpen(false));
document.querySelector('.sidebar').addEventListener('click', event => {
  if (event.target.closest('.weapon-tab')) setNavOpen(false);
});

render();
