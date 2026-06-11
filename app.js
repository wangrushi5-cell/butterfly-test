const SIX = [
  { code: "E", state: "邂逅", icon: "🦋", colorName: "柔光粉", color: "#d99eaa", bg: "#f3d9dd", english: "ENCOUNTER", fragrance: "邂逅香", quote: "你仍然有被世界打动的能力。", family: "花香青梅调", keywords: "花香 · 青梅 · 命运感", season: "春夏", copy: "此刻的你，仍然保有被世界打动的能力。\n\n你容易被细节、关系、光影、气味和偶然的相遇触动。这不是脆弱，而是一种细腻的感知力。", hidden: "你没有说出口、但一直存在的清醒。", action: "拍下一个只有你注意到的美好瞬间。", actionCopy: "不需要解释，只需要感受。让今天从一个轻轻的心动开始。" },
  { code: "A", state: "觉醒", icon: "🦉", colorName: "清醒绿", color: "#7f9f85", bg: "#d9e6d9", english: "AWAKENING", fragrance: "觉醒香", quote: "清醒不是冷漠，是终于把自己也算进去。", family: "绿叶茶感调", keywords: "绿叶 · 茶感 · 意识苏醒", season: "秋冬", copy: "此刻的你，正在更清楚地看见自己。\n\n你开始知道什么值得靠近，什么需要保持距离；你也开始把自己的感受，放回选择之中。", hidden: "你没有说出口、但一直存在的变化渴望。", action: "对一件你不想答应的事说“不”。", actionCopy: "不用过度解释，也不用为真实感受道歉。清醒，是把自己放回选择之中。" },
  { code: "M", state: "蝶变", icon: "🦋", colorName: "深邃紫", color: "#8f76a1", bg: "#e4d8e9", english: "METAMORPHOSIS", fragrance: "蝶变香", quote: "你正在长出新的自己。", family: "紫调木质调", keywords: "紫调 · 木质 · 新我成形", season: "四季皆宜", copy: "此刻的你，正在长出新的自己。\n\n有些变化不会马上开花。它们先发生在安静处，发生在你重新整理自己、重新理解世界的时候。", hidden: "你没有说出口、但一直存在的绽放渴望。", action: "完成一个很小的整理动作。", actionCopy: "整理一张桌面、写下三句话，或出门走十分钟。新的循环，往往从一个小动作开始。" },
  { code: "B", state: "绽放", icon: "🦚", colorName: "明耀黄", color: "#d5a93c", bg: "#f5e8bd", english: "BLOOMING", fragrance: "绽放香", quote: "绽放不是炫耀，而是不再压低自己的光。", family: "明黄花果调", keywords: "花束 · 果香 · 由内而生的光", season: "春夏", copy: "此刻的你，正在允许自己被看见。\n\n你不必再故意压低自己的光，也不必因为害怕刺眼，而把自己藏起来。", hidden: "你没有说出口、但一直存在的守护力量。", action: "认真肯定自己一次。", actionCopy: "不是因为你完成了什么，而是因为你本来就值得被看见。" },
  { code: "G", state: "守护", icon: "🐘", colorName: "温暖橙", color: "#cb8656", bg: "#f1d6c2", english: "GUARDIAN", fragrance: "守护香", quote: "真正的守护，是温柔但有边界。", family: "暖橙琥珀木质调", keywords: "暖橙 · 琥珀 · 安全感", season: "秋冬", copy: "此刻的你，正在认真守住重要的人和事。\n\n你有很强的承托力，也很重视关系里的长久与安心。你像一盏暖灯，让身边的人觉得稳定。", hidden: "你没有说出口、但一直存在的共生智慧。", action: "把一个本想替别人承担的任务，还给它真正的主人。", actionCopy: "温柔不是替代别人生活。真正的守护，也包括守住自己的空间。" },
  { code: "C", state: "共生", icon: "🐋", colorName: "静境蓝", color: "#668b9b", bg: "#d6e4e9", english: "COEXISTENCE", fragrance: "共生香", quote: "平静不是退让，是终于能与自己共处。", family: "海洋龙涎调", keywords: "海洋 · 龙涎 · 静境", season: "四季皆宜", copy: "此刻的你，正在走向一种更安静、更成熟的状态。\n\n你不再急着证明，也不再把所有事情都变成输赢。你开始懂得，有些答案需要时间。", hidden: "你没有说出口、但一直存在的重新出发渴望。", action: "留 20 分钟给自己。", actionCopy: "不为任何人，不完成任何任务，只是安静地和自己待一会儿。" },
];
const CYCLE = ["E", "A", "M", "B", "G", "C"];
const CYCLE_COLORS = {
  E: "#edabc3",
  A: "#4baa52",
  M: "#8c3a91",
  B: "#ffd51b",
  G: "#ed681c",
  C: "#0d4298"
};
const ASSET_BY_CODE = {
  E: { guardian: "encounter.png", product: "encounter", accent: "#d99eaa" },
  A: { guardian: "awakening.png", product: "awakening", accent: "#7f9f85" },
  M: { guardian: "metamorphosis.png", product: "metamorphosis", accent: "#8f76a1" },
  B: { guardian: "blooming.png", product: "blooming", accent: "#d5a93c" },
  G: { guardian: "guardian.png", product: "guardian", accent: "#cb8656" },
  C: { guardian: "coexistence.png", product: "coexistence", accent: "#668b9b" }
};
const MATERIAL_ICONS = {
  "青梅": "◒", "花香": "✿", "白麝香": "◌", "绿叶": "⌁", "茶感": "◍", "苔感木质": "▧",
  "紫调花香": "✦", "愈创木": "▰", "广藿香": "◼", "柑橘": "☼", "花束": "✺", "柔软木质": "▱",
  "暖橙": "◉", "琥珀": "◆", "麝香木质": "◇", "海洋调": "≈", "龙涎香": "◈", "檀香": "△"
};
const SCENT_TIER_DETAILS = {
  "E": [
    {
      "tier": "前调",
      "title": "人海中认出彼此",
      "notes": [
        {
          "name": "香柠檬",
          "meaning": "初见时的明亮、打开心门、命运开始流动，像阳光第一次落进关系里，是一种“愿意靠近”的能量。"
        },
        {
          "name": "荔枝",
          "meaning": "心动、温柔吸引、被珍视的甜意，不是少女感，真正高级的荔枝是“情绪里的柔软”，像一句轻轻靠近的话。"
        },
        {
          "name": "黑醋栗",
          "meaning": "神秘吸引力、情绪深度、难以解释的磁场，让邂逅不只是甜，而是有灵魂张力。"
        },
        {
          "name": "西柚",
          "meaning": "清醒的悸动、自由感、新关系的空气感，像心跳突然加快时的一口呼吸。"
        }
      ]
    },
    {
      "tier": "中调",
      "title": "心意悄然靠近",
      "notes": [
        {
          "name": "玫瑰",
          "meaning": "爱与理解、女性情感能量、被认真感受，真正高级的玫瑰不是“恋爱”，而是“情感被温柔回应”。"
        },
        {
          "name": "梨",
          "meaning": "纯净、松弛、关系中的自然靠近，像没有防备的笑。"
        },
        {
          "name": "牡丹",
          "meaning": "女性生命力、盛放、柔软中的力量，不是攻击性的美，而是“舒服地做自己”。"
        },
        {
          "name": "雪松",
          "meaning": "安定感、信任、长久陪伴，像终于有人让你安心。"
        }
      ]
    },
    {
      "tier": "后调",
      "title": "原来真的有人懂你",
      "notes": [
        {
          "name": "降龙涎香醚",
          "meaning": "灵魂吸引力、关系余韵、命运感，像人与人之间难以解释的靠近，是一种会留下记忆的气息。"
        },
        {
          "name": "麝香",
          "meaning": "肌肤温度、安全感、情感归属，真正高级的麝香不是性感，而是“终于可以放松自己”。"
        }
      ]
    }
  ],
  "A": [
    {
      "tier": "前调",
      "title": "长夜中的微光",
      "notes": [
        {
          "name": "藏红花",
          "meaning": "精神觉知、内在力量、灵魂苏醒，有一种“意识被点亮”的神秘感。"
        },
        {
          "name": "橙子",
          "meaning": "生命能量、乐观、新的开始，像黑暗之后第一束光。"
        },
        {
          "name": "甜香",
          "meaning": "内心柔软、情绪修复、对世界重新打开。"
        }
      ]
    },
    {
      "tier": "中调",
      "title": "意识缓缓苏醒",
      "notes": [
        {
          "name": "龙涎香",
          "meaning": "深层意识、内在稳定、灵魂重量，不是浓烈，而是一种成熟后的安静力量。"
        },
        {
          "name": "茉莉（二氢茉莉酮酸甲酯 模拟茉莉气息）",
          "meaning": "空气感、灵性、意识扩张，是很多高级香水的“灵魂分子”，像光穿过空气。"
        }
      ]
    },
    {
      "tier": "后调",
      "title": "天亮后看见真实的自己",
      "notes": [
        {
          "name": "橡苔",
          "meaning": "真实、土地感、回归本心，像雨后森林的呼吸，让人从漂浮回到真实人生。"
        }
      ]
    }
  ],
  "M": [
    {
      "tier": "前调",
      "title": "被触动的瞬间",
      "notes": [
        {
          "name": "黑胡椒",
          "meaning": "生命张力、觉察、被击中的瞬间，像命运突然按下开始键。"
        },
        {
          "name": "香柠檬",
          "meaning": "新生、光感、打开变化。"
        },
        {
          "name": "焦糖",
          "meaning": "温度、情感包裹感、成长中的柔软，让蜕变不是冰冷的。"
        }
      ]
    },
    {
      "tier": "中调",
      "title": "沉淀与作茧",
      "notes": [
        {
          "name": "甘草",
          "meaning": "内在沉静、韧性、长时间积累后的力量，像安静地改变自己。"
        }
      ]
    },
    {
      "tier": "后调",
      "title": "在新的光里重新生长",
      "notes": [
        {
          "name": "愈创木",
          "meaning": "重建、深层能量、沉稳力量。"
        },
        {
          "name": "广藿香",
          "meaning": "大地能量、自我扎根、成熟。"
        },
        {
          "name": "安息香",
          "meaning": "疗愈、温暖、新生后的柔和。"
        },
        {
          "name": "雪松",
          "meaning": "稳定、成长后的笃定。"
        }
      ]
    }
  ],
  "B": [
    {
      "tier": "前调",
      "title": "晨光里的舒展",
      "notes": [
        {
          "name": "橘子",
          "meaning": "快乐、自由、轻盈生命力。"
        },
        {
          "name": "香柠檬",
          "meaning": "新生、光感、打开变化。"
        },
        {
          "name": "青柠",
          "meaning": "清透、清醒、活力。"
        },
        {
          "name": "果香",
          "meaning": "丰盛、青春生命感、情绪流动。"
        }
      ]
    },
    {
      "tier": "中调",
      "title": "终于活成自己的自在",
      "notes": [
        {
          "name": "白花",
          "meaning": "女性柔光、温柔能量、盛放感。"
        },
        {
          "name": "百合",
          "meaning": "纯净、自我完整、内在优雅。"
        },
        {
          "name": "水生调（三调呈现中已删除）",
          "meaning": "呼吸感、自由、无拘束。"
        },
        {
          "name": "大马士革玫瑰",
          "meaning": "丰盛爱意、女性成熟魅力。"
        }
      ]
    },
    {
      "tier": "后调",
      "title": "由内而生的光芒",
      "notes": [
        {
          "name": "龙涎香",
          "meaning": "深层意识、内在稳定、灵魂重量。"
        },
        {
          "name": "麝香",
          "meaning": "肌肤温度、安全感、情感归属。"
        },
        {
          "name": "香草",
          "meaning": "温暖、被爱感、长久陪伴，真正高级的香草是安心，不是甜腻。"
        }
      ]
    }
  ],
  "G": [
    {
      "tier": "前调",
      "title": "风息之后的安宁",
      "notes": [
        {
          "name": "橙子",
          "meaning": "生命能量、乐观、新的开始。"
        },
        {
          "name": "西柚",
          "meaning": "情绪净化、清新的开始、心灵透气感。"
        }
      ]
    },
    {
      "tier": "中调",
      "title": "内心缓缓安定下来",
      "notes": [
        {
          "name": "薄荷",
          "meaning": "清醒、放松、情绪降温，像终于松开的神经。"
        },
        {
          "name": "黑醋栗",
          "meaning": "内心深度、温柔中的力量。"
        }
      ]
    },
    {
      "tier": "后调",
      "title": "被温柔包裹的余温",
      "notes": [
        {
          "name": "麝香",
          "meaning": "安全感、陪伴、被接纳，像回到属于自己的地方。"
        }
      ]
    }
  ],
  "C": [
    {
      "tier": "前调",
      "title": "边界渐渐柔和",
      "notes": [
        {
          "name": "香柠檬",
          "meaning": "新生、光感、打开变化。"
        },
        {
          "name": "小豆蔻",
          "meaning": "灵性、温暖智慧、内在平衡，像情绪与世界重新连接。"
        },
        {
          "name": "胡椒",
          "meaning": "能量流动、意识苏醒。"
        }
      ]
    },
    {
      "tier": "中调",
      "title": "万物自在流经身体",
      "notes": [
        {
          "name": "雪松",
          "meaning": "安定感、信任、长久陪伴。"
        },
        {
          "name": "檀香",
          "meaning": "宁静、稳定、深层疗愈。"
        },
        {
          "name": "乳香",
          "meaning": "灵魂安定、神圣感、内在平和，不是宗教，而是人终于安静下来。"
        }
      ]
    },
    {
      "tier": "后调",
      "title": "与世界同频的安静",
      "notes": [
        {
          "name": "干龙涎香",
          "meaning": "时间沉淀、成熟、与世界融合。"
        },
        {
          "name": "麝香",
          "meaning": "安全感、陪伴、被接纳。"
        },
        {
          "name": "安息香",
          "meaning": "温暖归属、内心柔和。"
        }
      ]
    }
  ]
};
const PROFILE_DETAILS = {
  E: {
    selfView: "你会留意空气里的细节，也会把人与人之间很轻的变化放在心上。",
    othersView: "别人常常觉得你温柔、有审美，也容易被你的细腻感受力打动。",
    hiddenTalent: "你擅长发现美好，把普通日常变成值得收藏的片刻。",
    traits: "感知细腻、浪漫温柔、好奇心旺盛、共情力强",
    strengths: "审美感知、情绪捕捉、发现美好、人际温度",
    growthTask: "让温柔有边界，避免把太多情绪放进自己心里",
    scenes: "创意设计、品牌策划、花艺生活方式、人文教育、内容创作",
    energySource: "新鲜感、美好的细节、真诚连接、被理解的感觉、自然中的微小惊喜",
    energyDrain: "重复单调的日常、冷淡的氛围、长时间接住别人的情绪",
    bright: "你愿意被美好触动，也愿意用温柔回应世界。",
    reminder: "当你总是接住别人的情绪时，可能会忘记自己也需要被照顾。温柔不是无限承接。",
    guardianName: "柔光照狸",
    guardianCopy: "柔光照狸轻轻停在你肩头。它陪你重新被世界打动，也提醒你：每一次心动，都值得被温柔收藏。",
    poem: "「和羞走，倚门回首，却把青梅嗅。」",
    poemSource: "李清照《点绛唇》",
    poemRead: "最动人的不是羞怯，而是回首。那一瞬间的好奇、心动与试探，正像邂逅状态里的你。",
    scentMood: "花香青梅调，柔光轻盈，微甜初见。不是所有相遇都要大声，有些命运，只用气息就能说完。",
    materials: [["青梅", "说不清楚的熟悉", "像早就认识的人再次相遇"], ["花香", "柔软的靠近", "把心动留在很轻的地方"], ["白麝香", "干净的余温", "让温柔安静留下来"]],
    room: "为邂逅状态准备的房间，会保留柔光、花影与轻盈的气味层次。它适合把心动慢慢放大，也适合重新找回对世界的好奇。"
  },
  A: {
    selfView: "你正在更清楚地看见自己的边界，也更愿意把真实感受纳入选择。",
    othersView: "别人会感受到你的清醒、克制和判断力，也会信任你的稳定分析。",
    hiddenTalent: "你能在复杂关系里抓住重点，并让混乱慢慢回到清楚的位置。",
    traits: "理性清醒、边界清楚、独立思考、洞察深刻",
    strengths: "逻辑分析、独立判断、本质洞察、关键取舍",
    growthTask: "别让清醒替你藏起真实感受",
    scenes: "战略咨询、数据分析、法律法务、科研学术、独立创作",
    energySource: "独处的深度时间、看清真相后的豁然、逻辑自洽的思考、清楚的边界",
    energyDrain: "无意义社交、混乱关系、碎片化信息、模糊不清的承诺",
    bright: "你能看清方向，也敢把自己算进选择里。",
    reminder: "清醒是礼物，但不要让清醒变成一堵墙。你可以保持边界，也可以允许某些温暖慢慢靠近。",
    guardianName: "清醒照狸",
    guardianCopy: "清醒照狸安静地坐在你身边。它不催你，也不替你回答。它只是陪你慢慢看清：什么才是真正属于你的选择。",
    poem: "「知否？知否？应是绿肥红瘦。」",
    poemSource: "李清照《如梦令》",
    poemRead: "真正的清醒，是看见表象之后的真实。觉醒状态里的你，正在学会回到自己的判断。",
    scentMood: "绿叶茶感调，雨后清晨般干净利落。不是冷漠，而是终于把自己也算进去了。",
    materials: [["绿叶", "清晨的判断", "在混乱里看见方向"], ["茶感", "适度的距离", "让自己回到清楚"], ["苔感木质", "落地的边界", "把选择稳稳放回手里"]],
    room: "为觉醒状态准备的房间，会更清爽、克制、留白。它适合独处、梳理，也适合让答案在安静中慢慢显现。"
  },
  M: {
    selfView: "你正在重新整理自己，很多变化先发生在安静处，不必立刻对外说明。",
    othersView: "别人会觉得你有深度、有内在韧性，也在慢慢形成新的轮廓。",
    hiddenTalent: "你擅长把经历转化成新的理解，并在时间里长出更完整的自己。",
    traits: "正在更新、内在驱动、深度思考、创造力生长",
    strengths: "自我整理、承接变化、深度反思、重新开始",
    growthTask: "不要在反复思考里停留太久，给生活一点轻轻的流动",
    scenes: "艺术创作、内容写作、品牌重塑、研究策划、个人成长项目",
    energySource: "安静沉淀、写作整理、完成小改变、被允许慢慢来的空间",
    energyDrain: "被催促、被打断、过度解释自己、长时间反复思考却没有行动",
    bright: "你有重新整理自己的能力，也有慢慢更新的耐心。",
    reminder: "蝶变状态需要留意的是，不要在反复思考里停留太久。沉淀很重要，生活也需要一点轻轻的流动。",
    guardianName: "破茧照狸",
    guardianCopy: "破茧照狸安静地停在你身边。它知道，有些变化一开始并不清楚，也不需要急着解释。你只要给自己一点时间。",
    poem: "「九万里风鹏正举。风休住，蓬舟吹取三山去！」",
    poemSource: "李清照《渔家傲》",
    poemRead: "这不是急促的改变，而是一种向上的气。蝶变状态里的你，正在安静处积蓄力量。",
    scentMood: "紫调木质调，前调安静克制，中后调逐渐明亮有层次。每一层都是时间的礼物。",
    materials: [["紫调花香", "新轮廓浮现", "在安静里慢慢展开"], ["愈创木", "内在支撑", "让变化有可以站住的根"], ["广藿香", "时间的层次", "把旧经验整理成新力量"]],
    room: "为蝶变状态准备的房间，会更安静、深邃、有层次。它适合沉淀、整理，也适合给新的自己一点时间。"
  },
  B: {
    selfView: "你正在允许自己被看见，也愿意承认自己值得站在光里。",
    othersView: "别人会被你的明亮、热情和感染力带动，觉得你能点亮现场。",
    hiddenTalent: "你能把热爱表达出来，也能让周围的人重新相信自己的光。",
    traits: "自信表达、有感染力、热爱庆祝、愿意被看见",
    strengths: "舞台表现、社交点亮、带动气氛、激励他人",
    growthTask: "把一部分光留给自己，不只依赖外界回应",
    scenes: "演讲表达、销售、公关、活动策划、内容创作、品牌传播",
    energySource: "表达、庆祝、被真诚看见、完成有成就感的事、与人产生积极连接",
    energyDrain: "持续维持高能量状态、过度依赖外界回应、没有安静充电的时间",
    bright: "你愿意被看见，也能用自己的光点亮别人。",
    reminder: "被看见很好，但不要让外界回应决定你的价值。你的光不只属于热闹，也属于安静时的自己。",
    guardianName: "光芒照狸",
    guardianCopy: "光芒照狸停在你的掌心。它提醒你：你本来就有光。不需要借用别人的灯，也不需要等天黑才亮。",
    poem: "「何须浅碧深红色，自是花中第一流。」",
    poemSource: "李清照《鹧鸪天·桂花》",
    poemRead: "真正的绽放，不靠比较。你只是如你自己那样开放，就已经有光。",
    scentMood: "明黄花果调，鲜活透亮，自带引力。绽放不是炫耀，而是不再压低自己的光。",
    materials: [["柑橘", "明亮的开场", "把气氛轻轻点亮"], ["花束", "自然的吸引力", "允许自己站在光里"], ["柔软木质", "安静的底气", "让光芒不只属于热闹"]],
    room: "为绽放状态准备的房间，会更明亮、鲜活、有庆祝感。它适合表达，也适合把光留给自己。"
  },
  G: {
    selfView: "你很重视关系里的长久与安心，也愿意为重要的人和事保持稳定。",
    othersView: "别人常常把你当成可靠的后盾，会在你身边感到踏实。",
    hiddenTalent: "你擅长构建安全感，也能把细节照顾变成稳定的关系力量。",
    traits: "可靠温暖、重视关系、责任感强、愿意承托",
    strengths: "稳定陪伴、关系维护、空间构建、细节照顾",
    growthTask: "守护别人之前，也把自己放进守护范围",
    scenes: "服务管理、亲子教育、客户关系、空间运营、团队管理",
    energySource: "稳定关系、被信任、照顾好重要的人、看到身边人安心",
    energyDrain: "接住太多别人的情绪、长期替别人承担、忘了给自己留空间",
    bright: "你稳定、温暖、可靠，让重要的人感到安心。",
    reminder: "真正的守护不是一直承担。真正的守护，是把自己也放进被照顾的范围。",
    guardianName: "骑士照狸",
    guardianCopy: "骑士照狸守在你身旁。它懂你的温柔，也懂你的责任。它提醒你：守护美好，也要守住自己的边界。",
    poem: "「此情无计可消除，才下眉头，却上心头。」",
    poemSource: "李清照《一剪梅》",
    poemRead: "守护状态里的你，重情、念旧、珍惜关系。但真正成熟的情，是在温柔里也保有边界。",
    scentMood: "暖橙琥珀木质调，像一个让人安心的拥抱。它不张扬，却久久不散。",
    materials: [["暖橙", "靠近时的安心", "让关系有温度"], ["琥珀", "时间里的稳定", "把承诺慢慢留下"], ["麝香木质", "柔软的边界", "温柔地站在自己的位置"]],
    room: "为守护状态准备的房间，会更温暖、稳定、带有被照顾的包裹感。它适合慢下来，也适合把自己放回守护范围。"
  },
  C: {
    selfView: "你正在靠近一种更平静的状态，不急着证明，也不把所有事变成输赢。",
    othersView: "别人会感到你的成熟、包容和稳定，也会信任你处理关系的分寸。",
    hiddenTalent: "你能让复杂关系慢慢降噪，并在长期相处里保留温柔的秩序。",
    traits: "平静成熟、包容从容、善于联结、重视长期关系",
    strengths: "关系协调、内在秩序、长期主义、稳定判断",
    growthTask: "在关系里保留自己的声音，不把自己放得太轻",
    scenes: "高端服务、组织管理、文化策展、疗愈空间、长期客户经营",
    energySource: "平静空间、自然环境、长期稳定的关系、低噪音生活、内在秩序",
    energyDrain: "过度消耗型关系、频繁冲突、被迫证明自己、没有留白的生活",
    bright: "你正在学会与自己、他人和世界平静相处。",
    reminder: "平静不是把自己的声音放轻。在关系里保留自己的轮廓，也是一种成熟的共生。",
    guardianName: "静境照狸",
    guardianCopy: "静境照狸陪你坐在安静处。它不打扰，也不催促。它只是陪你慢慢学会：平静地与自己共处。",
    poem: "「枕上诗书闲处好，门前风景雨来佳。」",
    poemSource: "李清照《摊破浣溪沙》",
    poemRead: "共生状态里的你，正在靠近一种安静的丰盛。在生活的留白里，也能安放自己。",
    scentMood: "海洋龙涎调，安静、深远，像黄昏海边的风。不急着证明，也不急着解释。",
    materials: [["海洋调", "开阔的呼吸", "让关系慢慢降噪"], ["龙涎香", "安静的深度", "把时间变成稳定感"], ["檀香", "不争的秩序", "平静地回到自己"]],
    room: "为共生状态准备的房间，会更安静、开阔、有留白。它适合让身体和心一起降噪，也适合重新听见自己的声音。"
  }
};
const TOTAL = 18;
const TEST_ENTRY_PATH = `${location.origin}${location.pathname}`;
const DIMENSION_NAMES = SIX.map(x => x.state);
const PAPER_CONFIG = {
  total: 18,
  anchorTotal: 6,
  coreTotal: 6,
  supportTotal: 6,
  lockDays: 7,
  minDimensionExposure: 8,
  maxDimensionExposure: 16,
  maxSameScene: 4,
  requiredScenes: ["情绪", "关系", "独处", "工作", "价值观", "香气隐喻"],
  anchorMultiplier: 1.2
};
const STORAGE_KEYS = {
  lockedPaper: "butterfly_sfsc_locked_paper_v21",
  draft: "butterfly_sfsc_draft_v21",
  lastResult: "butterfly_sfsc_last_result_v21"
};
let rng, paper = [], answers = [], current = 0, rawScores = Array(6).fill(0), exposure = Array(6).fill(0), exposurePotential = Array(6).fill(0), lastResult, choosing = false;

