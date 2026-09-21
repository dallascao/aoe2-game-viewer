const SUPPORTED_LOCALES = [
  "en",
  "pt",
  "de",
  "es",
  "fr",
  "hi",
  "it",
  "ja",
  "ko",
  "ms",
  "ru",
  "tr",
  "zh-Hant",
  "vi",
  "zh-Hans",
  "pl",
];

const LOCALE_LABELS = {
  en: "English",
  pt: "Português",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  hi: "हिन्दी",
  it: "Italiano",
  ja: "日本語",
  ko: "한국어",
  ms: "Bahasa Melayu",
  ru: "Русский",
  tr: "Türkçe",
  "zh-Hant": "繁體中文",
  vi: "Tiếng Việt",
  "zh-Hans": "简体中文",
  pl: "Polski",
};

const LOCALE_ALIASES = {
  en: "en",
  "en-us": "en",
  "en-gb": "en",
  pt: "pt",
  "pt-br": "pt",
  "pt-pt": "pt",
  de: "de",
  "de-de": "de",
  es: "es",
  "es-es": "es",
  "es-mx": "es",
  fr: "fr",
  "fr-fr": "fr",
  hi: "hi",
  "hi-in": "hi",
  it: "it",
  "it-it": "it",
  ja: "ja",
  "ja-jp": "ja",
  ko: "ko",
  "ko-kr": "ko",
  ms: "ms",
  "ms-my": "ms",
  ru: "ru",
  "ru-ru": "ru",
  tr: "tr",
  "tr-tr": "tr",
  vi: "vi",
  "vi-vn": "vi",
  pl: "pl",
  "pl-pl": "pl",
  zh: "zh-Hans",
  "zh-cn": "zh-Hans",
  "zh-sg": "zh-Hans",
  "zh-hans": "zh-Hans",
  "zh-hans-cn": "zh-Hans",
  "zh-hans-sg": "zh-Hans",
  "zh-tw": "zh-Hant",
  "zh-hk": "zh-Hant",
  "zh-mo": "zh-Hant",
  "zh-hant": "zh-Hant",
  "zh-hant-tw": "zh-Hant",
  "zh-hant-hk": "zh-Hant",
};

const DEFAULT_LOCALE = "en";
const LOCALE_COOKIE_NAME = "aoe2viewer.locale";
const COBRA_CAR_ICON_TOKEN = "{cobraCarIcon}";
const COBRA_CAR_ICON_PATH = "/icons/cobra-car.svg";
const API_BASE_URL = "https://api.aoe2viewer.com";
const DOWNLOAD_URL_BASE = "https://api.aoe2viewer.com/shared";
const INSTANT_PLAY_URL_BASE = "aoe2gv://shared";
const DATA_API_BASE_URL = "https://data.aoe2viewer.com";
const DATA_API_QUERY_LIMIT = 100;
const AGE_STATS_LEADERBOARD_URL = "https://api.ageofempires.com/api/v2/ageii/Leaderboard";
const AOE2_COMPANION_RANK_URL = "https://data.aoe2companion.com/api/nightbot/rank";
const OFFICIAL_REPLAY_URL_BASE = "https://api.ageofempires.com/api/GameStats/AgeII/GetMatchReplay/";
const APP_DOWNLOAD_URL = "https://downloads.aoe2viewer.com/releases/AOE2-game-viewer-x64-Setup.exe";
const SITE_ORIGIN = "https://aoe2viewer.com";
const STATIC_SEO_PAGES = new Map([
  ["/", {
    assetPath: "/index.html",
    path: "/",
    titleKey: "replaySearch.pageTitle",
    descriptionKey: "replaySearch.lead",
  }],
  ["/app/", {
    assetPath: "/app/index.html",
    path: "/app/",
    titleKey: "brand",
    descriptionKey: "hero.lede",
  }],
  ["/updates/", {
    assetPath: "/updates/index.html",
    path: "/updates/",
    titleKey: "updates.pageTitle",
    descriptionKey: "updates.intro",
  }],
  ["/privacy.html", {
    assetPath: "/privacy.html",
    path: "/privacy.html",
    titleKey: "privacy.pageTitle",
    descriptionKey: "privacy.intro",
  }],
]);
const CANONICAL_REDIRECT_PATHS = new Map([
  ["/index.html", "/"],
  ["/app", "/app/"],
  ["/app/index.html", "/app/"],
  ["/updates", "/updates/"],
  ["/updates.html", "/updates/"],
  ["/updates/index.html", "/updates/"],
  ["/search", "/search/"],
  ["/players", "/players/"],
  ["/civilizations", "/civilizations/"],
  ["/maps", "/maps/"],
  ["/strategies", "/strategies/"],
  ["/followups", "/followups/"],
]);
const TOP_PLAYERS_CACHE_KEY = "players.top.ageiide.region7.matchType3.count100";
const TOP_PLAYERS_REFRESH_LOCK_KEY = `${TOP_PLAYERS_CACHE_KEY}.refreshing`;
const TOP_PLAYERS_CACHE_TTL_MS = 24 * 60 * 60 * 1000;
const TOP_PLAYERS_REFRESH_LOCK_TTL_MS = 10 * 60 * 1000;
const RATE_LIMIT_REQUESTS_PER_MINUTE = 60;
const RATE_LIMIT_BOT_REQUESTS_PER_MINUTE = 30;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MITIGATION_MS = 5 * 60 * 1000;
const RATE_LIMIT_RETENTION_MS = 15 * 60 * 1000;
const RATE_LIMIT_PRUNE_PROBABILITY = 0.001;
const RATE_LIMIT_STATIC_ASSET_EXTENSIONS = new Set([
  ".avif",
  ".css",
  ".gif",
  ".ico",
  ".jpeg",
  ".jpg",
  ".js",
  ".map",
  ".mjs",
  ".otf",
  ".png",
  ".svg",
  ".ttf",
  ".webp",
  ".woff",
  ".woff2",
]);
const BOT_MANAGEMENT_AUTOMATION_SCORE_THRESHOLD = 30;
const AUTOMATED_USER_AGENT_PATTERN = /bot|crawler|spider|slurp|curl|wget|python-requests|python-httpx|aiohttp|go-http-client|libwww-perl|scrapy|headlesschrome|phantomjs|selenium|playwright|puppeteer|facebookexternalhit/i;
const DASHBOARD_PATH = "/dashboard";
const DASHBOARD_API_PATH = "/api/dashboard/connections";
const VISIT_TRACKING_EXCLUDED_PATHS = new Set([DASHBOARD_PATH, DASHBOARD_API_PATH, "/__health"]);
const KNOWN_BOT_USER_AGENTS = [
  ["AdsBot-Google", /adsbot-google/i],
  ["Mediapartners-Google", /mediapartners-google/i],
  ["APIs-Google", /apis-google/i],
  ["Google-InspectionTool", /google-inspectiontool/i],
  ["Storebot-Google", /storebot-google/i],
  ["GoogleOther", /googleother/i],
  ["Googlebot", /googlebot/i],
  ["Bingbot", /bingbot|adidxbot|microsoftpreview/i],
  ["DuckDuckBot", /duckduckbot/i],
  ["YandexBot", /yandexbot/i],
  ["Baiduspider", /baiduspider/i],
  ["Applebot", /applebot/i],
  ["PetalBot", /petalbot/i],
  ["ChatGPT-User", /chatgpt-user/i],
  ["OAI-SearchBot", /oai-searchbot/i],
  ["GPTBot", /gptbot/i],
  ["Claude SearchBot", /claude-searchbot/i],
  ["Claude User", /claude-user/i],
  ["ClaudeBot", /claudebot|claude-web/i],
  ["Perplexity-User", /perplexity-user/i],
  ["PerplexityBot", /perplexitybot/i],
  ["Amzn-SearchBot", /amzn-searchbot/i],
  ["Amzn-User", /amzn-user/i],
  ["Amazonbot", /amazonbot/i],
  ["Meta Web Crawlers", /meta-webindexer|meta-externalads|meta-externalagent|meta-externalfetcher|facebookexternalhit|facebot/i],
  ["ShapBot", /shapbot/i],
  ["CCBot", /ccbot/i],
  ["AhrefsBot", /ahrefsbot/i],
  ["SemrushBot", /semrushbot/i],
  ["MJ12bot", /mj12bot/i],
  ["DotBot", /dotbot/i],
  ["Bytespider", /bytespider/i],
  ["Pinterestbot", /pinterestbot/i],
  ["Discordbot", /discordbot/i],
  ["Slackbot", /slackbot/i],
  ["Twitterbot", /twitterbot/i],
  ["LinkedInBot", /linkedinbot/i],
  ["TelegramBot", /telegrambot/i],
  ["WhatsApp", /whatsapp/i],
  ["Pingdom", /pingdom/i],
];
const RATE_LIMIT_BOT_EXCEPTION_NAMES = new Set([
  "AdsBot-Google",
  "Mediapartners-Google",
  "APIs-Google",
  "Google-InspectionTool",
  "Storebot-Google",
  "GoogleOther",
  "Googlebot",
  "Bingbot",
  "DuckDuckBot",
  "YandexBot",
  "Baiduspider",
  "Applebot",
  "PetalBot",
]);
const REPLAY_SEARCH_PAGE_SIZE = 25;
const REPLAY_RATING_ANY_VALUE = "any";
const REPLAY_RATING_RANGES = [
  REPLAY_RATING_ANY_VALUE,
  "1700-4000",
  "1400-1700",
  "1300-1400",
  "1200-1300",
  "1100-1200",
  "900-1000",
  "700-900",
  "400-700",
  "0-400",
];
const REPLAY_LENGTH_RANGES = [
  "00:00:00-00:15:00",
  "00:15:00-00:30:00",
  "00:30:00-00:45:00",
  "00:45:00-01:00:00",
  "01:00:00-01:30:00",
  "01:30:00-02:00:00",
  "02:00:00-03:00:00",
  "03:00:00-10:00:00",
];
const RECENT_HIGHLIGHTS_LENGTH_RANGE = "00:30:00-07:00:00";
const DIRECTORY_SEARCH_RATING_RANGE = "1700-4000";
const DIRECTORY_SEARCH_MIN_RESULTS = 10;
const DATA_API_DEFAULT_FILTERS = {
  ratingRange: REPLAY_RATING_ANY_VALUE,
  lengthRange: "any",
  aiPlayer: "any",
  difficulty: "any",
  startingAge: "any",
  fullTechTree: "any",
  allowCheats: "any",
  endingAge: "any",
  lockTeams: "any",
  population: "any",
  resources: "any",
  teamTogether: "any",
  treatyLength: "any",
  victory: "any",
  revealMap: "any",
};
const DATA_API_LIST_VALUE_NAMES = [
  "leaderboard",
  "map",
  "gameMode",
  "strategy",
  "followup",
  "difficulty",
  "startingAge",
  "endingAge",
  "population",
  "resources",
  "victory",
  "revealMap",
];
const DATA_API_TREATY_LENGTHS = [0, 5, 10, 20, 30, 40, 60, 90];
const REPLAY_TABLE_COLUMNS = [
  { key: "dateTime", labelKey: "replaySearch.dateTime" },
  { key: "map", labelKey: "replaySearch.map" },
  { key: "length", labelKey: "replaySearch.length" },
  { key: "playersA", labelKey: "replaySearch.playersA" },
  { key: "civsA", labelKey: "replaySearch.civsA" },
  { key: "playerAStrategy", labelKey: "replaySearch.playerAStrategy" },
  { key: "playerAFollowup", labelKey: "replaySearch.playerAFollowup" },
  { key: "playersB", labelKey: "replaySearch.playersB" },
  { key: "civsB", labelKey: "replaySearch.civsB" },
  { key: "playerBStrategy", labelKey: "replaySearch.playerBStrategy" },
  { key: "playerBFollowup", labelKey: "replaySearch.playerBFollowup" },
];
const DUPLICATE_MAP_LABEL_VALUES = new Set([
  "p_continental",
  "p_highland",
  "p_mediterranean",
  "p_megarandom",
  "p_nomad",
  "p_oasis",
  "p_rivers",
  "rm_arabia",
  "rm_arena",
  "rm_black_forest",
  "rm_continental",
  "rm_fortified_clearing",
  "rm_glade",
  "rm_highland",
  "rm_mediterranean",
  "rm_megarandom",
  "rm_nomad",
  "rm_oasis",
  "rm_qs_arabia",
  "rm_qs_arena",
  "rm_qs_black_forest",
  "rm_qs_fortified_clearing",
  "rm_qs_glade",
  "rm_qs_nomad",
  "rm_qs_runestones",
  "rm_rivers",
  "rm_runestones",
]);
const REPLAY_STRATEGY_LABEL_KEYS = new Map([
  ["drush", "replaySearch.strategyName.drush"],
  ["drushdarkrush", "replaySearch.strategyName.drush"],
  ["archerskirms", "replaySearch.strategyName.archerSkirms"],
  ["archersandskirms", "replaySearch.strategyName.archerSkirms"],
  ["scoutandarcher", "replaySearch.strategyName.scoutAndArcher"],
  ["scout", "replaySearch.strategyName.scout"],
  ["archer", "replaySearch.strategyName.archer"],
  ["maa", "replaySearch.strategyName.maa"],
  ["maamanatarms", "replaySearch.strategyName.maa"],
  ["champirush", "replaySearch.strategyName.champiRush"],
  ["skirms", "replaySearch.strategyName.skirms"],
  ["towerrush", "replaySearch.strategyName.towerRush"],
  ["towncenterdrop", "replaySearch.strategyName.townCenterDrop"],
  ["tcdroptowncenterdrop", "replaySearch.strategyName.townCenterDrop"],
  ["defensive", "replaySearch.strategyName.defensive"],
  ["hoangsiegeandmonk", "replaySearch.strategyName.hoang"],
  ["hoang", "replaySearch.strategyName.hoang"],
  ["phosphorucastleanduniqueunits", "replaySearch.strategyName.phosphoruCastleUnique"],
  ["forwardcastle", "replaySearch.strategyName.forwardCastle"],
  ["youpuddingserjeants", "replaySearch.strategyName.youpudding"],
  ["youpudding", "replaySearch.strategyName.youpudding"],
  ["fastimp", "replaySearch.strategyName.fastImp"],
  ["quickcastle", "replaySearch.strategyName.quickCastle"],
  ["fastcastle", "replaySearch.strategyName.quickCastle"],
  ["phosphoru", "replaySearch.strategyName.phosphoru"],
  ["unknown", "common.unknown"],
]);
const REPLAY_FOLLOWUP_LABEL_KEYS = new Map([
  ["archer", "replaySearch.followupName.archer"],
  ["booming", "replaySearch.followupName.booming"],
  ["camelrider", "replaySearch.followupName.camelRider"],
  ["cavalryarcher", "replaySearch.followupName.cavalryArcher"],
  ["crossbowman", "replaySearch.followupName.crossbowman"],
  ["knight", "replaySearch.followupName.knight"],
  ["monk", "replaySearch.followupName.monk"],
  ["pikeman", "replaySearch.followupName.pikeman"],
  ["scorpion", "replaySearch.followupName.scorpion"],
  ["skirmisher", "replaySearch.followupName.skirmisher"],
  ["uniqueunits", "replaySearch.followupName.uniqueUnits"],
  ["fastimperial", "replaySearch.followupName.fastImperial"],
  ["defensive", "replaySearch.followupName.defensive"],
  ["notapplicable", "replaySearch.notApplicable"],
  ["unknown", "replaySearch.followupName.unknown"],
]);
const SEO_ADVANCED_FILTER_FIELDS = [
  "aiPlayer",
  "difficulty",
  "startingAge",
  "fullTechTree",
  "allowCheats",
  "endingAge",
  "lockTeams",
  "population",
  "resources",
  "teamTogether",
  "treatyLength",
  "victory",
  "revealMap",
];
const BOOLEAN_SEARCH_FILTER_FIELDS = ["aiPlayer", "fullTechTree", "allowCheats", "lockTeams", "teamTogether"];
const SEARCH_QUERY_FIELDS = [
  "player",
  "profileId",
  "player2",
  "profileId2",
  "civ",
  "civ2",
  "map",
  "leaderboard",
  "gameMode",
  "lengthRange",
  "strategy",
  "followup",
  "ratingRange",
  ...SEO_ADVANCED_FILTER_FIELDS,
  "page",
  "lang",
];
const CIVILIZATION_OPTIONS = [
  ["britons", "Britons"],
  ["franks", "Franks"],
  ["goths", "Goths"],
  ["teutons", "Teutons"],
  ["japanese", "Japanese"],
  ["chinese", "Chinese"],
  ["byzantines", "Byzantines"],
  ["persians", "Persians"],
  ["saracens", "Saracens"],
  ["turks", "Turks"],
  ["vikings", "Vikings"],
  ["mongols", "Mongols"],
  ["celts", "Celts"],
  ["spanish", "Spanish"],
  ["aztecs", "Aztecs"],
  ["mayans", "Maya"],
  ["huns", "Huns"],
  ["koreans", "Koreans"],
  ["italians", "Italians"],
  ["hindustanis", "Hindustanis"],
  ["incas", "Inca"],
  ["magyars", "Magyars"],
  ["slavs", "Slavs"],
  ["portuguese", "Portuguese"],
  ["ethiopians", "Ethiopians"],
  ["malians", "Malians"],
  ["berbers", "Berbers"],
  ["khmer", "Khmer"],
  ["malay", "Malay"],
  ["burmese", "Burmese"],
  ["vietnamese", "Vietnamese"],
  ["bulgarians", "Bulgarians"],
  ["tatars", "Tatars"],
  ["cumans", "Cumans"],
  ["lithuanians", "Lithuanians"],
  ["burgundians", "Burgundians"],
  ["sicilians", "Sicilians"],
  ["poles", "Poles"],
  ["bohemians", "Bohemians"],
  ["dravidians", "Dravidians"],
  ["bengalis", "Bengalis"],
  ["gurjaras", "Gurjaras"],
  ["romans", "Romans"],
  ["armenians", "Armenians"],
  ["georgians", "Georgians"],
  ["spartans", "Spartans"],
  ["shu", "Shu"],
  ["wu", "Wu"],
  ["wei", "Wei"],
  ["jurchens", "Jurchens"],
  ["khitans", "Khitans"],
  ["macedonians", "Macedonians"],
  ["thracians", "Thracians"],
  ["puru", "Puru"],
  ["muisca", "Muisca"],
  ["mapuche", "Mapuche"],
  ["tupi", "Tupi"],
].map(([value, label]) => ({ value, label }));
const CIVILIZATION_ICON_VALUES = new Set([
  "armenians",
  "aztecs",
  "bengalis",
  "berbers",
  "bohemians",
  "britons",
  "bulgarians",
  "burgundians",
  "burmese",
  "byzantines",
  "celts",
  "chinese",
  "cumans",
  "dravidians",
  "ethiopians",
  "franks",
  "georgians",
  "goths",
  "gurjaras",
  "hindustanis",
  "huns",
  "incas",
  "italians",
  "japanese",
  "jurchens",
  "khitans",
  "khmer",
  "koreans",
  "lithuanians",
  "magyars",
  "malay",
  "malians",
  "mapuche",
  "mayans",
  "mongols",
  "muisca",
  "persians",
  "poles",
  "portuguese",
  "romans",
  "saracens",
  "shu",
  "sicilians",
  "slavs",
  "spanish",
  "tatars",
  "teutons",
  "tupi",
  "turks",
  "vietnamese",
  "vikings",
  "wei",
  "wu",
  "macedonians",
  "puru",
  "spartans",
  "thracians",
]);
const DEFAULT_MESSAGES = {
  skipLink: "Skip to content",
  brand: "AOE2 game viewer",
  "nav.replaySearch": "Replay search",
  "nav.players": "Players",
  "nav.civilizations": "Civilizations",
  "nav.maps": "Maps",
  "nav.strategies": "Strategies",
  "nav.followups": "Followups",
  "nav.app": "App",
  "language.label": "Language",
  "site.databaseNotice": "Download the AOE2 viewer app to enjoy the one-click replay launch and the AOE2 spy feature that shows your opponent's strategies in live games!",
  "site.downloadApp": "download the app",
  "site.databaseNoticeHtml": "Download the <a href=\"https://aoe2viewer.com/app/\">AOE2 viewer app</a> to enjoy the <a href=\"https://aoe2viewer.com/app/#load-recent-replays-instantly\">one-click replay launch</a> and the <a href=\"https://aoe2viewer.com/app/#aoe2-spy\">AOE2 spy</a> feature that shows your opponent's strategies in live games!",
  "site.topPlayersOnlyNotice": "Only matches from top players are included. To specify a elo range, use the {replaySearchLink}.",
  "hero.updates": "Updates",
  "seo.siteName": "AOE2 game viewer",
  "replaySearch.pageTitle": "AOE2 replay search",
  "replaySearch.resultsPageTitle": "AOE2 replay search results",
  "replaySearch.resultsTitle": "Search results",
  "replaySearch.searchHistory": "Search history",
  "replaySearch.resultsForTitle": "AOE2 replays for {query}",
  "replaySearch.resultsDescription": "Search Age of Empires II: Definitive Edition replay results by player, civilization, map, Elo, leaderboard, and game settings.",
  "replaySearch.resultsForDescription": "Browse Age of Empires II: Definitive Edition replay results for {query}. Launch or download recorded games with AOE2 game viewer.",
  "replaySearch.emptyPrompt": "Use the filters above to search recorded games.",
  "replaySearch.noResults": "No recorded games matched these filters.",
  "replaySearch.searchFailed": "Replay search is temporarily unavailable.",
  "replaySearch.resultsMeta": "{total} results. Page {page} of {pages}.",
  "replaySearch.previous": "Previous",
  "replaySearch.next": "Next",
  "replaySearch.pageOf": "Page {page} of {pages}",
  "replaySearch.dateTime": "Date Time",
  "replaySearch.map": "Map",
  "replaySearch.length": "Length",
  "replaySearch.playersA": "Players A",
  "replaySearch.playersB": "Players B",
  "replaySearch.civsA": "Civs A",
  "replaySearch.civsB": "Civs B",
  "replaySearch.playerAStrategy": "Player A Strategy",
  "replaySearch.playerBStrategy": "Player B Strategy",
  "replaySearch.playerAFollowup": "Player A Followup",
  "replaySearch.playerBFollowup": "Player B Followup",
  "replaySearch.clickToDetect": "Click to detect",
  "replaySearch.detecting": "Detecting...",
  "replaySearch.notApplicable": "Not applicable",
  "replaySearch.strategyDetectFailed": "Strategy detection failed.",
  "replaySearch.strategyName.drush": "Drush (Dark Rush)",
  "replaySearch.strategyName.archerSkirms": "Archers and Skirms",
  "replaySearch.strategyName.scoutAndArcher": "Scout and Archer",
  "replaySearch.strategyName.scout": "Scout",
  "replaySearch.strategyName.archer": "Archer",
  "replaySearch.strategyName.maa": "MAA (Man-at-Arms)",
  "replaySearch.strategyName.champiRush": "Champi Rush",
  "replaySearch.strategyName.skirms": "Skirms",
  "replaySearch.strategyName.towerRush": "Tower Rush",
  "replaySearch.strategyName.townCenterDrop": "TC Drop (Town Center Drop)",
  "replaySearch.strategyName.defensive": "Defensive",
  "replaySearch.strategyName.hoang": "Hoang (Siege and Monk)",
  "replaySearch.strategyName.phosphoruCastleUnique": "Phosphoru (Castle and Unique Units)",
  "replaySearch.strategyName.forwardCastle": "Forward Castle",
  "replaySearch.strategyName.youpudding": "Youpudding (Serjeants)",
  "replaySearch.strategyName.fastImp": "Fast Imp (Fast Imperial)",
  "replaySearch.strategyName.quickCastle": "Fast Castle",
  "replaySearch.strategyName.phosphoru": "Phosphoru",
  "replaySearch.followupName.archer": "Archer",
  "replaySearch.followupName.booming": "Booming",
  "replaySearch.followupName.camelRider": "Camel Rider",
  "replaySearch.followupName.cavalryArcher": "Cavalry Archer",
  "replaySearch.followupName.crossbowman": "Crossbowman",
  "replaySearch.followupName.knight": "Knight",
  "replaySearch.followupName.monk": "Monk",
  "replaySearch.followupName.pikeman": "Pikeman",
  "replaySearch.followupName.scorpion": "Scorpion",
  "replaySearch.followupName.skirmisher": "Skirmisher",
  "replaySearch.followupName.uniqueUnits": "Unique Units",
  "replaySearch.followupName.fastImperial": "Fast Imperial",
  "replaySearch.followupName.defensive": "Defensive",
  "replaySearch.followupName.militia": "Militia",
  "replaySearch.followupName.manAtArms": "Man-at-Arms",
  "replaySearch.followupName.spearman": "Spearman",
  "replaySearch.followupName.scoutCavalry": "Scout Cavalry",
  "replaySearch.followupName.longSwordsman": "Long Swordsman",
  "replaySearch.followupName.mangonel": "Mangonel",
  "replaySearch.followupName.batteringRam": "Battering Ram",
  "replaySearch.followupName.armoredElephant": "Armored Elephant",
  "replaySearch.followupName.galley": "Galley",
  "replaySearch.followupName.fireShip": "Fire Ship",
  "replaySearch.followupName.handCannoneer": "Hand Cannoneer",
  "replaySearch.followupName.slinger": "Slinger",
  "replaySearch.followupName.eagleScout": "Eagle Scout",
  "replaySearch.followupName.eagleWarrior": "Eagle Warrior",
  "replaySearch.followupName.elephantArcher": "Elephant Archer",
  "replaySearch.followupName.battleElephant": "Battle Elephant",
  "replaySearch.followupName.steppeLancer": "Steppe Lancer",
  "replaySearch.followupName.shrivamshaRider": "Shrivamsha Rider",
  "replaySearch.followupName.xolotlWarrior": "Xolotl Warrior",
  "replaySearch.followupName.genitour": "Genitour",
  "replaySearch.followupName.condottiero": "Condottiero",
  "replaySearch.followupName.flemishMilitia": "Flemish Militia",
  "replaySearch.followupName.missionary": "Missionary",
  "replaySearch.followupName.bombardCannon": "Bombard Cannon",
  "replaySearch.followupName.siegeTower": "Siege Tower",
  "replaySearch.followupName.trebuchet": "Trebuchet",
  "replaySearch.followupName.petard": "Petard",
  "replaySearch.followupName.fireGalley": "Fire Galley",
  "replaySearch.followupName.demolitionRaft": "Demolition Raft",
  "replaySearch.followupName.demolitionShip": "Demolition Ship",
  "replaySearch.followupName.heavyDemolitionShip": "Heavy Demolition Ship",
  "replaySearch.followupName.cannonGalleon": "Cannon Galleon",
  "replaySearch.followupName.dromon": "Dromon",
  "replaySearch.followupName.thirisadai": "Thirisadai",
  "replaySearch.followupName.caravel": "Caravel",
  "replaySearch.followupName.rathaMelee": "Ratha (Melee)",
  "replaySearch.followupName.rathaRanged": "Ratha (Ranged)",
  "replaySearch.followupName.serjeant": "Serjeant",
  "replaySearch.followupName.champiWarrior": "Champi Warrior",
  "replaySearch.followupName.blackwoodArcher": "Blackwood Archer",
  "replaySearch.followupName.champiScout": "Champi Scout",
  "replaySearch.followupName.genoeseCrossbowman": "Genoese Crossbowman",
  "replaySearch.followupName.siege": "Siege",
  "replaySearch.followupName.unknown": "Unknown",
  "replaySearch.actions": "Actions",
  "replaySearch.play": "Play",
  "replaySearch.addFavorite": "Add to favorites",
  "replaySearch.removeFavorite": "Remove favorite",
  "replaySearch.share": "Download",
  "replaySearch.download": "Download",
  "replaySearch.searchByPlayer": "Search by {player}",
  "replaySearch.searchByMap": "Search by {map}",
  "replaySearch.filter.player": "Player",
  "replaySearch.filter.player2": "Player 2",
  "replaySearch.filter.playerGeneric": "Player",
  "replaySearch.filter.civ": "Civilization",
  "replaySearch.filter.civ2": "Civilization 2",
  "replaySearch.filter.civGeneric": "Civ",
  "replaySearch.filter.map": "Map",
  "replaySearch.filter.leaderboard": "Leaderboard",
  "replaySearch.filter.gameMode": "Game mode",
  "replaySearch.filter.strategy": "Strategy",
  "replaySearch.filter.followup": "Followup",
  "replaySearch.filter.ratingRange": "Elo",
  "replaySearch.filter.aiPlayer": "AI players",
  "replaySearch.filter.difficulty": "Difficulty",
  "replaySearch.filter.startingAge": "Starting age",
  "replaySearch.filter.fullTechTree": "Full tech tree",
  "replaySearch.filter.allowCheats": "Allow cheats",
  "replaySearch.filter.endingAge": "Ending age",
  "replaySearch.filter.lockTeams": "Lock teams",
  "replaySearch.filter.population": "Population",
  "replaySearch.filter.resources": "Resources",
  "replaySearch.filter.teamTogether": "Team together",
  "replaySearch.filter.treatyLength": "Treaty length",
  "replaySearch.filter.victory": "Victory",
  "replaySearch.filter.revealMap": "Reveal map",
  "directory.players.pageTitle": "AOE2 players",
  "directory.players.description": "Browse top Age of Empires II: Definitive Edition players and open their replay search results.",
  "directory.players.eyebrow": "Players",
  "directory.players.title": "Top Age of Empires II players",
  "directory.players.intro": "Browse top ranked players and open replay results for each player.",
  "directory.players.searchTitle": "Player search",
  "directory.players.searchLabel": "Player",
  "directory.players.searchPlaceholder": "VIT | Hera",
  "directory.players.searchButton": "Search player",
  "directory.players.empty": "Top players are temporarily unavailable.",
  "directory.players.rank": "Rank",
  "directory.players.player": "Player",
  "directory.players.elo": "Elo",
  "directory.players.record": "Wins/Losses",
  "directory.players.totalGames": "Total games",
  "directory.civilizations.pageTitle": "AOE2 civilizations",
  "directory.civilizations.description": "Browse Age of Empires II civilizations and open replay search results for each civilization.",
  "directory.civilizations.eyebrow": "Civilizations",
  "directory.civilizations.title": "Age of Empires II civilizations",
  "directory.civilizations.intro": "Choose a civilization to find recorded games featuring it.",
  "directory.maps.pageTitle": "AOE2 maps",
  "directory.maps.description": "Browse Age of Empires II maps from the replay database and open replay search results for each map.",
  "directory.maps.eyebrow": "Maps",
  "directory.maps.title": "Age of Empires II maps",
  "directory.maps.intro": "Choose a map to find recorded games played on it.",
  "directory.maps.empty": "Maps are temporarily unavailable.",
  "directory.strategies.pageTitle": "AOE2 strategies",
  "directory.strategies.description": "Browse Age of Empires II opening strategies and open their replay search results.",
  "directory.strategies.eyebrow": "Strategies",
  "directory.strategies.title": "Age of Empires II strategies",
  "directory.strategies.intro": "Choose an opening strategy to find recorded games that match it.",
  "directory.strategies.empty": "Strategies are temporarily unavailable.",
  "directory.followups.pageTitle": "AOE2 followups",
  "directory.followups.description": "Browse Age of Empires II Castle Age followups and open their replay search results.",
  "directory.followups.eyebrow": "Followups",
  "directory.followups.title": "Age of Empires II followups",
  "directory.followups.intro": "Choose a Castle Age followup to find recorded games that match it.",
  "directory.followups.empty": "Followups are temporarily unavailable.",
  "option.map.rm_arabia": "Arabia (rm)",
  "option.map.rm_qs_arabia": "Arabia (rm_qs)",
  "option.map.p_continental": "Continental (p)",
  "option.map.p_highland": "Highland (p)",
  "option.map.p_mediterranean": "Mediterranean (p)",
  "option.map.p_megarandom": "Megarandom (p)",
  "option.map.p_nomad": "Nomad (p)",
  "option.map.p_oasis": "Oasis (p)",
  "option.map.p_rivers": "Rivers (p)",
  "option.map.rm_arena": "Arena (rm)",
  "option.map.rm_black_forest": "Black Forest (rm)",
  "option.map.rm_continental": "Continental (rm)",
  "option.map.rm_fortified_clearing": "Fortified Clearing (rm)",
  "option.map.rm_glade": "Glade (rm)",
  "option.map.rm_highland": "Highland (rm)",
  "option.map.rm_mediterranean": "Mediterranean (rm)",
  "option.map.rm_megarandom": "Megarandom (rm)",
  "option.map.rm_nomad": "Nomad (rm)",
  "option.map.rm_oasis": "Oasis (rm)",
  "option.map.rm_qs_arena": "Arena (rm_qs)",
  "option.map.rm_qs_black_forest": "Black Forest (rm_qs)",
  "option.map.rm_qs_fortified_clearing": "Fortified Clearing (rm_qs)",
  "option.map.rm_qs_glade": "Glade (rm_qs)",
  "option.map.rm_qs_nomad": "Nomad (rm_qs)",
  "option.map.rm_qs_runestones": "Runestones (rm_qs)",
  "option.map.rm_rivers": "Rivers (rm)",
  "option.map.rm_runestones": "Runestones (rm)",
  "common.unknown": "Unknown",
  "common.notAvailable": "N/A",
  "sharedGame.pageTitle": "Shared AOE2 game",
  "sharedGame.eyebrow": "Shared game",
  "sharedGame.hostedEyebrow": "AOE2 replay",
  "sharedGame.title": "Shared recorded game",
  "sharedGame.hostedTitle": "AOE2 .aoe2record save game download",
  "sharedGame.loading": "Loading game information...",
  "sharedGame.missingTitle": "Shared game link missing",
  "sharedGame.missingBody": "Open this page with a game, hosted, or matchId query parameter.",
  "sharedGame.notFoundTitle": "Shared game unavailable",
  "sharedGame.notFoundBody": "This shared game may have expired or the link may be incorrect.",
  "sharedGame.download": "Download recording",
  "sharedGame.instantPlay": "Instant Play",
  "sharedGame.controlNoticeTitle": "Replay loading notice",
  "sharedGame.controlNoticeBody": "We control your mouse move/click for a brief moment to load the downloaded replay.",
  "sharedGame.controlNoticeClose": "Close",
  "sharedGame.pageDescription": "Open this recorded game instantly in AOE2 game viewer or download the recording.",
  "sharedGame.replayTitle": "AOE2 replay download - {player} playing {civ} on {map}",
  "sharedGame.replayDescription": "AOE2 replay .aoe2record file download: players {playersA} vs {playersB} on map {map}",
  "sharedGame.detectStrategy": "Click to detect strategy",
  "sharedGame.instructionsTitle": "To play this game,",
  "sharedGame.instructionsRegularLabel": "The regular way:",
  "sharedGame.instructionsRegular": "1) Download and unzip; 2) Launch AOE2. Go to Single Player -> Load Game -> Replays -> Open Saved Games Folder; 3) Drag the unzipped .aoe2record file to that folder; 4) Go to Single Player -> Load Game -> Replays again to find the file and double click.",
  "sharedGame.instructionsEasyLabel": "The easy way:",
  "sharedGame.instructionsEasyStart": "1) ",
  "sharedGame.instructionsEasyDownload": "Click here to download AOE2 game viewer",
  "sharedGame.instructionsEasyEnd": " and install if you haven't. 2) Click \"Instant Play\"!",
  "sharedGame.dateTime": "Date time",
  "sharedGame.length": "Game length",
  "sharedGame.map": "Map",
  "sharedGame.expires": "Expires",
  "sharedGame.playersA": "Players A",
  "sharedGame.playersB": "Players B",
  "sharedGame.civs": "Civs",
  "sharedGame.winner": "Winner",
  "sharedGame.unknown": "Unknown",
  "sharedGame.sideA": "Side A",
  "sharedGame.sideB": "Side B",
  "sharedGame.expired": "Expired",
};

