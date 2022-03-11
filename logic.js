// Global variables
const inputIdArr = ["sq1In", "sq2In", "sq3In", "sq4In", "sq5In", "sq6In", "sq7In", "sq8In", "sq9In", "sq10In", "sq11In", "sq12In", "sq13In", "sq14In", "sq15In", "sq16In", "sq17In", "sq18In", "sq19In", "sq20In", "sq21In", "sq22In", "sq23In", "sq24In", "sq25In", "sq26In", "sq27In", "sq28In", "sq29In", "sq30In"]
const answers = [
    "cigar",
    "rebut",
    "sissy",
    "humph",
    "awake",
    "blush",
    "focal",
    "evade",
    "naval",
    "serve",
    "heath",
    "dwarf",
    "model",
    "karma",
    "stink",
    "grade",
    "quiet",
    "bench",
    "abate",
    "death",
    "major",
    "feign",
    "fresh",
    "crust",
    "stool",
    "colon",
    "abase",
    "marry",
    "react",
    "batty",
    "pride",
    "floss",
    "helix",
    "staff",
    "paper",
    "croak",
    "unfed",
    "whelp",
    "trawl",
    "outdo",
    "adobe",
    "crazy",
    "sower",
    "repay",
    "digit",
    "crate",
    "cluck",
    "spike",
    "mimic",
    "pound",
    "maxim",
    "linen",
    "unmet",
    "flesh",
    "booby",
    "forth",
    "first",
    "stand",
    "belly",
    "ivory",
    "seedy",
    "print",
    "yearn",
    "drain",
    "bribe",
    "stout",
    "panel",
    "crass",
    "flume",
    "offal",
    "agree",
    "error",
    "swirl",
    "argue",
    "bleed",
    "delta",
    "flick",
    "totem",
    "wooer",
    "front",
    "shrub",
    "parry",
    "biome",
    "lapel",
    "start",
    "greet",
    "goner",
    "golem",
    "lusty",
    "loopy",
    "round",
    "audit",
    "lying",
    "gamma",
    "labor",
    "islet",
    "civic",
    "forge",
    "corny",
    "moult",
    "basic",
    "salad",
    "agate",
    "spicy",
    "spray",
    "essay",
    "fjord",
    "spend",
    "kebab",
    "guild",
    "aback",
    "motor",
    "alone",
    "hatch",
    "hyper",
    "thumb",
    "dowry",
    "ought",
    "belch",
    "dutch",
    "pilot",
    "tweed",
    "comet",
    "jaunt",
    "enema",
    "steed",
    "abyss",
    "growl",
    "fling",
    "dozen",
    "boozy",
    "erode",
    "world",
    "gouge",
    "click",
    "briar",
    "great",
    "altar",
    "pulpy",
    "blurt",
    "coast",
    "duchy",
    "groin",
    "fixer",
    "group",
    "rogue",
    "badly",
    "smart",
    "pithy",
    "gaudy",
    "chill",
    "heron",
    "vodka",
    "finer",
    "surer",
    "radio",
    "rouge",
    "perch",
    "retch",
    "wrote",
    "clock",
    "tilde",
    "store",
    "prove",
    "bring",
    "solve",
    "cheat",
    "grime",
    "exult",
    "usher",
    "epoch",
    "triad",
    "break",
    "rhino",
    "viral",
    "conic",
    "masse",
    "sonic",
    "vital",
    "trace",
    "using",
    "peach",
    "champ",
    "baton",
    "brake",
    "pluck",
    "craze",
    "gripe",
    "weary",
    "picky",
    "acute",
    "ferry",
    "aside",
    "tapir",
    "troll",
    "unify",
    "rebus",
    "boost",
    "truss",
    "siege",
    "tiger",
    "banal",
    "slump",
    "crank",
    "gorge",
    "query",
    "drink",
    "favor",
    "abbey",
    "tangy",
    "panic",
    "solar",
    "shire",
    "proxy",
    "point",
    "robot",
    "prick",
    "wince",
    "crimp",
    "knoll",
    "sugar",
    "whack",
    "mount",
    "perky",
    "could",
    "wrung",
    "light",
    "those",
    "moist",
    "shard",
    "pleat",
    "aloft",
    "skill",
    "elder",
    "frame",
    "humor",
    "pause",
    "ulcer",
    "ultra",
    "robin",
    "cynic",
    "agora",
    "aroma",
    "caulk",
    "shake",
    "pupal",
    "dodge",
    "swill",
    "tacit",
    "other",
    "thorn",
    "trove",
    "bloke",
    "vivid",
    "spill",
    "chant",
    "choke",
    "rupee",
    "nasty",
    "mourn",
    "ahead",
    "brine",
    "cloth",
    "hoard",
    "sweet",
    "month",
    "lapse",
    "watch",
    "today",
    "focus",
    "smelt",
    "tease",
    "cater",
    "movie",
    "lynch",
    "saute",
    "allow",
    "renew",
    "their",
    "slosh",
    "purge",
    "chest",
    "depot",
    "epoxy",
    "nymph",
    "found",
    "shall",
    "harry",
    "stove",
    "lowly",
    "snout",
    "trope",
    "fewer",
    "shawl",
    "natal",
    "fibre",
    "comma",
    "foray",
    "scare",
    "stair",
    "black",
    "squad",
    "royal",
    "chunk",
    "mince",
    "slave",
    "shame",
    "cheek",
    "ample",
    "flair",
    "foyer",
    "cargo",
    "oxide",
    "plant",
    "olive",
    "inert",
    "askew",
    "heist",
    "shown",
    "zesty",
    "hasty",
    "trash",
    "fella",
    "larva",
    "forgo",
    "story",
    "hairy",
    "train",
    "homer",
    "badge",
    "midst",
    "canny",
    "fetus",
    "butch",
    "farce",
    "slung",
    "tipsy",
    "metal",
    "yield",
    "delve",
    "being",
    "scour",
    "glass",
    "gamer",
    "scrap",
    "money",
    "hinge",
    "album",
    "vouch",
    "asset",
    "tiara",
    "crept",
    "bayou",
    "atoll",
    "manor",
    "creak",
    "showy",
    "phase",
    "froth",
    "depth",
    "gloom",
    "flood",
    "trait",
    "girth",
    "piety",
    "payer",
    "goose",
    "float",
    "donor",
    "atone",
    "primo",
    "apron",
    "blown",
    "cacao",
    "loser",
    "input",
    "gloat",
    "awful",
    "brink",
    "smite",
    "beady",
    "rusty",
    "retro",
    "droll",
    "gawky",
    "hutch",
    "pinto",
    "gaily",
    "egret",
    "lilac",
    "sever",
    "field",
    "fluff",
    "hydro",
    "flack",
    "agape",
    "wench",
    "voice",
    "stead",
    "stalk",
    "berth",
    "madam",
    "night",
    "bland",
    "liver",
    "wedge",
    "augur",
    "roomy",
    "wacky",
    "flock",
    "angry",
    "bobby",
    "trite",
    "aphid",
    "tryst",
    "midge",
    "power",
    "elope",
    "cinch",
    "motto",
    "stomp",
    "upset",
    "bluff",
    "cramp",
    "quart",
    "coyly",
    "youth",
    "rhyme",
    "buggy",
    "alien",
    "smear",
    "unfit",
    "patty",
    "cling",
    "glean",
    "label",
    "hunky",
    "khaki",
    "poker",
    "gruel",
    "twice",
    "twang",
    "shrug",
    "treat",
    "unlit",
    "waste",
    "merit",
    "woven",
    "octal",
    "needy",
    "clown",
    "widow",
    "irony",
    "ruder",
    "gauze",
    "chief",
    "onset",
    "prize",
    "fungi",
    "charm",
    "gully",
    "inter",
    "whoop",
    "taunt",
    "leery",
    "class",
    "theme",
    "lofty",
    "tibia",
    "booze",
    "alpha",
    "thyme",
    "eclat",
    "doubt",
    "parer",
    "chute",
    "stick",
    "trice",
    "alike",
    "sooth",
    "recap",
    "saint",
    "liege",
    "glory",
    "grate",
    "admit",
    "brisk",
    "soggy",
    "usurp",
    "scald",
    "scorn",
    "leave",
    "twine",
    "sting",
    "bough",
    "marsh",
    "sloth",
    "dandy",
    "vigor",
    "howdy",
    "enjoy",
    "valid",
    "ionic",
    "equal",
    "unset",
    "floor",
    "catch",
    "spade",
    "stein",
    "exist",
    "quirk",
    "denim",
    "grove",
    "spiel",
    "mummy",
    "fault",
    "foggy",
    "flout",
    "carry",
    "sneak",
    "libel",
    "waltz",
    "aptly",
    "piney",
    "inept",
    "aloud",
    "photo",
    "dream",
    "stale",
    "vomit",
    "ombre",
    "fanny",
    "unite",
    "snarl",
    "baker",
    "there",
    "glyph",
    "pooch",
    "hippy",
    "spell",
    "folly",
    "louse",
    "gulch",
    "vault",
    "godly",
    "threw",
    "fleet",
    "grave",
    "inane",
    "shock",
    "crave",
    "spite",
    "valve",
    "skimp",
    "claim",
    "rainy",
    "musty",
    "pique",
    "daddy",
    "quasi",
    "arise",
    "aging",
    "valet",
    "opium",
    "avert",
    "stuck",
    "recut",
    "mulch",
    "genre",
    "plume",
    "rifle",
    "count",
    "incur",
    "total",
    "wrest",
    "mocha",
    "deter",
    "study",
    "lover",
    "safer",
    "rivet",
    "funny",
    "smoke",
    "mound",
    "undue",
    "sedan",
    "pagan",
    "swine",
    "guile",
    "gusty",
    "equip",
    "tough",
    "canoe",
    "chaos",
    "covet",
    "human",
    "udder",
    "lunch",
    "blast",
    "stray",
    "manga",
    "melee",
    "lefty",
    "quick",
    "paste",
    "given",
    "octet",
    "risen",
    "groan",
    "leaky",
    "grind",
    "carve",
    "loose",
    "sadly",
    "spilt",
    "apple",
    "slack",
    "honey",
    "final",
    "sheen",
    "eerie",
    "minty",
    "slick",
    "derby",
    "wharf",
    "spelt",
    "coach",
    "erupt",
    "singe",
    "price",
    "spawn",
    "fairy",
    "jiffy",
    "filmy",
    "stack",
    "chose",
    "sleep",
    "ardor",
    "nanny",
    "niece",
    "woozy",
    "handy",
    "grace",
    "ditto",
    "stank",
    "cream",
    "usual",
    "diode",
    "valor",
    "angle",
    "ninja",
    "muddy",
    "chase",
    "reply",
    "prone",
    "spoil",
    "heart",
    "shade",
    "diner",
    "arson",
    "onion",
    "sleet",
    "dowel",
    "couch",
    "palsy",
    "bowel",
    "smile",
    "evoke",
    "creek",
    "lance",
    "eagle",
    "idiot",
    "siren",
    "built",
    "embed",
    "award",
    "dross",
    "annul",
    "goody",
    "frown",
    "patio",
    "laden",
    "humid",
    "elite",
    "lymph",
    "edify",
    "might",
    "reset",
    "visit",
    "gusto",
    "purse",
    "vapor",
    "crock",
    "write",
    "sunny",
    "loath",
    "chaff",
    "slide",
    "queer",
    "venom",
    "stamp",
    "sorry",
    "still",
    "acorn",
    "aping",
    "pushy",
    "tamer",
    "hater",
    "mania",
    "awoke",
    "brawn",
    "swift",
    "exile",
    "birch",
    "lucky",
    "freer",
    "risky",
    "ghost",
    "plier",
    "lunar",
    "winch",
    "snare",
    "nurse",
    "house",
    "borax",
    "nicer",
    "lurch",
    "exalt",
    "about",
    "savvy",
    "toxin",
    "tunic",
    "pried",
    "inlay",
    "chump",
    "lanky",
    "cress",
    "eater",
    "elude",
    "cycle",
    "kitty",
    "boule",
    "moron",
    "tenet",
    "place",
    "lobby",
    "plush",
    "vigil",
    "index",
    "blink",
    "clung",
    "qualm",
    "croup",
    "clink",
    "juicy",
    "stage",
    "decay",
    "nerve",
    "flier",
    "shaft",
    "crook",
    "clean",
    "china",
    "ridge",
    "vowel",
    "gnome",
    "snuck",
    "icing",
    "spiny",
    "rigor",
    "snail",
    "flown",
    "rabid",
    "prose",
    "thank",
    "poppy",
    "budge",
    "fiber",
    "moldy",
    "dowdy",
    "kneel",
    "track",
    "caddy",
    "quell",
    "dumpy",
    "paler",
    "swore",
    "rebar",
    "scuba",
    "splat",
    "flyer",
    "horny",
    "mason",
    "doing",
    "ozone",
    "amply",
    "molar",
    "ovary",
    "beset",
    "queue",
    "cliff",
    "magic",
    "truce",
    "sport",
    "fritz",
    "edict",
    "twirl",
    "verse",
    "llama",
    "eaten",
    "range",
    "whisk",
    "hovel",
    "rehab",
    "macaw",
    "sigma",
    "spout",
    "verve",
    "sushi",
    "dying",
    "fetid",
    "brain",
    "buddy",
    "thump",
    "scion",
    "candy",
    "chord",
    "basin",
    "march",
    "crowd",
    "arbor",
    "gayly",
    "musky",
    "stain",
    "dally",
    "bless",
    "bravo",
    "stung",
    "title",
    "ruler",
    "kiosk",
    "blond",
    "ennui",
    "layer",
    "fluid",
    "tatty",
    "score",
    "cutie",
    "zebra",
    "barge",
    "matey",
    "bluer",
    "aider",
    "shook",
    "river",
    "privy",
    "betel",
    "frisk",
    "bongo",
    "begun",
    "azure",
    "weave",
    "genie",
    "sound",
    "glove",
    "braid",
    "scope",
    "wryly",
    "rover",
    "assay",
    "ocean",
    "bloom",
    "irate",
    "later",
    "woken",
    "silky",
    "wreck",
    "dwelt",
    "slate",
    "smack",
    "solid",
    "amaze",
    "hazel",
    "wrist",
    "jolly",
    "globe",
    "flint",
    "rouse",
    "civil",
    "vista",
    "relax",
    "cover",
    "alive",
    "beech",
    "jetty",
    "bliss",
    "vocal",
    "often",
    "dolly",
    "eight",
    "joker",
    "since",
    "event",
    "ensue",
    "shunt",
    "diver",
    "poser",
    "worst",
    "sweep",
    "alley",
    "creed",
    "anime",
    "leafy",
    "bosom",
    "dunce",
    "stare",
    "pudgy",
    "waive",
    "choir",
    "stood",
    "spoke",
    "outgo",
    "delay",
    "bilge",
    "ideal",
    "clasp",
    "seize",
    "hotly",
    "laugh",
    "sieve",
    "block",
    "meant",
    "grape",
    "noose",
    "hardy",
    "shied",
    "drawl",
    "daisy",
    "putty",
    "strut",
    "burnt",
    "tulip",
    "crick",
    "idyll",
    "vixen",
    "furor",
    "geeky",
    "cough",
    "naive",
    "shoal",
    "stork",
    "bathe",
    "aunty",
    "check",
    "prime",
    "brass",
    "outer",
    "furry",
    "razor",
    "elect",
    "evict",
    "imply",
    "demur",
    "quota",
    "haven",
    "cavil",
    "swear",
    "crump",
    "dough",
    "gavel",
    "wagon",
    "salon",
    "nudge",
    "harem",
    "pitch",
    "sworn",
    "pupil",
    "excel",
    "stony",
    "cabin",
    "unzip",
    "queen",
    "trout",
    "polyp",
    "earth",
    "storm",
    "until",
    "taper",
    "enter",
    "child",
    "adopt",
    "minor",
    "fatty",
    "husky",
    "brave",
    "filet",
    "slime",
    "glint",
    "tread",
    "steal",
    "regal",
    "guest",
    "every",
    "murky",
    "share",
    "spore",
    "hoist",
    "buxom",
    "inner",
    "otter",
    "dimly",
    "level",
    "sumac",
    "donut",
    "stilt",
    "arena",
    "sheet",
    "scrub",
    "fancy",
    "slimy",
    "pearl",
    "silly",
    "porch",
    "dingo",
    "sepia",
    "amble",
    "shady",
    "bread",
    "friar",
    "reign",
    "dairy",
    "quill",
    "cross",
    "brood",
    "tuber",
    "shear",
    "posit",
    "blank",
    "villa",
    "shank",
    "piggy",
    "freak",
    "which",
    "among",
    "fecal",
    "shell",
    "would",
    "algae",
    "large",
    "rabbi",
    "agony",
    "amuse",
    "bushy",
    "copse",
    "swoon",
    "knife",
    "pouch",
    "ascot",
    "plane",
    "crown",
    "urban",
    "snide",
    "relay",
    "abide",
    "viola",
    "rajah",
    "straw",
    "dilly",
    "crash",
    "amass",
    "third",
    "trick",
    "tutor",
    "woody",
    "blurb",
    "grief",
    "disco",
    "where",
    "sassy",
    "beach",
    "sauna",
    "comic",
    "clued",
    "creep",
    "caste",
    "graze",
    "snuff",
    "frock",
    "gonad",
    "drunk",
    "prong",
    "lurid",
    "steel",
    "halve",
    "buyer",
    "vinyl",
    "utile",
    "smell",
    "adage",
    "worry",
    "tasty",
    "local",
    "trade",
    "finch",
    "ashen",
    "modal",
    "gaunt",
    "clove",
    "enact",
    "adorn",
    "roast",
    "speck",
    "sheik",
    "missy",
    "grunt",
    "snoop",
    "party",
    "touch",
    "mafia",
    "emcee",
    "array",
    "south",
    "vapid",
    "jelly",
    "skulk",
    "angst",
    "tubal",
    "lower",
    "crest",
    "sweat",
    "cyber",
    "adore",
    "tardy",
    "swami",
    "notch",
    "groom",
    "roach",
    "hitch",
    "young",
    "align",
    "ready",
    "frond",
    "strap",
    "puree",
    "realm",
    "venue",
    "swarm",
    "offer",
    "seven",
    "dryer",
    "diary",
    "dryly",
    "drank",
    "acrid",
    "heady",
    "theta",
    "junto",
    "pixie",
    "quoth",
    "bonus",
    "shalt",
    "penne",
    "amend",
    "datum",
    "build",
    "piano",
    "shelf",
    "lodge",
    "suing",
    "rearm",
    "coral",
    "ramen",
    "worth",
    "psalm",
    "infer",
    "overt",
    "mayor",
    "ovoid",
    "glide",
    "usage",
    "poise",
    "randy",
    "chuck",
    "prank",
    "fishy",
    "tooth",
    "ether",
    "drove",
    "idler",
    "swath",
    "stint",
    "while",
    "begat",
    "apply",
    "slang",
    "tarot",
    "radar",
    "credo",
    "aware",
    "canon",
    "shift",
    "timer",
    "bylaw",
    "serum",
    "three",
    "steak",
    "iliac",
    "shirk",
    "blunt",
    "puppy",
    "penal",
    "joist",
    "bunny",
    "shape",
    "beget",
    "wheel",
    "adept",
    "stunt",
    "stole",
    "topaz",
    "chore",
    "fluke",
    "afoot",
    "bloat",
    "bully",
    "dense",
    "caper",
    "sneer",
    "boxer",
    "jumbo",
    "lunge",
    "space",
    "avail",
    "short",
    "slurp",
    "loyal",
    "flirt",
    "pizza",
    "conch",
    "tempo",
    "droop",
    "plate",
    "bible",
    "plunk",
    "afoul",
    "savoy",
    "steep",
    "agile",
    "stake",
    "dwell",
    "knave",
    "beard",
    "arose",
    "motif",
    "smash",
    "broil",
    "glare",
    "shove",
    "baggy",
    "mammy",
    "swamp",
    "along",
    "rugby",
    "wager",
    "quack",
    "squat",
    "snaky",
    "debit",
    "mange",
    "skate",
    "ninth",
    "joust",
    "tramp",
    "spurn",
    "medal",
    "micro",
    "rebel",
    "flank",
    "learn",
    "nadir",
    "maple",
    "comfy",
    "remit",
    "gruff",
    "ester",
    "least",
    "mogul",
    "fetch",
    "cause",
    "oaken",
    "aglow",
    "meaty",
    "gaffe",
    "shyly",
    "racer",
    "prowl",
    "thief",
    "stern",
    "poesy",
    "rocky",
    "tweet",
    "waist",
    "spire",
    "grope",
    "havoc",
    "patsy",
    "truly",
    "forty",
    "deity",
    "uncle",
    "swish",
    "giver",
    "preen",
    "bevel",
    "lemur",
    "draft",
    "slope",
    "annoy",
    "lingo",
    "bleak",
    "ditty",
    "curly",
    "cedar",
    "dirge",
    "grown",
    "horde",
    "drool",
    "shuck",
    "crypt",
    "cumin",
    "stock",
    "gravy",
    "locus",
    "wider",
    "breed",
    "quite",
    "chafe",
    "cache",
    "blimp",
    "deign",
    "fiend",
    "logic",
    "cheap",
    "elide",
    "rigid",
    "false",
    "renal",
    "pence",
    "rowdy",
    "shoot",
    "blaze",
    "envoy",
    "posse",
    "brief",
    "never",
    "abort",
    "mouse",
    "mucky",
    "sulky",
    "fiery",
    "media",
    "trunk",
    "yeast",
    "clear",
    "skunk",
    "scalp",
    "bitty",
    "cider",
    "koala",
    "duvet",
    "segue",
    "creme",
    "super",
    "grill",
    "after",
    "owner",
    "ember",
    "reach",
    "nobly",
    "empty",
    "speed",
    "gipsy",
    "recur",
    "smock",
    "dread",
    "merge",
    "burst",
    "kappa",
    "amity",
    "shaky",
    "hover",
    "carol",
    "snort",
    "synod",
    "faint",
    "haunt",
    "flour",
    "chair",
    "detox",
    "shrew",
    "tense",
    "plied",
    "quark",
    "burly",
    "novel",
    "waxen",
    "stoic",
    "jerky",
    "blitz",
    "beefy",
    "lyric",
    "hussy",
    "towel",
    "quilt",
    "below",
    "bingo",
    "wispy",
    "brash",
    "scone",
    "toast",
    "easel",
    "saucy",
    "value",
    "spice",
    "honor",
    "route",
    "sharp",
    "bawdy",
    "radii",
    "skull",
    "phony",
    "issue",
    "lager",
    "swell",
    "urine",
    "gassy",
    "trial",
    "flora",
    "upper",
    "latch",
    "wight",
    "brick",
    "retry",
    "holly",
    "decal",
    "grass",
    "shack",
    "dogma",
    "mover",
    "defer",
    "sober",
    "optic",
    "crier",
    "vying",
    "nomad",
    "flute",
    "hippo",
    "shark",
    "drier",
    "obese",
    "bugle",
    "tawny",
    "chalk",
    "feast",
    "ruddy",
    "pedal",
    "scarf",
    "cruel",
    "bleat",
    "tidal",
    "slush",
    "semen",
    "windy",
    "dusty",
    "sally",
    "igloo",
    "nerdy",
    "jewel",
    "shone",
    "whale",
    "hymen",
    "abuse",
    "fugue",
    "elbow",
    "crumb",
    "pansy",
    "welsh",
    "syrup",
    "terse",
    "suave",
    "gamut",
    "swung",
    "drake",
    "freed",
    "afire",
    "shirt",
    "grout",
    "oddly",
    "tithe",
    "plaid",
    "dummy",
    "broom",
    "blind",
    "torch",
    "enemy",
    "again",
    "tying",
    "pesky",
    "alter",
    "gazer",
    "noble",
    "ethos",
    "bride",
    "extol",
    "decor",
    "hobby",
    "beast",
    "idiom",
    "utter",
    "these",
    "sixth",
    "alarm",
    "erase",
    "elegy",
    "spunk",
    "piper",
    "scaly",
    "scold",
    "hefty",
    "chick",
    "sooty",
    "canal",
    "whiny",
    "slash",
    "quake",
    "joint",
    "swept",
    "prude",
    "heavy",
    "wield",
    "femme",
    "lasso",
    "maize",
    "shale",
    "screw",
    "spree",
    "smoky",
    "whiff",
    "scent",
    "glade",
    "spent",
    "prism",
    "stoke",
    "riper",
    "orbit",
    "cocoa",
    "guilt",
    "humus",
    "shush",
    "table",
    "smirk",
    "wrong",
    "noisy",
    "alert",
    "shiny",
    "elate",
    "resin",
    "whole",
    "hunch",
    "pixel",
    "polar",
    "hotel",
    "sword",
    "cleat",
    "mango",
    "rumba",
    "puffy",
    "filly",
    "billy",
    "leash",
    "clout",
    "dance",
    "ovate",
    "facet",
    "chili",
    "paint",
    "liner",
    "curio",
    "salty",
    "audio",
    "snake",
    "fable",
    "cloak",
    "navel",
    "spurt",
    "pesto",
    "balmy",
    "flash",
    "unwed",
    "early",
    "churn",
    "weedy",
    "stump",
    "lease",
    "witty",
    "wimpy",
    "spoof",
    "saner",
    "blend",
    "salsa",
    "thick",
    "warty",
    "manic",
    "blare",
    "squib",
    "spoon",
    "probe",
    "crepe",
    "knack",
    "force",
    "debut",
    "order",
    "haste",
    "teeth",
    "agent",
    "widen",
    "icily",
    "slice",
    "ingot",
    "clash",
    "juror",
    "blood",
    "abode",
    "throw",
    "unity",
    "pivot",
    "slept",
    "troop",
    "spare",
    "sewer",
    "parse",
    "morph",
    "cacti",
    "tacky",
    "spool",
    "demon",
    "moody",
    "annex",
    "begin",
    "fuzzy",
    "patch",
    "water",
    "lumpy",
    "admin",
    "omega",
    "limit",
    "tabby",
    "macho",
    "aisle",
    "skiff",
    "basis",
    "plank",
    "verge",
    "botch",
    "crawl",
    "lousy",
    "slain",
    "cubic",
    "raise",
    "wrack",
    "guide",
    "foist",
    "cameo",
    "under",
    "actor",
    "revue",
    "fraud",
    "harpy",
    "scoop",
    "climb",
    "refer",
    "olden",
    "clerk",
    "debar",
    "tally",
    "ethic",
    "cairn",
    "tulle",
    "ghoul",
    "hilly",
    "crude",
    "apart",
    "scale",
    "older",
    "plain",
    "sperm",
    "briny",
    "abbot",
    "rerun",
    "quest",
    "crisp",
    "bound",
    "befit",
    "drawn",
    "suite",
    "itchy",
    "cheer",
    "bagel",
    "guess",
    "broad",
    "axiom",
    "chard",
    "caput",
    "leant",
    "harsh",
    "curse",
    "proud",
    "swing",
    "opine",
    "taste",
    "lupus",
    "gumbo",
    "miner",
    "green",
    "chasm",
    "lipid",
    "topic",
    "armor",
    "brush",
    "crane",
    "mural",
    "abled",
    "habit",
    "bossy",
    "maker",
    "dusky",
    "dizzy",
    "lithe",
    "brook",
    "jazzy",
    "fifty",
    "sense",
    "giant",
    "surly",
    "legal",
    "fatal",
    "flunk",
    "began",
    "prune",
    "small",
    "slant",
    "scoff",
    "torus",
    "ninny",
    "covey",
    "viper",
    "taken",
    "moral",
    "vogue",
    "owing",
    "token",
    "entry",
    "booth",
    "voter",
    "chide",
    "elfin",
    "ebony",
    "neigh",
    "minim",
    "melon",
    "kneed",
    "decoy",
    "voila",
    "ankle",
    "arrow",
    "mushy",
    "tribe",
    "cease",
    "eager",
    "birth",
    "graph",
    "odder",
    "terra",
    "weird",
    "tried",
    "clack",
    "color",
    "rough",
    "weigh",
    "uncut",
    "ladle",
    "strip",
    "craft",
    "minus",
    "dicey",
    "titan",
    "lucid",
    "vicar",
    "dress",
    "ditch",
    "gypsy",
    "pasta",
    "taffy",
    "flame",
    "swoop",
    "aloof",
    "sight",
    "broke",
    "teary",
    "chart",
    "sixty",
    "wordy",
    "sheer",
    "leper",
    "nosey",
    "bulge",
    "savor",
    "clamp",
    "funky",
    "foamy",
    "toxic",
    "brand",
    "plumb",
    "dingy",
    "butte",
    "drill",
    "tripe",
    "bicep",
    "tenor",
    "krill",
    "worse",
    "drama",
    "hyena",
    "think",
    "ratio",
    "cobra",
    "basil",
    "scrum",
    "bused",
    "phone",
    "court",
    "camel",
    "proof",
    "heard",
    "angel",
    "petal",
    "pouty",
    "throb",
    "maybe",
    "fetal",
    "sprig",
    "spine",
    "shout",
    "cadet",
    "macro",
    "dodgy",
    "satyr",
    "rarer",
    "binge",
    "trend",
    "nutty",
    "leapt",
    "amiss",
    "split",
    "myrrh",
    "width",
    "sonar",
    "tower",
    "baron",
    "fever",
    "waver",
    "spark",
    "belie",
    "sloop",
    "expel",
    "smote",
    "baler",
    "above",
    "north",
    "wafer",
    "scant",
    "frill",
    "awash",
    "snack",
    "scowl",
    "frail",
    "drift",
    "limbo",
    "fence",
    "motel",
    "ounce",
    "wreak",
    "revel",
    "talon",
    "prior",
    "knelt",
    "cello",
    "flake",
    "debug",
    "anode",
    "crime",
    "salve",
    "scout",
    "imbue",
    "pinky",
    "stave",
    "vague",
    "chock",
    "fight",
    "video",
    "stone",
    "teach",
    "cleft",
    "frost",
    "prawn",
    "booty",
    "twist",
    "apnea",
    "stiff",
    "plaza",
    "ledge",
    "tweak",
    "board",
    "grant",
    "medic",
    "bacon",
    "cable",
    "brawl",
    "slunk",
    "raspy",
    "forum",
    "drone",
    "women",
    "mucus",
    "boast",
    "toddy",
    "coven",
    "tumor",
    "truer",
    "wrath",
    "stall",
    "steam",
    "axial",
    "purer",
    "daily",
    "trail",
    "niche",
    "mealy",
    "juice",
    "nylon",
    "plump",
    "merry",
    "flail",
    "papal",
    "wheat",
    "berry",
    "cower",
    "erect",
    "brute",
    "leggy",
    "snipe",
    "sinew",
    "skier",
    "penny",
    "jumpy",
    "rally",
    "umbra",
    "scary",
    "modem",
    "gross",
    "avian",
    "greed",
    "satin",
    "tonic",
    "parka",
    "sniff",
    "livid",
    "stark",
    "trump",
    "giddy",
    "reuse",
    "taboo",
    "avoid",
    "quote",
    "devil",
    "liken",
    "gloss",
    "gayer",
    "beret",
    "noise",
    "gland",
    "dealt",
    "sling",
    "rumor",
    "opera",
    "thigh",
    "tonga",
    "flare",
    "wound",
    "white",
    "bulky",
    "etude",
    "horse",
    "circa",
    "paddy",
    "inbox",
    "fizzy",
    "grain",
    "exert",
    "surge",
    "gleam",
    "belle",
    "salvo",
    "crush",
    "fruit",
    "sappy",
    "taker",
    "tract",
    "ovine",
    "spiky",
    "frank",
    "reedy",
    "filth",
    "spasm",
    "heave",
    "mambo",
    "right",
    "clank",
    "trust",
    "lumen",
    "borne",
    "spook",
    "sauce",
    "amber",
    "lathe",
    "carat",
    "corer",
    "dirty",
    "slyly",
    "affix",
    "alloy",
    "taint",
    "sheep",
    "kinky",
    "wooly",
    "mauve",
    "flung",
    "yacht",
    "fried",
    "quail",
    "brunt",
    "grimy",
    "curvy",
    "cagey",
    "rinse",
    "deuce",
    "state",
    "grasp",
    "milky",
    "bison",
    "graft",
    "sandy",
    "baste",
    "flask",
    "hedge",
    "girly",
    "swash",
    "boney",
    "coupe",
    "endow",
    "abhor",
    "welch",
    "blade",
    "tight",
    "geese",
    "miser",
    "mirth",
    "cloud",
    "cabal",
    "leech",
    "close",
    "tenth",
    "pecan",
    "droit",
    "grail",
    "clone",
    "guise",
    "ralph",
    "tango",
    "biddy",
    "smith",
    "mower",
    "payee",
    "serif",
    "drape",
    "fifth",
    "spank",
    "glaze",
    "allot",
    "truck",
    "kayak",
    "virus",
    "testy",
    "tepee",
    "fully",
    "zonal",
    "metro",
    "curry",
    "grand",
    "banjo",
    "axion",
    "bezel",
    "occur",
    "chain",
    "nasal",
    "gooey",
    "filer",
    "brace",
    "allay",
    "pubic",
    "raven",
    "plead",
    "gnash",
    "flaky",
    "munch",
    "dully",
    "eking",
    "thing",
    "slink",
    "hurry",
    "theft",
    "shorn",
    "pygmy",
    "ranch",
    "wring",
    "lemon",
    "shore",
    "mamma",
    "froze",
    "newer",
    "style",
    "moose",
    "antic",
    "drown",
    "vegan",
    "chess",
    "guppy",
    "union",
    "lever",
    "lorry",
    "image",
    "cabby",
    "druid",
    "exact",
    "truth",
    "dopey",
    "spear",
    "cried",
    "chime",
    "crony",
    "stunk",
    "timid",
    "batch",
    "gauge",
    "rotor",
    "crack",
    "curve",
    "latte",
    "witch",
    "bunch",
    "repel",
    "anvil",
    "soapy",
    "meter",
    "broth",
    "madly",
    "dried",
    "scene",
    "known",
    "magma",
    "roost",
    "woman",
    "thong",
    "punch",
    "pasty",
    "downy",
    "knead",
    "whirl",
    "rapid",
    "clang",
    "anger",
    "drive",
    "goofy",
    "email",
    "music",
    "stuff",
    "bleep",
    "rider",
    "mecca",
    "folio",
    "setup",
    "verso",
    "quash",
    "fauna",
    "gummy",
    "happy",
    "newly",
    "fussy",
    "relic",
    "guava",
    "ratty",
    "fudge",
    "femur",
    "chirp",
    "forte",
    "alibi",
    "whine",
    "petty",
    "golly",
    "plait",
    "fleck",
    "felon",
    "gourd",
    "brown",
    "thrum",
    "ficus",
    "stash",
    "decry",
    "wiser",
    "junta",
    "visor",
    "daunt",
    "scree",
    "impel",
    "await",
    "press",
    "whose",
    "turbo",
    "stoop",
    "speak",
    "mangy",
    "eying",
    "inlet",
    "crone",
    "pulse",
    "mossy",
    "staid",
    "hence",
    "pinch",
    "teddy",
    "sully",
    "snore",
    "ripen",
    "snowy",
    "attic",
    "going",
    "leach",
    "mouth",
    "hound",
    "clump",
    "tonal",
    "bigot",
    "peril",
    "piece",
    "blame",
    "haute",
    "spied",
    "undid",
    "intro",
    "basal",
    "shine",
    "gecko",
    "rodeo",
    "guard",
    "steer",
    "loamy",
    "scamp",
    "scram",
    "manly",
    "hello",
    "vaunt",
    "organ",
    "feral",
    "knock",
    "extra",
    "condo",
    "adapt",
    "willy",
    "polka",
    "rayon",
    "skirt",
    "faith",
    "torso",
    "match",
    "mercy",
    "tepid",
    "sleek",
    "riser",
    "twixt",
    "peace",
    "flush",
    "catty",
    "login",
    "eject",
    "roger",
    "rival",
    "untie",
    "refit",
    "aorta",
    "adult",
    "judge",
    "rower",
    "artsy",
    "rural",
    "shave"]