const $ = (id) => document.getElementById(id);
function showScreen(id) { document.querySelectorAll(".screen").forEach(x => x.classList.remove("is-active")); $(id).classList.add("is-active"); window.scrollTo({ top: 0, behavior: "smooth" }); }
function createSeed() { return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10); }
function seededRandom(seed) { let h = 2166136261 >>> 0; for (const c of seed) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return { next() { h += h << 13; h ^= h >>> 7; h += h << 3; h ^= h >>> 17; h += h << 5; return (h >>> 0) / 4294967296; } }; }
function shuffle(arr) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng.next() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function questionDims(question) {
  return [...new Set((question.o || []).map(option => option.d).filter(dim => Number.isInteger(dim)))];
}
function questionScene(question) {
  return question.scene || "价值观";
}
function questionWeight(question) {
  const reliability = Number(question.reliability || .8);
  const discrimination = Number(question.discrimination || .8);
  return reliability * discrimination * (question.is_anchor ? PAPER_CONFIG.anchorMultiplier : 1);
}
function weightedPick(pool, count) {
  const selected = [], remaining = [...pool];
  while (selected.length < count && remaining.length) {
    const totalWeight = remaining.reduce((sum, question) => sum + Math.max(.01, questionWeight(question)), 0);
    let cursor = rng.next() * totalWeight;
    let index = 0;
    for (; index < remaining.length; index++) {
      cursor -= Math.max(.01, questionWeight(remaining[index]));
      if (cursor <= 0) break;
    }
    selected.push(remaining.splice(Math.min(index, remaining.length - 1), 1)[0]);
  }
  return selected;
}
function exposureCounts(questions) {
  const counts = Array(6).fill(0);
  questions.forEach(question => (question.o || []).forEach(option => { if (Number.isInteger(option.d)) counts[option.d]++; }));
  return counts;
}
function potentialCounts(questions) {
  const counts = Array(6).fill(0);
  questions.forEach(question => {
    const weight = questionWeight(question);
    (question.o || []).forEach(option => { if (Number.isInteger(option.d)) counts[option.d] += Number(option.score || 1) * weight; });
  });
  return counts;
}
function sceneCounts(questions) {
  return questions.reduce((counts, question) => {
    const scene = questionScene(question);
    counts[scene] = (counts[scene] || 0) + 1;
    return counts;
  }, {});
}
function paperPenalty(questions) {
  if (questions.length !== PAPER_CONFIG.total) return 9999;
  const counts = exposureCounts(questions), scenes = sceneCounts(questions);
  let penalty = 0;
  counts.forEach(count => {
    if (count < PAPER_CONFIG.minDimensionExposure) penalty += (PAPER_CONFIG.minDimensionExposure - count) * 8;
    if (count > PAPER_CONFIG.maxDimensionExposure) penalty += (count - PAPER_CONFIG.maxDimensionExposure) * 8;
  });
  Object.values(scenes).forEach(count => { if (count > PAPER_CONFIG.maxSameScene) penalty += (count - PAPER_CONFIG.maxSameScene) * 6; });
  PAPER_CONFIG.requiredScenes.forEach(scene => { if (!scenes[scene]) penalty += 10; });
  return penalty;
}
function canAddQuestion(selected, question) {
  if (selected.some(item => item.sourceId === question.sourceId)) return false;
  const scenes = sceneCounts(selected);
  return (scenes[questionScene(question)] || 0) < PAPER_CONFIG.maxSameScene;
}
function generatePaper(seed = createSeed()) {
  rng = seededRandom(seed);
  const bank = QUESTION_BANK.filter(question => (question.o || []).length === 4);
  const anchors = bank.filter(question => question.is_anchor);
  const cores = bank.filter(question => question.depth === "core" && !question.is_anchor);
  const supports = bank.filter(question => ["support", "light"].includes(question.depth) && !question.is_anchor);
  let bestPaper = [], bestPenalty = Infinity;
  for (let attempt = 0; attempt < 260; attempt++) {
    const selected = [];
    for (let dim = 0; dim < 6; dim++) {
      const candidates = anchors.filter(question => questionDims(question).includes(dim) && canAddQuestion(selected, question));
      const chosen = weightedPick(candidates, 1)[0];
      if (chosen) selected.push(chosen);
    }
    const addFrom = (pool, count, scene) => {
      const candidates = pool.filter(question => (!scene || questionScene(question) === scene) && canAddQuestion(selected, question));
      const chosen = weightedPick(candidates, count);
      chosen.forEach(question => { if (canAddQuestion(selected, question)) selected.push(question); });
      return chosen.length;
    };
    PAPER_CONFIG.requiredScenes.forEach(scene => {
      if (selected.length < PAPER_CONFIG.anchorTotal + PAPER_CONFIG.coreTotal && !sceneCounts(selected)[scene]) addFrom(cores, 1, scene);
    });
    let guard = 0;
    while (selected.length < PAPER_CONFIG.anchorTotal + PAPER_CONFIG.coreTotal && guard++ < 40) {
      if (!addFrom(cores, 1)) break;
    }
    guard = 0;
    while (selected.length < PAPER_CONFIG.total && guard++ < 60) {
      if (!addFrom(supports, 1)) break;
    }
    guard = 0;
    while (selected.length < PAPER_CONFIG.total && guard++ < 120) {
      const candidates = bank.filter(question => !selected.some(item => item.sourceId === question.sourceId));
      const chosen = weightedPick(candidates, 1)[0];
      if (!chosen) break;
      selected.push(chosen);
    }
    const candidatePaper = shuffle(selected).slice(0, PAPER_CONFIG.total);
    const penalty = paperPenalty(candidatePaper);
    if (penalty < bestPenalty) { bestPaper = candidatePaper; bestPenalty = penalty; }
    if (penalty === 0) break;
  }
  paper = bestPaper;
  exposure = exposureCounts(paper);
  exposurePotential = potentialCounts(paper);
  return { seed, questionIds: paper.map(question => question.id), questions: paper };
}
function storageRead(key) {
  try { return JSON.parse(localStorage.getItem(key) || "null"); } catch { return null; }
}
function storageWrite(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}
function storageRemove(key) {
  try { localStorage.removeItem(key); } catch {}
}
function isFresh(timestamp, days = PAPER_CONFIG.lockDays) {
  return timestamp && Date.now() - timestamp < days * 86400000;
}
function questionsFromIds(ids = []) {
  const byId = new Map(QUESTION_BANK.map(question => [question.id, question]));
  return ids.map(id => byId.get(id)).filter(Boolean);
}
function getOrCreateLockedPaper(forceNew = false) {
  const saved = !forceNew && storageRead(STORAGE_KEYS.lockedPaper);
  if (saved && isFresh(saved.createdAt) && Array.isArray(saved.questionIds)) {
    const lockedQuestions = questionsFromIds(saved.questionIds);
    if (lockedQuestions.length === PAPER_CONFIG.total) {
      paper = lockedQuestions;
      exposure = exposureCounts(paper);
      exposurePotential = potentialCounts(paper);
      return { ...saved, questions: paper, locked: true };
    }
  }
  const generated = generatePaper(createSeed());
  const payload = { seed: generated.seed, questionIds: generated.questionIds, createdAt: Date.now() };
  storageWrite(STORAGE_KEYS.lockedPaper, payload);
  return { ...payload, questions: paper, locked: false };
}
function loadDraft() {
  const draft = storageRead(STORAGE_KEYS.draft);
  if (!draft || !Array.isArray(draft.questionIds) || !isFresh(draft.createdAt)) return null;
  const draftQuestions = questionsFromIds(draft.questionIds);
  if (draftQuestions.length !== PAPER_CONFIG.total) return null;
  if ((draft.current || 0) >= PAPER_CONFIG.total) return null;
  return { ...draft, questions: draftQuestions };
}
function saveDraft() {
  if (!paper.length) return;
  storageWrite(STORAGE_KEYS.draft, {
    seed: storageRead(STORAGE_KEYS.lockedPaper)?.seed || "",
    questionIds: paper.map(question => question.id),
    current,
    answers,
    rawScores,
    createdAt: storageRead(STORAGE_KEYS.draft)?.createdAt || Date.now(),
    updatedAt: Date.now()
  });
}
function restoreDraft(draft) {
  paper = draft.questions;
  current = Number(draft.current || 0);
  answers = Array.isArray(draft.answers) ? draft.answers : [];
  rawScores = Array.isArray(draft.rawScores) ? draft.rawScores : Array(6).fill(0);
  exposure = exposureCounts(paper);
  exposurePotential = potentialCounts(paper);
}
function start() {
  const privacyCheckbox = $("privacy-checkbox");
  if (privacyCheckbox && !privacyCheckbox.checked) {
    toast("请先确认隐私协议后再开始测试");
    return;
  }
  history.replaceState(null, "", location.pathname);
  const draft = loadDraft();
  if (draft && (draft.answers || []).length) {
    const shouldContinue = confirm(`发现你有一份未完成的测试，已完成 ${draft.answers.length} / ${PAPER_CONFIG.total} 题。是否继续？`);
    if (shouldContinue) {
      restoreDraft(draft);
      showScreen("quiz-screen");
      renderQuestion();
      return;
    }
    storageRemove(STORAGE_KEYS.draft);
  }
  getOrCreateLockedPaper(false);
  answers = [];
  rawScores = Array(6).fill(0);
  current = 0;
  saveDraft();
  showScreen("quiz-screen");
  renderQuestion();
}
function restart() {
  history.replaceState(null, "", location.pathname);
  showScreen("intro-screen");
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function renderQuestion() {
  if (current >= paper.length) { calculateAndShow(); return; }
  choosing = false;
  const q = paper[current];
  if (!q) { toast("题目加载异常，请重新开始测试"); showScreen("intro-screen"); return; }
  $("question-index").textContent = String(current + 1).padStart(2, "0");
  $("progress-bar").style.width = `${((current + 1) / TOTAL) * 100}%`; $("question-text").textContent = q.q;
  $("back-button").style.visibility = current ? "visible" : "hidden";
  $("options").innerHTML = q.o.map((o, i) => `<button class="option" data-index="${i}"><span class="option-letter">${o.l || "ABCD"[i]}</span><span>${o.t}</span></button>`).join("");
  document.querySelectorAll(".option").forEach(btn => btn.addEventListener("click", () => choose(+btn.dataset.index)));
}
function choose(optionIndex) {
  if (choosing || current >= paper.length) return;
  choosing = true;
  const question = paper[current], option = question.o[optionIndex], dim = option.d;
  const points = Number(option.score || 1) * questionWeight(question);
  answers[current] = { optionIndex, dim, points }; rawScores[dim] += points;
  current++;
  saveDraft();
  if (current < TOTAL) { setTimeout(renderQuestion, 130); } else { setTimeout(calculateAndShow, 180); }
}
function back() {
  if (!current) return; current--; const prior = answers[current]; if (prior) rawScores[prior.dim] -= prior.points || 0; answers.length = current; saveDraft(); renderQuestion();
}
function calculateAndShow() {
  const avgPotential = exposurePotential.reduce((a, b) => a + b, 0) / 6;
  const normalized = rawScores.map((score, dim) => exposurePotential[dim] ? score * avgPotential / exposurePotential[dim] : 0);
  const ranked = normalized.map((score, index) => ({ index, score })).sort((a, b) => b.score - a.score || a.index - b.index);
  const primary = ranked[0].index, secondary = ranked[1].index;
  const next = SIX.findIndex(x => x.code === CYCLE[(CYCLE.indexOf(SIX[primary].code) + 1) % 6]);
  const mainScore = ranked[0].score || 0;
  const gap = mainScore ? Math.max(0, (ranked[0].score - ranked[1].score) / mainScore) : 0;
  const boundaryType = gap > .25 ? "high" : (gap >= .10 ? "standard" : "twin");
  lastResult = { primary, secondary, next, rawScores: [...rawScores], normalized, confidence: Math.round(gap * 10000) / 10000, boundaryType, code: SIX[primary].code + SIX[secondary].code + SIX[next].code };
  storageWrite(STORAGE_KEYS.lastResult, { ...lastResult, completedAt: Date.now(), questionIds: paper.map(question => question.id), answers });
  storageRemove(STORAGE_KEYS.draft);
  renderResult(); showScreen("result-screen");
}
function renderResult() {
  const { primary, secondary, next, code, boundaryType } = lastResult, p = SIX[primary], s = SIX[secondary], n = SIX[next];
  const pd = PROFILE_DETAILS[p.code], sd = PROFILE_DETAILS[s.code];
  const assets = ASSET_BY_CODE[p.code];
  const isTwin = boundaryType === "twin";
  document.documentElement.style.setProperty("--result-accent", assets.accent);
  document.documentElement.style.setProperty("--result-glow", p.bg);
  $("result-state").textContent = isTwin ? `${p.state} × ${s.state}` : `${p.state} · ${p.colorName}`;
  $("result-english").textContent = isTwin ? `${p.english} × ${s.english}` : `${p.english} STATE`;
  $("sfsc-code").textContent = code; $("result-quote").textContent = isTwin ? `“你正处在 ${p.state} 与 ${s.state} 两种状态之间。”` : `“${p.quote}”`;
  $("primary-fragrance").textContent = p.fragrance; $("primary-copy").textContent = p.copy; $("primary-family").textContent = p.family; $("primary-keywords").textContent = p.keywords; $("primary-season").textContent = p.season;
  $("scent-tier-map").innerHTML = scentTierCards(p.code);
  $("secondary-fragrance").textContent = `你的副香：${s.fragrance}`; $("secondary-copy").textContent = `你的副香是「${s.fragrance}」。\n\n这股能量可能没有被你放在最前面，却一直在影响你的选择、关系和感受方式。\n\n${sd.selfView}`;
  $("next-fragrance").textContent = `你的下一站香：${n.fragrance}`; $("next-copy").textContent = `${p.state}之后是${n.state}。\n\n${nextCopy(p.code)}\n\n下一站香：${n.fragrance}\n香气关键词：${n.keywords}`;
  $("action-title").textContent = p.action; $("action-copy").textContent = p.actionCopy;
  $("code-breakdown").innerHTML = [[p, isTwin ? "双主之一 · 此刻的你" : "主香 · 此刻的你"], [s, isTwin ? "双主之一 · 同样强烈的你" : "副香 · 隐藏的你"], [n, "下一站 · 正在生长的你"]].map(([x, label]) => `<div class="code-row"><b>${x.code}</b><span>${label}：${x.fragrance}</span></div>`).join("");
  $("cycle-path").innerHTML = `
    <div class="cycle-orbit" aria-hidden="true"></div>
    <div class="cycle-flow" aria-hidden="true">
      ${CYCLE.map((_, index) => `<i style="--a:${-60 + index * 60}deg">›</i>`).join("")}
    </div>
    <div class="cycle-center">
      <span>YOU ARE HERE</span>
      <strong>${p.state}</strong>
      <em>${p.code} · ${p.colorName}</em>
    </div>
    ${CYCLE.map((cycleCode, index) => {
      const item = SIX.find(x => x.code === cycleCode);
      const angle = -90 + index * 60;
      const rad = angle * Math.PI / 180;
      const x = 50 + Math.cos(rad) * 31;
      const y = 50 + Math.sin(rad) * 31;
      const active = cycleCode === p.code ? " is-active" : "";
      const nextStep = cycleCode === n.code ? " is-next" : "";
      return `<span class="cycle-dot${active}${nextStep}" style="--x:${x.toFixed(2)}%; --y:${y.toFixed(2)}%; --node-color:${CYCLE_COLORS[cycleCode]}; --label-x:${Math.cos(rad).toFixed(3)}; --label-y:${Math.sin(rad).toFixed(3)};"><i></i><b>${item.state}</b></span>`;
    }).join("")}
    <div class="cycle-flow-label"><span>当前：${p.state}</span><span>下一站：${n.state}</span></div>`;
  $("cycle-copy").textContent = `你当前的所属状态：${p.state}（${p.code}）\n顺时针流向下一站：${n.state}（${n.code}）\n\n六色不是六种固定人格，而是六种生命状态。不是定型，而是流转；不是判断，而是看见。`;
  $("three-view").innerHTML = cardList([["你眼中的自己", pd.selfView], ["别人看到的你", pd.othersView], ["你尚未察觉的天赋", pd.hiddenTalent]]);
  $("trait-map").innerHTML = traitCardList([["✧", "核心特质", pd.traits], ["◇", "核心优势", pd.strengths], ["⌁", "成长课题", pd.growthTask], ["◌", "适合场景", pd.scenes]]);
  $("energy-map").innerHTML = cardList([["能量来源", pd.energySource], ["能量消耗", pd.energyDrain]]);
  $("bright-reminder").innerHTML = cardList([["明亮面", pd.bright], ["温柔提醒", pd.reminder]]);
  $("guardian-title").textContent = pd.guardianName;
  $("guardian-copy").textContent = pd.guardianCopy;
  $("guardian-image").src = `./assets/guardians/${assets.guardian}`;
  $("guardian-image").alt = `${pd.guardianName}形象`;
  $("poem-card").innerHTML = `<blockquote>${pd.poem}</blockquote><p>${pd.poemSource}</p><span>${pd.poemRead}</span>`;
  $("product-card").innerHTML = `
    <figure class="product-line">
      <img src="./assets/products/product-line-overview.jpg" alt="蝴蝶坞香水产品线" />
      <figcaption>六色香水产品线</figcaption>
    </figure>
    <div class="product-visuals">
      <figure><img src="./assets/products/${assets.product}-front.jpg" alt="${p.fragrance}正面产品图" /><figcaption>正面</figcaption></figure>
      <figure><img src="./assets/products/${assets.product}-back.jpg" alt="${p.fragrance}反面产品图" /><figcaption>反面</figcaption></figure>
    </div>
    <div class="product-info">
      <strong>${p.fragrance} 10ml 主香认领装</strong>
      <span>此刻主香的气味信物，把今天的自己带回生活</span>
      <b>¥139</b>
      <button class="primary-button" type="button">认领我的主香 · ${p.fragrance} · 10ml</button>
    </div>`;
  $("room-copy").textContent = `测试让你看见自己，香水让你闻见自己，房间让你住进自己。\n\n${pd.room}`;
  drawHexagon(primary);
  renderShareModule();
  renderMemberModule();
}
function cardList(items) {
  return items.map(([title, text]) => `<div class="mini-card"><p>${title}</p><span>${text}</span></div>`).join("");
}
function traitCardList(items) {
  return items.map(([icon, title, text]) => `<div class="trait-card"><i>${icon}</i><p>${title}</p><span>${text}</span></div>`).join("");
}
function fieldList(items) {
  return items.map(([title, text]) => `<div class="field-row"><span>${title}</span><strong>${text}</strong></div>`).join("");
}
function scentTierCards(code) {
  return (SCENT_TIER_DETAILS[code] || []).map((item, index) => `
    <article class="scent-tier-card tier-${index + 1}">
      <i>${["Ⅰ", "Ⅱ", "Ⅲ"][index]}</i>
      <div>
        <span>${item.tier}｜${item.title}</span>
        <strong>${item.notes.map(note => note.name).join("、")}</strong>
      </div>
      <ul>${item.notes.map(note => `<li><b>${note.name}</b><em>${note.meaning}</em></li>`).join("")}</ul>
    </article>`).join("");
}
function nextCopy(code) {
  return {
    E: "当你重新被世界触动，下一步也许就是慢慢看清：什么真正重要，什么已经不必再讨好。",
    A: "当你已经看见真实，接下来可能需要一点时间重新整理自己。先让新的自己，在安静里慢慢成形。",
    M: "当新的轮廓慢慢长出来，你会以更自然的方式重新出现。不再躲开属于自己的光。",
    B: "当你的光被看见，也要学会珍惜它、保护它。真正成熟的光芒，懂得为自己留边界。",
    G: "当你学会温柔但有边界地守护，关系会慢慢走向更安静的平衡。",
    C: "当你终于能与自己平静共处，新的美好会再次靠近你。循环不是重复，而是一次更深的开始。"
  }[code];
}
function drawHexagon(primary) {
  const canvas = $("radar-chart"), ctx = canvas.getContext("2d"), W = canvas.width, H = canvas.height, cx = W / 2, cy = H / 2, r = 170;
  ctx.clearRect(0, 0, W, H); const angle = i => -Math.PI / 2 + i * Math.PI / 3;
  for (let layer = 1; layer <= 4; layer++) { ctx.beginPath(); for (let i = 0; i < 6; i++) { const rr = r * layer / 4, x = cx + Math.cos(angle(i)) * rr, y = cy + Math.sin(angle(i)) * rr; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); } ctx.closePath(); ctx.strokeStyle = "#ccbdb133"; ctx.stroke(); }
  const scores = lastResult?.normalized?.length ? lastResult.normalized : rawScores;
  const max = Math.max(...scores, 1), vals = scores.map(s => .12 + s / max * .86);
  ctx.beginPath(); vals.forEach((v, i) => { const x = cx + Math.cos(angle(i)) * r * v, y = cy + Math.sin(angle(i)) * r * v; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }); ctx.closePath(); ctx.fillStyle = SIX[primary].bg + "bb"; ctx.fill(); ctx.strokeStyle = SIX[primary].color; ctx.lineWidth = 4; ctx.stroke();
  vals.forEach((v, i) => {
    const dotX = cx + Math.cos(angle(i)) * r * v, dotY = cy + Math.sin(angle(i)) * r * v;
    ctx.beginPath(); ctx.arc(dotX, dotY, i === primary ? 7 : 5, 0, Math.PI * 2);
    ctx.fillStyle = SIX[i].color; ctx.fill();
    ctx.strokeStyle = "#fffaf4"; ctx.lineWidth = 3; ctx.stroke();
  });
  SIX.forEach((x, i) => {
    const px = cx + Math.cos(angle(i)) * (r + 62), py = cy + Math.sin(angle(i)) * (r + 62);
    const score = Math.round((scores[i] / max) * 100);
    ctx.fillStyle = x.color; ctx.font = `${i === primary ? "700" : "500"} 22px PingFang SC`; ctx.textAlign = "center"; ctx.fillText(`${x.code} · ${x.state}`, px, py - 8);
    ctx.fillStyle = i === primary ? x.color : "#8e8075"; ctx.font = `${i === primary ? "700" : "500"} 18px PingFang SC`; ctx.fillText(`${score}分`, px, py + 22);
  });
}
function reportPayload() {
  const { primary, secondary, next, code, rawScores, boundaryType } = lastResult;
  return { primary, secondary, next, code, rawScores, boundaryType };
}
function encodeReport(payload = reportPayload()) {
  return btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
}
function decodeReport(hash) {
  try {
    const value = new URLSearchParams(hash.replace(/^#/, "")).get("report");
    return value ? JSON.parse(decodeURIComponent(escape(atob(value)))) : null;
  } catch { return null; }
}
function reportLink() {
  return `${TEST_ENTRY_PATH}#report=${encodeReport()}`;
}
function drawQr(canvas, text, size = canvas.width) {
  if (!window.qrcode) return;
  const qr = qrcode(0, "M");
  qr.addData(text);
  qr.make();
  const ctx = canvas.getContext("2d"), count = qr.getModuleCount(), cell = Math.floor(size / count), offset = Math.floor((size - cell * count) / 2);
  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = "#fffaf4"; ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = "#342821";
  for (let row = 0; row < count; row++) {
    for (let col = 0; col < count; col++) {
      if (qr.isDark(row, col)) ctx.fillRect(offset + col * cell, offset + row * cell, cell, cell);
    }
  }
}
function image(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}
function wrap(ctx, text, x, y, width, lineHeight, maxLines = 20) {
  const chars = String(text).split("");
  let line = "", lines = [];
  for (const char of chars) {
    const test = line + char;
    if (ctx.measureText(test).width > width && line) { lines.push(line); line = char; }
    else line = test;
  }
  if (line) lines.push(line);
  lines.slice(0, maxLines).forEach((l, i) => ctx.fillText(l, x, y + i * lineHeight));
  return y + Math.min(lines.length, maxLines) * lineHeight;
}
async function drawPoster() {
  const canvas = $("report-poster"), ctx = canvas.getContext("2d");
  const { primary, secondary, next, code } = lastResult, p = SIX[primary], s = SIX[secondary], n = SIX[next], pd = PROFILE_DETAILS[p.code], assets = ASSET_BY_CODE[p.code];
  const W = canvas.width, H = canvas.height;
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, p.bg);
  grad.addColorStop(.42, "#fffaf4");
  grad.addColorStop(1, "#efe1d4");
  ctx.fillStyle = grad; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "#ffffffbb"; ctx.beginPath(); ctx.roundRect(64, 56, W - 128, H - 112, 46); ctx.fill();
  ctx.strokeStyle = "#d8c6b9"; ctx.lineWidth = 2; ctx.stroke();
  const logo = await image("./assets/logos/butterfly-cove-logo-cropped.png");
  ctx.drawImage(logo, 390, 96, 300, 150);
  ctx.fillStyle = "#8b6f5f"; ctx.font = "24px PingFang SC"; ctx.textAlign = "center"; ctx.fillText("照狸六色循环测试报告", W / 2, 278);
  ctx.fillStyle = p.color; ctx.font = "72px Songti SC, serif"; ctx.fillText(`${p.state} · ${p.colorName}`, W / 2, 380);
  ctx.fillStyle = "#6b5040"; ctx.font = "28px PingFang SC"; ctx.fillText(`SFSC ${code}`, W / 2, 435);
  ctx.textAlign = "left";
  ctx.fillStyle = "#604433"; ctx.font = "34px Songti SC, serif"; wrap(ctx, `“${p.quote}”`, 160, 525, W - 320, 52, 2);
  const guardian = await image(`./assets/guardians/${assets.guardian}`);
  ctx.fillStyle = "#121212"; ctx.beginPath(); ctx.roundRect(112, 630, 330, 600, 32); ctx.fill();
  ctx.drawImage(guardian, 190, 650, 170, 600);
  ctx.textAlign = "left";
  ctx.fillStyle = "#5a4234"; ctx.font = "34px Songti SC, serif"; ctx.fillText(pd.guardianName, 492, 690);
  ctx.fillStyle = "#65574f"; ctx.font = "26px PingFang SC"; wrap(ctx, pd.guardianCopy, 492, 744, 420, 42, 6);
  ctx.fillStyle = "#8b6f5f"; ctx.font = "24px PingFang SC"; ctx.fillText("主香 / 副香 / 下一站", 492, 1040);
  ctx.fillStyle = "#4f3b31"; ctx.font = "30px PingFang SC"; wrap(ctx, `${p.fragrance} · ${s.fragrance} · ${n.fragrance}`, 492, 1090, 420, 42, 2);
  ctx.fillStyle = "#fff8ef"; ctx.beginPath(); ctx.roundRect(112, 1294, W - 224, 330, 32); ctx.fill();
  ctx.strokeStyle = "#ead8c9"; ctx.stroke();
  ctx.fillStyle = "#5a4234"; ctx.font = "32px Songti SC, serif"; ctx.fillText("照狸看见的你", 152, 1362);
  ctx.fillStyle = "#665b54"; ctx.font = "25px PingFang SC"; wrap(ctx, pd.selfView + pd.hiddenTalent, 152, 1420, W - 304, 42, 4);
  const qrCanvas = document.createElement("canvas");
  qrCanvas.width = 220; qrCanvas.height = 220; drawQr(qrCanvas, TEST_ENTRY_PATH, 220);
  ctx.drawImage(qrCanvas, 150, 1650, 180, 180);
  ctx.fillStyle = "#4f3b31"; ctx.font = "27px PingFang SC"; ctx.fillText("扫码进入测试", 365, 1706);
  ctx.fillStyle = "#8a7e75"; ctx.font = "23px PingFang SC"; wrap(ctx, "看见你的主香、副香和下一站香，生成属于你的六色循环报告。", 365, 1756, 500, 36, 2);
}
function shareCopies() {
  const p = SIX[lastResult.primary], pd = PROFILE_DETAILS[p.code], link = reportLink();
  return [
    ["诗意版", `我刚完成了照狸六色循环测试。\n我的 SFSC 状态码是 ${lastResult.code} · ${p.state}。\n\n“${p.quote}”\n\n这不是定义我是谁，而是看见此刻的我走到了哪一站。\n${link}`],
    ["轻松版", `测出来我现在的主香是「${p.fragrance}」！状态码 ${lastResult.code}，照狸说：${p.quote}\n\n你也来测测自己的主香是什么：${link}`],
    ["种草版", `今天认领了我的蝴蝶坞主香：${p.fragrance}。\n${pd.guardianName}给我的提醒是：${p.action}\n\n点开看我的报告，也可以扫码生成你的六色状态：${link}`]
  ];
}
function renderShareModule() {
  $("report-link-input").value = reportLink();
  drawQr($("test-qr"), TEST_ENTRY_PATH);
  $("share-copy-list").innerHTML = shareCopies().map(([title, copy], i) => `
    <article class="share-copy-card">
      <strong>${title}</strong>
      <p>${copy}</p>
      <button class="secondary-button copy-template-button" type="button" data-copy-index="${i}">复制${title}文案</button>
    </article>`).join("");
  document.querySelectorAll(".copy-template-button").forEach(btn => btn.addEventListener("click", () => copyText(shareCopies()[+btn.dataset.copyIndex][1], "分享文案已复制")));
  drawPoster();
}
function renderMemberModule() {
  const p = SIX[lastResult.primary], link = `${TEST_ENTRY_PATH}#member=${lastResult.code}`;
  drawQr($("wecom-qr"), link);
}
async function copyText(text, success = "已复制") {
  try { await navigator.clipboard.writeText(text); toast(success); }
  catch { prompt("复制内容", text); }
}
function downloadPoster() {
  const link = document.createElement("a");
  link.download = `照狸六色循环报告-${lastResult.code}.png`;
  link.href = $("report-poster").toDataURL("image/png");
  link.click();
}
async function nativeShareReport() {
  const link = reportLink(), p = SIX[lastResult.primary];
  if (navigator.share) {
    try { await navigator.share({ title: `我的照狸六色循环报告 · ${p.state}`, text: `我的 SFSC 状态码是 ${lastResult.code} · ${p.state}`, url: link }); return; }
    catch { return; }
  }
  copyText(link, "报告链接已复制");
}
function toast(text) { $("toast").textContent = text; $("toast").classList.add("is-visible"); setTimeout(() => $("toast").classList.remove("is-visible"), 1800); }
async function share() {
  const p = SIX[lastResult.primary], text = `我的 SFSC 状态码是 ${lastResult.code} · ${p.state}。\n\n“${p.quote}”\n\n照狸说：这不是定义我是谁，而是看见此刻的我走到了哪一站。`;
  try { await navigator.clipboard.writeText(text); toast("分享文案已复制"); } catch { toast("长按可复制分享文案"); prompt("复制你的分享文案", text); }
}
const privacyCheckbox = $("privacy-checkbox"), startButton = $("start-button");
if (privacyCheckbox && startButton) {
  startButton.disabled = !privacyCheckbox.checked;
  privacyCheckbox.addEventListener("change", () => { startButton.disabled = !privacyCheckbox.checked; });
}
startButton.addEventListener("click", start); $("back-button").addEventListener("click", back); $("restart-button").addEventListener("click", restart); $("share-button").addEventListener("click", share);
$("generate-poster-button").addEventListener("click", () => { drawPoster(); toast("报告长图已生成"); });
$("download-poster-button").addEventListener("click", downloadPoster);
$("copy-report-link-button").addEventListener("click", () => copyText(reportLink(), "报告链接已复制"));
$("native-share-button").addEventListener("click", nativeShareReport);
$("copy-wecom-button").addEventListener("click", () => copyText("我想加入蝶坞会员，保存我的六边形香水人格档案，并设置30天复测提醒。", "企微添加话术已复制"));
window.reportLink = reportLink;
window.drawPoster = drawPoster;
const sharedReport = decodeReport(location.hash);
if (sharedReport) {
  lastResult = { ...sharedReport, normalized: sharedReport.rawScores || [] };
  rawScores = [...(sharedReport.rawScores || Array(6).fill(0))];
  renderResult();
  showScreen("result-screen");
}