function normalizeLocale(value) {
  return String(value || "").trim().replace(/_/g, "-").toLowerCase();
}

function resolveLocale(value) {
  const normalized = normalizeLocale(value);
  if (LOCALE_ALIASES[normalized]) {
    return LOCALE_ALIASES[normalized];
  }
  const primary = normalized.split("-")[0];
  return LOCALE_ALIASES[primary] || DEFAULT_LOCALE;
}

function resolveExplicitLocale(value) {
  const normalized = normalizeLocale(value);
  if (!normalized) {
    return "";
  }
  if (LOCALE_ALIASES[normalized]) {
    return LOCALE_ALIASES[normalized];
  }
  const primary = normalized.split("-")[0];
  return LOCALE_ALIASES[primary] || "";
}

function localeFromCookie(request) {
  const cookieHeader = String(request.headers.get("cookie") || "");
  for (const part of cookieHeader.split(";")) {
    const [name, ...valueParts] = part.trim().split("=");
    if (name === LOCALE_COOKIE_NAME) {
      return resolveExplicitLocale(decodeURIComponent(valueParts.join("=")));
    }
  }
  return "";
}

function localeFromRequest(request, url) {
  const queryLocale = resolveExplicitLocale(url.searchParams.get("lang"));
  if (queryLocale) {
    return queryLocale;
  }
  const cookieLocale = localeFromCookie(request);
  if (cookieLocale) {
    return cookieLocale;
  }
  const accepted = String(request.headers.get("accept-language") || "")
    .split(",")
    .map((part) => part.split(";")[0]?.trim())
    .filter(Boolean);
  for (const locale of accepted) {
    const resolved = resolveLocale(locale);
    if (SUPPORTED_LOCALES.includes(resolved)) {
      return resolved;
    }
  }
  return DEFAULT_LOCALE;
}

function localeFromUrl(url) {
  return resolveExplicitLocale(url.searchParams.get("lang")) || DEFAULT_LOCALE;
}

async function loadMessages(env, locale) {
  const localeUrl = new URL(`/locales/${locale}.json`, "https://aoe2viewer.com");
  const request = new Request(localeUrl.toString());
  const response = await env.ASSETS.fetch(request);
  if (!response.ok && locale !== DEFAULT_LOCALE) {
    return loadMessages(env, DEFAULT_LOCALE);
  }
  if (!response.ok) {
    return DEFAULT_MESSAGES;
  }
  const messages = await response.json().catch(() => ({}));
  return { ...DEFAULT_MESSAGES, ...messages };
}