const line1 = ["sq1In", "sq2In", "sq3In", "sq4In", "sq5In"];
const line2 = ["sq6In", "sq7In", "sq8In", "sq9In", "sq10In"];
const line3 = ["sq11In", "sq12In", "sq13In", "sq14In", "sq15In"];
const line4 = ["sq16In", "sq17In", "sq18In", "sq19In", "sq20In"];
const line5 = ["sq21In", "sq22In", "sq23In", "sq24In", "sq25In"];
const line6 = ["sq26In", "sq27In", "sq28In", "sq29In", "sq30In"];

const lineDiv = ["sq1", "sq2", "sq3", "sq4", "sq5", "sq6", "sq7", "sq8", "sq9", "sq10", "sq11", "sq12", "sq13", "sq14", "sq15", "sq16", "sq17", "sq18", "sq19", "sq20", "sq21", "sq22", "sq23", "sq24", "sq25", "sq26", "sq27", "sq28", "sq29", "sq30"];
const line2Div = ["sq6", "sq7", "sq8", "sq9", "sq10"];
const line3Div = ["sq11", "sq12", "sq13", "sq14", "sq15"];
const line4Div = ["sq16", "sq17", "sq18", "sq19", "sq20"];
const line5Div = ["sq21", "sq22", "sq23", "sq24", "sq25"];
const line6Div = ["sq26", "sq27", "sq28", "sq29", "sq30"];
const fives = ["sq5In", "sq10In", "sq15In", "sq20In", "sq25In", "sq30In"];

