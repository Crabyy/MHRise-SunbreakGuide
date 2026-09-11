// Curated, documented hunting spots, not an exhaustive list of every possible spawn.
// Areas may vary by quest/outbreak. Expansion locales appear only in Master Rank.
// Game8 source IDs refer to https://game8.co/games/Monster-Hunter-Rise/archives/<id>.
window.SMALL_MONSTER_LOCATIONS = {
  'altaroth': {
    source: '316139',
    locations: [
      { map: 'Shrine Ruins', areas: [8] },
      { map: 'Frost Islands', areas: [5, 6] },
      { map: 'Sandy Plains', areas: [6] },
      { map: 'Flooded Forest', areas: [8, 12, 14] },
      { map: 'Lava Caverns', areas: [1, 4] }
    ]
  },
  'anteka': { source: '326301', locations: [{ map: 'Frost Islands', areas: [1, 6] }] },
  'baggi': { source: '326311', locations: [{ map: 'Frost Islands', areas: [9, 10, 12], outbreakAreas: [2, 6], outbreak: 'Baggi' }] },
  'bnahabra': {
    source: '316138',
    locations: [
      { map: 'Shrine Ruins', areas: [1, 9, 11], outbreakAreas: [3, 5, 8, 12], outbreak: 'Bnahabra' },
      { map: 'Frost Islands', areas: [3, 11] },
      { map: 'Sandy Plains', areas: [3, 12] },
      { map: 'Flooded Forest', areas: [4] },
      { map: 'Lava Caverns', areas: [6, 7, 10] }
    ]
  },
  'boggi': { source: '376384', locations: [{ map: 'Citadel', areas: [1, 8, 10], outbreakAreas: [3], outbreak: 'Boggi' }] },
  'bombadgy': { source: '316022', locations: [{ map: 'Shrine Ruins', areas: [1, 7, 13] }] },
  'bullfango': {
    source: '316136',
    locations: [
      { map: 'Shrine Ruins', areas: [9] },
      { map: 'Flooded Forest', areas: [3, 10] },
      { map: 'Jungle', areas: [9] }
    ]
  },
  'ceanataur': {
    source: '379631',
    locations: [
      { map: 'Flooded Forest', areas: [3, 9] },
      { map: 'Lava Caverns', areas: [8, 14], detail: 'Lower level' }
    ]
  },
  'delex': { source: '326306', locations: [{ map: 'Sandy Plains', areas: [9, 10] }] },
  'felyne': {
    source: 'https://gamestegy.com/monster-hunter-rise/wiki/102/felyne-details-drops-and-where-to-find',
    locations: [
      { map: 'Shrine Ruins', areas: [3], detail: 'Clifftop above the vines' },
      { map: 'Frost Islands', areas: [5] },
      { map: 'Sandy Plains', areas: [3], detail: 'Upper level' },
      { map: 'Flooded Forest', areas: [7], detail: 'On the cliff' }
    ]
  },
  'gajau': {
    source: '316140',
    locations: [
      { map: 'Shrine Ruins', areas: [2, 10] },
      { map: 'Frost Islands', areas: [5, 8, 12] },
      { map: 'Flooded Forest', areas: [6, 7] },
      { map: 'Lava Caverns', areas: [7, 8] }
    ]
  },
  'gargwa': { source: '316135', locations: [{ map: 'Shrine Ruins', areas: [6, 13], outbreakAreas: [1, 2, 7, 12], outbreak: 'Gargwa' }] },
  'gowngoat': { source: '381156', locations: [{ map: 'Citadel', areas: [1, 2] }] },
  'hermitaur': { source: '379630', locations: [{ map: 'Jungle', areas: [3, 4], outbreakAreas: [9, 11], outbreak: 'Hermitaur' }] },
  'hornetaur': {
    source: '379629',
    locations: [
      { map: 'Jungle', areas: [5, 8], detail: 'Area 5: upper level; Area 8: lower level' },
      { map: 'Citadel', areas: [5, 13], outbreakAreas: [2, 3], outbreak: 'Hornetaur' }
    ]
  },
  'izuchi': {
    source: '316142',
    locations: [
      { map: 'Shrine Ruins', areas: [4, 8], outbreakAreas: [3, 12], outbreak: 'Izuchi' },
      { map: 'Frost Islands', areas: [2, 4] }
    ]
  },
  'jaggi': { source: '326312', locations: [{ map: 'Sandy Plains', areas: [4, 6, 7, 12] }] },
  'jaggia': { source: '326313', locations: [{ map: 'Sandy Plains', areas: [4, 11, 12] }] },
  'jagras': {
    source: '316137',
    locations: [{ map: 'Shrine Ruins', areas: [1, 3] }, { map: 'Flooded Forest', areas: [10, 13] }]
  },
  'kelbi': {
    source: '316133',
    locations: [
      { map: 'Shrine Ruins', areas: [8, 11, 13], detail: 'Area 8: hilltop between Areas 8 and 10' },
      { map: 'Sandy Plains', areas: [1] },
      { map: 'Flooded Forest', areas: [1, 12] }
    ]
  },
  'kestodon': { source: '326303', locations: [{ map: 'Sandy Plains', areas: [5, 11, 12], outbreakAreas: [3, 6], outbreak: 'Kestodon' }] },
  'ludroth': {
    source: '326307',
    locations: [{ map: 'Flooded Forest', areas: [6, 7, 14] }, { map: 'Lava Caverns', areas: [9] }]
  },
  'melynx': {
    source: '316132',
    locations: [
      { map: 'Shrine Ruins', areas: [3, 8] },
      { map: 'Frost Islands', areas: [5] },
      { map: 'Sandy Plains', areas: [9] },
      { map: 'Flooded Forest', areas: [2, 3, 7, 8] },
      { map: 'Lava Caverns', areas: [2] }
    ]
  },
  'popo': { source: '326300', locations: [{ map: 'Frost Islands', areas: [1, 3, 5] }] },
  'pyrantula': {
    source: '379628',
    locations: [{ map: 'Lava Caverns', areas: [4, 10] }, { map: 'Citadel', areas: [3] }]
  },
  'rachnoid': {
    source: '326310',
    locations: [
      { map: 'Sandy Plains', areas: [7, 11] },
      { map: 'Lava Caverns', areas: [13, 14], outbreakAreas: [4, 6, 8, 9, 12], outbreak: 'Rachnoid' }
    ]
  },
  'remobra': {
    source: '316141',
    locations: [
      { map: 'Shrine Ruins', areas: [5], detail: 'Mountaintop' },
      { map: 'Frost Islands', areas: [7, 10] },
      { map: 'Sandy Plains', areas: [7, 12] },
      { map: 'Flooded Forest', areas: [3, 8] },
      { map: 'Lava Caverns', areas: [1, 5, 9, 12] }
    ]
  },
  'rhenoplos': {
    source: '326304',
    locations: [
      { map: 'Sandy Plains', areas: [1, 8], outbreakAreas: [3, 6, 10, 11], outbreak: 'Rhenoplos' },
      { map: 'Lava Caverns', areas: [4, 5] }
    ]
  },
  'slagtoth': {
    source: '326302',
    locations: [{ map: 'Flooded Forest', areas: [1, 2, 4, 5] }, { map: 'Lava Caverns', areas: [1, 2] }]
  },
  'uroktor': { source: '326308', locations: [{ map: 'Lava Caverns', areas: [13, 14], outbreakAreas: [4, 5, 12], outbreak: 'Uroktor', detail: 'Lower level' }] },
  'velociprey': { source: '379535', locations: [{ map: 'Jungle', areas: [5, 7] }] },
  'vespoid': {
    source: '379627',
    locations: [
      { map: 'Jungle', areas: [9], outbreakAreas: [2, 4, 5, 6, 7, 8], outbreak: 'Vespoid' },
      { map: 'Citadel', areas: [10, 13] }
    ]
  },
  'wroggi': {
    source: '316143',
    locations: [
      { map: 'Shrine Ruins', areas: [12], detail: 'Normal quests; absent during expedition outbreaks' },
      { map: 'Flooded Forest', areas: [8, 9, 10, 11, 13] },
      { map: 'Lava Caverns', areas: [10, 11] }
    ]
  },
  'zamite': { source: '380665', locations: [{ map: 'Frost Islands', areas: [4, 8, 11], outbreakAreas: [7, 10, 12], outbreak: 'Zamite' }] }
};