function t(messages, key, replacements = {}) {
  const template = messages?.[key] || DEFAULT_MESSAGES[key] || key;
  return String(template).replace(/\{(\w+)\}/g, (_match, name) =>
    Object.prototype.hasOwnProperty.call(replacements, name) ? String(replacements[name]) : `{${name}}`
  );
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeJsonScript(value) {
  return String(value ?? "")
    .replace(/</g, "\\u003C")
    .replace(/>/g, "\\u003E")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

function safeFilename(value) {
  const filename = String(value || "")
    .trim()
    .split("/")
    .pop()
    .split("\\")
    .pop();
  return filename && filename.length <= 240 ? filename : "";
}

function parsePositiveInteger(value) {
  const parsed = Number.parseInt(String(value ?? "").trim(), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function isStrictPositiveInteger(value) {
  const text = cleanText(value);
  if (!/^\d+$/.test(text)) {
    return false;
  }
  const parsed = Number(text);
  return Number.isSafeInteger(parsed) && parsed > 0;
}

function cleanText(value) {
  return String(value ?? "").trim();
}

function absoluteUrl(path = "/", params = {}) {
  const url = new URL(path || "/", SITE_ORIGIN);
  for (const [key, value] of Object.entries(params || {})) {
    if (value !== undefined && value !== null && String(value) !== "") {
      url.searchParams.set(key, String(value));
    }
  }
  return url;
}

function localizedUrl(path, locale, params = {}) {
  const cleanParams = { ...params };
  delete cleanParams.lang;
  const url = absoluteUrl(path, cleanParams);
  if (locale && locale !== DEFAULT_LOCALE) {
    url.searchParams.set("lang", locale);
  }
  return url.toString().replace(/\+/g, "%20");
}

function canonicalUrl(path, locale = DEFAULT_LOCALE, params = {}) {
  const cleanParams = { ...params };
  delete cleanParams.lang;
  return localizedUrl(path, locale, cleanParams);
}

function renderHrefLangLinks(path, params = {}) {
  const cleanParams = { ...params };
  delete cleanParams.lang;
  const links = SUPPORTED_LOCALES.map((locale) => {
    const href = localizedUrl(path, locale, cleanParams);
    return `<link rel="alternate" hreflang="${escapeHtml(locale)}" href="${escapeHtml(href)}" />`;
  });
  links.push(`<link rel="alternate" hreflang="x-default" href="${escapeHtml(localizedUrl(path, DEFAULT_LOCALE, cleanParams))}" />`);
  return links.join("\n    ");
}

function renderSeoHead({
  messages,
  locale,
  title,
  description,
  path,
  params = {},
  robots = "",
  image = `${SITE_ORIGIN}/images/aoe2_game_viewer_screenshot_2.png`,
  extra = "",
}) {
  const canonical = canonicalUrl(path, locale, params);
  return `
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-YJL5Q8MERR"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-YJL5Q8MERR');
    </script>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#101214" />
    <meta name="description" content="${escapeHtml(description)}" />
    ${robots ? `<meta name="robots" content="${escapeHtml(robots)}" />` : ""}
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    ${renderHrefLangLinks(path, params)}
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <meta property="og:image" content="${escapeHtml(image)}" />
    <meta property="og:site_name" content="${escapeHtml(t(messages, "seo.siteName"))}" />
    <title>${escapeHtml(title)}</title>
    <link rel="icon" href="/icons/app-icon.ico" sizes="any" />
    <link rel="icon" href="/icons/app-icon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/icons/app-icon-256.png" />
    <link rel="stylesheet" href="/styles.css" />
    ${extra}
  `;
}

function renderTopPlayersOnlyNotice(messages, locale) {
  const linkText = t(messages, "nav.replaySearch");
  const notice = t(messages, "site.topPlayersOnlyNotice", { replaySearchLink: linkText });
  const escapedNotice = escapeHtml(notice);
  const escapedLink = escapeHtml(linkText);
  const replaySearchHref = localizedUrl("/", locale).replace(SITE_ORIGIN, "");
  const html = escapedNotice.includes(escapedLink)
    ? escapedNotice.replace(escapedLink, `<a href="${escapeHtml(replaySearchHref)}">${escapedLink}</a>`)
    : `${escapedNotice} <a href="${escapeHtml(replaySearchHref)}">${escapedLink}</a>`;
  return `<p>${html}</p>`;
}

function renderDatabaseNotice(messages, options = {}) {
  const locale = options.locale || DEFAULT_LOCALE;
  const appHref = localizedUrl("/app/", locale).replace(SITE_ORIGIN, "");
  const replayHref = localizedUrl("/app/#load-recent-replays-instantly", locale).replace(SITE_ORIGIN, "");
  const spyHref = localizedUrl("/app/#aoe2-spy", locale).replace(SITE_ORIGIN, "");
  const html = t(messages, "site.databaseNoticeHtml")
    .replaceAll('href="https://aoe2viewer.com/app/"', `href="${escapeHtml(appHref)}"`)
    .replaceAll('href="https://aoe2viewer.com/app/#load-recent-replays-instantly"', `href="${escapeHtml(replayHref)}"`)
    .replaceAll('href="https://aoe2viewer.com/app/#aoe2-spy"', `href="${escapeHtml(spyHref)}"`);
  const topPlayersOnlyNotice = options.topPlayersOnly ? renderTopPlayersOnlyNotice(messages, locale) : "";
  return `<aside class="database-notice"><p>${html}</p>${topPlayersOnlyNotice}</aside>`;
}

function optionLabelKey(source, value) {
  const normalizedSource = cleanText(source);
  const normalizedValue = cleanText(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
  return normalizedSource && normalizedValue ? `option.${normalizedSource}.${normalizedValue}` : "";
}

function humanizeOptionLabel(value, options = {}) {
  const text = cleanText(value);
  if (!text) {
    return "";
  }
  if (/^\d+$/.test(text)) {
    return text;
  }
  const label = text.replace(/[:_-]+/g, " ");
  return (options.stripKnownPrefixes ? label.replace(/\b(rm|br|dm|ew|cm|p|rwm|sm|qs|ctr|aoe2)\b/gi, " ") : label)
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (match) => match.toUpperCase());
}

function localizedHumanizeOptionLabel(messages, source, value) {
  const label = humanizeOptionLabel(value, { stripKnownPrefixes: source === "map" });
  if (source !== "map") {
    return label;
  }
  return label
    .split(/\s+/)
    .map((word) => {
      const key = `option.word.${word.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`;
      return messages?.[key] || DEFAULT_MESSAGES[key] || word;
    })
    .filter(Boolean)
    .join(" ")
    .trim();
}

function duplicateMapLabelSuffix(value) {
  const normalized = cleanText(value).toLowerCase().replace(/-/g, "_");
  if (!DUPLICATE_MAP_LABEL_VALUES.has(normalized)) {
    return "";
  }
  if (/^rm_qs[_-]/.test(normalized)) {
    return "rm_qs";
  }
  const match = normalized.match(/^([a-z]+)[_-]/);
  return match?.[1] || "";
}

function localizedOptionLabel(messages, source, value, fallback = "") {
  const text = cleanText(value);
  if (!text) {
    return "";
  }
  const category = source === "civilizations" ? "civ" : source;
  const key = optionLabelKey(category, text);
  if (category === "map") {
    const suffix = duplicateMapLabelSuffix(text);
    if (suffix) {
      if (key && messages?.[key]) {
        return messages[key];
      }
      if (key && DEFAULT_MESSAGES[key]) {
        return DEFAULT_MESSAGES[key];
      }
      return `${localizedHumanizeOptionLabel(messages, category, text)} (${suffix})`;
    }
  }
  if (key && messages?.[key]) {
    return messages[key];
  }
  if (key && DEFAULT_MESSAGES[key]) {
    return DEFAULT_MESSAGES[key];
  }
  return fallback || localizedHumanizeOptionLabel(messages, category, text);
}

function replaySortCollator(locale) {
  try {
    return new Intl.Collator([locale || DEFAULT_LOCALE, "en"], {
      usage: "sort",
      sensitivity: "base",
      numeric: true,
      ignorePunctuation: true,
    });
  } catch {
    return new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
  }
}

function formatNumber(value, locale) {
  const number = Number(value);
  if (!Number.isFinite(number)) {
    return "";
  }
  try {
    return new Intl.NumberFormat(locale).format(number);
  } catch {
    return String(number);
  }
}

function formatRecord(player, locale, messages) {
  const wins = Number(player?.wins);
  const losses = Number(player?.losses);
  if (!Number.isFinite(wins) && !Number.isFinite(losses)) {
    return t(messages, "common.notAvailable");
  }
  return `${formatNumber(wins || 0, locale)}/${formatNumber(losses || 0, locale)}`;
}

function searchUrl(params = {}, locale = DEFAULT_LOCALE) {
  const clean = {};
  for (const [key, value] of Object.entries(params || {})) {
    if (value !== undefined && value !== null && String(value).trim() !== "") {
      clean[key] = String(value).trim();
    }
  }
  return localizedUrl("/search/", locale, clean).replace(SITE_ORIGIN, "");
}

function directorySearchParams(paramName, value) {
  return { [paramName]: value, ratingRange: DIRECTORY_SEARCH_RATING_RANGE };
}

function firstSharedGamePlayer(players) {
  const list = Array.isArray(players) ? players : [players];
  for (const player of list) {
    const text = cleanText(player?.name ?? player);
    if (text) {
      return text;
    }
  }
  return "";
}

function sharedGameSearchParamsFromGame(game) {
  const params = {};
  const player = firstSharedGamePlayer(game?.playersA);
  const player2 = firstSharedGamePlayer(game?.playersB);
  if (player) {
    params.player = player;
  }
  if (player2 && player2 !== player) {
    params.player2 = player2;
  }
  return params;
}

function stripSharedGameFilenameMapSuffix(value) {
  const text = cleanText(value);
  const match = text.match(/^(.+)_([A-Za-z][\w-]*)$/);
  return match?.[1] || text;
}

function sharedGameSearchParamsFromFilename(filename) {
  const stem = safeFilename(filename)
    .replace(/\.(?:zip|aoe2record)$/i, "")
    .replace(/^\d{4}_\d{2}_\d{2}_\d{6}_/, "");
  const parts = stem
    .split("_vs_")
    .map((part) => part.replace(/^_+|_+$/g, ""))
    .filter(Boolean);
  if (parts.length < 2) {
    return {};
  }
  return {
    player: parts[0],
    player2: stripSharedGameFilenameMapSuffix(parts[parts.length - 1]),
  };
}

function sharedGameSearchParams(game, filename) {
  const params = sharedGameSearchParamsFromGame(game);
  return params.player || params.player2 ? params : sharedGameSearchParamsFromFilename(filename);
}

function redirectToSearchResult(requestUrl, params, locale) {
  const location = new URL(searchUrl(params, locale), requestUrl);
  return Response.redirect(location.toString().replace(/\+/g, "%20"), 302);
}

function renderPageShell({ messages, locale, title, description, path, params = {}, robots = "", body, scripts = "" }) {
  return `<!doctype html>
<html lang="${escapeHtml(locale)}">
  <head>
    ${renderSeoHead({ messages, locale, title, description, path, params, robots })}
    ${path === "/search/" ? '<script defer src="/app.js"></script>' : ""}
  </head>
  <body${path === "/search/" ? ' data-page="replay-search-results"' : ""}>
    <a class="skip-link" href="#main">${escapeHtml(t(messages, "skipLink"))}</a>
    ${renderHeader(messages, locale)}
    ${body}
    ${renderFooter(messages, locale, path, params)}
    ${renderLanguageScript(locale)}
    ${scripts}
  </body>
</html>`;
}

function normalizedAnyValue(value) {
  const text = cleanText(value);
  return text && text.toLowerCase() !== "any" ? text : "";
}

function boolParam(value, fallback) {
  const normalized = cleanText(value || fallback).toLowerCase();
  if (normalized === "1" || normalized === "true") {
    return "1";
  }
  if (normalized === "0" || normalized === "false") {
    return "0";
  }
  if (normalized === "any") {
    return "any";
  }
  return fallback;
}

function listParam(value, fallback) {
  const text = cleanText(value || fallback);
  return text.toLowerCase() === REPLAY_RATING_ANY_VALUE ? fallback : text || fallback;
}

function normalizedRatingRange(value) {
  const text = cleanText(value);
  if (!text || text.toLowerCase() === REPLAY_RATING_ANY_VALUE) {
    return REPLAY_RATING_ANY_VALUE;
  }
  const match = text.match(/^(\d+)-(\d+)$/);
  if (!match) {
    return "";
  }
  const minimum = Number(match[1]);
  const maximum = Number(match[2]);
  if (!Number.isSafeInteger(minimum) || !Number.isSafeInteger(maximum) || minimum > maximum) {
    return "";
  }
  return `${minimum}-${maximum}`;
}

function normalizeDataApiPlayerInput(value = {}) {
  if (typeof value === "string") {
    return { input: cleanText(value), profileId: 0 };
  }
  const input = cleanText(value?.input ?? value?.name ?? value?.label);
  const profileId = parsePositiveInteger(value?.profileId ?? value?.id);
  return input || profileId ? { input, profileId } : null;
}

function dataApiCriteriaHasPlayers(players = []) {
  return players.some((player) => player?.input || player?.profileId);
}

function normalizeDataApiCriteria(value = {}) {
  const criteria = value && typeof value === "object" && !Array.isArray(value) ? value : {};
  const players = (Array.isArray(criteria.players) ? criteria.players : [criteria.playerA, criteria.playerB])
    .map(normalizeDataApiPlayerInput)
    .filter(Boolean)
    .slice(0, 2);
  const ratingRange = normalizedRatingRange(criteria.ratingRange) || DATA_API_DEFAULT_FILTERS.ratingRange;
  return {
    ratingRange,
    players,
    civs: (Array.isArray(criteria.civs) ? criteria.civs : [criteria.civA, criteria.civB])
      .map((entry) => normalizedAnyValue(entry).toLowerCase())
      .filter(Boolean)
      .slice(0, 2),
    leaderboard: normalizedAnyValue(criteria.leaderboard),
    map: normalizedAnyValue(criteria.map),
    gameMode: normalizedAnyValue(criteria.gameMode),
    lengthRange: cleanText(criteria.lengthRange) === RECENT_HIGHLIGHTS_LENGTH_RANGE || REPLAY_LENGTH_RANGES.includes(cleanText(criteria.lengthRange))
      ? cleanText(criteria.lengthRange)
      : DATA_API_DEFAULT_FILTERS.lengthRange,
    strategy: normalizedAnyValue(criteria.strategy),
    followup: normalizedAnyValue(criteria.followup),
    aiPlayer: boolParam(criteria.aiPlayer, DATA_API_DEFAULT_FILTERS.aiPlayer),
    difficulty: listParam(criteria.difficulty, DATA_API_DEFAULT_FILTERS.difficulty),
    startingAge: listParam(criteria.startingAge, DATA_API_DEFAULT_FILTERS.startingAge),
    fullTechTree: boolParam(criteria.fullTechTree, DATA_API_DEFAULT_FILTERS.fullTechTree),
    allowCheats: boolParam(criteria.allowCheats, DATA_API_DEFAULT_FILTERS.allowCheats),
    endingAge: listParam(criteria.endingAge, DATA_API_DEFAULT_FILTERS.endingAge),
    lockTeams: boolParam(criteria.lockTeams, DATA_API_DEFAULT_FILTERS.lockTeams),
    population: listParam(criteria.population, DATA_API_DEFAULT_FILTERS.population),
    resources: listParam(criteria.resources, DATA_API_DEFAULT_FILTERS.resources),
    teamTogether: boolParam(criteria.teamTogether, DATA_API_DEFAULT_FILTERS.teamTogether),
    treatyLength: listParam(criteria.treatyLength, DATA_API_DEFAULT_FILTERS.treatyLength),
    victory: listParam(criteria.victory, DATA_API_DEFAULT_FILTERS.victory),
    revealMap: listParam(criteria.revealMap, DATA_API_DEFAULT_FILTERS.revealMap),
  };
}

function dataApiUrl(path, params = {}) {
  const url = new URL(path, DATA_API_BASE_URL);
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === "") {
      continue;
    }
    url.searchParams.set(key, String(value));
  }
  return url.toString().replace(/\+/g, "%20");
}

function dataApiCode(env) {
  return cleanText(env?.AOE2GV_API_CODE);
}

async function fetchDataApiJson(env, path, params = {}) {
  const apiCode = dataApiCode(env);
  if (!apiCode) {
    throw new Error("Data API code is not configured");
  }
  const response = await fetch(dataApiUrl(path, params), {
    headers: {
      Accept: "application/json",
      "X-API-Code": apiCode,
    },
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    const detail = cleanText(payload?.detail);
    throw new Error(detail || `Data API returned ${response.status}`);
  }
  return payload;
}

async function fetchDataApiPostJson(env, path, params = {}, body = {}) {
  const apiCode = dataApiCode(env);
  if (!apiCode) {
    throw new Error("Data API code is not configured");
  }
  const response = await fetch(dataApiUrl(path, params), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-API-Code": apiCode,
    },
    body: JSON.stringify(body || {}),
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    const detail = cleanText(payload?.detail || payload?.errorMessage || payload?.error);
    throw new Error(detail || `Data API returned ${response.status}`);
  }
  return payload;
}

function normalizeListValues(value) {
  return (Array.isArray(value) ? value : [])
    .map((entry) => (typeof entry === "number" ? entry : cleanText(entry)))
    .filter((entry) => entry !== "");
}

function hasD1(env) {
  return Boolean(env?.DB && typeof env.DB.prepare === "function");
}

function isPotentialStaticAssetRequest(request) {
  if (request.method !== "GET" && request.method !== "HEAD") return false;
  const url = new URL(request.url);
  if (url.hostname.toLowerCase() === "www.aoe2viewer.com") return false;
  const pathname = url.pathname.toLowerCase();
  if (pathname.startsWith("/locales/") && pathname.endsWith(".json")) return true;
  const filename = pathname.slice(pathname.lastIndexOf("/") + 1);
  const extensionIndex = filename.lastIndexOf(".");
  return extensionIndex >= 0 && RATE_LIMIT_STATIC_ASSET_EXTENSIONS.has(filename.slice(extensionIndex));
}

async function rateLimitExemptStaticAssetResponse(request, env) {
  if (!isPotentialStaticAssetRequest(request) || !env?.ASSETS?.fetch) return null;
  const response = await env.ASSETS.fetch(request);
  return response.ok || response.status === 304 ? response : null;
}

function clientIpFromRequest(request) {
  return cleanText(request.headers.get("CF-Connecting-IP"));
}

function knownBotName(userAgent) {
  for (const [name, pattern] of KNOWN_BOT_USER_AGENTS) {
    if (pattern.test(userAgent)) return name;
  }
  return "";
}

const AUTOMATED_CLIENT_NAMES = [
  ["curl", /\bcurl(?:\/|\s|$)/i],
  ["Wget", /\bwget(?:\/|\s|$)/i],
  ["python-requests", /\bpython-requests(?:\/|\s|$)/i],
  ["python-httpx", /\bpython-httpx(?:\/|\s|$)/i],
  ["aiohttp", /\baiohttp(?:\/|\s|$)/i],
  ["Go-http-client", /\bgo-http-client(?:\/|\s|$)/i],
  ["libwww-perl", /\blibwww-perl(?:\/|\s|$)/i],
  ["Scrapy", /\bscrapy(?:\/|\s|$)/i],
  ["HeadlessChrome", /\bheadlesschrome(?:\/|\s|$)/i],
  ["PhantomJS", /\bphantomjs(?:\/|\s|$)/i],
  ["Selenium", /\bselenium(?:\/|\s|$)/i],
  ["Playwright", /\bplaywright(?:\/|\s|$)/i],
  ["Puppeteer", /\bpuppeteer(?:\/|\s|$)/i],
];

function inferredBotName(userAgent) {
  const namedToken = cleanText(userAgent).match(
    /(?:^|[\s;(])([a-z0-9][a-z0-9._-]{0,63}(?:bot|crawler|spider|slurp))(?=[/\s;)]|$)/i
  )?.[1];
  if (namedToken) return namedToken;
  for (const [name, pattern] of AUTOMATED_CLIENT_NAMES) {
    if (pattern.test(userAgent)) return name;
  }
  return "unknown bot";
}

function unverifiedBotIdentity(userAgent) {
  const botName = inferredBotName(userAgent);
  return { botName, label: `Unverified ${botName}` };
}

function requestBotType(request, env) {
  const botManagement = request.cf?.botManagement;
  const userAgent = cleanText(request.headers.get("User-Agent"));
  const botName = knownBotName(userAgent);
  const rawBotScore = botManagement?.score;
  const parsedBotScore = rawBotScore === null || rawBotScore === undefined || rawBotScore === ""
    ? null
    : Number(rawBotScore);
  const botScore = Number.isFinite(parsedBotScore) && parsedBotScore >= 1 && parsedBotScore <= 99
    ? parsedBotScore
    : null;

  if (botName) {
    const ipVerified = Boolean(
      env?.BOT_IP_VERIFIER?.matches?.(botName, clientIpFromRequest(request))
    );
    return {
      kind: "bot",
      label: ipVerified ? botName : `Unverified ${botName}`,
      botName,
      botScore,
      classificationSource: ipVerified ? "user-agent+published-ip" : "user-agent/unverified-ip",
    };
  }

  if (botManagement?.verifiedBot === true) {
    const unverified = unverifiedBotIdentity(userAgent);
    return {
      kind: "bot",
      ...unverified,
      botScore,
      classificationSource: "cloudflare",
    };
  }

  if (botScore !== null) {
    const isBot = botScore < BOT_MANAGEMENT_AUTOMATION_SCORE_THRESHOLD;
    const unverified = isBot ? unverifiedBotIdentity(userAgent) : null;
    return {
      kind: isBot ? "bot" : "human",
      label: isBot ? unverified.label : "Human or unidentified bot visitor",
      botName: isBot ? unverified.botName : "",
      botScore,
      classificationSource: "cloudflare",
    };
  }

  if (!userAgent || AUTOMATED_USER_AGENT_PATTERN.test(userAgent)) {
    const unverified = unverifiedBotIdentity(userAgent);
    return {
      kind: "bot",
      ...unverified,
      botScore: null,
      classificationSource: "user-agent",
    };
  }

  return {
    kind: "human",
    label: "Human or unidentified bot visitor",
    botName: "",
    botScore: null,
    classificationSource: "user-agent",
  };
}

function safeRequestHeader(request, name, maxLength = 512) {
  return cleanText(request.headers.get(name)).slice(0, maxLength);
}

function safeReferral(request) {
  const value = safeRequestHeader(request, "Referer", 2048);
  if (!value) return "Direct";
  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") return "Direct";
    return `${url.origin}${url.pathname}`.slice(0, 1024);
  } catch {
    return "Direct";
  }
}

function isDashboardOwnedRequest(request, url) {
  if (VISIT_TRACKING_EXCLUDED_PATHS.has(url.pathname)) return true;
  if (url.pathname !== "/styles.css" && !url.pathname.startsWith("/icons/")) return false;
  if (url.searchParams.get("dashboard") === "1") return true;
  try {
    return new URL(request.headers.get("Referer") || "").pathname === DASHBOARD_PATH;
  } catch {
    return false;
  }
}

function recordVisit(request, response, env) {
  if (!env?.VISIT_STORE || typeof env.VISIT_STORE.record !== "function") return;
  const url = new URL(request.url);
  if (isDashboardOwnedRequest(request, url)) return;
  try {
    env.VISIT_STORE.record({
      method: request.method,
      path: url.pathname.slice(0, 2048) || "/",
      status: response.status,
      ip: clientIpFromRequest(request).slice(0, 128),
      referral: safeReferral(request),
      headers: {
        userAgent: safeRequestHeader(request, "User-Agent", 1024),
        acceptLanguage: safeRequestHeader(request, "Accept-Language", 256),
        cfCountry: safeRequestHeader(request, "CF-IPCountry", 16),
        cfRay: safeRequestHeader(request, "CF-Ray", 128),
      },
      type: requestBotType(request, env),
    });
  } catch {
  }
}

async function hashClientIp(clientIp) {
  const bytes = new TextEncoder().encode(clientIp);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function rateLimitResponse(retryAfterSeconds) {
  return new Response("Too many requests", {
    status: 429,
    headers: {
      "content-type": "text/plain; charset=UTF-8",
      "retry-after": String(Math.max(1, retryAfterSeconds)),
      "x-content-type-options": "nosniff",
    },
  });
}

function rateLimitUnavailableResponse() {
  return new Response("Rate limit service unavailable", {
    status: 503,
    headers: {
      "content-type": "text/plain; charset=UTF-8",
      "retry-after": "60",
      "x-content-type-options": "nosniff",
    },
  });
}

async function checkRateLimit(request, env) {
  if (!hasD1(env)) {
    return { allowed: false, response: rateLimitUnavailableResponse() };
  }

  const clientIp = clientIpFromRequest(request);
  if (!clientIp) {
    return {
      allowed: false,
      response: new Response("Client IP is unavailable", {
        status: 500,
        headers: { "content-type": "text/plain; charset=UTF-8", "x-content-type-options": "nosniff" },
      }),
    };
  }

  const now = Date.now();
  const botType = requestBotType(request, env);
  const isLikelyAutomated = botType.kind === "bot";
  const isRateLimitException = RATE_LIMIT_BOT_EXCEPTION_NAMES.has(botType.botName);
  const useBotLimit = isLikelyAutomated && !isRateLimitException;
  const requestLimit = useBotLimit
    ? RATE_LIMIT_BOT_REQUESTS_PER_MINUTE
    : RATE_LIMIT_REQUESTS_PER_MINUTE;
  const clientKey = await hashClientIp(`${useBotLimit ? "bot" : "standard"}:${clientIp}`);
  try {
    // This single conditional UPSERT serializes requests for one client key in D1.
    const row = await env.DB.prepare(
      `INSERT INTO webpage_rate_limits (
         client_key, request_timestamps, blocked_until, updated_at
       ) VALUES (?1, json_array(?2), 0, ?2)
       ON CONFLICT(client_key) DO UPDATE SET
         request_timestamps = CASE
           WHEN webpage_rate_limits.blocked_until > ?2 THEN webpage_rate_limits.request_timestamps
           WHEN (
             SELECT COUNT(*) FROM json_each(webpage_rate_limits.request_timestamps)
             WHERE CAST(value AS INTEGER) > ?3
           ) >= ?4 THEN webpage_rate_limits.request_timestamps
           ELSE json_insert(
             (
               SELECT json_group_array(CAST(value AS INTEGER))
               FROM json_each(webpage_rate_limits.request_timestamps)
               WHERE CAST(value AS INTEGER) > ?3
             ),
             '$[#]',
             ?2
           )
         END,
         blocked_until = CASE
           WHEN webpage_rate_limits.blocked_until > ?2 THEN webpage_rate_limits.blocked_until
           WHEN (
             SELECT COUNT(*) FROM json_each(webpage_rate_limits.request_timestamps)
             WHERE CAST(value AS INTEGER) > ?3
           ) >= ?4 THEN ?5
           ELSE 0
         END,
         updated_at = ?2
       RETURNING blocked_until`
    ).bind(
      clientKey,
      now,
      now - RATE_LIMIT_WINDOW_MS,
      requestLimit,
      now + RATE_LIMIT_MITIGATION_MS
    ).first();
    const blockedUntil = Number(row?.blocked_until) || 0;
    if (blockedUntil > now) {
      return {
        allowed: false,
        response: rateLimitResponse(Math.ceil((blockedUntil - now) / 1000)),
      };
    }
    return { allowed: true };
  } catch {
    return { allowed: false, response: rateLimitUnavailableResponse() };
  }
}

async function pruneRateLimitEntries(env, now = Date.now()) {
  if (!hasD1(env)) {
    return;
  }
  try {
    await env.DB.prepare(
      `DELETE FROM webpage_rate_limits
       WHERE blocked_until <= ?1 AND updated_at <= ?2`
    ).bind(now, now - RATE_LIMIT_RETENTION_MS).run();
  } catch {
  }
}

function isoNow() {
  return new Date().toISOString();
}

function timestampMs(value) {
  const parsed = Date.parse(cleanText(value));
  return Number.isFinite(parsed) ? parsed : 0;
}

function isTopPlayersCacheFresh(updatedAt, nowMs = Date.now()) {
  const updatedMs = timestampMs(updatedAt);
  return Boolean(updatedMs && nowMs - updatedMs < TOP_PLAYERS_CACHE_TTL_MS);
}

function normalizeCachedTopPlayers(value) {
  return (Array.isArray(value) ? value : [])
    .map((player) => ({
      profileId: parsePositiveInteger(player?.profileId),
      name: cleanText(player?.name),
      rating: Number.isFinite(Number(player?.rating)) ? Number(player.rating) : null,
      rank: Number.isFinite(Number(player?.rank)) ? Number(player.rank) : null,
      wins: Number.isFinite(Number(player?.wins)) ? Number(player.wins) : null,
      losses: Number.isFinite(Number(player?.losses)) ? Number(player.losses) : null,
      totalGames: Number.isFinite(Number(player?.totalGames)) ? Number(player.totalGames) : null,
    }))
    .filter((player) => player.profileId && player.name)
    .slice(0, 100);
}

async function readCachedTopPlayers(env) {
  if (!hasD1(env)) {
    return null;
  }
  try {
    const row = await env.DB.prepare(
      "SELECT value, updated_at FROM webpage_cache WHERE key = ?"
    ).bind(TOP_PLAYERS_CACHE_KEY).first();
    if (!row) {
      return null;
    }
    const players = normalizeCachedTopPlayers(JSON.parse(row.value || "[]"));
    return {
      players,
      updatedAt: cleanText(row.updated_at),
      fresh: isTopPlayersCacheFresh(row.updated_at),
    };
  } catch {
    return null;
  }
}

async function writeCacheEntry(env, key, value, updatedAt = isoNow()) {
  if (!hasD1(env)) {
    return false;
  }
  try {
    await env.DB.prepare(
      `INSERT INTO webpage_cache (key, value, updated_at)
       VALUES (?, ?, ?)
       ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at`
    ).bind(key, value, updatedAt).run();
    return true;
  } catch {
    return false;
  }
}

async function writeCachedTopPlayers(env, players) {
  const normalized = normalizeCachedTopPlayers(players);
  if (!normalized.length) {
    return false;
  }
  return writeCacheEntry(env, TOP_PLAYERS_CACHE_KEY, JSON.stringify(normalized));
}

async function acquireTopPlayersRefreshLock(env) {
  if (!hasD1(env)) {
    return false;
  }
  const now = isoNow();
  const lockUntil = new Date(Date.now() + TOP_PLAYERS_REFRESH_LOCK_TTL_MS).toISOString();
  try {
    const result = await env.DB.prepare(
      `INSERT INTO webpage_cache (key, value, updated_at)
       VALUES (?, ?, ?)
       ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at
       WHERE webpage_cache.updated_at <= ?`
    ).bind(TOP_PLAYERS_REFRESH_LOCK_KEY, "1", lockUntil, now).run();
    const changes = Number(result?.meta?.changes);
    return Number.isFinite(changes) ? changes > 0 : true;
  } catch {
    return false;
  }
}

async function releaseTopPlayersRefreshLock(env) {
  if (!hasD1(env)) {
    return;
  }
  try {
    await env.DB.prepare("DELETE FROM webpage_cache WHERE key = ?").bind(TOP_PLAYERS_REFRESH_LOCK_KEY).run();
  } catch {
  }
}

async function fetchAgeStatsTopPlayers() {
  const response = await fetch(AGE_STATS_LEADERBOARD_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      region: 7,
      matchType: 3,
      page: 1,
      count: 100,
      sortColumn: "rank",
      sortDirection: "ASC",
    }),
  });
  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(`Age stats leaderboard returned ${response.status}`);
  }
  return (Array.isArray(payload?.items) ? payload.items : [])
    .map((player) => ({
      profileId: parsePositiveInteger(player?.rlUserId || player?.profileId),
      name: cleanText(player?.userName || player?.name),
      rating: Number.isFinite(Number(player?.elo)) ? Number(player.elo) : null,
      rank: Number.isFinite(Number(player?.rank)) ? Number(player.rank) : null,
      wins: Number.isFinite(Number(player?.wins)) ? Number(player.wins) : null,
      losses: Number.isFinite(Number(player?.losses)) ? Number(player.losses) : null,
      totalGames: Number.isFinite(Number(player?.totalGames)) ? Number(player.totalGames) : null,
    }))
    .filter((player) => player.profileId && player.name)
    .slice(0, 100);
}

async function refreshTopPlayersCache(env) {
  const locked = await acquireTopPlayersRefreshLock(env);
  if (!locked) {
    return null;
  }
  try {
    const players = await fetchAgeStatsTopPlayers();
    await writeCachedTopPlayers(env, players);
    return players;
  } finally {
    await releaseTopPlayersRefreshLock(env);
  }
}

function maybeRefreshTopPlayersCache(env, ctx, cachedEntry) {
  if (!cachedEntry || cachedEntry.fresh || !hasD1(env)) {
    return;
  }
  const refresh = refreshTopPlayersCache(env).catch(() => null);
  if (ctx && typeof ctx.waitUntil === "function") {
    ctx.waitUntil(refresh);
  }
}

async function loadTopPlayersForDirectory(env, ctx) {
  const cached = await readCachedTopPlayers(env);
  if (cached?.players?.length) {
    maybeRefreshTopPlayersCache(env, ctx, cached);
    return {
      players: cached.players,
      cacheStatus: cached.fresh ? "hit" : "stale",
    };
  }

  try {
    const players = await fetchAgeStatsTopPlayers();
    if (hasD1(env)) {
      await writeCachedTopPlayers(env, players);
    }
    return {
      players: normalizeCachedTopPlayers(players),
      cacheStatus: hasD1(env) ? "miss" : "bypass",
    };
  } catch {
    return {
      players: [],
      cacheStatus: "error",
    };
  }
}

function dataApiQueryParams(criteria = {}) {
  const normalized = normalizeDataApiCriteria(criteria);
  const params = {
    limit: String(DATA_API_QUERY_LIMIT),
    ratingRange: normalized.ratingRange,
    lengthRange: normalized.lengthRange,
    aiPlayer: normalized.aiPlayer,
    difficulty: normalized.difficulty,
    startingAge: normalized.startingAge,
    fullTechTree: normalized.fullTechTree,
    allowCheats: normalized.allowCheats,
    endingAge: normalized.endingAge,
    lockTeams: normalized.lockTeams,
    population: normalized.population,
    resources: normalized.resources,
    teamTogether: normalized.teamTogether,
    treatyLength: normalized.treatyLength,
    victory: normalized.victory,
    revealMap: normalized.revealMap,
  };

  for (const field of ["leaderboard", "map", "gameMode", "strategy", "followup"]) {
    if (normalized[field]) {
      params[field] = normalized[field];
    }
  }

  const profileIds = [];
  const playerNames = [];
  for (const player of normalized.players) {
    if (player.profileId) {
      profileIds.push(player.profileId);
    } else if (player.input) {
      playerNames.push(player.input);
    }
  }
  if (profileIds.length) {
    params.profileIds = profileIds.join(",");
  }
  if (playerNames.length) {
    params.playerNames = playerNames.join(",");
  }
  if (normalized.civs.length) {
    params.civs = normalized.civs.join(",");
  }
  return params;
}