let actId = document.activeElement.id;
let playerAns = [];
let splitAns = [];
let colorArr = [];
let joinedAns = null;
let activeEl = null;

// Classes

class Truthfield {
    constructor(position, letter) {

        this.position = position,
        this.letter = letter



    }



}


// Functions

const mouseD = () => {

    activeEl = document.activeElement;
    


}

const lightMode = () => {

    let actEl = activeEl.getAttribute("id")




    document.body.setAttribute("class", "light-mode");
    document.getElementById("board").setAttribute("class", "light-mode");
    lineDiv.forEach((ex) => {

        document.getElementById(ex).style.borderColor = "black";
        


    })

    inputIdArr.forEach((ex) => {

        document.getElementById(ex).style.color = "black";
        


    })

    document.getElementById("playdark").innerHTML = "Dark Mode";
    document.getElementById("playdark").onclick = darkMode;

    document.getElementById(actEl).focus()

}

const darkMode = () => {
    
    let actEl = activeEl.getAttribute("id")
    document.body.setAttribute("class", "dark-mode");
    document.getElementById("board").setAttribute("class", "dark-mode");
    lineDiv.forEach((ex) => {

        document.getElementById(ex).style.borderColor = "white";
        


    })

    inputIdArr.forEach((ex) => {

        document.getElementById(ex).style.color = "white";
        


    })

    document.getElementById("playdark").innerHTML = "Light Mode";
    document.getElementById("playdark").onclick = lightMode;
    document.getElementById(actEl).focus()


    
}

