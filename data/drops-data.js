// Monster Drops: carve / capture / target / part-break / dropped-material reward tables.
// Sourced and cross-checked from public MH Rise: Sunbreak reference databases (Game8 and Kiranico).
// Afflicted/anomaly investigation materials are intentionally excluded; use the Afflicted Materials tab for those.
// Schema per monster:
//   id     - matches the monster id in game-data.js where the monster also has a matchup entry
//   name   - display name
//   order  - which rank keys exist and in what order to show them
//   <rank> - lowRank / highRank / masterRank, each an object of optional sections:
//            target (quest reward pool), capture (capture reward pool),
//            carve (body/part carve pool), breaks (part-break rewards), drops (dropped materials)
//            each section is an array of { item, rate, part? }
window.MONSTER_DROPS = [
  {
    "id": "great-baggi",
    "name": "Great Baggi",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Great Baggi Claw",
          "rate": "36%"
        },
        {
          "item": "Sleep Sac",
          "rate": "24%"
        },
        {
          "item": "Great Baggi Hide",
          "rate": "21%"
        },
        {
          "item": "Monster Bone M",
          "rate": "14%"
        },
        {
          "item": "King's Crest",
          "rate": "5%"
        }
      ],
      "capture": [
        {
          "item": "Great Baggi Claw",
          "rate": "46%"
        },
        {
          "item": "Great Baggi Hide",
          "rate": "21% x2"
        },
        {
          "item": "Monster Bone M",
          "rate": "18% x2"
        },
        {
          "item": "King's Crest",
          "rate": "15%"
        }
      ],
      "carve": [
        {
          "item": "Great Baggi Hide",
          "rate": "40%",
          "part": "Body"
        },
        {
          "item": "Great Baggi Claw",
          "rate": "33%",
          "part": "Body"
        },
        {
          "item": "Sleep Sac",
          "rate": "27%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "King's Crest",
          "rate": "70%",
          "part": "Head"
        },
        {
          "item": "Sleep Sac",
          "rate": "30%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Great Baggi Hide",
          "rate": "40%"
        },
        {
          "item": "Great Baggi Claw",
          "rate": "10%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Great Baggi Hide",
          "rate": "70%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Great Baggi Claw",
          "rate": "30%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Great Baggi Claw+",
          "rate": "37%"
        },
        {
          "item": "Coma Sac",
          "rate": "25%"
        },
        {
          "item": "Great Baggi Hide+",
          "rate": "22%"
        },
        {
          "item": "Monster Bone+",
          "rate": "13%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Great Baggi Claw+",
          "rate": "47%"
        },
        {
          "item": "Great Baggi Hide+",
          "rate": "23% x2"
        },
        {
          "item": "Monster Bone+",
          "rate": "13% x2"
        },
        {
          "item": "King's Crest",
          "rate": "12%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "5%"
        }
      ],
      "carve": [
        {
          "item": "Great Baggi Hide+",
          "rate": "38%",
          "part": "Body"
        },
        {
          "item": "Great Baggi Claw+",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Coma Sac",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "3%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "King's Crest",
          "rate": "70%",
          "part": "Head"
        },
        {
          "item": "Coma Sac",
          "rate": "20%",
          "part": "Head"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "10%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Great Baggi Hide+",
          "rate": "39%"
        },
        {
          "item": "Great Baggi Claw+",
          "rate": "10%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "30%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "20%"
        },
        {
          "item": "Great Baggi Hide+",
          "rate": "70%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Great Baggi Claw+",
          "rate": "30%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Great Baggi Thickhide",
          "rate": "36%"
        },
        {
          "item": "Torpor Sac",
          "rate": "30%"
        },
        {
          "item": "Great Baggi Claw+",
          "rate": "20% x2"
        },
        {
          "item": "Monster Hardbone",
          "rate": "11%"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Great Baggi Thickhide",
          "rate": "41% x2"
        },
        {
          "item": "Great Baggi Claw+",
          "rate": "22% x2"
        },
        {
          "item": "Glorious Crest",
          "rate": "15%"
        },
        {
          "item": "Monster Hardbone",
          "rate": "13% x2"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "6%"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Great Baggi Thickhide",
          "rate": "44%",
          "part": "Body"
        },
        {
          "item": "Great Baggi Claw+",
          "rate": "18% x2",
          "part": "Body"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "4%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Glorious Crest",
          "rate": "75%",
          "part": "Head"
        },
        {
          "item": "Torpor Sac",
          "rate": "20-32%",
          "part": "Head"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "2-5%",
          "part": "Head/Body"
        }
      ],
      "drops": [
        {
          "item": "Great Baggi Thickhide",
          "rate": "37%"
        },
        {
          "item": "Great Baggi Claw+",
          "rate": "8% x2"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "4%"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "20%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "30%"
        },
        {
          "item": "Great Baggi Thickhide",
          "rate": "80%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Great Baggi Claw+",
          "rate": "20% x2",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "arzuros",
    "name": "Arzuros",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Arzuros Pelt",
          "rate": "38%"
        },
        {
          "item": "Arzuros Brace",
          "rate": "18%"
        },
        {
          "item": "Jumbo Bone",
          "rate": "16%"
        },
        {
          "item": "Arzuros Shell",
          "rate": "14%"
        },
        {
          "item": "Honey",
          "rate": "14% x3"
        }
      ],
      "capture": [
        {
          "item": "Arzuros Shell",
          "rate": "39%"
        },
        {
          "item": "Arzuros Brace",
          "rate": "24%"
        },
        {
          "item": "Jumbo Bone",
          "rate": "20% x2"
        },
        {
          "item": "Arzuros Pelt",
          "rate": "17% x2"
        }
      ],
      "carve": [
        {
          "item": "Arzuros Pelt",
          "rate": "55%",
          "part": "Body"
        },
        {
          "item": "Arzuros Shell",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Jumbo Bone",
          "rate": "15%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Arzuros Brace",
          "rate": "80%",
          "part": "Foreleg"
        },
        {
          "item": "Arzuros Pelt",
          "rate": "20%",
          "part": "Foreleg"
        }
      ],
      "drops": [
        {
          "item": "Arzuros Pelt",
          "rate": "40%"
        },
        {
          "item": "Arzuros Brace",
          "rate": "10%"
        },
        {
          "item": "Beast Tear",
          "rate": "50%"
        },
        {
          "item": "Honey",
          "rate": "100%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Sushifish",
          "rate": "85%"
        },
        {
          "item": "Goldenfish",
          "rate": "15%"
        },
        {
          "item": "Arzuros Pelt",
          "rate": "60%"
        },
        {
          "item": "Arzuros Shell",
          "rate": "40%"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Arzuros Pelt+",
          "rate": "36%"
        },
        {
          "item": "Arzuros Brace+",
          "rate": "21%"
        },
        {
          "item": "Arzuros Carapace",
          "rate": "14%"
        },
        {
          "item": "Stoutbone",
          "rate": "14%"
        },
        {
          "item": "Honey",
          "rate": "10% x6"
        },
        {
          "item": "Beast Gem",
          "rate": "5%"
        }
      ],
      "capture": [
        {
          "item": "Arzuros Carapace",
          "rate": "37%"
        },
        {
          "item": "Arzuros Brace+",
          "rate": "22%"
        },
        {
          "item": "Stoutbone",
          "rate": "18% x2"
        },
        {
          "item": "Arzuros Pelt+",
          "rate": "16% x2"
        },
        {
          "item": "Beast Gem",
          "rate": "7%"
        }
      ],
      "carve": [
        {
          "item": "Arzuros Pelt+",
          "rate": "52%",
          "part": "Body"
        },
        {
          "item": "Arzuros Carapace",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Stoutbone",
          "rate": "15%",
          "part": "Body"
        },
        {
          "item": "Beast Gem",
          "rate": "3%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Arzuros Brace+",
          "rate": "80%",
          "part": "Foreleg"
        },
        {
          "item": "Arzuros Pelt+",
          "rate": "20%",
          "part": "Foreleg"
        }
      ],
      "drops": [
        {
          "item": "Arzuros Pelt+",
          "rate": "39%"
        },
        {
          "item": "Arzuros Brace+",
          "rate": "10%"
        },
        {
          "item": "Beast Gem",
          "rate": "1%"
        },
        {
          "item": "Beast Tear",
          "rate": "30%"
        },
        {
          "item": "Large Beast Tear",
          "rate": "20%"
        },
        {
          "item": "Honey",
          "rate": "100% x3",
          "part": "Wyvern Riding"
        },
        {
          "item": "Sushifish",
          "rate": "75%"
        },
        {
          "item": "Goldenfish",
          "rate": "25%"
        },
        {
          "item": "Arzuros Pelt+",
          "rate": "60%"
        },
        {
          "item": "Arzuros Carapace",
          "rate": "40%"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Arzuros Fur",
          "rate": "36%"
        },
        {
          "item": "Arzuros Allbrace",
          "rate": "22%"
        },
        {
          "item": "Massive Bone",
          "rate": "15%"
        },
        {
          "item": "Arzuros Cortex",
          "rate": "14%"
        },
        {
          "item": "Honey",
          "rate": "10% x8"
        },
        {
          "item": "Large Beast Gem",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Arzuros Cortex",
          "rate": "36%"
        },
        {
          "item": "Arzuros Allbrace",
          "rate": "22%"
        },
        {
          "item": "Massive Bone",
          "rate": "18% x2"
        },
        {
          "item": "Arzuros Fur",
          "rate": "15% x2"
        },
        {
          "item": "Beast Gem",
          "rate": "6%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Arzuros Fur",
          "rate": "20%",
          "part": "Foreleg"
        },
        {
          "item": "Arzuros Fur",
          "rate": "49%",
          "part": "Body"
        },
        {
          "item": "Arzuros Cortex",
          "rate": "29%",
          "part": "Body"
        },
        {
          "item": "Massive Bone",
          "rate": "16%",
          "part": "Body"
        },
        {
          "item": "Beast Gem",
          "rate": "4%",
          "part": "Body"
        },
        {
          "item": "Large Beast Gem",
          "rate": "2%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Arzuros Allbrace",
          "rate": "80%",
          "part": "Foreleg"
        }
      ],
      "drops": [
        {
          "item": "Arzuros Fur",
          "rate": "35%"
        },
        {
          "item": "Arzuros Allbrace",
          "rate": "10%"
        },
        {
          "item": "Beast Gem",
          "rate": "4%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "1%"
        },
        {
          "item": "Beast Tear",
          "rate": "20%"
        },
        {
          "item": "Large Beast Tear",
          "rate": "30%"
        },
        {
          "item": "Honey",
          "rate": "100% x5",
          "part": "Wyvern Riding"
        },
        {
          "item": "Sushifish",
          "rate": "75%"
        },
        {
          "item": "Goldenfish",
          "rate": "25%"
        },
        {
          "item": "Arzuros Fur",
          "rate": "60%"
        },
        {
          "item": "Arzuros Cortex",
          "rate": "40%"
        }
      ]
    }
  },
  {
    "id": "anjanath",
    "name": "Anjanath",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Anjanath Scale",
          "rate": "35%"
        },
        {
          "item": "Anjanath Pelt",
          "rate": "20%"
        },
        {
          "item": "Anjanath Nosebone",
          "rate": "19%"
        },
        {
          "item": "Flame Sac",
          "rate": "15%"
        },
        {
          "item": "Anjanath Tail",
          "rate": "9%"
        },
        {
          "item": "Anjanath Plate",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Anjanath Scale",
          "rate": "31%"
        },
        {
          "item": "Anjanath Fang",
          "rate": "23%"
        },
        {
          "item": "Anjanath Pelt",
          "rate": "21%"
        },
        {
          "item": "Anjanath Tail",
          "rate": "12%"
        },
        {
          "item": "Flame Sac",
          "rate": "10% x2"
        },
        {
          "item": "Anjanath Plate",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Anjanath Scale",
          "rate": "31%",
          "part": "Body"
        },
        {
          "item": "Anjanath Scale",
          "rate": "27%",
          "part": "Tail"
        },
        {
          "item": "Anjanath Pelt",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Anjanath Fang",
          "rate": "23%",
          "part": "Body"
        },
        {
          "item": "Anjanath Nosebone",
          "rate": "18%",
          "part": "Body"
        },
        {
          "item": "Anjanath Plate",
          "rate": "3%",
          "part": "Tail"
        },
        {
          "item": "Anjanath Plate",
          "rate": "1%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Anjanath Fang",
          "rate": "62%",
          "part": "Head"
        },
        {
          "item": "Anjanath Scale",
          "rate": "60%",
          "part": "Leg"
        },
        {
          "item": "Anjanath Scale",
          "rate": "40% x2",
          "part": "Leg"
        },
        {
          "item": "Anjanath Tail",
          "rate": "70%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Anjanath Scale",
          "rate": "39%"
        },
        {
          "item": "Anjanath Fang",
          "rate": "10%"
        },
        {
          "item": "Anjanath Plate",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Anjanath Scale",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Anjanath Pelt",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Anjanath Fang",
          "rate": "20%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Anjanath Scale+",
          "rate": "34%"
        },
        {
          "item": "Anjanath Pelt+",
          "rate": "20%"
        },
        {
          "item": "Anjanath Nosebone+",
          "rate": "18%"
        },
        {
          "item": "Inferno Sac",
          "rate": "15%"
        },
        {
          "item": "Anjanath Tail",
          "rate": "6%"
        },
        {
          "item": "Anjanath Plate",
          "rate": "5%"
        },
        {
          "item": "Anjanath Gem",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Anjanath Scale+",
          "rate": "31%"
        },
        {
          "item": "Anjanath Fang+",
          "rate": "23% x2"
        },
        {
          "item": "Anjanath Pelt+",
          "rate": "21%"
        },
        {
          "item": "Anjanath Tail",
          "rate": "8%"
        },
        {
          "item": "Inferno Sac",
          "rate": "7% x2"
        },
        {
          "item": "Anjanath Plate",
          "rate": "7%"
        },
        {
          "item": "Anjanath Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Anjanath Scale+",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Anjanath Scale+",
          "rate": "25%",
          "part": "Tail"
        },
        {
          "item": "Anjanath Pelt+",
          "rate": "26%",
          "part": "Body"
        },
        {
          "item": "Anjanath Fang+",
          "rate": "22%",
          "part": "Body"
        },
        {
          "item": "Anjanath Nosebone+",
          "rate": "17%",
          "part": "Body"
        },
        {
          "item": "Anjanath Plate",
          "rate": "7%",
          "part": "Tail"
        },
        {
          "item": "Anjanath Plate",
          "rate": "4%",
          "part": "Body"
        },
        {
          "item": "Anjanath Gem",
          "rate": "3%",
          "part": "Tail"
        },
        {
          "item": "Anjanath Gem",
          "rate": "1%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Anjanath Fang+",
          "rate": "60%",
          "part": "Head"
        },
        {
          "item": "Anjanath Scale+",
          "rate": "60%",
          "part": "Leg"
        },
        {
          "item": "Anjanath Scale+",
          "rate": "40% x2",
          "part": "Leg"
        },
        {
          "item": "Anjanath Tail",
          "rate": "65%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Anjanath Scale+",
          "rate": "36%"
        },
        {
          "item": "Anjanath Fang+",
          "rate": "10%"
        },
        {
          "item": "Anjanath Plate",
          "rate": "3%"
        },
        {
          "item": "Anjanath Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "15%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "35%"
        },
        {
          "item": "Anjanath Scale+",
          "rate": "49%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Anjanath Pelt+",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Anjanath Fang+",
          "rate": "20%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Anjanath Plate",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Anjanath Shard",
          "rate": "34%"
        },
        {
          "item": "Anjanath Fur",
          "rate": "20%"
        },
        {
          "item": "Heavy Anjanath Nosebone",
          "rate": "18%"
        },
        {
          "item": "Conflagrant Sac",
          "rate": "15%"
        },
        {
          "item": "Anjanath Lash",
          "rate": "6%"
        },
        {
          "item": "Anjanath Gem",
          "rate": "5%"
        },
        {
          "item": "Anjanath Mantle",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Anjanath Shard",
          "rate": "31%"
        },
        {
          "item": "Anjanath Hardfang",
          "rate": "23% x2"
        },
        {
          "item": "Anjanath Fur",
          "rate": "21%"
        },
        {
          "item": "Anjanath Lash",
          "rate": "8%"
        },
        {
          "item": "Anjanath Gem",
          "rate": "7%"
        },
        {
          "item": "Conflagrant Sac",
          "rate": "7% x2"
        },
        {
          "item": "Anjanath Mantle",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Anjanath Shard",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Anjanath Shard",
          "rate": "20%",
          "part": "Tail"
        },
        {
          "item": "Anjanath Fur",
          "rate": "26%",
          "part": "Body"
        },
        {
          "item": "Anjanath Hardfang",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Heavy Anjanath Nosebone",
          "rate": "17%",
          "part": "Body"
        },
        {
          "item": "Anjanath Gem",
          "rate": "7%",
          "part": "Tail"
        },
        {
          "item": "Anjanath Gem",
          "rate": "4%",
          "part": "Body"
        },
        {
          "item": "Anjanath Mantle",
          "rate": "3%",
          "part": "Tail"
        },
        {
          "item": "Anjanath Mantle",
          "rate": "2%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Anjanath Hardfang",
          "rate": "69%",
          "part": "Head"
        },
        {
          "item": "Anjanath Shard",
          "rate": "60%",
          "part": "Leg"
        },
        {
          "item": "Anjanath Shard",
          "rate": "40% x2",
          "part": "Leg"
        },
        {
          "item": "Anjanath Lash",
          "rate": "70%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Anjanath Shard",
          "rate": "36%"
        },
        {
          "item": "Anjanath Hardfang",
          "rate": "10%"
        },
        {
          "item": "Anjanath Gem",
          "rate": "3%"
        },
        {
          "item": "Anjanath Mantle",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "10%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Anjanath Shard",
          "rate": "49%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Anjanath Fur",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Anjanath Hardfang",
          "rate": "20%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Anjanath Gem",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "rathalos",
    "name": "Rathalos",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Rathalos Shell",
          "rate": "31%"
        },
        {
          "item": "Rathalos Webbing",
          "rate": "23%"
        },
        {
          "item": "Rathalos Scale",
          "rate": "16%"
        },
        {
          "item": "Flame Sac",
          "rate": "14%"
        }
      ],
      "capture": [
        {
          "item": "Rathalos Shell",
          "rate": "30%"
        },
        {
          "item": "Rathalos Webbing",
          "rate": "27%"
        },
        {
          "item": "Rathalos Tail",
          "rate": "19%"
        }
      ],
      "carve": [
        {
          "item": "Rathalos Tail",
          "rate": "70%",
          "part": "Tail"
        },
        {
          "item": "Rathalos Scale",
          "rate": "38%",
          "part": "Body"
        }
      ],
      "drops": [
        {
          "item": "Rathalos Scale",
          "rate": "37%"
        },
        {
          "item": "Rath Wingtalon",
          "rate": "12%"
        },
        {
          "item": "Rathalos Plate",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Rathalos Scale",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rathalos Shell",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rath Wingtalon",
          "rate": "20%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Rathalos Carapace",
          "rate": "27%"
        },
        {
          "item": "Rathalos Wing",
          "rate": "20%"
        },
        {
          "item": "Inferno Sac",
          "rate": "15%"
        },
        {
          "item": "Rathalos Scale+",
          "rate": "15%"
        }
      ],
      "capture": [
        {
          "item": "Rathalos Carapace",
          "rate": "32%"
        },
        {
          "item": "Rathalos Wing",
          "rate": "27%"
        },
        {
          "item": "Rath Wingtalon+",
          "rate": "14%"
        },
        {
          "item": "Rathalos Tail",
          "rate": "12%"
        }
      ],
      "carve": [
        {
          "item": "Rathalos Tail",
          "rate": "60%",
          "part": "Tail"
        },
        {
          "item": "Rathalos Scale+",
          "rate": "36%",
          "part": "Body/Tail"
        }
      ],
      "drops": [
        {
          "item": "Rathalos Scale+",
          "rate": "34%"
        },
        {
          "item": "Rath Wingtalon+",
          "rate": "12%"
        },
        {
          "item": "Rathalos Plate",
          "rate": "3%"
        },
        {
          "item": "Rathalos Ruby",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "15%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "35%"
        },
        {
          "item": "Rathalos Scale+",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rathalos Carapace",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rath Wingtalon+",
          "rate": "19%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rathalos Plate",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Rathalos Cortex",
          "rate": "31%"
        },
        {
          "item": "Rathalos Fellwing",
          "rate": "23%"
        },
        {
          "item": "Rathalos Shard",
          "rate": "17%"
        },
        {
          "item": "Conflagrant Sac",
          "rate": "15%"
        },
        {
          "item": "Rathalos Lash",
          "rate": "7%"
        },
        {
          "item": "Rathalos Ruby",
          "rate": "5%"
        },
        {
          "item": "Rathalos Mantle",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Rathalos Cortex",
          "rate": "32%"
        },
        {
          "item": "Rathalos Fellwing",
          "rate": "27%"
        },
        {
          "item": "Rath Wingripper",
          "rate": "14%"
        },
        {
          "item": "Rathalos Lash",
          "rate": "12%"
        },
        {
          "item": "Rath Medulla",
          "rate": "7%"
        },
        {
          "item": "Rathalos Ruby",
          "rate": "5%"
        },
        {
          "item": "Rathalos Mantle",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Rathalos Shard",
          "rate": "36%",
          "part": "Body"
        },
        {
          "item": "Rathalos Cortex",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Rathalos Fellwing",
          "rate": "19%",
          "part": "Body"
        },
        {
          "item": "Rathalos Lash",
          "rate": "70%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Rath Wingripper",
          "rate": "70%",
          "part": "Wings"
        },
        {
          "item": "Rathalos Shard",
          "rate": "64%",
          "part": "Head"
        },
        {
          "item": "Rathalos Cortex",
          "rate": "62%",
          "part": "Back"
        }
      ],
      "drops": [
        {
          "item": "Rathalos Shard",
          "rate": "34%"
        },
        {
          "item": "Rath Wingripper",
          "rate": "12%"
        },
        {
          "item": "Rathalos Ruby",
          "rate": "3%"
        },
        {
          "item": "Rathalos Mantle",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "10%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Rathalos Shard",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rathalos Cortex",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rath Wingripper",
          "rate": "19%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rathalos Ruby",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "rathian",
    "name": "Rathian",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Rathian Shell",
          "rate": "28%"
        },
        {
          "item": "Rathian Webbing",
          "rate": "19%"
        },
        {
          "item": "Flame Sac",
          "rate": "17%"
        },
        {
          "item": "Rathian Scale",
          "rate": "14% x2"
        },
        {
          "item": "Monster Bone L",
          "rate": "13%"
        },
        {
          "item": "Rathian Spike",
          "rate": "7%"
        },
        {
          "item": "Rathian Plate",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Rathian Shell",
          "rate": "34%"
        },
        {
          "item": "Flame Sac",
          "rate": "21%"
        },
        {
          "item": "Rathian Scale",
          "rate": "16% x2"
        },
        {
          "item": "Rath Wingtalon",
          "rate": "14%"
        },
        {
          "item": "Rath Marrow",
          "rate": "12%"
        },
        {
          "item": "Rathian Plate",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Rathian Shell",
          "rate": "36%",
          "part": "Head"
        },
        {
          "item": "Rathian Shell",
          "rate": "29%",
          "part": "Back"
        },
        {
          "item": "Rathian Webbing",
          "rate": "20%",
          "part": "Wing"
        },
        {
          "item": "Rathian Plate",
          "rate": "4%",
          "part": "Head"
        },
        {
          "item": "Rathian Plate",
          "rate": "1%",
          "part": "Back"
        },
        {
          "item": "Rathian Scale",
          "rate": "38%",
          "part": "Body"
        },
        {
          "item": "Rathian Scale",
          "rate": "50%",
          "part": "Tail"
        },
        {
          "item": "Flame Sac",
          "rate": "13%",
          "part": "Body"
        },
        {
          "item": "Rath Marrow",
          "rate": "7%",
          "part": "Tail"
        },
        {
          "item": "Rathian Spike",
          "rate": "5%",
          "part": "Body"
        },
        {
          "item": "Rathian Spike",
          "rate": "40%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Rath Wingtalon",
          "rate": "80% x2",
          "part": "Wing"
        },
        {
          "item": "Rathian Spike",
          "rate": "70%",
          "part": "Back"
        },
        {
          "item": "Rathian Scale",
          "rate": "60%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Rathian Scale",
          "rate": "45%"
        },
        {
          "item": "Rathian Spike",
          "rate": "4%"
        },
        {
          "item": "Rathian Plate",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Rathian Scale",
          "rate": "45%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rathian Shell",
          "rate": "39%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rath Wingtalon",
          "rate": "15%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rathian Spike",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Rathian Carapace",
          "rate": "31%"
        },
        {
          "item": "Inferno Sac",
          "rate": "18%"
        },
        {
          "item": "Rathian Scale+",
          "rate": "14%"
        },
        {
          "item": "Rathian Webbing",
          "rate": "12% x2"
        },
        {
          "item": "Monster Keenbone",
          "rate": "12%"
        },
        {
          "item": "Rathian Spike+",
          "rate": "7%"
        },
        {
          "item": "Rathian Plate",
          "rate": "5%"
        },
        {
          "item": "Rathian Ruby",
          "rate": "1%"
        }
      ],
      "capture": [
        {
          "item": "Rathian Carapace",
          "rate": "25%"
        },
        {
          "item": "Inferno Sac",
          "rate": "20%"
        },
        {
          "item": "Rath Wingtalon+",
          "rate": "13%"
        },
        {
          "item": "Rathian Scale+",
          "rate": "12% x2"
        },
        {
          "item": "Rath Marrow",
          "rate": "12%"
        },
        {
          "item": "Rath Medulla",
          "rate": "10%"
        },
        {
          "item": "Rathian Plate",
          "rate": "5%"
        },
        {
          "item": "Rathian Ruby",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Rathian Carapace",
          "rate": "30%",
          "part": "Head"
        },
        {
          "item": "Rathian Carapace",
          "rate": "26%",
          "part": "Back"
        },
        {
          "item": "Rathian Webbing",
          "rate": "20% x2",
          "part": "Wing"
        },
        {
          "item": "Rathian Plate",
          "rate": "7%",
          "part": "Head"
        },
        {
          "item": "Rathian Plate",
          "rate": "3%",
          "part": "Back"
        },
        {
          "item": "Rathian Ruby",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Rathian Ruby",
          "rate": "1%",
          "part": "Back"
        },
        {
          "item": "Rathian Scale+",
          "rate": "43%",
          "part": "Body"
        },
        {
          "item": "Rathian Scale+",
          "rate": "35%",
          "part": "Tail"
        },
        {
          "item": "Inferno Sac",
          "rate": "17%",
          "part": "Body"
        },
        {
          "item": "Rath Marrow",
          "rate": "10%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Rath Wingtalon+",
          "rate": "80%",
          "part": "Wing"
        },
        {
          "item": "Rathian Spike+",
          "rate": "70%",
          "part": "Back"
        },
        {
          "item": "Rathian Scale+",
          "rate": "60%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Rathian Scale+",
          "rate": "42%"
        },
        {
          "item": "Rathian Spike+",
          "rate": "4%"
        },
        {
          "item": "Rathian Plate",
          "rate": "3%"
        },
        {
          "item": "Rathian Ruby",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "20%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "30%"
        },
        {
          "item": "Rathian Scale+",
          "rate": "44%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rathian Carapace",
          "rate": "39%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rath Wingtalon+",
          "rate": "15%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rathian Spike+",
          "rate": "1%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rathian Plate",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Rathian Cortex",
          "rate": "27%"
        },
        {
          "item": "Conflagrant Sac",
          "rate": "18%"
        },
        {
          "item": "Rathian Weave",
          "rate": "15%"
        },
        {
          "item": "Rathian Shard",
          "rate": "14%"
        },
        {
          "item": "Monster Toughbone",
          "rate": "12%"
        },
        {
          "item": "Rathian Surspike",
          "rate": "7%"
        },
        {
          "item": "Rathian Ruby",
          "rate": "5%"
        },
        {
          "item": "Rathian Mantle",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Rathian Cortex",
          "rate": "28%"
        },
        {
          "item": "Conflagrant Sac",
          "rate": "21%"
        },
        {
          "item": "Rath Wingripper",
          "rate": "17%"
        },
        {
          "item": "Rathian Shard",
          "rate": "14% x2"
        },
        {
          "item": "Rath Medulla",
          "rate": "10%"
        },
        {
          "item": "Rathian Ruby",
          "rate": "7%"
        },
        {
          "item": "Rathian Mantle",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Rathian Cortex",
          "rate": "30%",
          "part": "Head"
        },
        {
          "item": "Rathian Cortex",
          "rate": "24%",
          "part": "Back"
        },
        {
          "item": "Rathian Weave",
          "rate": "20%",
          "part": "Wing"
        },
        {
          "item": "Rathian Ruby",
          "rate": "7%",
          "part": "Head"
        },
        {
          "item": "Rathian Ruby",
          "rate": "4%",
          "part": "Back"
        },
        {
          "item": "Rathian Mantle",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Rathian Mantle",
          "rate": "2%",
          "part": "Back"
        },
        {
          "item": "Rathian Shard",
          "rate": "41%",
          "part": "Body"
        },
        {
          "item": "Rathian Shard",
          "rate": "33%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Rath Wingripper",
          "rate": "80%",
          "part": "Wing"
        },
        {
          "item": "Rathian Surspike",
          "rate": "70%",
          "part": "Back"
        },
        {
          "item": "Rathian Shard",
          "rate": "60%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Rathian Shard",
          "rate": "42%"
        },
        {
          "item": "Rathian Surspike",
          "rate": "4%"
        },
        {
          "item": "Rathian Ruby",
          "rate": "3%"
        },
        {
          "item": "Rathian Mantle",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "15%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "35%"
        },
        {
          "item": "Rathian Shard",
          "rate": "44%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rathian Cortex",
          "rate": "39%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rath Wingripper",
          "rate": "15%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rathian Surspike",
          "rate": "1%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rathian Ruby",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "tigrex",
    "name": "Tigrex",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Tigrex Scale",
          "rate": "33%"
        },
        {
          "item": "Tigrex Claw",
          "rate": "21%"
        },
        {
          "item": "Tigrex Fang",
          "rate": "17%"
        },
        {
          "item": "Tigrex Shell",
          "rate": "15%"
        },
        {
          "item": "Tigrex Tail",
          "rate": "9%"
        },
        {
          "item": "Tigrex Scalp",
          "rate": "5%"
        }
      ],
      "capture": [
        {
          "item": "Tigrex Shell",
          "rate": "37%"
        },
        {
          "item": "Tigrex Fang",
          "rate": "28%"
        },
        {
          "item": "Tigrex Scale",
          "rate": "18%"
        },
        {
          "item": "Tigrex Tail",
          "rate": "12%"
        },
        {
          "item": "Tigrex Scalp",
          "rate": "5%"
        }
      ],
      "drops": [
        {
          "item": "Tigrex Scale",
          "rate": "40%"
        },
        {
          "item": "Tigrex Claw",
          "rate": "10%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Tigrex Scale",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Tigrex Shell",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Tigrex Claw",
          "rate": "20%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Tigrex Scale+",
          "rate": "32%"
        },
        {
          "item": "Tigrex Claw+",
          "rate": "21%"
        },
        {
          "item": "Tigrex Fang+",
          "rate": "17%"
        },
        {
          "item": "Tigrex Carapace",
          "rate": "15%"
        },
        {
          "item": "Tigrex Scalp",
          "rate": "8%"
        },
        {
          "item": "Tigrex Maw",
          "rate": "4%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Tigrex Carapace",
          "rate": "34%"
        },
        {
          "item": "Tigrex Fang+",
          "rate": "27%"
        },
        {
          "item": "Tigrex Scale+",
          "rate": "16% x2"
        },
        {
          "item": "Tigrex Tail",
          "rate": "10%"
        },
        {
          "item": "Tigrex Scalp",
          "rate": "8%"
        },
        {
          "item": "Tigrex Maw",
          "rate": "5%"
        }
      ],
      "drops": [
        {
          "item": "Tigrex Scale+",
          "rate": "39%"
        },
        {
          "item": "Tigrex Claw+",
          "rate": "10%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "10%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Tigrex Scale+",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Tigrex Carapace",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Tigrex Claw+",
          "rate": "20%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Tigrex Shard",
          "rate": "32%"
        },
        {
          "item": "Tigrex Hardclaw",
          "rate": "21%"
        },
        {
          "item": "Tigrex Hardfang",
          "rate": "17%"
        },
        {
          "item": "Tigrex Cortex",
          "rate": "15%"
        },
        {
          "item": "Tigrex Lash",
          "rate": "7%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "5%"
        },
        {
          "item": "Tigrex Mantle",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Tigrex Cortex",
          "rate": "35%"
        },
        {
          "item": "Tigrex Hardfang",
          "rate": "27%"
        },
        {
          "item": "Tigrex Shard",
          "rate": "17% x2"
        },
        {
          "item": "Tigrex Lash",
          "rate": "10%"
        },
        {
          "item": "Tigrex Maw",
          "rate": "8%"
        },
        {
          "item": "Tigrex Mantle",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Tigrex Cortex",
          "rate": "27%",
          "part": "Head"
        },
        {
          "item": "Tigrex Shard",
          "rate": "20%",
          "part": "Claw"
        },
        {
          "item": "Tigrex Maw",
          "rate": "10%",
          "part": "Head"
        },
        {
          "item": "Tigrex Mantle",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Tigrex Lash",
          "rate": "80%",
          "part": "Body"
        },
        {
          "item": "Tigrex Shard",
          "rate": "42%",
          "part": "Body"
        },
        {
          "item": "Tigrex Shard",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Tigrex Hardclaw",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Tigrex Cortex",
          "rate": "19%",
          "part": "Body"
        },
        {
          "item": "Tigrex Maw",
          "rate": "7%",
          "part": "Body"
        },
        {
          "item": "Tigrex Mantle",
          "rate": "3%",
          "part": "Tail"
        },
        {
          "item": "Tigrex Mantle",
          "rate": "2%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Tigrex Hardclaw",
          "rate": "80%",
          "part": "Foreleg (Claw x2)"
        },
        {
          "item": "Tigrex Hardfang",
          "rate": "60%",
          "part": "Head (x2)"
        }
      ],
      "drops": [
        {
          "item": "Tigrex Shard",
          "rate": "39%"
        },
        {
          "item": "Tigrex Hardclaw",
          "rate": "10%"
        },
        {
          "item": "Tigrex Mantle",
          "rate": "1%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Tigrex Shard",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Tigrex Cortex",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Tigrex Hardclaw",
          "rate": "20%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "espinas",
    "name": "Espinas",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Espinas Cortex",
          "rate": "35%"
        },
        {
          "item": "Espinas Toxic Blood",
          "rate": "26%"
        },
        {
          "item": "Espinas Shard",
          "rate": "21%"
        },
        {
          "item": "Espinas Lash",
          "rate": "8%"
        },
        {
          "item": "Espinas Surspike",
          "rate": "7%"
        },
        {
          "item": "Espinas Mantle",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Espinas Cortex",
          "rate": "37%"
        },
        {
          "item": "Espinas Shard",
          "rate": "27%"
        },
        {
          "item": "Espinas Hardhorn",
          "rate": "21%"
        },
        {
          "item": "Espinas Lash",
          "rate": "12%"
        },
        {
          "item": "Espinas Mantle",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Espinas Cortex",
          "rate": "31%",
          "part": "Body"
        },
        {
          "item": "Espinas Toxic Blood",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Espinas Surspike",
          "rate": "5%",
          "part": "Body/Tail"
        },
        {
          "item": "Espinas Mantle",
          "rate": "3%/2%",
          "part": "Tail/Body"
        }
      ],
      "breaks": [
        {
          "item": "Espinas Hardhorn",
          "rate": "85%",
          "part": "Head"
        },
        {
          "item": "Espinas Cortex",
          "rate": "70%",
          "part": "Back"
        },
        {
          "item": "Espinas Cortex",
          "rate": "12%",
          "part": "Horn"
        },
        {
          "item": "Espinas Surspike",
          "rate": "60%",
          "part": "Wing"
        },
        {
          "item": "Espinas Shard",
          "rate": "40%",
          "part": "Wings"
        },
        {
          "item": "Espinas Toxic Blood",
          "rate": "30% x2",
          "part": "Back"
        },
        {
          "item": "Espinas Lash",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Espinas Shard",
          "rate": "28%"
        },
        {
          "item": "Espinas Cortex",
          "rate": "18%"
        },
        {
          "item": "Espinas Surspike",
          "rate": "3%"
        },
        {
          "item": "Espinas Mantle",
          "rate": "1%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Espinas Shard",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Espinas Cortex",
          "rate": "34%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Espinas Toxic Blood",
          "rate": "15%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Espinas Surspike",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "garangolm",
    "name": "Garangolm",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Garangolm Shard",
          "rate": "34%"
        },
        {
          "item": "Golm Thick Juice",
          "rate": "21%"
        },
        {
          "item": "Garangolm Cortex",
          "rate": "19%"
        },
        {
          "item": "Garangolm Hardfang",
          "rate": "14%"
        },
        {
          "item": "Golm Ploughtail",
          "rate": "7%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "5%"
        }
      ],
      "capture": [
        {
          "item": "Garangolm Shard",
          "rate": "38%"
        },
        {
          "item": "Garangolm Cortex",
          "rate": "27%"
        },
        {
          "item": "Garangolm Fist",
          "rate": "21%"
        },
        {
          "item": "Golm Ploughtail",
          "rate": "9%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "5%"
        }
      ],
      "carve": [
        {
          "item": "Garangolm Cortex",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Garangolm Shard",
          "rate": "26%",
          "part": "Body"
        },
        {
          "item": "Garangolm Hardfang",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Golm Thick Juice",
          "rate": "14%",
          "part": "Body"
        },
        {
          "item": "Large Beast Gem",
          "rate": "3%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Golm Ploughtail",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Garangolm Fist",
          "rate": "80%",
          "part": "Arm"
        },
        {
          "item": "Garangolm Hardfang",
          "rate": "60%",
          "part": "Head (x2)"
        }
      ],
      "drops": [
        {
          "item": "Golm Thick Juice",
          "rate": "30%"
        },
        {
          "item": "Garangolm Cortex",
          "rate": "17%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "3%"
        },
        {
          "item": "Beast Tear",
          "rate": "10%"
        },
        {
          "item": "Large Beast Tear",
          "rate": "40%"
        },
        {
          "item": "Garangolm Cortex",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Garangolm Hardfang",
          "rate": "35%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Golm Thick Juice",
          "rate": "15% x2",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "gold-rathian",
    "name": "Gold Rathian",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Gold Rathian Cortex",
          "rate": "34%"
        },
        {
          "item": "Gold Rathian Weave",
          "rate": "19%"
        },
        {
          "item": "Gold Rathian Shard",
          "rate": "18%"
        },
        {
          "item": "Rath Gleam",
          "rate": "12%"
        },
        {
          "item": "Gold Rathian Surspike",
          "rate": "7%"
        },
        {
          "item": "Rathian Ruby",
          "rate": "7%"
        },
        {
          "item": "Rathian Mantle",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Gold Rathian Cortex",
          "rate": "44%"
        },
        {
          "item": "Gold Rathian Shard",
          "rate": "22%"
        },
        {
          "item": "Gold Rathian Weave",
          "rate": "12%"
        },
        {
          "item": "Rath Gleam",
          "rate": "10%"
        },
        {
          "item": "Rathian Ruby",
          "rate": "8%"
        },
        {
          "item": "Rathian Mantle",
          "rate": "4%"
        }
      ],
      "carve": [
        {
          "item": "Gold Rathian Cortex",
          "rate": "30%",
          "part": "Head"
        },
        {
          "item": "Gold Rathian Cortex",
          "rate": "22%",
          "part": "Back"
        },
        {
          "item": "Gold Rathian Shard",
          "rate": "22%",
          "part": "Head/Back"
        },
        {
          "item": "Rathian Ruby",
          "rate": "8%",
          "part": "Head"
        },
        {
          "item": "Rathian Ruby",
          "rate": "5%",
          "part": "Back"
        },
        {
          "item": "Rathian Mantle",
          "rate": "4%",
          "part": "Head"
        },
        {
          "item": "Rathian Mantle",
          "rate": "3%",
          "part": "Back"
        },
        {
          "item": "Gold Rathian Cortex",
          "rate": "31%",
          "part": "Body"
        },
        {
          "item": "Rath Gleam",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Rathian Ruby",
          "rate": "7%",
          "part": "Body"
        },
        {
          "item": "Rathian Mantle",
          "rate": "3%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Gold Rathian Weave",
          "rate": "100%",
          "part": "Wing"
        },
        {
          "item": "Gold Rathian Surspike",
          "rate": "70%",
          "part": "Back"
        },
        {
          "item": "Gold Rathian Surspike",
          "rate": "52%",
          "part": "Body"
        },
        {
          "item": "Gold Rathian Shard",
          "rate": "44%",
          "part": "Body"
        },
        {
          "item": "Gold Rathian Shard",
          "rate": "26%",
          "part": "Tail"
        },
        {
          "item": "Gold Rathian Surspike",
          "rate": "5%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Gold Rathian Shard",
          "rate": "41%"
        },
        {
          "item": "Gold Rathian Cortex",
          "rate": "10%"
        },
        {
          "item": "Gold Rathian Surspike",
          "rate": "4%"
        },
        {
          "item": "Rathian Ruby",
          "rate": "4%"
        },
        {
          "item": "Rathian Mantle",
          "rate": "1%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Gold Rathian Shard",
          "rate": "51%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Gold Rathian Cortex",
          "rate": "46%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Gold Rathian Surspike",
          "rate": "1%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rathian Ruby",
          "rate": "2%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "apex-arzuros",
    "name": "Apex Arzuros",
    "order": [
      "highRank",
      "masterRank"
    ],
    "highRank": {
      "target": [
        {
          "item": "Arzuros Carapace",
          "rate": "36%"
        },
        {
          "item": "Arzuros Pelt+",
          "rate": "27%"
        },
        {
          "item": "Stoutbone",
          "rate": "14%"
        },
        {
          "item": "Honey",
          "rate": "10%"
        },
        {
          "item": "Apex Beastclaw",
          "rate": "7%"
        },
        {
          "item": "Beast Gem",
          "rate": "6%"
        }
      ],
      "breaks": [
        {
          "item": "Apex Beastclaw",
          "rate": "80%",
          "part": "Foreleg"
        },
        {
          "item": "Arzuros Pelt+",
          "rate": "20%",
          "part": "Foreleg"
        },
        {
          "item": "Arzuros Pelt+",
          "rate": "47%",
          "part": "Body"
        },
        {
          "item": "Stoutbone",
          "rate": "13%",
          "part": "Body"
        },
        {
          "item": "Apex Beastclaw",
          "rate": "8%",
          "part": "Body"
        },
        {
          "item": "Beast Gem",
          "rate": "4%",
          "part": "Body"
        }
      ],
      "drops": [
        {
          "item": "Honey",
          "rate": "100% x3",
          "part": "Wyvern Riding"
        },
        {
          "item": "Sushifish",
          "rate": "80%"
        },
        {
          "item": "Goldenfish",
          "rate": "20%"
        },
        {
          "item": "Arzuros Carapace",
          "rate": "60%"
        },
        {
          "item": "Arzuros Pelt+",
          "rate": "40%"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Melding Honey",
          "rate": "35%"
        },
        {
          "item": "Arzuros Cortex",
          "rate": "24%"
        },
        {
          "item": "Arzuros Fur",
          "rate": "15%"
        },
        {
          "item": "Melding Pudding",
          "rate": "15%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "8%"
        },
        {
          "item": "Apex Beastclaw",
          "rate": "3%"
        }
      ],
      "breaks": [
        {
          "item": "Apex Beastclaw",
          "rate": "80%",
          "part": "Foreleg"
        },
        {
          "item": "Arzuros Fur",
          "rate": "20%",
          "part": "Foreleg"
        },
        {
          "item": "Arzuros Fur",
          "rate": "45%",
          "part": "Body"
        },
        {
          "item": "Arzuros Cortex",
          "rate": "28%",
          "part": "Body"
        },
        {
          "item": "Massive Bone",
          "rate": "13%",
          "part": "Body"
        },
        {
          "item": "Apex Beastclaw",
          "rate": "8%",
          "part": "Body"
        },
        {
          "item": "Large Beast Gem",
          "rate": "6%",
          "part": "Body"
        }
      ],
      "drops": [
        {
          "item": "Honey",
          "rate": "100% x3",
          "part": "Wyvern Riding"
        },
        {
          "item": "Sushifish",
          "rate": "80%"
        },
        {
          "item": "Goldenfish",
          "rate": "20%"
        },
        {
          "item": "Arzuros Cortex",
          "rate": "60%"
        },
        {
          "item": "Arzuros Fur",
          "rate": "40%"
        }
      ]
    }
  },
  {
    "id": "barioth",
    "name": "Barioth",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Barioth Pelt",
          "rate": "33%"
        },
        {
          "item": "Barioth Shell",
          "rate": "21%"
        },
        {
          "item": "Frost Sac",
          "rate": "16%"
        },
        {
          "item": "Barioth Spike",
          "rate": "13%"
        },
        {
          "item": "Barioth Claw",
          "rate": "9%"
        },
        {
          "item": "Barioth Tail",
          "rate": "8%"
        }
      ],
      "carve": [
        {
          "item": "Barioth Shell",
          "rate": "40%",
          "part": "Body"
        },
        {
          "item": "Barioth Shell",
          "rate": "10%",
          "part": "Tail"
        },
        {
          "item": "Barioth Pelt",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Barioth Spike",
          "rate": "20%",
          "part": "Tail"
        },
        {
          "item": "Frost Sac",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Amber Fang",
          "rate": "15%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Barioth Claw",
          "rate": "75%",
          "part": "Thorns"
        },
        {
          "item": "Amber Fang",
          "rate": "75%",
          "part": "Head"
        },
        {
          "item": "Barioth Shell",
          "rate": "25%",
          "part": "Head"
        },
        {
          "item": "Barioth Spike",
          "rate": "25%",
          "part": "Thorns"
        },
        {
          "item": "Barioth Tail",
          "rate": "70%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Barioth Shell",
          "rate": "30%"
        },
        {
          "item": "Barioth Spike",
          "rate": "10%"
        },
        {
          "item": "Barioth Claw",
          "rate": "10%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Barioth Shell",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Barioth Pelt",
          "rate": "35%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Barioth Spike",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Barioth Pelt+",
          "rate": "33%"
        },
        {
          "item": "Barioth Carapace",
          "rate": "21%"
        },
        {
          "item": "Freezer Sac",
          "rate": "18%"
        },
        {
          "item": "Barioth Claw+",
          "rate": "12%"
        },
        {
          "item": "Barioth Spike",
          "rate": "8% x2"
        },
        {
          "item": "Barioth Tail",
          "rate": "5%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Barioth Carapace",
          "rate": "39%",
          "part": "Body"
        },
        {
          "item": "Barioth Carapace",
          "rate": "15%",
          "part": "Tail"
        },
        {
          "item": "Barioth Pelt+",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Freezer Sac",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Barioth Spike",
          "rate": "15%",
          "part": "Tail x2"
        },
        {
          "item": "Amber Fang+",
          "rate": "15%",
          "part": "Body"
        },
        {
          "item": "Wyvern Gem",
          "rate": "1%",
          "part": "Body"
        },
        {
          "item": "Wyvern Gem",
          "rate": "5%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Amber Fang+",
          "rate": "75%",
          "part": "Head"
        },
        {
          "item": "Barioth Claw+",
          "rate": "70%",
          "part": "Thorns"
        },
        {
          "item": "Barioth Spike",
          "rate": "30%",
          "part": "Thorns x2"
        },
        {
          "item": "Barioth Carapace",
          "rate": "20%",
          "part": "Head"
        },
        {
          "item": "Wyvern Gem",
          "rate": "5%",
          "part": "Head"
        },
        {
          "item": "Barioth Tail",
          "rate": "65%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Barioth Carapace",
          "rate": "32%"
        },
        {
          "item": "Barioth Spike",
          "rate": "7% x2"
        },
        {
          "item": "Barioth Claw+",
          "rate": "10%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "15%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "35%"
        },
        {
          "item": "Barioth Carapace",
          "rate": "55%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Barioth Pelt+",
          "rate": "35%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Barioth Spike",
          "rate": "10% x2",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Barioth Thickfur",
          "rate": "30%"
        },
        {
          "item": "Barioth Cortex",
          "rate": "21%"
        },
        {
          "item": "Cryo Sac",
          "rate": "18%"
        },
        {
          "item": "Barioth Greatspike",
          "rate": "13%"
        },
        {
          "item": "Barioth Hardclaw",
          "rate": "10%"
        },
        {
          "item": "Barioth Lash",
          "rate": "5%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Barioth Cortex",
          "rate": "39%",
          "part": "Body"
        },
        {
          "item": "Barioth Thickfur",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Barioth Greatspike",
          "rate": "20%",
          "part": "Tail"
        },
        {
          "item": "Cryo Sac",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Amber Hardfang",
          "rate": "15%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Barioth Hardclaw",
          "rate": "75%",
          "part": "Thorns"
        },
        {
          "item": "Amber Hardfang",
          "rate": "75%",
          "part": "Head"
        },
        {
          "item": "Barioth Greatspike",
          "rate": "25%",
          "part": "Thorns"
        },
        {
          "item": "Barioth Cortex",
          "rate": "20%",
          "part": "Head"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "5%"
        },
        {
          "item": "Barioth Lash",
          "rate": "75%"
        }
      ],
      "drops": [
        {
          "item": "Barioth Cortex",
          "rate": "29%"
        },
        {
          "item": "Barioth Greatspike",
          "rate": "10%"
        },
        {
          "item": "Barioth Hardclaw",
          "rate": "10%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "10%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Barioth Cortex",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Barioth Thickfur",
          "rate": "35%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Barioth Greatspike",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "barroth",
    "name": "Barroth",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Barroth Ridge",
          "rate": "28%"
        },
        {
          "item": "Barroth Claw",
          "rate": "20%"
        },
        {
          "item": "Barroth Shell",
          "rate": "14%"
        },
        {
          "item": "Barroth Scalp",
          "rate": "10%"
        }
      ],
      "capture": [
        {
          "item": "Barroth Claw",
          "rate": "30%"
        },
        {
          "item": "Barroth Ridge",
          "rate": "22%"
        },
        {
          "item": "Barroth Scalp",
          "rate": "13%"
        },
        {
          "item": "Barroth Shell",
          "rate": "12% x2"
        }
      ],
      "carve": [
        {
          "item": "Barroth Shell",
          "rate": "42%",
          "part": "Body"
        },
        {
          "item": "Barroth Shell",
          "rate": "30%",
          "part": "Tail"
        },
        {
          "item": "Barroth Ridge",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Barroth Ridge",
          "rate": "20%",
          "part": "Scalp"
        }
      ],
      "breaks": [
        {
          "item": "Barroth Claw",
          "rate": "100%",
          "part": "Foreleg"
        },
        {
          "item": "Barroth Shell",
          "rate": "100%",
          "part": "Hind Leg"
        }
      ],
      "drops": [
        {
          "item": "Fertile Mud",
          "rate": "35%"
        },
        {
          "item": "Barroth Ridge",
          "rate": "15%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Fertile Mud",
          "rate": "30% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Barroth Shell",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Barroth Ridge",
          "rate": "20%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Barroth Ridge+",
          "rate": "29%"
        },
        {
          "item": "Barroth Claw+",
          "rate": "21%"
        },
        {
          "item": "Barroth Carapace",
          "rate": "15%"
        },
        {
          "item": "Rich Mud",
          "rate": "11% x2"
        }
      ],
      "capture": [
        {
          "item": "Barroth Claw+",
          "rate": "32%"
        },
        {
          "item": "Barroth Ridge+",
          "rate": "23%"
        },
        {
          "item": "Barroth Carapace",
          "rate": "13% x2"
        },
        {
          "item": "Rich Mud",
          "rate": "11% x2"
        }
      ],
      "carve": [
        {
          "item": "Barroth Carapace",
          "rate": "42%",
          "part": "Body"
        },
        {
          "item": "Barroth Carapace",
          "rate": "37%",
          "part": "Tail"
        },
        {
          "item": "Barroth Ridge+",
          "rate": "31%",
          "part": "Body"
        },
        {
          "item": "Barroth Ridge+",
          "rate": "27%",
          "part": "Scalp"
        }
      ],
      "breaks": [
        {
          "item": "Barroth Carapace",
          "rate": "100%",
          "part": "Hind Leg"
        },
        {
          "item": "Barroth Claw+",
          "rate": "100%",
          "part": "Foreleg"
        }
      ],
      "drops": [
        {
          "item": "Rich Mud",
          "rate": "35%"
        },
        {
          "item": "Barroth Ridge+",
          "rate": "14%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "20%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "30%"
        },
        {
          "item": "Rich Mud",
          "rate": "30% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Barroth Carapace",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Barroth Ridge+",
          "rate": "20%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Barroth Chine",
          "rate": "29%"
        },
        {
          "item": "Barroth Hardclaw",
          "rate": "21%"
        },
        {
          "item": "Barroth Cortex",
          "rate": "15%"
        },
        {
          "item": "Rich Mud",
          "rate": "11% x3"
        }
      ],
      "capture": [
        {
          "item": "Barroth Hardclaw",
          "rate": "32%"
        },
        {
          "item": "Barroth Chine",
          "rate": "23%"
        },
        {
          "item": "Barroth Cortex",
          "rate": "13% x2"
        },
        {
          "item": "Rich Mud",
          "rate": "11% x2"
        }
      ],
      "carve": [
        {
          "item": "Barroth Chine",
          "rate": "31%",
          "part": "Body"
        },
        {
          "item": "Barroth Chine",
          "rate": "27%",
          "part": "Scalp"
        },
        {
          "item": "Barroth Hardclaw",
          "rate": "21% x2",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Barroth Cortex",
          "rate": "100%",
          "part": "Hind Leg"
        },
        {
          "item": "Barroth Hardclaw",
          "rate": "100%",
          "part": "Foreleg"
        }
      ],
      "drops": [
        {
          "item": "Rich Mud",
          "rate": "35% x2"
        },
        {
          "item": "Barroth Chine",
          "rate": "14%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "15%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "35%"
        },
        {
          "item": "Barroth Cortex",
          "rate": "60%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Barroth Chine",
          "rate": "40%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "mizutsune",
    "name": "Mizutsune",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Mizutsune Purplefur",
          "rate": "31%"
        },
        {
          "item": "Bubblefoam",
          "rate": "24%"
        },
        {
          "item": "Mizutsune Scale",
          "rate": "21%"
        },
        {
          "item": "Mizutsune Claw",
          "rate": "15%"
        },
        {
          "item": "Mizutsune Tail",
          "rate": "7%"
        },
        {
          "item": "Mizutsune Plate",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Mizutsune Fin",
          "rate": "32%"
        },
        {
          "item": "Mizutsune Purplefur",
          "rate": "23%"
        },
        {
          "item": "Mizutsune Scale",
          "rate": "16%"
        },
        {
          "item": "Bubblefoam",
          "rate": "14% x2"
        },
        {
          "item": "Mizutsune Tail",
          "rate": "12%"
        },
        {
          "item": "Mizutsune Plate",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Mizutsune Scale",
          "rate": "39%",
          "part": "Body"
        },
        {
          "item": "Mizutsune Purplefur",
          "rate": "26%",
          "part": "Body"
        },
        {
          "item": "Bubblefoam",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Mizutsune Claw",
          "rate": "13%",
          "part": "Body"
        },
        {
          "item": "Mizutsune Plate",
          "rate": "1-3%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Mizutsune Claw",
          "rate": "80%",
          "part": "Claws"
        },
        {
          "item": "Mizutsune Fin",
          "rate": "65%",
          "part": "Dorsal Fin"
        },
        {
          "item": "Bubblefoam",
          "rate": "32%",
          "part": "Head"
        },
        {
          "item": "Mizutsune Plate",
          "rate": "3%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Bubblefoam",
          "rate": "30%"
        },
        {
          "item": "Mizutsune Scale",
          "rate": "19%"
        },
        {
          "item": "Mizutsune Plate",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Bubblefoam",
          "rate": "25% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Mizutsune Scale",
          "rate": "45%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Mizutsune Purplefur",
          "rate": "30%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Mizutsune Purplefur+",
          "rate": "31%"
        },
        {
          "item": "Bubblefoam+",
          "rate": "23%"
        },
        {
          "item": "Mizutsune Scale+",
          "rate": "19%"
        },
        {
          "item": "Mizutsune Claw+",
          "rate": "15%"
        },
        {
          "item": "Mizutsune Plate",
          "rate": "5%"
        },
        {
          "item": "Mizutsune Tail",
          "rate": "5%"
        },
        {
          "item": "Mizutsune Water Orb",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Mizutsune Purplefur+",
          "rate": "27%"
        },
        {
          "item": "Mizutsune Claw+",
          "rate": "22%"
        },
        {
          "item": "Mizutsune Scale+",
          "rate": "17%"
        },
        {
          "item": "Bubblefoam+",
          "rate": "16% x2"
        },
        {
          "item": "Mizutsune Tail",
          "rate": "8%"
        },
        {
          "item": "Mizutsune Plate",
          "rate": "7%"
        },
        {
          "item": "Mizutsune Water Orb",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Mizutsune Scale+",
          "rate": "38%",
          "part": "Body"
        },
        {
          "item": "Mizutsune Purplefur+",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Bubblefoam+",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Mizutsune Claw+",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Mizutsune Plate",
          "rate": "3-7%",
          "part": "Body"
        },
        {
          "item": "Mizutsune Water Orb",
          "rate": "1-3%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Mizutsune Claw+",
          "rate": "80%",
          "part": "Claws"
        },
        {
          "item": "Mizutsune Purplefur+",
          "rate": "30%",
          "part": "Dorsal Fin"
        },
        {
          "item": "Mizutsune Silkfin",
          "rate": "60%",
          "part": "Dorsal Fin"
        },
        {
          "item": "Mizutsune Tail",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Mizutsune Purplefur+",
          "rate": "65%",
          "part": "Tail"
        },
        {
          "item": "Bubblefoam+",
          "rate": "30%",
          "part": "Head"
        },
        {
          "item": "Mizutsune Water Orb",
          "rate": "7%",
          "part": "Head"
        },
        {
          "item": "Mizutsune Plate",
          "rate": "3%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Bubblefoam+",
          "rate": "28%"
        },
        {
          "item": "Mizutsune Scale+",
          "rate": "18%"
        },
        {
          "item": "Mizutsune Plate",
          "rate": "3%"
        },
        {
          "item": "Mizutsune Water Orb",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "15%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "35%"
        },
        {
          "item": "Bubblefoam+",
          "rate": "25% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Mizutsune Scale+",
          "rate": "44%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Mizutsune Purplefur+",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Mizutsune Plate",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Mizutsune Purplefell",
          "rate": "31%"
        },
        {
          "item": "Distilled Bubblefoam",
          "rate": "23%"
        },
        {
          "item": "Mizutsune Shard",
          "rate": "19%"
        },
        {
          "item": "Mizutsune Hardclaw",
          "rate": "15%"
        },
        {
          "item": "Mizutsune Water Orb",
          "rate": "5%"
        },
        {
          "item": "Purple Mizutsune Tail",
          "rate": "5%"
        },
        {
          "item": "Mizutsune Mantle",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Mizutsune Purplefell",
          "rate": "27%"
        },
        {
          "item": "Mizutsune Hardclaw",
          "rate": "22%"
        },
        {
          "item": "Mizutsune Shard",
          "rate": "17%"
        },
        {
          "item": "Distilled Bubblefoam",
          "rate": "16% x2"
        },
        {
          "item": "Purple Mizutsune Tail",
          "rate": "8%"
        },
        {
          "item": "Mizutsune Water Orb",
          "rate": "7%"
        },
        {
          "item": "Mizutsune Mantle",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Mizutsune Shard",
          "rate": "38%",
          "part": "Body"
        },
        {
          "item": "Mizutsune Purplefell",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Distilled Bubblefoam",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Mizutsune Hardclaw",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Mizutsune Water Orb",
          "rate": "7%",
          "part": "Body"
        },
        {
          "item": "Mizutsune Mantle",
          "rate": "1-3%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Mizutsune Hardclaw",
          "rate": "80%",
          "part": "Claws"
        },
        {
          "item": "Mizutsune Purplefell",
          "rate": "30%",
          "part": "Dorsal Fin"
        },
        {
          "item": "Mizutsune Silkfin",
          "rate": "60%",
          "part": "Dorsal Fin"
        },
        {
          "item": "Purple Mizutsune Tail",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Mizutsune Purplefell",
          "rate": "65%",
          "part": "Tail"
        },
        {
          "item": "Distilled Bubblefoam",
          "rate": "30%",
          "part": "Head"
        },
        {
          "item": "Mizutsune Water Orb",
          "rate": "7%",
          "part": "Head"
        },
        {
          "item": "Mizutsune Mantle",
          "rate": "3%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Distilled Bubblefoam",
          "rate": "28%"
        },
        {
          "item": "Mizutsune Shard",
          "rate": "18%"
        },
        {
          "item": "Mizutsune Water Orb",
          "rate": "3%"
        },
        {
          "item": "Mizutsune Mantle",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "10%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Distilled Bubblefoam",
          "rate": "25% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Mizutsune Shard",
          "rate": "44%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Mizutsune Purplefell",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Mizutsune Water Orb",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "nargacuga",
    "name": "Nargacuga",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Nargacuga Scale",
          "rate": "30%"
        },
        {
          "item": "Nargacuga Fang",
          "rate": "15%"
        },
        {
          "item": "Nargacuga Blackfur",
          "rate": "14%"
        },
        {
          "item": "Narga Tailspike",
          "rate": "14%"
        },
        {
          "item": "Nargacuga Cutwing",
          "rate": "12%"
        },
        {
          "item": "Nargacuga Tail",
          "rate": "8%"
        },
        {
          "item": "Nargacuga Marrow",
          "rate": "7%"
        }
      ],
      "capture": [
        {
          "item": "Nargacuga Blackfur",
          "rate": "28%"
        },
        {
          "item": "Nargacuga Fang",
          "rate": "24%"
        },
        {
          "item": "Narga Tailspike",
          "rate": "20%"
        },
        {
          "item": "Nargacuga Scale",
          "rate": "15% x2"
        },
        {
          "item": "Nargacuga Tail",
          "rate": "10%"
        },
        {
          "item": "Nargacuga Marrow",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Nargacuga Scale",
          "rate": "43%",
          "part": "Body"
        },
        {
          "item": "Nargacuga Blackfur",
          "rate": "22%",
          "part": "Body"
        },
        {
          "item": "Nargacuga Fang",
          "rate": "16%",
          "part": "Body"
        },
        {
          "item": "Nargacuga Cutwing",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Narga Tailspike",
          "rate": "8%",
          "part": "Tail x2"
        },
        {
          "item": "Nargacuga Marrow",
          "rate": "7%",
          "part": "Body"
        },
        {
          "item": "Nargacuga Marrow",
          "rate": "12%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Nargacuga Cutwing",
          "rate": "65%",
          "part": "Cutwing"
        },
        {
          "item": "Nargacuga Cutwing",
          "rate": "35%",
          "part": "Cutwing x2"
        },
        {
          "item": "Nargacuga Scale",
          "rate": "30%",
          "part": "Head x2"
        },
        {
          "item": "Nargacuga Fang",
          "rate": "25%",
          "part": "Head"
        },
        {
          "item": "Nargacuga Fang",
          "rate": "45%",
          "part": "Head x2"
        },
        {
          "item": "Nargacuga Tail",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Nargacuga Scale",
          "rate": "25%"
        },
        {
          "item": "Narga Tailspike",
          "rate": "15%"
        },
        {
          "item": "Nargacuga Fang",
          "rate": "10%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Nargacuga Scale",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Nargacuga Blackfur",
          "rate": "40%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Nargacuga Fang",
          "rate": "10%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Nargacuga Scale+",
          "rate": "30%"
        },
        {
          "item": "Nargacuga Fang+",
          "rate": "19%"
        },
        {
          "item": "Narga Razor",
          "rate": "15%"
        },
        {
          "item": "Nargacuga Pelt+",
          "rate": "14%"
        },
        {
          "item": "Narga Tailspike",
          "rate": "8% x2"
        },
        {
          "item": "Nargacuga Tail",
          "rate": "6%"
        },
        {
          "item": "Narga Medulla",
          "rate": "5%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Nargacuga Pelt+",
          "rate": "28%"
        },
        {
          "item": "Nargacuga Fang+",
          "rate": "21%"
        },
        {
          "item": "Nargacuga Scale+",
          "rate": "17% x2"
        },
        {
          "item": "Narga Tailspike",
          "rate": "15%"
        },
        {
          "item": "Nargacuga Tail",
          "rate": "6%"
        },
        {
          "item": "Nargacuga Marrow",
          "rate": "5%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "4%"
        },
        {
          "item": "Narga Medulla",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Nargacuga Scale+",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Nargacuga Pelt+",
          "rate": "22%",
          "part": "Body"
        },
        {
          "item": "Nargacuga Fang+",
          "rate": "14%",
          "part": "Body"
        },
        {
          "item": "Narga Razor",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Nargacuga Marrow",
          "rate": "9%",
          "part": "Body"
        },
        {
          "item": "Nargacuga Marrow",
          "rate": "13%",
          "part": "Tail"
        },
        {
          "item": "Narga Medulla",
          "rate": "7%",
          "part": "Body"
        },
        {
          "item": "Narga Medulla",
          "rate": "12%",
          "part": "Tail"
        },
        {
          "item": "Narga Tailspike",
          "rate": "5%",
          "part": "Tail x2"
        },
        {
          "item": "Wyvern Gem",
          "rate": "1%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Narga Razor",
          "rate": "65%",
          "part": "Cutwing"
        },
        {
          "item": "Narga Razor",
          "rate": "35%",
          "part": "Cutwing x2"
        },
        {
          "item": "Nargacuga Scale+",
          "rate": "40%",
          "part": "Head x2"
        },
        {
          "item": "Nargacuga Fang+",
          "rate": "25%",
          "part": "Head"
        },
        {
          "item": "Nargacuga Fang+",
          "rate": "45%",
          "part": "Head x2"
        },
        {
          "item": "Narga Tailspike",
          "rate": "15%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Nargacuga Scale+",
          "rate": "27%"
        },
        {
          "item": "Narga Tailspike",
          "rate": "10% x2"
        },
        {
          "item": "Nargacuga Fang+",
          "rate": "12%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "15%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "35%"
        },
        {
          "item": "Nargacuga Scale+",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Nargacuga Pelt+",
          "rate": "40%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Nargacuga Fang+",
          "rate": "10%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Nargacuga Shard",
          "rate": "27%"
        },
        {
          "item": "Nargacuga Blackfur+",
          "rate": "20%"
        },
        {
          "item": "Nargacuga Hardfang",
          "rate": "15%"
        },
        {
          "item": "Nargacuga Tailspear",
          "rate": "12%"
        },
        {
          "item": "Nargacuga Cutwing+",
          "rate": "11%"
        },
        {
          "item": "Narga Medulla",
          "rate": "7%"
        },
        {
          "item": "Nargacuga Lash",
          "rate": "6%"
        },
        {
          "item": "Nargacuga Mantle",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Nargacuga Blackfur+",
          "rate": "28%"
        },
        {
          "item": "Nargacuga Hardfang",
          "rate": "21%"
        },
        {
          "item": "Nargacuga Tailspear",
          "rate": "20%"
        },
        {
          "item": "Nargacuga Shard",
          "rate": "17%"
        },
        {
          "item": "Nargacuga Lash",
          "rate": "10%"
        },
        {
          "item": "Nargacuga Mantle",
          "rate": "4%"
        }
      ],
      "carve": [
        {
          "item": "Nargacuga Blackfur+",
          "rate": "23%",
          "part": "Body"
        },
        {
          "item": "Nargacuga Hardfang",
          "rate": "16%",
          "part": "Body"
        },
        {
          "item": "Nargacuga Tailspear",
          "rate": "15%",
          "part": "Tail x2"
        },
        {
          "item": "Nargacuga Shard",
          "rate": "27%",
          "part": "Head x2"
        }
      ],
      "breaks": [
        {
          "item": "Nargacuga Cutwing+",
          "rate": "65%",
          "part": "Cutwing"
        },
        {
          "item": "Nargacuga Cutwing+",
          "rate": "35%",
          "part": "Cutwing x2"
        },
        {
          "item": "Nargacuga Hardfang",
          "rate": "45%",
          "part": "Head x2"
        },
        {
          "item": "Nargacuga Hardfang",
          "rate": "25%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Nargacuga Shard",
          "rate": "24%"
        },
        {
          "item": "Nargacuga Tailspear",
          "rate": "15%"
        },
        {
          "item": "Nargacuga Hardfang",
          "rate": "10%"
        },
        {
          "item": "Nargacuga Mantle",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "10%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Nargacuga Shard",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Nargacuga Blackfur+",
          "rate": "40%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Nargacuga Hardfang",
          "rate": "10%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "zinogre",
    "name": "Zinogre",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Zinogre Shockfur",
          "rate": "31%"
        },
        {
          "item": "Zinogre Shell",
          "rate": "21%"
        },
        {
          "item": "Zinogre Shocker",
          "rate": "21%"
        },
        {
          "item": "Fulgurbug",
          "rate": "17%"
        }
      ],
      "capture": [
        {
          "item": "Zinogre Shockfur",
          "rate": "29%"
        },
        {
          "item": "Zinogre Shocker",
          "rate": "25%"
        },
        {
          "item": "Zinogre Horn",
          "rate": "16%"
        },
        {
          "item": "Zinogre Shell",
          "rate": "15%"
        }
      ],
      "carve": [
        {
          "item": "Zinogre Shell",
          "rate": "34%",
          "part": "Body"
        },
        {
          "item": "Zinogre Shell",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Zinogre Shockfur",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Zinogre Claw",
          "rate": "22%",
          "part": "Body"
        },
        {
          "item": "Zinogre Shocker",
          "rate": "18%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Zinogre Horn",
          "rate": "97%",
          "part": "Both Horns"
        },
        {
          "item": "Zinogre Shocker",
          "rate": "70%",
          "part": "Back"
        },
        {
          "item": "Zinogre Shocker",
          "rate": "10%",
          "part": "Foreleg"
        },
        {
          "item": "Zinogre Claw",
          "rate": "70%",
          "part": "Foreleg"
        },
        {
          "item": "Zinogre Claw",
          "rate": "20%",
          "part": "Foreleg x2"
        }
      ],
      "drops": [
        {
          "item": "Zinogre Shell",
          "rate": "29%"
        },
        {
          "item": "Fulgurbug",
          "rate": "20%"
        },
        {
          "item": "Zinogre Plate",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Zinogre Shell",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Zinogre Shockfur",
          "rate": "40%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Zinogre Claw",
          "rate": "10%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Zinogre Electrofur",
          "rate": "33%"
        },
        {
          "item": "Zinogre Shocker+",
          "rate": "23%"
        },
        {
          "item": "Zinogre Carapace",
          "rate": "21%"
        },
        {
          "item": "Fulgurbug",
          "rate": "12% x3"
        }
      ],
      "capture": [
        {
          "item": "Zinogre Electrofur",
          "rate": "29%"
        },
        {
          "item": "Zinogre Shocker+",
          "rate": "25%"
        },
        {
          "item": "Zinogre Horn+",
          "rate": "16%"
        },
        {
          "item": "Zinogre Carapace",
          "rate": "15% x2"
        }
      ],
      "carve": [
        {
          "item": "Zinogre Carapace",
          "rate": "33%",
          "part": "Body"
        },
        {
          "item": "Zinogre Carapace",
          "rate": "10%",
          "part": "Tail"
        },
        {
          "item": "Zinogre Electrofur",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Zinogre Claw+",
          "rate": "22%",
          "part": "Body"
        },
        {
          "item": "Zinogre Shocker+",
          "rate": "17%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Zinogre Horn+",
          "rate": "90%",
          "part": "Both Horns"
        },
        {
          "item": "Zinogre Shocker+",
          "rate": "70%",
          "part": "Back"
        },
        {
          "item": "Zinogre Shocker+",
          "rate": "10%",
          "part": "Foreleg"
        },
        {
          "item": "Zinogre Claw+",
          "rate": "70%",
          "part": "Foreleg"
        },
        {
          "item": "Zinogre Claw+",
          "rate": "20%",
          "part": "Foreleg x2"
        }
      ],
      "drops": [
        {
          "item": "Zinogre Carapace",
          "rate": "31%"
        },
        {
          "item": "Fulgurbug",
          "rate": "15% x2"
        },
        {
          "item": "Zinogre Plate",
          "rate": "3%"
        },
        {
          "item": "Zinogre Jasper",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "15%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "35%"
        },
        {
          "item": "Zinogre Carapace",
          "rate": "49%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Zinogre Electrofur",
          "rate": "40%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Zinogre Claw+",
          "rate": "10%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Zinogre Plate",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Zinogre Electrofur+",
          "rate": "33%"
        },
        {
          "item": "Zinogre Deathly Shocker",
          "rate": "23%"
        },
        {
          "item": "Zinogre Cortex",
          "rate": "21%"
        },
        {
          "item": "Fulgurbug",
          "rate": "8% x3"
        }
      ],
      "capture": [
        {
          "item": "Zinogre Electrofur+",
          "rate": "29%"
        },
        {
          "item": "Zinogre Deathly Shocker",
          "rate": "25%"
        },
        {
          "item": "Zinogre Hardhorn",
          "rate": "16%"
        },
        {
          "item": "Zinogre Cortex",
          "rate": "15% x2"
        }
      ],
      "carve": [
        {
          "item": "Zinogre Cortex",
          "rate": "33%",
          "part": "Body"
        },
        {
          "item": "Zinogre Cortex",
          "rate": "10%",
          "part": "Tail"
        },
        {
          "item": "Zinogre Electrofur+",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Zinogre Hardclaw",
          "rate": "22%",
          "part": "Body"
        },
        {
          "item": "Zinogre Deathly Shocker",
          "rate": "17%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Zinogre Hardhorn",
          "rate": "92%",
          "part": "Both Horns"
        },
        {
          "item": "Zinogre Deathly Shocker",
          "rate": "70%",
          "part": "Back"
        },
        {
          "item": "Zinogre Deathly Shocker",
          "rate": "10%",
          "part": "Foreleg"
        },
        {
          "item": "Zinogre Hardclaw",
          "rate": "70%",
          "part": "Foreleg"
        },
        {
          "item": "Zinogre Hardclaw",
          "rate": "20%",
          "part": "Foreleg x2"
        }
      ],
      "drops": [
        {
          "item": "Zinogre Cortex",
          "rate": "31%"
        },
        {
          "item": "Fulgurbug",
          "rate": "15% x2"
        },
        {
          "item": "Zinogre Jasper",
          "rate": "3%"
        },
        {
          "item": "Zinogre Skymerald",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "10%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Zinogre Cortex",
          "rate": "49%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Zinogre Electrofur+",
          "rate": "40%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Zinogre Hardclaw",
          "rate": "10%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Zinogre Jasper",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "diablos",
    "name": "Diablos",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Diablos Ridge",
          "rate": "33%"
        },
        {
          "item": "Diablos Fang",
          "rate": "25%"
        },
        {
          "item": "Diablos Shell",
          "rate": "16%"
        },
        {
          "item": "Dash Extract",
          "rate": "12%"
        },
        {
          "item": "Diablos Marrow",
          "rate": "7%"
        },
        {
          "item": "Diablos Tailcase",
          "rate": "7%"
        }
      ],
      "capture": [
        {
          "item": "Diablos Shell",
          "rate": "28%"
        },
        {
          "item": "Diablos Ridge",
          "rate": "25%"
        },
        {
          "item": "Diablos Fang",
          "rate": "21%"
        },
        {
          "item": "Diablos Tailcase",
          "rate": "16%"
        },
        {
          "item": "Diablos Marrow",
          "rate": "10%"
        }
      ],
      "carve": [
        {
          "item": "Diablos Shell",
          "rate": "40%",
          "part": "Body"
        },
        {
          "item": "Diablos Shell",
          "rate": "18%",
          "part": "Tail"
        },
        {
          "item": "Diablos Ridge",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Diablos Fang",
          "rate": "23%",
          "part": "Body"
        },
        {
          "item": "Diablos Marrow",
          "rate": "5%",
          "part": "Body"
        },
        {
          "item": "Diablos Marrow",
          "rate": "12%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Twisted Horn",
          "rate": "100%",
          "part": "Both Horns"
        },
        {
          "item": "Diablos Ridge",
          "rate": "80%",
          "part": "Back"
        },
        {
          "item": "Diablos Marrow",
          "rate": "20%",
          "part": "Back"
        },
        {
          "item": "Diablos Tailcase",
          "rate": "70%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Dash Extract",
          "rate": "35%"
        },
        {
          "item": "Diablos Shell",
          "rate": "15%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Diablos Shell",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Diablos Ridge",
          "rate": "35%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Dash Extract",
          "rate": "15% x2",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Diablos Ridge+",
          "rate": "35%"
        },
        {
          "item": "Diablos Carapace",
          "rate": "18%"
        },
        {
          "item": "Diablos Fang",
          "rate": "13% x2"
        },
        {
          "item": "Diablos Marrow",
          "rate": "10%"
        },
        {
          "item": "Dash Extract",
          "rate": "9% x2"
        },
        {
          "item": "Diablos Medulla",
          "rate": "7%"
        },
        {
          "item": "Diablos Tailcase",
          "rate": "5%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Diablos Carapace",
          "rate": "29%"
        },
        {
          "item": "Diablos Ridge+",
          "rate": "23%"
        },
        {
          "item": "Diablos Marrow",
          "rate": "13%"
        },
        {
          "item": "Diablos Fang",
          "rate": "11% x2"
        },
        {
          "item": "Diablos Medulla",
          "rate": "10%"
        },
        {
          "item": "Diablos Tailcase",
          "rate": "9%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Diablos Carapace",
          "rate": "40%",
          "part": "Body"
        },
        {
          "item": "Diablos Carapace",
          "rate": "13%",
          "part": "Tail"
        },
        {
          "item": "Diablos Ridge+",
          "rate": "33%",
          "part": "Body"
        },
        {
          "item": "Diablos Fang",
          "rate": "12%",
          "part": "Body x2"
        },
        {
          "item": "Diablos Marrow",
          "rate": "7%",
          "part": "Body"
        },
        {
          "item": "Wyvern Gem",
          "rate": "3%",
          "part": "Body"
        },
        {
          "item": "Wyvern Gem",
          "rate": "5%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Majestic Horn",
          "rate": "100%",
          "part": "Both Horns"
        },
        {
          "item": "Diablos Ridge+",
          "rate": "50%",
          "part": "Back"
        },
        {
          "item": "Diablos Marrow",
          "rate": "30%",
          "part": "Back"
        },
        {
          "item": "Diablos Medulla",
          "rate": "20%",
          "part": "Back"
        },
        {
          "item": "Diablos Tailcase",
          "rate": "70%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Dash Extract",
          "rate": "25% x2"
        },
        {
          "item": "Diablos Carapace",
          "rate": "24%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "10%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Diablos Carapace",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Diablos Ridge+",
          "rate": "35%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Dash Extract",
          "rate": "15% x2",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Diablos Chine",
          "rate": "42%"
        },
        {
          "item": "Diablos Cortex",
          "rate": "24%"
        },
        {
          "item": "Diablos Medulla",
          "rate": "12%"
        },
        {
          "item": "Diablos Tailcase+",
          "rate": "10%"
        },
        {
          "item": "Dash Extract",
          "rate": "9%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Diablos Cortex",
          "rate": "40%"
        },
        {
          "item": "Diablos Chine",
          "rate": "33%"
        },
        {
          "item": "Diablos Tailcase+",
          "rate": "12%"
        },
        {
          "item": "Diablos Medulla",
          "rate": "10%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "5%"
        }
      ],
      "carve": [
        {
          "item": "Diablos Chine",
          "rate": "48%",
          "part": "Body"
        },
        {
          "item": "Diablos Cortex",
          "rate": "39%",
          "part": "Body"
        },
        {
          "item": "Diablos Cortex",
          "rate": "13%",
          "part": "Tail"
        },
        {
          "item": "Diablos Medulla",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Diablos Medulla",
          "rate": "12%",
          "part": "Tail"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "3%",
          "part": "Body"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "5%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Twisted Stouthorn",
          "rate": "100%",
          "part": "Both Horns"
        },
        {
          "item": "Diablos Chine",
          "rate": "80%",
          "part": "Back"
        },
        {
          "item": "Diablos Medulla",
          "rate": "20%",
          "part": "Back"
        },
        {
          "item": "Diablos Tailcase+",
          "rate": "70%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Dash Extract",
          "rate": "25% x2"
        },
        {
          "item": "Diablos Cortex",
          "rate": "24%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Diablos Cortex",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Diablos Chine",
          "rate": "35%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Dash Extract",
          "rate": "15% x2",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "magnamalo",
    "name": "Magnamalo",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Magnamalo Shell",
          "rate": "29%"
        },
        {
          "item": "Magnamalo Blade",
          "rate": "21%"
        },
        {
          "item": "Magnamalo Scale",
          "rate": "17%"
        },
        {
          "item": "Magna Ghostprism",
          "rate": "16%"
        },
        {
          "item": "Magnamalo Tail",
          "rate": "8%"
        },
        {
          "item": "Magnamalo Scute",
          "rate": "7%"
        },
        {
          "item": "Magnamalo Plate",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Magnamalo Shell",
          "rate": "37%"
        },
        {
          "item": "Magnamalo Horn",
          "rate": "26%"
        },
        {
          "item": "Magnamalo Scute",
          "rate": "19%"
        },
        {
          "item": "Magnamalo Tail",
          "rate": "15%"
        },
        {
          "item": "Magnamalo Plate",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Magnamalo Scale",
          "rate": "36%",
          "part": "Body"
        },
        {
          "item": "Magnamalo Scale",
          "rate": "20%",
          "part": "Tail"
        },
        {
          "item": "Magna Ghostprism",
          "rate": "26%",
          "part": "Body"
        },
        {
          "item": "Magnamalo Shell",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Magnamalo Blade",
          "rate": "16%",
          "part": "Body"
        },
        {
          "item": "Magnamalo Plate",
          "rate": "1%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Magnamalo Horn",
          "rate": "92%",
          "part": "Head"
        },
        {
          "item": "Magnamalo Blade",
          "rate": "80%",
          "part": "Armblade"
        },
        {
          "item": "Magnamalo Scute",
          "rate": "80%",
          "part": "Back"
        }
      ],
      "drops": [
        {
          "item": "Magna Ghostprism",
          "rate": "30%"
        },
        {
          "item": "Magnamalo Scale",
          "rate": "19%"
        },
        {
          "item": "Magnamalo Plate",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Magna Ghostprism",
          "rate": "35% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Magnamalo Scale",
          "rate": "31%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Magnamalo Shell",
          "rate": "26%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Magnamalo Scute",
          "rate": "8%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Magnamalo Shell+",
          "rate": "30%"
        },
        {
          "item": "Magnamalo Blade+",
          "rate": "22%"
        },
        {
          "item": "Magnamalo Scale+",
          "rate": "18%"
        },
        {
          "item": "Magna Soulprism",
          "rate": "16%"
        },
        {
          "item": "Magnamalo Scute+",
          "rate": "8%"
        },
        {
          "item": "Magnamalo Plate",
          "rate": "5%"
        },
        {
          "item": "Purple Magna Orb",
          "rate": "1%"
        }
      ],
      "capture": [
        {
          "item": "Magnamalo Shell+",
          "rate": "35%"
        },
        {
          "item": "Magnamalo Horn+",
          "rate": "25%"
        },
        {
          "item": "Magnamalo Scute+",
          "rate": "18%"
        },
        {
          "item": "Magnamalo Tail",
          "rate": "14%"
        },
        {
          "item": "Magnamalo Plate",
          "rate": "5%"
        },
        {
          "item": "Purple Magna Orb",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Magnamalo Scale+",
          "rate": "34%",
          "part": "Body"
        },
        {
          "item": "Magnamalo Scale+",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Magna Soulprism",
          "rate": "26%",
          "part": "Body"
        },
        {
          "item": "Magnamalo Shell+",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Magnamalo Blade+",
          "rate": "16%",
          "part": "Body"
        },
        {
          "item": "Magnamalo Plate",
          "rate": "3%",
          "part": "Body"
        },
        {
          "item": "Magnamalo Plate",
          "rate": "5%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Magnamalo Horn+",
          "rate": "92%",
          "part": "Head"
        },
        {
          "item": "Magnamalo Blade+",
          "rate": "80%",
          "part": "Armblade"
        },
        {
          "item": "Magnamalo Scute+",
          "rate": "80%",
          "part": "Back"
        }
      ],
      "drops": [
        {
          "item": "Magna Soulprism",
          "rate": "30%"
        },
        {
          "item": "Magnamalo Scale+",
          "rate": "16%"
        },
        {
          "item": "Magnamalo Plate",
          "rate": "3%"
        },
        {
          "item": "Purple Magna Orb",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "15%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "35%"
        },
        {
          "item": "Magna Soulprism",
          "rate": "35% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Magnamalo Scale+",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Magnamalo Shell+",
          "rate": "26%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Magnamalo Scute+",
          "rate": "8%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Magnamalo Plate",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Magnamalo Cortex",
          "rate": "28%"
        },
        {
          "item": "Magna Ascended Blade",
          "rate": "21%"
        },
        {
          "item": "Magnamalo Shard",
          "rate": "16%"
        },
        {
          "item": "Magnamalo Soulprism+",
          "rate": "15%"
        },
        {
          "item": "Magnamalo Bladeshell",
          "rate": "8%"
        },
        {
          "item": "Magnamalo Speartail",
          "rate": "6%"
        },
        {
          "item": "Purple Magna Orb",
          "rate": "4%"
        },
        {
          "item": "Magnamalo Orb",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Magnamalo Cortex",
          "rate": "35%"
        },
        {
          "item": "Magnamalo Hellhorn",
          "rate": "25%"
        },
        {
          "item": "Magnamalo Bladeshell",
          "rate": "18%"
        },
        {
          "item": "Magnamalo Speartail",
          "rate": "14%"
        },
        {
          "item": "Purple Magna Orb",
          "rate": "5%"
        },
        {
          "item": "Magnamalo Orb",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Magnamalo Shard",
          "rate": "33%",
          "part": "Body"
        },
        {
          "item": "Magna Soulprism+",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Magnamalo Cortex",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Magna Ascended Blade",
          "rate": "16%",
          "part": "Body"
        },
        {
          "item": "Purple Magna Orb",
          "rate": "3%",
          "part": "Body"
        },
        {
          "item": "Magnamalo Orb",
          "rate": "2%",
          "part": "Body"
        },
        {
          "item": "Magnamalo Orb",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Magnamalo Hellhorn",
          "rate": "92%",
          "part": "Head"
        },
        {
          "item": "Magna Ascended Blade",
          "rate": "80%",
          "part": "Armblade"
        },
        {
          "item": "Magnamalo Bladeshell",
          "rate": "80%",
          "part": "Back"
        }
      ],
      "drops": [
        {
          "item": "Magnamalo Soulprism+",
          "rate": "30%"
        },
        {
          "item": "Magnamalo Shard",
          "rate": "16%"
        },
        {
          "item": "Purple Magna Orb",
          "rate": "3%"
        },
        {
          "item": "Magnamalo Orb",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "10%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Magnamalo Soulprism+",
          "rate": "35% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Magnamalo Shard",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Magnamalo Cortex",
          "rate": "26%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Magnamalo Bladeshell",
          "rate": "8%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Purple Magna Orb",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "bazelgeuse",
    "name": "Bazelgeuse",
    "order": [
      "highRank",
      "masterRank"
    ],
    "highRank": {
      "target": [
        {
          "item": "Bazelgeuse Carapace",
          "rate": "31%"
        },
        {
          "item": "Bazelgeuse Talon",
          "rate": "23%"
        },
        {
          "item": "Bazelgeuse Scale+",
          "rate": "18%"
        },
        {
          "item": "Bazelgeuse Fuse",
          "rate": "14%"
        },
        {
          "item": "Bazelgeuse Wing",
          "rate": "12%"
        },
        {
          "item": "Bazelgeuse Gem",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Bazelgeuse Wing",
          "rate": "29%"
        },
        {
          "item": "Bazelgeuse Talon",
          "rate": "24%"
        },
        {
          "item": "Bazelgeuse Carapace",
          "rate": "18%"
        },
        {
          "item": "Bazelgeuse Scale+",
          "rate": "14%"
        },
        {
          "item": "Bazelgeuse Tail",
          "rate": "12%"
        },
        {
          "item": "Bazelgeuse Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Bazelgeuse Scale+",
          "rate": "39%",
          "part": "Body"
        },
        {
          "item": "Bazelgeuse Carapace",
          "rate": "26%",
          "part": "Body"
        },
        {
          "item": "Bazelgeuse Carapace",
          "rate": "27%",
          "part": "Tail"
        },
        {
          "item": "Bazelgeuse Talon",
          "rate": "19%",
          "part": "Body"
        },
        {
          "item": "Bazelgeuse Fuse",
          "rate": "15%",
          "part": "Body"
        },
        {
          "item": "Bazelgeuse Gem",
          "rate": "1%",
          "part": "Body"
        },
        {
          "item": "Bazelgeuse Gem",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Bazelgeuse Fuse",
          "rate": "70%",
          "part": "Head"
        },
        {
          "item": "Bazelgeuse Fuse",
          "rate": "30%",
          "part": "Back"
        },
        {
          "item": "Bazelgeuse Carapace",
          "rate": "69%",
          "part": "Back"
        },
        {
          "item": "Bazelgeuse Wing",
          "rate": "65%",
          "part": "Wing"
        },
        {
          "item": "Bazelgeuse Talon",
          "rate": "35%",
          "part": "Wing"
        },
        {
          "item": "Bazelgeuse Scale+",
          "rate": "27%",
          "part": "Head x2"
        },
        {
          "item": "Bazelgeuse Gem",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Bazelgeuse Gem",
          "rate": "1%",
          "part": "Back"
        },
        {
          "item": "Bazelgeuse Tail",
          "rate": "70%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Bazelgeuse Scale+",
          "rate": "39%"
        },
        {
          "item": "Bazelgeuse Talon",
          "rate": "10%"
        },
        {
          "item": "Bazelgeuse Gem",
          "rate": "1%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Bazelgeuse Scale+",
          "rate": "55%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Bazelgeuse Carapace",
          "rate": "35%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Bazelgeuse Talon",
          "rate": "10%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Bazelgeuse Cortex",
          "rate": "29%"
        },
        {
          "item": "Bazelgeuse Hardclaw",
          "rate": "22%"
        },
        {
          "item": "Bazelgeuse Shard",
          "rate": "17%"
        },
        {
          "item": "Bazelgeuse Glandflux",
          "rate": "14%"
        },
        {
          "item": "Bazelgeuse Fellwing",
          "rate": "12%"
        },
        {
          "item": "Bazelgeuse Gem",
          "rate": "4%"
        },
        {
          "item": "Bazelgeuse Mantle",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Bazelgeuse Fellwing",
          "rate": "27%"
        },
        {
          "item": "Bazelgeuse Hardclaw",
          "rate": "23%"
        },
        {
          "item": "Bazelgeuse Cortex",
          "rate": "17%"
        },
        {
          "item": "Bazelgeuse Shard",
          "rate": "13% x2"
        },
        {
          "item": "Bazelgeuse Flail",
          "rate": "12%"
        },
        {
          "item": "Bazelgeuse Gem",
          "rate": "5%"
        },
        {
          "item": "Bazelgeuse Mantle",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Bazelgeuse Shard",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Bazelgeuse Cortex",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Bazelgeuse Cortex",
          "rate": "27%",
          "part": "Tail"
        },
        {
          "item": "Bazelgeuse Hardclaw",
          "rate": "19%",
          "part": "Body"
        },
        {
          "item": "Bazelgeuse Glandflux",
          "rate": "15%",
          "part": "Body"
        },
        {
          "item": "Bazelgeuse Gem",
          "rate": "3%",
          "part": "Body"
        },
        {
          "item": "Bazelgeuse Mantle",
          "rate": "3%",
          "part": "Tail"
        },
        {
          "item": "Bazelgeuse Mantle",
          "rate": "1%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Bazelgeuse Glandflux",
          "rate": "70%",
          "part": "Head"
        },
        {
          "item": "Bazelgeuse Glandflux",
          "rate": "30%",
          "part": "Back"
        },
        {
          "item": "Bazelgeuse Cortex",
          "rate": "69%",
          "part": "Back"
        },
        {
          "item": "Bazelgeuse Fellwing",
          "rate": "65%",
          "part": "Wing"
        },
        {
          "item": "Bazelgeuse Hardclaw",
          "rate": "35%",
          "part": "Wing"
        },
        {
          "item": "Bazelgeuse Shard",
          "rate": "22%",
          "part": "Head x2"
        },
        {
          "item": "Bazelgeuse Gem",
          "rate": "5%",
          "part": "Head"
        },
        {
          "item": "Bazelgeuse Mantle",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Bazelgeuse Mantle",
          "rate": "1%",
          "part": "Back"
        },
        {
          "item": "Bazelgeuse Flail",
          "rate": "70%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Bazelgeuse Shard",
          "rate": "39%"
        },
        {
          "item": "Bazelgeuse Hardclaw",
          "rate": "10%"
        },
        {
          "item": "Bazelgeuse Mantle",
          "rate": "1%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Bazelgeuse Shard",
          "rate": "55%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Bazelgeuse Cortex",
          "rate": "35%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Bazelgeuse Hardclaw",
          "rate": "10%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "great-izuchi",
    "name": "Great Izuchi",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Great Izuchi Pelt",
          "rate": "36%"
        },
        {
          "item": "Screamer Sac",
          "rate": "26%"
        },
        {
          "item": "Great Izuchi Hide",
          "rate": "21%"
        },
        {
          "item": "Monster Bone S",
          "rate": "12%"
        },
        {
          "item": "Great Izuchi Tail",
          "rate": "5%"
        }
      ],
      "capture": [
        {
          "item": "Great Izuchi Pelt",
          "rate": "39%"
        },
        {
          "item": "Great Izuchi Hide",
          "rate": "26%"
        },
        {
          "item": "Screamer Sac",
          "rate": "20% x2"
        },
        {
          "item": "Great Izuchi Tail",
          "rate": "15%"
        }
      ],
      "carve": [
        {
          "item": "Great Izuchi Hide",
          "rate": "43%",
          "part": "Body"
        },
        {
          "item": "Great Izuchi Pelt",
          "rate": "33%",
          "part": "Body"
        },
        {
          "item": "Screamer Sac",
          "rate": "24%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Great Izuchi Tail",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Screamer Sac",
          "rate": "70%",
          "part": "Head"
        },
        {
          "item": "Great Izuchi Pelt",
          "rate": "30%",
          "part": "Head"
        },
        {
          "item": "Great Izuchi Hide",
          "rate": "20%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Great Izuchi Hide",
          "rate": "30%"
        },
        {
          "item": "Great Izuchi Pelt",
          "rate": "20%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Great Izuchi Hide",
          "rate": "60%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Great Izuchi Pelt",
          "rate": "40%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Great Izuchi Pelt+",
          "rate": "39%"
        },
        {
          "item": "Great Izuchi Hide+",
          "rate": "23%"
        },
        {
          "item": "Screamer Sac",
          "rate": "18% x2"
        },
        {
          "item": "Monster Bone+",
          "rate": "13%"
        },
        {
          "item": "Great Izuchi Tail+",
          "rate": "5%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Great Izuchi Pelt+",
          "rate": "39%"
        },
        {
          "item": "Great Izuchi Hide+",
          "rate": "27%"
        },
        {
          "item": "Screamer Sac",
          "rate": "16% x3"
        },
        {
          "item": "Great Izuchi Tail+",
          "rate": "15%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Great Izuchi Hide+",
          "rate": "44%",
          "part": "Body"
        },
        {
          "item": "Great Izuchi Pelt+",
          "rate": "35%",
          "part": "Body"
        },
        {
          "item": "Screamer Sac",
          "rate": "20%",
          "part": "Body x2"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "1%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Great Izuchi Tail+",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Screamer Sac",
          "rate": "65%",
          "part": "Body x2"
        },
        {
          "item": "Great Izuchi Pelt+",
          "rate": "32%",
          "part": "Head"
        },
        {
          "item": "Great Izuchi Hide+",
          "rate": "20%",
          "part": "Tail"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "3%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Great Izuchi Hide+",
          "rate": "29%"
        },
        {
          "item": "Great Izuchi Pelt+",
          "rate": "20%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "30%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "20%"
        },
        {
          "item": "Great Izuchi Hide+",
          "rate": "60%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Great Izuchi Pelt+",
          "rate": "40%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Great Izuchi Thickfur",
          "rate": "42%"
        },
        {
          "item": "Great Izuchi Thickhide",
          "rate": "27%"
        },
        {
          "item": "Monster Hardbone",
          "rate": "13%"
        },
        {
          "item": "Screamer Sac",
          "rate": "10%"
        },
        {
          "item": "Great Izuchi Grindtail",
          "rate": "5%"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Great Izuchi Thickfur",
          "rate": "35%"
        },
        {
          "item": "Great Izuchi Thickhide",
          "rate": "25%"
        },
        {
          "item": "Screamer Sac",
          "rate": "16%"
        },
        {
          "item": "Great Izuchi Grindtail",
          "rate": "15%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "6%"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Great Izuchi Thickhide",
          "rate": "43%",
          "part": "Body"
        },
        {
          "item": "Great Izuchi Thickfur",
          "rate": "33%",
          "part": "Body"
        },
        {
          "item": "Great Izuchi Thickfur",
          "rate": "32%",
          "part": "Head"
        },
        {
          "item": "Great Izuchi Thickhide",
          "rate": "20%",
          "part": "Tail"
        },
        {
          "item": "Screamer Sac",
          "rate": "18%",
          "part": "Body"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "4%",
          "part": "Body"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "2%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Great Izuchi Grindtail",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Screamer Sac",
          "rate": "65%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Great Izuchi Thickhide",
          "rate": "27%"
        },
        {
          "item": "Great Izuchi Thickfur",
          "rate": "18%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "4%"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "20%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "30%"
        },
        {
          "item": "Great Izuchi Thickhide",
          "rate": "60%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Great Izuchi Thickfur",
          "rate": "40%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "pukei-pukei",
    "name": "Pukei-Pukei",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Pukei-Pukei Shell",
          "rate": "27%"
        },
        {
          "item": "Pukei-Pukei Scale",
          "rate": "20%"
        },
        {
          "item": "Pukei-Pukei Sac",
          "rate": "14%"
        },
        {
          "item": "Poison Sac",
          "rate": "11%"
        },
        {
          "item": "Pukei-Pukei Quill",
          "rate": "11%"
        },
        {
          "item": "Monster Bone L",
          "rate": "10%"
        },
        {
          "item": "Pukei-Pukei Tail",
          "rate": "7%"
        }
      ],
      "capture": [
        {
          "item": "Pukei-Pukei Shell",
          "rate": "31%"
        },
        {
          "item": "Pukei-Pukei Sac",
          "rate": "22%"
        },
        {
          "item": "Pukei-Pukei Scale",
          "rate": "19% x2"
        },
        {
          "item": "Pukei-Pukei Quill",
          "rate": "16%"
        },
        {
          "item": "Pukei-Pukei Tail",
          "rate": "12%"
        }
      ],
      "carve": [
        {
          "item": "Pukei-Pukei Shell",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Pukei-Pukei Shell",
          "rate": "20%",
          "part": "Tail"
        },
        {
          "item": "Pukei-Pukei Sac",
          "rate": "16%",
          "part": "Body"
        },
        {
          "item": "Pukei-Pukei Quill",
          "rate": "10%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Pukei-Pukei Shell",
          "rate": "80%",
          "part": "Back"
        },
        {
          "item": "Pukei-Pukei Quill",
          "rate": "80%",
          "part": "Wing"
        },
        {
          "item": "Pukei-Pukei Sac",
          "rate": "75%",
          "part": "Head"
        },
        {
          "item": "Pukei-Pukei Scale",
          "rate": "25%",
          "part": "Head x2"
        },
        {
          "item": "Pukei-Pukei Scale",
          "rate": "20%",
          "part": "Back"
        },
        {
          "item": "Pukei-Pukei Scale",
          "rate": "20%",
          "part": "Wing"
        },
        {
          "item": "Pukei-Pukei Scale",
          "rate": "42%",
          "part": "Body"
        },
        {
          "item": "Pukei-Pukei Tail",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Pukei-Pukei Scale",
          "rate": "35%"
        },
        {
          "item": "Pukei-Pukei Shell",
          "rate": "15%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Pukei-Pukei Scale",
          "rate": "60%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Pukei-Pukei Shell",
          "rate": "40%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Pukei-Pukei Carapace",
          "rate": "28%"
        },
        {
          "item": "Pukei-Pukei Scale+",
          "rate": "21%"
        },
        {
          "item": "Pukei-Pukei Sac+",
          "rate": "15%"
        },
        {
          "item": "Pukei-Pukei Wing",
          "rate": "12%"
        },
        {
          "item": "Toxin Sac",
          "rate": "11%"
        },
        {
          "item": "Monster Keenbone",
          "rate": "10% x2"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Pukei-Pukei Carapace",
          "rate": "34%"
        },
        {
          "item": "Pukei-Pukei Scale+",
          "rate": "19% x2"
        },
        {
          "item": "Pukei-Pukei Sac+",
          "rate": "18%"
        },
        {
          "item": "Pukei-Pukei Wing",
          "rate": "15%"
        },
        {
          "item": "Pukei-Pukei Tail",
          "rate": "9%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "5%"
        }
      ],
      "carve": [
        {
          "item": "Pukei-Pukei Carapace",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Pukei-Pukei Carapace",
          "rate": "26%",
          "part": "Tail"
        },
        {
          "item": "Pukei-Pukei Sac+",
          "rate": "16%",
          "part": "Body"
        },
        {
          "item": "Pukei-Pukei Wing",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "4%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Pukei-Pukei Carapace",
          "rate": "80%",
          "part": "Back"
        },
        {
          "item": "Pukei-Pukei Wing",
          "rate": "80%",
          "part": "Wing"
        },
        {
          "item": "Pukei-Pukei Sac+",
          "rate": "75%",
          "part": "Head"
        },
        {
          "item": "Pukei-Pukei Scale+",
          "rate": "22%",
          "part": "Head x2"
        },
        {
          "item": "Pukei-Pukei Scale+",
          "rate": "20%",
          "part": "Back"
        },
        {
          "item": "Pukei-Pukei Scale+",
          "rate": "20%",
          "part": "Wing"
        },
        {
          "item": "Pukei-Pukei Scale+",
          "rate": "42%",
          "part": "Body"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Pukei-Pukei Tail",
          "rate": "70%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Pukei-Pukei Scale+",
          "rate": "34%"
        },
        {
          "item": "Pukei-Pukei Carapace",
          "rate": "15%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "25%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "25%"
        },
        {
          "item": "Pukei-Pukei Scale+",
          "rate": "60%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Pukei-Pukei Carapace",
          "rate": "40%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Pukei-Pukei Cortex",
          "rate": "26%"
        },
        {
          "item": "Pukei-Pukei Shard",
          "rate": "18%"
        },
        {
          "item": "Large Pukei-Pukei Sac",
          "rate": "14%"
        },
        {
          "item": "Pukei-Pukei Fellwing",
          "rate": "11%"
        },
        {
          "item": "Deadly Poison Sac",
          "rate": "11%"
        },
        {
          "item": "Monster Toughbone",
          "rate": "10% x2"
        },
        {
          "item": "Pukei-Pukei Lash",
          "rate": "7%"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Pukei-Pukei Cortex",
          "rate": "33%"
        },
        {
          "item": "Pukei-Pukei Shard",
          "rate": "19% x2"
        },
        {
          "item": "Large Pukei-Pukei Sac",
          "rate": "16%"
        },
        {
          "item": "Pukei-Pukei Fellwing",
          "rate": "15%"
        },
        {
          "item": "Pukei-Pukei Lash",
          "rate": "9%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "5%"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Pukei-Pukei Cortex",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Pukei-Pukei Cortex",
          "rate": "16%",
          "part": "Tail"
        },
        {
          "item": "Large Pukei-Pukei Sac",
          "rate": "16%",
          "part": "Body"
        },
        {
          "item": "Pukei-Pukei Fellwing",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "4%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Pukei-Pukei Cortex",
          "rate": "80%",
          "part": "Back"
        },
        {
          "item": "Pukei-Pukei Fellwing",
          "rate": "80%",
          "part": "Wing"
        },
        {
          "item": "Large Pukei-Pukei Sac",
          "rate": "75%",
          "part": "Head"
        },
        {
          "item": "Pukei-Pukei Shard",
          "rate": "22%",
          "part": "Head"
        },
        {
          "item": "Pukei-Pukei Shard",
          "rate": "20%",
          "part": "Back"
        },
        {
          "item": "Pukei-Pukei Shard",
          "rate": "20%",
          "part": "Wing"
        },
        {
          "item": "Pukei-Pukei Shard",
          "rate": "42%",
          "part": "Body"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Pukei-Pukei Lash",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Pukei-Pukei Shard",
          "rate": "34%"
        },
        {
          "item": "Pukei-Pukei Cortex",
          "rate": "15%"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "15%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "35%"
        },
        {
          "item": "Pukei-Pukei Shard",
          "rate": "60%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Pukei-Pukei Cortex",
          "rate": "40%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "jyuratodus",
    "name": "Jyuratodus",
    "order": [
      "highRank",
      "masterRank"
    ],
    "highRank": {
      "target": [
        {
          "item": "Jyuratodus Scale+",
          "rate": "34%"
        },
        {
          "item": "Torrent Sac",
          "rate": "16%"
        },
        {
          "item": "Jyuratodus Fang+",
          "rate": "14%"
        },
        {
          "item": "Jyuratodus Carapace",
          "rate": "12%"
        },
        {
          "item": "Monster Keenbone",
          "rate": "12%"
        },
        {
          "item": "Jyuratodus Fin+",
          "rate": "9%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Jyuratodus Carapace",
          "rate": "33%"
        },
        {
          "item": "Jyuratodus Fang+",
          "rate": "25%"
        },
        {
          "item": "Jyuratodus Scale+",
          "rate": "19% x2"
        },
        {
          "item": "Jyuratodus Fin+",
          "rate": "19%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "4%"
        }
      ],
      "carve": [
        {
          "item": "Jyuratodus Scale+",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Jyuratodus Carapace",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Jyuratodus Fin+",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Jyuratodus Fang+",
          "rate": "15%",
          "part": "Body"
        },
        {
          "item": "Wyvern Gem",
          "rate": "1%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Jyuratodus Carapace",
          "rate": "100%",
          "part": "Leg"
        },
        {
          "item": "Jyuratodus Scale+",
          "rate": "100%",
          "part": "Tail"
        },
        {
          "item": "Jyuratodus Fang+",
          "rate": "100%",
          "part": "Head"
        },
        {
          "item": "Jyuratodus Fin+",
          "rate": "100%",
          "part": "Back"
        }
      ],
      "drops": [
        {
          "item": "Jyuratodus Scale+",
          "rate": "37%"
        },
        {
          "item": "Jyuratodus Fang+",
          "rate": "12%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "25%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "25%"
        },
        {
          "item": "Jyuratodus Scale+",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Jyuratodus Carapace",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Jyuratodus Fang+",
          "rate": "20%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Jyuratodus Shard",
          "rate": "34%"
        },
        {
          "item": "Flood Sac",
          "rate": "16%"
        },
        {
          "item": "Jyuratodus Hardfang",
          "rate": "15%"
        },
        {
          "item": "Jyuratodus Cortex",
          "rate": "12%"
        },
        {
          "item": "Monster Toughbone",
          "rate": "12%"
        },
        {
          "item": "Jyuratodus Grandfin",
          "rate": "9%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Jyuratodus Cortex",
          "rate": "34%"
        },
        {
          "item": "Jyuratodus Hardfang",
          "rate": "25%"
        },
        {
          "item": "Jyuratodus Shard",
          "rate": "19%"
        },
        {
          "item": "Jyuratodus Grandfin",
          "rate": "19%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Jyuratodus Shard",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Jyuratodus Cortex",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Jyuratodus Grandfin",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Jyuratodus Hardfang",
          "rate": "15%",
          "part": "Body"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "1%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Jyuratodus Cortex",
          "rate": "100%",
          "part": "Legs"
        },
        {
          "item": "Jyuratodus Shard",
          "rate": "100%",
          "part": "Tail"
        },
        {
          "item": "Jyuratodus Hardfang",
          "rate": "100%",
          "part": "Head"
        },
        {
          "item": "Jyuratodus Grandfin",
          "rate": "100%",
          "part": "Back"
        }
      ],
      "drops": [
        {
          "item": "Jyuratodus Shard",
          "rate": "37%"
        },
        {
          "item": "Jyuratodus Hardfang",
          "rate": "12%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "15%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "35%"
        },
        {
          "item": "Jyuratodus Shard",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Jyuratodus Cortex",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Jyuratodus Hardfang",
          "rate": "20%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "volvidon",
    "name": "Volvidon",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Volvi Rickrack",
          "rate": "22%"
        },
        {
          "item": "Volvidon Claw",
          "rate": "19%"
        },
        {
          "item": "Paralysis Sac",
          "rate": "16%"
        },
        {
          "item": "Volvidon Shell",
          "rate": "15%"
        },
        {
          "item": "Monster Fluid",
          "rate": "15%"
        },
        {
          "item": "Jumbo Bone",
          "rate": "13% x2"
        }
      ],
      "capture": [
        {
          "item": "Volvidon Claw",
          "rate": "34%"
        },
        {
          "item": "Volvidon Shell",
          "rate": "26%"
        },
        {
          "item": "Paralysis Sac",
          "rate": "22% x2"
        },
        {
          "item": "Jumbo Bone",
          "rate": "18% x3"
        }
      ],
      "carve": [
        {
          "item": "Volvidon Shell",
          "rate": "40%",
          "part": "Body"
        },
        {
          "item": "Volvi Rickrack",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Volvidon Claw",
          "rate": "19%",
          "part": "Body"
        },
        {
          "item": "Paralysis Sac",
          "rate": "17%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Volvi Rickrack",
          "rate": "70%",
          "part": "Back"
        },
        {
          "item": "Volvidon Shell",
          "rate": "30%",
          "part": "Back"
        }
      ],
      "drops": [
        {
          "item": "Volvidon Shell",
          "rate": "35%"
        },
        {
          "item": "Volvidon Claw",
          "rate": "15%"
        },
        {
          "item": "Beast Tear",
          "rate": "50%"
        },
        {
          "item": "Volvidon Shell",
          "rate": "55%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Volvidon Claw",
          "rate": "20%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Monster Fluid",
          "rate": "25% x2",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Volvidon Claw+",
          "rate": "21%"
        },
        {
          "item": "Omniplegia Sac",
          "rate": "20%"
        },
        {
          "item": "Monster Broth",
          "rate": "18%"
        },
        {
          "item": "Volvi Carapace",
          "rate": "14%"
        },
        {
          "item": "Stoutbone",
          "rate": "11% x2"
        },
        {
          "item": "Volvi Rickrack",
          "rate": "9% x2"
        },
        {
          "item": "Beast Gem",
          "rate": "7%"
        }
      ],
      "capture": [
        {
          "item": "Volvidon Claw+",
          "rate": "32%"
        },
        {
          "item": "Omniplegia Sac",
          "rate": "22% x2"
        },
        {
          "item": "Volvi Carapace",
          "rate": "21%"
        },
        {
          "item": "Stoutbone",
          "rate": "16% x3"
        },
        {
          "item": "Beast Gem",
          "rate": "9%"
        }
      ],
      "carve": [
        {
          "item": "Volvi Carapace",
          "rate": "41%",
          "part": "Body"
        },
        {
          "item": "Volvidon Claw+",
          "rate": "22%",
          "part": "Body"
        },
        {
          "item": "Omniplegia Sac",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Volvi Rickrack",
          "rate": "11%",
          "part": "Body x2"
        },
        {
          "item": "Beast Gem",
          "rate": "5%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Volvi Rickrack",
          "rate": "65%",
          "part": "Back x2"
        },
        {
          "item": "Volvi Carapace",
          "rate": "35%",
          "part": "Back"
        }
      ],
      "drops": [
        {
          "item": "Volvidon Carapace",
          "rate": "34%"
        },
        {
          "item": "Volvidon Claw+",
          "rate": "15%"
        },
        {
          "item": "Beast Gem",
          "rate": "1%"
        },
        {
          "item": "Beast Tear",
          "rate": "20%"
        },
        {
          "item": "Large Beast Tear",
          "rate": "30%"
        },
        {
          "item": "Volvidon Carapace",
          "rate": "55%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Volvidon Claw+",
          "rate": "20%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Monster Broth",
          "rate": "25% x2",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Large Volvi Rickrack",
          "rate": "23%"
        },
        {
          "item": "Volvidon Talon",
          "rate": "19%"
        },
        {
          "item": "Ultraplegia Sac",
          "rate": "16%"
        },
        {
          "item": "Monster Essence",
          "rate": "15%"
        },
        {
          "item": "Volvidon Cortex",
          "rate": "14%"
        },
        {
          "item": "Massive Bone",
          "rate": "10%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Volvidon Talon",
          "rate": "34%"
        },
        {
          "item": "Ultraplegia Sac",
          "rate": "24% x2"
        },
        {
          "item": "Volvidon Cortex",
          "rate": "21%"
        },
        {
          "item": "Massive Bone",
          "rate": "16% x2"
        },
        {
          "item": "Large Beast Gem",
          "rate": "5%"
        }
      ],
      "carve": [
        {
          "item": "Volvidon Cortex",
          "rate": "35%",
          "part": "Body"
        },
        {
          "item": "Large Volvi Rickrack",
          "rate": "22%",
          "part": "Body"
        },
        {
          "item": "Volvidon Talon",
          "rate": "18%",
          "part": "Body"
        },
        {
          "item": "Ultraplegia Sac",
          "rate": "17%",
          "part": "Body"
        },
        {
          "item": "Beast Gem",
          "rate": "5%",
          "part": "Body"
        },
        {
          "item": "Large Beast Gem",
          "rate": "3%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Large Volvi Rickrack",
          "rate": "70%",
          "part": "Back"
        },
        {
          "item": "Volvidon Cortex",
          "rate": "30%",
          "part": "Back"
        }
      ],
      "drops": [
        {
          "item": "Volvidon Cortex",
          "rate": "34%"
        },
        {
          "item": "Volvidon Talon",
          "rate": "15%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "1%"
        },
        {
          "item": "Beast Tear",
          "rate": "15%"
        },
        {
          "item": "Large Beast Tear",
          "rate": "35%"
        },
        {
          "item": "Volvidon Cortex",
          "rate": "55%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Volvidon Talon",
          "rate": "20%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Monster Essence",
          "rate": "25% x2",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "aurora-somnacanth",
    "name": "Aurora Somnacanth",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Auroracanth Icecortex",
          "rate": "33%"
        },
        {
          "item": "Auroracanth Icescale",
          "rate": "21%"
        },
        {
          "item": "Cryo Sac",
          "rate": "19%"
        },
        {
          "item": "Auroracanth Fin",
          "rate": "14%"
        },
        {
          "item": "Monster Slogbone",
          "rate": "10%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Auroracanth Icecortex",
          "rate": "32%"
        },
        {
          "item": "Auroracanth Iceclaw",
          "rate": "24%"
        },
        {
          "item": "Auroracanth Icescale",
          "rate": "17%"
        },
        {
          "item": "Cryo Sac",
          "rate": "14%"
        },
        {
          "item": "Monster Slogbone",
          "rate": "9% x2"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "4%"
        }
      ],
      "carve": [
        {
          "item": "Auroracanth Icescale",
          "rate": "42%",
          "part": "Body"
        },
        {
          "item": "Auroracanth Icecortex",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Monster Slogbone",
          "rate": "14%",
          "part": "Body"
        },
        {
          "item": "Auroracanth Fin",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "2%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Auroracanth Icescale",
          "rate": "96%",
          "part": "Tail"
        },
        {
          "item": "Auroracanth Icescale",
          "rate": "20%",
          "part": "Arm"
        },
        {
          "item": "Auroracanth Icescale",
          "rate": "16%",
          "part": "Head Fin"
        },
        {
          "item": "Auroracanth Fin",
          "rate": "80%",
          "part": "Head Fin"
        },
        {
          "item": "Auroracanth Iceclaw",
          "rate": "80%",
          "part": "Arm x2"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "4%",
          "part": "Head Fin/Tail"
        }
      ],
      "drops": [
        {
          "item": "Auroracanth Icescale",
          "rate": "35%"
        },
        {
          "item": "Auroracanth Iceclaw",
          "rate": "14%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "10%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Auroracanth Icescale",
          "rate": "70%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Auroracanth Iceclaw",
          "rate": "30%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "chameleos",
    "name": "Chameleos",
    "order": [
      "highRank",
      "masterRank"
    ],
    "highRank": {
      "target": [
        {
          "item": "Chameleos Claw+",
          "rate": "28%"
        },
        {
          "item": "Chameleos Wing",
          "rate": "26%"
        },
        {
          "item": "Chameleos Hide+",
          "rate": "21%"
        },
        {
          "item": "Chameleos Tail",
          "rate": "12%"
        },
        {
          "item": "Fucium Ore",
          "rate": "10%"
        },
        {
          "item": "Chameleos Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Chameleos Hide+",
          "rate": "36%",
          "part": "Body"
        },
        {
          "item": "Chameleos Hide+",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Chameleos Claw+",
          "rate": "29%",
          "part": "Body"
        },
        {
          "item": "Chameleos Spike",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Chameleos Wing",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Chameleos Gem",
          "rate": "2%",
          "part": "Body"
        },
        {
          "item": "Chameleos Gem",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Chameleos Wing",
          "rate": "80%",
          "part": "Wing"
        },
        {
          "item": "Chameleos Spike",
          "rate": "80%",
          "part": "Horn"
        },
        {
          "item": "Chameleos Hide+",
          "rate": "17%",
          "part": "Horn"
        },
        {
          "item": "Chameleos Hide+",
          "rate": "20%",
          "part": "Wing"
        },
        {
          "item": "Chameleos Gem",
          "rate": "3%",
          "part": "Horn"
        },
        {
          "item": "Chameleos Tail",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Chameleos Hide+",
          "rate": "30%"
        },
        {
          "item": "Elder Dragon Blood",
          "rate": "15%"
        },
        {
          "item": "Fucium Ore",
          "rate": "14%"
        },
        {
          "item": "Chameleos Gem",
          "rate": "1%"
        },
        {
          "item": "Dragon Treasure",
          "rate": "40%"
        },
        {
          "item": "Chameleos Hide+",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Chameleos Claw+",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Elder Dragon Blood",
          "rate": "20%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Chameleos Hardclaw",
          "rate": "31%"
        },
        {
          "item": "Chameleos Fellwing",
          "rate": "27%"
        },
        {
          "item": "Chameleos Finehide",
          "rate": "22%"
        },
        {
          "item": "Chameleos Lash",
          "rate": "12%"
        },
        {
          "item": "Chameleos Gem",
          "rate": "5%"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Chameleos Finehide",
          "rate": "36%",
          "part": "Body"
        },
        {
          "item": "Chameleos Finehide",
          "rate": "12%",
          "part": "Tail"
        },
        {
          "item": "Chameleos Hardclaw",
          "rate": "28%",
          "part": "Body"
        },
        {
          "item": "Chameleos Hardhorn",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Chameleos Fellwing",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Chameleos Gem",
          "rate": "5%",
          "part": "Body"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "3%",
          "part": "Tail"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "2%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Chameleos Fellwing",
          "rate": "80%",
          "part": "Wing"
        },
        {
          "item": "Chameleos Hardhorn",
          "rate": "80%",
          "part": "Horn"
        },
        {
          "item": "Chameleos Finehide",
          "rate": "12%",
          "part": "Horn"
        },
        {
          "item": "Chameleos Finehide",
          "rate": "20%",
          "part": "Wing"
        },
        {
          "item": "Chameleos Gem",
          "rate": "5%",
          "part": "Horn"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "3%",
          "part": "Horn"
        },
        {
          "item": "Chameleos Lash",
          "rate": "80%",
          "part": "Body"
        }
      ],
      "drops": [
        {
          "item": "Chameleos Finehide",
          "rate": "30%"
        },
        {
          "item": "Pure Dragon Blood",
          "rate": "15%"
        },
        {
          "item": "Ultimas Crystal",
          "rate": "14%"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "1%"
        },
        {
          "item": "Dragon Treasure",
          "rate": "15%"
        },
        {
          "item": "Old Dragon Treasure",
          "rate": "25%"
        },
        {
          "item": "Chameleos Finehide",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Chameleos Hardclaw",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Pure Dragon Blood",
          "rate": "20%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "daimyo-hermitaur",
    "name": "Daimyo Hermitaur",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Hermitaur Hardclaw",
          "rate": "43%"
        },
        {
          "item": "Hermitaur Cortex",
          "rate": "32%"
        },
        {
          "item": "Monster Hardbone",
          "rate": "15% x2"
        },
        {
          "item": "Fine Black Pearl",
          "rate": "10%"
        }
      ],
      "capture": [
        {
          "item": "Hermitaur Cortex",
          "rate": "45%"
        },
        {
          "item": "Hermitaur Hardclaw",
          "rate": "22%"
        },
        {
          "item": "Fine Black Pearl",
          "rate": "15%"
        },
        {
          "item": "Timeworn Crimson Horn",
          "rate": "10%"
        },
        {
          "item": "Monster Hardbone",
          "rate": "8% x2"
        }
      ],
      "carve": [
        {
          "item": "Hermitaur Cortex",
          "rate": "45%",
          "part": "Body"
        },
        {
          "item": "Hermitaur Hardclaw",
          "rate": "33%",
          "part": "Body"
        },
        {
          "item": "Monster Hardbone",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Fine Black Pearl",
          "rate": "10%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Timeworn Crimson Horn",
          "rate": "90%",
          "part": "Shell"
        },
        {
          "item": "Hermitaur Hardclaw",
          "rate": "70%",
          "part": "Claw x2"
        },
        {
          "item": "Hermitaur Hardclaw",
          "rate": "30%",
          "part": "Claw"
        },
        {
          "item": "Monster Hardbone",
          "rate": "10%",
          "part": "Shell x2"
        }
      ],
      "drops": [
        {
          "item": "Crab Pearl+",
          "rate": "80%"
        },
        {
          "item": "Fine Black Pearl",
          "rate": "20%"
        },
        {
          "item": "Hermitaur Cortex",
          "rate": "80%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Hermitaur Cortex",
          "rate": "20% x2",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "goss-harag",
    "name": "Goss Harag",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Goss Harag Hide",
          "rate": "29%"
        },
        {
          "item": "Goss Harag Brace",
          "rate": "20%"
        },
        {
          "item": "Goss Harag Fur",
          "rate": "19%"
        },
        {
          "item": "Block of Ice",
          "rate": "14%"
        },
        {
          "item": "Frost Sac",
          "rate": "10%"
        },
        {
          "item": "Colossal Bone",
          "rate": "8%"
        }
      ],
      "capture": [
        {
          "item": "Goss Harag Hide",
          "rate": "29%"
        },
        {
          "item": "Goss Harag Brace",
          "rate": "25%"
        },
        {
          "item": "Goss Harag Claw",
          "rate": "20%"
        },
        {
          "item": "Goss Harag Fur",
          "rate": "14%"
        },
        {
          "item": "Block of Ice",
          "rate": "12%"
        }
      ],
      "carve": [
        {
          "item": "Goss Harag Fur",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Frost Sac",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Goss Harag Hide",
          "rate": "19%",
          "part": "Body"
        },
        {
          "item": "Goss Harag Brace",
          "rate": "16%",
          "part": "Body"
        },
        {
          "item": "Goss Harag Horn",
          "rate": "12%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Goss Harag Fur",
          "rate": "80%",
          "part": "Back"
        },
        {
          "item": "Goss Harag Claw",
          "rate": "80%",
          "part": "Foreleg x2"
        },
        {
          "item": "Goss Harag Horn",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Goss Harag Hide",
          "rate": "20%",
          "part": "Head"
        },
        {
          "item": "Goss Harag Hide",
          "rate": "20%",
          "part": "Back"
        },
        {
          "item": "Goss Harag Brace",
          "rate": "20%",
          "part": "Foreleg"
        }
      ],
      "drops": [
        {
          "item": "Block of Ice",
          "rate": "35%"
        },
        {
          "item": "Goss Harag Claw",
          "rate": "15%"
        },
        {
          "item": "Beast Tear",
          "rate": "50%"
        },
        {
          "item": "Block of Ice",
          "rate": "25% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Goss Harag Fur",
          "rate": "40%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Goss Harag Hide",
          "rate": "25%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Goss Harag Claw",
          "rate": "10%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Goss Harag Fur",
          "rate": "60%"
        },
        {
          "item": "Beast Tear",
          "rate": "40%"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Goss Harag Hide+",
          "rate": "27%"
        },
        {
          "item": "Goss Harag Brace+",
          "rate": "20%"
        },
        {
          "item": "Goss Harag Fur+",
          "rate": "18%"
        },
        {
          "item": "Block of Ice+",
          "rate": "14%"
        },
        {
          "item": "Freezer Sac",
          "rate": "10%"
        },
        {
          "item": "Beast Gem",
          "rate": "8%"
        },
        {
          "item": "Goss Harag Bile",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Goss Harag Hide+",
          "rate": "25%"
        },
        {
          "item": "Goss Harag Brace+",
          "rate": "20%"
        },
        {
          "item": "Goss Harag Claw+",
          "rate": "18%"
        },
        {
          "item": "Goss Harag Fur+",
          "rate": "12%"
        },
        {
          "item": "Beast Gem",
          "rate": "10%"
        },
        {
          "item": "Block of Ice+",
          "rate": "10%"
        },
        {
          "item": "Goss Harag Bile",
          "rate": "5%"
        }
      ],
      "carve": [
        {
          "item": "Goss Harag Fur+",
          "rate": "29%",
          "part": "Body"
        },
        {
          "item": "Goss Harag Horn+",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Goss Harag Hide+",
          "rate": "18%",
          "part": "Body"
        },
        {
          "item": "Goss Harag Brace+",
          "rate": "15%",
          "part": "Body"
        },
        {
          "item": "Freezer Sac",
          "rate": "9%",
          "part": "Body"
        },
        {
          "item": "Beast Gem",
          "rate": "6%",
          "part": "Body"
        },
        {
          "item": "Goss Harag Bile",
          "rate": "2%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Goss Harag Fur+",
          "rate": "80%",
          "part": "Back"
        },
        {
          "item": "Goss Harag Claw+",
          "rate": "80%",
          "part": "Foreleg x2"
        },
        {
          "item": "Goss Harag Horn+",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Goss Harag Brace+",
          "rate": "20%",
          "part": "Foreleg"
        },
        {
          "item": "Beast Gem",
          "rate": "10%",
          "part": "Head"
        },
        {
          "item": "Goss Harag Hide+",
          "rate": "10%",
          "part": "Head"
        },
        {
          "item": "Goss Harag Hide+",
          "rate": "12%",
          "part": "Back"
        },
        {
          "item": "Goss Harag Bile",
          "rate": "8%",
          "part": "Back"
        }
      ],
      "drops": [
        {
          "item": "Block of Ice+",
          "rate": "33%"
        },
        {
          "item": "Goss Harag Claw+",
          "rate": "14%"
        },
        {
          "item": "Beast Gem",
          "rate": "2%"
        },
        {
          "item": "Goss Harag Bile",
          "rate": "1%"
        },
        {
          "item": "Beast Tear",
          "rate": "15%"
        },
        {
          "item": "Large Beast Tear",
          "rate": "35%"
        },
        {
          "item": "Block of Ice+",
          "rate": "25% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Goss Harag Fur+",
          "rate": "40%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Goss Harag Hide+",
          "rate": "25%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Goss Harag Claw+",
          "rate": "10%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Goss Harag Fur+",
          "rate": "60%"
        },
        {
          "item": "Beast Tear",
          "rate": "10%"
        },
        {
          "item": "Large Beast Tear",
          "rate": "30%"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Goss Finehide",
          "rate": "27%"
        },
        {
          "item": "Goss Harag Allbrace",
          "rate": "20%"
        },
        {
          "item": "Goss Harag Frozen Fur",
          "rate": "18%"
        },
        {
          "item": "Dense Block of Ice",
          "rate": "15%"
        },
        {
          "item": "Cryo Sac",
          "rate": "12%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "5%"
        },
        {
          "item": "Goss Harag Bile+",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Goss Finehide",
          "rate": "27%"
        },
        {
          "item": "Goss Harag Allbrace",
          "rate": "22%"
        },
        {
          "item": "Goss Harag Hardclaw",
          "rate": "20%"
        },
        {
          "item": "Goss Harag Frozen Fur",
          "rate": "14%"
        },
        {
          "item": "Dense Block of Ice",
          "rate": "12%"
        },
        {
          "item": "Goss Harag Bile+",
          "rate": "5%"
        }
      ],
      "carve": [
        {
          "item": "Goss Harag Allbrace",
          "rate": "20%"
        },
        {
          "item": "Goss Finehide",
          "rate": "15%",
          "part": "Head"
        },
        {
          "item": "Goss Finehide",
          "rate": "12%",
          "part": "Back"
        },
        {
          "item": "Goss Harag Bile+",
          "rate": "8%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "5%",
          "part": "Head"
        }
      ],
      "breaks": [
        {
          "item": "Goss Harag Frozen Fur",
          "rate": "80%",
          "part": "Back"
        },
        {
          "item": "Goss Harag Hardclaw",
          "rate": "80%",
          "part": "Foreleg"
        },
        {
          "item": "Goss Harag Hardhorn",
          "rate": "80%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Dense Block of Ice",
          "rate": "33%"
        },
        {
          "item": "Goss Harag Hardclaw",
          "rate": "14%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "2%"
        },
        {
          "item": "Goss Harag Bile+",
          "rate": "1%"
        },
        {
          "item": "Beast Tear",
          "rate": "10%"
        },
        {
          "item": "Large Beast Tear",
          "rate": "40%"
        },
        {
          "item": "Dense Block of Ice",
          "rate": "25% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Goss Harag Frozen Fur",
          "rate": "40%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Goss Finehide",
          "rate": "25%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Goss Harag Hardclaw",
          "rate": "10%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Goss Harag Frozen Fur",
          "rate": "60%"
        },
        {
          "item": "Beast Tear",
          "rate": "5%"
        },
        {
          "item": "Large Beast Tear",
          "rate": "35%"
        }
      ]
    }
  },
  {
    "id": "khezu",
    "name": "Khezu",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Suspicious Fang",
          "rate": "29% x2"
        },
        {
          "item": "Pale Extract",
          "rate": "20%"
        },
        {
          "item": "Electro Sac",
          "rate": "18%"
        },
        {
          "item": "Flabby Hide",
          "rate": "15%"
        },
        {
          "item": "Monster Bone M",
          "rate": "10%"
        },
        {
          "item": "Pale Bone",
          "rate": "8%"
        }
      ],
      "capture": [
        {
          "item": "Suspicious Fang",
          "rate": "33%"
        },
        {
          "item": "Pale Extract",
          "rate": "23% x2"
        },
        {
          "item": "Electro Sac",
          "rate": "18% x2"
        },
        {
          "item": "Flabby Hide",
          "rate": "16%"
        },
        {
          "item": "Pale Bone",
          "rate": "10%"
        }
      ],
      "breaks": [
        {
          "item": "Flabby Hide",
          "rate": "100%",
          "part": "Leg"
        },
        {
          "item": "Suspicious Fang",
          "rate": "60%",
          "part": "Head x2"
        },
        {
          "item": "Pale Extract",
          "rate": "28%",
          "part": "Head"
        },
        {
          "item": "Pale Bone",
          "rate": "12%",
          "part": "Head"
        },
        {
          "item": "Flabby Hide",
          "rate": "36%",
          "part": "Body"
        },
        {
          "item": "Pale Extract",
          "rate": "28%",
          "part": "Body"
        },
        {
          "item": "Suspicious Fang",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Electro Sac",
          "rate": "15%",
          "part": "Body"
        }
      ],
      "drops": [
        {
          "item": "Suspicious Fang",
          "rate": "20%"
        },
        {
          "item": "Pale Extract",
          "rate": "30%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "20%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Pale Extract",
          "rate": "80%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Flabby Hide",
          "rate": "40%"
        },
        {
          "item": "Suspicious Fang",
          "rate": "20%"
        },
        {
          "item": "Pale Extract",
          "rate": "40%"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Thunder Sac",
          "rate": "21%"
        },
        {
          "item": "Suspicious Fang+",
          "rate": "20% x2"
        },
        {
          "item": "Pale Steak",
          "rate": "18%"
        },
        {
          "item": "Pearl Hide",
          "rate": "14%"
        },
        {
          "item": "Pale Extract",
          "rate": "14% x2"
        },
        {
          "item": "Monster Keenbone",
          "rate": "12%"
        },
        {
          "item": "Pale Bone",
          "rate": "10%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "1%"
        }
      ],
      "capture": [
        {
          "item": "Suspicious Fang+",
          "rate": "34%"
        },
        {
          "item": "Pale Extract",
          "rate": "19% x2"
        },
        {
          "item": "Thunder Sac",
          "rate": "18% x2"
        },
        {
          "item": "Pearl Hide",
          "rate": "16%"
        },
        {
          "item": "Pale Steak",
          "rate": "10%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "3%"
        }
      ],
      "breaks": [
        {
          "item": "Pearl Hide",
          "rate": "100%",
          "part": "Leg"
        },
        {
          "item": "Suspicious Fang+",
          "rate": "52%",
          "part": "Head x2"
        },
        {
          "item": "Pale Extract",
          "rate": "20%",
          "part": "Head x2"
        },
        {
          "item": "Pale Bone",
          "rate": "16%",
          "part": "Head"
        },
        {
          "item": "Pale Steak",
          "rate": "12%",
          "part": "Head"
        },
        {
          "item": "Pearl Hide",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Suspicious Fang+",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Thunder Sac",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Pale Extract",
          "rate": "19%",
          "part": "Body x2"
        }
      ],
      "drops": [
        {
          "item": "Suspicious Fang+",
          "rate": "27%"
        },
        {
          "item": "Pale Extract",
          "rate": "22% x2"
        },
        {
          "item": "Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "30%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "20%"
        },
        {
          "item": "Pale Extract",
          "rate": "70% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Wyvern Tear",
          "rate": "10%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "20%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Pearl Hide",
          "rate": "50%"
        },
        {
          "item": "Suspicious Fang+",
          "rate": "20%"
        },
        {
          "item": "Pale Extract",
          "rate": "30% x2"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Mystic Hardfang",
          "rate": "29% x2"
        },
        {
          "item": "Lightning Sac",
          "rate": "21%"
        },
        {
          "item": "Pearl Glosshide",
          "rate": "16%"
        },
        {
          "item": "Pale Extract",
          "rate": "14% x2"
        },
        {
          "item": "Monster Toughbone",
          "rate": "10%"
        },
        {
          "item": "Khezu Special Cut",
          "rate": "8%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Mystic Hardfang",
          "rate": "33%"
        },
        {
          "item": "Lightning Sac",
          "rate": "18% x2"
        },
        {
          "item": "Pale Extract",
          "rate": "16% x3"
        },
        {
          "item": "Pearl Glosshide",
          "rate": "15%"
        },
        {
          "item": "Khezu Special Cut",
          "rate": "10%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "5%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "3%"
        }
      ],
      "breaks": [
        {
          "item": "Pearl Glosshide",
          "rate": "100%",
          "part": "Leg"
        },
        {
          "item": "Mystic Hardfang",
          "rate": "52%",
          "part": "Head x2"
        },
        {
          "item": "Pale Extract",
          "rate": "20%",
          "part": "Head x3"
        },
        {
          "item": "Pale Steak",
          "rate": "16%",
          "part": "Head"
        },
        {
          "item": "Khezu Special Cut",
          "rate": "12%",
          "part": "Head"
        },
        {
          "item": "Pearl Glosshide",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Mystic Hardfang",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Lightning Sac",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Pale Extract",
          "rate": "19%",
          "part": "Body x2"
        }
      ],
      "drops": [
        {
          "item": "Mystic Hardfang",
          "rate": "27%"
        },
        {
          "item": "Pale Extract",
          "rate": "22% x2"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "20%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "30%"
        },
        {
          "item": "Pale Extract",
          "rate": "70% x3",
          "part": "Wyvern Riding"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Pearl Glosshide",
          "rate": "50%"
        },
        {
          "item": "Mystic Hardfang",
          "rate": "20%"
        },
        {
          "item": "Pale Extract",
          "rate": "30% x2"
        }
      ]
    }
  },
  {
    "id": "lagombi",
    "name": "Lagombi",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Lagombi Plastron",
          "rate": "39%"
        },
        {
          "item": "Lagombi Iceclaw",
          "rate": "23%"
        },
        {
          "item": "Lagombi Pelt",
          "rate": "22%"
        },
        {
          "item": "Jumbo Bone",
          "rate": "16%"
        }
      ],
      "capture": [
        {
          "item": "Lagombi Plastron",
          "rate": "37%"
        },
        {
          "item": "Lagombi Ear",
          "rate": "26%"
        },
        {
          "item": "Lagombi Pelt",
          "rate": "16% x2"
        },
        {
          "item": "Lagombi Iceclaw",
          "rate": "16%"
        },
        {
          "item": "Jumbo Bone",
          "rate": "5% x2"
        }
      ],
      "carve": [
        {
          "item": "Lagombi Pelt",
          "rate": "39%",
          "part": "Body"
        },
        {
          "item": "Lagombi Plastron",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Lagombi Iceclaw",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Jumbo Bone",
          "rate": "7%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Lagombi Ear",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Lagombi Pelt",
          "rate": "20%",
          "part": "Head x2"
        }
      ],
      "drops": [
        {
          "item": "Lagombi Pelt",
          "rate": "40%"
        },
        {
          "item": "Lagombi Iceclaw",
          "rate": "10%"
        },
        {
          "item": "Beast Tear",
          "rate": "50%"
        },
        {
          "item": "Lagombi Pelt",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Lagombi Plastron",
          "rate": "35%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Lagombi Iceclaw",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Lagombi Plastron+",
          "rate": "38%"
        },
        {
          "item": "Lagombi Frozenclaw",
          "rate": "22%"
        },
        {
          "item": "Lagombi Pelt+",
          "rate": "21%"
        },
        {
          "item": "Stoutbone",
          "rate": "14%"
        },
        {
          "item": "Beast Gem",
          "rate": "5%"
        }
      ],
      "capture": [
        {
          "item": "Lagombi Plastron+",
          "rate": "32%"
        },
        {
          "item": "Lagombi Ear+",
          "rate": "26%"
        },
        {
          "item": "Lagombi Frozenclaw",
          "rate": "16%"
        },
        {
          "item": "Lagombi Pelt+",
          "rate": "14% x2"
        },
        {
          "item": "Beast Gem",
          "rate": "7%"
        },
        {
          "item": "Stoutbone",
          "rate": "5% x2"
        }
      ],
      "carve": [
        {
          "item": "Lagombi Pelt+",
          "rate": "38%",
          "part": "Body"
        },
        {
          "item": "Lagombi Plastron+",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Lagombi Frozenclaw",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Stoutbone",
          "rate": "8%",
          "part": "Body"
        },
        {
          "item": "Beast Gem",
          "rate": "3%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Lagombi Ear+",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Lagombi Pelt+",
          "rate": "12%",
          "part": "Head x2"
        },
        {
          "item": "Beast Gem",
          "rate": "8%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Lagombi Pelt+",
          "rate": "39%"
        },
        {
          "item": "Lagombi Frozenclaw",
          "rate": "10%"
        },
        {
          "item": "Beast Gem",
          "rate": "1%"
        },
        {
          "item": "Beast Tear",
          "rate": "30%"
        },
        {
          "item": "Large Beast Tear",
          "rate": "20%"
        },
        {
          "item": "Lagombi Pelt+",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Lagombi Plastron+",
          "rate": "35%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Lagombi Frozenclaw",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Lagombi Cuirass",
          "rate": "36%"
        },
        {
          "item": "Lagombi Frigidclaw",
          "rate": "25%"
        },
        {
          "item": "Lagombi Fur",
          "rate": "21%"
        },
        {
          "item": "Massive Bone",
          "rate": "15%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Lagombi Cuirass",
          "rate": "31%"
        },
        {
          "item": "Lagombi Auricle",
          "rate": "26%"
        },
        {
          "item": "Lagombi Frigidclaw",
          "rate": "17%"
        },
        {
          "item": "Lagombi Fur",
          "rate": "12% x2"
        },
        {
          "item": "Beast Gem",
          "rate": "6%"
        },
        {
          "item": "Massive Bone",
          "rate": "5%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Lagombi Fur",
          "rate": "36%",
          "part": "Body"
        },
        {
          "item": "Lagombi Cuirass",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Lagombi Frigidclaw",
          "rate": "23%",
          "part": "Body"
        },
        {
          "item": "Massive Bone",
          "rate": "8%",
          "part": "Body"
        },
        {
          "item": "Beast Gem",
          "rate": "4%",
          "part": "Body"
        },
        {
          "item": "Large Beast Gem",
          "rate": "2%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Lagombi Auricle",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Lagombi Fur",
          "rate": "15%",
          "part": "Head x2"
        },
        {
          "item": "Large Beast Gem",
          "rate": "5%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Lagombi Fur",
          "rate": "35%"
        },
        {
          "item": "Lagombi Frigidclaw",
          "rate": "10%"
        },
        {
          "item": "Beast Gem",
          "rate": "4%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "1%"
        },
        {
          "item": "Beast Tear",
          "rate": "20%"
        },
        {
          "item": "Large Beast Tear",
          "rate": "30%"
        },
        {
          "item": "Lagombi Fur",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Lagombi Cuirass",
          "rate": "35%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Lagombi Frigidclaw",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "lunagaron",
    "name": "Lunagaron",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Lunagaron Shard",
          "rate": "34%"
        },
        {
          "item": "Luna Vermilion Hardclaw",
          "rate": "23%"
        },
        {
          "item": "Frostborn Hardfang",
          "rate": "18%"
        },
        {
          "item": "Lunagaron Cortex",
          "rate": "14%"
        },
        {
          "item": "Lunagaron Bluecore",
          "rate": "8%"
        },
        {
          "item": "Lunagaron Frost Jewel",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Lunagaron Shard",
          "rate": "33%"
        },
        {
          "item": "Luna Vermilion Hardclaw",
          "rate": "27%"
        },
        {
          "item": "Lunagaron Cortex",
          "rate": "16% x2"
        },
        {
          "item": "Lunagaron Lash Shell",
          "rate": "12%"
        },
        {
          "item": "Lunagaron Bluecore",
          "rate": "9%"
        },
        {
          "item": "Lunagaron Frost Jewel",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Lunagaron Shard",
          "rate": "27%",
          "part": "Tail"
        },
        {
          "item": "Lunagaron Shard",
          "rate": "17%",
          "part": "Head"
        },
        {
          "item": "Lunagaron Cortex",
          "rate": "20%",
          "part": "Foreleg"
        },
        {
          "item": "Lunagaron Frost Jewel",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Lunagaron Frost Jewel",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Lunagaron Lash Shell",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Frostborn Hardfang",
          "rate": "70%",
          "part": "Head"
        },
        {
          "item": "Luna Vermilion Hardclaw",
          "rate": "50%",
          "part": "Foreleg"
        },
        {
          "item": "Luna Vermilion Hardclaw",
          "rate": "30%",
          "part": "Foreleg x2"
        }
      ],
      "drops": [
        {
          "item": "Lunagaron Shard",
          "rate": "29%"
        },
        {
          "item": "Lunagaron Bluecore",
          "rate": "20%"
        },
        {
          "item": "Lunagaron Frost Jewel",
          "rate": "1%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Lunagaron Shard",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Lunagaron Cortex",
          "rate": "35%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Frostborn Hardfang",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "almudron",
    "name": "Almudron",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Almudron Shell",
          "rate": "27%"
        },
        {
          "item": "Golden Muck",
          "rate": "22%"
        },
        {
          "item": "Almudron Scale",
          "rate": "16%"
        },
        {
          "item": "Almudron Fin",
          "rate": "15%"
        },
        {
          "item": "Almudron Whisker",
          "rate": "10%"
        },
        {
          "item": "Almudron Tail",
          "rate": "8%"
        },
        {
          "item": "Almudron Plate",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Almudron Claw",
          "rate": "31%"
        },
        {
          "item": "Almudron Shell",
          "rate": "23%"
        },
        {
          "item": "Almudron Scale",
          "rate": "18%"
        },
        {
          "item": "Golden Muck",
          "rate": "13% x2"
        },
        {
          "item": "Almudron Tail",
          "rate": "12%"
        },
        {
          "item": "Almudron Plate",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Almudron Scale",
          "rate": "38%",
          "part": "Body"
        },
        {
          "item": "Almudron Shell",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Almudron Fin",
          "rate": "22%",
          "part": "Body"
        },
        {
          "item": "Almudron Fin",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Almudron Whisker",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Almudron Plate",
          "rate": "1%",
          "part": "Body"
        },
        {
          "item": "Almudron Plate",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Almudron Claw",
          "rate": "90%",
          "part": "Foreleg x2"
        },
        {
          "item": "Almudron Whisker",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Almudron Scale",
          "rate": "70%",
          "part": "Torso"
        },
        {
          "item": "Almudron Scale",
          "rate": "30%",
          "part": "Foreleg"
        },
        {
          "item": "Almudron Shell",
          "rate": "30%",
          "part": "Torso"
        },
        {
          "item": "Almudron Shell",
          "rate": "20%",
          "part": "Tail"
        },
        {
          "item": "Almudron Fin",
          "rate": "17%",
          "part": "Head"
        },
        {
          "item": "Almudron Fin",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Almudron Plate",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Almudron Tail",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Golden Muck",
          "rate": "30%"
        },
        {
          "item": "Almudron Scale",
          "rate": "19%"
        },
        {
          "item": "Almudron Plate",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Golden Muck",
          "rate": "25% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Almudron Scale",
          "rate": "37%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Almudron Shell",
          "rate": "28%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Almudron Claw",
          "rate": "10%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Almudron Shell+",
          "rate": "28%"
        },
        {
          "item": "Golden Sludge",
          "rate": "23%"
        },
        {
          "item": "Almudron Scale+",
          "rate": "17%"
        },
        {
          "item": "Almudron Fin+",
          "rate": "16%"
        },
        {
          "item": "Almudron Whisker+",
          "rate": "10%"
        },
        {
          "item": "Almudron Plate",
          "rate": "5%"
        },
        {
          "item": "Golden Almudron Orb",
          "rate": "1%"
        }
      ],
      "capture": [
        {
          "item": "Almudron Claw+",
          "rate": "31%"
        },
        {
          "item": "Almudron Shell+",
          "rate": "21%"
        },
        {
          "item": "Almudron Scale+",
          "rate": "15%"
        },
        {
          "item": "Golden Sludge",
          "rate": "13%"
        },
        {
          "item": "Almudron Tail",
          "rate": "12%"
        },
        {
          "item": "Almudron Plate",
          "rate": "5%"
        },
        {
          "item": "Golden Almudron Orb",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Almudron Scale+",
          "rate": "36%",
          "part": "Body"
        },
        {
          "item": "Almudron Shell+",
          "rate": "26%",
          "part": "Body"
        },
        {
          "item": "Almudron Fin+",
          "rate": "22%",
          "part": "Body"
        },
        {
          "item": "Almudron Fin+",
          "rate": "12%",
          "part": "Tail"
        },
        {
          "item": "Almudron Whisker+",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Almudron Plate",
          "rate": "3%",
          "part": "Body"
        },
        {
          "item": "Almudron Plate",
          "rate": "5%",
          "part": "Tail"
        },
        {
          "item": "Golden Almudron Orb",
          "rate": "1%",
          "part": "Body"
        },
        {
          "item": "Golden Almudron Orb",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Almudron Claw+",
          "rate": "90%",
          "part": "Foreleg x2"
        },
        {
          "item": "Almudron Whisker+",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Almudron Scale+",
          "rate": "70%",
          "part": "Torso"
        },
        {
          "item": "Almudron Scale+",
          "rate": "10%",
          "part": "Foreleg"
        },
        {
          "item": "Almudron Shell+",
          "rate": "30%",
          "part": "Torso"
        },
        {
          "item": "Almudron Shell+",
          "rate": "20%",
          "part": "Tail"
        },
        {
          "item": "Almudron Fin+",
          "rate": "12%",
          "part": "Head"
        },
        {
          "item": "Almudron Fin+",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Almudron Plate",
          "rate": "5%",
          "part": "Head"
        },
        {
          "item": "Golden Almudron Orb",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Almudron Tail",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Golden Sludge",
          "rate": "28%"
        },
        {
          "item": "Almudron Scale+",
          "rate": "18%"
        },
        {
          "item": "Almudron Plate",
          "rate": "3%"
        },
        {
          "item": "Golden Almudron Orb",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "10%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Golden Sludge",
          "rate": "25% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Almudron Scale+",
          "rate": "36%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Almudron Shell+",
          "rate": "28%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Almudron Claw+",
          "rate": "10%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Almudron Plate",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Almudron Cortex",
          "rate": "26%"
        },
        {
          "item": "Pure Golden Sludge",
          "rate": "21%"
        },
        {
          "item": "Almudron Shard",
          "rate": "16%"
        },
        {
          "item": "Large Almudron Fin",
          "rate": "15%"
        },
        {
          "item": "Almud Ascetic Whisker",
          "rate": "10%"
        },
        {
          "item": "Almudron Lashtail",
          "rate": "6%"
        },
        {
          "item": "Golden Almudron Orb",
          "rate": "4%"
        },
        {
          "item": "Almudron Mantle",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Almudron Hardclaw",
          "rate": "31%"
        },
        {
          "item": "Almudron Cortex",
          "rate": "21%"
        },
        {
          "item": "Almudron Shard",
          "rate": "15%"
        },
        {
          "item": "Pure Golden Sludge",
          "rate": "13%"
        },
        {
          "item": "Almudron Lashtail",
          "rate": "12%"
        },
        {
          "item": "Golden Almudron Orb",
          "rate": "5%"
        },
        {
          "item": "Almudron Mantle",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Almudron Shard",
          "rate": "35%",
          "part": "Body"
        },
        {
          "item": "Almudron Cortex",
          "rate": "26%",
          "part": "Body"
        },
        {
          "item": "Large Almudron Fin",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Large Almudron Fin",
          "rate": "12%",
          "part": "Tail"
        },
        {
          "item": "Almud Ascetic Whisker",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Golden Almudron Orb",
          "rate": "4%",
          "part": "Body"
        },
        {
          "item": "Golden Almudron Orb",
          "rate": "5%",
          "part": "Tail"
        },
        {
          "item": "Almudron Mantle",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Almudron Hardclaw",
          "rate": "90%",
          "part": "Foreleg"
        },
        {
          "item": "Large Almudron Fin",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Almud Ascetic Whisker",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Almudron Shard",
          "rate": "70%",
          "part": "Body"
        },
        {
          "item": "Almudron Cortex",
          "rate": "30%",
          "part": "Torso"
        },
        {
          "item": "Almudron Lashtail",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Pure Golden Sludge",
          "rate": "28%"
        },
        {
          "item": "Almudron Shard",
          "rate": "18%"
        },
        {
          "item": "Golden Almudron Orb",
          "rate": "3%"
        },
        {
          "item": "Almudron Mantle",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "5%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "45%"
        },
        {
          "item": "Pure Golden Sludge",
          "rate": "25% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Almudron Shard",
          "rate": "36%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Almudron Cortex",
          "rate": "28%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Almudron Hardclaw",
          "rate": "10%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Golden Almudron Orb",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "royal-ludroth",
    "name": "Royal Ludroth",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Spongy Hide",
          "rate": "26%"
        },
        {
          "item": "Royal Ludroth Claw",
          "rate": "21%"
        },
        {
          "item": "Aqua Sac",
          "rate": "14%"
        },
        {
          "item": "Dash Extract",
          "rate": "12%"
        },
        {
          "item": "Royal Ludroth Scale",
          "rate": "11%"
        },
        {
          "item": "Royal Ludroth Crest",
          "rate": "10%"
        },
        {
          "item": "Royal Ludroth Tail",
          "rate": "6%"
        }
      ],
      "capture": [
        {
          "item": "Dash Extract",
          "rate": "30%"
        },
        {
          "item": "Spongy Hide",
          "rate": "24%"
        },
        {
          "item": "Royal Ludroth Scale",
          "rate": "16% x2"
        },
        {
          "item": "Royal Ludroth Tail",
          "rate": "16%"
        },
        {
          "item": "Aqua Sac",
          "rate": "14% x2"
        }
      ],
      "carve": [
        {
          "item": "Royal Ludroth Scale",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Royal Ludroth Scale",
          "rate": "30%",
          "part": "Tail"
        },
        {
          "item": "Spongy Hide",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Royal Ludroth Claw",
          "rate": "23%",
          "part": "Body"
        },
        {
          "item": "Dash Extract",
          "rate": "15%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Royal Ludroth Crest",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Spongy Hide",
          "rate": "60%",
          "part": "Mane"
        },
        {
          "item": "Royal Ludroth Scale",
          "rate": "20%",
          "part": "Head"
        },
        {
          "item": "Royal Ludroth Scale",
          "rate": "20%",
          "part": "Mane x2"
        },
        {
          "item": "Dash Extract",
          "rate": "20%",
          "part": "Mane"
        },
        {
          "item": "Royal Ludroth Tail",
          "rate": "70%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Dash Extract",
          "rate": "40%"
        },
        {
          "item": "Royal Ludroth Claw",
          "rate": "10%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Dash Extract",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Spongy Hide",
          "rate": "35%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Royal Ludroth Claw",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Spongy Hide+",
          "rate": "27%"
        },
        {
          "item": "Royal Ludroth Claw+",
          "rate": "22%"
        },
        {
          "item": "Torrent Sac",
          "rate": "14%"
        },
        {
          "item": "Royal Ludroth Scale+",
          "rate": "12%"
        },
        {
          "item": "Royal Ludroth Crest+",
          "rate": "10%"
        },
        {
          "item": "Dash Extract",
          "rate": "9% x2"
        },
        {
          "item": "Royal Ludroth Tail",
          "rate": "5%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "1%"
        }
      ],
      "capture": [
        {
          "item": "Spongy Hide+",
          "rate": "27%"
        },
        {
          "item": "Dash Extract",
          "rate": "24% x2"
        },
        {
          "item": "Royal Ludroth Scale+",
          "rate": "18% x2"
        },
        {
          "item": "Torrent Sac",
          "rate": "16% x2"
        },
        {
          "item": "Royal Ludroth Tail",
          "rate": "12%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Spongy Hide+",
          "rate": "31%",
          "part": "Body"
        },
        {
          "item": "Royal Ludroth Scale+",
          "rate": "28%",
          "part": "Tail"
        },
        {
          "item": "Royal Ludroth Scale+",
          "rate": "33%",
          "part": "Body"
        },
        {
          "item": "Royal Ludroth Claw+",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Dash Extract",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Wyvern Gem",
          "rate": "2%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Royal Ludroth Crest+",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Spongy Hide+",
          "rate": "60%",
          "part": "Mane"
        },
        {
          "item": "Dash Extract",
          "rate": "20%",
          "part": "Mane x2"
        },
        {
          "item": "Royal Ludroth Scale+",
          "rate": "20%",
          "part": "Head"
        },
        {
          "item": "Royal Ludroth Scale+",
          "rate": "20%",
          "part": "Mane x2"
        },
        {
          "item": "Royal Ludroth Tail",
          "rate": "70%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Dash Extract",
          "rate": "34% x2"
        },
        {
          "item": "Royal Ludroth Claw+",
          "rate": "15%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "25%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "25%"
        },
        {
          "item": "Dash Extract",
          "rate": "35% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Spongy Hide+",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Royal Ludroth Claw+",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Spongy Piel",
          "rate": "27%"
        },
        {
          "item": "Royal Ludroth Talon",
          "rate": "22%"
        },
        {
          "item": "Flood Sac",
          "rate": "14%"
        },
        {
          "item": "Royal Ludroth Shard",
          "rate": "12%"
        },
        {
          "item": "Chic Crest",
          "rate": "10%"
        },
        {
          "item": "Dash Extract",
          "rate": "9% x2"
        },
        {
          "item": "Royal Ludroth Lash",
          "rate": "5%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "1%"
        }
      ],
      "capture": [
        {
          "item": "Spongy Piel",
          "rate": "27%"
        },
        {
          "item": "Dash Extract",
          "rate": "24% x3"
        },
        {
          "item": "Royal Ludroth Shard",
          "rate": "18% x2"
        },
        {
          "item": "Flood Sac",
          "rate": "16% x2"
        },
        {
          "item": "Royal Ludroth Lash",
          "rate": "12%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Royal Ludroth Shard",
          "rate": "33%",
          "part": "Body"
        },
        {
          "item": "Royal Ludroth Shard",
          "rate": "28%",
          "part": "Tail"
        },
        {
          "item": "Spongy Piel",
          "rate": "31%",
          "part": "Body"
        },
        {
          "item": "Royal Ludroth Talon",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Dash Extract",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "2%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Chic Crest",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Spongy Piel",
          "rate": "60%",
          "part": "Mane"
        },
        {
          "item": "Royal Ludroth Shard",
          "rate": "20%",
          "part": "Head"
        },
        {
          "item": "Royal Ludroth Shard",
          "rate": "20%",
          "part": "Mane x2"
        },
        {
          "item": "Dash Extract",
          "rate": "20%",
          "part": "Mane x3"
        },
        {
          "item": "Royal Ludroth Lash",
          "rate": "70%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Dash Extract",
          "rate": "34% x2"
        },
        {
          "item": "Royal Ludroth Talon",
          "rate": "15%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "20%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "30%"
        },
        {
          "item": "Dash Extract",
          "rate": "35% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Spongy Piel",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Royal Ludroth Talon",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "velkhana",
    "name": "Velkhana",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Velkhana Cortex",
          "rate": "29%"
        },
        {
          "item": "Velkhana Hardclaw",
          "rate": "23%"
        },
        {
          "item": "Crystal Shard",
          "rate": "17%"
        },
        {
          "item": "Velkhana Fellwing",
          "rate": "16%"
        },
        {
          "item": "Velkhana Lash",
          "rate": "12%"
        },
        {
          "item": "Velkhana Crystal",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Velkhana Cortex",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Velkhana Cortex",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Crystal Shard",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Velkhana Hardclaw",
          "rate": "19%",
          "part": "Body"
        },
        {
          "item": "Velkhana Fellwing",
          "rate": "15%",
          "part": "Body"
        },
        {
          "item": "Velkhana Crownhorn",
          "rate": "8%",
          "part": "Body"
        },
        {
          "item": "Velkhana Crystal",
          "rate": "2%",
          "part": "Body"
        },
        {
          "item": "Velkhana Crystal",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Velkhana Fellwing",
          "rate": "80%",
          "part": "Wing"
        },
        {
          "item": "Velkhana Crownhorn",
          "rate": "80%",
          "part": "Horn"
        },
        {
          "item": "Velkhana Hardclaw",
          "rate": "20%",
          "part": "Wing"
        },
        {
          "item": "Crystal Shard",
          "rate": "17%",
          "part": "Horn"
        },
        {
          "item": "Velkhana Crystal",
          "rate": "3%",
          "part": "Horn"
        },
        {
          "item": "Velkhana Lash",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Velkhana Cortex",
          "rate": "32%"
        },
        {
          "item": "Velkhana Hardclaw",
          "rate": "12%"
        },
        {
          "item": "Velkhana Crystal",
          "rate": "1%"
        },
        {
          "item": "Pure Dragon Blood",
          "rate": "15%"
        },
        {
          "item": "Old Dragon Treasure",
          "rate": "40%"
        },
        {
          "item": "Velkhana Cortex",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Crystal Shard",
          "rate": "25%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Velkhana Hardclaw",
          "rate": "10%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Pure Dragon Blood",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "aknosom",
    "name": "Aknosom",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Aknosom Feather",
          "rate": "32%"
        },
        {
          "item": "Aknosom Scale",
          "rate": "24%"
        },
        {
          "item": "Flame Sac",
          "rate": "24%"
        },
        {
          "item": "Monster Bone M",
          "rate": "12%"
        },
        {
          "item": "Aknosom Beak",
          "rate": "8%"
        }
      ],
      "capture": [
        {
          "item": "Aknosom Feather",
          "rate": "39%"
        },
        {
          "item": "Aknosom Scale",
          "rate": "24%"
        },
        {
          "item": "Flame Sac",
          "rate": "20%"
        },
        {
          "item": "Aknosom Beak",
          "rate": "12%"
        },
        {
          "item": "Aknosom Crest",
          "rate": "5%"
        }
      ],
      "carve": [
        {
          "item": "Aknosom Scale",
          "rate": "43%",
          "part": "Body"
        },
        {
          "item": "Aknosom Feather",
          "rate": "31%",
          "part": "Body"
        },
        {
          "item": "Flame Sac",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Aknosom Beak",
          "rate": "5%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Aknosom Feather",
          "rate": "100%",
          "part": "Wing"
        },
        {
          "item": "Aknosom Crest",
          "rate": "100%",
          "part": "Crest"
        },
        {
          "item": "Aknosom Beak",
          "rate": "70%",
          "part": "Beak"
        },
        {
          "item": "Aknosom Scale",
          "rate": "30%",
          "part": "Beak"
        },
        {
          "item": "Aknosom Scale",
          "rate": "100%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Aknosom Scale",
          "rate": "35%"
        },
        {
          "item": "Aknosom Feather",
          "rate": "15%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Aknosom Scale",
          "rate": "70%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Aknosom Feather",
          "rate": "30%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Aknosom Feather+",
          "rate": "30%"
        },
        {
          "item": "Inferno Sac",
          "rate": "24%"
        },
        {
          "item": "Aknosom Scale+",
          "rate": "21%"
        },
        {
          "item": "Aknosom Beak",
          "rate": "12%"
        },
        {
          "item": "Monster Keenbone",
          "rate": "10%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Aknosom Feather+",
          "rate": "36%"
        },
        {
          "item": "Aknosom Scale+",
          "rate": "21%"
        },
        {
          "item": "Inferno Sac",
          "rate": "18%"
        },
        {
          "item": "Aknosom Beak",
          "rate": "15%"
        },
        {
          "item": "Aknosom Crest+",
          "rate": "5%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "5%"
        }
      ],
      "carve": [
        {
          "item": "Aknosom Scale+",
          "rate": "41%",
          "part": "Body"
        },
        {
          "item": "Aknosom Feather+",
          "rate": "29%",
          "part": "Body"
        },
        {
          "item": "Inferno Sac",
          "rate": "19%",
          "part": "Body"
        },
        {
          "item": "Aknosom Beak",
          "rate": "8%",
          "part": "Body"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "3%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Aknosom Feather+",
          "rate": "100%",
          "part": "Wing"
        },
        {
          "item": "Aknosom Crest+",
          "rate": "100%",
          "part": "Crest"
        },
        {
          "item": "Aknosom Beak",
          "rate": "70%",
          "part": "Beak"
        },
        {
          "item": "Aknosom Scale+",
          "rate": "25%",
          "part": "Beak"
        },
        {
          "item": "Aknosom Scale+",
          "rate": "100%",
          "part": "Tail"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "5%",
          "part": "Beak"
        }
      ],
      "drops": [
        {
          "item": "Aknosom Scale+",
          "rate": "34%"
        },
        {
          "item": "Aknosom Feather+",
          "rate": "15%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "30%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "20%"
        },
        {
          "item": "Aknosom Scale+",
          "rate": "70%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Aknosom Feather+",
          "rate": "30%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Aknosom Plume",
          "rate": "30%"
        },
        {
          "item": "Conflagrant Sac",
          "rate": "24%"
        },
        {
          "item": "Aknosom Shard",
          "rate": "21%"
        },
        {
          "item": "Aknosom Burnbeak",
          "rate": "12%"
        },
        {
          "item": "Monster Toughbone",
          "rate": "10%"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Aknosom Plume",
          "rate": "33%"
        },
        {
          "item": "Aknosom Shard",
          "rate": "20%"
        },
        {
          "item": "Conflagrant Sac",
          "rate": "17%"
        },
        {
          "item": "Aknosom Burnbeak",
          "rate": "15%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "6%"
        },
        {
          "item": "Aknosom Head-Crest",
          "rate": "5%"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "4%"
        }
      ],
      "carve": [
        {
          "item": "Aknosom Shard",
          "rate": "39%",
          "part": "Body"
        },
        {
          "item": "Aknosom Plume",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Conflagrant Sac",
          "rate": "18%",
          "part": "Body"
        },
        {
          "item": "Aknosom Burnbeak",
          "rate": "8%",
          "part": "Body"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "5%",
          "part": "Body"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "3%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Aknosom Shard",
          "rate": "100%",
          "part": "Tail"
        },
        {
          "item": "Aknosom Shard",
          "rate": "25%",
          "part": "Beak"
        },
        {
          "item": "Aknosom Plume",
          "rate": "100%",
          "part": "Wing"
        },
        {
          "item": "Aknosom Head-Crest",
          "rate": "100%",
          "part": "Crest"
        },
        {
          "item": "Aknosom Burnbeak",
          "rate": "70%",
          "part": "Beak"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "5%",
          "part": "Beak"
        }
      ],
      "drops": [
        {
          "item": "Aknosom Shard",
          "rate": "34%"
        },
        {
          "item": "Aknosom Plume",
          "rate": "15%"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "20%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "30%"
        },
        {
          "item": "Aknosom Shard",
          "rate": "70%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Aknosom Plume",
          "rate": "30%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "bishaten",
    "name": "Bishaten",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Bishaten Feather",
          "rate": "33%"
        },
        {
          "item": "Bishaten Fur",
          "rate": "22%"
        },
        {
          "item": "Bishaten Talon",
          "rate": "22%"
        },
        {
          "item": "Jumbo Bone",
          "rate": "14%"
        },
        {
          "item": "Bishaten Horn",
          "rate": "9%"
        }
      ],
      "capture": [
        {
          "item": "Bishaten Feather",
          "rate": "36%"
        },
        {
          "item": "Bishaten Fur",
          "rate": "23%"
        },
        {
          "item": "Bisha Tailcase",
          "rate": "23%"
        },
        {
          "item": "Bishaten Talon",
          "rate": "18% x2"
        }
      ],
      "carve": [
        {
          "item": "Bishaten Fur",
          "rate": "52%",
          "part": "Body"
        },
        {
          "item": "Bishaten Feather",
          "rate": "33%",
          "part": "Body"
        },
        {
          "item": "Jumbo Bone",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Bishaten Horn",
          "rate": "5%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Bisha Tailcase",
          "rate": "100%",
          "part": "Tail"
        },
        {
          "item": "Bishaten Horn",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Bishaten Feather",
          "rate": "70%",
          "part": "Wing"
        },
        {
          "item": "Bishaten Talon",
          "rate": "30%",
          "part": "Wing x2"
        },
        {
          "item": "Bishaten Fur",
          "rate": "20%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Bishaten Fur",
          "rate": "40%"
        },
        {
          "item": "Bisha Tailcase",
          "rate": "10%"
        },
        {
          "item": "Beast Tear",
          "rate": "50%"
        },
        {
          "item": "Jumbofruit",
          "rate": "100%"
        },
        {
          "item": "Poisonfruit",
          "rate": "100%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Flashfruit",
          "rate": "100%"
        },
        {
          "item": "Bishaten Fur",
          "rate": "50%"
        },
        {
          "item": "Bishaten Feather",
          "rate": "35%"
        },
        {
          "item": "Bisha Tailcase",
          "rate": "15%"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Bishaten Feather+",
          "rate": "32%"
        },
        {
          "item": "Bishaten Talon+",
          "rate": "21%"
        },
        {
          "item": "Bishaten Fur+",
          "rate": "20%"
        },
        {
          "item": "Stoutbone",
          "rate": "12%"
        },
        {
          "item": "Bishaten Horn+",
          "rate": "9%"
        },
        {
          "item": "Beast Gem",
          "rate": "6%"
        }
      ],
      "capture": [
        {
          "item": "Bishaten Feather+",
          "rate": "33%"
        },
        {
          "item": "Bishaten Tailcase+",
          "rate": "23%"
        },
        {
          "item": "Bishaten Fur+",
          "rate": "20%"
        },
        {
          "item": "Bishaten Talon+",
          "rate": "16% x2"
        },
        {
          "item": "Beast Gem",
          "rate": "8%"
        }
      ],
      "carve": [
        {
          "item": "Bishaten Fur+",
          "rate": "49%",
          "part": "Body"
        },
        {
          "item": "Bishaten Feather+",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Stoutbone",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Bishaten Horn+",
          "rate": "5%",
          "part": "Body"
        },
        {
          "item": "Beast Gem",
          "rate": "4%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Bishaten Tailcase+",
          "rate": "100%",
          "part": "Tail"
        },
        {
          "item": "Bishaten Horn+",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Bishaten Feather+",
          "rate": "70%",
          "part": "Wing"
        },
        {
          "item": "Bishaten Talon+",
          "rate": "30%",
          "part": "Wing x2"
        },
        {
          "item": "Bishaten Fur+",
          "rate": "15%",
          "part": "Head"
        },
        {
          "item": "Beast Gem",
          "rate": "5%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Bishaten Fur+",
          "rate": "39%"
        },
        {
          "item": "Bishaten Tailcase+",
          "rate": "10%"
        },
        {
          "item": "Beast Gem",
          "rate": "1%"
        },
        {
          "item": "Beast Tear",
          "rate": "20%"
        },
        {
          "item": "Large Beast Tear",
          "rate": "30%"
        },
        {
          "item": "Jumbofruit",
          "rate": "100%"
        },
        {
          "item": "Poisonfruit",
          "rate": "100%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Parafruit",
          "rate": "100%"
        },
        {
          "item": "Flashfruit",
          "rate": "100%"
        },
        {
          "item": "Bishaten Fur+",
          "rate": "50%"
        },
        {
          "item": "Bishaten Feather+",
          "rate": "35%"
        },
        {
          "item": "Bishaten Tailcase+",
          "rate": "15%"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Bishaten Glidefeather",
          "rate": "28%"
        },
        {
          "item": "Bishaten Hardclaw",
          "rate": "20%"
        },
        {
          "item": "Bishaten Finefur",
          "rate": "19%"
        },
        {
          "item": "Massive Bone",
          "rate": "12%"
        },
        {
          "item": "Bishaten Heavyhorn",
          "rate": "9%"
        },
        {
          "item": "Beast Gem",
          "rate": "7%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "5%"
        }
      ],
      "capture": [
        {
          "item": "Bishaten Glidefeather",
          "rate": "34%"
        },
        {
          "item": "Bishaten Hardtail",
          "rate": "23%"
        },
        {
          "item": "Bishaten Finefur",
          "rate": "21%"
        },
        {
          "item": "Bishaten Hardclaw",
          "rate": "16% x2"
        },
        {
          "item": "Large Beast Gem",
          "rate": "6%"
        }
      ],
      "carve": [
        {
          "item": "Bishaten Glidefeather",
          "rate": "70%",
          "part": "Wings"
        },
        {
          "item": "Bishaten Finefur",
          "rate": "49%",
          "part": "Head"
        },
        {
          "item": "Massive Bone",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Bishaten Heavyhorn",
          "rate": "6%",
          "part": "Body"
        },
        {
          "item": "Large Beast Gem",
          "rate": "3%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Bishaten Hardtail",
          "rate": "100%",
          "part": "Tail"
        },
        {
          "item": "Bishaten Heavyhorn",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Bishaten Glidefeather",
          "rate": "70%",
          "part": "Wing"
        },
        {
          "item": "Bishaten Hardclaw",
          "rate": "30%",
          "part": "Wing x2"
        },
        {
          "item": "Bishaten Finefur",
          "rate": "15%",
          "part": "Head"
        },
        {
          "item": "Large Beast Gem",
          "rate": "5%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Bishaten Finefur",
          "rate": "39%"
        },
        {
          "item": "Bishaten Hardtail",
          "rate": "10%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "1%"
        },
        {
          "item": "Beast Tear",
          "rate": "15%"
        },
        {
          "item": "Large Beast Tear",
          "rate": "35%"
        },
        {
          "item": "Jumbofruit",
          "rate": "100%"
        },
        {
          "item": "Poisonfruit",
          "rate": "100%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Parafruit",
          "rate": "100%"
        },
        {
          "item": "Flashfruit",
          "rate": "100%"
        },
        {
          "item": "Bishaten Finefur",
          "rate": "50%"
        },
        {
          "item": "Bishaten Glidefeather",
          "rate": "35%"
        },
        {
          "item": "Bishaten Hardtail",
          "rate": "15%"
        }
      ]
    }
  },
  {
    "id": "great-wroggi",
    "name": "Great Wroggi",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Great Wroggi Brace",
          "rate": "34%"
        },
        {
          "item": "Poison Sac",
          "rate": "26%"
        },
        {
          "item": "Great Wroggi Hide",
          "rate": "22%"
        },
        {
          "item": "Monster Bone M",
          "rate": "13%"
        },
        {
          "item": "King's Beak",
          "rate": "5%"
        }
      ],
      "capture": [
        {
          "item": "Great Wroggi Brace",
          "rate": "46%"
        },
        {
          "item": "Great Wroggi Hide",
          "rate": "21% x2"
        },
        {
          "item": "Monster Bone M",
          "rate": "18% x2"
        },
        {
          "item": "King's Beak",
          "rate": "15%"
        }
      ],
      "breaks": [
        {
          "item": "King's Beak",
          "rate": "70%",
          "part": "Head"
        },
        {
          "item": "Poison Sac",
          "rate": "30%",
          "part": "Head"
        },
        {
          "item": "Great Wroggi Hide",
          "rate": "42%",
          "part": "Body"
        },
        {
          "item": "Great Wroggi Brace",
          "rate": "31%",
          "part": "Body"
        },
        {
          "item": "Poison Sac",
          "rate": "27%",
          "part": "Body"
        }
      ],
      "drops": [
        {
          "item": "Great Wroggi Hide",
          "rate": "35%"
        },
        {
          "item": "Great Wroggi Brace",
          "rate": "15%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Great Wroggi Hide",
          "rate": "70%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Great Wroggi Brace",
          "rate": "30%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Great Wroggi Brace+",
          "rate": "36%"
        },
        {
          "item": "Toxin Sac",
          "rate": "27%"
        },
        {
          "item": "Great Wroggi Hide+",
          "rate": "22%"
        },
        {
          "item": "Monster Bone+",
          "rate": "12%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Great Wroggi Brace+",
          "rate": "46%"
        },
        {
          "item": "Great Wroggi Hide+",
          "rate": "24% x2"
        },
        {
          "item": "Monster Bone+",
          "rate": "13% x2"
        },
        {
          "item": "King's Beak",
          "rate": "12%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "5%"
        }
      ],
      "breaks": [
        {
          "item": "King's Beak",
          "rate": "70%",
          "part": "Head"
        },
        {
          "item": "Toxin Sac",
          "rate": "18%",
          "part": "Head"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "12%",
          "part": "Head"
        },
        {
          "item": "Great Wroggi Hide+",
          "rate": "41%",
          "part": "Body"
        },
        {
          "item": "Great Wroggi Brace+",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Toxin Sac",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "3%",
          "part": "Body"
        }
      ],
      "drops": [
        {
          "item": "Great Wroggi Hide+",
          "rate": "34%"
        },
        {
          "item": "Great Wroggi Brace+",
          "rate": "15%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "30%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "20%"
        },
        {
          "item": "Great Wroggi Hide+",
          "rate": "70%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Great Wroggi Brace+",
          "rate": "30%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Great Wroggi Thickhide",
          "rate": "34%"
        },
        {
          "item": "Great Wroggi Brace+",
          "rate": "21% x2"
        },
        {
          "item": "Deadly Poison Sac",
          "rate": "20%"
        },
        {
          "item": "Monster Hardbone",
          "rate": "12% x2"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Great Wroggi Thickhide",
          "rate": "37% x2"
        },
        {
          "item": "Great Wroggi Brace+",
          "rate": "22% x2"
        },
        {
          "item": "Imperial Beak",
          "rate": "20%"
        },
        {
          "item": "Monster Hardbone",
          "rate": "12% x2"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "6%"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "3%"
        }
      ],
      "breaks": [
        {
          "item": "Deadly Poison Sac",
          "rate": "20%",
          "part": "Head"
        },
        {
          "item": "Imperial Beak",
          "rate": "20%",
          "part": "Head"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "5%",
          "part": "Head"
        },
        {
          "item": "Great Wroggi Thickhide",
          "rate": "43%",
          "part": "Body"
        },
        {
          "item": "Deadly Poison Sac",
          "rate": "31%",
          "part": "Body"
        },
        {
          "item": "Great Wroggi Brace+",
          "rate": "20%",
          "part": "Body x2"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "4%",
          "part": "Body"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "2%",
          "part": "Body"
        }
      ],
      "drops": [
        {
          "item": "Great Wroggi Thickhide",
          "rate": "34%"
        },
        {
          "item": "Great Wroggi Brace+",
          "rate": "15%"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "20%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "30%"
        },
        {
          "item": "Great Wroggi Thickhide",
          "rate": "70%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Great Wroggi Brace+",
          "rate": "30%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "somnacanth",
    "name": "Somnacanth",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Somnacanth Shell",
          "rate": "34%"
        },
        {
          "item": "Somnacanth Dust",
          "rate": "23%"
        },
        {
          "item": "Somnacanth Scale",
          "rate": "21%"
        },
        {
          "item": "Somnacanth Fin",
          "rate": "14%"
        },
        {
          "item": "Monster Bone L",
          "rate": "8%"
        }
      ],
      "capture": [
        {
          "item": "Somnacanth Dust",
          "rate": "30%"
        },
        {
          "item": "Somnacanth Claw",
          "rate": "27%"
        },
        {
          "item": "Somnacanth Scale",
          "rate": "17%"
        },
        {
          "item": "Monster Bone L",
          "rate": "14%"
        },
        {
          "item": "Somnacanth Dust",
          "rate": "12% x2"
        }
      ],
      "carve": [
        {
          "item": "Somnacanth Scale",
          "rate": "43%",
          "part": "Body"
        },
        {
          "item": "Somnacanth Shell",
          "rate": "33%",
          "part": "Body"
        },
        {
          "item": "Somnacanth Dust",
          "rate": "14%",
          "part": "Body"
        },
        {
          "item": "Somnacanth Fin",
          "rate": "10%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Somnacanth Fin",
          "rate": "80%",
          "part": "Head Fin"
        },
        {
          "item": "Somnacanth Claw",
          "rate": "80%",
          "part": "Arm x2"
        },
        {
          "item": "Somnacanth Scale",
          "rate": "20%",
          "part": "Arm"
        },
        {
          "item": "Somnacanth Scale",
          "rate": "100%",
          "part": "Tail"
        },
        {
          "item": "Somnacanth Dust",
          "rate": "20%",
          "part": "Head Fin"
        }
      ],
      "drops": [
        {
          "item": "Somnacanth Dust",
          "rate": "40%"
        },
        {
          "item": "Somnacanth Claw",
          "rate": "10%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Somnacanth Dust",
          "rate": "35% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Somnacanth Scale",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Somnacanth Claw",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Somnacanth Shell+",
          "rate": "33%"
        },
        {
          "item": "Somnacanth Sedative",
          "rate": "23%"
        },
        {
          "item": "Somnacanth Scale+",
          "rate": "21%"
        },
        {
          "item": "Somnacanth Fin+",
          "rate": "14%"
        },
        {
          "item": "Monster Hardbone",
          "rate": "7%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Somnacanth Shell+",
          "rate": "29%"
        },
        {
          "item": "Somnacanth Claw+",
          "rate": "26%"
        },
        {
          "item": "Somnacanth Scale+",
          "rate": "16%"
        },
        {
          "item": "Monster Hardbone",
          "rate": "14% x2"
        },
        {
          "item": "Somnacanth Sedative",
          "rate": "12% x2"
        },
        {
          "item": "Wyvern Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Somnacanth Scale+",
          "rate": "43%",
          "part": "Body"
        },
        {
          "item": "Somnacanth Shell+",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Somnacanth Sedative",
          "rate": "14%",
          "part": "Body"
        },
        {
          "item": "Somnacanth Fin+",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Wyvern Gem",
          "rate": "1%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Somnacanth Fin+",
          "rate": "80%",
          "part": "Head Fin"
        },
        {
          "item": "Somnacanth Claw+",
          "rate": "80%",
          "part": "Arm x2"
        },
        {
          "item": "Somnacanth Scale+",
          "rate": "20%",
          "part": "Arm"
        },
        {
          "item": "Somnacanth Scale+",
          "rate": "97%",
          "part": "Tail"
        },
        {
          "item": "Somnacanth Sedative",
          "rate": "17%",
          "part": "Head Fin"
        },
        {
          "item": "Wyvern Gem",
          "rate": "3%",
          "part": "Head Fin"
        },
        {
          "item": "Wyvern Gem",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Somnacanth Sedative",
          "rate": "39%"
        },
        {
          "item": "Somnacanth Claw+",
          "rate": "10%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "20%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "30%"
        },
        {
          "item": "Somnacanth Sedative",
          "rate": "35% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Somnacanth Scale+",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Somnacanth Claw+",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Somnacanth Cortex",
          "rate": "33%"
        },
        {
          "item": "Somna Dream Powder",
          "rate": "23%"
        },
        {
          "item": "Somnacanth Shard",
          "rate": "21%"
        },
        {
          "item": "Somnacanth Wild Fin",
          "rate": "14%"
        },
        {
          "item": "Monster Toughbone",
          "rate": "7%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Somnacanth Cortex",
          "rate": "29%"
        },
        {
          "item": "Somnacanth Dreamtalon",
          "rate": "26%"
        },
        {
          "item": "Somnacanth Shard",
          "rate": "21%"
        },
        {
          "item": "Monster Toughbone",
          "rate": "14%"
        },
        {
          "item": "Somna Dream Powder",
          "rate": "12%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Somnacanth Shard",
          "rate": "43%",
          "part": "Body"
        },
        {
          "item": "Somnacanth Cortex",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Somna Dream Powder",
          "rate": "14%",
          "part": "Body"
        },
        {
          "item": "Somnacanth Wild Fin",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "1%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Somnacanth Shard",
          "rate": "97%",
          "part": "Tail"
        },
        {
          "item": "Somnacanth Wild Fin",
          "rate": "80%",
          "part": "Fins"
        },
        {
          "item": "Somnacanth Dreamtalon",
          "rate": "80%",
          "part": "Arms"
        },
        {
          "item": "Somna Dream Powder",
          "rate": "17%",
          "part": "Fins"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "3%",
          "part": "Tail"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "3%",
          "part": "Fins"
        }
      ],
      "drops": [
        {
          "item": "Somna Dream Powder",
          "rate": "39%"
        },
        {
          "item": "Somnacanth Dreamtalon",
          "rate": "10%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "15%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "35%"
        },
        {
          "item": "Somna Dream Powder",
          "rate": "35% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Somnacanth Shard",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Somnacanth Dreamtalon",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "tetranadon",
    "name": "Tetranadon",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Tetra Carapace",
          "rate": "32%"
        },
        {
          "item": "Aqua Sac",
          "rate": "24%"
        },
        {
          "item": "Tetranadon Hide",
          "rate": "24%"
        },
        {
          "item": "Jumbo Bone",
          "rate": "12%"
        },
        {
          "item": "Tetranadon Beak",
          "rate": "8%"
        }
      ],
      "capture": [
        {
          "item": "Tetra Carapace",
          "rate": "33%"
        },
        {
          "item": "Aqua Sac",
          "rate": "29%"
        },
        {
          "item": "Tetranadon Hide",
          "rate": "21%"
        },
        {
          "item": "Tetranadon Beak",
          "rate": "12%"
        },
        {
          "item": "Tetranadon Disc",
          "rate": "5%"
        }
      ],
      "carve": [
        {
          "item": "Tetranadon Hide",
          "rate": "44%",
          "part": "Body"
        },
        {
          "item": "Tetra Carapace",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Aqua Sac",
          "rate": "19%",
          "part": "Body"
        },
        {
          "item": "Tetranadon Beak",
          "rate": "5%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Tetra Carapace",
          "rate": "100%",
          "part": "Carapace"
        },
        {
          "item": "Tetranadon Disc",
          "rate": "100%",
          "part": "Plate"
        },
        {
          "item": "Tetranadon Beak",
          "rate": "70%",
          "part": "Beak"
        },
        {
          "item": "Aqua Sac",
          "rate": "70%",
          "part": "Torso"
        },
        {
          "item": "Tetranadon Hide",
          "rate": "30%",
          "part": "Beak"
        },
        {
          "item": "Tetranadon Hide",
          "rate": "30%",
          "part": "Torso"
        },
        {
          "item": "Tetranadon Hide",
          "rate": "100%",
          "part": "Arm"
        }
      ],
      "drops": [
        {
          "item": "Tetra Carapace",
          "rate": "30%"
        },
        {
          "item": "Tetranadon Hide",
          "rate": "20%"
        },
        {
          "item": "Shiny Nacre",
          "rate": "50%"
        },
        {
          "item": "Tetra Carapace",
          "rate": "70%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Tetranadon Hide",
          "rate": "30%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Tetra Carapace+",
          "rate": "32%"
        },
        {
          "item": "Tetranadon Hide+",
          "rate": "24%"
        },
        {
          "item": "Torrent Sac",
          "rate": "24%"
        },
        {
          "item": "Stoutbone",
          "rate": "12%"
        },
        {
          "item": "Tetranadon Beak+",
          "rate": "8%"
        }
      ],
      "capture": [
        {
          "item": "Tetra Carapace+",
          "rate": "33%"
        },
        {
          "item": "Torrent Sac",
          "rate": "29%"
        },
        {
          "item": "Tetranadon Hide+",
          "rate": "21%"
        },
        {
          "item": "Tetranadon Beak+",
          "rate": "12%"
        },
        {
          "item": "Tetranadon Disc+",
          "rate": "5%"
        }
      ],
      "carve": [
        {
          "item": "Tetranadon Hide+",
          "rate": "44%",
          "part": "Body"
        },
        {
          "item": "Tetra Carapace+",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Torrent Sac",
          "rate": "19%",
          "part": "Body"
        },
        {
          "item": "Tetranadon Beak+",
          "rate": "5%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Tetra Carapace+",
          "rate": "100%",
          "part": "Carapace"
        },
        {
          "item": "Tetranadon Disc+",
          "rate": "100%",
          "part": "Plate"
        },
        {
          "item": "Torrent Sac",
          "rate": "70%",
          "part": "Torso"
        },
        {
          "item": "Tetranadon Beak+",
          "rate": "70%",
          "part": "Beak"
        },
        {
          "item": "Tetranadon Hide+",
          "rate": "30%",
          "part": "Beak"
        },
        {
          "item": "Tetranadon Hide+",
          "rate": "30%",
          "part": "Torso"
        },
        {
          "item": "Tetranadon Hide+",
          "rate": "100%",
          "part": "Arm"
        }
      ],
      "drops": [
        {
          "item": "Tetra Carapace+",
          "rate": "30%"
        },
        {
          "item": "Tetranadon Hide+",
          "rate": "20%"
        },
        {
          "item": "Shiny Nacre",
          "rate": "20%"
        },
        {
          "item": "Glittering Nacre",
          "rate": "30%"
        },
        {
          "item": "Tetra Carapace+",
          "rate": "70%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Tetranadon Hide+",
          "rate": "30%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Heavy Tetra Carapace",
          "rate": "32%"
        },
        {
          "item": "Tetranadon Thickhide",
          "rate": "24%"
        },
        {
          "item": "Flood Sac",
          "rate": "24%"
        },
        {
          "item": "Massive Bone",
          "rate": "12%"
        },
        {
          "item": "Tetranadon Greatbeak",
          "rate": "8%"
        }
      ],
      "capture": [
        {
          "item": "Heavy Tetra Carapace",
          "rate": "33%"
        },
        {
          "item": "Flood Sac",
          "rate": "29%"
        },
        {
          "item": "Tetranadon Thickhide",
          "rate": "21%"
        },
        {
          "item": "Tetranadon Greatbeak",
          "rate": "12%"
        },
        {
          "item": "Tetranadon Finedisc",
          "rate": "5%"
        }
      ],
      "carve": [
        {
          "item": "Tetranadon Thickhide",
          "rate": "44%",
          "part": "Body"
        },
        {
          "item": "Heavy Tetra Carapace",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Flood Sac",
          "rate": "19%",
          "part": "Body"
        },
        {
          "item": "Tetranadon Greatbeak",
          "rate": "5%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Tetranadon Thickhide",
          "rate": "100%",
          "part": "Arm"
        },
        {
          "item": "Tetranadon Thickhide",
          "rate": "30%",
          "part": "Torso"
        },
        {
          "item": "Tetranadon Thickhide",
          "rate": "30%",
          "part": "Beak"
        },
        {
          "item": "Heavy Tetra Carapace",
          "rate": "100%",
          "part": "Carapace"
        },
        {
          "item": "Tetranadon Finedisc",
          "rate": "100%",
          "part": "Plate"
        },
        {
          "item": "Tetranadon Greatbeak",
          "rate": "70%",
          "part": "Beak"
        },
        {
          "item": "Flood Sac",
          "rate": "70%",
          "part": "Torso"
        }
      ],
      "drops": [
        {
          "item": "Heavy Tetra Carapace",
          "rate": "30%"
        },
        {
          "item": "Tetranadon Thickhide",
          "rate": "20%"
        },
        {
          "item": "Glittering Nacre",
          "rate": "20%"
        },
        {
          "item": "Shimmering Nacre",
          "rate": "30%"
        },
        {
          "item": "Heavy Tetra Carapace",
          "rate": "70%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Tetranadon Thickhide",
          "rate": "30%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "tobi-kadachi",
    "name": "Tobi-Kadachi",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Tobi-Kadachi Scale",
          "rate": "29%"
        },
        {
          "item": "Tobi-Kadachi Membrane",
          "rate": "23%"
        },
        {
          "item": "Tobi-Kadachi Claw",
          "rate": "15%"
        },
        {
          "item": "Tobi-Kadachi Pelt",
          "rate": "13%"
        },
        {
          "item": "Electro Sac",
          "rate": "12%"
        },
        {
          "item": "Tobi-Kadachi Electrode",
          "rate": "8%"
        }
      ],
      "capture": [
        {
          "item": "Tobi-Kadachi Claw",
          "rate": "33%"
        },
        {
          "item": "Tobi-Kadachi Membrane",
          "rate": "22%"
        },
        {
          "item": "Tobi-Kadachi Scale",
          "rate": "19% x2"
        },
        {
          "item": "Tobi-Kadachi Electrode",
          "rate": "14%"
        },
        {
          "item": "Tobi-Kadachi Pelt",
          "rate": "12%"
        }
      ],
      "carve": [
        {
          "item": "Tobi-Kadachi Scale",
          "rate": "38%",
          "part": "Body"
        },
        {
          "item": "Tobi-Kadachi Pelt",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Tobi-Kadachi Membrane",
          "rate": "23%",
          "part": "Body"
        },
        {
          "item": "Tobi-Kadachi Claw",
          "rate": "12%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Tobi-Kadachi Claw",
          "rate": "80%",
          "part": "Foreleg"
        },
        {
          "item": "Tobi-Kadachi Electrode",
          "rate": "80%",
          "part": "Head/Tail"
        },
        {
          "item": "Tobi-Kadachi Pelt",
          "rate": "70%",
          "part": "Back"
        },
        {
          "item": "Tobi-Kadachi Pelt",
          "rate": "20%",
          "part": "Tail"
        },
        {
          "item": "Tobi-Kadachi Scale",
          "rate": "20%",
          "part": "Head x2"
        },
        {
          "item": "Tobi-Kadachi Scale",
          "rate": "30%",
          "part": "Back"
        },
        {
          "item": "Tobi-Kadachi Scale",
          "rate": "20%",
          "part": "Foreleg"
        }
      ],
      "drops": [
        {
          "item": "Tobi-Kadachi Scale",
          "rate": "40%"
        },
        {
          "item": "Tobi-Kadachi Claw",
          "rate": "10%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Tobi-Kadachi Scale",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Tobi-Kadachi Pelt",
          "rate": "35%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Tobi-Kadachi Claw",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Tobi-Kadachi Scale+",
          "rate": "34%"
        },
        {
          "item": "Tobi-Kadachi Claw+",
          "rate": "24%"
        },
        {
          "item": "Tobi-Kadachi Pelt+",
          "rate": "17%"
        },
        {
          "item": "Thunder Sac",
          "rate": "14%"
        },
        {
          "item": "Tobi-Kadachi Electrode+",
          "rate": "9%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Tobi-Kadachi Claw+",
          "rate": "34%"
        },
        {
          "item": "Tobi-Kadachi Scale+",
          "rate": "22% x2"
        },
        {
          "item": "Tobi-Kadachi Pelt+",
          "rate": "14%"
        },
        {
          "item": "Tobi-Kadachi Electrode+",
          "rate": "14%"
        },
        {
          "item": "Tobi-Kadachi Membrane",
          "rate": "13%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Tobi-Kadachi Scale+",
          "rate": "43%",
          "part": "Body"
        },
        {
          "item": "Tobi-Kadachi Pelt+",
          "rate": "31%",
          "part": "Body"
        },
        {
          "item": "Tobi-Kadachi Claw+",
          "rate": "13%",
          "part": "Body"
        },
        {
          "item": "Tobi-Kadachi Membrane",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Wyvern Gem",
          "rate": "1%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Tobi-Kadachi Claw+",
          "rate": "80%",
          "part": "Foreleg"
        },
        {
          "item": "Tobi-Kadachi Electrode+",
          "rate": "80%",
          "part": "Head/Tail"
        },
        {
          "item": "Tobi-Kadachi Pelt+",
          "rate": "70%",
          "part": "Back"
        },
        {
          "item": "Tobi-Kadachi Pelt+",
          "rate": "20%",
          "part": "Tail"
        },
        {
          "item": "Tobi-Kadachi Scale+",
          "rate": "17%",
          "part": "Head x2"
        },
        {
          "item": "Tobi-Kadachi Scale+",
          "rate": "30%",
          "part": "Back"
        },
        {
          "item": "Tobi-Kadachi Scale+",
          "rate": "20%",
          "part": "Foreleg"
        },
        {
          "item": "Wyvern Gem",
          "rate": "3%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Tobi-Kadachi Scale+",
          "rate": "39%"
        },
        {
          "item": "Tobi-Kadachi Claw+",
          "rate": "10%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "20%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "30%"
        },
        {
          "item": "Tobi-Kadachi Scale+",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Tobi-Kadachi Pelt+",
          "rate": "35%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Tobi-Kadachi Claw+",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Tobi-Kadachi Shard",
          "rate": "34%"
        },
        {
          "item": "Tobi-Kadachi Hardclaw",
          "rate": "24%"
        },
        {
          "item": "Tobi-Kadachi Thickfur",
          "rate": "17%"
        },
        {
          "item": "Lightning Sac",
          "rate": "14%"
        },
        {
          "item": "Tobi-Kadachi Cathode",
          "rate": "9%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Tobi-Kadachi Hardclaw",
          "rate": "29%"
        },
        {
          "item": "Tobi-Kadachi Membrane+",
          "rate": "22%"
        },
        {
          "item": "Tobi-Kadachi Shard",
          "rate": "18% x2"
        },
        {
          "item": "Tobi-Kadachi Thickfur",
          "rate": "14%"
        },
        {
          "item": "Tobi-Kadachi Cathode",
          "rate": "14%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Tobi-Kadachi Shard",
          "rate": "36%",
          "part": "Body"
        },
        {
          "item": "Tobi-Kadachi Thickfur",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Tobi-Kadachi Membrane+",
          "rate": "23%",
          "part": "Body"
        },
        {
          "item": "Tobi-Kadachi Hardclaw",
          "rate": "13%",
          "part": "Body"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "1%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Tobi-Kadachi Hardclaw",
          "rate": "80%",
          "part": "Foreleg"
        },
        {
          "item": "Tobi-Kadachi Cathode",
          "rate": "80%",
          "part": "Head/Tail"
        },
        {
          "item": "Tobi-Kadachi Thickfur",
          "rate": "70%",
          "part": "Back"
        },
        {
          "item": "Tobi-Kadachi Thickfur",
          "rate": "20%",
          "part": "Tail"
        },
        {
          "item": "Tobi-Kadachi Shard",
          "rate": "30%",
          "part": "Back"
        },
        {
          "item": "Tobi-Kadachi Shard",
          "rate": "17%",
          "part": "Head x2"
        },
        {
          "item": "Tobi-Kadachi Shard",
          "rate": "20%",
          "part": "Foreleg"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "3%"
        }
      ],
      "drops": [
        {
          "item": "Tobi-Kadachi Shard",
          "rate": "39%"
        },
        {
          "item": "Tobi-Kadachi Hardclaw",
          "rate": "10%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "15%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "35%"
        },
        {
          "item": "Tobi-Kadachi Shard",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Tobi-Kadachi Thickfur",
          "rate": "35%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Tobi-Kadachi Hardclaw",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "kulu-ya-ku",
    "name": "Kulu-Ya-Ku",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Kulu-Ya-Ku Hide",
          "rate": "41%"
        },
        {
          "item": "Kulu-Ya-Ku Scale",
          "rate": "25%"
        },
        {
          "item": "Monster Bone M",
          "rate": "14%"
        },
        {
          "item": "Kulu-Ya-Ku Plume",
          "rate": "13%"
        },
        {
          "item": "Kulu-Ya-Ku Beak",
          "rate": "7%"
        }
      ],
      "capture": [
        {
          "item": "Kulu-Ya-Ku Hide",
          "rate": "43%"
        },
        {
          "item": "Kulu-Ya-Ku Plume",
          "rate": "23%"
        },
        {
          "item": "Kulu-Ya-Ku Scale",
          "rate": "22% x2"
        },
        {
          "item": "Kulu-Ya-Ku Beak",
          "rate": "12%"
        }
      ],
      "carve": [
        {
          "item": "Kulu-Ya-Ku Scale",
          "rate": "46%",
          "part": "Body"
        },
        {
          "item": "Kulu-Ya-Ku Hide",
          "rate": "36%",
          "part": "Body"
        },
        {
          "item": "Kulu-Ya-Ku Plume",
          "rate": "18%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Kulu-Ya-Ku Plume",
          "rate": "80%",
          "part": "Foreleg"
        },
        {
          "item": "Kulu-Ya-Ku Beak",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Kulu-Ya-Ku Scale",
          "rate": "20%",
          "part": "Foreleg"
        },
        {
          "item": "Kulu-Ya-Ku Hide",
          "rate": "20%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Kulu-Ya-Ku Scale",
          "rate": "35%"
        },
        {
          "item": "Kulu-Ya-Ku Plume",
          "rate": "15%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Kulu-Ya-Ku Scale",
          "rate": "60%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Kulu-Ya-Ku Hide",
          "rate": "40%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Kulu-Ya-Ku Hide+",
          "rate": "41%"
        },
        {
          "item": "Kulu-Ya-Ku Scale+",
          "rate": "24%"
        },
        {
          "item": "Kulu-Ya-Ku Plume+",
          "rate": "13%"
        },
        {
          "item": "Monster Bone+",
          "rate": "12%"
        },
        {
          "item": "Kulu-Ya-Ku Beak+",
          "rate": "7%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Kulu-Ya-Ku Hide+",
          "rate": "41%"
        },
        {
          "item": "Kulu-Ya-Ku Scale+",
          "rate": "22% x2"
        },
        {
          "item": "Kulu-Ya-Ku Plume+",
          "rate": "20%"
        },
        {
          "item": "Kulu-Ya-Ku Beak+",
          "rate": "12%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "5%"
        }
      ],
      "carve": [
        {
          "item": "Kulu-Ya-Ku Scale+",
          "rate": "44%",
          "part": "Body"
        },
        {
          "item": "Kulu-Ya-Ku Hide+",
          "rate": "35%",
          "part": "Body"
        },
        {
          "item": "Kulu-Ya-Ku Plume+",
          "rate": "18%",
          "part": "Body"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "3%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Kulu-Ya-Ku Beak+",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Kulu-Ya-Ku Plume+",
          "rate": "80%",
          "part": "Foreleg"
        },
        {
          "item": "Kulu-Ya-Ku Scale+",
          "rate": "20%",
          "part": "Foreleg"
        },
        {
          "item": "Kulu-Ya-Ku Hide+",
          "rate": "15%",
          "part": "Head"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "5%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Kulu-Ya-Ku Scale+",
          "rate": "34%"
        },
        {
          "item": "Kulu-Ya-Ku Plume+",
          "rate": "15%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "30%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "20%"
        },
        {
          "item": "Kulu-Ya-Ku Scale+",
          "rate": "60%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Kulu-Ya-Ku Hide+",
          "rate": "40%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Kulu-Ya-Ku Thickhide",
          "rate": "41%"
        },
        {
          "item": "Kulu-Ya-Ku Shard",
          "rate": "24%"
        },
        {
          "item": "Large Kulu-Ya-Ku Plume",
          "rate": "14%"
        },
        {
          "item": "Monster Hardbone",
          "rate": "10%"
        },
        {
          "item": "Colossal Drill Beak",
          "rate": "8%"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Kulu-Ya-Ku Thickhide",
          "rate": "38%"
        },
        {
          "item": "Kulu-Ya-Ku Shard",
          "rate": "21%"
        },
        {
          "item": "Large Kulu-Ya-Ku Plume",
          "rate": "19%"
        },
        {
          "item": "Colossal Drill Beak",
          "rate": "12%"
        },
        {
          "item": "Bird Wyvern Gem",
          "rate": "6%"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "4%"
        }
      ],
      "carve": [
        {
          "item": "Kulu-Ya-Ku Shard",
          "rate": "44%",
          "part": "Body"
        },
        {
          "item": "Kulu-Ya-Ku Thickhide",
          "rate": "35%",
          "part": "Body"
        },
        {
          "item": "Large Kulu-Ya-Ku Plume",
          "rate": "18%",
          "part": "Body"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "3%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Colossal Drill Beak",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Large Kulu-Ya-Ku Plume",
          "rate": "80%",
          "part": "Foreleg"
        },
        {
          "item": "Kulu-Ya-Ku Shard",
          "rate": "20%",
          "part": "Foreleg"
        },
        {
          "item": "Kulu-Ya-Ku Thickhide",
          "rate": "15%",
          "part": "Head"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "5%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Kulu-Ya-Ku Shard",
          "rate": "34%"
        },
        {
          "item": "Large Kulu-Ya-Ku Plume",
          "rate": "15%"
        },
        {
          "item": "Fey Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "20%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "30%"
        },
        {
          "item": "Kulu-Ya-Ku Shard",
          "rate": "60%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Kulu-Ya-Ku Thickhide",
          "rate": "40%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "rajang",
    "name": "Rajang",
    "order": [
      "highRank",
      "masterRank"
    ],
    "highRank": {
      "target": [
        {
          "item": "Rajang Fang+",
          "rate": "28%"
        },
        {
          "item": "Rajang Claw+",
          "rate": "19%"
        },
        {
          "item": "Rajang Blackfur",
          "rate": "16%"
        },
        {
          "item": "Gold Rajang Pelt",
          "rate": "12%"
        },
        {
          "item": "Great Stoutbone",
          "rate": "10%"
        },
        {
          "item": "Beast Gem",
          "rate": "8%"
        },
        {
          "item": "Rajang Tail",
          "rate": "7%"
        }
      ],
      "capture": [
        {
          "item": "Rajang Blackfur",
          "rate": "27%"
        },
        {
          "item": "Rajang Claw+",
          "rate": "20%"
        },
        {
          "item": "Gold Rajang Pelt",
          "rate": "16%"
        },
        {
          "item": "Rajang Fang+",
          "rate": "15% x2"
        },
        {
          "item": "Rajang Tail",
          "rate": "12%"
        },
        {
          "item": "Beast Gem",
          "rate": "10%"
        }
      ],
      "carve": [
        {
          "item": "Rajang Blackfur",
          "rate": "37%"
        },
        {
          "item": "Rajang Fang+",
          "rate": "27%"
        },
        {
          "item": "Rajang Claw+",
          "rate": "20%"
        },
        {
          "item": "Gold Rajang Pelt",
          "rate": "10%"
        },
        {
          "item": "Beast Gem",
          "rate": "6%"
        }
      ],
      "breaks": [
        {
          "item": "Rajang Horn+",
          "rate": "70%",
          "part": "One Horn"
        },
        {
          "item": "Rajang Horn+",
          "rate": "100%",
          "part": "Both Horns"
        },
        {
          "item": "Rajang Claw+",
          "rate": "70%",
          "part": "Each Arm"
        },
        {
          "item": "Rajang Tail",
          "rate": "90%",
          "part": "Tail"
        },
        {
          "item": "Rajang Blackfur",
          "rate": "30%",
          "part": "Each Arm"
        },
        {
          "item": "Gold Rajang Pelt",
          "rate": "30%",
          "part": "Horn"
        },
        {
          "item": "Gold Rajang Pelt",
          "rate": "10%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Rajang Blackfur",
          "rate": "39%"
        },
        {
          "item": "Gold Rajang Pelt",
          "rate": "10%"
        },
        {
          "item": "Beast Gem",
          "rate": "1%"
        },
        {
          "item": "Large Beast Tear",
          "rate": "50%"
        },
        {
          "item": "Rajang Blackfur",
          "rate": "58%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rajang Fang+",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Gold Rajang Pelt",
          "rate": "12%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Rajang Hardfang",
          "rate": "29%"
        },
        {
          "item": "Rajang Hardclaw",
          "rate": "22%"
        },
        {
          "item": "Rajang Wildpelt",
          "rate": "17%"
        },
        {
          "item": "Gold Rajang Pelt+",
          "rate": "12% x2"
        },
        {
          "item": "Solid Bone",
          "rate": "12%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "8%"
        }
      ],
      "capture": [
        {
          "item": "Rajang Wildpelt",
          "rate": "33%"
        },
        {
          "item": "Rajang Hardclaw",
          "rate": "26%"
        },
        {
          "item": "Gold Rajang Pelt+",
          "rate": "16%"
        },
        {
          "item": "Rajang Hardfang",
          "rate": "15% x2"
        },
        {
          "item": "Large Beast Gem",
          "rate": "10%"
        }
      ],
      "carve": [
        {
          "item": "Rajang Wildpelt",
          "rate": "37%"
        },
        {
          "item": "Rajang Hardfang",
          "rate": "27%"
        },
        {
          "item": "Rajang Hardclaw",
          "rate": "20%"
        },
        {
          "item": "Gold Rajang Pelt+",
          "rate": "10%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "6%"
        }
      ],
      "breaks": [
        {
          "item": "Rajang Hardhorn",
          "rate": "75%",
          "part": "One Horn"
        },
        {
          "item": "Rajang Hardhorn",
          "rate": "100%",
          "part": "Both Horns"
        },
        {
          "item": "Rajang Hardclaw",
          "rate": "70%",
          "part": "Each Arm"
        },
        {
          "item": "Rajang Tail",
          "rate": "70%",
          "part": "Tail"
        },
        {
          "item": "Rajang Wildpelt",
          "rate": "30%",
          "part": "Each Arm"
        },
        {
          "item": "Gold Rajang Pelt+",
          "rate": "30%",
          "part": "Horn/Tail"
        }
      ],
      "drops": [
        {
          "item": "Rajang Wildpelt",
          "rate": "39%"
        },
        {
          "item": "Gold Rajang Pelt+",
          "rate": "10%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "1%"
        },
        {
          "item": "Large Beast Tear",
          "rate": "50%"
        },
        {
          "item": "Rajang Wildpelt",
          "rate": "58%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rajang Hardfang",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Gold Rajang Pelt+",
          "rate": "12%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "kushala-daora",
    "name": "Kushala Daora",
    "order": [
      "highRank",
      "masterRank"
    ],
    "highRank": {
      "target": [
        {
          "item": "Daora Dragon Scale+",
          "rate": "32%"
        },
        {
          "item": "Daora Claw+",
          "rate": "21%"
        },
        {
          "item": "Daora Carapace",
          "rate": "16%"
        },
        {
          "item": "Daora Webbing",
          "rate": "16%"
        },
        {
          "item": "Daora Tail",
          "rate": "12%"
        },
        {
          "item": "Daora Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Daora Carapace",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Daora Carapace",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Daora Dragon Scale+",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Daora Horn+",
          "rate": "17%",
          "part": "Body"
        },
        {
          "item": "Daora Claw+",
          "rate": "15%",
          "part": "Body"
        },
        {
          "item": "Daora Webbing",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Daora Gem",
          "rate": "2%",
          "part": "Body"
        },
        {
          "item": "Daora Gem",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Daora Horn+",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Daora Webbing",
          "rate": "70%",
          "part": "Wing"
        },
        {
          "item": "Daora Claw+",
          "rate": "30%",
          "part": "Wing x2"
        },
        {
          "item": "Daora Dragon Scale+",
          "rate": "17%",
          "part": "Head x2"
        },
        {
          "item": "Daora Gem",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Daora Tail",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Daora Carapace",
          "rate": "34%"
        },
        {
          "item": "Daora Claw+",
          "rate": "10%"
        },
        {
          "item": "Elder Dragon Blood",
          "rate": "15%"
        },
        {
          "item": "Daora Gem",
          "rate": "1%"
        },
        {
          "item": "Dragon Treasure",
          "rate": "40%"
        },
        {
          "item": "Daora Dragon Scale+",
          "rate": "45%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Daora Carapace",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Daora Claw+",
          "rate": "10%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Elder Dragon Blood",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Daora Shard",
          "rate": "28%"
        },
        {
          "item": "Daora Hardclaw",
          "rate": "21%"
        },
        {
          "item": "Daora Cortex",
          "rate": "16%"
        },
        {
          "item": "Daora Fellwing",
          "rate": "15%"
        },
        {
          "item": "Daora Lash",
          "rate": "12%"
        },
        {
          "item": "Daora Gem",
          "rate": "5%"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Daora Cortex",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Daora Cortex",
          "rate": "12%",
          "part": "Tail"
        },
        {
          "item": "Daora Shard",
          "rate": "23%",
          "part": "Body"
        },
        {
          "item": "Daora Hardhorn",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Daora Hardclaw",
          "rate": "17%",
          "part": "Body"
        },
        {
          "item": "Daora Fellwing",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Daora Gem",
          "rate": "5%",
          "part": "Tail"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "3%",
          "part": "Tail"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "2%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Daora Hardhorn",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Daora Fellwing",
          "rate": "70%",
          "part": "Wing"
        },
        {
          "item": "Daora Hardclaw",
          "rate": "30%",
          "part": "Wing x2"
        },
        {
          "item": "Daora Shard",
          "rate": "12%",
          "part": "Head"
        },
        {
          "item": "Daora Gem",
          "rate": "5%",
          "part": "Head"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Daora Lash",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Daora Cortex",
          "rate": "34%"
        },
        {
          "item": "Daora Hardclaw",
          "rate": "10%"
        },
        {
          "item": "Pure Dragon Blood",
          "rate": "15%"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "1%"
        },
        {
          "item": "Dragon Treasure",
          "rate": "15%"
        },
        {
          "item": "Old Dragon Treasure",
          "rate": "25%"
        },
        {
          "item": "Daora Cortex",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Daora Shard",
          "rate": "25%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Daora Hardclaw",
          "rate": "10%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Pure Dragon Blood",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "teostra",
    "name": "Teostra",
    "order": [
      "highRank",
      "masterRank"
    ],
    "highRank": {
      "target": [
        {
          "item": "Fire Dragon Scale+",
          "rate": "26%"
        },
        {
          "item": "Teostra Mane",
          "rate": "19%"
        },
        {
          "item": "Teostra Claw+",
          "rate": "16%"
        },
        {
          "item": "Teostra Carapace",
          "rate": "14%"
        },
        {
          "item": "Teostra Tail",
          "rate": "12%"
        },
        {
          "item": "Teostra Powder",
          "rate": "10%"
        },
        {
          "item": "Teostra Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Teostra Tail",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Teostra Carapace",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Fire Dragon Scale+",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Fire Dragon Scale+",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Teostra Mane",
          "rate": "18%",
          "part": "Body"
        },
        {
          "item": "Teostra Claw+",
          "rate": "14%",
          "part": "Body"
        },
        {
          "item": "Teostra Webbing",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Teostra Horn+",
          "rate": "8%",
          "part": "Body"
        },
        {
          "item": "Teostra Gem",
          "rate": "2%",
          "part": "Body"
        },
        {
          "item": "Teostra Gem",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Teostra Horn+",
          "rate": "72%",
          "part": "Head"
        },
        {
          "item": "Teostra Webbing",
          "rate": "70%",
          "part": "Wingclaw"
        },
        {
          "item": "Teostra Mane",
          "rate": "25%",
          "part": "Head"
        },
        {
          "item": "Teostra Claw+",
          "rate": "18%",
          "part": "Wingclaw"
        },
        {
          "item": "Teostra Powder",
          "rate": "12%",
          "part": "Wingclaw x2"
        },
        {
          "item": "Teostra Gem",
          "rate": "3%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Teostra Powder",
          "rate": "34%"
        },
        {
          "item": "Teostra Carapace",
          "rate": "15%"
        },
        {
          "item": "Elder Dragon Blood",
          "rate": "10%"
        },
        {
          "item": "Teostra Gem",
          "rate": "1%"
        },
        {
          "item": "Dragon Treasure",
          "rate": "40%"
        },
        {
          "item": "Teostra Powder",
          "rate": "25% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Teostra Carapace",
          "rate": "40%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Fire Dragon Scale+",
          "rate": "25%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Elder Dragon Blood",
          "rate": "10%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Hellfire Shard",
          "rate": "31%"
        },
        {
          "item": "Fire Dragon Hardclaw",
          "rate": "20%"
        },
        {
          "item": "Teostra Cortex",
          "rate": "17%"
        },
        {
          "item": "Teostra Mane",
          "rate": "12%"
        },
        {
          "item": "Teostra Lash",
          "rate": "12%"
        },
        {
          "item": "Teostra Gem",
          "rate": "5%"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Teostra Lash",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Teostra Cortex",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Hellfire Shard",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Hellfire Shard",
          "rate": "12%",
          "part": "Tail"
        },
        {
          "item": "Fire Dragon Hardclaw",
          "rate": "14%",
          "part": "Body"
        },
        {
          "item": "Teostra Mane",
          "rate": "12%",
          "part": "Body x2"
        },
        {
          "item": "Teostra Fellwing",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Teostra Hardhorn",
          "rate": "8%",
          "part": "Body"
        },
        {
          "item": "Teostra Gem",
          "rate": "5%",
          "part": "Tail"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "3%",
          "part": "Tail"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "2%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Teostra Hardhorn",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Teostra Fellwing",
          "rate": "70%",
          "part": "Wingclaw"
        },
        {
          "item": "Fire Dragon Hardclaw",
          "rate": "18%",
          "part": "Wingclaw x2"
        },
        {
          "item": "Teostra Mane",
          "rate": "12%",
          "part": "Head x2"
        },
        {
          "item": "Teostra Powder",
          "rate": "12%",
          "part": "Wingclaw x2"
        },
        {
          "item": "Teostra Gem",
          "rate": "5%",
          "part": "Head"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "3%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Teostra Powder",
          "rate": "15% x2"
        },
        {
          "item": "Teostra Cortex",
          "rate": "34%"
        },
        {
          "item": "Pure Dragon Blood",
          "rate": "10%"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "1%"
        },
        {
          "item": "Dragon Treasure",
          "rate": "15%"
        },
        {
          "item": "Old Dragon Treasure",
          "rate": "25%"
        },
        {
          "item": "Teostra Powder",
          "rate": "15% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Teostra Cortex",
          "rate": "45%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Hellfire Shard",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Pure Dragon Blood",
          "rate": "10%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "seregios",
    "name": "Seregios",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Seregios Airblade+",
          "rate": "35%"
        },
        {
          "item": "Seregios Slavescale+",
          "rate": "21%"
        },
        {
          "item": "Seregios Carver+",
          "rate": "18%"
        },
        {
          "item": "Seregios Scraper+",
          "rate": "15%"
        },
        {
          "item": "Seregios Impaler+",
          "rate": "8%"
        },
        {
          "item": "Seregios Lens",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Seregios Airblade+",
          "rate": "33%"
        },
        {
          "item": "Seregios Slavescale+",
          "rate": "23%"
        },
        {
          "item": "Seregios Scraper+",
          "rate": "21%"
        },
        {
          "item": "Seregios Carver+",
          "rate": "10%"
        },
        {
          "item": "Seregios Impaler+",
          "rate": "10%"
        },
        {
          "item": "Seregios Lens",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Seregios Slavescale+",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Seregios Slavescale+",
          "rate": "12%",
          "part": "Tail"
        },
        {
          "item": "Seregios Airblade+",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Seregios Airblade+",
          "rate": "10%",
          "part": "Tail"
        },
        {
          "item": "Seregios Carver+",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Seregios Breacher+",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Seregios Scraper+",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Seregios Lens",
          "rate": "3%",
          "part": "Tail"
        },
        {
          "item": "Seregios Lens",
          "rate": "1%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Seregios Breacher+",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Seregios Carver+",
          "rate": "70%",
          "part": "Legs"
        },
        {
          "item": "Seregios Carver+",
          "rate": "30%",
          "part": "Legs x2"
        },
        {
          "item": "Seregios Scraper+",
          "rate": "70%",
          "part": "Wing"
        },
        {
          "item": "Seregios Scraper+",
          "rate": "20%",
          "part": "Wing x2"
        }
      ],
      "drops": [
        {
          "item": "Seregios Airblade+",
          "rate": "33%"
        },
        {
          "item": "Seregios Slavescale+",
          "rate": "16%"
        },
        {
          "item": "Seregios Lens",
          "rate": "1%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Seregios Airblade+",
          "rate": "55%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Seregios Slavescale+",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Seregios Carver+",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "shogun-ceanataur",
    "name": "Shogun Ceanataur",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Heavy Ceanataur Leg",
          "rate": "32%"
        },
        {
          "item": "Ceanataur Cortex",
          "rate": "24%"
        },
        {
          "item": "Ceanataur Hardclaw",
          "rate": "22%"
        },
        {
          "item": "Monster Slogbone",
          "rate": "12%"
        },
        {
          "item": "Fine Black Pearl",
          "rate": "10%"
        }
      ],
      "capture": [
        {
          "item": "Heavy Ceanataur Leg",
          "rate": "36%"
        },
        {
          "item": "Ceanataur Cortex",
          "rate": "27%"
        },
        {
          "item": "Fine Black Pearl",
          "rate": "15%"
        },
        {
          "item": "Ceanataur Hardclaw",
          "rate": "12% x2"
        },
        {
          "item": "Monster Slogbone",
          "rate": "10%"
        }
      ],
      "carve": [
        {
          "item": "Ceanataur Cortex",
          "rate": "41%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Heavy Wyvern Scalp",
          "rate": "100%",
          "part": "Shell"
        },
        {
          "item": "Heavy Wyvern Scalp",
          "rate": "70%",
          "part": "Shell"
        },
        {
          "item": "Ceanataur Cortex",
          "rate": "70%",
          "part": "Shell"
        },
        {
          "item": "Ceanataur Cortex",
          "rate": "10%",
          "part": "Shell"
        },
        {
          "item": "Ceanataur Hardclaw",
          "rate": "70%",
          "part": "Claw x2"
        },
        {
          "item": "Ceanataur Hardclaw",
          "rate": "30%",
          "part": "Claw"
        }
      ],
      "drops": [
        {
          "item": "Crab Pearl+",
          "rate": "75%"
        },
        {
          "item": "Fine Black Pearl",
          "rate": "25%"
        },
        {
          "item": "Ceanataur Cortex",
          "rate": "80%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Ceanataur Cortex",
          "rate": "20% x2",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "astalos",
    "name": "Astalos",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Heavy Astalos Shell",
          "rate": "28%"
        },
        {
          "item": "Astalos Shard",
          "rate": "21%"
        },
        {
          "item": "Astalos Wingmembrane",
          "rate": "19%"
        },
        {
          "item": "Boltscale",
          "rate": "12%"
        },
        {
          "item": "Heavy Astalos Crest+",
          "rate": "10%"
        },
        {
          "item": "Astalos Scissortailblade",
          "rate": "7%"
        },
        {
          "item": "Astalos Mantle",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Heavy Astalos Shell",
          "rate": "30%"
        },
        {
          "item": "Astalos Wingmembrane",
          "rate": "27%"
        },
        {
          "item": "Astalos Wingripper",
          "rate": "18% x2"
        },
        {
          "item": "Boltscale",
          "rate": "12%"
        },
        {
          "item": "Astalos Scissortailblade",
          "rate": "10%"
        },
        {
          "item": "Astalos Mantle",
          "rate": "3%"
        }
      ],
      "breaks": [
        {
          "item": "Heavy Astalos Crest+",
          "rate": "80%",
          "part": "Crest"
        },
        {
          "item": "Heavy Astalos Shell",
          "rate": "70%",
          "part": "Back"
        },
        {
          "item": "Astalos Wingripper",
          "rate": "50%",
          "part": "Wing"
        },
        {
          "item": "Astalos Wingripper",
          "rate": "20%",
          "part": "Wing x2"
        }
      ],
      "drops": [
        {
          "item": "Astalos Shard",
          "rate": "30%"
        },
        {
          "item": "Heavy Astalos Shell",
          "rate": "19%"
        },
        {
          "item": "Astalos Mantle",
          "rate": "1%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Astalos Shard",
          "rate": "55%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Heavy Astalos Shell",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Astalos Wingripper",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "rakna-kadaki",
    "name": "Rakna-Kadaki",
    "order": [
      "highRank",
      "masterRank"
    ],
    "highRank": {
      "target": [
        {
          "item": "Rakna-Kadaki Sharpclaw",
          "rate": "25%"
        },
        {
          "item": "Monster Broth",
          "rate": "19%"
        },
        {
          "item": "Rakna-Kadaki Carapace",
          "rate": "17%"
        },
        {
          "item": "Rakna-Kadaki Glowgut",
          "rate": "17%"
        },
        {
          "item": "Rakna-Kadaki Silk",
          "rate": "12%"
        },
        {
          "item": "Rakna-Kadaki Spike",
          "rate": "10%"
        }
      ],
      "capture": [
        {
          "item": "Rakna-Kadaki Sharpclaw",
          "rate": "33%"
        },
        {
          "item": "Rakna-Kadaki Carapace",
          "rate": "25%"
        },
        {
          "item": "Rakna-Kadaki Silk",
          "rate": "17%"
        },
        {
          "item": "Rakna-Kadaki Spike",
          "rate": "15%"
        },
        {
          "item": "Monster Broth",
          "rate": "10%"
        }
      ],
      "carve": [
        {
          "item": "Rakna-Kadaki Carapace",
          "rate": "33%",
          "part": "Head"
        },
        {
          "item": "Rakna-Kadaki Sharpclaw",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Rakna-Kadaki Glowgut",
          "rate": "16%",
          "part": "Body"
        },
        {
          "item": "Monster Broth",
          "rate": "14%",
          "part": "Body"
        },
        {
          "item": "Rakna-Kadaki Silk",
          "rate": "13%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Rakna-Kadaki Sharpclaw",
          "rate": "100%",
          "part": "Claw"
        },
        {
          "item": "Rakna-Kadaki Glowgut",
          "rate": "60%",
          "part": "Glowgut"
        },
        {
          "item": "Rakna-Kadaki Carapace",
          "rate": "50%",
          "part": "Head"
        },
        {
          "item": "Rakna-Kadaki Silk",
          "rate": "30%",
          "part": "Head"
        },
        {
          "item": "Rakna-Kadaki Silk",
          "rate": "80%",
          "part": "Legs x2"
        },
        {
          "item": "Monster Broth",
          "rate": "20%",
          "part": "Head"
        },
        {
          "item": "Rakna-Kadaki Spike",
          "rate": "20%",
          "part": "Legs"
        },
        {
          "item": "Rakna-Kadaki Spike",
          "rate": "40%",
          "part": "Glowgut x2"
        }
      ],
      "drops": [
        {
          "item": "Rakna-Kadaki Silk",
          "rate": "40%"
        },
        {
          "item": "Rakna-Kadaki Spike",
          "rate": "10%"
        },
        {
          "item": "Drone Substance",
          "rate": "10%"
        },
        {
          "item": "Queen Substance",
          "rate": "40%"
        },
        {
          "item": "Rakna-Kadaki Silk",
          "rate": "30% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rakna-Kadaki Carapace",
          "rate": "60%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rakna-Kadaki Spike",
          "rate": "10%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Rakna-Kadaki Hardclaw",
          "rate": "25%"
        },
        {
          "item": "Monster Essence",
          "rate": "19%"
        },
        {
          "item": "Rakna-Kadaki Cortex",
          "rate": "17%"
        },
        {
          "item": "Rakna-Kadaki Glowgut+",
          "rate": "17%"
        },
        {
          "item": "Rakna-Kadaki Silk+",
          "rate": "12%"
        },
        {
          "item": "Rakna-Kadaki Spike+",
          "rate": "10%"
        }
      ],
      "capture": [
        {
          "item": "Rakna-Kadaki Hardclaw",
          "rate": "33%"
        },
        {
          "item": "Rakna-Kadaki Cortex",
          "rate": "25%"
        },
        {
          "item": "Rakna-Kadaki Silk+",
          "rate": "17%"
        },
        {
          "item": "Rakna-Kadaki Spike+",
          "rate": "15%"
        },
        {
          "item": "Monster Essence",
          "rate": "10%"
        }
      ],
      "carve": [
        {
          "item": "Rakna-Kadaki Cortex",
          "rate": "33%",
          "part": "Body"
        },
        {
          "item": "Rakna-Kadaki Hardclaw",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Rakna-Kadaki Glowgut+",
          "rate": "16%",
          "part": "Body"
        },
        {
          "item": "Monster Essence",
          "rate": "14%"
        },
        {
          "item": "Rakna-Kadaki Silk+",
          "rate": "13%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Rakna-Kadaki Hardclaw",
          "rate": "100%",
          "part": "Claws"
        },
        {
          "item": "Rakna-Kadaki Silk+",
          "rate": "80%",
          "part": "Legs x2"
        },
        {
          "item": "Rakna-Kadaki Silk+",
          "rate": "30%",
          "part": "Head"
        },
        {
          "item": "Rakna-Kadaki Glowgut+",
          "rate": "60%",
          "part": "Glowgut"
        },
        {
          "item": "Rakna-Kadaki Cortex",
          "rate": "50%",
          "part": "Head"
        },
        {
          "item": "Rakna-Kadaki Spike+",
          "rate": "40%",
          "part": "Glowgut x2"
        },
        {
          "item": "Rakna-Kadaki Spike+",
          "rate": "20%",
          "part": "Legs"
        },
        {
          "item": "Monster Essence",
          "rate": "20%"
        }
      ],
      "drops": [
        {
          "item": "Rakna-Kadaki Silk+",
          "rate": "40%"
        },
        {
          "item": "Rakna-Kadaki Spike+",
          "rate": "10%"
        },
        {
          "item": "Drone Substance",
          "rate": "5%"
        },
        {
          "item": "Queen Substance",
          "rate": "45%"
        },
        {
          "item": "Rakna-Kadaki Silk+",
          "rate": "30% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rakna-Kadaki Cortex",
          "rate": "60%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rakna-Kadaki Spike+",
          "rate": "10%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "basarios",
    "name": "Basarios",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Basarios Pleura",
          "rate": "27%"
        },
        {
          "item": "Basarios Wing",
          "rate": "20%"
        },
        {
          "item": "Basarios Shell",
          "rate": "16%"
        },
        {
          "item": "Poison Sac",
          "rate": "12%"
        },
        {
          "item": "Machalite Ore",
          "rate": "10% x2"
        },
        {
          "item": "Flame Sac",
          "rate": "8%"
        },
        {
          "item": "Basarios Tail",
          "rate": "7%"
        }
      ],
      "capture": [
        {
          "item": "Basarios Wing",
          "rate": "34%"
        },
        {
          "item": "Basarios Shell",
          "rate": "24% x2"
        },
        {
          "item": "Poison Sac",
          "rate": "16%"
        },
        {
          "item": "Flame Sac",
          "rate": "14%"
        },
        {
          "item": "Basarios Tail",
          "rate": "12%"
        }
      ],
      "carve": [
        {
          "item": "Basarios Shell",
          "rate": "40%",
          "part": "Body"
        },
        {
          "item": "Basarios Shell",
          "rate": "13%",
          "part": "Tail"
        },
        {
          "item": "Basarios Pleura",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Poison Sac",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Machalite Ore",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Machalite Ore",
          "rate": "7%",
          "part": "Tail x2"
        }
      ],
      "breaks": [
        {
          "item": "Basarios Shell",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Basarios Shell",
          "rate": "25%",
          "part": "Back"
        },
        {
          "item": "Basarios Pleura",
          "rate": "55%",
          "part": "Chest"
        },
        {
          "item": "Basarios Wing",
          "rate": "40%",
          "part": "Back"
        },
        {
          "item": "Machalite Ore",
          "rate": "35%",
          "part": "Back x2"
        },
        {
          "item": "Machalite Ore",
          "rate": "25%",
          "part": "Chest"
        },
        {
          "item": "Poison Sac",
          "rate": "20%",
          "part": "Chest"
        },
        {
          "item": "Flame Sac",
          "rate": "20%",
          "part": "Head"
        },
        {
          "item": "Basarios Tail",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Machalite Ore",
          "rate": "35%"
        },
        {
          "item": "Basarios Shell",
          "rate": "15%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Machalite Ore",
          "rate": "40%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Basarios Shell",
          "rate": "40%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Basarios Pleura",
          "rate": "20%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Basarios Pleura+",
          "rate": "28%"
        },
        {
          "item": "Basarios Carapace",
          "rate": "19%"
        },
        {
          "item": "Toxin Sac",
          "rate": "17%"
        },
        {
          "item": "Inferno Sac",
          "rate": "15%"
        },
        {
          "item": "Carbalite Ore",
          "rate": "12% x2"
        },
        {
          "item": "Basarios Tears",
          "rate": "7%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Basarios Carapace",
          "rate": "27% x2"
        },
        {
          "item": "Toxin Sac",
          "rate": "18%"
        },
        {
          "item": "Basarios Wing",
          "rate": "18%"
        },
        {
          "item": "Inferno Sac",
          "rate": "15%"
        },
        {
          "item": "Basarios Tears",
          "rate": "10%"
        },
        {
          "item": "Basarios Tail",
          "rate": "9%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Basarios Carapace",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Basarios Carapace",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Basarios Pleura+",
          "rate": "26%",
          "part": "Body"
        },
        {
          "item": "Toxin Sac",
          "rate": "19%",
          "part": "Body"
        },
        {
          "item": "Carbalite Ore",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Carbalite Ore",
          "rate": "10%",
          "part": "Tail x2"
        },
        {
          "item": "Basarios Tears",
          "rate": "7%",
          "part": "Body"
        },
        {
          "item": "Wyvern Gem",
          "rate": "1%",
          "part": "Body"
        },
        {
          "item": "Wyvern Gem",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Basarios Carapace",
          "rate": "70%",
          "part": "Head"
        },
        {
          "item": "Basarios Carapace",
          "rate": "35%",
          "part": "Back"
        },
        {
          "item": "Basarios Pleura+",
          "rate": "55%",
          "part": "Chest"
        },
        {
          "item": "Carbalite Ore",
          "rate": "40%",
          "part": "Back x2"
        },
        {
          "item": "Carbalite Ore",
          "rate": "25%",
          "part": "Chest"
        },
        {
          "item": "Basarios Wing",
          "rate": "25%",
          "part": "Back"
        },
        {
          "item": "Toxin Sac",
          "rate": "20%",
          "part": "Chest"
        },
        {
          "item": "Inferno Sac",
          "rate": "20%",
          "part": "Head"
        },
        {
          "item": "Basarios Tears",
          "rate": "10%",
          "part": "Head"
        },
        {
          "item": "Basarios Tail",
          "rate": "70%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Carbalite Ore",
          "rate": "31%"
        },
        {
          "item": "Basarios Carapace",
          "rate": "15%"
        },
        {
          "item": "Basarios Tears",
          "rate": "3%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "20%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "30%"
        },
        {
          "item": "Carbalite Ore",
          "rate": "39%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Basarios Carapace",
          "rate": "40%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Basarios Pleura+",
          "rate": "20%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Basarios Tears",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Basarios Pectus+",
          "rate": "26%"
        },
        {
          "item": "Basarios Cortex",
          "rate": "15%"
        },
        {
          "item": "Basarios Lash",
          "rate": "12%"
        },
        {
          "item": "Deadly Poison Sac",
          "rate": "12%"
        },
        {
          "item": "Eltalite Ore",
          "rate": "10% x2"
        },
        {
          "item": "Conflagrant Sac",
          "rate": "8%"
        },
        {
          "item": "Basarios Fellwing",
          "rate": "7%"
        },
        {
          "item": "Basarios Pallium",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Basarios Fellwing",
          "rate": "32%"
        },
        {
          "item": "Basarios Cortex",
          "rate": "24% x2"
        },
        {
          "item": "Deadly Poison Sac",
          "rate": "16%"
        },
        {
          "item": "Conflagrant Sac",
          "rate": "13%"
        },
        {
          "item": "Basarios Lash",
          "rate": "12%"
        },
        {
          "item": "Basarios Pallium",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Basarios Cortex",
          "rate": "38%",
          "part": "Body"
        },
        {
          "item": "Basarios Pectus+",
          "rate": "28%",
          "part": "Body"
        },
        {
          "item": "Deadly Poison Sac",
          "rate": "18%",
          "part": "Body"
        },
        {
          "item": "Eltalite Ore",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Eltalite Ore",
          "rate": "17%",
          "part": "Tail x2"
        },
        {
          "item": "Basarios Pallium",
          "rate": "3%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "3%"
        }
      ],
      "breaks": [
        {
          "item": "Basarios Cortex",
          "rate": "67%",
          "part": "Head"
        },
        {
          "item": "Basarios Cortex",
          "rate": "25%",
          "part": "Back"
        },
        {
          "item": "Basarios Pectus+",
          "rate": "55%",
          "part": "Chest"
        },
        {
          "item": "Basarios Fellwing",
          "rate": "40%",
          "part": "Back"
        },
        {
          "item": "Eltalite Ore",
          "rate": "35%",
          "part": "Back x2"
        },
        {
          "item": "Eltalite Ore",
          "rate": "25%",
          "part": "Chest"
        },
        {
          "item": "Deadly Poison Sac",
          "rate": "20%",
          "part": "Chest"
        },
        {
          "item": "Conflagrant Sac",
          "rate": "20%",
          "part": "Head"
        },
        {
          "item": "Basarios Tears",
          "rate": "10%",
          "part": "Head"
        },
        {
          "item": "Basarios Pallium",
          "rate": "3%"
        },
        {
          "item": "Basarios Lash",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Eltalite Ore",
          "rate": "31%"
        },
        {
          "item": "Basarios Cortex",
          "rate": "15%"
        },
        {
          "item": "Basarios Tears",
          "rate": "3%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "1%"
        },
        {
          "item": "Wyvern Tear",
          "rate": "15%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "35%"
        },
        {
          "item": "Eltalite Ore",
          "rate": "39%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Basarios Cortex",
          "rate": "40%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Basarios Pectus+",
          "rate": "20%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Basarios Tears",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "amatsu",
    "name": "Amatsu",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Amatsu Heavypleura",
          "rate": "30%"
        },
        {
          "item": "Amatsu Cortex",
          "rate": "19%"
        },
        {
          "item": "Amatsu Membrane",
          "rate": "16%"
        },
        {
          "item": "Amatsu Stormtail",
          "rate": "12%"
        },
        {
          "item": "Storm Vesicle Clump",
          "rate": "10%"
        },
        {
          "item": "Amatsu Hardclaw",
          "rate": "10%"
        },
        {
          "item": "Heavenly Dragonsphire",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Amatsu Heavypleura",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Amatsu Cortex",
          "rate": "28%",
          "part": "Body"
        },
        {
          "item": "Storm Vesicle Clump",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Amatsu Membrane",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Amatsu Membrane",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Amatsu Hardclaw",
          "rate": "8%",
          "part": "Body"
        },
        {
          "item": "Heavenly Dragonsphire",
          "rate": "2%",
          "part": "Body"
        },
        {
          "item": "Heavenly Dragonsphire",
          "rate": "3%",
          "part": "Tail"
        },
        {
          "item": "Amatsu Stormtail",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Amatsu Hardhorn",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Amatsu Membrane",
          "rate": "75%",
          "part": "Back"
        },
        {
          "item": "Amatsu Membrane",
          "rate": "10%",
          "part": "Back x2"
        },
        {
          "item": "Amatsu Membrane",
          "rate": "35%",
          "part": "Right Foreleg"
        },
        {
          "item": "Amatsu Membrane",
          "rate": "35%",
          "part": "Left Foreleg"
        },
        {
          "item": "Amatsu Hardclaw",
          "rate": "65%",
          "part": "Right Foreleg"
        },
        {
          "item": "Amatsu Hardclaw",
          "rate": "65%",
          "part": "Left Foreleg"
        },
        {
          "item": "Storm Vesicle Clump",
          "rate": "16%",
          "part": "Head"
        },
        {
          "item": "Storm Vesicle Clump",
          "rate": "14%",
          "part": "Back"
        },
        {
          "item": "Heavenly Dragonsphire",
          "rate": "4%",
          "part": "Head"
        },
        {
          "item": "Heavenly Dragonsphire",
          "rate": "1%",
          "part": "Back"
        },
        {
          "item": "Amatsu Stormtail",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Amatsu Heavypleura",
          "rate": "44%"
        },
        {
          "item": "Amatsu Cortex",
          "rate": "15%"
        },
        {
          "item": "Heavenly Dragonsphire",
          "rate": "1%"
        },
        {
          "item": "Old Dragon Treasure",
          "rate": "40%"
        },
        {
          "item": "Amatsu Cortex",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Amatsu Heavypleura",
          "rate": "40%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Amatsu Hardclaw",
          "rate": "10%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "gore-magala",
    "name": "Gore Magala",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Gore Magala Shard",
          "rate": "33%"
        },
        {
          "item": "Gore Magala Shredder",
          "rate": "26%"
        },
        {
          "item": "Gore Magala Cortex",
          "rate": "19%"
        },
        {
          "item": "Gore Magala Eclipse",
          "rate": "12%"
        },
        {
          "item": "Gore Magala Tail",
          "rate": "7%"
        },
        {
          "item": "Gore Magala Mantle",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Gore Magala Cortex",
          "rate": "40%"
        },
        {
          "item": "Gore Magala Eclipse",
          "rate": "26%"
        },
        {
          "item": "Gore Magala Sensor",
          "rate": "22%"
        },
        {
          "item": "Gore Magala Tail",
          "rate": "9%"
        },
        {
          "item": "Gore Magala Mantle",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Gore Magala Shard",
          "rate": "38%",
          "part": "Body"
        },
        {
          "item": "Gore Magala Shard",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Gore Magala Cortex",
          "rate": "26%",
          "part": "Body"
        },
        {
          "item": "Gore Magala Shredder",
          "rate": "22%",
          "part": "Body"
        },
        {
          "item": "Gore Magala Eclipse",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Gore Magala Mantle",
          "rate": "3%",
          "part": "Tail"
        },
        {
          "item": "Gore Magala Mantle",
          "rate": "2%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Gore Magala Sensor",
          "rate": "100%",
          "part": "Antenna"
        },
        {
          "item": "Gore Magala Eclipse",
          "rate": "75%",
          "part": "Wings"
        },
        {
          "item": "Gore Magala Shard",
          "rate": "65%",
          "part": "Head"
        },
        {
          "item": "Gore Magala Shard",
          "rate": "25%",
          "part": "Wing"
        },
        {
          "item": "Gore Magala Shard",
          "rate": "20%",
          "part": "Wingarm"
        },
        {
          "item": "Gore Magala Shredder",
          "rate": "60%",
          "part": "Wingarm"
        },
        {
          "item": "Gore Magala Shredder",
          "rate": "20%",
          "part": "Wingarm x2"
        }
      ],
      "drops": [
        {
          "item": "Gore Magala Shard",
          "rate": "34%"
        },
        {
          "item": "Gore Magala Cortex",
          "rate": "15%"
        },
        {
          "item": "Gore Magala Mantle",
          "rate": "1%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Gore Magala Shard",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Gore Magala Cortex",
          "rate": "35%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Gore Magala Shredder",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "malzeno",
    "name": "Malzeno",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Malzeno Shard",
          "rate": "29%"
        },
        {
          "item": "Malzeno Cortex",
          "rate": "22%"
        },
        {
          "item": "Malzeno Hardfang",
          "rate": "20%"
        },
        {
          "item": "Bloody Parasite",
          "rate": "16%"
        },
        {
          "item": "Malzeno Tail",
          "rate": "10%"
        },
        {
          "item": "Malzeno Bloodstone",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Malzeno Cortex",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Malzeno Cortex",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Malzeno Shard",
          "rate": "28%",
          "part": "Body"
        },
        {
          "item": "Malzeno Hardfang",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Malzeno Fellwing",
          "rate": "13%",
          "part": "Body"
        },
        {
          "item": "Malzeno Bloodstone",
          "rate": "3%",
          "part": "Tail"
        },
        {
          "item": "Malzeno Bloodstone",
          "rate": "1%",
          "part": "Head"
        }
      ],
      "breaks": [
        {
          "item": "Malzeno Fellwing",
          "rate": "85%",
          "part": "Wing"
        },
        {
          "item": "Malzeno Hardhorn",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Malzeno Cortex",
          "rate": "70%",
          "part": "Wing"
        },
        {
          "item": "Malzeno Cortex",
          "rate": "15%",
          "part": "Wing"
        },
        {
          "item": "Bloody Parasite",
          "rate": "30%",
          "part": "Foreleg x2"
        },
        {
          "item": "Malzeno Hardfang",
          "rate": "17%",
          "part": "Horn x2"
        },
        {
          "item": "Malzeno Bloodstone",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Malzeno Tail",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Malzeno Cortex",
          "rate": "27%"
        },
        {
          "item": "Bloody Parasite",
          "rate": "20%"
        },
        {
          "item": "Malzeno Bloodstone",
          "rate": "3%"
        },
        {
          "item": "Dragon Treasure",
          "rate": "10%"
        },
        {
          "item": "Old Dragon Treasure",
          "rate": "40%"
        },
        {
          "item": "Malzeno Cortex",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Malzeno Shard",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Bloody Parasite",
          "rate": "20% x2",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "gaismagorm",
    "name": "Gaismagorm",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Archdemon Backshell",
          "rate": "28%"
        },
        {
          "item": "Archdemon Piercetalon",
          "rate": "20%"
        },
        {
          "item": "Consumption Parasite",
          "rate": "16%"
        },
        {
          "item": "Abyssal Dragonscale",
          "rate": "15%"
        },
        {
          "item": "Archdemon Wingtalon",
          "rate": "12%"
        },
        {
          "item": "Archdemon Tailhook",
          "rate": "7%"
        },
        {
          "item": "Abyssal Dragonsphire",
          "rate": "2%"
        }
      ],
      "carve": [
        {
          "item": "Abyssal Dragonscale",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Abyssal Dragonscale",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Archdemon Backshell",
          "rate": "29%",
          "part": "Body"
        },
        {
          "item": "Archdemon Piercetalon",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Archdemon Doomhorn",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Abyssal Dragonsphire",
          "rate": "3%",
          "part": "Tail"
        },
        {
          "item": "Abyssal Dragonsphire",
          "rate": "1%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Archdemon Doomhorn",
          "rate": "100%",
          "part": "Horn"
        },
        {
          "item": "Archdemon Backshell",
          "rate": "97%",
          "part": "Head"
        },
        {
          "item": "Archdemon Wingtalon",
          "rate": "80%",
          "part": "Right Wingarm"
        },
        {
          "item": "Archdemon Wingtalon",
          "rate": "80%",
          "part": "Left Wingarm"
        },
        {
          "item": "Consumption Parasite",
          "rate": "20%",
          "part": "Right Wingarm x2"
        },
        {
          "item": "Consumption Parasite",
          "rate": "20%",
          "part": "Left Wingarm x2"
        },
        {
          "item": "Abyssal Dragonsphire",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Archdemon Tailhook",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Abyssal Dragonscale",
          "rate": "34%"
        },
        {
          "item": "Consumption Parasite",
          "rate": "25% x2"
        },
        {
          "item": "Abyssal Dragonsphire",
          "rate": "1%"
        },
        {
          "item": "Old Dragon Treasure",
          "rate": "40%"
        }
      ]
    }
  },
  {
    "id": "silver-rathalos",
    "name": "Silver Rathalos",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Silver Rathalos Cortex",
          "rate": "34%"
        },
        {
          "item": "Silver Rathalos Shard",
          "rate": "18%"
        },
        {
          "item": "Silver Rathalos Fellwing",
          "rate": "17%"
        },
        {
          "item": "Rath Gleam",
          "rate": "12%"
        },
        {
          "item": "Silver Rathalos Lash",
          "rate": "9%"
        },
        {
          "item": "Rathalos Ruby",
          "rate": "7%"
        },
        {
          "item": "Rathalos Mantle",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Silver Rathalos Cortex",
          "rate": "32%"
        },
        {
          "item": "Silver Rathalos Fellwing",
          "rate": "31%"
        },
        {
          "item": "Rath Gleam",
          "rate": "14%"
        },
        {
          "item": "Silver Rathalos Lash",
          "rate": "12%"
        },
        {
          "item": "Rathalos Ruby",
          "rate": "7%"
        },
        {
          "item": "Rathalos Mantle",
          "rate": "4%"
        }
      ],
      "carve": [
        {
          "item": "Silver Rathalos Shard",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Silver Rathalos Shard",
          "rate": "19%",
          "part": "Tail"
        },
        {
          "item": "Silver Rathalos Cortex",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Silver Rathalos Fellwing",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Rath Gleam",
          "rate": "8%",
          "part": "Body"
        },
        {
          "item": "Rathalos Ruby",
          "rate": "7%",
          "part": "Tail"
        },
        {
          "item": "Rathalos Ruby",
          "rate": "5%",
          "part": "Body"
        },
        {
          "item": "Rathalos Mantle",
          "rate": "4%",
          "part": "Tail"
        },
        {
          "item": "Rathalos Mantle",
          "rate": "2%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Silver Rathalos Fellwing",
          "rate": "100%",
          "part": "Wing"
        },
        {
          "item": "Silver Rathalos Cortex",
          "rate": "74%",
          "part": "Back"
        },
        {
          "item": "Silver Rathalos Cortex",
          "rate": "26%",
          "part": "Head"
        },
        {
          "item": "Silver Rathalos Shard",
          "rate": "62%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Silver Rathalos Shard",
          "rate": "55%"
        },
        {
          "item": "Rathalos Ruby",
          "rate": "4%"
        },
        {
          "item": "Rathalos Mantle",
          "rate": "1%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Silver Rathalos Shard",
          "rate": "59%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Silver Rathalos Cortex",
          "rate": "40%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rathalos Ruby",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "risen-chameleos",
    "name": "Risen Chameleos",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Chameleos Hardclaw",
          "rate": "30%"
        },
        {
          "item": "Chameleos Fellwing",
          "rate": "25%"
        },
        {
          "item": "Chameleos Finehide",
          "rate": "22%"
        },
        {
          "item": "Chameleos Lash",
          "rate": "12%"
        },
        {
          "item": "Chameleos Gem",
          "rate": "7%"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "4%"
        }
      ],
      "carve": [
        {
          "item": "Chameleos Finehide",
          "rate": "36%",
          "part": "Body"
        },
        {
          "item": "Chameleos Finehide",
          "rate": "9%",
          "part": "Tail"
        },
        {
          "item": "Chameleos Hardclaw",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Chameleos Hardhorn",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Chameleos Fellwing",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Chameleos Gem",
          "rate": "7%",
          "part": "Tail"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "3%",
          "part": "Body"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "4%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Chameleos Hardhorn",
          "rate": "89%",
          "part": "Horn"
        },
        {
          "item": "Chameleos Fellwing",
          "rate": "80%",
          "part": "Wing"
        },
        {
          "item": "Chameleos Finehide",
          "rate": "20%",
          "part": "Wing"
        },
        {
          "item": "Chameleos Gem",
          "rate": "7%",
          "part": "Horn"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "4%",
          "part": "Horn"
        }
      ],
      "drops": [
        {
          "item": "Chameleos Finehide",
          "rate": "30%"
        },
        {
          "item": "Pure Dragon Blood",
          "rate": "15%"
        },
        {
          "item": "Ultimas Crystal",
          "rate": "14%"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "1%"
        },
        {
          "item": "Old Dragon Treasure",
          "rate": "40%"
        },
        {
          "item": "Chameleos Finehide",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Chameleos Hardclaw",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Pure Dragon Blood",
          "rate": "20%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "blood-orange-bishaten",
    "name": "Blood Orange Bishaten",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Orangaten Feather+",
          "rate": "28%"
        },
        {
          "item": "Orangaten Talon",
          "rate": "20%"
        },
        {
          "item": "Orangaten Fur+",
          "rate": "19%"
        },
        {
          "item": "Massive Bone",
          "rate": "12%"
        },
        {
          "item": "Orangaten Horn+",
          "rate": "9%"
        },
        {
          "item": "Beast Gem",
          "rate": "7%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "5%"
        }
      ],
      "capture": [
        {
          "item": "Orangaten Feather+",
          "rate": "34%"
        },
        {
          "item": "Orangaten Tailcase+",
          "rate": "23%"
        },
        {
          "item": "Orangaten Fur+",
          "rate": "21%"
        },
        {
          "item": "Orangaten Talon",
          "rate": "16% x2"
        },
        {
          "item": "Large Beast Gem",
          "rate": "6%"
        }
      ],
      "carve": [
        {
          "item": "Orangaten Fur+",
          "rate": "49%",
          "part": "Body"
        },
        {
          "item": "Orangaten Feather+",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Orangaten Horn+",
          "rate": "6%",
          "part": "Body"
        },
        {
          "item": "Large Beast Gem",
          "rate": "3%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Orangaten Tailcase+",
          "rate": "100%",
          "part": "Tail"
        },
        {
          "item": "Orangaten Horn+",
          "rate": "80%",
          "part": "Body"
        },
        {
          "item": "Orangaten Feather+",
          "rate": "70%",
          "part": "Wing"
        },
        {
          "item": "Orangaten Talon",
          "rate": "30%",
          "part": "Wing x2"
        },
        {
          "item": "Orangaten Fur+",
          "rate": "15%",
          "part": "Head"
        },
        {
          "item": "Large Beast Gem",
          "rate": "5%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Orangaten Fur+",
          "rate": "39%"
        },
        {
          "item": "Orangaten Tailcase+",
          "rate": "10%"
        },
        {
          "item": "Large Beast Gem",
          "rate": "1%"
        },
        {
          "item": "Beast Tear",
          "rate": "15%"
        },
        {
          "item": "Large Beast Tear",
          "rate": "35%"
        },
        {
          "item": "Orangaten Fur+",
          "rate": "50%"
        },
        {
          "item": "Orangaten Feather+",
          "rate": "35%"
        },
        {
          "item": "Orangaten Tailcase+",
          "rate": "15%"
        }
      ]
    }
  },
  {
    "id": "crimson-glow-valstrax",
    "name": "Crimson Glow Valstrax",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Shimmering Shard",
          "rate": "24%"
        },
        {
          "item": "Valstrax Talon",
          "rate": "19%"
        },
        {
          "item": "Seething Crimson Liquid",
          "rate": "15%"
        },
        {
          "item": "Glittering Shell",
          "rate": "14%"
        },
        {
          "item": "Valstrax Spineshell+",
          "rate": "12%"
        },
        {
          "item": "Valstrax Helixtail",
          "rate": "10%"
        },
        {
          "item": "Red Dragon Orb",
          "rate": "4%"
        },
        {
          "item": "Red Dragonsphire",
          "rate": "2%"
        }
      ],
      "carve": [
        {
          "item": "Valstrax Helixtail",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Shimmering Shard",
          "rate": "36%",
          "part": "Body"
        },
        {
          "item": "Shimmering Shard",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Glittering Shell",
          "rate": "28%",
          "part": "Body"
        },
        {
          "item": "Rouge Lancewing+",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Valstrax Talon",
          "rate": "14%",
          "part": "Body"
        },
        {
          "item": "Red Dragonsphire",
          "rate": "3%",
          "part": "Tail"
        },
        {
          "item": "Red Dragonsphire",
          "rate": "1%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Valstrax Spineshell+",
          "rate": "90%"
        },
        {
          "item": "Rouge Lancewing+",
          "rate": "90%",
          "part": "Wing"
        },
        {
          "item": "Valstrax Talon",
          "rate": "80%",
          "part": "Foreleg"
        },
        {
          "item": "Valstrax Talon",
          "rate": "10%",
          "part": "Wing"
        },
        {
          "item": "Shimmering Shard",
          "rate": "79%",
          "part": "Chest"
        },
        {
          "item": "Shimmering Shard",
          "rate": "77%",
          "part": "Head"
        },
        {
          "item": "Glittering Shell",
          "rate": "20%",
          "part": "Foreleg"
        },
        {
          "item": "Seething Crimson Liquid",
          "rate": "20%",
          "part": "Head x2"
        },
        {
          "item": "Seething Crimson Liquid",
          "rate": "20%",
          "part": "Chest"
        },
        {
          "item": "Seething Crimson Liquid",
          "rate": "10%",
          "part": "Back x2"
        },
        {
          "item": "Red Dragonsphire",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Red Dragonsphire",
          "rate": "1%",
          "part": "Chest"
        }
      ],
      "drops": [
        {
          "item": "Seething Crimson Liquid",
          "rate": "32%"
        },
        {
          "item": "Glittering Shell",
          "rate": "24%"
        },
        {
          "item": "Red Dragon Orb",
          "rate": "3%"
        },
        {
          "item": "Red Dragonsphire",
          "rate": "1%"
        },
        {
          "item": "Old Dragon Treasure",
          "rate": "40%"
        },
        {
          "item": "Seething Crimson Liquid",
          "rate": "25% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Glittering Shell",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Shimmering Shard",
          "rate": "25%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "flaming-espinas",
    "name": "Flaming Espinas",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Flaming Espinas Cortex",
          "rate": "35%"
        },
        {
          "item": "Flaming Espinas Sulfur",
          "rate": "26%"
        },
        {
          "item": "Flaming Espinas Shard",
          "rate": "21%"
        },
        {
          "item": "Flaming Espinas Lash",
          "rate": "8%"
        },
        {
          "item": "Flaming Espinas Surspike",
          "rate": "7%"
        },
        {
          "item": "Flaming Espinas Mantle",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Flaming Espinas Cortex",
          "rate": "37%"
        },
        {
          "item": "Flaming Espinas Shard",
          "rate": "27%"
        },
        {
          "item": "Flaming Espinas Hardhorn",
          "rate": "21%"
        },
        {
          "item": "Flaming Espinas Lash",
          "rate": "12%"
        },
        {
          "item": "Flaming Espinas Mantle",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Flaming Espinas Cortex",
          "rate": "31%",
          "part": "Body"
        },
        {
          "item": "Flaming Espinas Sulfur",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Flaming Espinas Surspike",
          "rate": "5%",
          "part": "Body"
        },
        {
          "item": "Flaming Espinas Surspike",
          "rate": "5%",
          "part": "Tail"
        },
        {
          "item": "Flaming Espinas Mantle",
          "rate": "2%",
          "part": "Body"
        },
        {
          "item": "Flaming Espinas Mantle",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Flaming Espinas Hardhorn",
          "rate": "85%",
          "part": "Horn"
        },
        {
          "item": "Flaming Espinas Surspike",
          "rate": "60%",
          "part": "Wing"
        },
        {
          "item": "Flaming Espinas Shard",
          "rate": "40%",
          "part": "Wing"
        },
        {
          "item": "Flaming Espinas Sulfur",
          "rate": "30%",
          "part": "Back"
        },
        {
          "item": "Flaming Espinas Cortex",
          "rate": "12%",
          "part": "Horn"
        },
        {
          "item": "Flaming Espinas Cortex",
          "rate": "70%",
          "part": "Back"
        },
        {
          "item": "Flaming Espinas Mantle",
          "rate": "3%",
          "part": "Horn"
        },
        {
          "item": "Flaming Espinas Lash",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Flaming Espinas Shard",
          "rate": "41%",
          "part": "Body"
        },
        {
          "item": "Flaming Espinas Shard",
          "rate": "12%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Flaming Espinas Shard",
          "rate": "38%"
        },
        {
          "item": "Flaming Espinas Cortex",
          "rate": "18%"
        },
        {
          "item": "Flaming Espinas Surspike",
          "rate": "3%"
        },
        {
          "item": "Flaming Espinas Mantle",
          "rate": "1%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Flaming Espinas Shard",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Flaming Espinas Cortex",
          "rate": "34%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Flaming Espinas Sulfur",
          "rate": "15%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Flaming Espinas Surspike",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "magma-almudron",
    "name": "Magma Almudron",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Magmadron Cortex",
          "rate": "26%"
        },
        {
          "item": "Inferno Lava Mud",
          "rate": "21%"
        },
        {
          "item": "Magmadron Shard",
          "rate": "18%"
        },
        {
          "item": "Large Magmadron Fin",
          "rate": "17%"
        },
        {
          "item": "Magmadron Hardwhisker",
          "rate": "10%"
        },
        {
          "item": "Magmadron Tail",
          "rate": "6%"
        },
        {
          "item": "Magmadron Mantle",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Magmadron Hardclaw",
          "rate": "32%"
        },
        {
          "item": "Magmadron Shard",
          "rate": "23%"
        },
        {
          "item": "Magmadron Cortex",
          "rate": "16%"
        },
        {
          "item": "Inferno Lava Mud",
          "rate": "14% x2"
        },
        {
          "item": "Magmadron Tail",
          "rate": "12%"
        },
        {
          "item": "Magmadron Mantle",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Magmadron Shard",
          "rate": "38%",
          "part": "Body"
        },
        {
          "item": "Magmadron Cortex",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Large Magmadron Fin",
          "rate": "22%",
          "part": "Body"
        },
        {
          "item": "Large Magmadron Fin",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Magmadron Hardwhisker",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Magmadron Mantle",
          "rate": "1%",
          "part": "Body"
        },
        {
          "item": "Magmadron Mantle",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Magmadron Hardclaw",
          "rate": "90%",
          "part": "Forelegs x2"
        },
        {
          "item": "Large Magmadron Fin",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Large Magmadron Fin",
          "rate": "17%",
          "part": "Head"
        },
        {
          "item": "Magmadron Hardwhisker",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Magmadron Shard",
          "rate": "70%",
          "part": "Chest"
        },
        {
          "item": "Magmadron Shard",
          "rate": "10%",
          "part": "Forelegs x2"
        }
      ],
      "drops": [
        {
          "item": "Inferno Lava Mud",
          "rate": "30%"
        },
        {
          "item": "Magmadron Shard",
          "rate": "19%"
        },
        {
          "item": "Magmadron Mantle",
          "rate": "1%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Inferno Lava Mud",
          "rate": "25% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Magmadron Shard",
          "rate": "37%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Magmadron Cortex",
          "rate": "28%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Magmadron Hardclaw",
          "rate": "10%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "pyre-rakna-kadaki",
    "name": "Pyre Rakna-Kadaki",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Pyre-Kadaki Hardclaw",
          "rate": "24%"
        },
        {
          "item": "Pyre-Kadaki Cortex",
          "rate": "17%"
        },
        {
          "item": "Monster Essence",
          "rate": "17%"
        },
        {
          "item": "Pyre-Kadaki Dull Glowgut",
          "rate": "17%"
        },
        {
          "item": "Pyre-Kadaki Silk+",
          "rate": "15%"
        },
        {
          "item": "Pyre-Kadaki Spike+",
          "rate": "10%"
        }
      ],
      "capture": [
        {
          "item": "Pyre-Kadaki Hardclaw",
          "rate": "31%"
        },
        {
          "item": "Pyre-Kadaki Cortex",
          "rate": "25%"
        },
        {
          "item": "Pyre-Kadaki Silk+",
          "rate": "20%"
        },
        {
          "item": "Pyre-Kadaki Spike+",
          "rate": "14%"
        },
        {
          "item": "Monster Essence",
          "rate": "10% x2"
        }
      ],
      "carve": [
        {
          "item": "Pyre-Kadaki Cortex",
          "rate": "33%",
          "part": "Body"
        },
        {
          "item": "Pyre-Kadaki Hardclaw",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Pyre-Kadaki Dull Glowgut",
          "rate": "16%"
        },
        {
          "item": "Monster Essence",
          "rate": "14%",
          "part": "Body"
        },
        {
          "item": "Pyre-Kadaki Silk+",
          "rate": "13%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Pyre-Kadaki Hardclaw",
          "rate": "100%",
          "part": "Claws"
        },
        {
          "item": "Pyre-Kadaki Silk+",
          "rate": "80%",
          "part": "Legs x2"
        },
        {
          "item": "Pyre-Kadaki Silk+",
          "rate": "30%",
          "part": "Head"
        },
        {
          "item": "Pyre-Kadaki Dull Glowgut",
          "rate": "60%",
          "part": "Glowgut"
        },
        {
          "item": "Pyre-Kadaki Cortex",
          "rate": "50%",
          "part": "Head"
        },
        {
          "item": "Pyre-Kadaki Spike+",
          "rate": "40%",
          "part": "Glowgut x2"
        },
        {
          "item": "Pyre-Kadaki Spike+",
          "rate": "20%",
          "part": "Legs"
        },
        {
          "item": "Monster Essence",
          "rate": "20%",
          "part": "Head"
        }
      ],
      "drops": [
        {
          "item": "Pyre-Kadaki Silk+",
          "rate": "40%"
        },
        {
          "item": "Pyre-Kadaki Spike+",
          "rate": "10%"
        },
        {
          "item": "Queen Substance",
          "rate": "50%"
        },
        {
          "item": "Pyre-Kadaki Silk+",
          "rate": "30% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Pyre-Kadaki Cortex",
          "rate": "60%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Pyre-Kadaki Spike+",
          "rate": "10%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "risen-crimson-glow-valstrax",
    "name": "Risen Crimson Glow Valstrax",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Shimmering Shard",
          "rate": "22%"
        },
        {
          "item": "Valstrax Talon",
          "rate": "18%"
        },
        {
          "item": "Seething Crimson Liquid",
          "rate": "15%"
        },
        {
          "item": "Glittering Shell",
          "rate": "14%"
        },
        {
          "item": "Valstrax Spineshell+",
          "rate": "12%"
        },
        {
          "item": "Valstrax Helixtail",
          "rate": "10%"
        },
        {
          "item": "Red Dragon Orb",
          "rate": "6%"
        },
        {
          "item": "Red Dragonsphire",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Shimmering Shard",
          "rate": "35%",
          "part": "Body"
        },
        {
          "item": "Shimmering Shard",
          "rate": "16%",
          "part": "Tail"
        },
        {
          "item": "Glittering Shell",
          "rate": "28%",
          "part": "Body"
        },
        {
          "item": "Rouge Lancewing+",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Valstrax Talon",
          "rate": "14%",
          "part": "Body"
        },
        {
          "item": "Red Dragonsphire",
          "rate": "4%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Valstrax Spineshell+",
          "rate": "90%",
          "part": "Back"
        },
        {
          "item": "Rouge Lancewing+",
          "rate": "90%",
          "part": "Wing"
        },
        {
          "item": "Shimmering Shard",
          "rate": "76%",
          "part": "Head"
        },
        {
          "item": "Shimmering Shard",
          "rate": "78%",
          "part": "Chest"
        }
      ],
      "drops": [
        {
          "item": "Seething Crimson Liquid",
          "rate": "32%"
        },
        {
          "item": "Glittering Shell",
          "rate": "24%"
        },
        {
          "item": "Red Dragon Orb",
          "rate": "3%"
        },
        {
          "item": "Red Dragonsphire",
          "rate": "1%"
        },
        {
          "item": "Old Dragon Treasure",
          "rate": "40%"
        },
        {
          "item": "Seething Crimson Liquid",
          "rate": "25% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Glittering Shell",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Shimmering Shard",
          "rate": "25%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "risen-teostra",
    "name": "Risen Teostra",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Hellfire Shard",
          "rate": "33%"
        },
        {
          "item": "Fire Dragon Hardclaw",
          "rate": "23%"
        },
        {
          "item": "Teostra Cortex",
          "rate": "18%"
        },
        {
          "item": "Teostra Lash",
          "rate": "15%"
        },
        {
          "item": "Teostra Gem",
          "rate": "7%"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "4%"
        }
      ],
      "carve": [
        {
          "item": "Teostra Cortex",
          "rate": "33%",
          "part": "Body"
        },
        {
          "item": "Hellfire Shard",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Hellfire Shard",
          "rate": "9%",
          "part": "Tail"
        },
        {
          "item": "Fire Dragon Hardclaw",
          "rate": "17%",
          "part": "Body"
        },
        {
          "item": "Teostra Fellwing",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Teostra Hardhorn",
          "rate": "8%",
          "part": "Body"
        },
        {
          "item": "Teostra Gem",
          "rate": "7%",
          "part": "Tail"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "3%",
          "part": "Body"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "4%",
          "part": "Tail"
        },
        {
          "item": "Teostra Lash",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Teostra Hardhorn",
          "rate": "89%",
          "part": "Head"
        },
        {
          "item": "Teostra Fellwing",
          "rate": "80%",
          "part": "Wingclaw"
        }
      ],
      "drops": [
        {
          "item": "Teostra Cortex",
          "rate": "42%"
        },
        {
          "item": "Pure Dragon Blood",
          "rate": "17%"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "1%"
        },
        {
          "item": "Old Dragon Treasure",
          "rate": "40%"
        },
        {
          "item": "Teostra Cortex",
          "rate": "45%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Hellfire Shard",
          "rate": "40%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Pure Dragon Blood",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "scorned-magnamalo",
    "name": "Scorned Magnamalo",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Magna Armored Cortex",
          "rate": "28%"
        },
        {
          "item": "Surging Armblade",
          "rate": "21%"
        },
        {
          "item": "Begrudged Rancorscale",
          "rate": "18%"
        },
        {
          "item": "Magna Barrierprism",
          "rate": "16%"
        },
        {
          "item": "Moaning Bladeshell",
          "rate": "8%"
        },
        {
          "item": "Magnamalo Tail+",
          "rate": "6%"
        },
        {
          "item": "Magna Glare Eye",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Magna Armored Cortex",
          "rate": "37%"
        },
        {
          "item": "Horn of Malice",
          "rate": "26%"
        },
        {
          "item": "Moaning Bladeshell",
          "rate": "20%"
        },
        {
          "item": "Magnamalo Tail+",
          "rate": "14%"
        },
        {
          "item": "Magna Glare Eye",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Begrudged Rancorscale",
          "rate": "34%",
          "part": "Body"
        },
        {
          "item": "Begrudged Rancorscale",
          "rate": "20%",
          "part": "Tail"
        },
        {
          "item": "Magna Barrierprism",
          "rate": "26%",
          "part": "Body"
        },
        {
          "item": "Magna Armored Cortex",
          "rate": "22%",
          "part": "Body"
        },
        {
          "item": "Surging Armblade",
          "rate": "16%",
          "part": "Body"
        },
        {
          "item": "Magna Glare Eye",
          "rate": "2%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Horn of Malice",
          "rate": "95%",
          "part": "Head"
        },
        {
          "item": "Moaning Bladeshell",
          "rate": "90%",
          "part": "Back"
        },
        {
          "item": "Surging Armblade",
          "rate": "80%",
          "part": "Armblade"
        },
        {
          "item": "Begrudged Rancorscale",
          "rate": "20%",
          "part": "Armblade"
        },
        {
          "item": "Magna Barrierprism",
          "rate": "10%",
          "part": "Back"
        },
        {
          "item": "Magna Glare Eye",
          "rate": "5%",
          "part": "Head"
        },
        {
          "item": "Magnamalo Tail+",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Magna Barrierprism",
          "rate": "30%"
        },
        {
          "item": "Begrudged Rancorscale",
          "rate": "20%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Begrudged Rancorscale",
          "rate": "40%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Magna Armored Cortex",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Magna Barrierprism",
          "rate": "20% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Moaning Bladeshell",
          "rate": "10%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "apex-mizutsune",
    "name": "Apex Mizutsune",
    "order": [
      "highRank",
      "masterRank"
    ],
    "highRank": {
      "target": [
        {
          "item": "Mizutsune Scale+",
          "rate": "38%"
        },
        {
          "item": "Mizutsune Purplefur+",
          "rate": "29%"
        },
        {
          "item": "Mizutsune Claw+",
          "rate": "15%"
        },
        {
          "item": "Apex Bubblefoam",
          "rate": "6%"
        },
        {
          "item": "Mizutsune Tail",
          "rate": "5%"
        }
      ],
      "carve": [
        {
          "item": "Mizutsune Scale+",
          "rate": "41%",
          "part": "Body"
        },
        {
          "item": "Mizutsune Purplefur+",
          "rate": "28%",
          "part": "Body"
        },
        {
          "item": "Mizutsune Purplefur+",
          "rate": "13%",
          "part": "Tail"
        },
        {
          "item": "Mizutsune Claw+",
          "rate": "15%",
          "part": "Body"
        },
        {
          "item": "Apex Bubblefoam",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Mizutsune Plate",
          "rate": "7%",
          "part": "Tail"
        },
        {
          "item": "Mizutsune Plate",
          "rate": "3%",
          "part": "Body"
        },
        {
          "item": "Mizutsune Water Orb",
          "rate": "5%",
          "part": "Tail"
        },
        {
          "item": "Mizutsune Water Orb",
          "rate": "1%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Mizutsune Claw+",
          "rate": "80%",
          "part": "Right Claw"
        },
        {
          "item": "Mizutsune Claw+",
          "rate": "80%",
          "part": "Left Claw"
        },
        {
          "item": "Mizutsune Purplefur+",
          "rate": "65%",
          "part": "Tail"
        },
        {
          "item": "Mizutsune Purplefur+",
          "rate": "30%",
          "part": "Dorsal Fin"
        },
        {
          "item": "Mizutsune Purplefur+",
          "rate": "20%",
          "part": "Right Claw"
        },
        {
          "item": "Mizutsune Purplefur+",
          "rate": "20%",
          "part": "Left Claw"
        },
        {
          "item": "Mizutsune Fin+",
          "rate": "60%",
          "part": "Dorsal Fin"
        },
        {
          "item": "Mizutsune Fin+",
          "rate": "57%",
          "part": "Head"
        },
        {
          "item": "Mizutsune Fin+",
          "rate": "10%",
          "part": "Dorsal Fin x2"
        },
        {
          "item": "Apex Bubblefoam",
          "rate": "31%",
          "part": "Head"
        },
        {
          "item": "Apex Bubblefoam",
          "rate": "28%",
          "part": "Tail"
        },
        {
          "item": "Mizutsune Plate",
          "rate": "7%",
          "part": "Head"
        },
        {
          "item": "Mizutsune Plate",
          "rate": "5%",
          "part": "Tail"
        },
        {
          "item": "Mizutsune Water Orb",
          "rate": "5%",
          "part": "Head"
        },
        {
          "item": "Mizutsune Water Orb",
          "rate": "2%",
          "part": "Tail"
        },
        {
          "item": "Mizutsune Tail",
          "rate": "75%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Mizutsune Scale+",
          "rate": "58%"
        },
        {
          "item": "Mizutsune Water Orb",
          "rate": "2%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Mizutsune Scale+",
          "rate": "60%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Mizutsune Purplefur+",
          "rate": "40%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Melding Pudding",
          "rate": "30%"
        },
        {
          "item": "Melding Honey",
          "rate": "20%"
        },
        {
          "item": "Mizutsune Shard",
          "rate": "20%"
        },
        {
          "item": "Mizutsune Purplefell",
          "rate": "13%"
        },
        {
          "item": "Mizutsune Hardclaw",
          "rate": "10%"
        },
        {
          "item": "Mizutsune Mantle",
          "rate": "4%"
        },
        {
          "item": "Apex Bubblefoam",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Mizutsune Shard",
          "rate": "41%",
          "part": "Body"
        },
        {
          "item": "Mizutsune Purplefell",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Mizutsune Purplefell",
          "rate": "15%",
          "part": "Tail"
        },
        {
          "item": "Mizutsune Hardclaw",
          "rate": "17%",
          "part": "Body"
        },
        {
          "item": "Apex Bubblefoam",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Mizutsune Mantle",
          "rate": "2%",
          "part": "Body"
        },
        {
          "item": "Mizutsune Mantle",
          "rate": "5%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Mizutsune Hardclaw",
          "rate": "80%",
          "part": "Right Claw"
        },
        {
          "item": "Mizutsune Hardclaw",
          "rate": "80%",
          "part": "Left Claw"
        },
        {
          "item": "Mizutsune Silkfin",
          "rate": "70%",
          "part": "Head"
        },
        {
          "item": "Mizutsune Silkfin",
          "rate": "60%",
          "part": "Dorsal Fin"
        },
        {
          "item": "Mizutsune Silkfin",
          "rate": "10%",
          "part": "Dorsal Fin x2"
        },
        {
          "item": "Mizutsune Purplefell",
          "rate": "30%",
          "part": "Dorsal Fin"
        },
        {
          "item": "Mizutsune Purplefell",
          "rate": "20%",
          "part": "Right Claw"
        },
        {
          "item": "Mizutsune Purplefell",
          "rate": "20%",
          "part": "Left Claw"
        },
        {
          "item": "Mizutsune Purplefell",
          "rate": "69%",
          "part": "Tail"
        },
        {
          "item": "Apex Bubblefoam",
          "rate": "25%",
          "part": "Head"
        },
        {
          "item": "Apex Bubblefoam",
          "rate": "28%",
          "part": "Tail"
        },
        {
          "item": "Mizutsune Mantle",
          "rate": "5%",
          "part": "Head"
        },
        {
          "item": "Mizutsune Mantle",
          "rate": "3%",
          "part": "Tail"
        },
        {
          "item": "Purple Mizutsune Tail",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Mizutsune Shard",
          "rate": "58%"
        },
        {
          "item": "Mizutsune Mantle",
          "rate": "2%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Mizutsune Shard",
          "rate": "60%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Mizutsune Purplefell",
          "rate": "40%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "risen-kushala-daora",
    "name": "Risen Kushala Daora",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Daora Shard",
          "rate": "26%"
        },
        {
          "item": "Daora Hardclaw",
          "rate": "20%"
        },
        {
          "item": "Daora Cortex",
          "rate": "16%"
        },
        {
          "item": "Daora Fellwing",
          "rate": "15%"
        },
        {
          "item": "Daora Lash",
          "rate": "12%"
        },
        {
          "item": "Daora Gem",
          "rate": "7%"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "4%"
        }
      ],
      "carve": [
        {
          "item": "Daora Cortex",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Daora Cortex",
          "rate": "9%",
          "part": "Tail"
        },
        {
          "item": "Daora Shard",
          "rate": "22%",
          "part": "Body"
        },
        {
          "item": "Daora Hardhorn",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Daora Hardclaw",
          "rate": "17%",
          "part": "Body"
        },
        {
          "item": "Daora Fellwing",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Daora Gem",
          "rate": "7%",
          "part": "Tail"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "3-4%",
          "part": "Body/Tail"
        }
      ],
      "breaks": [
        {
          "item": "Daora Hardhorn",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Daora Fellwing",
          "rate": "70%",
          "part": "Wing"
        },
        {
          "item": "Daora Hardclaw",
          "rate": "30%",
          "part": "Wing"
        },
        {
          "item": "Daora Shard",
          "rate": "9%",
          "part": "Head"
        },
        {
          "item": "Daora Gem",
          "rate": "7%",
          "part": "Head"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "4%",
          "part": "Head"
        },
        {
          "item": "Daora Lash",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Daora Cortex",
          "rate": "34%"
        },
        {
          "item": "Daora Hardclaw",
          "rate": "10%"
        },
        {
          "item": "Pure Dragon Blood",
          "rate": "15%"
        },
        {
          "item": "Large Elder Dragon Gem",
          "rate": "1%"
        },
        {
          "item": "Old Dragon Treasure",
          "rate": "40%"
        },
        {
          "item": "Daora Cortex",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Daora Shard",
          "rate": "25%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Daora Hardclaw",
          "rate": "10%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Pure Dragon Blood",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "violet-mizutsune",
    "name": "Violet Mizutsune",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Violet Mizu Whitefell",
          "rate": "34%"
        },
        {
          "item": "White Synovial Fluid",
          "rate": "24%"
        },
        {
          "item": "Violet Mizu Shard",
          "rate": "20%"
        },
        {
          "item": "Violet Mizu Hardclaw",
          "rate": "15%"
        },
        {
          "item": "Violet Mizu Tail",
          "rate": "5%"
        },
        {
          "item": "Violet Mizu Mantle",
          "rate": "2%"
        }
      ],
      "capture": [
        {
          "item": "Violet Mizu Whitefell",
          "rate": "28%"
        },
        {
          "item": "Violet Mizu Hardclaw",
          "rate": "25%"
        },
        {
          "item": "Violet Mizu Shard",
          "rate": "18%"
        },
        {
          "item": "White Synovial Fluid",
          "rate": "18%"
        },
        {
          "item": "Violet Mizu Tail",
          "rate": "8%"
        },
        {
          "item": "Violet Mizu Mantle",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Violet Mizu Whitefell",
          "rate": "26%",
          "part": "Body"
        },
        {
          "item": "Violet Mizu Whitefell",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Violet Mizu Shard",
          "rate": "39%",
          "part": "Body"
        },
        {
          "item": "White Synovial Fluid",
          "rate": "22%",
          "part": "Body"
        },
        {
          "item": "Violet Mizu Hardclaw",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Violet Mizu Mantle",
          "rate": "1%",
          "part": "Body"
        },
        {
          "item": "Violet Mizu Mantle",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Violet Mizu Hardclaw",
          "rate": "80%",
          "part": "Right Claw"
        },
        {
          "item": "Violet Mizu Hardclaw",
          "rate": "80%",
          "part": "Left Claw"
        },
        {
          "item": "Violet Mizu Fin",
          "rate": "60%",
          "part": "Head"
        },
        {
          "item": "Violet Mizu Fin",
          "rate": "60%",
          "part": "Dorsal Fin"
        },
        {
          "item": "Violet Mizu Fin",
          "rate": "10%",
          "part": "Dorsal Fin x2"
        },
        {
          "item": "White Synovial Fluid",
          "rate": "37%",
          "part": "Head"
        },
        {
          "item": "White Synovial Fluid",
          "rate": "33%",
          "part": "Tail"
        },
        {
          "item": "Violet Mizu Whitefell",
          "rate": "30%",
          "part": "Dorsal Fin"
        },
        {
          "item": "Violet Mizu Whitefell",
          "rate": "20%",
          "part": "Left Claw"
        },
        {
          "item": "Violet Mizu Whitefell",
          "rate": "20%",
          "part": "Right Claw"
        },
        {
          "item": "Violet Mizu Whitefell",
          "rate": "65%",
          "part": "Tail"
        },
        {
          "item": "Violet Mizu Mantle",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Violet Mizu Mantle",
          "rate": "2%",
          "part": "Tail"
        },
        {
          "item": "Violet Mizu Tail",
          "rate": "80%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "White Synovial Fluid",
          "rate": "40%"
        },
        {
          "item": "Violet Mizu Shard",
          "rate": "19%"
        },
        {
          "item": "Violet Mizu Mantle",
          "rate": "1%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "White Synovial Fluid",
          "rate": "26% x2",
          "part": "Wyvern Riding"
        },
        {
          "item": "Violet Mizu Shard",
          "rate": "44%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Violet Mizu Whitefell",
          "rate": "30%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "apex-diablos",
    "name": "Apex Diablos",
    "order": [
      "highRank",
      "masterRank"
    ],
    "highRank": {
      "target": [
        {
          "item": "Diablos Carapace",
          "rate": "32%"
        },
        {
          "item": "Diablos Ridge+",
          "rate": "25%"
        },
        {
          "item": "Diablos Fang",
          "rate": "13%"
        },
        {
          "item": "Dash Extract",
          "rate": "8%"
        },
        {
          "item": "Diablos Medulla",
          "rate": "8%"
        },
        {
          "item": "Apex Curlhorn",
          "rate": "5%"
        },
        {
          "item": "Diablos Tailcase",
          "rate": "5%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "4%"
        }
      ],
      "carve": [
        {
          "item": "Diablos Carapace",
          "rate": "39%",
          "part": "Body"
        },
        {
          "item": "Diablos Carapace",
          "rate": "12%",
          "part": "Tail"
        },
        {
          "item": "Diablos Ridge+",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Diablos Fang",
          "rate": "14%",
          "part": "Body x2"
        },
        {
          "item": "Diablos Medulla",
          "rate": "12%",
          "part": "Tail"
        },
        {
          "item": "Diablos Medulla",
          "rate": "5%",
          "part": "Body"
        },
        {
          "item": "Apex Curlhorn",
          "rate": "7%",
          "part": "Body"
        },
        {
          "item": "Wyvern Gem",
          "rate": "6%",
          "part": "Tail"
        },
        {
          "item": "Wyvern Gem",
          "rate": "3%",
          "part": "Body"
        }
      ],
      "breaks": [
        {
          "item": "Apex Curlhorn",
          "rate": "100%",
          "part": "Both Horns"
        },
        {
          "item": "Diablos Ridge+",
          "rate": "50%",
          "part": "Back"
        },
        {
          "item": "Diablos Marrow",
          "rate": "30%",
          "part": "Back"
        },
        {
          "item": "Diablos Medulla",
          "rate": "20%",
          "part": "Back"
        },
        {
          "item": "Diablos Tailcase",
          "rate": "70%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Diablos Carapace",
          "rate": "38%"
        },
        {
          "item": "Diablos Ridge+",
          "rate": "20%"
        },
        {
          "item": "Wyvern Gem",
          "rate": "2%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Diablos Carapace",
          "rate": "70%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Diablos Ridge+",
          "rate": "30%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Diablos Chine",
          "rate": "25%"
        },
        {
          "item": "Diablos Cortex",
          "rate": "17%"
        },
        {
          "item": "Diablos Tailcase+",
          "rate": "10%"
        },
        {
          "item": "Apex Curlhorn",
          "rate": "5%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Diablos Chine",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Diablos Chine",
          "rate": "22%",
          "part": "Body"
        },
        {
          "item": "Diablos Cortex",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Diablos Cortex",
          "rate": "24%",
          "part": "Tail"
        },
        {
          "item": "Apex Curlhorn",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "6%",
          "part": "Body"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "6%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Apex Curlhorn",
          "rate": "100%",
          "part": "Both Horns"
        },
        {
          "item": "Diablos Chine",
          "rate": "80%",
          "part": "Back"
        },
        {
          "item": "Diablos Cortex",
          "rate": "20%",
          "part": "Back"
        },
        {
          "item": "Diablos Tailcase+",
          "rate": "70%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Diablos Cortex",
          "rate": "25%"
        },
        {
          "item": "Diablos Chine",
          "rate": "22%"
        },
        {
          "item": "Large Wyvern Gem",
          "rate": "3%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Diablos Cortex",
          "rate": "60%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Diablos Chine",
          "rate": "40%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "apex-rathalos",
    "name": "Apex Rathalos",
    "order": [
      "highRank",
      "masterRank"
    ],
    "highRank": {
      "target": [
        {
          "item": "Apex Blaze Sac",
          "rate": "8%"
        },
        {
          "item": "Rathalos Scale+",
          "rate": "35%"
        },
        {
          "item": "Rathalos Carapace",
          "rate": "27%"
        },
        {
          "item": "Rathalos Wing",
          "rate": "15%"
        },
        {
          "item": "Rath Medulla",
          "rate": "8%"
        },
        {
          "item": "Rathalos Plate",
          "rate": "5%"
        },
        {
          "item": "Rathalos Ruby",
          "rate": "2%"
        }
      ],
      "carve": [
        {
          "item": "Rathalos Scale+",
          "rate": "36%",
          "part": "Body"
        },
        {
          "item": "Rathalos Carapace",
          "rate": "24%",
          "part": "Body"
        },
        {
          "item": "Rathalos Wing",
          "rate": "19%",
          "part": "Body"
        },
        {
          "item": "Apex Blaze Sac",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Rath Medulla",
          "rate": "5%",
          "part": "Body"
        },
        {
          "item": "Rathalos Plate",
          "rate": "3%",
          "part": "Body"
        },
        {
          "item": "Rathalos Ruby",
          "rate": "1%",
          "part": "Body"
        },
        {
          "item": "Rathalos Scale+",
          "rate": "18%",
          "part": "Tail"
        },
        {
          "item": "Rathalos Tail",
          "rate": "65%",
          "part": "Tail"
        },
        {
          "item": "Rath Medulla",
          "rate": "7%",
          "part": "Tail"
        },
        {
          "item": "Rathalos Plate",
          "rate": "5%",
          "part": "Tail"
        },
        {
          "item": "Rathalos Ruby",
          "rate": "5%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Apex Blaze Sac",
          "rate": "35%",
          "part": "Body"
        },
        {
          "item": "Rathalos Scale+",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Rathalos Carapace",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Rathalos Plate",
          "rate": "7%",
          "part": "Body"
        },
        {
          "item": "Rathalos Ruby",
          "rate": "5%",
          "part": "Body"
        },
        {
          "item": "Rath Wingtalon+",
          "rate": "70%",
          "part": "Neck"
        },
        {
          "item": "Rathalos Wing",
          "rate": "30%",
          "part": "Neck"
        },
        {
          "item": "Rathalos Carapace",
          "rate": "65%",
          "part": "Left Leg"
        },
        {
          "item": "Rath Medulla",
          "rate": "30%",
          "part": "Left Leg"
        },
        {
          "item": "Rathalos Plate",
          "rate": "4%",
          "part": "Left Leg"
        },
        {
          "item": "Rathalos Ruby",
          "rate": "1%",
          "part": "Left Leg"
        }
      ],
      "drops": [
        {
          "item": "Rathalos Scale+",
          "rate": "39%"
        },
        {
          "item": "Rath Wingtalon+",
          "rate": "19%"
        },
        {
          "item": "Rathalos Ruby",
          "rate": "2%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Rathalos Scale+",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rathalos Carapace",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rath Wingtalon+",
          "rate": "20%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Apex Blaze Sac",
          "rate": "3%"
        },
        {
          "item": "Rathalos Shard",
          "rate": "21%"
        },
        {
          "item": "Rathalos Cortex",
          "rate": "13%"
        },
        {
          "item": "Rathalos Fellwing",
          "rate": "9%"
        },
        {
          "item": "Rathalos Mantle",
          "rate": "4%"
        },
        {
          "item": "Melding Pudding",
          "rate": "30%"
        },
        {
          "item": "Melding Honey",
          "rate": "20%"
        }
      ],
      "carve": [
        {
          "item": "Rathalos Shard",
          "rate": "38%",
          "part": "Body"
        },
        {
          "item": "Rathalos Cortex",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Rathalos Fellwing",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Apex Blaze Sac",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Rathalos Mantle",
          "rate": "2%",
          "part": "Body"
        },
        {
          "item": "Rathalos Shard",
          "rate": "20%",
          "part": "Tail"
        },
        {
          "item": "Rathalos Lash",
          "rate": "75%",
          "part": "Tail"
        },
        {
          "item": "Rathalos Mantle",
          "rate": "5%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Apex Blaze Sac",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Rathalos Shard",
          "rate": "38%",
          "part": "Body"
        },
        {
          "item": "Rathalos Cortex",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Rathalos Mantle",
          "rate": "5%",
          "part": "Body"
        },
        {
          "item": "Rath Wingripper",
          "rate": "70%",
          "part": "Neck"
        },
        {
          "item": "Rathalos Fellwing",
          "rate": "30%",
          "part": "Neck"
        },
        {
          "item": "Rathalos Cortex",
          "rate": "98%",
          "part": "Left Leg"
        },
        {
          "item": "Rathalos Mantle",
          "rate": "2%",
          "part": "Left Leg"
        }
      ],
      "drops": [
        {
          "item": "Rathalos Shard",
          "rate": "39%"
        },
        {
          "item": "Rath Wingripper",
          "rate": "19%"
        },
        {
          "item": "Rathalos Mantle",
          "rate": "2%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Rathalos Shard",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rathalos Cortex",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rath Wingripper",
          "rate": "20%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "apex-rathian",
    "name": "Apex Rathian",
    "order": [
      "highRank",
      "masterRank"
    ],
    "highRank": {
      "target": [
        {
          "item": "Apex Venom Spike",
          "rate": "5%"
        },
        {
          "item": "Rathian Scale+",
          "rate": "31%"
        },
        {
          "item": "Rathian Carapace",
          "rate": "23%"
        },
        {
          "item": "Rathian Webbing",
          "rate": "8% x2"
        },
        {
          "item": "Inferno Sac",
          "rate": "14%"
        },
        {
          "item": "Monster Keenbone",
          "rate": "12%"
        },
        {
          "item": "Rathian Plate",
          "rate": "5%"
        },
        {
          "item": "Rathian Ruby",
          "rate": "2%"
        }
      ],
      "carve": [
        {
          "item": "Rathian Scale+",
          "rate": "41%",
          "part": "Body"
        },
        {
          "item": "Rathian Carapace",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Apex Venom Spike",
          "rate": "6%",
          "part": "Body"
        },
        {
          "item": "Inferno Sac",
          "rate": "17%",
          "part": "Body"
        },
        {
          "item": "Rathian Plate",
          "rate": "3%",
          "part": "Body"
        },
        {
          "item": "Rathian Ruby",
          "rate": "1%",
          "part": "Body"
        },
        {
          "item": "Apex Venom Spike",
          "rate": "40%",
          "part": "Tail"
        },
        {
          "item": "Rathian Scale+",
          "rate": "42%",
          "part": "Tail"
        },
        {
          "item": "Rath Medulla",
          "rate": "8%",
          "part": "Tail"
        },
        {
          "item": "Rathian Plate",
          "rate": "5%",
          "part": "Tail"
        },
        {
          "item": "Rathian Ruby",
          "rate": "5%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Rathian Scale+",
          "rate": "58%",
          "part": "Head"
        },
        {
          "item": "Rathian Carapace",
          "rate": "30%",
          "part": "Head"
        },
        {
          "item": "Rathian Plate",
          "rate": "7%",
          "part": "Head"
        },
        {
          "item": "Rathian Ruby",
          "rate": "5%",
          "part": "Head"
        },
        {
          "item": "Rath Wingtalon+",
          "rate": "80%",
          "part": "Right Leg"
        },
        {
          "item": "Rathian Webbing",
          "rate": "20% x2",
          "part": "Right Leg"
        },
        {
          "item": "Rathian Carapace",
          "rate": "60%",
          "part": "Wing"
        },
        {
          "item": "Apex Venom Spike",
          "rate": "35%",
          "part": "Wing"
        },
        {
          "item": "Rathian Plate",
          "rate": "3%",
          "part": "Wing"
        },
        {
          "item": "Rathian Ruby",
          "rate": "2%",
          "part": "Wing"
        }
      ],
      "drops": [
        {
          "item": "Rathian Scale+",
          "rate": "58%"
        },
        {
          "item": "Rathian Ruby",
          "rate": "2%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Rathian Scale+",
          "rate": "60%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rathian Carapace",
          "rate": "40%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Apex Venom Spike",
          "rate": "3%"
        },
        {
          "item": "Rathian Shard",
          "rate": "19%"
        },
        {
          "item": "Rathian Cortex",
          "rate": "10%"
        },
        {
          "item": "Rathian Weave",
          "rate": "8% x2"
        },
        {
          "item": "Melding Pudding",
          "rate": "15%"
        },
        {
          "item": "Melding Honey",
          "rate": "35%"
        },
        {
          "item": "Rathian Ruby",
          "rate": "7%"
        },
        {
          "item": "Rathian Mantle",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Rathian Shard",
          "rate": "45%",
          "part": "Body"
        },
        {
          "item": "Rathian Cortex",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Apex Venom Spike",
          "rate": "8%",
          "part": "Body"
        },
        {
          "item": "Rathian Ruby",
          "rate": "7%",
          "part": "Body"
        },
        {
          "item": "Rathian Mantle",
          "rate": "3%",
          "part": "Body"
        },
        {
          "item": "Apex Venom Spike",
          "rate": "40%",
          "part": "Tail"
        },
        {
          "item": "Rathian Shard",
          "rate": "33%",
          "part": "Tail"
        },
        {
          "item": "Rath Medulla",
          "rate": "15%",
          "part": "Tail"
        },
        {
          "item": "Rathian Ruby",
          "rate": "8%",
          "part": "Tail"
        },
        {
          "item": "Rathian Mantle",
          "rate": "4%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Rathian Shard",
          "rate": "58%",
          "part": "Head"
        },
        {
          "item": "Rathian Cortex",
          "rate": "30%",
          "part": "Head"
        },
        {
          "item": "Rathian Ruby",
          "rate": "8%",
          "part": "Head"
        },
        {
          "item": "Rathian Mantle",
          "rate": "4%",
          "part": "Head"
        },
        {
          "item": "Rath Wingripper",
          "rate": "80%",
          "part": "Right Leg"
        },
        {
          "item": "Rathian Weave",
          "rate": "20% x2",
          "part": "Right Leg"
        },
        {
          "item": "Rathian Cortex",
          "rate": "24%",
          "part": "Wing"
        },
        {
          "item": "Apex Venom Spike",
          "rate": "70%",
          "part": "Wing"
        },
        {
          "item": "Rathian Ruby",
          "rate": "4%",
          "part": "Wing"
        },
        {
          "item": "Rathian Mantle",
          "rate": "2%",
          "part": "Wing"
        }
      ],
      "drops": [
        {
          "item": "Rathian Shard",
          "rate": "35%"
        },
        {
          "item": "Rathian Cortex",
          "rate": "20%"
        },
        {
          "item": "Rathian Ruby",
          "rate": "4%"
        },
        {
          "item": "Rathian Mantle",
          "rate": "1%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Rathian Shard",
          "rate": "51%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rathian Cortex",
          "rate": "47%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rathian Ruby",
          "rate": "2%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "apex-zinogre",
    "name": "Apex Zinogre",
    "order": [
      "highRank",
      "masterRank"
    ],
    "highRank": {
      "target": [
        {
          "item": "Apex Shockshell",
          "rate": "5%"
        },
        {
          "item": "Zinogre Carapace",
          "rate": "39%"
        },
        {
          "item": "Zinogre Electrofur",
          "rate": "32%"
        },
        {
          "item": "Zinogre Tail",
          "rate": "4%"
        },
        {
          "item": "Fulgurbug",
          "rate": "12% x3"
        },
        {
          "item": "Zinogre Plate",
          "rate": "5%"
        },
        {
          "item": "Zinogre Jasper",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Zinogre Carapace",
          "rate": "36%",
          "part": "Body"
        },
        {
          "item": "Zinogre Electrofur",
          "rate": "29%",
          "part": "Body"
        },
        {
          "item": "Apex Shockshell",
          "rate": "9%",
          "part": "Body"
        },
        {
          "item": "Zinogre Claw+",
          "rate": "22%",
          "part": "Body"
        },
        {
          "item": "Zinogre Plate",
          "rate": "3%",
          "part": "Body"
        },
        {
          "item": "Zinogre Jasper",
          "rate": "1%",
          "part": "Body"
        },
        {
          "item": "Zinogre Tail",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Zinogre Carapace",
          "rate": "8%",
          "part": "Tail"
        },
        {
          "item": "Zinogre Plate",
          "rate": "7%",
          "part": "Tail"
        },
        {
          "item": "Zinogre Jasper",
          "rate": "5%",
          "part": "Tail"
        },
        {
          "item": "Fulgurbug",
          "rate": "90% x2",
          "part": "Unique"
        },
        {
          "item": "Apex Shockshell",
          "rate": "10%",
          "part": "Unique"
        }
      ],
      "breaks": [
        {
          "item": "Zinogre Horn+",
          "rate": "90%",
          "part": "Head"
        },
        {
          "item": "Zinogre Plate",
          "rate": "7%",
          "part": "Head"
        },
        {
          "item": "Zinogre Jasper",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Zinogre Claw+",
          "rate": "70%",
          "part": "Hind Leg"
        },
        {
          "item": "Zinogre Claw+",
          "rate": "20% x2",
          "part": "Hind Leg"
        },
        {
          "item": "Apex Shockshell",
          "rate": "10%",
          "part": "Hind Leg"
        },
        {
          "item": "Apex Shockshell",
          "rate": "70%",
          "part": "Left Arm"
        },
        {
          "item": "Zinogre Electrofur",
          "rate": "30%",
          "part": "Left Arm"
        }
      ],
      "drops": [
        {
          "item": "Zinogre Carapace",
          "rate": "43%"
        },
        {
          "item": "Fulgurbug",
          "rate": "15% x2"
        },
        {
          "item": "Zinogre Jasper",
          "rate": "2%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Zinogre Carapace",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Zinogre Electrofur",
          "rate": "38%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Zinogre Claw+",
          "rate": "12%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Apex Shockshell",
          "rate": "5%"
        },
        {
          "item": "Zinogre Cortex",
          "rate": "13%"
        },
        {
          "item": "Zinogre Electrofur+",
          "rate": "15%"
        },
        {
          "item": "Zinogre Deathly Shocker",
          "rate": "15%"
        },
        {
          "item": "Zinogre Lash",
          "rate": "8%"
        },
        {
          "item": "Melding Blood",
          "rate": "40%"
        },
        {
          "item": "Zinogre Skymerald",
          "rate": "4%"
        }
      ],
      "carve": [
        {
          "item": "Zinogre Cortex",
          "rate": "23%",
          "part": "Body"
        },
        {
          "item": "Zinogre Electrofur+",
          "rate": "22%",
          "part": "Body"
        },
        {
          "item": "Zinogre Deathly Shocker",
          "rate": "19%",
          "part": "Body"
        },
        {
          "item": "Zinogre Hardclaw",
          "rate": "22%",
          "part": "Body"
        },
        {
          "item": "Apex Shockshell",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Zinogre Skymerald",
          "rate": "2%",
          "part": "Body"
        },
        {
          "item": "Zinogre Lash",
          "rate": "85%",
          "part": "Tail"
        },
        {
          "item": "Zinogre Cortex",
          "rate": "10%",
          "part": "Tail"
        },
        {
          "item": "Zinogre Skymerald",
          "rate": "5%",
          "part": "Tail"
        },
        {
          "item": "Fulgurbug",
          "rate": "70% x3",
          "part": "Unique"
        },
        {
          "item": "Apex Shockshell",
          "rate": "30%",
          "part": "Unique"
        }
      ],
      "breaks": [
        {
          "item": "Zinogre Hardhorn",
          "rate": "95%",
          "part": "Head"
        },
        {
          "item": "Zinogre Skymerald",
          "rate": "5%",
          "part": "Head"
        },
        {
          "item": "Zinogre Hardclaw",
          "rate": "70%",
          "part": "Hind Leg"
        },
        {
          "item": "Zinogre Hardclaw",
          "rate": "20% x2",
          "part": "Hind Leg"
        },
        {
          "item": "Apex Shockshell",
          "rate": "10%",
          "part": "Hind Leg"
        },
        {
          "item": "Apex Shockshell",
          "rate": "70%",
          "part": "Left Arm"
        },
        {
          "item": "Zinogre Electrofur+",
          "rate": "30%",
          "part": "Left Arm"
        }
      ],
      "drops": [
        {
          "item": "Zinogre Cortex",
          "rate": "33%"
        },
        {
          "item": "Zinogre Electrofur+",
          "rate": "15%"
        },
        {
          "item": "Zinogre Skymerald",
          "rate": "2%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Zinogre Cortex",
          "rate": "49%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Zinogre Electrofur+",
          "rate": "40%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Zinogre Hardclaw",
          "rate": "10%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Zinogre Jasper",
          "rate": "1%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "chaotic-gore-magala",
    "name": "Chaotic Gore Magala",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "carve": [
        {
          "item": "Chaos Scale",
          "rate": "38%",
          "part": "Body"
        },
        {
          "item": "Gore Magala Cortex",
          "rate": "16%",
          "part": "Body"
        },
        {
          "item": "Gore Magala Shredder",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Antinomic Wing",
          "rate": "34%",
          "part": "Body"
        },
        {
          "item": "Contrary Scale",
          "rate": "2%",
          "part": "Body"
        },
        {
          "item": "Gore Magala Tail",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Chaos Scale",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Contrary Scale",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "target": [
        {
          "item": "Chaos Scale",
          "rate": "30%"
        },
        {
          "item": "Gore Magala Cortex",
          "rate": "16%"
        },
        {
          "item": "Gore Magala Shredder",
          "rate": "15%"
        },
        {
          "item": "Antinomic Wing",
          "rate": "36%"
        },
        {
          "item": "Contrary Scale",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Chaos Scale",
          "rate": "50%"
        },
        {
          "item": "Antinomic Wing",
          "rate": "37%"
        },
        {
          "item": "Diametrical Horn",
          "rate": "10%"
        },
        {
          "item": "Contrary Scale",
          "rate": "3%"
        }
      ],
      "breaks": [
        {
          "item": "S. Magala Hardhorn",
          "rate": "97%",
          "part": "Head"
        },
        {
          "item": "S. Magala Mantle",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Diametrical Horn",
          "rate": "97%",
          "part": "Wing"
        },
        {
          "item": "Contrary Scale",
          "rate": "3%",
          "part": "Wing"
        },
        {
          "item": "Antinomic Wing",
          "rate": "80%",
          "part": "Hind Leg"
        },
        {
          "item": "Chaos Scale",
          "rate": "20%",
          "part": "Hind Leg"
        },
        {
          "item": "S. Magala Purifier",
          "rate": "60%",
          "part": "Tail"
        },
        {
          "item": "S. Magala Purifier",
          "rate": "20% x2",
          "part": "Tail"
        },
        {
          "item": "S. Magala Cortex",
          "rate": "20%",
          "part": "Tail"
        },
        {
          "item": "Gore Magala Shredder",
          "rate": "40%",
          "part": "Wingarm"
        },
        {
          "item": "Gore Magala Shredder",
          "rate": "20% x2",
          "part": "Wingarm"
        },
        {
          "item": "Chaos Scale",
          "rate": "40%",
          "part": "Wingarm"
        }
      ],
      "drops": [
        {
          "item": "Chaos Scale",
          "rate": "42%"
        },
        {
          "item": "Gore Magala Cortex",
          "rate": "7%"
        },
        {
          "item": "Contrary Scale",
          "rate": "1%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "50%"
        },
        {
          "item": "Chaos Scale",
          "rate": "65%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Gore Magala Cortex",
          "rate": "20%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Gore Magala Shredder",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "furious-rajang",
    "name": "Furious Rajang",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "carve": [
        {
          "item": "Rajang Apoplexy",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Rajang Hardfang",
          "rate": "28%",
          "part": "Body"
        },
        {
          "item": "Rajang Hardclaw",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Gold Rajang Pelt+",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Rajang Heart",
          "rate": "3%",
          "part": "Body"
        }
      ],
      "target": [
        {
          "item": "Rajang Apoplexy",
          "rate": "20%"
        },
        {
          "item": "Rajang Hardclaw",
          "rate": "26%"
        },
        {
          "item": "Rajang Hardfang",
          "rate": "35%"
        },
        {
          "item": "Gold Rajang Pelt+",
          "rate": "14%"
        },
        {
          "item": "Rajang Heart",
          "rate": "5%"
        }
      ],
      "capture": [
        {
          "item": "Rajang Apoplexy",
          "rate": "33%"
        },
        {
          "item": "Rajang Hardclaw",
          "rate": "27%"
        },
        {
          "item": "Rajang Hardfang",
          "rate": "18% x2"
        },
        {
          "item": "Gold Rajang Pelt+",
          "rate": "16%"
        },
        {
          "item": "Rajang Heart",
          "rate": "6%"
        }
      ],
      "breaks": [
        {
          "item": "Ghoulish Gold Gorer",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Rajang Apoplexy",
          "rate": "20%",
          "part": "Head"
        },
        {
          "item": "Ghoulish Gold Gorer",
          "rate": "100%",
          "part": "Torso"
        },
        {
          "item": "Rajang Hardclaw",
          "rate": "100%",
          "part": "Left Foreleg"
        },
        {
          "item": "Rajang Hardclaw",
          "rate": "100%",
          "part": "Right Foreleg"
        }
      ],
      "drops": [
        {
          "item": "Rajang Apoplexy",
          "rate": "35%"
        },
        {
          "item": "Gold Rajang Pelt+",
          "rate": "15%"
        },
        {
          "item": "Large Beast Tear",
          "rate": "50%"
        },
        {
          "item": "Rajang Hardfang",
          "rate": "55%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Rajang Apoplexy",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Gold Rajang Pelt+",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "lucent-nargacuga",
    "name": "Lucent Nargacuga",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Lucent Narga Dapple",
          "rate": "22%"
        },
        {
          "item": "Lucent Narga Shard",
          "rate": "30%"
        },
        {
          "item": "Lucent Narga Hardfang",
          "rate": "17%"
        },
        {
          "item": "Lucent Narga Razor",
          "rate": "11%"
        },
        {
          "item": "Lucent Narga Tailspear",
          "rate": "12%"
        },
        {
          "item": "Nargacuga Lash",
          "rate": "6%"
        },
        {
          "item": "Cloudy Moonshard",
          "rate": "2%"
        }
      ],
      "carve": [
        {
          "item": "Lucent Narga Shard",
          "rate": "45%",
          "part": "Body"
        },
        {
          "item": "Lucent Narga Dapple",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Lucent Narga Hardfang",
          "rate": "16%",
          "part": "Body"
        },
        {
          "item": "Lucent Narga Razor",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Cloudy Moonshard",
          "rate": "2%",
          "part": "Body"
        },
        {
          "item": "Nargacuga Lash",
          "rate": "50%",
          "part": "Tail"
        },
        {
          "item": "Lucent Narga Tailspear",
          "rate": "45%",
          "part": "Tail"
        },
        {
          "item": "Cloudy Moonshard",
          "rate": "5%",
          "part": "Tail"
        }
      ],
      "capture": [
        {
          "item": "Lucent Narga Shard",
          "rate": "22%"
        },
        {
          "item": "Lucent Narga Dapple",
          "rate": "28%"
        },
        {
          "item": "Lucent Narga Hardfang",
          "rate": "23%"
        },
        {
          "item": "Lucent Narga Tailspear",
          "rate": "13% x2"
        },
        {
          "item": "Nargacuga Lash",
          "rate": "10%"
        },
        {
          "item": "Cloudy Moonshard",
          "rate": "4%"
        }
      ],
      "breaks": [
        {
          "item": "Lucent Narga Hardfang",
          "rate": "25%",
          "part": "Head"
        },
        {
          "item": "Lucent Narga Hardfang",
          "rate": "45% x2",
          "part": "Head"
        },
        {
          "item": "Lucent Narga Shard",
          "rate": "27% x2",
          "part": "Head"
        },
        {
          "item": "Cloudy Moonshard",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Lucent Narga Razor",
          "rate": "65%",
          "part": "Hind Leg"
        },
        {
          "item": "Lucent Narga Razor",
          "rate": "35% x2",
          "part": "Hind Leg"
        }
      ],
      "drops": [
        {
          "item": "Lucent Narga Shard",
          "rate": "29%"
        },
        {
          "item": "Lucent Narga Tailspear",
          "rate": "17%"
        },
        {
          "item": "Lucent Narga Hardfang",
          "rate": "13%"
        },
        {
          "item": "Cloudy Moonshard",
          "rate": "1%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Lucent Narga Shard",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Lucent Narga Dapple",
          "rate": "40%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Lucent Narga Hardfang",
          "rate": "10%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "narwa-the-allmother",
    "name": "Narwa the Allmother",
    "order": [
      "highRank",
      "masterRank"
    ],
    "highRank": {
      "target": [
        {
          "item": "Scale of Origin",
          "rate": "26%"
        },
        {
          "item": "Narwa Hide+",
          "rate": "28%"
        },
        {
          "item": "Horn of Origin",
          "rate": "16%"
        },
        {
          "item": "Narwa Sparksac",
          "rate": "12%"
        },
        {
          "item": "Narwa Tentacle",
          "rate": "15%"
        },
        {
          "item": "Orb of Origin",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Scale of Origin",
          "rate": "42%",
          "part": "Body"
        },
        {
          "item": "Narwa Hide+",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Narwa Claw+",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Narwa Tentacle",
          "rate": "11%",
          "part": "Body"
        },
        {
          "item": "Orb of Origin",
          "rate": "2%",
          "part": "Body"
        },
        {
          "item": "Narwa Sparksac",
          "rate": "75%",
          "part": "Tail"
        },
        {
          "item": "Scale of Origin",
          "rate": "20%",
          "part": "Tail"
        },
        {
          "item": "Orb of Origin",
          "rate": "5%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Horn of Origin",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Narwa Hide+",
          "rate": "15%",
          "part": "Head"
        },
        {
          "item": "Orb of Origin",
          "rate": "5%",
          "part": "Head"
        },
        {
          "item": "Narwa Claw+",
          "rate": "80% x2",
          "part": "Torso"
        },
        {
          "item": "Narwa Sparksac",
          "rate": "20%",
          "part": "Torso"
        },
        {
          "item": "Narwa Sparksac",
          "rate": "60%",
          "part": "Wingarm"
        },
        {
          "item": "Narwa Tentacle",
          "rate": "40% x2",
          "part": "Wingarm"
        },
        {
          "item": "Narwa Hide+",
          "rate": "87%",
          "part": "Tail"
        },
        {
          "item": "Thunder Serpent Orb",
          "rate": "5%",
          "part": "Tail"
        },
        {
          "item": "Wind Serpent Orb",
          "rate": "5%",
          "part": "Tail"
        },
        {
          "item": "Orb of Origin",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Scale of Origin",
          "rate": "42%"
        },
        {
          "item": "Elder Dragon Blood",
          "rate": "27%"
        },
        {
          "item": "Orb of Origin",
          "rate": "1%"
        },
        {
          "item": "Dragon Treasure",
          "rate": "30%"
        },
        {
          "item": "Scale of Origin",
          "rate": "65%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Narwa Hide+",
          "rate": "25%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Narwa Claw+",
          "rate": "10%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Scale of Origin+",
          "rate": "20%"
        },
        {
          "item": "Narwa Thickhide",
          "rate": "31%"
        },
        {
          "item": "Horn of Origin+",
          "rate": "12%"
        },
        {
          "item": "Narwa Lighting Sac",
          "rate": "14%"
        },
        {
          "item": "Narwa Tentacle+",
          "rate": "17%"
        },
        {
          "item": "Orb of Origin",
          "rate": "4%"
        },
        {
          "item": "Mantle of Origin",
          "rate": "2%"
        }
      ],
      "carve": [
        {
          "item": "Scale of Origin+",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Narwa Thickhide",
          "rate": "29%",
          "part": "Body"
        },
        {
          "item": "Narwa Hardclaw",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Narwa Tentacle+",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Mantle of Origin",
          "rate": "1%",
          "part": "Body"
        },
        {
          "item": "Narwa Lighting Sac",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Scale of Origin+",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Mantle of Origin",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Horn of Origin+",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Narwa Thickhide",
          "rate": "17%",
          "part": "Head"
        },
        {
          "item": "Mantle of Origin",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Narwa Hardclaw",
          "rate": "80% x2",
          "part": "Torso"
        },
        {
          "item": "Narwa Lighting Sac",
          "rate": "20%",
          "part": "Torso"
        },
        {
          "item": "Narwa Lighting Sac",
          "rate": "60%",
          "part": "Wingarm"
        },
        {
          "item": "Narwa Tentacle+",
          "rate": "40%",
          "part": "Wingarm"
        },
        {
          "item": "Narwa Thickhide",
          "rate": "83%",
          "part": "Tail"
        },
        {
          "item": "Thunder Serpent Orb",
          "rate": "7%",
          "part": "Tail"
        },
        {
          "item": "Wind Serpent Orb",
          "rate": "7%",
          "part": "Tail"
        },
        {
          "item": "Mantle of Origin",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Narwa Hardclaw",
          "rate": "20%"
        },
        {
          "item": "Narwa Lighting Sac",
          "rate": "30%"
        },
        {
          "item": "Pure Dragon Blood",
          "rate": "16%"
        },
        {
          "item": "Orb of Origin",
          "rate": "3%"
        },
        {
          "item": "Mantle of Origin",
          "rate": "1%"
        },
        {
          "item": "Old Dragon Treasure",
          "rate": "30%"
        },
        {
          "item": "Scale of Origin+",
          "rate": "55%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Narwa Thickhide",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Narwa Hardclaw",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "primordial-malzeno",
    "name": "Primordial Malzeno",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Malzeno Pureplate",
          "rate": "22%"
        },
        {
          "item": "Primordial Scale",
          "rate": "29%"
        },
        {
          "item": "Malzeno Beautifang",
          "rate": "20%"
        },
        {
          "item": "Madness Parasite",
          "rate": "16%"
        },
        {
          "item": "Primordial Tail",
          "rate": "10%"
        },
        {
          "item": "Primordial Bloodstone",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "Malzeno Pureplate",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Primordial Scale",
          "rate": "28%",
          "part": "Body"
        },
        {
          "item": "Malzeno Beautifang",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Shining Shieldwing",
          "rate": "13%",
          "part": "Body"
        },
        {
          "item": "Primordial Bloodstone",
          "rate": "1%",
          "part": "Body"
        },
        {
          "item": "Primordial Tail",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Malzeno Pureplate",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Primordial Bloodstone",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Malzeno Silverhorn",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Malzeno Beautifang",
          "rate": "17% x2",
          "part": "Head"
        },
        {
          "item": "Primordial Bloodstone",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Shining Shieldwing",
          "rate": "85%",
          "part": "Wing"
        },
        {
          "item": "Malzeno Pureplate",
          "rate": "15%",
          "part": "Wing"
        },
        {
          "item": "Malzeno Pureplate",
          "rate": "70%",
          "part": "Tail"
        },
        {
          "item": "Madness Parasite",
          "rate": "30% x2",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Malzeno Pureplate",
          "rate": "27%"
        },
        {
          "item": "Madness Parasite",
          "rate": "20%"
        },
        {
          "item": "Primordial Bloodstone",
          "rate": "3%"
        },
        {
          "item": "Old Dragon Treasure",
          "rate": "50%"
        },
        {
          "item": "Malzeno Pureplate",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Primordial Scale",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Madness Parasite",
          "rate": "20% x2",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "risen-shagaru-magala",
    "name": "Risen Shagaru Magala",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "S. Magala Cortex",
          "rate": "23%"
        },
        {
          "item": "S. Magala Shard",
          "rate": "32%"
        },
        {
          "item": "S. Magala Purifier",
          "rate": "19%"
        },
        {
          "item": "S. Magala Lash",
          "rate": "12%"
        },
        {
          "item": "S. Magala Hardhorn",
          "rate": "10%"
        },
        {
          "item": "S. Magala Mantle",
          "rate": "4%"
        }
      ],
      "carve": [
        {
          "item": "S. Magala Shard",
          "rate": "38%",
          "part": "Body"
        },
        {
          "item": "S. Magala Cortex",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "S. Magala Purifier",
          "rate": "17%",
          "part": "Body"
        },
        {
          "item": "S. Magala Lightwing",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "S. Magala Mantle",
          "rate": "3%",
          "part": "Body"
        },
        {
          "item": "S. Magala Lash",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "S. Magala Shard",
          "rate": "16%",
          "part": "Tail"
        },
        {
          "item": "S. Magala Mantle",
          "rate": "4%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "S. Magala Hardhorn",
          "rate": "96%",
          "part": "Head"
        },
        {
          "item": "S. Magala Mantle",
          "rate": "4%",
          "part": "Head"
        },
        {
          "item": "S. Magala Lightwing",
          "rate": "80%",
          "part": "Hind Leg"
        },
        {
          "item": "S. Magala Shard",
          "rate": "20%",
          "part": "Hind Leg"
        },
        {
          "item": "S. Magala Purifier",
          "rate": "60%",
          "part": "Tail"
        },
        {
          "item": "S. Magala Purifier",
          "rate": "20% x2",
          "part": "Tail"
        },
        {
          "item": "S. Magala Cortex",
          "rate": "20%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "S. Magala Shard",
          "rate": "44%"
        },
        {
          "item": "S. Magala Cortex",
          "rate": "15%"
        },
        {
          "item": "S. Magala Mantle",
          "rate": "1%"
        },
        {
          "item": "Old Dragon Treasure",
          "rate": "40%"
        },
        {
          "item": "S. Magala Shard",
          "rate": "55%",
          "part": "Wyvern Riding"
        },
        {
          "item": "S. Magala Cortex",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "S. Magala Purifier",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "seething-bazelgeuse",
    "name": "Seething Bazelgeuse",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "carve": [
        {
          "item": "Flickering Silvershell",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Bazelgeuse Shard",
          "rate": "12% x2",
          "part": "Body"
        },
        {
          "item": "Bazelgeuse Hardclaw",
          "rate": "9% x2",
          "part": "Body"
        },
        {
          "item": "Scorching Silverwing",
          "rate": "14%",
          "part": "Body"
        },
        {
          "item": "Distilled Blast Fluid",
          "rate": "23%",
          "part": "Body"
        },
        {
          "item": "Bazelgeuse Gem",
          "rate": "3%",
          "part": "Body"
        },
        {
          "item": "Bazelgeuse Mantle",
          "rate": "2%",
          "part": "Body"
        },
        {
          "item": "Bazelgeuse Flail",
          "rate": "70%",
          "part": "Tail"
        },
        {
          "item": "Flickering Silvershell",
          "rate": "26%",
          "part": "Tail"
        },
        {
          "item": "Bazelgeuse Mantle",
          "rate": "4%",
          "part": "Tail"
        }
      ],
      "target": [
        {
          "item": "Flickering Silvershell",
          "rate": "21%"
        },
        {
          "item": "Bazelgeuse Shard",
          "rate": "24%"
        },
        {
          "item": "Bazelgeuse Hardclaw",
          "rate": "16%"
        },
        {
          "item": "Distilled Blast Fluid",
          "rate": "17%"
        },
        {
          "item": "Scorching Silverwing",
          "rate": "15%"
        },
        {
          "item": "Bazelgeuse Gem",
          "rate": "4%"
        },
        {
          "item": "Bazelgeuse Mantle",
          "rate": "3%"
        }
      ],
      "capture": [
        {
          "item": "Flickering Silvershell",
          "rate": "21%"
        },
        {
          "item": "Bazelgeuse Shard",
          "rate": "15%"
        },
        {
          "item": "Bazelgeuse Hardclaw",
          "rate": "19%"
        },
        {
          "item": "Scorching Silverwing",
          "rate": "24%"
        },
        {
          "item": "Bazelgeuse Flail",
          "rate": "10%"
        },
        {
          "item": "Bazelgeuse Gem",
          "rate": "7%"
        },
        {
          "item": "Bazelgeuse Mantle",
          "rate": "4%"
        }
      ],
      "breaks": [
        {
          "item": "Distilled Blast Fluid",
          "rate": "70%",
          "part": "Head"
        },
        {
          "item": "Bazelgeuse Shard",
          "rate": "18% x2",
          "part": "Head"
        },
        {
          "item": "Bazelgeuse Gem",
          "rate": "8%",
          "part": "Head"
        },
        {
          "item": "Bazelgeuse Mantle",
          "rate": "4%",
          "part": "Head"
        },
        {
          "item": "Scorching Silverwing",
          "rate": "70%",
          "part": "Tail"
        },
        {
          "item": "Bazelgeuse Hardclaw",
          "rate": "30%",
          "part": "Tail"
        },
        {
          "item": "Flickering Silvershell",
          "rate": "68%",
          "part": "Wing"
        },
        {
          "item": "Distilled Blast Fluid",
          "rate": "30%",
          "part": "Wing"
        },
        {
          "item": "Bazelgeuse Mantle",
          "rate": "2%",
          "part": "Wing"
        }
      ],
      "drops": [
        {
          "item": "Flickering Silvershell",
          "rate": "49%"
        },
        {
          "item": "Bazelgeuse Hardclaw",
          "rate": "10%"
        },
        {
          "item": "Bazelgeuse Mantle",
          "rate": "1%"
        },
        {
          "item": "Large Wyvern Tear",
          "rate": "40%"
        },
        {
          "item": "Flickering Silvershell",
          "rate": "60%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Bazelgeuse Shard",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Bazelgeuse Hardclaw",
          "rate": "10%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "shagaru-magala",
    "name": "Shagaru Magala",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "S. Magala Cortex",
          "rate": "23%"
        },
        {
          "item": "S. Magala Shard",
          "rate": "33%"
        },
        {
          "item": "S. Magala Purifier",
          "rate": "19%"
        },
        {
          "item": "S. Magala Lash",
          "rate": "12%"
        },
        {
          "item": "S. Magala Hardhorn",
          "rate": "10%"
        },
        {
          "item": "S. Magala Mantle",
          "rate": "3%"
        }
      ],
      "carve": [
        {
          "item": "S. Magala Shard",
          "rate": "39%",
          "part": "Body"
        },
        {
          "item": "S. Magala Cortex",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "S. Magala Purifier",
          "rate": "17%",
          "part": "Body"
        },
        {
          "item": "S. Magala Lightwing",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "S. Magala Mantle",
          "rate": "2%",
          "part": "Body"
        },
        {
          "item": "S. Magala Lash",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "S. Magala Shard",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "S. Magala Mantle",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "S. Magala Hardhorn",
          "rate": "97%",
          "part": "Head"
        },
        {
          "item": "S. Magala Mantle",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "S. Magala Lightwing",
          "rate": "80%",
          "part": "Hind Leg"
        },
        {
          "item": "S. Magala Shard",
          "rate": "20%",
          "part": "Hind Leg"
        },
        {
          "item": "S. Magala Purifier",
          "rate": "60%",
          "part": "Tail"
        },
        {
          "item": "S. Magala Purifier",
          "rate": "20% x2",
          "part": "Tail"
        },
        {
          "item": "S. Magala Cortex",
          "rate": "20%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "S. Magala Shard",
          "rate": "34%"
        },
        {
          "item": "S. Magala Cortex",
          "rate": "15%"
        },
        {
          "item": "S. Magala Mantle",
          "rate": "1%"
        },
        {
          "item": "Dragon Treasure",
          "rate": "10%"
        },
        {
          "item": "Old Dragon Treasure",
          "rate": "40%"
        },
        {
          "item": "S. Magala Shard",
          "rate": "55%",
          "part": "Wyvern Riding"
        },
        {
          "item": "S. Magala Cortex",
          "rate": "30%",
          "part": "Wyvern Riding"
        },
        {
          "item": "S. Magala Purifier",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    }
  },
  {
    "id": "thunder-serpent-narwa",
    "name": "Thunder Serpent Narwa",
    "order": [
      "highRank",
      "masterRank"
    ],
    "highRank": {
      "target": [
        {
          "item": "Narwa Carapace",
          "rate": "22%"
        },
        {
          "item": "Narwa Hide+",
          "rate": "32%"
        },
        {
          "item": "Narwa Horn+",
          "rate": "12%"
        },
        {
          "item": "Narwa Sparksac",
          "rate": "14%"
        },
        {
          "item": "Narwa Tentacle",
          "rate": "18%"
        },
        {
          "item": "Thunder Serpent Orb",
          "rate": "2%"
        }
      ],
      "carve": [
        {
          "item": "Narwa Carapace",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Narwa Hide+",
          "rate": "29%",
          "part": "Body"
        },
        {
          "item": "Narwa Claw+",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Narwa Tentacle",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Thunder Serpent Orb",
          "rate": "1%",
          "part": "Body"
        },
        {
          "item": "Narwa Sparksac",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Narwa Carapace",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Thunder Serpent Orb",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Narwa Horn+",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Narwa Hide+",
          "rate": "17%",
          "part": "Head"
        },
        {
          "item": "Thunder Serpent Orb",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Narwa Claw+",
          "rate": "80% x2",
          "part": "Torso"
        },
        {
          "item": "Narwa Sparksac",
          "rate": "20%",
          "part": "Torso"
        },
        {
          "item": "Narwa Sparksac",
          "rate": "60%",
          "part": "Wingarm"
        },
        {
          "item": "Narwa Tentacle",
          "rate": "40%",
          "part": "Wingarm"
        },
        {
          "item": "Narwa Hide+",
          "rate": "97%",
          "part": "Tail"
        },
        {
          "item": "Thunder Serpent Orb",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Dragon Treasure",
          "rate": "29%"
        },
        {
          "item": "Narwa Claw+",
          "rate": "20%"
        },
        {
          "item": "Narwa Sparksac",
          "rate": "30%"
        },
        {
          "item": "Elder Dragon Blood",
          "rate": "20%"
        },
        {
          "item": "Thunder Serpent Orb",
          "rate": "1%"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Narwa Carapace",
          "rate": "22%"
        },
        {
          "item": "Narwa Hide+",
          "rate": "32%"
        },
        {
          "item": "Narwa Horn+",
          "rate": "12%"
        },
        {
          "item": "Narwa Sparksac",
          "rate": "14%"
        },
        {
          "item": "Narwa Tentacle",
          "rate": "18%"
        },
        {
          "item": "Thunder Serpent Orb",
          "rate": "2%"
        }
      ],
      "carve": [
        {
          "item": "Narwa Carapace",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Narwa Hide+",
          "rate": "29%",
          "part": "Body"
        },
        {
          "item": "Narwa Claw+",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Narwa Tentacle",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Thunder Serpent Orb",
          "rate": "1%",
          "part": "Body"
        },
        {
          "item": "Narwa Sparksac",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Narwa Carapace",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Thunder Serpent Orb",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Narwa Horn+",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Narwa Hide+",
          "rate": "17%",
          "part": "Head"
        },
        {
          "item": "Thunder Serpent Orb",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Narwa Claw+",
          "rate": "80% x2",
          "part": "Torso"
        },
        {
          "item": "Narwa Sparksac",
          "rate": "20%",
          "part": "Torso"
        },
        {
          "item": "Narwa Sparksac",
          "rate": "60%",
          "part": "Wingarm"
        },
        {
          "item": "Narwa Tentacle",
          "rate": "40%",
          "part": "Wingarm"
        },
        {
          "item": "Narwa Hide+",
          "rate": "97%",
          "part": "Tail"
        },
        {
          "item": "Thunder Serpent Orb",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "drops": [
        {
          "item": "Dragon Treasure",
          "rate": "29%"
        },
        {
          "item": "Narwa Claw+",
          "rate": "20%"
        },
        {
          "item": "Narwa Sparksac",
          "rate": "30%"
        },
        {
          "item": "Elder Dragon Blood",
          "rate": "20%"
        },
        {
          "item": "Thunder Serpent Orb",
          "rate": "1%"
        }
      ]
    }
  },
  {
    "id": "wind-serpent-ibushi",
    "name": "Wind Serpent Ibushi",
    "order": [
      "highRank",
      "masterRank"
    ],
    "highRank": {
      "target": [
        {
          "item": "Ibushi Carapace",
          "rate": "22%"
        },
        {
          "item": "Ibushi Hide+",
          "rate": "32%"
        },
        {
          "item": "Ibushi Horn+",
          "rate": "12%"
        },
        {
          "item": "Ibushi Windsac",
          "rate": "14%"
        },
        {
          "item": "Ibushi Bluespike",
          "rate": "18%"
        },
        {
          "item": "Wind Serpent Orb",
          "rate": "2%"
        }
      ],
      "carve": [
        {
          "item": "Ibushi Carapace",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Ibushi Hide+",
          "rate": "29%",
          "part": "Body"
        },
        {
          "item": "Ibushi Claw+",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Ibushi Bluespike",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Wind Serpent Orb",
          "rate": "1%",
          "part": "Body"
        },
        {
          "item": "Ibushi Windsac",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Ibushi Carapace",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Wind Serpent Orb",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Ibushi Horn+",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Ibushi Hide+",
          "rate": "17%",
          "part": "Head"
        },
        {
          "item": "Wind Serpent Orb",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Ibushi Claw+",
          "rate": "80% x2",
          "part": "Tail"
        },
        {
          "item": "Ibushi Windsac",
          "rate": "20%",
          "part": "Tail"
        },
        {
          "item": "Ibushi Windsac",
          "rate": "60%",
          "part": "Torso"
        },
        {
          "item": "Ibushi Bluespike",
          "rate": "40%",
          "part": "Torso"
        }
      ],
      "drops": [
        {
          "item": "Dragon Treasure",
          "rate": "29%"
        },
        {
          "item": "Ibushi Claw+",
          "rate": "20%"
        },
        {
          "item": "Ibushi Windsac",
          "rate": "30%"
        },
        {
          "item": "Ibushi Bluespike",
          "rate": "20%"
        },
        {
          "item": "Wind Serpent Orb",
          "rate": "1%"
        },
        {
          "item": "Ibushi Carapace",
          "rate": "50%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Ibushi Hide+",
          "rate": "35%",
          "part": "Wyvern Riding"
        },
        {
          "item": "Ibushi Claw+",
          "rate": "15%",
          "part": "Wyvern Riding"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Ibushi Cortex",
          "rate": "20%"
        },
        {
          "item": "Ibushi Finehide",
          "rate": "31%"
        },
        {
          "item": "Ibushi Hardhorn",
          "rate": "12%"
        },
        {
          "item": "Ibushi Windsac+",
          "rate": "14%"
        },
        {
          "item": "Ibushi Bluespike+",
          "rate": "17%"
        },
        {
          "item": "Wind Serpent Orb",
          "rate": "4%"
        },
        {
          "item": "Wind Dragonsphire",
          "rate": "2%"
        }
      ],
      "carve": [
        {
          "item": "Ibushi Cortex",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Ibushi Finehide",
          "rate": "29%",
          "part": "Body"
        },
        {
          "item": "Ibushi Hardclaw",
          "rate": "21%",
          "part": "Body"
        },
        {
          "item": "Ibushi Bluespike+",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Wind Dragonsphire",
          "rate": "1%",
          "part": "Body"
        },
        {
          "item": "Ibushi Windsac+",
          "rate": "80%",
          "part": "Tail"
        },
        {
          "item": "Ibushi Cortex",
          "rate": "17%",
          "part": "Tail"
        },
        {
          "item": "Wind Dragonsphire",
          "rate": "3%",
          "part": "Tail"
        }
      ],
      "breaks": [
        {
          "item": "Ibushi Hardhorn",
          "rate": "80%",
          "part": "Head"
        },
        {
          "item": "Ibushi Finehide",
          "rate": "17%",
          "part": "Head"
        },
        {
          "item": "Wind Dragonsphire",
          "rate": "3%",
          "part": "Head"
        },
        {
          "item": "Ibushi Hardclaw",
          "rate": "80% x2",
          "part": "Tail"
        },
        {
          "item": "Ibushi Windsac+",
          "rate": "20%",
          "part": "Tail"
        },
        {
          "item": "Ibushi Windsac+",
          "rate": "60%",
          "part": "Torso"
        },
        {
          "item": "Ibushi Bluespike+",
          "rate": "40%",
          "part": "Torso"
        }
      ],
      "drops": [
        {
          "item": "Ibushi Hardclaw",
          "rate": "20%"
        },
        {
          "item": "Ibushi Windsac+",
          "rate": "30%"
        },
        {
          "item": "Ibushi Bluespike+",
          "rate": "20%"
        },
        {
          "item": "Wind Serpent Orb",
          "rate": "3%"
        },
        {
          "item": "Wind Dragonsphire",
          "rate": "1%"
        },
        {
          "item": "Old Dragon Treasure",
          "rate": "26%"
        }
      ]
    }
  }
];