function criteriaFromSearchParams(searchParams) {
  const profileId = parsePositiveInteger(searchParams.get("profileId") || searchParams.get("profile_id"));
  const profileId2 = parsePositiveInteger(searchParams.get("profileId2") || searchParams.get("profile_id2"));
  const player = cleanText(searchParams.get("player"));
  const player2 = cleanText(searchParams.get("player2"));
  const players = [];
  if (profileId || player) {
    players.push({ input: player, profileId });
  }
  if (profileId2 || player2) {
    players.push({ input: player2, profileId: profileId2 });
  }

  const criteria = {
    ratingRange: cleanText(searchParams.get("ratingRange")) || REPLAY_RATING_ANY_VALUE,
    players,
    civs: [searchParams.get("civ"), searchParams.get("civ2")],
    leaderboard: searchParams.get("leaderboard"),
    map: searchParams.get("map"),
    gameMode: searchParams.get("gameMode"),
    lengthRange: searchParams.get("lengthRange"),
    strategy: searchParams.get("strategy"),
    followup: searchParams.get("followup"),
  };

  for (const field of SEO_ADVANCED_FILTER_FIELDS) {
    const value = searchParams.get(field);
    if (value !== null) {
      criteria[field] = value;
    }
  }
  return criteria;
}

function rawSearchFiltersValid(searchParams) {
  const ratingRange = cleanText(searchParams.get("ratingRange"));
  if (ratingRange && !normalizedRatingRange(ratingRange)) {
    return false;
  }
  const lengthRange = cleanText(searchParams.get("lengthRange"));
  if (lengthRange && lengthRange !== "any" && !REPLAY_LENGTH_RANGES.includes(lengthRange)) {
    return false;
  }

  for (const field of BOOLEAN_SEARCH_FILTER_FIELDS) {
    if (!searchParams.has(field)) {
      continue;
    }
    const value = cleanText(searchParams.get(field)).toLowerCase();
    if (value && !["0", "1", "false", "true", "any"].includes(value)) {
      return false;
    }
  }

  for (const field of ["profileId", "profile_id", "profileId2", "profile_id2"]) {
    const value = cleanText(searchParams.get(field));
    if (value && !isStrictPositiveInteger(value)) {
      return false;
    }
  }
  return true;
}

function searchParamsFromCriteria(criteria = {}, locale = DEFAULT_LOCALE, page = 1) {
  const normalized = normalizeDataApiCriteria(criteria);
  const params = {};
  const firstPlayer = normalized.players[0];
  const secondPlayer = normalized.players[1];
  if (firstPlayer?.input) params.player = firstPlayer.input;
  if (firstPlayer?.profileId) params.profileId = firstPlayer.profileId;
  if (secondPlayer?.input) params.player2 = secondPlayer.input;
  if (secondPlayer?.profileId) params.profileId2 = secondPlayer.profileId;
  if (normalized.civs[0]) params.civ = normalized.civs[0];
  if (normalized.civs[1]) params.civ2 = normalized.civs[1];
  for (const field of ["map", "leaderboard", "gameMode", "strategy", "followup"]) {
    if (normalized[field]) {
      params[field] = normalized[field];
    }
  }
  if (normalized.lengthRange && normalized.lengthRange !== DATA_API_DEFAULT_FILTERS.lengthRange) {
    params.lengthRange = normalized.lengthRange;
  }
  if (normalized.ratingRange && normalized.ratingRange !== DATA_API_DEFAULT_FILTERS.ratingRange) {
    params.ratingRange = normalized.ratingRange;
  }
  for (const field of SEO_ADVANCED_FILTER_FIELDS) {
    const value = normalized[field];
    if (value && value !== DATA_API_DEFAULT_FILTERS[field]) {
      params[field] = value;
    }
  }
  if (Number(page) > 1) {
    params.page = Number(page);
  }
  if (locale && locale !== DEFAULT_LOCALE) {
    params.lang = locale;
  }
  return params;
}

function searchCriteriaHasNonRatingFilter(criteria = {}) {
  return Object.keys(searchParamsFromCriteria(criteria)).some((name) => name !== "ratingRange");
}

function shouldRetryWithoutDirectoryRating(criteria, matchCount, validQuery = false) {
  const normalized = normalizeDataApiCriteria(criteria);
  return (
    validQuery &&
    normalized.ratingRange === DIRECTORY_SEARCH_RATING_RANGE &&
    Number(matchCount) < DIRECTORY_SEARCH_MIN_RESULTS &&
    searchCriteriaHasNonRatingFilter(normalized)
  );
}

function filterLabelItems(messages, criteria = {}, { genericSides = false } = {}) {
  const normalized = normalizeDataApiCriteria(criteria);
  const labels = [];
  const playerLabels = normalized.players.map((player) => player.input || (player.profileId ? `Profile ${player.profileId}` : "")).filter(Boolean);
  playerLabels.forEach((value, index) => {
    const key = genericSides
      ? "replaySearch.filter.playerGeneric"
      : index === 0 ? "replaySearch.filter.player" : "replaySearch.filter.player2";
    labels.push([t(messages, key), value]);
  });
  normalized.civs.forEach((value, index) => {
    const key = genericSides
      ? "replaySearch.filter.civGeneric"
      : index === 0 ? "replaySearch.filter.civ" : "replaySearch.filter.civ2";
    labels.push([
      t(messages, key),
      localizedOptionLabel(messages, "civ", value),
    ]);
  });
  for (const field of ["map", "leaderboard", "gameMode"]) {
    if (normalized[field]) {
      labels.push([t(messages, `replaySearch.filter.${field}`), localizedOptionLabel(messages, field, normalized[field])]);
    }
  }
  if (normalized.strategy) {
    labels.push([t(messages, "replaySearch.filter.strategy"), localizedReplayStrategyName(messages, normalized.strategy)]);
  }
  if (normalized.followup) {
    labels.push([t(messages, "replaySearch.filter.followup"), localizedReplayFollowupName(messages, normalized.followup)]);
  }
  if (normalized.ratingRange && normalized.ratingRange !== DATA_API_DEFAULT_FILTERS.ratingRange) {
    labels.push([t(messages, "replaySearch.filter.ratingRange"), normalized.ratingRange]);
  }
  if (normalized.lengthRange && normalized.lengthRange !== DATA_API_DEFAULT_FILTERS.lengthRange) {
    labels.push([t(messages, "replaySearch.length"), normalized.lengthRange]);
  }
  for (const field of SEO_ADVANCED_FILTER_FIELDS) {
    const value = normalized[field];
    if (value && value !== DATA_API_DEFAULT_FILTERS[field]) {
      labels.push([t(messages, `replaySearch.filter.${field}`), localizedOptionLabel(messages, field, value, value)]);
    }
  }
  return labels;
}

function searchQueryLabel(messages, criteria = {}) {
  const labels = filterLabelItems(messages, criteria, { genericSides: true })
    .map(([label, value]) => (label && value ? `${label}: ${value}` : value))
    .filter(Boolean);
  return labels.join(", ");
}

function canonicalSearchListValue(values, selected) {
  const target = cleanText(selected);
  if (!target) {
    return "";
  }
  const match = (Array.isArray(values) ? values : [])
    .find((value) => cleanText(value).toLowerCase() === target.toLowerCase());
  return match === undefined ? "" : cleanText(match);
}

async function resolveSearchCriteria(env, ctx, criteria = {}) {
  const normalized = normalizeDataApiCriteria(criteria);
  let valid = true;
  let validationUnavailable = false;

  normalized.civs = normalized.civs.map((selected) => {
    const match = CIVILIZATION_OPTIONS.find((item) => item.value.toLowerCase() === selected.toLowerCase());
    if (!match) {
      valid = false;
      return selected;
    }
    return match.value;
  });

  const selectedListFields = DATA_API_LIST_VALUE_NAMES.filter((field) => {
    const value = cleanText(normalized[field]);
    const defaultValue = cleanText(DATA_API_DEFAULT_FILTERS[field]);
    return value && value.toLowerCase() !== defaultValue.toLowerCase();
  });
  const listEntries = await Promise.all(
    selectedListFields.map(async (field) => {
      try {
        const values = normalizeListValues(await fetchDataApiJson(env, "/list_values", { name: field }));
        return [field, values, true];
      } catch {
        return [field, [], false];
      }
    })
  );
  for (const [field, values, available] of listEntries) {
    if (!available) {
      validationUnavailable = true;
      continue;
    }
    const canonical = canonicalSearchListValue(values, normalized[field]);
    if (!canonical) {
      valid = false;
      continue;
    }
    normalized[field] = canonical;
  }

  const treatyLength = cleanText(normalized.treatyLength);
  if (
    treatyLength !== DATA_API_DEFAULT_FILTERS.treatyLength &&
    !DATA_API_TREATY_LENGTHS.some((value) => String(value) === treatyLength)
  ) {
    valid = false;
  }

  if (normalized.players.some((player) => player.profileId)) {
    const { players } = await loadTopPlayersForDirectory(env, ctx);
    normalized.players = normalized.players.map((selected) => {
      const match = players.find((player) => Number(player.profileId) === Number(selected.profileId));
      return match ? { input: match.name, profileId: match.profileId } : selected;
    });
  }

  return { criteria: normalized, valid, validationUnavailable };
}

function searchCriteriaSpecifiesPlayer(criteria = {}) {
  return normalizeDataApiCriteria(criteria).players.some((player) => player.input || player.profileId);
}

function parseDateSeconds(value) {
  const text = cleanText(value);
  if (!text) {
    return 0;
  }
  const timestamp = Date.parse(text.includes("T") ? text : text.replace(" ", "T"));
  return Number.isFinite(timestamp) ? Math.floor(timestamp / 1000) : 0;
}

function parseDurationSeconds(value) {
  const text = cleanText(value);
  const match = text.match(/^(\d+):(\d{2}):(\d{2})$/);
  if (!match) {
    return 0;
  }
  return Number(match[1]) * 3600 + Number(match[2]) * 60 + Number(match[3]);
}

function normalizeDataApiMember(player = {}) {
  const profileId = parsePositiveInteger(player.profileId);
  const won = player.won;
  return {
    profileId,
    name: cleanText(player.name) || (profileId ? `Profile ${profileId}` : "Unknown player"),
    civ: cleanText(player.civ) || "Unknown",
    civId: null,
    teamId: Number.isFinite(Number(player.team)) ? Number(player.team) : null,
    outcome: won === true ? "Win" : won === false ? "Lose" : "Unknown",
    replayAvailable: Number(player.recordGame) === 1,
    recordGame: Number(player.recordGame) === 1 ? 1 : 0,
    rating: Number.isFinite(Number(player.rating)) ? Number(player.rating) : null,
  };
}

function teamSidesFromDataApiMembers(members, selectedMember) {
  const selectedTeamId = Number(selectedMember?.teamId);
  if (Number.isFinite(selectedTeamId)) {
    return {
      teamA: members.filter((member) => Number(member.teamId) === selectedTeamId),
      teamB: members.filter((member) => Number(member.teamId) !== selectedTeamId),
    };
  }
  const teamIds = [...new Set(members.map((member) => Number(member.teamId)).filter(Number.isFinite))];
  if (teamIds.length > 1) {
    return {
      teamA: members.filter((member) => Number(member.teamId) === teamIds[0]),
      teamB: members.filter((member) => Number(member.teamId) !== teamIds[0]),
    };
  }
  const midpoint = Math.ceil(members.length / 2);
  return {
    teamA: members.slice(0, midpoint),
    teamB: members.slice(midpoint),
  };
}

function normalizeDataApiMatch(record = {}) {
  const matchId = parsePositiveInteger(record.matchId || record.id);
  if (!matchId) {
    return null;
  }
  const members = (Array.isArray(record.players) ? record.players : []).map(normalizeDataApiMember);
  const replayMember =
    members.find((member) => member.recordGame === 1 && member.profileId) ||
    members.find((member) => member.profileId);
  const selectedProfileId = replayMember?.profileId || 0;
  const selectedMember = members.find((member) => Number(member.profileId) === Number(selectedProfileId)) || members[0] || null;
  const { teamA, teamB } = teamSidesFromDataApiMembers(members, selectedMember);
  return {
    id: matchId,
    matchId,
    selectedProfileId,
    startTime: parseDateSeconds(record.gameDate),
    completionTime: parseDurationSeconds(record.length),
    completed: true,
    result: cleanText(selectedMember?.outcome) || "Unknown",
    civilization: cleanText(selectedMember?.civ) || "Unknown",
    civilizationId: null,
    map: cleanText(record.map) || "Unknown Map",
    description: cleanText(record.gameMode || record.leaderboard),
    maxPlayers: members.length,
    members,
    playersA: teamA.map((member) => member.name).filter(Boolean),
    civsA: teamA.map((member) => member.civ || "Unknown"),
    playerAStrategy: cleanText(record.playerAStrategy),
    playerAFollowup: cleanText(record.playerAFollowup),
    playersB: teamB.map((member) => member.name).filter(Boolean),
    civsB: teamB.map((member) => member.civ || "Unknown"),
    playerBStrategy: cleanText(record.playerBStrategy),
    playerBFollowup: cleanText(record.playerBFollowup),
    winnerSide: winningSideFromTeamMembers(teamA, teamB),
    replayUrl:
      matchId && selectedProfileId
        ? `${OFFICIAL_REPLAY_URL_BASE}?matchId=${encodeURIComponent(String(matchId))}&profileId=${encodeURIComponent(String(selectedProfileId))}`
        : "",
    sourceUrl: dataApiUrl("/query", { matchId }),
    source: "aoe2viewer-data-api",
    official: true,
    highestRating: Number.isFinite(Number(record.highestRating)) ? Number(record.highestRating) : null,
    leaderboard: cleanText(record.leaderboard),
    gameMode: cleanText(record.gameMode),
  };
}

function jsonResponse(payload, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "content-type": "application/json; charset=UTF-8",
      "x-content-type-options": "nosniff",
      "referrer-policy": "strict-origin-when-cross-origin",
      ...extraHeaders,
    },
  });
}

function errorJsonResponse(message, status = 400) {
  return jsonResponse({ status: "ERROR", errorMessage: message }, status);
}

function downloadUrlForGame(filename) {
  return `${DOWNLOAD_URL_BASE}/${encodeURIComponent(filename)}`;
}

function instantPlayUrlForGame(filename) {
  return `${INSTANT_PLAY_URL_BASE}/${encodeURIComponent(filename)}`;
}

function downloadUrlForOfficialGame(matchId, profileId) {
  return `${OFFICIAL_REPLAY_URL_BASE}?matchId=${encodeURIComponent(String(matchId))}&profileId=${encodeURIComponent(String(profileId))}`;
}

function sharedUrlForOfficialGame(matchId, profileId) {
  const encodedMatchId = encodeURIComponent(String(matchId));
  const numericProfileId = parsePositiveInteger(profileId);
  return `/shared_game?matchId=${encodedMatchId}${numericProfileId ? `&profileId=${encodeURIComponent(String(numericProfileId))}` : ""}`;
}

function instantPlayUrlForOfficialGame(matchId, profileId) {
  return `aoe2gv://official/?matchId=${encodeURIComponent(String(matchId))}&profileId=${encodeURIComponent(String(profileId))}`;
}

async function fetchSharedGame(filename) {
  const apiUrl = new URL(`${API_BASE_URL}/sharedGame`);
  apiUrl.searchParams.set("game", filename);
  const response = await fetch(apiUrl, { headers: { Accept: "application/json" } });
  if (!response.ok) {
    return null;
  }
  const payload = await response.json().catch(() => null);
  return payload?.status === "OK" && payload?.data ? payload.data : null;
}

async function fetchHostedHistoryMatch(matchId) {
  const apiUrl = new URL(`${API_BASE_URL}/historyMatch`);
  apiUrl.searchParams.set("matchId", String(matchId));
  const response = await fetch(apiUrl, { headers: { Accept: "application/json" } });
  if (!response.ok) {
    return null;
  }
  const payload = await response.json().catch(() => null);
  const data = payload?.status === "OK" ? payload.data : null;
  if (!data) {
    return null;
  }
  return {
    match_id: data.matchId,
    played_at: data.playedAt,
    played_unix: data.playedUnix,
    duration_seconds: data.durationSeconds,
    map_name: data.map,
    game_type: data.gameType,
    team_size: data.teamSize,
    players_json: JSON.stringify(Array.isArray(data.players) ? data.players : []),
  };
}

function parseJson(value, fallback) {
  try {
    return JSON.parse(String(value || ""));
  } catch {
    return fallback;
  }
}

function normalizeReplaySearchGameType(value) {
  const normalized = cleanText(value).toLowerCase();
  return normalized === "any" || normalized === "team" || normalized === "1v1" ? normalized : "1v1";
}

function normalizeReplaySearchValue(value) {
  const label = cleanText(value);
  return label && label.toLowerCase() !== "any" ? label : "";
}

function normalizeReplaySearchPlayer(value) {
  const id = parsePositiveInteger(value?.id ?? value?.profileId ?? value);
  if (!id) {
    return null;
  }
  return {
    id,
    name: cleanText(value?.name || value?.alias),
  };
}

function uniqueReplaySearchValues(values) {
  const seen = new Set();
  const result = [];
  for (const value of Array.isArray(values) ? values : []) {
    const label = normalizeReplaySearchValue(value);
    const key = label.toLowerCase();
    if (!label || seen.has(key)) {
      continue;
    }
    seen.add(key);
    result.push(label);
  }
  return result;
}

function uniqueReplaySearchPlayers(values) {
  const seen = new Set();
  const result = [];
  for (const value of Array.isArray(values) ? values : []) {
    const player = normalizeReplaySearchPlayer(value);
    if (!player || seen.has(player.id)) {
      continue;
    }
    seen.add(player.id);
    result.push(player);
  }
  return result;
}

function normalizeReplaySearchCriteria(value = {}) {
  const criteria = value && typeof value === "object" && !Array.isArray(value) ? value : {};
  return {
    gameType: normalizeReplaySearchGameType(criteria.gameType),
    map: normalizeReplaySearchValue(criteria.map),
    civilizations: uniqueReplaySearchValues(criteria.civilizations).slice(0, 2),
    players: uniqueReplaySearchPlayers(criteria.players).slice(0, 2),
  };
}

function replaySearchWhereClause(criteria) {
  const clauses = ["1 = 1"];
  const bindings = [];

  if (criteria.gameType === "1v1") {
    clauses.push("team_size = ?");
    bindings.push("1v1");
  } else if (criteria.gameType === "team") {
    clauses.push("team_size IN ('2v2', '3v3', '4v4')");
  }

  if (criteria.map) {
    clauses.push("map_name = ?");
    bindings.push(criteria.map);
  }

  for (const civilization of criteria.civilizations) {
    clauses.push(
      `EXISTS (
        SELECT 1
        FROM json_each(aoe2recs_history_matches.players_json) AS player
        WHERE LOWER(json_extract(player.value, '$.civilization')) = LOWER(?)
      )`
    );
    bindings.push(civilization);
  }

  for (const player of criteria.players) {
    clauses.push(
      `EXISTS (
        SELECT 1
        FROM json_each(aoe2recs_history_matches.players_json) AS player
        WHERE CAST(json_extract(player.value, '$.id') AS INTEGER) = ?
      )`
    );
    bindings.push(player.id);
  }

  return {
    sql: clauses.join("\n      AND "),
    bindings,
  };
}

function normalizeArchivedHistoryMember(player) {
  const profileId = parsePositiveInteger(player?.id || player?.profileId);
  return {
    profileId,
    name: cleanText(player?.name || player?.alias) || (profileId ? `Profile ${profileId}` : "Unknown player"),
    civ: cleanText(player?.civilization || player?.civ) || "Unknown",
    civId: null,
    teamId: parsePositiveInteger(player?.team ?? player?.teamId) || null,
    outcome: player?.winner === true ? "Win" : player?.winner === false ? "Lose" : cleanText(player?.outcome || player?.result || "Unknown"),
    photoUrl: "",
    avatarUrl: "",
    isHuman: true,
    replayAvailable: true,
    rating: Number.isFinite(Number(player?.rating)) ? Number(player.rating) : null,
    rank: null,
    country: cleanText(player?.country_code || player?.country).toLowerCase(),
  };
}

function selectedArchivedMember(members, criteria) {
  const selectedPlayerId = criteria?.players?.[0]?.id || 0;
  if (selectedPlayerId) {
    return members.find((member) => Number(member.profileId) === selectedPlayerId) || members[0] || null;
  }
  const selectedCiv = String(criteria?.civilizations?.[0] || "").toLowerCase();
  if (selectedCiv) {
    return members.find((member) => cleanText(member.civ).toLowerCase() === selectedCiv) || members[0] || null;
  }
  return members[0] || null;
}

function teamSidesFromMembers(members, selectedMember) {
  const selectedTeamId = parsePositiveInteger(selectedMember?.teamId);
  if (selectedTeamId) {
    return {
      teamA: members.filter((member) => parsePositiveInteger(member.teamId) === selectedTeamId),
      teamB: members.filter((member) => parsePositiveInteger(member.teamId) !== selectedTeamId),
    };
  }
  const knownTeamIds = Array.from(new Set(members.map((member) => parsePositiveInteger(member.teamId)).filter(Boolean)));
  if (knownTeamIds.length > 1) {
    return {
      teamA: members.filter((member) => parsePositiveInteger(member.teamId) === knownTeamIds[0]),
      teamB: members.filter((member) => parsePositiveInteger(member.teamId) !== knownTeamIds[0]),
    };
  }
  const midpoint = Math.ceil(members.length / 2);
  return {
    teamA: members.slice(0, midpoint),
    teamB: members.slice(midpoint),
  };
}

function winningSideFromTeamMembers(teamA, teamB) {
  if (teamA.some((member) => /^win$/i.test(cleanText(member?.outcome)))) {
    return "A";
  }
  if (teamB.some((member) => /^win$/i.test(cleanText(member?.outcome)))) {
    return "B";
  }
  return "";
}

function normalizeHostedHistoryMatch(row, criteria = {}) {
  if (!row) {
    return null;
  }
  const rawPlayers = parseJson(row.players_json, []);
  const members = (Array.isArray(rawPlayers) ? rawPlayers : [])
    .map(normalizeArchivedHistoryMember)
    .filter(Boolean);
  const selected = selectedArchivedMember(members, criteria);
  const selectedProfileId = Number(selected?.profileId) || Number(members[0]?.profileId) || null;
  const { teamA, teamB } = teamSidesFromMembers(members, selected);
  return {
    id: parsePositiveInteger(row.match_id),
    selectedProfileId,
    startTime: parsePositiveInteger(row.played_unix) || Math.floor(Date.parse(row.played_at || "") / 1000) || 0,
    completionTime: Number(row.duration_seconds) || 0,
    completed: true,
    result: cleanText(selected?.outcome) || "Unknown",
    civilization: cleanText(selected?.civ) || "Unknown",
    civilizationId: null,
    map: cleanText(row.map_name) || "Unknown Map",
    description: cleanText(row.game_type || row.team_size),
    maxPlayers: members.length,
    members,
    playersA: teamA.map((member) => member.name).filter(Boolean),
    civsA: teamA.map((member) => member.civ || "Unknown"),
    playersB: teamB.map((member) => member.name).filter(Boolean),
    civsB: teamB.map((member) => member.civ || "Unknown"),
    winnerSide: winningSideFromTeamMembers(teamA, teamB),
    replayUrl: "",
    sourceUrl: "https://aoe2recs.com/history",
    source: "aoe2viewer-archive",
    hosted: true,
  };
}

async function handleReplaySearchOptions(env) {
  try {
    const [valueEntries, players] = await Promise.all([
      Promise.all(
        DATA_API_LIST_VALUE_NAMES.map(async (name) => [
          name,
          normalizeListValues(await fetchDataApiJson(env, "/list_values", { name })),
        ])
      ),
      fetchAgeStatsTopPlayers(),
    ]);
    return jsonResponse({
      status: "OK",
      data: {
        ratingRanges: REPLAY_RATING_RANGES,
        lengthRanges: REPLAY_LENGTH_RANGES,
        defaults: DATA_API_DEFAULT_FILTERS,
        civilizations: CIVILIZATION_OPTIONS,
        treatyLengths: DATA_API_TREATY_LENGTHS,
        values: Object.fromEntries(valueEntries),
        players,
      },
    });
  } catch (error) {
    return errorJsonResponse(error?.message || "Replay filters are unavailable", 502);
  }
}