const successFailCheck = (line) => {

    let checkArr = [];
    

    switch (line[0]) {

        case "sq1In":
            line.forEach((ex) => {

                let check = document.getElementById(ex).getAttribute("class");
                
                if (check === "green") {

                    checkArr.push(1);

                }else {
                    checkArr.push(0);
                }


            })
            break;

        case "sq6In":

            line.forEach((ex) => {

                let check = document.getElementById(ex).getAttribute("class");
                
                if (check === "green") {

                    checkArr.push(1);

                }else {
                    checkArr.push(0);
                }


            })
            break;

        case "sq11In":

            line.forEach((ex) => {

                let check = document.getElementById(ex).getAttribute("class");
                
                if (check === "green") {

                    checkArr.push(1);

                }else {
                    checkArr.push(0);
                }


            })
            break;

        case "sq16In":

            line.forEach((ex) => {

                let check = document.getElementById(ex).getAttribute("class");
                
                if (check === "green") {

                    checkArr.push(1);

                }else {
                    checkArr.push(0);
                }


            })
            break;

        case "sq21In":

            line.forEach((ex) => {

                let check = document.getElementById(ex).getAttribute("class");
                
                if (check === "green") {

                    checkArr.push(1);

                }else {
                    checkArr.push(0);
                }


            })
            break;

        case "sq26In":

            line.forEach((ex) => {

                let check = document.getElementById(ex).getAttribute("class");
                
                if (check === "green") {

                    checkArr.push(1);

                }else {
                    checkArr.push(0);
                }


            })
            break;



    }


    let result = checkArr.reduce((accum, val) => {

        return accum + val;

    })

    if (result === 5) {

        let conf = confirm("You win!\nPlay again?");
        if (conf === true) {

            window.location.reload(true);

        }

    }else if (line[0] === "sq26In") {

        let conf1 = confirm(`You lose! The answer was '${joinedAns}.' \nPlay again?`);
        if (conf1 === true) {

            window.location.reload(true);

        }

    }

}

