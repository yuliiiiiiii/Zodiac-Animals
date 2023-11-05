let animals = [ 
    { eng: "dog", chr: "gou", chi: "gou", pin: "gou&#780;",  yr: 2030,
      partners: "Tiger and Horse", 
     traits: "Loyal, sociable, courageous, diligent, steady, lively, adaptable, smart." },
    { eng: "dragon", chr: "long", chi: "long", pin: "lo&#769;ng", yr: 2024,
      partners: "Rat and Monkey", 
      traits: "Lucky, flexible, eccentric, imaginative, artistic, spiritual, charismatic." },
    { eng: "horse", chr: "ma", chi: "ma", pin: "ma&#780;", yr: 2026,
      partners: "Dog and Tiger", 
      traits: "Adaptable, loyal, courageous, ambitious, intelligent, adventurous, strong." },
    { eng: "monkey", chr: "hou", chi: "houzi", pin: "ho&#769;uzi", yr: 2028,
      partners: "Dragon and Monkey", 
      traits: "Quick-witted, charming, lucky, adaptable, bright, versatile, lively, smart." },
    { eng: "ox", chr: "niu", chi: "niu", pin: "niu&#769;",  yr: 2021,
      partners: "Snake and Rooster", 
      traits: "Loyal, reliable, thorough, strong, reasonable, steady, determined." },
    { eng: "pig", chr: "zhu", chi: "zhu", pin: "zhu&#772;", yr: 2031, 
      partners: "Sheep and Rabbit", 
      traits: "Honorable, philanthropic, determined, optimistic, sincere, sociable." },
    { eng: "rabbit", chr: "tu", chi: "tuzi", pin: "tu&#768;zi", yr: 2023,
      partners: "Sheep and Pig", 
      traits: "Trustworthy, empathic, modest, diplomatic, sincere, sociable, caretakers." },
    { eng: "rat", chr: "shu", chi: "laoshu", pin: "la&#780;oshu&#780;", yr: 2020,
      partners: "Dragon and monkey", 
      traits: "Intelligent, adaptable, quick-witted, charming, artistic, sociable." },
    { eng: "rooster", chr: "ji", chi: "ji", pin: "ji&#772;", yr: 2029, 
      partners: "Snake and Ox", 
      traits: "Honest, energetic, intelligent, flamboyant, flexible, diverse, confident." },
    { eng: "sheep", chr: "yang", chi: "yang", pin: "ya&#769;ng", yr: 2027,
      partners: "Pig and Rabbit", 
      traits: "Tasteful, crafty, warm, elegant, charming, intuitive, sensitive, calm." },
    { eng: "snake", chr: "she", chi: "she", pin: "she&#769;", yr: 2025,
      partners: "Rooster and Ox", 
      traits: "Philosophical, organized, intelligent, intuitive, elegant, attentive, decisive." },
    { eng: "tiger", chr: "hu", chi: "laohu", pin: "la&#780;ohu&#780;", yr: 2022,
      partners: "Horse and Dog", 
      traits: "Enthusiastic, courageous, ambitious, leadership, confidence, charismatic." } 
];

// eng: English name 
//     - for concatenating animal image file 
//     - for sorting by English name
//     - for displaying English name of animal
// chr: Chinese character Romanized 
//     - for concatenating Chinese character image file
// chi: Chinese name (sometimes same as chr, sometimes longer)
//     - for  sorting by Chinese name
// pin: Pinyin spelling (Romanization w tone markings)
//     - for displaying Pinyin spelling of animal
// yr: in 12-year cycle
//     - for concatenating sets of years in 12 yr increments
//     - for sorting by Year

/*
Rat: 
Partners well with: Dragon and Monkey
Characteristics: Intelligent, adaptable, quick-witted, charming, artistic, sociable.
Ox:
Partners well with: Snake and Rooster
Characteristics: Loyal, reliable, thorough, strong, reasonable, steady, determined.
Tiger:
Partners well with: Horse and Dog
Characteristics: Enthusiastic, courageous, ambitious, leadership, confidence, charismatic.
Rabbit:
Partners well with: Sheep and Boar
Characteristics: Trustworthy, empathic, modest, diplomatic, sincere, sociable, caretakers.
Dragon:
Partners well with: Rat and Monkey
Characteristics: Lucky, flexible, eccentric, imaginative, artistic, spiritual, charismatic.
Snake:
Partners well with: Rooster and Ox
Characteristics: Philosophical, organized, intelligent, intuitive, elegant, attentive, decisive.
Horse:
Partners well with: Dog and Tiger
Characteristics: Adaptable, loyal, courageous, ambitious, intelligent, adventurous, strong.
Sheep:
Partners well with: Boar and Rabbit
Characteristics: Tasteful, crafty, warm, elegant, charming, intuitive, sensitive, calm.
Monkey:
Partners well with: Dragon and Rat
Characteristics: Quick-witted, charming, lucky, adaptable, bright, versatile, lively, smart.
Rooster:
Partners well with: Snake and Ox
Characteristics: Honest, energetic, intelligent, flamboyant, flexible, diverse, confident.
Dog:
Partners well with: Tiger and Horse
Characteristics: Loyal, sociable, courageous, diligent, steady, lively, adaptable, smart.
Pig:
Partners well with: Sheep and Rabbit
Characteristics: Honorable, philanthropic, determined, optimistic, sincere, sociable.
*/