async function handleReplaySearch(request, env) {
  if (request.method !== "POST" && request.method !== "GET" && request.method !== "HEAD") {
    return errorJsonResponse("Method not allowed", 405);
  }
  try {
    const url = new URL(request.url);
    const body = request.method === "POST" ? await request.json().catch(() => ({})) : {};
    const criteria = request.method === "POST"
      ? normalizeDataApiCriteria(body.criteria || body)
      : normalizeDataApiCriteria(criteriaFromSearchParams(url.searchParams));
    const query = dataApiQueryParams(criteria);
    const payload = await fetchDataApiJson(env, "/query", query);
    const records = Array.isArray(payload?.records) ? payload.records : [];
    const matches = records.map(normalizeDataApiMatch).filter(Boolean);
    return jsonResponse({
      status: "OK",
      data: {
        criteria,
        query,
        total: matches.length,
        limit: Number(payload?.limit) || DATA_API_QUERY_LIMIT,
        matches,
      },
    });
  } catch (error) {
    return errorJsonResponse(error?.message || "Replay search is unavailable", 502);
  }
}

async function handleReplayStrategyDetection(request, env) {
  if (request.method !== "POST") {
    return errorJsonResponse("Method not allowed", 405);
  }
  try {
    const body = await request.json().catch(() => ({}));
    const matchId = parsePositiveInteger(body?.matchId);
    if (!matchId) {
      return errorJsonResponse("matchId is required", 422);
    }
    const profileId = parsePositiveInteger(body?.profileId);
    const payload = await fetchDataApiPostJson(
      env,
      "/detect_strategy",
      profileId ? { matchId, profileId } : { matchId },
      {}
    );
    return jsonResponse({
      status: "OK",
      data: {
        matchId: parsePositiveInteger(payload?.matchId) || matchId,
        profileId,
        status: cleanText(payload?.status) || "ready",
        playerAStrategy: cleanText(payload?.playerAStrategy),
        playerBStrategy: cleanText(payload?.playerBStrategy),
        playerAFollowup: cleanText(payload?.playerAFollowup),
        playerBFollowup: cleanText(payload?.playerBFollowup),
      },
    });
  } catch (error) {
    return errorJsonResponse(error?.message || "Strategy detection is unavailable", 502);
  }
}

function aoe2CompanionRankUrl(profileId) {
  const url = new URL(AOE2_COMPANION_RANK_URL);
  url.searchParams.set("profile_id", String(profileId));
  url.searchParams.set("flag", "true");
  return url;
}

function normalizeRankSummary(text) {
  const raw = cleanText(text);
  if (!raw) {
    return "";
  }
  try {
    const parsed = JSON.parse(raw);
    if (typeof parsed === "string") {
      return cleanText(parsed);
    }
    if (parsed && typeof parsed === "object") {
      return cleanText(parsed.summary || parsed.message || parsed.text || parsed.result);
    }
  } catch {
  }
  return raw;
}

async function handlePlayerRank(request) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return errorJsonResponse("Method not allowed", 405);
  }
  const url = new URL(request.url);
  const profileId = parsePositiveInteger(url.searchParams.get("profileId") || url.searchParams.get("profile_id"));
  if (!profileId) {
    return errorJsonResponse("Missing profileId", 400);
  }
  try {
    const response = await fetch(aoe2CompanionRankUrl(profileId), {
      headers: {
        Accept: "text/plain, application/json",
        "User-Agent": "AOE2Viewer/1.0 (+https://www.aoe2viewer.com)",
      },
    });
    const text = await response.text();
    const summary = normalizeRankSummary(text);
    if (!response.ok || !summary) {
      return errorJsonResponse("Player rank is unavailable", response.ok ? 502 : response.status);
    }
    return jsonResponse(
      {
        status: "OK",
        data: {
          profileId,
          summary,
        },
      },
      200,
      { "cache-control": "public, max-age=300" }
    );
  } catch {
    return errorJsonResponse("Player rank is unavailable", 502);
  }
}

function serializeD1SharedGame(row) {
  if (!row) {
    return null;
  }
  const gameInfo = parseJson(row.game_info, {});
  const expiresAt = row.expires_at || gameInfo.expiresAt || "";
  return {
    filename: row.filename || gameInfo.filename || "",
    downloadUrl: row.download_url || gameInfo.downloadUrl || "",
    pageUrl: row.page_url || gameInfo.pageUrl || "",
    originalFileName: row.original_file_name || gameInfo.originalFileName || "",
    map: row.map_name || gameInfo.map || "",
    startTime: Number(row.start_time || gameInfo.startTime) || 0,
    startedAt: row.started_at || gameInfo.startedAt || "",
    completionTime: Number(row.completion_time || gameInfo.completionTime) || 0,
    playersA: parseJson(row.players_a, gameInfo.playersA || []),
    civsA: parseJson(row.civs_a, gameInfo.civsA || []),
    playersB: parseJson(row.players_b, gameInfo.playersB || []),
    civsB: parseJson(row.civs_b, gameInfo.civsB || []),
    winnerSide: row.winner_side || gameInfo.winnerSide || "",
    winnerLabel: row.winner_label || gameInfo.winnerLabel || "",
    expiresAt,
    isExpired: expiresAt ? Date.parse(expiresAt) <= Date.now() : false,
  };
}

async function loadSharedGame(env, filename) {
  return fetchSharedGame(filename);
}

async function loadHostedGame(env, matchId) {
  if (!matchId) {
    return null;
  }
  const row = await fetchHostedHistoryMatch(matchId);
  const hostedGame = normalizeHostedHistoryMatch(row, {});
  if (!hostedGame) {
    return null;
  }
  try {
    const storedGame = await loadOfficialDataApiGame(env, matchId);
    return storedGame
      ? {
          ...hostedGame,
          playerAStrategy: storedGame.playerAStrategy,
          playerBStrategy: storedGame.playerBStrategy,
          playerAFollowup: storedGame.playerAFollowup,
          playerBFollowup: storedGame.playerBFollowup,
        }
      : hostedGame;
  } catch {
    return hostedGame;
  }
}

async function loadOfficialDataApiGame(env, matchId) {
  const payload = await fetchDataApiJson(env, "/query", {
    matchId,
    limit: 1,
    ratingRange: REPLAY_RATING_ANY_VALUE,
    aiPlayer: "any",
    difficulty: "any",
    startingAge: "any",
    fullTechTree: "any",
    allowCheats: "any",
    endingAge: "any",
    lockTeams: "any",
    mapSize: "any",
    population: "any",
    resources: "any",
    sharedExploration: "any",
    teamTogether: "any",
    treatyLength: "any",
    victory: "any",
    revealMap: "any",
  });
  const record = Array.isArray(payload?.records) ? payload.records[0] : null;
  return normalizeDataApiMatch(record);
}

function formatDateTime(timestamp, iso, locale) {
  const date = Number(timestamp) > 0 ? new Date(Number(timestamp) * 1000) : iso ? new Date(iso) : null;
  if (!date || Number.isNaN(date.getTime())) {
    return "";
  }
  try {
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  } catch {
    return date.toISOString();
  }
}

function formatDuration(seconds) {
  const total = Number(seconds) || 0;
  if (total <= 0) {
    return "";
  }
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const remainingSeconds = Math.floor(total % 60);
  const parts = hours ? [hours, minutes, remainingSeconds] : [minutes, remainingSeconds];
  return parts.map((part) => String(part).padStart(2, "0")).join(":");
}

function metaItem(label, value) {
  const displayValue = String(value || "").trim();
  if (!displayValue) {
    return "";
  }
  return `
    <div>
      <dt>${escapeHtml(label)}</dt>
      <dd>${escapeHtml(displayValue)}</dd>
    </div>
  `;
}

function seoTableCell(value) {
  const text = cleanText(value);
  return text ? escapeHtml(text) : "";
}

function seoLocalizedList(messages, values, source) {
  const clean = (Array.isArray(values) ? values : []).map((value) => cleanText(value)).filter(Boolean);
  return clean.length
    ? clean.map((value) => localizedOptionLabel(messages, source, value, value)).join(", ")
    : t(messages, "common.unknown");
}

function seoMatchTeams(match) {
  const members = Array.isArray(match?.members) ? match.members : [];
  if (!members.length) {
    return {
      playersA: match.playersA || [],
      playersB: match.playersB || [],
      civsA: match.civsA || [],
      civsB: match.civsB || [],
      membersA: [],
      membersB: [],
    };
  }
  const selected = members.find((member) => Number(member.profileId) === Number(match.selectedProfileId)) || members[0] || null;
  const selectedTeamId = Number(selected?.teamId);
  let teamA = [];
  let teamB = [];
  if (Number.isFinite(selectedTeamId)) {
    teamA = members.filter((member) => Number(member.teamId) === selectedTeamId);
    teamB = members.filter((member) => Number(member.teamId) !== selectedTeamId);
  } else {
    const midpoint = Math.ceil(members.length / 2);
    teamA = members.slice(0, midpoint);
    teamB = members.slice(midpoint);
  }
  return {
    playersA: teamA.map((member) => member.name),
    playersB: teamB.map((member) => member.name),
    civsA: teamA.map((member) => member.civ),
    civsB: teamB.map((member) => member.civ),
    membersA: teamA,
    membersB: teamB,
  };
}

function isSeoStrategyApplicable(match, teams = seoMatchTeams(match)) {
  const memberCount = Array.isArray(match?.members) && match.members.length
    ? match.members.length
    : (Array.isArray(teams.playersA) ? teams.playersA.length : 0) + (Array.isArray(teams.playersB) ? teams.playersB.length : 0);
  return memberCount === 2 && teams.membersA.length <= 1 && teams.membersB.length <= 1;
}

function replayStrategyNameKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

function replayLabelGeneratedKey(prefix, value) {
  const words = cleanText(value)
    .toLowerCase()
    .split(/[^a-z0-9]+/g)
    .filter(Boolean);
  if (!words.length) {
    return "";
  }
  const suffix = words
    .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join("");
  return `${prefix}.${suffix}`;
}

function localizedReplayMessage(messages, key) {
  return key ? messages?.[key] || DEFAULT_MESSAGES[key] || "" : "";
}

function localizedReplayStrategyName(messages, value) {
  const text = cleanText(value);
  if (!text) {
    return "";
  }
  const key = REPLAY_STRATEGY_LABEL_KEYS.get(replayStrategyNameKey(text));
  return key ? t(messages, key) : text;
}

function localizedReplayFollowupName(messages, value) {
  const text = cleanText(value);
  if (!text) {
    return "";
  }
  const parts = text.split(/\s*\+\s*/).filter(Boolean);
  if (parts.length > 1) {
    return parts.map((part) => localizedReplayFollowupName(messages, part)).join(" + ");
  }
  const key =
    REPLAY_FOLLOWUP_LABEL_KEYS.get(replayStrategyNameKey(text)) ||
    replayLabelGeneratedKey("replaySearch.followupName", text);
  const localized = localizedReplayMessage(messages, key);
  return localized || text;
}

function renderSeoStrategyFieldCell(messages, match, key, teams, options = {}) {
  if (!isSeoStrategyApplicable(match, teams)) {
    return `<span class="replay-strategy-status">${escapeHtml(t(messages, "replaySearch.notApplicable"))}</span>`;
  }
  const value = cleanText(match?.[key]);
  if (value) {
    return escapeHtml(options.followup ? localizedReplayFollowupName(messages, value) : options.localized === false ? value : localizedReplayStrategyName(messages, value));
  }
  const label = t(messages, "replaySearch.clickToDetect");
  return `<button class="replay-text-action replay-strategy-detect" type="button" data-action="detect-replay-strategy" data-match-id="${escapeHtml(match?.matchId || match?.id)}">${escapeHtml(label)}</button>`;
}

function renderSeoStrategyCell(messages, match, key, teams) {
  return renderSeoStrategyFieldCell(messages, match, key, teams);
}

function renderSeoFollowupCell(messages, match, key, teams) {
  return renderSeoStrategyFieldCell(messages, match, key, teams, { followup: true });
}

function replayActionIconSvg() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 6.5v11l9-5.5Z" fill="currentColor" stroke="none" />
    </svg>`;
}

function favoriteActionIconSvg() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3.6 2.6 5.2 5.8.8-4.2 4.1 1 5.7-5.2-2.7-5.2 2.7 1-5.7-4.2-4.1 5.8-.8Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
    </svg>`;
}

function downloadActionIconSvg() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 4v10" />
      <path d="m7.5 9.5 4.5 4.5 4.5-4.5" />
      <path d="M5 19h14" />
    </svg>`;
}

function trophyIconSvg() {
  return `
    <svg class="winner-trophy" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 4h8v3.5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 6H5.5a2 2 0 0 0 2 3.5" />
      <path d="M16 6h2.5a2 2 0 0 1-2 3.5" />
      <path d="M12 11.5V16" />
      <path d="M9 20h6" />
      <path d="M10 16h4l.8 4H9.2l.8-4Z" />
    </svg>`;
}

function renderSeoReplayHeaderCell(messages, column, activeSort = { key: "dateTime", direction: "desc" }) {
  const direction = activeSort.key === column.key ? activeSort.direction : "";
  const ariaSort = direction === "asc" ? "ascending" : direction === "desc" ? "descending" : "none";
  const indicator = direction === "asc" ? "↑" : direction === "desc" ? "↓" : "↕";
  return `
    <th scope="col" aria-sort="${ariaSort}">
      <button class="replay-sort-button ${direction ? "active" : ""}" type="button" data-action="sort-replay-results" data-sort-key="${escapeHtml(column.key)}">
        <span>${escapeHtml(t(messages, column.labelKey))}</span>
        <span class="replay-sort-indicator" aria-hidden="true">${indicator}</span>
      </button>
    </th>`;
}

function renderSeoMapCell(messages, match, locale) {
  const map = cleanText(match?.map);
  if (!map) {
    return escapeHtml(t(messages, "common.unknown"));
  }
  const label = localizedOptionLabel(messages, "map", map, map);
  return `<a class="replay-text-action replay-map-link" href="${escapeHtml(searchUrl({ map }, locale))}" data-action="filter-map" data-map="${escapeHtml(map)}" aria-label="${escapeHtml(t(messages, "replaySearch.searchByMap", { map: label }))}">
    ${escapeHtml(label)}
  </a>`;
}

function renderSeoPlayerLinks(messages, members, fallbackValues, locale) {
  const cleanMembers = (Array.isArray(members) ? members : []).filter((member) => cleanText(member?.name));
  if (cleanMembers.length) {
    return cleanMembers
      .map((member) => {
        const params = { player: member.name };
        if (member.profileId) {
          params.profileId = member.profileId;
        }
        return `<a class="replay-text-action replay-player-link" href="${escapeHtml(searchUrl(params, locale))}" data-action="filter-player" data-player-name="${escapeHtml(member.name)}" ${member.profileId ? `data-profile-id="${escapeHtml(member.profileId)}"` : ""} aria-label="${escapeHtml(t(messages, "replaySearch.searchByPlayer", { player: member.name }))}">
          ${escapeHtml(member.name)}
        </a>`;
      })
      .join('<span class="replay-player-separator" aria-hidden="true">, </span>');
  }
  return escapeHtml((Array.isArray(fallbackValues) ? fallbackValues : []).join(", ") || "");
}

function renderSeoSideCell(messages, members, fallbackValues, won, locale) {
  return `
    <div class="replay-side-cell">
      ${won ? trophyIconSvg() : ""}
      <span class="replay-player-list">${renderSeoPlayerLinks(messages, members, fallbackValues, locale)}</span>
    </div>`;
}

function renderSeoMatchRows(messages, matches, locale) {
  return (Array.isArray(matches) ? matches : [])
    .map((match) => {
      const teams = seoMatchTeams(match);
      const replayMember = (Array.isArray(match.members) ? match.members : []).find(
        (member) => Number(member?.recordGame) === 1 && parsePositiveInteger(member?.profileId)
      );
      const profileId =
        parsePositiveInteger(match.selectedProfileId) ||
        parsePositiveInteger(replayMember?.profileId) ||
        parsePositiveInteger((Array.isArray(match.members) ? match.members : [])[0]?.profileId);
      const playUrl = match.official && profileId
        ? instantPlayUrlForOfficialGame(match.matchId || match.id, profileId)
        : "";
      const downloadUrl = match.official && profileId
        ? sharedUrlForOfficialGame(match.matchId || match.id, profileId)
        : match.replayUrl || "";
      const playLabel = t(messages, "replaySearch.play");
      const favoriteLabel = t(messages, "replaySearch.addFavorite");
      const downloadLabel = t(messages, "replaySearch.share");
      return `
        <tr data-match-id="${escapeHtml(match.id)}">
          <td class="replay-actions-cell">
            <div class="replay-row-actions">
              ${playUrl ? `<a class="replay-icon-action primary" href="${escapeHtml(playUrl)}" aria-label="${escapeHtml(playLabel)}" title="${escapeHtml(playLabel)}">
                ${replayActionIconSvg()}
                <span class="sr-only">${escapeHtml(playLabel)}</span>
              </a>` : `<span class="replay-icon-action primary disabled" role="link" aria-disabled="true" aria-label="${escapeHtml(playLabel)}" title="${escapeHtml(playLabel)}">
                ${replayActionIconSvg()}
                <span class="sr-only">${escapeHtml(playLabel)}</span>
              </span>`}
              <button class="replay-icon-action favorite-toggle" type="button" data-action="toggle-favorite" data-match-id="${escapeHtml(match.id)}" aria-label="${escapeHtml(favoriteLabel)}" title="${escapeHtml(favoriteLabel)}">
                ${favoriteActionIconSvg()}
                <span class="sr-only">${escapeHtml(favoriteLabel)}</span>
              </button>
              ${downloadUrl ? `<a class="replay-icon-action" href="${escapeHtml(downloadUrl)}" aria-label="${escapeHtml(downloadLabel)}" title="${escapeHtml(downloadLabel)}">
                ${downloadActionIconSvg()}
                <span class="sr-only">${escapeHtml(downloadLabel)}</span>
              </a>` : `<span class="replay-icon-action disabled" role="link" aria-disabled="true" aria-label="${escapeHtml(downloadLabel)}" title="${escapeHtml(downloadLabel)}">
                ${downloadActionIconSvg()}
                <span class="sr-only">${escapeHtml(downloadLabel)}</span>
              </span>`}
            </div>
          </td>
          <td>${escapeHtml(formatDateTime(match.startTime, "", locale) || t(messages, "common.unknown"))}</td>
          <td>${renderSeoMapCell(messages, match, locale)}</td>
          <td class="replay-length-cell">${escapeHtml(formatDuration(match.completionTime) || t(messages, "common.unknown"))}</td>
          <td>${renderSeoSideCell(messages, teams.membersA, teams.playersA, match.winnerSide === "A", locale)}</td>
          <td>${escapeHtml(seoLocalizedList(messages, teams.civsA, "civ"))}</td>
          <td>${renderSeoStrategyCell(messages, match, "playerAStrategy", teams)}</td>
          <td>${renderSeoFollowupCell(messages, match, "playerAFollowup", teams)}</td>
          <td>${renderSeoSideCell(messages, teams.membersB, teams.playersB, match.winnerSide === "B", locale)}</td>
          <td>${escapeHtml(seoLocalizedList(messages, teams.civsB, "civ"))}</td>
          <td>${renderSeoStrategyCell(messages, match, "playerBStrategy", teams)}</td>
          <td>${renderSeoFollowupCell(messages, match, "playerBFollowup", teams)}</td>
        </tr>
      `;
    })
    .join("");
}

function renderSeoMatchTable(messages, matches, locale) {
  if (!Array.isArray(matches) || !matches.length) {
    return `<p>${escapeHtml(t(messages, "replaySearch.noResults"))}</p>`;
  }
  return `
    <div class="replay-results-table-wrap">
      <table class="replay-results-table">
        <thead>
          <tr>
            <th scope="col" class="replay-actions-head">${escapeHtml(t(messages, "replaySearch.actions"))}</th>
            ${REPLAY_TABLE_COLUMNS.map((column) => renderSeoReplayHeaderCell(messages, column)).join("")}
          </tr>
        </thead>
        <tbody>${renderSeoMatchRows(messages, matches, locale)}</tbody>
      </table>
    </div>
  `;
}

function renderSearchResultsBootstrap(data, safePage, pageCount, resultMeta) {
  return `<script type="application/json" id="seoReplayResultsData">${escapeJsonScript(JSON.stringify({
    matches: Array.isArray(data?.matches) ? data.matches : [],
    total: Array.isArray(data?.matches) ? data.matches.length : 0,
    page: safePage,
    pageCount,
    resultMeta,
  }))}</script>`;
}

async function loadSearchResults(env, criteria) {
  const query = dataApiQueryParams(criteria);
  const payload = await fetchDataApiJson(env, "/query", query);
  if (!Array.isArray(payload?.records)) {
    throw new Error("Replay search returned an invalid response");
  }
  const records = payload.records;
  const matches = records.map(normalizeDataApiMatch).filter(Boolean);
  return {
    criteria: normalizeDataApiCriteria(criteria),
    query,
    total: matches.length,
    limit: Number(payload?.limit) || DATA_API_QUERY_LIMIT,
    matches,
  };
}

function searchServiceUnavailableResponse(request, message) {
  return new Response(request.method === "HEAD" ? null : message, {
    status: 503,
    headers: {
      "content-type": "text/plain; charset=UTF-8",
      "cache-control": "no-store",
      "retry-after": "300",
    },
  });
}

async function renderSearchPage(request, env, messages, locale, resolvedCriteria, validQuery = false) {
  const url = new URL(request.url);
  const criteria = normalizeDataApiCriteria(resolvedCriteria || criteriaFromSearchParams(url.searchParams));
  const showTopPlayersOnlyNotice = !searchCriteriaSpecifiesPlayer(criteria);
  const page = Math.max(1, parsePositiveInteger(url.searchParams.get("page")) || 1);
  let params = searchParamsFromCriteria(criteria, locale, page);
  const queryLabel = searchQueryLabel(messages, criteria);
  const title = queryLabel
    ? t(messages, "replaySearch.resultsForTitle", { query: queryLabel })
    : t(messages, "replaySearch.resultsPageTitle");
  const description = queryLabel
    ? t(messages, "replaySearch.resultsForDescription", { query: queryLabel })
    : t(messages, "replaySearch.resultsDescription");

  let content = "";
  let resultMeta = "";
  let redirect = null;
  let robots = "noindex,follow";
  let unavailable = false;
  try {
    const data = await loadSearchResults(env, criteria);
    if (
      (request.method === "GET" || request.method === "HEAD") &&
      shouldRetryWithoutDirectoryRating(data.criteria, data.matches.length, validQuery)
    ) {
      redirect = {
        criteria: { ...data.criteria, ratingRange: REPLAY_RATING_ANY_VALUE },
        page: 1,
        status: 302,
      };
      return { redirect, unavailable };
    }
    const pageCount = Math.max(1, Math.ceil(data.matches.length / REPLAY_SEARCH_PAGE_SIZE));
    const safePage = Math.min(page, pageCount);
    params = searchParamsFromCriteria(data.criteria, locale, safePage);
    if (safePage !== page) {
      redirect = {
        criteria: data.criteria,
        page: safePage,
        status: 301,
      };
    }
    const visible = data.matches.slice((safePage - 1) * REPLAY_SEARCH_PAGE_SIZE, safePage * REPLAY_SEARCH_PAGE_SIZE);
    if (visible.length > 0 && validQuery) {
      robots = "index,follow";
    }
    resultMeta = t(messages, "replaySearch.resultsMeta", { total: data.matches.length, page: safePage, pages: pageCount });
    const filterItems = filterLabelItems(messages, data.criteria);
    const filterHtml = filterItems.length
      ? `<dl class="seo-filter-list">${filterItems
          .map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`)
          .join("")}</dl>`
      : "";
    const previousParams = searchParamsFromCriteria(data.criteria, locale, Math.max(1, safePage - 1));
    const nextParams = searchParamsFromCriteria(data.criteria, locale, Math.min(pageCount, safePage + 1));
    const pagination = pageCount > 1
      ? `<nav class="pagination replay-pagination" aria-label="${escapeHtml(t(messages, "replaySearch.pageOf", { page: safePage, pages: pageCount }))}">
          ${safePage > 1 ? `<a class="button secondary compact" href="${escapeHtml(localizedUrl("/search/", locale, previousParams).replace(SITE_ORIGIN, ""))}">${escapeHtml(t(messages, "replaySearch.previous"))}</a>` : ""}
          <span>${escapeHtml(t(messages, "replaySearch.pageOf", { page: safePage, pages: pageCount }))}</span>
          ${safePage < pageCount ? `<a class="button secondary compact" href="${escapeHtml(localizedUrl("/search/", locale, nextParams).replace(SITE_ORIGIN, ""))}">${escapeHtml(t(messages, "replaySearch.next"))}</a>` : ""}
        </nav>`
      : "";
    content = `
      ${filterHtml}
      <p id="replayResultsMeta" class="results-meta">${escapeHtml(resultMeta)}</p>
      <div id="replayResults" class="${visible.length ? "replay-results" : "replay-results empty-state"}">
        ${renderSeoMatchTable(messages, visible, locale)}
      </div>
      <div id="replayPagination" class="pagination replay-pagination" ${pageCount > 1 ? "" : "hidden"}>${pagination}</div>
      ${renderSearchResultsBootstrap(data, safePage, pageCount, resultMeta)}
    `;
  } catch {
    unavailable = true;
    resultMeta = t(messages, "replaySearch.searchFailed");
    content = `<div id="replayResults" class="replay-results empty-state"><p>${escapeHtml(resultMeta)}</p></div>`;
  }

  const body = `
    <main id="main" class="seo-main replay-search-main">
      <section class="seo-hero">
        <p class="eyebrow">${escapeHtml(t(messages, "replaySearch.resultsTitle"))}</p>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(description)}</p>
      </section>
      ${renderDatabaseNotice(messages, { topPlayersOnly: showTopPlayersOnlyNotice, locale })}
      <section class="replay-results-band" aria-labelledby="seoResultsTitle">
        <div class="replay-results-heading">
          <h2 id="seoResultsTitle">${escapeHtml(t(messages, "replaySearch.resultsTitle"))}</h2>
        </div>
        ${content}
      </section>
      <section id="searchHistory" class="search-history search-results-history" aria-labelledby="searchHistoryTitle" hidden>
        <h2 id="searchHistoryTitle">${escapeHtml(t(messages, "replaySearch.searchHistory"))}</h2>
        <ol id="searchHistoryList" class="search-history-list" aria-label="${escapeHtml(t(messages, "replaySearch.searchHistory"))}"></ol>
      </section>
    </main>
  `;
  return {
    html: renderPageShell({ messages, locale, title, description, path: "/search/", params, robots, body }),
    redirect,
    robots,
    unavailable,
  };
}

