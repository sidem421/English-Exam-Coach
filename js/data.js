const questions = {

"Relative Clauses": [
  { q: "The girl ___ lives next door is my friend.", a: ["who", "where", "when"], correct: 0, exp: "WHO is used for people." },
  { q: "I know a boy ___ can speak 5 languages.", a: ["who", "which", "where"], correct: 0, exp: "WHO for people." },
  { q: "This is the book ___ I told you about.", a: ["who", "which", "where"], correct: 1, exp: "WHICH for things." },
  { q: "The man ___ works here is very kind.", a: ["who", "when", "where"], correct: 0, exp: "WHO for people." },
  { q: "I visited the city ___ I was born.", a: ["where", "who", "which"], correct: 0, exp: "WHERE for places." },
  { q: "She is the teacher ___ helped me.", a: ["who", "which", "where"], correct: 0, exp: "WHO for people." },
  { q: "The phone ___ I bought is new.", a: ["who", "which", "where"], correct: 1, exp: "WHICH for objects." },
  { q: "Do you know the boy ___ broke the window?", a: ["who", "which", "where"], correct: 0, exp: "WHO for people." },
  { q: "This is the place ___ we met.", a: ["where", "who", "which"], correct: 0, exp: "WHERE for places." },
  { q: "The dog ___ is barking is mine.", a: ["who", "which", "where"], correct: 1, exp: "WHICH for animals/things." }
],

"Gerund": [
  { q: "I enjoy ___ football.", a: ["play", "playing", "to play"], correct: 1, exp: "enjoy + ing" },
  { q: "She finished ___ her homework.", a: ["do", "doing", "to do"], correct: 1, exp: "finish + ing" },
  { q: "He is good at ___.", a: ["swim", "swimming", "to swim"], correct: 1, exp: "good at + ing" },
  { q: "They avoid ___ fast food.", a: ["eat", "eating", "to eat"], correct: 1, exp: "avoid + ing" },
  { q: "I dislike ___ early.", a: ["wake", "waking", "to wake"], correct: 1, exp: "dislike + ing" },
  { q: "She stopped ___.", a: ["smoke", "smoking", "to smoke"], correct: 1, exp: "stop + ing (action)" },
  { q: "We enjoyed ___ the movie.", a: ["watch", "watching", "to watch"], correct: 1, exp: "enjoy + ing" },
  { q: "He keeps ___ mistakes.", a: ["make", "making", "to make"], correct: 1, exp: "keep + ing" },
  { q: "I am interested in ___.", a: ["travel", "traveling", "to travel"], correct: 1, exp: "interested in + ing" },
  { q: "She is afraid of ___ spiders.", a: ["touch", "touching", "to touch"], correct: 1, exp: "afraid of + ing" }
],

"The": [
  { q: "___ sun is bright today.", a: ["A", "An", "The"], correct: 2, exp: "The sun is unique." },
  { q: "___ Earth is our planet.", a: ["A", "An", "The"], correct: 2, exp: "The Earth is unique." },
  { q: "I saw ___ elephant.", a: ["a", "an", "the"], correct: 1, exp: "vowel sound = an" },
  { q: "___ moon is beautiful.", a: ["A", "An", "The"], correct: 2, exp: "The moon is unique." },
  { q: "She bought ___ apple.", a: ["a", "an", "the"], correct: 1, exp: "an apple" },
  { q: "___ teacher is kind.", a: ["A", "An", "The"], correct: 0, exp: "general noun" },
  { q: "He is ___ best student.", a: ["a", "an", "the"], correct: 2, exp: "superlative uses THE" },
  { q: "We visited ___ USA.", a: ["a", "an", "the"], correct: 2, exp: "countries like USA use THE" },
  { q: "___ water is important.", a: ["A", "An", "The"], correct: 2, exp: "general concept" },
  { q: "I saw ___ cat.", a: ["a", "an", "the"], correct: 0, exp: "a cat" }
],

"Reflexive": [
  { q: "I did it by ___.", a: ["myself", "himself", "ourselves"], correct: 0, exp: "myself" },
  { q: "She cooked by ___.", a: ["herself", "himself", "itself"], correct: 0, exp: "herself" },
  { q: "They did it by ___.", a: ["themselves", "myself", "yourself"], correct: 0, exp: "themselves" },
  { q: "He cut ___.", a: ["himself", "herself", "itself"], correct: 0, exp: "himself" },
  { q: "We enjoyed ___.", a: ["ourselves", "myself", "yourself"], correct: 0, exp: "ourselves" },
  { q: "She made it by ___.", a: ["herself", "himself", "itself"], correct: 0, exp: "herself" },
  { q: "I taught ___.", a: ["myself", "yourself", "himself"], correct: 0, exp: "myself" },
  { q: "He blamed ___.", a: ["himself", "herself", "itself"], correct: 0, exp: "himself" }
],

"Reported": [
  { q: "He said 'I am tired' → He said he ___ tired.", a: ["is", "was", "were"], correct: 1, exp: "tense backshift" },
  { q: "She said 'I go' → She said she ___.", a: ["goes", "went", "going"], correct: 1, exp: "backshift" },
  { q: "Tom said 'I am happy' → Tom said he ___ happy.", a: ["is", "was", "were"], correct: 1, exp: "reported speech" },
  { q: "She said 'I will come' → She said she ___ come.", a: ["will", "would", "can"], correct: 1, exp: "will → would" },
  { q: "He said 'I have a car' → He said he ___ a car.", a: ["has", "had", "have"], correct: 1, exp: "have → had" },
  { q: "She said 'I am here' → She said she ___ there.", a: ["is", "was", "were"], correct: 1, exp: "here → there" },
  { q: "He said 'I like pizza' → He said he ___ pizza.", a: ["likes", "liked", "like"], correct: 1, exp: "liked" },
  { q: "She said 'I can swim' → She said she ___ swim.", a: ["can", "could", "will"], correct: 1, exp: "can → could" },
  { q: "He said 'I am busy' → He said he ___ busy.", a: ["was", "is", "were"], correct: 0, exp: "am → was" },
  { q: "She said 'I study' → She said she ___.", a: ["studies", "studied", "study"], correct: 1, exp: "backshift" },
  { q: "He said 'I eat' → He said he ___.", a: ["ate", "eats", "eating"], correct: 0, exp: "past form" },
  { q: "She said 'I play' → She said she ___.", a: ["played", "plays", "playing"], correct: 0, exp: "backshift" }
],

"Vocabulary": [
  { q: "Vacation means?", a: ["Tatil", "Okul", "Ev"], correct: 0, exp: "vacation = holiday" },
  { q: "Destination means?", a: ["Varış yeri", "Yemek", "Arkadaş"], correct: 0, exp: "destination = place you go" },
  { q: "Travel means?", a: ["Seyahat", "Oyun", "Yemek"], correct: 0, exp: "travel = journey" },
  { q: "Holiday means?", a: ["Tatil", "Sınav", "Ders"], correct: 0, exp: "holiday = vacation" },
  { q: "Ticket means?", a: ["Bilet", "Kitap", "Kalem"], correct: 0, exp: "ticket = pass" },
  { q: "Airport means?", a: ["Havalimanı", "Okul", "Ev"], correct: 0, exp: "airport = plane place" },
  { q: "Journey means?", a: ["Yolculuk", "Yemek", "Ev"], correct: 0, exp: "journey = trip" },
  { q: "Hotel means?", a: ["Otel", "Okul", "Ev"], correct: 0, exp: "hotel = accommodation" },
  { q: "Passport means?", a: ["Pasaport", "Kitap", "Kalem"], correct: 0, exp: "passport = travel ID" },
  { q: "Tour means?", a: ["Tur", "Yemek", "Oyun"], correct: 0, exp: "tour = visit places" }
]

};