const ansCheck = (userAns, autoAns, line) => {

    colorArr = [];
    let arrPos = [];
    
    

    userAns.forEach((ex, idx) => {

        
        let lowerEx = ex.toLowerCase();

        if (autoAns.includes(lowerEx)) {

            if (lowerEx === autoAns[idx]) {

                let newObj = new Truthfield(true, true);
                    colorArr.push(newObj);
                    return;


            }else {

                let newObj = new Truthfield(false, true);
                    colorArr.push(newObj); 
                    return;


            }



        }else {

            let newObj = new Truthfield(false, false);
            colorArr.push(newObj); 
            return;
        }





    })

    

    colorArr.forEach((zee, ix) => {

        
        

        if ((zee.position && zee.letter) === true) {
            


            document.getElementById(line[ix]).setAttribute("class", "green");


        }else if ((zee.letter || zee.position) === true) {
            

            document.getElementById(line[ix]).setAttribute("class", "yellow");

        }else {
            

            document.getElementById(line[ix]).setAttribute("class", "grey");


        }



    })


}


const moveFunc = (old, fresh) => {

    let enteredKey = document.getElementById(old).value;
    let capKey = enteredKey.toUpperCase();
    let innerText = document.getElementById(old).value;


    if (fresh === "sq31In") {

        document.getElementById(old).value = innerText.replace(enteredKey, capKey);
        document.getElementById(old).blur();
        document.getElementById(old).toggleAttribute("disabled");

    }else {

        document.getElementById(old).value = innerText.replace(enteredKey, capKey);
        
        document.getElementById(fresh).toggleAttribute("disabled");
        document.getElementById(fresh).focus();
        document.getElementById(old).blur();
        document.getElementById(old).toggleAttribute("disabled");

    }





}