function renderPlayersDirectory(messages, locale, players = []) {
  const title = t(messages, "directory.players.pageTitle");
  const description = t(messages, "directory.players.description");
  const rows = players.length
    ? players.map((player) => `
        <tr>
          <td>${escapeHtml(formatNumber(player.rank, locale) || "")}</td>
          <td><a href="${escapeHtml(searchUrl({ player: player.name, profileId: player.profileId }, locale))}">${escapeHtml(player.name)}</a></td>
          <td>${escapeHtml(formatNumber(player.rating, locale) || t(messages, "common.notAvailable"))}</td>
          <td>${escapeHtml(formatRecord(player, locale, messages))}</td>
          <td>${escapeHtml(formatNumber(player.totalGames, locale) || t(messages, "common.notAvailable"))}</td>
        </tr>`).join("")
    : `<tr><td colspan="5">${escapeHtml(t(messages, "directory.players.empty"))}</td></tr>`;
  const body = `
    <main id="main" class="seo-main">
      <section class="seo-hero">
        <p class="eyebrow">${escapeHtml(t(messages, "directory.players.eyebrow"))}</p>
        <h1>${escapeHtml(t(messages, "directory.players.title"))}</h1>
        <p>${escapeHtml(t(messages, "directory.players.intro"))}</p>
      </section>
      ${renderDatabaseNotice(messages, { locale })}
      <section class="directory-search" aria-labelledby="playerSearchTitle">
        <h2 id="playerSearchTitle">${escapeHtml(t(messages, "directory.players.searchTitle"))}</h2>
        <form action="/search/" method="get" class="directory-search-form">
          <label class="search-field">
            <span>${escapeHtml(t(messages, "directory.players.searchLabel"))}</span>
            <input name="player" placeholder="${escapeHtml(t(messages, "directory.players.searchPlaceholder"))}" />
          </label>
          <input type="hidden" name="ratingRange" value="${escapeHtml(REPLAY_RATING_ANY_VALUE)}" />
          ${locale !== DEFAULT_LOCALE ? `<input type="hidden" name="lang" value="${escapeHtml(locale)}" />` : ""}
          <button class="button primary" type="submit">${escapeHtml(t(messages, "directory.players.searchButton"))}</button>
        </form>
      </section>
      <section class="directory-section">
        <div class="replay-results-table-wrap">
          <table class="replay-results-table directory-table">
            <thead>
              <tr>
                <th scope="col">${escapeHtml(t(messages, "directory.players.rank"))}</th>
                <th scope="col">${escapeHtml(t(messages, "directory.players.player"))}</th>
                <th scope="col">${escapeHtml(t(messages, "directory.players.elo"))}</th>
                <th scope="col">${escapeHtml(t(messages, "directory.players.record"))}</th>
                <th scope="col">${escapeHtml(t(messages, "directory.players.totalGames"))}</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </section>
    </main>
  `;
  return renderPageShell({ messages, locale, title, description, path: "/players/", body });
}

function renderCardDirectory({ messages, locale, type, items }) {
  const title = t(messages, `directory.${type}.pageTitle`);
  const description = t(messages, `directory.${type}.description`);
  const source =
    type === "civilizations" ? "civ" : type === "strategies" ? "strategy" : type === "followups" ? "followup" : "map";
  const paramName =
    type === "civilizations" ? "civ" : type === "strategies" ? "strategy" : type === "followups" ? "followup" : "map";
  const collator = replaySortCollator(locale);
  const cards = (Array.isArray(items) ? items : [])
    .map((item, index) => {
      const value = typeof item === "string" ? item : item.value;
      const fallback = typeof item === "string" ? "" : item.label;
      const label = source === "strategy" ? localizedReplayStrategyName(messages, value) : source === "followup" ? localizedReplayFollowupName(messages, value) : localizedOptionLabel(messages, source, value, fallback);
      return {
        href: searchUrl(directorySearchParams(paramName, value), locale),
        index,
        label,
        value,
        icon: type === "civilizations" && CIVILIZATION_ICON_VALUES.has(value)
          ? `/images/civilizations/${value}.png`
          : "",
      };
    })
    .filter((item) => item.value && item.label && cleanText(item.value).toLowerCase() !== "unknown")
    .sort((left, right) => {
      const labelComparison = collator.compare(String(left.label), String(right.label));
      const valueComparison = labelComparison || collator.compare(String(left.value), String(right.value));
      return valueComparison || left.index - right.index;
    })
    .map((item) => `<a class="directory-card${item.icon ? " with-icon" : ""}" href="${escapeHtml(item.href)}">
      ${item.icon ? `<img class="directory-card-icon" src="${escapeHtml(item.icon)}" alt="" width="104" height="104" loading="lazy" decoding="async" />` : ""}
      <span>${escapeHtml(item.label)}</span>
    </a>`);
  const empty = type === "maps"
    ? t(messages, "directory.maps.empty")
    : type === "strategies"
      ? t(messages, "directory.strategies.empty")
      : type === "followups"
        ? t(messages, "directory.followups.empty")
      : "";
  const body = `
    <main id="main" class="seo-main">
      <section class="seo-hero">
        <p class="eyebrow">${escapeHtml(t(messages, `directory.${type}.eyebrow`))}</p>
        <h1>${escapeHtml(t(messages, `directory.${type}.title`))}</h1>
        <p>${escapeHtml(t(messages, `directory.${type}.intro`))}</p>
      </section>
      ${renderDatabaseNotice(messages, { topPlayersOnly: true, locale })}
      <section class="directory-grid" aria-label="${escapeHtml(t(messages, `directory.${type}.title`))}">
        ${cards.length ? cards.join("") : `<p>${escapeHtml(empty || t(messages, "common.notAvailable"))}</p>`}
      </section>
    </main>
  `;
  return renderPageShell({ messages, locale, title, description, path: `/${type}/`, body });
}

function meaningfulSitemapValue(value) {
  const text = cleanText(value);
  return text && text.toLowerCase() !== "unknown" ? text : "";
}

function uniqueSitemapValues(values = []) {
  const seen = new Set();
  const unique = [];
  for (const value of values) {
    const text = meaningfulSitemapValue(value);
    const key = text.toLowerCase();
    if (!text || seen.has(key)) {
      continue;
    }
    seen.add(key);
    unique.push(text);
  }
  return unique;
}

function searchSitemapParams({ players = [], maps = [], strategies = [], followups = [] }) {
  const params = [];
  for (const civilization of CIVILIZATION_OPTIONS) {
    const value = meaningfulSitemapValue(civilization?.value);
    if (value) params.push(directorySearchParams("civ", value));
  }
  for (const strategy of uniqueSitemapValues(strategies)) params.push(directorySearchParams("strategy", strategy));
  for (const map of uniqueSitemapValues(maps)) params.push(directorySearchParams("map", map));
  for (const followup of uniqueSitemapValues(followups)) params.push(directorySearchParams("followup", followup));
  for (const player of players) {
    const name = cleanText(player?.name);
    const profileId = parsePositiveInteger(player?.profileId);
    if (name && profileId) params.push({ player: name, profileId });
  }
  return params;
}

function renderSearchSitemapEntries(data) {
  const urls = [];
  const seen = new Set();
  for (const params of searchSitemapParams(data)) {
    const url = localizedUrl("/search/", DEFAULT_LOCALE, params);
    if (!seen.has(url)) {
      seen.add(url);
      urls.push(url);
    }
  }
  return {
    xml: urls.map((url) => `  <url><loc>${escapeHtml(url)}</loc></url>`).join("\n"),
    count: urls.length,
  };
}

async function safeDirectoryValues(env, name) {
  try {
    return normalizeListValues(await fetchDataApiJson(env, "/list_values", { name }));
  } catch {
    return [];
  }
}

async function handleSitemap(request, env, ctx) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response("Method not allowed", {
      status: 405,
      headers: { allow: "GET, HEAD", "content-type": "text/plain; charset=UTF-8" },
    });
  }
  try {
    const assetRequest = new Request(new URL("/sitemap.xml", SITE_ORIGIN), { method: "GET" });
    const [playerResult, maps, strategies, followups] = await Promise.all([
      loadTopPlayersForDirectory(env, ctx),
      safeDirectoryValues(env, "map"),
      safeDirectoryValues(env, "strategy"),
      safeDirectoryValues(env, "followup"),
    ]);
    const assetResponse = await env.ASSETS.fetch(assetRequest);
    if (!assetResponse.ok) {
      return assetResponse;
    }
    const baseXml = await assetResponse.text();
    if (!/<\/urlset>\s*$/i.test(baseXml)) {
      throw new Error("Base sitemap is invalid");
    }
    const { xml: searchEntries, count } = renderSearchSitemapEntries({
      players: playerResult.players,
      maps,
      strategies,
      followups,
    });
    const xml = baseXml.replace(/\s*<\/urlset>\s*$/i, `${searchEntries ? `\n${searchEntries}` : ""}\n</urlset>\n`);
    const totalCount = (xml.match(/<loc>/g) || []).length;
    return new Response(request.method === "HEAD" ? null : xml, {
      status: 200,
      headers: {
        "content-type": "application/xml; charset=UTF-8",
        "cache-control": "public, max-age=3600, s-maxage=86400",
        "x-content-type-options": "nosniff",
        "x-sitemap-search-urls": String(count),
        "x-sitemap-urls": String(totalCount),
      },
    });
  } catch {
    return new Response("Sitemap temporarily unavailable", {
      status: 503,
      headers: {
        "content-type": "text/plain; charset=UTF-8",
        "cache-control": "no-store",
        "retry-after": "300",
      },
    });
  }
}

function renderSharedGamePlan(messages, options = {}) {
  if (!options.showStrategy) {
    return "";
  }
  const strategy = cleanText(options.strategy);
  const followup = cleanText(options.followup);
  if (strategy && followup) {
    return `
      <div class="shared-player-plan" data-shared-strategy-plan>
        <span>${escapeHtml(localizedReplayStrategyName(messages, strategy))}</span>
        <span class="shared-player-plan-arrow" aria-hidden="true">-&gt;</span>
        <span>${escapeHtml(localizedReplayFollowupName(messages, followup))}</span>
      </div>`;
  }
  const matchId = parsePositiveInteger(options.matchId);
  if (!matchId) {
    return "";
  }
  return `
    <div class="shared-player-plan" data-shared-strategy-plan aria-live="polite">
      <button
        class="shared-strategy-detect"
        type="button"
        data-shared-strategy-detect
        data-match-id="${escapeHtml(matchId)}"
        data-profile-id="${escapeHtml(parsePositiveInteger(options.profileId) || "")}"
      >${escapeHtml(t(messages, "sharedGame.detectStrategy"))}</button>
    </div>`;
}

function sideCard(messages, title, players, civs, won, options = {}) {
  const playerList = Array.isArray(players) && players.length ? players : [t(messages, "sharedGame.unknown")];
  const civList = Array.isArray(civs) && civs.length ? civs : [];
  const rows = playerList
    .map((player, index) => {
      const civ = civList[index] || civList.join(", ");
      return `
        <li>
          <span>${escapeHtml(player)}</span>
          ${civ ? `<span>${escapeHtml(civ)}</span>` : ""}
          ${renderSharedGamePlan(messages, options)}
        </li>
      `;
    })
    .join("");
  return `
    <section class="shared-team${won ? " winner" : ""}">
      <div class="shared-team-heading">
        <h2>${escapeHtml(title)}</h2>
        ${won ? `<span class="winner-badge" title="${escapeHtml(t(messages, "sharedGame.winner"))}" aria-label="${escapeHtml(t(messages, "sharedGame.winner"))}">
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 4h8v3a4 4 0 0 1-8 0V4Z"></path>
            <path d="M8 5H5a3 3 0 0 0 3 5"></path>
            <path d="M16 5h3a3 3 0 0 1-3 5"></path>
            <path d="M12 11v5"></path>
            <path d="M9 20h6"></path>
            <path d="M10 16h4l1 4H9l1-4Z"></path>
          </svg>
        </span>` : ""}
      </div>
      <ul>${rows}</ul>
    </section>
  `;
}

function renderSharedGameInstructions(messages) {
  return `
    <div class="shared-game-instructions">
      <p class="shared-game-instructions-title">${escapeHtml(t(messages, "sharedGame.instructionsTitle"))}</p>
      <p>
        <strong>${escapeHtml(t(messages, "sharedGame.instructionsRegularLabel"))}</strong>
        ${escapeHtml(t(messages, "sharedGame.instructionsRegular"))}
      </p>
      <p class="shared-game-easy-way">
        <strong>${escapeHtml(t(messages, "sharedGame.instructionsEasyLabel"))}</strong>
        ${escapeHtml(t(messages, "sharedGame.instructionsEasyStart"))}<a href="${escapeHtml(APP_DOWNLOAD_URL)}">${escapeHtml(t(messages, "sharedGame.instructionsEasyDownload"))}</a>${escapeHtml(t(messages, "sharedGame.instructionsEasyEnd"))}
      </p>
    </div>
  `;
}

function isKnownSharedGameCivilization(value) {
  const text = cleanText(value);
  return Boolean(text && !/^unknown(?:\s+(?:civilization|civ))?$/i.test(text));
}

function sharedGameCivilizationName(messages, value) {
  const text = cleanText(value);
  return isKnownSharedGameCivilization(text)
    ? localizedOptionLabel(messages, "civ", text, humanizeOptionLabel(text))
    : t(messages, "sharedGame.unknown");
}

function sharedGameMapName(messages, game) {
  return localizedHumanizeOptionLabel(messages, "map", game?.map) || t(messages, "sharedGame.unknown");
}

function sharedGamePlayerList(messages, players, civs) {
  const playerList = Array.isArray(players) ? players : [];
  const civList = Array.isArray(civs) ? civs : [];
  const labels = playerList
    .map((player, index) => {
      const playerName = cleanText(player);
      if (!playerName) {
        return "";
      }
      const civ = civList[index];
      return isKnownSharedGameCivilization(civ)
        ? `${playerName} (${sharedGameCivilizationName(messages, civ)})`
        : playerName;
    })
    .filter(Boolean);
  return labels.join(", ") || t(messages, "sharedGame.unknown");
}

function sharedGameFeaturedPlayer(messages, game) {
  const members = (Array.isArray(game?.members) ? game.members : []).filter((member) => cleanText(member?.name));
  const ratedMembers = members.filter((member) => Number.isFinite(Number(member?.rating)) && Number(member.rating) > 0);
  const featuredMember = ratedMembers.reduce(
    (highest, member) => !highest || Number(member.rating) > Number(highest.rating) ? member : highest,
    null
  ) || members[0] || null;

  let playerName = cleanText(featuredMember?.name);
  let civilization = cleanText(featuredMember?.civ);
  if (!playerName) {
    const sides = [
      [game?.playersA, game?.civsA],
      [game?.playersB, game?.civsB],
    ];
    for (const [players, civs] of sides) {
      const firstPlayer = Array.isArray(players) ? cleanText(players[0]) : "";
      if (firstPlayer) {
        playerName = firstPlayer;
        civilization = Array.isArray(civs) ? cleanText(civs[0]) : "";
        break;
      }
    }
  }

  const localizedPlayerName = playerName || t(messages, "sharedGame.unknown");
  return {
    playerName: localizedPlayerName,
    civilization: sharedGameCivilizationName(messages, civilization),
  };
}

function sharedGameSeoDetails(messages, game, locale) {
  const mapName = sharedGameMapName(messages, game);
  const featured = sharedGameFeaturedPlayer(messages, game);
  const replacements = {
    player: featured.playerName,
    civ: featured.civilization,
    map: mapName,
    playersA: sharedGamePlayerList(messages, game?.playersA, game?.civsA),
    playersB: sharedGamePlayerList(messages, game?.playersB, game?.civsB),
  };
  return {
    title: t(messages, "sharedGame.replayTitle", replacements),
    description: t(messages, "sharedGame.replayDescription", replacements),
    mapName,
  };
}

function renderHeader(messages, locale = DEFAULT_LOCALE) {
  return `
    <header class="site-header" aria-label="AOE2 game viewer">
      <a class="brand" href="${escapeHtml(localizedUrl("/", locale).replace(SITE_ORIGIN, ""))}" aria-label="AOE2 game viewer">
        <img class="brand-mark" src="/icons/app-icon-64.png" alt="" aria-hidden="true" />
        <span>${escapeHtml(t(messages, "brand"))}</span>
      </a>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="${escapeHtml(localizedUrl("/", locale).replace(SITE_ORIGIN, ""))}">${escapeHtml(t(messages, "nav.replaySearch"))}</a>
        <a href="${escapeHtml(localizedUrl("/players/", locale).replace(SITE_ORIGIN, ""))}">${escapeHtml(t(messages, "nav.players"))}</a>
        <a href="${escapeHtml(localizedUrl("/civilizations/", locale).replace(SITE_ORIGIN, ""))}">${escapeHtml(t(messages, "nav.civilizations"))}</a>
        <a href="${escapeHtml(localizedUrl("/maps/", locale).replace(SITE_ORIGIN, ""))}">${escapeHtml(t(messages, "nav.maps"))}</a>
        <a href="${escapeHtml(localizedUrl("/strategies/", locale).replace(SITE_ORIGIN, ""))}">${escapeHtml(t(messages, "nav.strategies"))}</a>
        <a href="${escapeHtml(localizedUrl("/followups/", locale).replace(SITE_ORIGIN, ""))}">${escapeHtml(t(messages, "nav.followups"))}</a>
        <a href="${escapeHtml(localizedUrl("/app/", locale).replace(SITE_ORIGIN, ""))}">${escapeHtml(t(messages, "nav.app"))}</a>
      </nav>
      <label class="language-control">
        <span>${escapeHtml(t(messages, "language.label"))}</span>
        <select id="languageSelect" aria-label="Language"></select>
      </label>
    </header>
  `;
}

function renderFooter(messages, locale = DEFAULT_LOCALE, path = "/", params = {}) {
  return `
    <footer class="site-footer">
      <div class="footer-grid">
        <section class="footer-block" aria-labelledby="footerCommunityTitle">
          <p class="footer-title" id="footerCommunityTitle">${escapeHtml(t(messages, "footer.community"))}</p>
          <div class="footer-links">
            <a href="https://discord.gg/YjW9tz4tty" target="_blank" rel="noreferrer">${escapeHtml(t(messages, "footer.discord"))}</a>
            <a href="https://github.com/dallascao/aoe2-game-viewer" target="_blank" rel="noreferrer">${escapeHtml(t(messages, "footer.github"))}</a>
          </div>
        </section>
        <section class="footer-block" aria-labelledby="footerSourcesTitle">
          <p class="footer-title" id="footerSourcesTitle">${escapeHtml(t(messages, "footer.sources"))}</p>
          <div class="footer-links">
            <a href="https://www.ageofempires.com/stats/ageii/" target="_blank" rel="noreferrer">${escapeHtml(t(messages, "footer.ageStats"))}</a>
            <a href="https://aoe2recs.com/" target="_blank" rel="noreferrer">${escapeHtml(t(messages, "footer.aoe2recs"))}</a>
            <a href="https://www.aoe2companion.com/" target="_blank" rel="noreferrer">${escapeHtml(t(messages, "footer.aoe2Companion"))}</a>
            <a href="https://aoe-elo.com/" target="_blank" rel="noreferrer">${escapeHtml(t(messages, "footer.aoeElo"))}</a>
            <a href="https://liquipedia.net/ageofempires/Main_Page" target="_blank" rel="noreferrer">${escapeHtml(t(messages, "footer.liquipedia"))}</a>
          </div>
        </section>
      </div>
      <div class="footer-meta">
        <a class="footer-legal-link" href="${escapeHtml(localizedUrl("/privacy.html", locale).replace(SITE_ORIGIN, ""))}">${escapeHtml(t(messages, "footer.privacy"))}</a>
        <nav class="footer-language-links" aria-label="${escapeHtml(t(messages, "language.label"))}" data-language-crawl-links>
          ${SUPPORTED_LOCALES.map((language) => `<a href="${escapeHtml(localizedUrl(path, language, params).replace(SITE_ORIGIN, ""))}" hreflang="${escapeHtml(language)}" lang="${escapeHtml(language)}">${escapeHtml(LOCALE_LABELS[language] || language)}</a>`).join("")}
        </nav>
      </div>
    </footer>
  `;
}

