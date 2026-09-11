// Small Monster Drops. Same reward schema as drops-data.js.
// Source: https://mhrise.kiranico.com/data/monsters?view=sm (database Ver16.0.0).
// Each monster retains its source URL. Only ranks with reward data are included.
// Exact duplicate reward entries are collapsed; quantities and distinct pools are preserved.
// Small monsters cannot be Wyvern Ridden: Altaroth feeding pools and Gargwa egg pools
// replace Kiranico's generic second-drop-pool label. Percentages are per pool, not trigger chances.
// Felyne/Melynx have drops only; their unused datamined carve pools are not displayed.
// Special-drop cross-checks:
// https://game8.co/games/Monster-Hunter-Rise/archives/316139 (Altaroth)
// https://game8.co/games/Monster-Hunter-Rise/archives/316135 (Gargwa)
// https://game8.co/games/Monster-Hunter-Rise/archives/316132 (Melynx)
window.SMALL_MONSTER_DROPS = [
  {
    "id": "altaroth",
    "name": "Altaroth",
    "source": "https://mhrise.kiranico.com/data/monsters/518617233",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Altaroth Stomach",
          "rate": "10% x2"
        },
        {
          "item": "Altaroth Stomach",
          "rate": "32%"
        },
        {
          "item": "Altaroth Jaw",
          "rate": "9% x2"
        },
        {
          "item": "Altaroth Jaw",
          "rate": "17%"
        },
        {
          "item": "Monster Fluid",
          "rate": "32%"
        }
      ],
      "carve": [
        {
          "item": "Altaroth Stomach",
          "rate": "50%",
          "part": "Body"
        },
        {
          "item": "Altaroth Jaw",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Monster Fluid",
          "rate": "25%",
          "part": "Body"
        }
      ],
      "drops": [
        {
          "item": "Ripened Mushroom",
          "rate": "90%",
          "part": "Mushroom-fed"
        },
        {
          "item": "Monster Fluid",
          "rate": "10%",
          "part": "Mushroom-fed"
        },
        {
          "item": "Nulberry",
          "rate": "90%",
          "part": "Berry-fed"
        },
        {
          "item": "Monster Fluid",
          "rate": "10%",
          "part": "Berry-fed"
        },
        {
          "item": "Honey",
          "rate": "90%",
          "part": "Honey-fed"
        },
        {
          "item": "Monster Fluid",
          "rate": "10%",
          "part": "Honey-fed"
        },
        {
          "item": "Fine Stomach",
          "rate": "100%",
          "part": "Fine Stomach drop"
        },
        {
          "item": "Altaroth Stomach",
          "rate": "50%",
          "part": "Material drop"
        },
        {
          "item": "Altaroth Jaw",
          "rate": "25%",
          "part": "Material drop"
        },
        {
          "item": "Monster Fluid",
          "rate": "25%",
          "part": "Material drop"
        }
      ]
    },
    "highRank": {
      "carve": [
        {
          "item": "Quality Stomach",
          "rate": "55%",
          "part": "Body"
        },
        {
          "item": "Altaroth Jaw",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Monster Broth",
          "rate": "25%",
          "part": "Body"
        }
      ],
      "drops": [
        {
          "item": "Ripened Mushroom",
          "rate": "90% x2",
          "part": "Mushroom-fed"
        },
        {
          "item": "Monster Broth",
          "rate": "10%",
          "part": "Mushroom-fed"
        },
        {
          "item": "Nulberry",
          "rate": "90% x2",
          "part": "Berry-fed"
        },
        {
          "item": "Monster Broth",
          "rate": "10%",
          "part": "Berry-fed"
        },
        {
          "item": "Honey",
          "rate": "90% x2",
          "part": "Honey-fed"
        },
        {
          "item": "Monster Broth",
          "rate": "10%",
          "part": "Honey-fed"
        },
        {
          "item": "Fine Stomach",
          "rate": "100%",
          "part": "Fine Stomach drop"
        },
        {
          "item": "Quality Stomach",
          "rate": "55%",
          "part": "Material drop"
        },
        {
          "item": "Altaroth Jaw",
          "rate": "20%",
          "part": "Material drop"
        },
        {
          "item": "Monster Broth",
          "rate": "25%",
          "part": "Material drop"
        }
      ]
    },
    "masterRank": {
      "carve": [
        {
          "item": "Prized Stomach",
          "rate": "55%",
          "part": "Body"
        },
        {
          "item": "Altaroth Jaw",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Monster Essence",
          "rate": "25%",
          "part": "Body"
        }
      ],
      "drops": [
        {
          "item": "Ripened Mushroom",
          "rate": "90% x3",
          "part": "Mushroom-fed"
        },
        {
          "item": "Monster Essence",
          "rate": "10%",
          "part": "Mushroom-fed"
        },
        {
          "item": "Nulberry",
          "rate": "90% x3",
          "part": "Berry-fed"
        },
        {
          "item": "Monster Essence",
          "rate": "10%",
          "part": "Berry-fed"
        },
        {
          "item": "Honey",
          "rate": "90% x3",
          "part": "Honey-fed"
        },
        {
          "item": "Monster Essence",
          "rate": "10%",
          "part": "Honey-fed"
        },
        {
          "item": "Fine Stomach",
          "rate": "100%",
          "part": "Fine Stomach drop"
        },
        {
          "item": "Prized Stomach",
          "rate": "55%",
          "part": "Material drop"
        },
        {
          "item": "Altaroth Jaw",
          "rate": "20%",
          "part": "Material drop"
        },
        {
          "item": "Monster Essence",
          "rate": "25%",
          "part": "Material drop"
        }
      ]
    }
  },
  {
    "id": "anteka",
    "name": "Anteka",
    "source": "https://mhrise.kiranico.com/data/monsters/1771235898",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "carve": [
        {
          "item": "Raw Meat",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Warm Pelt",
          "rate": "18%",
          "part": "Body"
        },
        {
          "item": "Anteka Antler",
          "rate": "40%",
          "part": "Body"
        },
        {
          "item": "White Liver",
          "rate": "10%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "carve": [
        {
          "item": "Raw Meat",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "High-quality Pelt",
          "rate": "18%",
          "part": "Body"
        },
        {
          "item": "Anteka Antler",
          "rate": "40%",
          "part": "Body"
        },
        {
          "item": "White Liver",
          "rate": "10%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "carve": [
        {
          "item": "Raw Meat",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Prized Pelt",
          "rate": "18%",
          "part": "Body"
        },
        {
          "item": "Anteka Proud Antler",
          "rate": "40%",
          "part": "Body"
        },
        {
          "item": "White Liver",
          "rate": "10%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "baggi",
    "name": "Baggi",
    "source": "https://mhrise.kiranico.com/data/monsters/9777038",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Baggi Scale",
          "rate": "17% x2"
        },
        {
          "item": "Baggi Scale",
          "rate": "13% x4"
        },
        {
          "item": "Baggi Hide",
          "rate": "29% x2"
        },
        {
          "item": "Baggi Hide",
          "rate": "10% x4"
        },
        {
          "item": "Sharp Fang",
          "rate": "23% x2"
        },
        {
          "item": "Sharp Fang",
          "rate": "8% x4"
        }
      ],
      "carve": [
        {
          "item": "Baggi Scale",
          "rate": "48%",
          "part": "Body"
        },
        {
          "item": "Baggi Hide",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Sharp Fang",
          "rate": "15%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Baggi Scale+",
          "rate": "12% x2"
        },
        {
          "item": "Baggi Scale+",
          "rate": "29%"
        },
        {
          "item": "Baggi Hide",
          "rate": "14% x2"
        },
        {
          "item": "Baggi Hide",
          "rate": "24%"
        },
        {
          "item": "Acute Fang",
          "rate": "21% x2"
        }
      ],
      "carve": [
        {
          "item": "Baggi Scale+",
          "rate": "60%",
          "part": "Body"
        },
        {
          "item": "Baggi Hide",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Acute Fang",
          "rate": "15%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "carve": [
        {
          "item": "Baggi Scale+",
          "rate": "50%",
          "part": "Body"
        },
        {
          "item": "Baggi Hide",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Crushing Fang",
          "rate": "25%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "bnahabra",
    "name": "Bnahabra",
    "source": "https://mhrise.kiranico.com/data/monsters/470812912",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Bnahabra Shell",
          "rate": "6% x2"
        },
        {
          "item": "Bnahabra Shell",
          "rate": "16%"
        },
        {
          "item": "Bnahabra Wing",
          "rate": "12% x2"
        },
        {
          "item": "Bnahabra Wing",
          "rate": "23%"
        },
        {
          "item": "Bnahabra Stinger",
          "rate": "20%"
        },
        {
          "item": "Monster Fluid",
          "rate": "13%"
        },
        {
          "item": "Flashbug",
          "rate": "10%"
        }
      ],
      "carve": [
        {
          "item": "Bnahabra Shell",
          "rate": "34%",
          "part": "Body"
        },
        {
          "item": "Bnahabra Wing",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Bnahabra Stinger",
          "rate": "22%",
          "part": "Body"
        },
        {
          "item": "Monster Fluid",
          "rate": "17%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "carve": [
        {
          "item": "Bnahabra Carapace",
          "rate": "39%",
          "part": "Body"
        },
        {
          "item": "Bnahabra Wing",
          "rate": "19%",
          "part": "Body"
        },
        {
          "item": "Bnahabra Stinger",
          "rate": "14%",
          "part": "Body"
        },
        {
          "item": "Monster Broth",
          "rate": "28%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "carve": [
        {
          "item": "Bnahabra Carapace",
          "rate": "33%",
          "part": "Body"
        },
        {
          "item": "Bnahabra Razorwing",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Bnahabra Stinger",
          "rate": "14%",
          "part": "Body"
        },
        {
          "item": "Monster Essence",
          "rate": "28%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "boggi",
    "name": "Boggi",
    "source": "https://mhrise.kiranico.com/data/monsters/1137262772",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Boggi Thickhide",
          "rate": "9% x2"
        },
        {
          "item": "Boggi Thickhide",
          "rate": "32%"
        },
        {
          "item": "Boggi Shard",
          "rate": "12% x2"
        },
        {
          "item": "Boggi Shard",
          "rate": "26%"
        },
        {
          "item": "Crushing Fang",
          "rate": "21%"
        }
      ],
      "carve": [
        {
          "item": "Boggi Thickhide",
          "rate": "52%",
          "part": "Body"
        },
        {
          "item": "Boggi Shard",
          "rate": "33%",
          "part": "Body"
        },
        {
          "item": "Crushing Fang",
          "rate": "15%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "bombadgy",
    "name": "Bombadgy",
    "source": "https://mhrise.kiranico.com/data/monsters/1181483312",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "carve": [
        {
          "item": "Raw Meat",
          "rate": "70%",
          "part": "Body"
        },
        {
          "item": "Bombadgy Igniter",
          "rate": "30%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "carve": [
        {
          "item": "Raw Meat",
          "rate": "70%",
          "part": "Body"
        },
        {
          "item": "Bombadgy Igniter",
          "rate": "30%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "carve": [
        {
          "item": "Raw Meat",
          "rate": "70%",
          "part": "Body"
        },
        {
          "item": "Bombadgy Activator",
          "rate": "30%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "bullfango",
    "name": "Bullfango",
    "source": "https://mhrise.kiranico.com/data/monsters/1829706311",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "carve": [
        {
          "item": "Bullfango Pelt",
          "rate": "60%",
          "part": "Body"
        },
        {
          "item": "Bullfango Head",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Sharp Fang",
          "rate": "20%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Bullfango Pelt+",
          "rate": "33%"
        },
        {
          "item": "Bullfango Pelt+",
          "rate": "12% x2"
        },
        {
          "item": "Bullfango Head",
          "rate": "15%"
        },
        {
          "item": "Jumbo Bone",
          "rate": "18% x2"
        },
        {
          "item": "Acute Fang",
          "rate": "9% x2"
        },
        {
          "item": "Blue Mushroom",
          "rate": "13% x4"
        }
      ],
      "carve": [
        {
          "item": "Bullfango Pelt+",
          "rate": "50%",
          "part": "Body"
        },
        {
          "item": "Bullfango Head",
          "rate": "17%",
          "part": "Body"
        },
        {
          "item": "Jumbo Bone",
          "rate": "15%",
          "part": "Body"
        },
        {
          "item": "Acute Fang",
          "rate": "18%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "carve": [
        {
          "item": "Bullfango Thickfur",
          "rate": "50%",
          "part": "Body"
        },
        {
          "item": "Bullfango Head",
          "rate": "17%",
          "part": "Body"
        },
        {
          "item": "Massive Bone",
          "rate": "15%",
          "part": "Body"
        },
        {
          "item": "Crushing Fang",
          "rate": "18%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "ceanataur",
    "name": "Ceanataur",
    "source": "https://mhrise.kiranico.com/data/monsters/399612255",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Ceanataur Shell",
          "rate": "9% x2"
        },
        {
          "item": "Ceanataur Shell",
          "rate": "40%"
        },
        {
          "item": "Tough Claw",
          "rate": "13% x2"
        },
        {
          "item": "Tough Claw",
          "rate": "38%"
        }
      ],
      "carve": [
        {
          "item": "Ceanataur Shell",
          "rate": "48%",
          "part": "Body"
        },
        {
          "item": "Tough Claw",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Carapaceon Brains+",
          "rate": "20%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "delex",
    "name": "Delex",
    "source": "https://mhrise.kiranico.com/data/monsters/38260556",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Big Fin",
          "rate": "16% x2"
        },
        {
          "item": "Big Fin",
          "rate": "39%"
        },
        {
          "item": "Sharp Fang",
          "rate": "13% x2"
        },
        {
          "item": "Sharp Fang",
          "rate": "32%"
        }
      ],
      "carve": [
        {
          "item": "Monster Guts",
          "rate": "45%",
          "part": "Body"
        },
        {
          "item": "Sharp Fang",
          "rate": "15%",
          "part": "Body"
        },
        {
          "item": "Big Fin",
          "rate": "40%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "carve": [
        {
          "item": "Monster Guts",
          "rate": "40%",
          "part": "Body"
        },
        {
          "item": "Acute Fang",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Quality Fin",
          "rate": "40%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "carve": [
        {
          "item": "Monster Guts",
          "rate": "40%",
          "part": "Body"
        },
        {
          "item": "Crushing Fang",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Quality Fin",
          "rate": "30%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "felyne",
    "name": "Felyne",
    "source": "https://mhrise.kiranico.com/data/monsters/1744255757",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "drops": [
        {
          "item": "First-aid Med",
          "rate": "54%"
        },
        {
          "item": "Round Acorn",
          "rate": "32%"
        },
        {
          "item": "Pawprint Stamp",
          "rate": "14%"
        }
      ]
    },
    "highRank": {
      "drops": [
        {
          "item": "First-aid Med",
          "rate": "54%"
        },
        {
          "item": "Round Acorn",
          "rate": "32%"
        },
        {
          "item": "Pawprint Stamp",
          "rate": "14%"
        }
      ]
    },
    "masterRank": {
      "drops": [
        {
          "item": "First-aid Med",
          "rate": "54%"
        },
        {
          "item": "Round Acorn",
          "rate": "32%"
        },
        {
          "item": "Pawprint Ticket",
          "rate": "14%"
        }
      ]
    }
  },
  {
    "id": "gajau",
    "name": "Gajau",
    "source": "https://mhrise.kiranico.com/data/monsters/413407319",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "carve": [
        {
          "item": "Gajau Skin",
          "rate": "70%",
          "part": "Body"
        },
        {
          "item": "Gajau Whisker",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Sharp Fang",
          "rate": "10%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "carve": [
        {
          "item": "Gajau Scale",
          "rate": "70%",
          "part": "Body"
        },
        {
          "item": "Gajau Whisker+",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Acute Fang",
          "rate": "10%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Gajau Thickhide",
          "rate": "10% x2"
        },
        {
          "item": "Gajau Thickhide",
          "rate": "31%"
        },
        {
          "item": "Steel Gajau Whisker",
          "rate": "23%"
        },
        {
          "item": "Crushing Fang",
          "rate": "12% x2"
        },
        {
          "item": "Crushing Fang",
          "rate": "24%"
        }
      ],
      "carve": [
        {
          "item": "Gajau Thickhide",
          "rate": "70%",
          "part": "Body"
        },
        {
          "item": "Steel Gajau Whisker",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Crushing Fang",
          "rate": "10%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "gargwa",
    "name": "Gargwa",
    "source": "https://mhrise.kiranico.com/data/monsters/262999744",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "carve": [
        {
          "item": "Gargwa Feather",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Raw Meat",
          "rate": "60%",
          "part": "Body"
        },
        {
          "item": "Monster Bone S",
          "rate": "15%",
          "part": "Body"
        }
      ],
      "drops": [
        {
          "item": "Gargwa Guano",
          "rate": "60%"
        },
        {
          "item": "Herb",
          "rate": "40%"
        },
        {
          "item": "Gargwa Egg",
          "rate": "100%",
          "part": "Egg drop"
        },
        {
          "item": "Gold Gargwa Egg",
          "rate": "100%",
          "part": "Gold egg drop"
        }
      ]
    },
    "highRank": {
      "carve": [
        {
          "item": "Gargwa Feather",
          "rate": "35%",
          "part": "Body"
        },
        {
          "item": "Raw Meat",
          "rate": "60%",
          "part": "Body"
        },
        {
          "item": "Monster Bone S",
          "rate": "5%",
          "part": "Body"
        }
      ],
      "drops": [
        {
          "item": "Gargwa Guano",
          "rate": "60%"
        },
        {
          "item": "Herb",
          "rate": "40% x2"
        },
        {
          "item": "Gargwa Egg",
          "rate": "100%",
          "part": "Egg drop"
        },
        {
          "item": "Gold Gargwa Egg",
          "rate": "100%",
          "part": "Gold egg drop"
        }
      ]
    },
    "masterRank": {
      "carve": [
        {
          "item": "Gargwa Finefeather",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Raw Meat",
          "rate": "65%",
          "part": "Body"
        },
        {
          "item": "Monster Bone S",
          "rate": "5%",
          "part": "Body"
        }
      ],
      "drops": [
        {
          "item": "Gargwa Guano",
          "rate": "60%"
        },
        {
          "item": "Herb",
          "rate": "40% x3"
        },
        {
          "item": "Gargwa Egg",
          "rate": "100%",
          "part": "Egg drop"
        },
        {
          "item": "Gold Gargwa Egg",
          "rate": "100%",
          "part": "Gold egg drop"
        }
      ]
    }
  },
  {
    "id": "gowngoat",
    "name": "Gowngoat",
    "source": "https://mhrise.kiranico.com/data/monsters/1123029143",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Gowngoat Thickfur",
          "rate": "10% x2"
        },
        {
          "item": "Gowngoat Thickfur",
          "rate": "34%"
        },
        {
          "item": "Large Herbivore Bone",
          "rate": "13% x2"
        },
        {
          "item": "Large Herbivore Bone",
          "rate": "28%"
        },
        {
          "item": "Raw Meat",
          "rate": "15% x2"
        }
      ],
      "carve": [
        {
          "item": "Gowngoat Thickfur",
          "rate": "42%",
          "part": "Body"
        },
        {
          "item": "Large Herbivore Bone",
          "rate": "28%",
          "part": "Body"
        },
        {
          "item": "Gowngoat Fleeceball",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Raw Meat",
          "rate": "10%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "hermitaur",
    "name": "Hermitaur",
    "source": "https://mhrise.kiranico.com/data/monsters/385362366",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Tiny Hermitaur Shell",
          "rate": "10% x2"
        },
        {
          "item": "Tiny Hermitaur Shell",
          "rate": "42%"
        },
        {
          "item": "Tough Claw",
          "rate": "12% x2"
        },
        {
          "item": "Tough Claw",
          "rate": "36%"
        }
      ],
      "carve": [
        {
          "item": "Tiny Hermitaur Shell",
          "rate": "49%",
          "part": "Body"
        },
        {
          "item": "Tough Claw",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Carapaceon Brains+",
          "rate": "24%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "hornetaur",
    "name": "Hornetaur",
    "source": "https://mhrise.kiranico.com/data/monsters/1682217807",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Hornetaur Cortex",
          "rate": "9% x2"
        },
        {
          "item": "Hornetaur Cortex",
          "rate": "32%"
        },
        {
          "item": "Hornetaur Razorwing",
          "rate": "12% x2"
        },
        {
          "item": "Hornetaur Razorwing",
          "rate": "37%"
        },
        {
          "item": "Hornetaur Head",
          "rate": "10%"
        }
      ],
      "carve": [
        {
          "item": "Hornetaur Cortex",
          "rate": "40%",
          "part": "Body"
        },
        {
          "item": "Hornetaur Razorwing",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Hornetaur Head",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Monster Essence",
          "rate": "18%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "izuchi",
    "name": "Izuchi",
    "source": "https://mhrise.kiranico.com/data/monsters/1195733201",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Izuchi Tail",
          "rate": "12% x2"
        },
        {
          "item": "Izuchi Tail",
          "rate": "34%"
        },
        {
          "item": "Izuchi Pelt",
          "rate": "11% x2"
        },
        {
          "item": "Izuchi Pelt",
          "rate": "19%"
        },
        {
          "item": "Sharp Claw",
          "rate": "24%"
        }
      ],
      "carve": [
        {
          "item": "Izuchi Tail",
          "rate": "52%",
          "part": "Body"
        },
        {
          "item": "Izuchi Pelt",
          "rate": "33%",
          "part": "Body"
        },
        {
          "item": "Sharp Claw",
          "rate": "15%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Izuchi Pelt+",
          "rate": "12% x2"
        },
        {
          "item": "Izuchi Pelt+",
          "rate": "34%"
        },
        {
          "item": "Izuchi Tail",
          "rate": "11% x2"
        },
        {
          "item": "Izuchi Tail",
          "rate": "19%"
        },
        {
          "item": "Piercing Claw",
          "rate": "24%"
        }
      ],
      "carve": [
        {
          "item": "Izuchi Tail",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Izuchi Pelt+",
          "rate": "53%",
          "part": "Body"
        },
        {
          "item": "Piercing Claw",
          "rate": "15%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "carve": [
        {
          "item": "Izuchi Tail",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Heavy Izuchi Pelt",
          "rate": "53%",
          "part": "Body"
        },
        {
          "item": "Tough Claw",
          "rate": "15%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "jaggi",
    "name": "Jaggi",
    "source": "https://mhrise.kiranico.com/data/monsters/114986952",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Jaggi Hide",
          "rate": "8% x2"
        },
        {
          "item": "Jaggi Hide",
          "rate": "22%"
        },
        {
          "item": "Jaggi Scale",
          "rate": "14% x2"
        },
        {
          "item": "Jaggi Scale",
          "rate": "24%"
        },
        {
          "item": "Screamer Sac",
          "rate": "20%"
        },
        {
          "item": "Sharp Fang",
          "rate": "12% x2"
        }
      ],
      "carve": [
        {
          "item": "Jaggi Hide",
          "rate": "35%",
          "part": "Body"
        },
        {
          "item": "Jaggi Scale",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Screamer Sac",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Sharp Fang",
          "rate": "10%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "carve": [
        {
          "item": "Jaggi Hide+",
          "rate": "35%",
          "part": "Body"
        },
        {
          "item": "Jaggi Scale+",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Screamer Sac",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Acute Fang",
          "rate": "10%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "carve": [
        {
          "item": "Jaggi Piel",
          "rate": "35%",
          "part": "Body"
        },
        {
          "item": "Jaggi Shard",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Screamer Sac",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Crushing Fang",
          "rate": "10%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "jaggia",
    "name": "Jaggia",
    "source": "https://mhrise.kiranico.com/data/monsters/129236969",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Jaggi Scale",
          "rate": "8% x2"
        },
        {
          "item": "Jaggi Scale",
          "rate": "22%"
        },
        {
          "item": "Jaggi Hide",
          "rate": "14% x2"
        },
        {
          "item": "Jaggi Hide",
          "rate": "24%"
        },
        {
          "item": "Screamer Sac",
          "rate": "20%"
        },
        {
          "item": "Sharp Fang",
          "rate": "12% x2"
        }
      ],
      "carve": [
        {
          "item": "Jaggi Hide",
          "rate": "38%",
          "part": "Body"
        },
        {
          "item": "Jaggi Scale",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Screamer Sac",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Sharp Fang",
          "rate": "10%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "carve": [
        {
          "item": "Jaggi Hide+",
          "rate": "38%",
          "part": "Body"
        },
        {
          "item": "Jaggi Scale+",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Screamer Sac",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Acute Fang",
          "rate": "10%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "carve": [
        {
          "item": "Jaggi Piel",
          "rate": "38%",
          "part": "Body"
        },
        {
          "item": "Jaggi Shard",
          "rate": "34%",
          "part": "Body"
        },
        {
          "item": "Screamer Sac",
          "rate": "18%",
          "part": "Body"
        },
        {
          "item": "Crushing Fang",
          "rate": "10%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "jagras",
    "name": "Jagras",
    "source": "https://mhrise.kiranico.com/data/monsters/933125691",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Jagras Hide",
          "rate": "9% x2"
        },
        {
          "item": "Jagras Hide",
          "rate": "33%"
        },
        {
          "item": "Jagras Scale",
          "rate": "11% x2"
        },
        {
          "item": "Jagras Scale",
          "rate": "25%"
        },
        {
          "item": "Sharp Claw",
          "rate": "22% x2"
        }
      ],
      "carve": [
        {
          "item": "Jagras Hide",
          "rate": "53%",
          "part": "Body"
        },
        {
          "item": "Jagras Scale",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Sharp Claw",
          "rate": "15%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Jagras Hide+",
          "rate": "9% x2"
        },
        {
          "item": "Jagras Hide+",
          "rate": "33%"
        },
        {
          "item": "Jagras Scale+",
          "rate": "11% x2"
        },
        {
          "item": "Jagras Scale+",
          "rate": "25%"
        },
        {
          "item": "Piercing Claw",
          "rate": "22% x2"
        }
      ],
      "carve": [
        {
          "item": "Jagras Hide+",
          "rate": "53%",
          "part": "Body"
        },
        {
          "item": "Jagras Scale+",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Piercing Claw",
          "rate": "15%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "carve": [
        {
          "item": "Jagras Shard",
          "rate": "53%",
          "part": "Body"
        },
        {
          "item": "Jagras Hide+",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Tough Claw",
          "rate": "15%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "kelbi",
    "name": "Kelbi",
    "source": "https://mhrise.kiranico.com/data/monsters/2055863177",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "carve": [
        {
          "item": "Kelbi Horn",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Warm Pelt",
          "rate": "45%",
          "part": "Body"
        },
        {
          "item": "Raw Meat",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "White Liver",
          "rate": "15%",
          "part": "Body"
        }
      ],
      "drops": [
        {
          "item": "Kelbi Horn",
          "rate": "100%"
        }
      ]
    },
    "highRank": {
      "carve": [
        {
          "item": "Kelbi Horn",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "High-quality Pelt",
          "rate": "45%",
          "part": "Body"
        },
        {
          "item": "Raw Meat",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "White Liver",
          "rate": "15%",
          "part": "Body"
        }
      ],
      "drops": [
        {
          "item": "Kelbi Horn",
          "rate": "100%"
        }
      ]
    },
    "masterRank": {
      "carve": [
        {
          "item": "Kelbi Horn",
          "rate": "35%",
          "part": "Body"
        },
        {
          "item": "Prized Pelt",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Raw Meat",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "White Liver",
          "rate": "15%",
          "part": "Body"
        },
        {
          "item": "High-quality Pelt",
          "rate": "10%",
          "part": "Body"
        }
      ],
      "drops": [
        {
          "item": "Kelbi Horn",
          "rate": "100%"
        }
      ]
    }
  },
  {
    "id": "kestodon",
    "name": "Kestodon",
    "source": "https://mhrise.kiranico.com/data/monsters/826867193",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Kestodon Shell",
          "rate": "23% x2"
        },
        {
          "item": "Kestodon Shell",
          "rate": "27% x3"
        },
        {
          "item": "Kestodon Scalp",
          "rate": "32%"
        },
        {
          "item": "Kestodon Scalp",
          "rate": "18% x2"
        }
      ],
      "carve": [
        {
          "item": "Kestodon Shell",
          "rate": "80%",
          "part": "Body"
        },
        {
          "item": "Kestodon Scalp",
          "rate": "20%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Kestodon Carapace",
          "rate": "16% x2"
        },
        {
          "item": "Kestodon Carapace",
          "rate": "36%"
        },
        {
          "item": "Kestodon Scalp",
          "rate": "27%"
        },
        {
          "item": "Kestodon Scalp",
          "rate": "21% x2"
        }
      ],
      "carve": [
        {
          "item": "Kestodon Carapace",
          "rate": "70%",
          "part": "Body"
        },
        {
          "item": "Kestodon Scalp",
          "rate": "30%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "carve": [
        {
          "item": "Kestodon Husk",
          "rate": "70%",
          "part": "Body"
        },
        {
          "item": "Kestodon Scalp",
          "rate": "30%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "ludroth",
    "name": "Ludroth",
    "source": "https://mhrise.kiranico.com/data/monsters/51986285",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Hydro Hide",
          "rate": "10% x2"
        },
        {
          "item": "Hydro Hide",
          "rate": "29%"
        },
        {
          "item": "Immature Sponge",
          "rate": "12% x2"
        },
        {
          "item": "Immature Sponge",
          "rate": "16%"
        },
        {
          "item": "Sharp Claw",
          "rate": "21% x2"
        },
        {
          "item": "Raw Meat",
          "rate": "12% x2"
        }
      ],
      "carve": [
        {
          "item": "Hydro Hide",
          "rate": "52%",
          "part": "Body"
        },
        {
          "item": "Immature Sponge",
          "rate": "36%",
          "part": "Body"
        },
        {
          "item": "Sharp Claw",
          "rate": "12%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Hydro Hide+",
          "rate": "11% x2"
        },
        {
          "item": "Hydro Hide+",
          "rate": "31%"
        },
        {
          "item": "Immature Sponge",
          "rate": "21% x2"
        },
        {
          "item": "Piercing Claw",
          "rate": "27% x2"
        },
        {
          "item": "Raw Meat",
          "rate": "10% x3"
        }
      ],
      "carve": [
        {
          "item": "Hydro Hide+",
          "rate": "56%",
          "part": "Body"
        },
        {
          "item": "Immature Sponge",
          "rate": "28%",
          "part": "Body"
        },
        {
          "item": "Piercing Claw",
          "rate": "16%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Hydro Piel",
          "rate": "16% x2"
        },
        {
          "item": "Hydro Piel",
          "rate": "39%"
        },
        {
          "item": "Tough Claw",
          "rate": "11% x2"
        },
        {
          "item": "Tough Claw",
          "rate": "21%"
        },
        {
          "item": "Raw Meat",
          "rate": "13% x3"
        }
      ],
      "carve": [
        {
          "item": "Hydro Piel",
          "rate": "68%",
          "part": "Body"
        },
        {
          "item": "Tough Claw",
          "rate": "32%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "melynx",
    "name": "Melynx",
    "source": "https://mhrise.kiranico.com/data/monsters/1623747362",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "drops": [
        {
          "item": "Secret Stash",
          "rate": "52%"
        },
        {
          "item": "Ration",
          "rate": "28%"
        },
        {
          "item": "Pawprint Stamp",
          "rate": "20%"
        }
      ]
    },
    "highRank": {
      "drops": [
        {
          "item": "Secret Stash",
          "rate": "52%"
        },
        {
          "item": "Ration",
          "rate": "28%"
        },
        {
          "item": "Pawprint Stamp",
          "rate": "20%"
        }
      ]
    },
    "masterRank": {
      "drops": [
        {
          "item": "Secret Stash",
          "rate": "52%"
        },
        {
          "item": "Ration",
          "rate": "28%"
        },
        {
          "item": "Pawprint Ticket",
          "rate": "20%"
        }
      ]
    }
  },
  {
    "id": "popo",
    "name": "Popo",
    "source": "https://mhrise.kiranico.com/data/monsters/1876970084",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Raw Meat",
          "rate": "42%"
        },
        {
          "item": "Raw Meat",
          "rate": "23% x2"
        },
        {
          "item": "Jumbo Bone",
          "rate": "11%"
        },
        {
          "item": "Nulberry",
          "rate": "24% x2"
        }
      ],
      "carve": [
        {
          "item": "Raw Meat",
          "rate": "41%",
          "part": "Body"
        },
        {
          "item": "Popo Tongue",
          "rate": "53%",
          "part": "Body"
        },
        {
          "item": "Jumbo Bone",
          "rate": "6%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "carve": [
        {
          "item": "Raw Meat",
          "rate": "41%",
          "part": "Body"
        },
        {
          "item": "Popo Tongue",
          "rate": "53%",
          "part": "Body"
        },
        {
          "item": "Stoutbone",
          "rate": "6%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "carve": [
        {
          "item": "Raw Meat",
          "rate": "41%",
          "part": "Body"
        },
        {
          "item": "Popo Tongue",
          "rate": "53%",
          "part": "Body"
        },
        {
          "item": "Massive Bone",
          "rate": "6%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "pyrantula",
    "name": "Pyrantula",
    "source": "https://mhrise.kiranico.com/data/monsters/1869529590",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Pyrantula Maroon Thread",
          "rate": "12% x2"
        },
        {
          "item": "Pyrantula Maroon Thread",
          "rate": "37%"
        },
        {
          "item": "Tough Claw",
          "rate": "23%"
        },
        {
          "item": "Monster Essence",
          "rate": "8% x2"
        },
        {
          "item": "Monster Essence",
          "rate": "20%"
        }
      ],
      "carve": [
        {
          "item": "Pyrantula Maroon Thread",
          "rate": "52%",
          "part": "Body"
        },
        {
          "item": "Tough Claw",
          "rate": "17%",
          "part": "Body"
        },
        {
          "item": "Monster Essence",
          "rate": "31%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "rachnoid",
    "name": "Rachnoid",
    "source": "https://mhrise.kiranico.com/data/monsters/1075749110",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Rachnoid Silk",
          "rate": "9% x2"
        },
        {
          "item": "Rachnoid Silk",
          "rate": "41%"
        },
        {
          "item": "Sharp Claw",
          "rate": "27% x2"
        },
        {
          "item": "Monster Fluid",
          "rate": "7% x2"
        },
        {
          "item": "Monster Fluid",
          "rate": "16%"
        }
      ],
      "carve": [
        {
          "item": "Rachnoid Silk",
          "rate": "53%",
          "part": "Body"
        },
        {
          "item": "Sharp Claw",
          "rate": "15%",
          "part": "Body"
        },
        {
          "item": "Monster Fluid",
          "rate": "32%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Rachnoid Silk+",
          "rate": "9% x2"
        },
        {
          "item": "Rachnoid Silk+",
          "rate": "41%"
        },
        {
          "item": "Piercing Claw",
          "rate": "27% x2"
        },
        {
          "item": "Monster Broth",
          "rate": "7% x2"
        },
        {
          "item": "Monster Broth",
          "rate": "16%"
        }
      ],
      "carve": [
        {
          "item": "Rachnoid Silk+",
          "rate": "53%",
          "part": "Body"
        },
        {
          "item": "Piercing Claw",
          "rate": "15%",
          "part": "Body"
        },
        {
          "item": "Monster Broth",
          "rate": "32%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Rachnoid Mesmersilk",
          "rate": "12% x2"
        },
        {
          "item": "Rachnoid Mesmersilk",
          "rate": "38%"
        },
        {
          "item": "Tough Claw",
          "rate": "8% x2"
        },
        {
          "item": "Tough Claw",
          "rate": "19%"
        },
        {
          "item": "Monster Essence",
          "rate": "23%"
        }
      ],
      "carve": [
        {
          "item": "Rachnoid Mesmersilk",
          "rate": "53%",
          "part": "Body"
        },
        {
          "item": "Tough Claw",
          "rate": "15%",
          "part": "Body"
        },
        {
          "item": "Monster Essence",
          "rate": "32%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "remobra",
    "name": "Remobra",
    "source": "https://mhrise.kiranico.com/data/monsters/338098585",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "carve": [
        {
          "item": "Remobra Hide",
          "rate": "49%",
          "part": "Body"
        },
        {
          "item": "Striped Hide",
          "rate": "31%",
          "part": "Body"
        },
        {
          "item": "Remobra Head",
          "rate": "20%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "carve": [
        {
          "item": "Remobra Hide+",
          "rate": "54%",
          "part": "Body"
        },
        {
          "item": "Striped Hide",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Remobra Head",
          "rate": "16%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "target": [
        {
          "item": "Remobra Finehide",
          "rate": "12% x2"
        },
        {
          "item": "Remobra Finehide",
          "rate": "38%"
        },
        {
          "item": "Striped Finehide",
          "rate": "32%"
        },
        {
          "item": "Mighty Remobra Head",
          "rate": "18%"
        }
      ],
      "carve": [
        {
          "item": "Remobra Finehide",
          "rate": "54%",
          "part": "Body"
        },
        {
          "item": "Striped Finehide",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Mighty Remobra Head",
          "rate": "16%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "rhenoplos",
    "name": "Rhenoplos",
    "source": "https://mhrise.kiranico.com/data/monsters/322885843",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "carve": [
        {
          "item": "Rhenoplos Shell",
          "rate": "35%",
          "part": "Body"
        },
        {
          "item": "Rhenoplos Scalp",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Raw Meat",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Monster Bone M",
          "rate": "20%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Rhenoplos Carapace",
          "rate": "24% x2"
        },
        {
          "item": "Rhenoplos Carapace",
          "rate": "15% x3"
        },
        {
          "item": "Rhenoplos Scalp",
          "rate": "21%"
        },
        {
          "item": "Raw Meat",
          "rate": "25% x3"
        },
        {
          "item": "Monster Bone M",
          "rate": "15% x2"
        }
      ],
      "carve": [
        {
          "item": "Rhenoplos Carapace",
          "rate": "45%",
          "part": "Body"
        },
        {
          "item": "Rhenoplos Scalp",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Raw Meat",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Monster Bone M",
          "rate": "10%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "carve": [
        {
          "item": "Rhenoplos Carapace",
          "rate": "35%",
          "part": "Body"
        },
        {
          "item": "Rhenoplos Scalp",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Large Herbivore Bone",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Raw Meat",
          "rate": "25%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "slagtoth",
    "name": "Slagtoth",
    "source": "https://mhrise.kiranico.com/data/monsters/248241955",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "carve": [
        {
          "item": "Slagtoth Oil",
          "rate": "40%",
          "part": "Body"
        },
        {
          "item": "Slagtoth Hide",
          "rate": "40%",
          "part": "Body"
        },
        {
          "item": "Monster Bone M",
          "rate": "5%",
          "part": "Body"
        },
        {
          "item": "Raw Meat",
          "rate": "15%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "carve": [
        {
          "item": "Slagtoth Oil",
          "rate": "35%",
          "part": "Body"
        },
        {
          "item": "Slagtoth Hide+",
          "rate": "45%",
          "part": "Body"
        },
        {
          "item": "Monster Bone M",
          "rate": "5%",
          "part": "Body"
        },
        {
          "item": "Raw Meat",
          "rate": "15%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "carve": [
        {
          "item": "Slagtoth Oil",
          "rate": "35%",
          "part": "Body"
        },
        {
          "item": "Slagtoth Hide+",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Large Herbivore Bone",
          "rate": "20%",
          "part": "Body"
        },
        {
          "item": "Raw Meat",
          "rate": "15%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "uroktor",
    "name": "Uroktor",
    "source": "https://mhrise.kiranico.com/data/monsters/233991938",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "carve": [
        {
          "item": "Uroktor Scale",
          "rate": "72%",
          "part": "Body"
        },
        {
          "item": "Dragonfell Berry",
          "rate": "10%",
          "part": "Body"
        },
        {
          "item": "Sharp Claw",
          "rate": "18%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Uroktor Scale+",
          "rate": "10% x2"
        },
        {
          "item": "Uroktor Scale+",
          "rate": "35%"
        },
        {
          "item": "Piercing Claw",
          "rate": "16% x2"
        },
        {
          "item": "Piercing Claw",
          "rate": "27%"
        },
        {
          "item": "Dragonfell Berry",
          "rate": "12% x3"
        }
      ],
      "carve": [
        {
          "item": "Uroktor Scale+",
          "rate": "72%",
          "part": "Body"
        },
        {
          "item": "Dragonfell Berry",
          "rate": "10% x2",
          "part": "Body"
        },
        {
          "item": "Piercing Claw",
          "rate": "18%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "carve": [
        {
          "item": "Uroktor Shard",
          "rate": "66%",
          "part": "Body"
        },
        {
          "item": "Dragonfell Berry",
          "rate": "10% x2",
          "part": "Body"
        },
        {
          "item": "Tough Claw",
          "rate": "24%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "velociprey",
    "name": "Velociprey",
    "source": "https://mhrise.kiranico.com/data/monsters/1637997251",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Velociprey Shard",
          "rate": "9% x2"
        },
        {
          "item": "Velociprey Shard",
          "rate": "27%"
        },
        {
          "item": "Velociprey Thickhide",
          "rate": "12% x2"
        },
        {
          "item": "Velociprey Thickhide",
          "rate": "31%"
        },
        {
          "item": "Tough Claw",
          "rate": "21%"
        }
      ],
      "carve": [
        {
          "item": "Velociprey Shard",
          "rate": "48%",
          "part": "Body"
        },
        {
          "item": "Velociprey Thickhide",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Tough Claw",
          "rate": "20%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "vespoid",
    "name": "Vespoid",
    "source": "https://mhrise.kiranico.com/data/monsters/1696451436",
    "order": [
      "masterRank"
    ],
    "masterRank": {
      "target": [
        {
          "item": "Vespoid Cortex",
          "rate": "10% x2"
        },
        {
          "item": "Vespoid Cortex",
          "rate": "26%"
        },
        {
          "item": "Vespoid Razorwing",
          "rate": "12% x2"
        },
        {
          "item": "Vespoid Razorwing",
          "rate": "32%"
        },
        {
          "item": "Monster Essence",
          "rate": "20%"
        }
      ],
      "carve": [
        {
          "item": "Vespoid Cortex",
          "rate": "43%",
          "part": "Body"
        },
        {
          "item": "Vespoid Razorwing",
          "rate": "32%",
          "part": "Body"
        },
        {
          "item": "Monster Essence",
          "rate": "25%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "wroggi",
    "name": "Wroggi",
    "source": "https://mhrise.kiranico.com/data/monsters/143032033",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "carve": [
        {
          "item": "Wroggi Scale",
          "rate": "48%",
          "part": "Body"
        },
        {
          "item": "Wroggi Hide",
          "rate": "37%",
          "part": "Body"
        },
        {
          "item": "Sharp Fang",
          "rate": "15%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "target": [
        {
          "item": "Wroggi Scale+",
          "rate": "12% x2"
        },
        {
          "item": "Wroggi Scale+",
          "rate": "38%"
        },
        {
          "item": "Wroggi Hide",
          "rate": "16% x2"
        },
        {
          "item": "Acute Fang",
          "rate": "12% x4"
        },
        {
          "item": "Acute Fang",
          "rate": "22% x2"
        }
      ],
      "carve": [
        {
          "item": "Wroggi Scale+",
          "rate": "60%",
          "part": "Body"
        },
        {
          "item": "Wroggi Hide",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Acute Fang",
          "rate": "15%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "carve": [
        {
          "item": "Wroggi Scale+",
          "rate": "50%",
          "part": "Body"
        },
        {
          "item": "Wroggi Hide",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Crushing Fang",
          "rate": "25%",
          "part": "Body"
        }
      ]
    }
  },
  {
    "id": "zamite",
    "name": "Zamite",
    "source": "https://mhrise.kiranico.com/data/monsters/157265542",
    "order": [
      "lowRank",
      "highRank",
      "masterRank"
    ],
    "lowRank": {
      "target": [
        {
          "item": "Meaty Hide",
          "rate": "14% x2"
        },
        {
          "item": "Meaty Hide",
          "rate": "41%"
        },
        {
          "item": "Sharqskin Scale",
          "rate": "24%"
        },
        {
          "item": "Sharp Fang",
          "rate": "21% x2"
        }
      ],
      "carve": [
        {
          "item": "Meaty Hide",
          "rate": "38%",
          "part": "Body"
        },
        {
          "item": "Sharqskin Scale",
          "rate": "27%",
          "part": "Body"
        },
        {
          "item": "Sharp Fang",
          "rate": "12%",
          "part": "Body"
        },
        {
          "item": "Monster Guts",
          "rate": "23%",
          "part": "Body"
        }
      ]
    },
    "highRank": {
      "carve": [
        {
          "item": "Meaty Hide+",
          "rate": "40%",
          "part": "Body"
        },
        {
          "item": "Sharqskin Scale",
          "rate": "30%",
          "part": "Body"
        },
        {
          "item": "Acute Fang",
          "rate": "17%",
          "part": "Body"
        },
        {
          "item": "Monster Guts",
          "rate": "13%",
          "part": "Body"
        }
      ]
    },
    "masterRank": {
      "carve": [
        {
          "item": "Supple Piel",
          "rate": "35%",
          "part": "Body"
        },
        {
          "item": "Sharqskin Scale",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Crushing Fang",
          "rate": "25%",
          "part": "Body"
        },
        {
          "item": "Monster Guts",
          "rate": "15%",
          "part": "Body"
        }
      ]
    }
  }
];