const genAns = () => {

    let rand = Math.floor(Math.random() * answers.length);
    let answer = answers[rand];
    

    for (i=0; i<6; i++) {

        splitAns.push(answer.charAt(i));



    }
    splitAns.pop();
    // This will give the answer in console. Keeping in case I need to use it again.
    // console.log(splitAns); 
    joinedAns = splitAns.join("");
    
}



const enterCheck = (line) => {

    playerAns = [];

  line.forEach((ex) => {


    let txtInp = document.getElementById(ex).value;


    playerAns.push(txtInp);



  })
  

}



const setFocus = () => {

    document.getElementById("sq1In").focus();

}


const autoMoveCursor = (elId) => {

    
    let pos = 0;
    let newId = null;
    let kyCde = event.keyCode;
    let enteredKey = document.getElementById(elId).value;
    let capKey = enteredKey.toUpperCase();
    let innerText = document.getElementById(elId).value;
    
    



    if (kyCde >= 65 && kyCde <= 90){
        let actId = document.activeElement.id;
        

        if (fives.includes(actId)) {



        }else {

            inputIdArr.forEach((val, idx) => {
            

                switch (actId) {
    
                    case "sq5In":
                        break;
    
                    case "sq10In":
                        break;
    
                    case "sq15In":
                        break;
    
                    case "sq20In":
                        break;
    
                    case "sq25In":
                        break;
    
                    case "sq30In":
                        break;
    
                    default:
    
                        if (val === elId) {
                            pos = idx + 1;
                            
                        }
    
                        inputIdArr.forEach((val, idx) => {
    
                            if (idx === pos) {
                                newId = val;
                            }
                
                        })
                        break;
    
                        
                        
    
                }
                
    
                
    
    
            }) 

            moveFunc(elId, newId);
    
            


        }

        

    }


}