function renderSharedGameContent(messages, game, filename, locale, options = {}) {
  const hostedMatchId = parsePositiveInteger(options.hostedMatchId);
  const officialMatchId = parsePositiveInteger(options.officialMatchId);
  const isHosted = Boolean(hostedMatchId);
  const isOfficial = Boolean(officialMatchId);
  if (!filename && !isHosted && !isOfficial) {
    return `
      <main id="main" class="shared-game-main">
        <section class="shared-game-shell">
          <p class="eyebrow">${escapeHtml(t(messages, "sharedGame.eyebrow"))}</p>
          <h1>${escapeHtml(t(messages, "sharedGame.missingTitle"))}</h1>
          <p class="shared-game-lede">${escapeHtml(t(messages, "sharedGame.missingBody"))}</p>
        </section>
      </main>
    `;
  }

  if (!game) {
    const officialProfileId = parsePositiveInteger(options.officialProfileId);
    const instantPlayHref = isOfficial && officialProfileId
      ? instantPlayUrlForOfficialGame(officialMatchId, officialProfileId)
      : "";
    const downloadHref = isOfficial && officialProfileId
      ? downloadUrlForOfficialGame(officialMatchId, officialProfileId)
      : filename
        ? downloadUrlForGame(filename)
        : "";
    if (isOfficial && officialProfileId) {
      return `
        <main id="main" class="shared-game-main">
          <section class="shared-game-shell">
            <div class="hero-actions">
              <a class="button primary instant-play-button" href="${escapeHtml(instantPlayHref)}" data-replay-control-notice-trigger>${escapeHtml(t(messages, "sharedGame.instantPlay"))}</a>
              <a class="button secondary plain-download-button" href="${escapeHtml(downloadHref)}">${escapeHtml(t(messages, "sharedGame.download"))}</a>
            </div>
          </section>
        </main>
      `;
    }
    return `
      <main id="main" class="shared-game-main">
        <section class="shared-game-shell">
          <p class="eyebrow">${escapeHtml(t(messages, isHosted || isOfficial ? "sharedGame.hostedEyebrow" : "sharedGame.eyebrow"))}</p>
          <h1>${escapeHtml(t(messages, "sharedGame.notFoundTitle"))}</h1>
          <p class="shared-game-lede">${escapeHtml(t(messages, "sharedGame.notFoundBody"))}</p>
          ${downloadHref ? `<div class="hero-actions">
            <a class="button secondary plain-download-button" href="${escapeHtml(downloadHref)}">${escapeHtml(t(messages, "sharedGame.download"))}</a>
          </div>` : ""}
        </section>
      </main>
    `;
  }

  const officialProfileId = parsePositiveInteger(options.officialProfileId || game.selectedProfileId);
  const downloadUrl = isOfficial && officialProfileId
    ? downloadUrlForOfficialGame(officialMatchId, officialProfileId)
    : game.downloadUrl || (filename ? downloadUrlForGame(filename) : "");
  const instantPlayUrl = isOfficial && officialProfileId
    ? instantPlayUrlForOfficialGame(officialMatchId, officialProfileId)
    : filename
      ? instantPlayUrlForGame(filename)
      : "";
  const dateTime = formatDateTime(game.startTime, game.startedAt, locale);
  const duration = formatDuration(game.completionTime);
  const expires = formatDateTime(0, game.expiresAt, locale);
  const winnerSide = String(game.winnerSide || "").toUpperCase();
  const isOneVsOne =
    Array.isArray(game.playersA) && game.playersA.length === 1 &&
    Array.isArray(game.playersB) && game.playersB.length === 1;
  const strategyMatchId = officialMatchId || hostedMatchId || parsePositiveInteger(game.matchId || game.id);
  const strategyProfileId =
    parsePositiveInteger(options.officialProfileId) ||
    parsePositiveInteger(game.selectedProfileId) ||
    parsePositiveInteger((Array.isArray(game.members) ? game.members : []).find((member) => Number(member?.recordGame) === 1)?.profileId) ||
    parsePositiveInteger((Array.isArray(game.members) ? game.members : [])[0]?.profileId);
  const sharedStrategyOptions = {
    showStrategy: isOneVsOne,
    matchId: strategyMatchId,
    profileId: strategyProfileId,
  };
  const seo = sharedGameSeoDetails(messages, game, locale);
  const meta = [
    metaItem(t(messages, "sharedGame.dateTime"), dateTime),
    metaItem(t(messages, "sharedGame.length"), duration),
    metaItem(t(messages, "sharedGame.map"), seo.mapName),
    metaItem(t(messages, "sharedGame.expires"), isHosted || isOfficial ? t(messages, "sharedGame.unknown") : game.isExpired ? t(messages, "sharedGame.expired") : expires),
  ].join("");

  return `
    <main id="main" class="shared-game-main">
      <section class="shared-game-shell">
        <div class="shared-game-hero">
          <p class="eyebrow">${escapeHtml(t(messages, isHosted || isOfficial ? "sharedGame.hostedEyebrow" : "sharedGame.eyebrow"))}</p>
          <h1>${escapeHtml(seo.title)}</h1>
          <div class="hero-actions">
            <a class="button primary instant-play-button" href="${escapeHtml(instantPlayUrl)}" data-replay-control-notice-trigger>${escapeHtml(t(messages, "sharedGame.instantPlay"))}</a>
            <a class="button secondary plain-download-button" href="${escapeHtml(downloadUrl)}">${escapeHtml(t(messages, "sharedGame.download"))}</a>
          </div>
          ${renderSharedGameInstructions(messages)}
          ${meta ? `<dl class="release-facts shared-game-facts">${meta}</dl>` : ""}
        </div>
        <div class="shared-game-vs">
          ${sideCard(messages, t(messages, "sharedGame.playersA"), game.playersA, game.civsA, winnerSide === "A", {
            ...sharedStrategyOptions,
            strategy: game.playerAStrategy,
            followup: game.playerAFollowup,
          })}
          <div class="versus" aria-hidden="true">VS</div>
          ${sideCard(messages, t(messages, "sharedGame.playersB"), game.playersB, game.civsB, winnerSide === "B", {
            ...sharedStrategyOptions,
            strategy: game.playerBStrategy,
            followup: game.playerBFollowup,
          })}
        </div>
      </section>
    </main>
  `;
}

function renderSharedGameControlNotice(messages) {
  return `
    <div
      id="replayControlNotice"
      class="replay-control-notice"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="replayControlNoticeTitle"
      aria-describedby="replayControlNoticeBody"
      hidden
    >
      <div class="replay-control-notice-dialog">
        <button
          class="replay-control-notice-close"
          type="button"
          data-replay-control-notice-close
          aria-label="${escapeHtml(t(messages, "sharedGame.controlNoticeClose"))}"
        >&times;</button>
        <p id="replayControlNoticeTitle" class="replay-control-notice-title">${escapeHtml(t(messages, "sharedGame.controlNoticeTitle"))}</p>
        <p id="replayControlNoticeBody" class="replay-control-notice-body">${escapeHtml(t(messages, "sharedGame.controlNoticeBody"))}</p>
      </div>
    </div>
  `;
}

function renderLanguageScript(locale) {
  return `
    <script>
      (() => {
        const locales = ${JSON.stringify(SUPPORTED_LOCALES)};
        const labels = {
          en: "English",
          pt: "Português",
          de: "Deutsch",
          es: "Español",
          fr: "Français",
          hi: "हिन्दी",
          it: "Italiano",
          ja: "日本語",
          ko: "한국어",
          ms: "Bahasa Melayu",
          ru: "Русский",
          tr: "Türkçe",
          "zh-Hant": "繁體中文",
          vi: "Tiếng Việt",
          "zh-Hans": "简体中文",
          pl: "Polski"
        };
        const localeCookie = ${JSON.stringify(LOCALE_COOKIE_NAME)};
        const normalizeLocale = (value) => String(value || "").trim().replace(/_/g, "-").toLowerCase();
        const aliases = {
          en: "en",
          "en-us": "en",
          "en-gb": "en",
          pt: "pt",
          "pt-br": "pt",
          "pt-pt": "pt",
          de: "de",
          "de-de": "de",
          es: "es",
          "es-es": "es",
          "es-mx": "es",
          fr: "fr",
          "fr-fr": "fr",
          hi: "hi",
          "hi-in": "hi",
          it: "it",
          "it-it": "it",
          ja: "ja",
          "ja-jp": "ja",
          ko: "ko",
          "ko-kr": "ko",
          ms: "ms",
          "ms-my": "ms",
          ru: "ru",
          "ru-ru": "ru",
          tr: "tr",
          "tr-tr": "tr",
          vi: "vi",
          "vi-vn": "vi",
          pl: "pl",
          "pl-pl": "pl",
          zh: "zh-Hans",
          "zh-cn": "zh-Hans",
          "zh-sg": "zh-Hans",
          "zh-hans": "zh-Hans",
          "zh-hans-cn": "zh-Hans",
          "zh-hans-sg": "zh-Hans",
          "zh-tw": "zh-Hant",
          "zh-hk": "zh-Hant",
          "zh-mo": "zh-Hant",
          "zh-hant": "zh-Hant",
          "zh-hant-tw": "zh-Hant",
          "zh-hant-hk": "zh-Hant"
        };
        const resolveExplicitLocale = (value) => {
          const normalized = normalizeLocale(value);
          if (!normalized) return "";
          if (aliases[normalized]) return aliases[normalized];
          return aliases[normalized.split("-")[0]] || "";
        };
        const readCookie = (name) => {
          const prefix = name + "=";
          for (const part of document.cookie.split(";")) {
            const cookie = part.trim();
            if (cookie.startsWith(prefix)) return decodeURIComponent(cookie.slice(prefix.length));
          }
          return "";
        };
        const safeLocalStorageGet = (key) => {
          try {
            return window.localStorage.getItem(key);
          } catch {
            return "";
          }
        };
        const safeLocalStorageSet = (key, value) => {
          try {
            window.localStorage.setItem(key, value);
          } catch {}
        };
        const rememberLocale = (locale) => {
          safeLocalStorageSet(localeCookie, locale);
          document.cookie = localeCookie + "=" + encodeURIComponent(locale) + "; Path=/; Max-Age=31536000; SameSite=Lax";
        };
        const localePreference = () => resolveExplicitLocale(new URLSearchParams(window.location.search).get("lang"))
          || resolveExplicitLocale(safeLocalStorageGet(localeCookie))
          || resolveExplicitLocale(readCookie(localeCookie));
        const localizeHref = (href, locale) => {
          const resolved = resolveExplicitLocale(locale);
          if (!resolved) return href;
          let url;
          try {
            url = new URL(href, window.location.href);
          } catch {
            return href;
          }
          if (url.origin !== window.location.origin || !["http:", "https:"].includes(url.protocol)) {
            return href;
          }
          url.searchParams.set("lang", resolved);
          return (url.pathname + url.search + url.hash).replace(/\\+/g, "%20");
        };
        const applyLocaleToLinks = (locale) => {
          const resolved = resolveExplicitLocale(locale);
          if (!resolved) return;
          document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]').forEach((link) => {
            if (link.closest("[data-language-crawl-links]")) return;
            const href = link.getAttribute("href") || "";
            const localized = localizeHref(href, resolved);
            if (localized !== href) link.setAttribute("href", localized);
          });
          document.querySelectorAll('form[method="get"], form:not([method])').forEach((form) => {
            let action;
            try {
              action = new URL(form.getAttribute("action") || window.location.href, window.location.href);
            } catch {
              return;
            }
            if (action.origin !== window.location.origin) return;
            let input = form.querySelector('input[name="lang"]');
            if (!input) {
              input = document.createElement("input");
              input.type = "hidden";
              input.name = "lang";
              form.append(input);
            }
            input.value = resolved;
          });
        };
        const select = document.getElementById("languageSelect");
        if (select) {
          for (const code of locales) {
            const option = document.createElement("option");
            option.value = code;
            option.textContent = labels[code] || code;
            select.append(option);
          }
          select.value = ${JSON.stringify(locale)};
          select.addEventListener("change", () => {
            const next = new URL(window.location.href);
            next.searchParams.set("lang", select.value);
            rememberLocale(select.value);
            window.location.href = next.toString().replace(/\\+/g, "%20");
          });
        }
        const preferred = localePreference();
        if (preferred) {
          if (select && Array.from(select.options).some((option) => option.value === preferred)) {
            select.value = preferred;
          }
          rememberLocale(preferred);
          applyLocaleToLinks(preferred);
        }
      })();
    </script>
  `;
}

function renderSharedGameControlNoticeScript() {
  return `
    <script>
      (() => {
        const notice = document.getElementById("replayControlNotice");
        if (!notice) {
          return;
        }
        const timeoutMs = 20000;
        const closeButton = notice.querySelector("[data-replay-control-notice-close]");
        let timeoutId = 0;

        const closeNotice = () => {
          window.clearTimeout(timeoutId);
          timeoutId = 0;
          notice.classList.remove("visible");
          notice.hidden = true;
        };

        const openNotice = () => {
          window.clearTimeout(timeoutId);
          notice.hidden = false;
          notice.classList.add("visible");
          timeoutId = window.setTimeout(closeNotice, timeoutMs);
          if (closeButton && typeof closeButton.focus === "function") {
            closeButton.focus({ preventScroll: true });
          }
        };

        document.addEventListener(
          "click",
          (event) => {
            const target = event.target instanceof Element
              ? event.target.closest('[data-replay-control-notice-trigger], a[href^="aoe2gv://"]')
              : null;
            if (target && target.closest(".shared-game-main")) {
              openNotice();
            }
          },
          true
        );

        if (closeButton) {
          closeButton.addEventListener("click", closeNotice);
        }
        document.addEventListener("keydown", (event) => {
          if (event.key === "Escape" && !notice.hidden) {
            closeNotice();
          }
        });
      })();
    </script>
  `;
}

function renderSharedGameStrategyScript(messages) {
  const labels = escapeJsonScript(JSON.stringify({
    detecting: t(messages, "replaySearch.detecting"),
    failed: t(messages, "replaySearch.strategyDetectFailed"),
    notApplicable: t(messages, "replaySearch.notApplicable"),
  }));
  return `
    <script>
      (() => {
        const labels = ${labels};
        document.addEventListener("click", async (event) => {
          const button = event.target instanceof Element
            ? event.target.closest("[data-shared-strategy-detect]")
            : null;
          if (!button) return;
          const matchId = Number(button.dataset.matchId || 0);
          const profileId = Number(button.dataset.profileId || 0);
          if (!Number.isSafeInteger(matchId) || matchId <= 0) return;

          const buttons = Array.from(document.querySelectorAll("[data-shared-strategy-detect]"));
          for (const target of buttons) {
            target.disabled = true;
            target.textContent = labels.detecting;
          }
          try {
            const response = await fetch("/api/replay-search/detect-strategy", {
              method: "POST",
              headers: { Accept: "application/json", "Content-Type": "application/json" },
              body: JSON.stringify({ matchId, ...(profileId > 0 ? { profileId } : {}) }),
            });
            const payload = await response.json().catch(() => ({}));
            if (!response.ok || payload?.status !== "OK") {
              throw new Error(payload?.errorMessage || "Strategy detection failed");
            }
            if (payload?.data?.status === "not_applicable") {
              for (const plan of document.querySelectorAll("[data-shared-strategy-plan]")) {
                plan.textContent = labels.notApplicable;
              }
              return;
            }
            window.location.reload();
          } catch {
            for (const target of buttons) {
              target.disabled = false;
              target.textContent = labels.failed;
            }
          }
        });
      })();
    </script>`;
}

function parseAcceptHeader(acceptHeader) {
  return String(acceptHeader || "")
    .split(",")
    .map((part, index) => {
      const [typePart, ...params] = part.trim().split(";");
      const type = typePart.trim().toLowerCase();
      let q = 1;
      for (const param of params) {
        const [name, value] = param.trim().split("=");
        if (name?.toLowerCase() === "q") {
          const parsed = Number.parseFloat(value);
          q = Number.isFinite(parsed) ? parsed : 0;
        }
      }
      return { type, q, index };
    })
    .filter((item) => item.type && item.q > 0);
}

function acceptsMarkdown(request) {
  return parseAcceptHeader(request.headers.get("accept"))
    .some((item) => item.type === "text/markdown");
}

function decodeHtmlEntities(value) {
  const namedEntities = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: "\"",
  };
  return String(value ?? "").replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (match, entity) => {
    const lower = entity.toLowerCase();
    if (lower.startsWith("#x")) {
      const codePoint = Number.parseInt(lower.slice(2), 16);
      return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : match;
    }
    if (lower.startsWith("#")) {
      const codePoint = Number.parseInt(lower.slice(1), 10);
      return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : match;
    }
    return Object.prototype.hasOwnProperty.call(namedEntities, lower) ? namedEntities[lower] : match;
  });
}