// Event Listeners


document.addEventListener("keyup", function() {

    if (event.key === "Backspace") {

        let actId = document.activeElement.id;
        
        let pastId = null;
        


        inputIdArr.forEach((val, idx) => {
            
            

            if (val === actId) {
                if ((idx-1) <= -1){

                }else {

                    switch (actId) {

                        case "sq6In":
                            break;
                        
                        case "sq11In":
                            break;

                        case "sq16In":
                            break;

                        case "sq21In":
                            break;

                        case "sq26In":
                            break;

                        default:

                            pastId = idx - 1;
                            document.getElementById(inputIdArr[pastId]).toggleAttribute("disabled");
                            document.getElementById(inputIdArr[pastId]).focus();
                            document.getElementById(actId).blur();
                            document.getElementById(actId).toggleAttribute("disabled");
                            break;

                    }

                }

                
                
            }


        })

        

    }else {

    };


})


document.addEventListener("keyup", function() {


    let actId = document.activeElement.id;
    
    let kyCde = event.keyCode;
    let enteredKey = document.getElementById(actId).value;
    let capKey = enteredKey.toUpperCase();
    let innerText = document.getElementById(actId).value;

    if (kyCde === 13) {

        switch(actId) {

            case "sq5In":
                enterCheck(line1);
                moveFunc(actId, "sq6In");
                ansCheck(playerAns, splitAns, line1);
                successFailCheck(line1);
                break;
    
            case "sq10In":
                enterCheck(line2);
                moveFunc(actId, "sq11In");
                ansCheck(playerAns, splitAns, line2);
                successFailCheck(line2);
                break;
    
            case "sq15In":
                enterCheck(line3);
                moveFunc(actId, "sq16In");
                ansCheck(playerAns, splitAns, line3);
                successFailCheck(line3);
                break;
    
            case "sq20In":
                enterCheck(line4);
                moveFunc(actId, "sq21In");
                ansCheck(playerAns, splitAns, line4);
                successFailCheck(line4);
                break;
    
            case "sq25In":
                enterCheck(line5);
                moveFunc(actId, "sq26In");
                ansCheck(playerAns, splitAns, line5);
                successFailCheck(line5);
                break;
    
            case "sq30In":
                enterCheck(line6);
                moveFunc(actId, "sq31In");
                ansCheck(playerAns, splitAns, line6);
                successFailCheck(line6);
                break;
    
            default:
                
                break;
                
    
    
        }
        
        
        
        
        
        
        
        

    }

})