function stripHtmlTags(value) {
  return decodeHtmlEntities(String(value ?? "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, ""))
    .replace(/[ \t]+\n/g, "\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

function stripForMeta(value) {
  return stripHtmlTags(String(value || "").replace(COBRA_CAR_ICON_TOKEN, ""));
}

function renderTranslatedText(value) {
  const text = String(value ?? "");
  if (!text.includes(COBRA_CAR_ICON_TOKEN)) {
    return escapeHtml(text);
  }
  return text
    .split(COBRA_CAR_ICON_TOKEN)
    .map((part) => escapeHtml(part))
    .join(`<img class="cobra-car-icon" src="${COBRA_CAR_ICON_PATH}" alt="AOE2 Cobra Car icon" />`);
}

function replaceHeadTags(html, page, messages, locale) {
  const title = t(messages, page.titleKey);
  const description = stripForMeta(t(messages, page.descriptionKey));
  const canonical = canonicalUrl(page.path, locale);
  const hreflangLinks = renderHrefLangLinks(page.path);
  let output = html
    .replace(/<html\b[^>]*>/i, `<html lang="${escapeHtml(locale)}">`)
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`)
    .replace(/<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${escapeHtml(canonical)}" />`)
    .replace(/<meta\s+property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta\s+property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${escapeHtml(canonical)}" />`);

  output = output.replace(
    /<meta\s+name=["']description["'][\s\S]*?\/>/i,
    `<meta name="description" content="${escapeHtml(description)}" />`
  );
  output = output.replace(
    /<meta\s+property=["']og:description["'][\s\S]*?\/>/i,
    `<meta property="og:description" content="${escapeHtml(description)}" />`
  );
  output = output.replace(
    /(?:\s*<link\s+rel=["']alternate["'][^>]*>\s*)+/i,
    `\n    ${hreflangLinks}\n`
  );
  return output;
}

function replaceTranslatedAttributes(attrs, instruction, messages) {
  if (!instruction) {
    return attrs;
  }
  let output = attrs;
  for (const pair of instruction.split(",")) {
    const [attribute, key] = pair.split(":").map((part) => part.trim());
    if (!attribute || !key) {
      continue;
    }
    const translated = escapeHtml(t(messages, key));
    const attrPattern = new RegExp(`\\s${attribute}=(["'])[\\s\\S]*?\\1`, "i");
    if (attrPattern.test(output)) {
      output = output.replace(attrPattern, ` ${attribute}="${translated}"`);
    } else {
      output += ` ${attribute}="${translated}"`;
    }
  }
  return output;
}

function applyServerTranslations(html, messages, locale) {
  let output = html;
  output = output.replace(/<([a-z][a-z0-9:-]*)\b([^>]*)\sdata-i18n-attr=["']([^"']+)["']([^>]*)>/gi, (match, tag, before, instruction, after) => {
    return `<${tag}${replaceTranslatedAttributes(`${before} ${after}`, instruction, messages)}>`;
  });
  output = output.replace(/<([a-z][a-z0-9:-]*)\b([^>]*)\sdata-i18n-html=["']([^"']+)["']([^>]*)>[\s\S]*?<\/\1>/gi, (match, tag, before, key, after) => {
    return `<${tag}${before} data-i18n-html="${escapeHtml(key)}"${after}>${t(messages, key)}</${tag}>`;
  });
  output = output.replace(/<([a-z][a-z0-9:-]*)\b([^>]*)\sdata-i18n=["']([^"']+)["']([^>]*)>[\s\S]*?<\/\1>/gi, (match, tag, before, key, after) => {
    return `<${tag}${before} data-i18n="${escapeHtml(key)}"${after}>${renderTranslatedText(t(messages, key))}</${tag}>`;
  });
  output = output.replace(/<select\b([^>]*)id=["']languageSelect["']([^>]*)>[\s\S]*?<\/select>/i, (match, before, after) => {
    const options = SUPPORTED_LOCALES
      .map((code) => `<option value="${escapeHtml(code)}"${code === locale ? " selected" : ""}>${escapeHtml(LOCALE_LABELS[code] || code)}</option>`)
      .join("");
    return `<select${before}id="languageSelect"${after}>${options}</select>`;
  });
  return output;
}

function redirectToCanonical(url, pathname) {
  const location = new URL(url.toString());
  location.pathname = pathname;
  return Response.redirect(location.toString().replace(/\+/g, "%20"), 301);
}

function canonicalSearchLocation(url, criteria, locale, page = 1) {
  const location = new URL("/search/", url.origin);
  const params = searchParamsFromCriteria(criteria, locale, page);
  for (const [key, value] of Object.entries(params)) {
    location.searchParams.set(key, String(value));
  }
  return location.toString().replace(/\+/g, "%20");
}

async function renderStaticSeoPage(request, env, url, page) {
  const locale = localeFromUrl(url);
  const messages = await loadMessages(env, locale);
  const assetUrl = new URL(page.assetPath, SITE_ORIGIN);
  const assetRequest = new Request(assetUrl.toString(), {
    method: "GET",
    headers: request.headers,
  });
  const response = await env.ASSETS.fetch(assetRequest);
  if (!response.ok) {
    return response;
  }
  let html = await response.text();
  html = replaceHeadTags(html, page, messages, locale);
  html = applyServerTranslations(html, messages, locale);
  return htmlResponse(request, html, response.status);
}

function markdownHref(href, baseUrl) {
  const decoded = decodeHtmlEntities(href).trim();
  if (!decoded) {
    return "";
  }
  try {
    return new URL(decoded, baseUrl).toString();
  } catch {
    return decoded;
  }
}

function htmlToMarkdown(html, baseUrl = SITE_ORIGIN) {
  const source = String(html || "");
  const title = stripHtmlTags(source.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "");
  const description = decodeHtmlEntities(
    source.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["'][^>]*>/i)?.[1]
    || source.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["'][^>]*>/i)?.[1]
    || ""
  ).trim();
  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || source;
  let content = body.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] || body;

  content = content
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[\s\S]*?<\/style>/gi, "")
    .replace(/<template\b[\s\S]*?<\/template>/gi, "")
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, "")
    .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, "");

  content = content.replace(/<img\b([^>]*)>/gi, (_match, attrs) => {
    const src = attrs.match(/\ssrc=["']([^"']+)["']/i)?.[1] || "";
    if (!src) {
      return "";
    }
    const alt = stripHtmlTags(attrs.match(/\salt=["']([^"']*)["']/i)?.[1] || "");
    return `![${alt}](${markdownHref(src, baseUrl)})`;
  });

  content = content.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi, (_match, attrs, inner) => {
    const href = attrs.match(/\shref=["']([^"']+)["']/i)?.[1] || "";
    const text = stripHtmlTags(inner);
    if (!href || !text) {
      return text;
    }
    return `[${text}](${markdownHref(href, baseUrl)})`;
  });

  for (let level = 6; level >= 1; level -= 1) {
    const headingPattern = new RegExp(`<h${level}[^>]*>([\\s\\S]*?)<\\/h${level}>`, "gi");
    content = content.replace(headingPattern, (_match, inner) => `\n\n${"#".repeat(level)} ${stripHtmlTags(inner)}\n\n`);
  }

  content = content
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<p\b[^>]*>/gi, "")
    .replace(/<li\b[^>]*>/gi, "\n- ")
    .replace(/<\/li>/gi, "\n")
    .replace(/<\/(ul|ol)>/gi, "\n")
    .replace(/<(ul|ol)\b[^>]*>/gi, "\n")
    .replace(/<\/(section|article|div|header|footer|form|fieldset|label|nav)>/gi, "\n")
    .replace(/<(section|article|div|header|footer|form|fieldset|label|nav)\b[^>]*>/gi, "\n")
    .replace(/<\/(tr)>/gi, "\n")
    .replace(/<(td|th)\b[^>]*>/gi, " | ")
    .replace(/<\/(td|th)>/gi, "")
    .replace(/<[^>]+>/g, "");

  const chunks = [];
  if (title) {
    chunks.push(`# ${title}`);
  }
  if (description) {
    chunks.push(description);
  }
  const markdownBody = decodeHtmlEntities(content)
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  if (markdownBody) {
    chunks.push(markdownBody);
  }
  return chunks.join("\n\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}

function markdownTokenCount(markdown) {
  const text = String(markdown || "").trim();
  return text ? Math.ceil(text.length / 4) : 0;
}

function appendVary(headers, value) {
  const existing = headers.get("vary");
  if (!existing) {
    headers.set("vary", value);
    return;
  }
  const values = existing.split(",").map((part) => part.trim().toLowerCase());
  if (!values.includes(value.toLowerCase())) {
    headers.set("vary", `${existing}, ${value}`);
  }
}

function markdownResponseFromHtml(request, html, status = 200, headers = {}) {
  const responseHeaders = new Headers(headers);
  responseHeaders.set("content-type", "text/markdown; charset=UTF-8");
  responseHeaders.set("x-markdown-tokens", String(markdownTokenCount(html)));
  responseHeaders.delete("content-length");
  responseHeaders.delete("content-encoding");
  responseHeaders.delete("etag");
  appendVary(responseHeaders, "Accept");
  const markdown = htmlToMarkdown(html, request.url);
  responseHeaders.set("x-markdown-tokens", String(markdownTokenCount(markdown)));
  return new Response(request.method === "HEAD" ? null : markdown, {
    status,
    headers: responseHeaders,
  });
}

function negotiatedHtmlResponse(request, html, status = 200, extraHeaders = {}) {
  const headers = {
    "content-type": "text/html; charset=UTF-8",
    "x-content-type-options": "nosniff",
    "referrer-policy": "strict-origin-when-cross-origin",
    ...extraHeaders,
  };
  if (acceptsMarkdown(request)) {
    return markdownResponseFromHtml(request, html, status, headers);
  }
  const responseHeaders = new Headers(headers);
  appendVary(responseHeaders, "Accept");
  return new Response(request.method === "HEAD" ? null : html, {
    status,
    headers: responseHeaders,
  });
}

function htmlResponse(request, html, status = 200, extraHeaders = {}) {
  return negotiatedHtmlResponse(request, html, status, extraHeaders);
}

async function assetResponse(request, env) {
  const response = await env.ASSETS.fetch(request);
  const contentType = String(response.headers.get("content-type") || "").toLowerCase();
  if (!acceptsMarkdown(request) || !contentType.includes("text/html")) {
    return response;
  }
  if (request.method === "HEAD") {
    return markdownResponseFromHtml(request, "", response.status, response.headers);
  }
  const html = await response.text();
  return markdownResponseFromHtml(request, html, response.status, response.headers);
}

function dashboardMethodNotAllowed() {
  return new Response("Method not allowed", {
    status: 405,
    headers: {
      "allow": "GET, HEAD",
      "cache-control": "no-store",
      "content-type": "text/plain; charset=UTF-8",
      "x-content-type-options": "nosniff",
    },
  });
}

function dashboardHtml() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex,nofollow" />
    <meta name="theme-color" content="#101214" />
    <title>Connections - AOE2 Game Viewer</title>
    <link rel="icon" href="/icons/app-icon.ico?dashboard=1" sizes="any" />
    <link rel="stylesheet" href="/styles.css?dashboard=1" />
  </head>
  <body class="dashboard-body">
    <header class="dashboard-header">
      <a class="brand" href="/" aria-label="AOE2 Game Viewer home">
        <img class="brand-mark" src="/icons/app-icon-64.png?dashboard=1" alt="" aria-hidden="true" />
        <span>AOE2 Game Viewer</span>
      </a>
      <div class="dashboard-live" aria-label="Live connection status">
        <span class="dashboard-live-dot" aria-hidden="true"></span>
        Live · 5 minute window
      </div>
    </header>
    <main class="dashboard-main" id="main">
      <section class="dashboard-heading" aria-labelledby="dashboardTitle">
        <div>
          <p class="eyebrow">Traffic monitor</p>
          <h1 id="dashboardTitle">Connections</h1>
        </div>
        <dl class="dashboard-summary">
          <div><dt>Connections</dt><dd id="connectionCount">-</dd></div>
          <div><dt>Requests</dt><dd id="requestCount">-</dd></div>
          <div><dt>Bot score</dt><dd id="scoreAvailability">N/A</dd></div>
          <div><dt>CPU usage</dt><dd id="cpuUsage">N/A</dd></div>
        </dl>
      </section>
      <div class="dashboard-state-row" aria-live="polite">
        <p id="dashboardState">Loading recent connections...</p>
        <time id="dashboardUpdated"></time>
      </div>
      <p class="dashboard-warning" id="dashboardWarning" hidden>High traffic truncated this five-minute window to the newest 10,000 requests.</p>
      <section class="dashboard-summary-table-wrap" aria-labelledby="summaryTitle">
        <div class="dashboard-section-heading">
          <h2 id="summaryTitle">Five-minute summary</h2>
          <span>Requests grouped by visitor type</span>
        </div>
        <div class="dashboard-table-wrap">
          <table class="dashboard-summary-table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Total reqs</th>
                <th scope="col">Success reqs</th>
                <th scope="col">Failed reqs</th>
                <th scope="col">Success rate</th>
              </tr>
            </thead>
            <tbody id="summaryRows"></tbody>
          </table>
        </div>
      </section>
      <div class="dashboard-table-wrap">
        <table class="dashboard-table">
          <thead>
            <tr>
              <th scope="col">Datetime</th>
              <th scope="col">Type</th>
              <th scope="col">IP</th>
              <th scope="col">Referral</th>
              <th scope="col">Header</th>
              <th scope="col">Activities</th>
              <th scope="col">Copy</th>
            </tr>
          </thead>
          <tbody id="connectionRows"></tbody>
        </table>
      </div>
    </main>
    <script>
      (() => {
        const rows = document.getElementById("connectionRows");
        const state = document.getElementById("dashboardState");
        const updated = document.getElementById("dashboardUpdated");
        const warning = document.getElementById("dashboardWarning");
        const connectionCount = document.getElementById("connectionCount");
        const requestCount = document.getElementById("requestCount");
        const scoreAvailability = document.getElementById("scoreAvailability");
        const cpuUsage = document.getElementById("cpuUsage");
        const summaryRows = document.getElementById("summaryRows");
        const expanded = new Set();
        let refreshing = false;
        let refreshPaused = window.scrollY > 4;

        function showPausedState() {
          state.textContent = "Auto-refresh paused while viewing connection details.";
        }

        function updateRefreshPause() {
          const wasPaused = refreshPaused;
          refreshPaused = window.scrollY > 4;
          if (refreshPaused) {
            showPausedState();
          } else if (wasPaused) {
            state.textContent = "Refreshing recent connections...";
            refresh();
          }
        }

        function element(tag, className, text) {
          const node = document.createElement(tag);
          if (className) node.className = className;
          if (text !== undefined) node.textContent = text;
          return node;
        }

        function formatDate(value) {
          const date = new Date(value);
          return Number.isNaN(date.getTime()) ? "Unknown" : new Intl.DateTimeFormat(undefined, {
            dateStyle: "medium",
            timeStyle: "medium",
          }).format(date);
        }

        function cell(label) {
          const node = element("td");
          node.dataset.label = label;
          return node;
        }

        function addHeaderValue(list, label, value) {
          const item = element("div");
          item.append(element("dt", "", label), element("dd", "", value || "N/A"));
          list.append(item);
        }

        function connectionText(connection, activities) {
          const score = connection.type?.botScore;
          const lines = [
            "Datetime: " + formatDate(connection.datetime),
            "Type: " + (connection.type?.label || "Unknown"),
            "Bot score: " + (score === null || score === undefined ? "N/A" : String(score)),
            "Classification source: " + (connection.type?.classificationSource || "user-agent"),
            "IP: " + (connection.ip || "Unknown"),
            "Referral: " + (connection.referral || "Direct"),
            "Headers:",
            "  User-Agent: " + (connection.headers?.userAgent || "N/A"),
            "  Accept-Language: " + (connection.headers?.acceptLanguage || "N/A"),
            "  CF-IPCountry: " + (connection.headers?.cfCountry || "N/A"),
            "  CF-Ray: " + (connection.headers?.cfRay || "N/A"),
            "Activities:",
          ];
          if (!activities.length) lines.push("  None");
          for (const activity of activities) {
            lines.push(
              "  " + formatDate(activity.at) + " " + (activity.method || "GET") + " " +
              (activity.path || "/") + " " + String(activity.status || 0)
            );
          }
          return lines.join("\\n");
        }

        function renderSummary(connections) {
          const totals = new Map();
          for (const connection of connections) {
            const name = connection.type?.kind === "human"
              ? "Human"
              : (connection.type?.label || "Unknown");
            const current = totals.get(name) || { total: 0, success: 0, failed: 0 };
            for (const activity of Array.isArray(connection.activities) ? connection.activities : []) {
              const status = Number(activity.status);
              current.total += 1;
              if (status >= 200 && status < 400) current.success += 1;
              else if (status >= 400) current.failed += 1;
            }
            current.failed = current.total - current.success;
            totals.set(name, current);
          }

          summaryRows.replaceChildren();
          const summary = Array.from(totals.entries())
            .sort((a, b) => b[1].total - a[1].total || a[0].localeCompare(b[0]));
          if (!summary.length) {
            const row = element("tr", "dashboard-empty-row");
            const empty = element("td", "", "No requests in the last five minutes.");
            empty.colSpan = 5;
            row.append(empty);
            summaryRows.append(row);
            return;
          }
          for (const [name, counts] of summary) {
            const row = element("tr");
            const rate = counts.total ? Math.round((counts.success / counts.total) * 100) : 0;
            row.append(
              element("th", "dashboard-summary-name", name),
              element("td", "", String(counts.total)),
              element("td", "dashboard-summary-success", String(counts.success)),
              element("td", "dashboard-summary-failed", String(counts.failed)),
              element("td", "dashboard-summary-rate", rate + "%")
            );
            summaryRows.append(row);
          }
        }

        async function copyConnection(button, text) {
          button.disabled = true;
          try {
            await navigator.clipboard.writeText(text);
            button.textContent = "Copied";
            button.classList.add("is-copied");
          } catch {
            button.textContent = "Copy failed";
            button.classList.add("is-error");
          }
          window.setTimeout(() => {
            button.textContent = "Copy";
            button.classList.remove("is-copied", "is-error");
            button.disabled = false;
          }, 1600);
        }

        function renderConnections(payload) {
          rows.replaceChildren();
          const connections = Array.isArray(payload.connections) ? payload.connections : [];
          renderSummary(connections);
          let activitiesTotal = 0;
          for (const connection of connections) {
            const activities = Array.isArray(connection.activities) ? connection.activities : [];
            activitiesTotal += activities.length;
            const row = element("tr");

            const datetimeCell = cell("Datetime");
            const dateTime = element("time", "dashboard-datetime", formatDate(connection.datetime));
            dateTime.dateTime = connection.datetime || "";
            datetimeCell.append(dateTime);

            const typeCell = cell("Type");
            const kind = connection.type && connection.type.kind === "bot" ? "bot" : "human";
            typeCell.append(element("span", "dashboard-type dashboard-type-" + kind, connection.type?.label || "Unknown"));
            const score = connection.type?.botScore;
            typeCell.append(element("small", "dashboard-score", "Score: " + (score === null || score === undefined ? "N/A" : String(score))));
            typeCell.append(element("small", "dashboard-source", "Source: " + (connection.type?.classificationSource || "user-agent")));

            const ipCell = cell("IP");
            ipCell.append(element("code", "dashboard-ip", connection.ip || "Unknown"));

            const referralCell = cell("Referral");
            referralCell.append(element("span", "dashboard-referral", connection.referral || "Direct"));

            const headerCell = cell("Header");
            const headerList = element("dl", "dashboard-headers");
            addHeaderValue(headerList, "User-Agent", connection.headers?.userAgent);
            addHeaderValue(headerList, "Language", connection.headers?.acceptLanguage);
            addHeaderValue(headerList, "Country", connection.headers?.cfCountry);
            addHeaderValue(headerList, "CF-Ray", connection.headers?.cfRay);
            headerCell.append(headerList);

            const activityCell = cell("Activities");
            const details = element("details", "dashboard-activities");
            const key = (connection.ip || "") + "\\n" + (connection.headers?.userAgent || "");
            details.open = expanded.has(key);
            details.addEventListener("toggle", () => {
              if (details.open) expanded.add(key);
              else expanded.delete(key);
            });
            details.append(element("summary", "", activities.length + (activities.length === 1 ? " request" : " requests")));
            const list = element("ol");
            for (const activity of activities) {
              const item = element("li");
              const activityTime = element("time", "", formatDate(activity.at));
              activityTime.dateTime = activity.at || "";
              item.append(
                activityTime,
                element("code", "dashboard-method", activity.method || "GET"),
                element("code", "dashboard-path", activity.path || "/"),
                element("span", "dashboard-http-status status-" + Math.floor(Number(activity.status || 0) / 100), String(activity.status || 0))
              );
              list.append(item);
            }
            details.append(list);
            activityCell.append(details);

            const copyCell = cell("Copy");
            const copyButton = element("button", "dashboard-copy-button", "Copy");
            copyButton.type = "button";
            copyButton.setAttribute("aria-label", "Copy connection information for " + (connection.ip || "unknown IP"));
            copyButton.addEventListener("click", () => copyConnection(copyButton, connectionText(connection, activities)));
            copyCell.append(copyButton);

            row.append(datetimeCell, typeCell, ipCell, referralCell, headerCell, activityCell, copyCell);
            rows.append(row);
          }

          if (!connections.length) {
            const row = element("tr", "dashboard-empty-row");
            const empty = element("td", "", "No origin requests in the last five minutes.");
            empty.colSpan = 7;
            row.append(empty);
            rows.append(row);
          }

          connectionCount.textContent = String(connections.length);
          requestCount.textContent = String(activitiesTotal);
          scoreAvailability.textContent = payload.botScoreAvailable ? "Available" : "N/A";
          cpuUsage.textContent = Number.isFinite(Number(payload.cpuUsagePercent)) && payload.cpuUsagePercent !== null
            ? Number(payload.cpuUsagePercent).toFixed(1) + "%"
            : "N/A";
          warning.hidden = !payload.truncated;
          state.textContent = connections.length ? "Showing origin requests from the last five minutes." : "Waiting for origin traffic.";
          updated.textContent = "Updated " + formatDate(payload.generatedAt);
          updated.dateTime = payload.generatedAt || "";
        }

        async function refresh() {
          if (refreshing || refreshPaused || document.hidden) return;
          refreshing = true;
          try {
            const response = await fetch("/api/dashboard/connections", {
              cache: "no-store",
              headers: { Accept: "application/json" },
            });
            if (!response.ok) throw new Error("Dashboard returned " + response.status);
            const payload = await response.json();
            if (refreshPaused || document.hidden) {
              showPausedState();
              return;
            }
            renderConnections(payload);
          } catch {
            if (!refreshPaused) state.textContent = "Could not refresh connections. Retrying automatically.";
          } finally {
            refreshing = false;
          }
        }

        window.addEventListener("scroll", updateRefreshPause, { passive: true });
        refresh();
        window.setInterval(refresh, 5000);
        document.addEventListener("visibilitychange", () => {
          if (!document.hidden && !refreshPaused) refresh();
        });
        if (refreshPaused) showPausedState();
      })();
    </script>
  </body>
</html>`;
}

function handleDashboardPage(request) {
  if (request.method !== "GET" && request.method !== "HEAD") return dashboardMethodNotAllowed();
  return new Response(request.method === "HEAD" ? null : dashboardHtml(), {
    status: 200,
    headers: {
      "cache-control": "no-store",
      "content-type": "text/html; charset=UTF-8",
      "referrer-policy": "no-referrer",
      "x-content-type-options": "nosniff",
      "x-robots-tag": "noindex, nofollow",
    },
  });
}

function handleDashboardConnections(request, env) {
  if (request.method !== "GET" && request.method !== "HEAD") return dashboardMethodNotAllowed();
  if (!env?.VISIT_STORE || typeof env.VISIT_STORE.snapshot !== "function") {
    return jsonResponse({ status: "ERROR", errorMessage: "Visit store unavailable" }, 503, {
      "cache-control": "no-store",
      "retry-after": "5",
      "x-robots-tag": "noindex, nofollow",
    });
  }
  const payload = env.VISIT_STORE.snapshot();
  const rawCpuUsage = env?.SYSTEM_METRICS?.snapshot?.().cpuUsagePercent;
  payload.cpuUsagePercent = rawCpuUsage === null || rawCpuUsage === undefined || rawCpuUsage === ""
    ? null
    : Number(rawCpuUsage);
  if (!Number.isFinite(payload.cpuUsagePercent)) payload.cpuUsagePercent = null;
  return new Response(request.method === "HEAD" ? null : JSON.stringify(payload), {
    status: 200,
    headers: {
      "cache-control": "no-store",
      "content-type": "application/json; charset=UTF-8",
      "referrer-policy": "no-referrer",
      "x-content-type-options": "nosniff",
      "x-robots-tag": "noindex, nofollow",
    },
  });
}

function renderSharedGamePage({ messages, locale, game, filename, hostedMatchId = 0, officialMatchId = 0, officialProfileId = 0 }) {
  const isHosted = Boolean(parsePositiveInteger(hostedMatchId));
  const isOfficial = Boolean(parsePositiveInteger(officialMatchId));
  const requestedOfficialProfileId = parsePositiveInteger(officialProfileId);
  const seo = game
    ? sharedGameSeoDetails(messages, game, locale)
    : {
        title: t(messages, "sharedGame.pageTitle"),
        description: t(messages, "sharedGame.pageDescription"),
      };
  return `<!doctype html>
<html lang="${escapeHtml(locale)}">
  <head>
    ${renderSeoHead({
      messages,
      locale,
      title: seo.title,
      description: seo.description,
      path: "/shared_game",
      params: {
        game: filename || "",
        hosted: hostedMatchId || "",
        matchId: officialMatchId || "",
        profileId: requestedOfficialProfileId || "",
      },
    })}
  </head>
  <body>
    <a class="skip-link" href="#main">${escapeHtml(t(messages, "skipLink"))}</a>
    ${renderHeader(messages, locale)}
    ${renderDatabaseNotice(messages, { locale })}
    ${renderSharedGameContent(messages, game, filename, locale, {
      hostedMatchId: isHosted ? hostedMatchId : 0,
      officialMatchId: isOfficial ? officialMatchId : 0,
      officialProfileId: requestedOfficialProfileId || game?.selectedProfileId || 0,
    })}
    ${renderSharedGameControlNotice(messages)}
    ${renderFooter(messages, locale, "/shared_game", {
      game: filename || "",
      hosted: hostedMatchId || "",
      matchId: officialMatchId || "",
      profileId: requestedOfficialProfileId || "",
    })}
    ${renderLanguageScript(locale)}
    ${renderSharedGameControlNoticeScript()}
    ${renderSharedGameStrategyScript(messages)}
  </body>
</html>`;
}

async function handleRequest(request, env, ctx) {
    const staticAssetResponse = await rateLimitExemptStaticAssetResponse(request, env);
    if (staticAssetResponse) {
      return staticAssetResponse;
    }
    const rateLimit = await checkRateLimit(request, env);
    if (!rateLimit.allowed) {
      return rateLimit.response;
    }
    if (Math.random() < RATE_LIMIT_PRUNE_PROBABILITY && typeof ctx?.waitUntil === "function") {
      ctx.waitUntil(pruneRateLimitEntries(env));
    }

    const url = new URL(request.url);
    if (url.hostname.toLowerCase() === "www.aoe2viewer.com") {
      const location = new URL(`${url.pathname}${url.search}`, SITE_ORIGIN);
      return Response.redirect(location.toString().replace(/\+/g, "%20"), 301);
    }
    const canonicalRedirectPath = CANONICAL_REDIRECT_PATHS.get(url.pathname);
    if (canonicalRedirectPath) {
      return redirectToCanonical(url, canonicalRedirectPath);
    }

    if (url.pathname === DASHBOARD_PATH) {
      return handleDashboardPage(request);
    }

    if (url.pathname === DASHBOARD_API_PATH) {
      return handleDashboardConnections(request, env);
    }

    if (url.pathname === "/sitemap.xml") {
      return handleSitemap(request, env, ctx);
    }

    if (url.pathname === "/api/replay-search/options") {
      if (request.method !== "GET" && request.method !== "HEAD") {
        return errorJsonResponse("Method not allowed", 405);
      }
      return handleReplaySearchOptions(env);
    }

    if (url.pathname === "/api/replay-search") {
      return handleReplaySearch(request, env);
    }

    if (url.pathname === "/api/replay-search/detect-strategy") {
      return handleReplayStrategyDetection(request, env);
    }

    if (url.pathname === "/api/player-rank") {
      return handlePlayerRank(request);
    }

    const staticSeoPage = STATIC_SEO_PAGES.get(url.pathname);
    if (staticSeoPage) {
      return renderStaticSeoPage(request, env, url, staticSeoPage);
    }

    if (url.pathname === "/search/") {
      const locale = localeFromUrl(url);
      const criteria = criteriaFromSearchParams(url.searchParams);
      const rawFiltersValid = rawSearchFiltersValid(url.searchParams);
      const resolved = await resolveSearchCriteria(env, ctx, criteria);
      if (resolved.validationUnavailable) {
        return searchServiceUnavailableResponse(request, "Search filters are temporarily unavailable");
      }
      const validQuery = rawFiltersValid && resolved.valid;
      const page = Math.max(1, parsePositiveInteger(url.searchParams.get("page")) || 1);
      const canonicalLocation = canonicalSearchLocation(url, resolved.criteria, locale, page);
      if (validQuery && url.toString().replace(/\+/g, "%20") !== canonicalLocation) {
        return Response.redirect(canonicalLocation, 301);
      }
      const messages = await loadMessages(env, locale);
      const rendered = await renderSearchPage(request, env, messages, locale, resolved.criteria, validQuery);
      if (rendered.unavailable) {
        return searchServiceUnavailableResponse(request, "Search results are temporarily unavailable");
      }
      if (validQuery && rendered.redirect) {
        const location = canonicalSearchLocation(
          url,
          rendered.redirect.criteria,
          locale,
          rendered.redirect.page
        );
        return Response.redirect(location, rendered.redirect.status);
      }
      return htmlResponse(request, rendered.html, 200, { "x-robots-tag": rendered.robots });
    }

    if (url.pathname === "/players/" || url.pathname === "/players") {
      const locale = localeFromUrl(url);
      const messages = await loadMessages(env, locale);
      const { players, cacheStatus } = await loadTopPlayersForDirectory(env, ctx);
      return htmlResponse(request, renderPlayersDirectory(messages, locale, players), 200, {
        "x-players-cache": cacheStatus,
      });
    }

    if (url.pathname === "/civilizations/" || url.pathname === "/civilizations") {
      const locale = localeFromUrl(url);
      const messages = await loadMessages(env, locale);
      return htmlResponse(request, renderCardDirectory({ messages, locale, type: "civilizations", items: CIVILIZATION_OPTIONS }));
    }

    if (url.pathname === "/maps/" || url.pathname === "/maps") {
      const locale = localeFromUrl(url);
      const messages = await loadMessages(env, locale);
      let maps = [];
      try {
        maps = normalizeListValues(await fetchDataApiJson(env, "/list_values", { name: "map" }));
      } catch {
        maps = [];
      }
      return htmlResponse(request, renderCardDirectory({ messages, locale, type: "maps", items: maps }));
    }

    if (url.pathname === "/strategies/" || url.pathname === "/strategies") {
      const locale = localeFromUrl(url);
      const messages = await loadMessages(env, locale);
      let strategies = [];
      try {
        strategies = normalizeListValues(await fetchDataApiJson(env, "/list_values", { name: "strategy" }));
      } catch {
        strategies = [];
      }
      return htmlResponse(request, renderCardDirectory({ messages, locale, type: "strategies", items: strategies }));
    }

    if (url.pathname === "/followups/" || url.pathname === "/followups") {
      const locale = localeFromUrl(url);
      const messages = await loadMessages(env, locale);
      let followups = [];
      try {
        followups = normalizeListValues(await fetchDataApiJson(env, "/list_values", { name: "followup" }));
      } catch {
        followups = [];
      }
      return htmlResponse(request, renderCardDirectory({ messages, locale, type: "followups", items: followups }));
    }

    if (url.pathname !== "/shared_game") {
      return assetResponse(request, env);
    }

    const filename = safeFilename(url.searchParams.get("game"));
    const hostedMatchId = parsePositiveInteger(url.searchParams.get("hosted"));
    const officialMatchId = parsePositiveInteger(url.searchParams.get("matchId"));
    const officialProfileId = parsePositiveInteger(url.searchParams.get("profileId"));
    const locale = localeFromRequest(request, url);
    let game = null;
    try {
      game = officialMatchId
        ? await loadOfficialDataApiGame(env, officialMatchId)
        : hostedMatchId
          ? await loadHostedGame(env, hostedMatchId)
          : filename
            ? await loadSharedGame(env, filename)
            : null;
    } catch {
      game = null;
    }
    if (filename && !hostedMatchId && !officialMatchId && (!game || game.isExpired)) {
      const params = sharedGameSearchParams(game, filename);
      if (params.player || params.player2) {
        return redirectToSearchResult(url, params, locale);
      }
    }
    const messages = await loadMessages(env, locale);
    const hasLookupKey = Boolean(officialMatchId || hostedMatchId || filename);
    const hasOfficialReplayFallback = Boolean(officialMatchId && officialProfileId);
    return htmlResponse(
      request,
      renderSharedGamePage({ messages, locale, game, filename, hostedMatchId, officialMatchId, officialProfileId }),
      hasLookupKey && !game && !hasOfficialReplayFallback ? 404 : 200
    );
}

export default {
  async fetch(request, env, ctx) {
    let response;
    try {
      response = await handleRequest(request, env, ctx);
    } catch (error) {
      recordVisit(request, new Response(null, { status: 500 }), env);
      throw error;
    }
    recordVisit(request, response, env);
    return response;
  },
};
