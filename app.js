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
const SITE_ORIGIN = "https://aoe2viewer.com";
const LOCALE_STORAGE_KEY = "aoe2viewer.locale";
const LOCALE_COOKIE_NAME = "aoe2viewer.locale";
const STATIC_SEO_PAGE_PATHS = new Map([
  ["", "/"],
  ["/", "/"],
  ["/index.html", "/"],
  ["/app", "/app/"],
  ["/app/", "/app/"],
  ["/app/index.html", "/app/"],
  ["/strategies", "/strategies/"],
  ["/strategies/", "/strategies/"],
  ["/followups", "/followups/"],
  ["/followups/", "/followups/"],
  ["/updates", "/updates/"],
  ["/updates/", "/updates/"],
  ["/updates.html", "/updates/"],
  ["/updates/index.html", "/updates/"],
  ["/privacy.html", "/privacy.html"],
]);
const API_BASE_URL = "https://api.aoe2viewer.com";
const FAVORITES_STORAGE_KEY = "aoe2viewer.web.favoriteGames";
const SEARCH_HISTORY_STORAGE_KEY = "aoe2viewer.web.searchHistory";
const COBRA_CAR_ICON_TOKEN = "{cobraCarIcon}";
const COBRA_CAR_ICON_PATH = "/icons/cobra-car.svg";
const REPLAY_PAGE_SIZE = 25;
const SEARCH_HISTORY_LIMIT = 10;
const SEARCH_HISTORY_NAME_MAX_LENGTH = 34;
const REPLAY_RATING_ANY_VALUE = "any";
const RECENT_HIGHLIGHTS_RATING_RANGE = "2500-4000";
const RECENT_HIGHLIGHTS_LENGTH_RANGE = "00:30:00-07:00:00";
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
const SEARCH_HISTORY_FORM_FIELDS = [
  "ratingRange",
  "playerA",
  "playerB",
  "civA",
  "civB",
  "leaderboard",
  "map",
  "gameMode",
  "lengthRange",
  "strategy",
  "followup",
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
const SEARCH_HISTORY_ADVANCED_FIELDS = [
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
const SEARCH_HISTORY_ADVANCED_LABELS = {
  aiPlayer: "replaySearch.aiPlayer",
  difficulty: "replaySearch.difficulty",
  startingAge: "replaySearch.startingAge",
  fullTechTree: "replaySearch.fullTechTree",
  allowCheats: "replaySearch.allowCheats",
  endingAge: "replaySearch.endingAge",
  lockTeams: "replaySearch.lockTeams",
  population: "replaySearch.population",
  resources: "replaySearch.resources",
  teamTogether: "replaySearch.teamTogether",
  treatyLength: "replaySearch.treatyLength",
  victory: "replaySearch.victory",
  revealMap: "replaySearch.revealMap",
};
const REPLAY_LOCALIZED_SORT_OPTION_SOURCES = new Set(["civilizations", "map", "gameMode"]);
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
  "nav.features": "Features",
  "nav.sponsors": "Sponsors",
  "nav.updates": "Updates",
  "nav.download": "Download",
  "site.databaseNotice": "Download the AOE2 viewer app to enjoy the one-click replay launch and the AOE2 spy feature that shows your opponent's strategies in live games!",
  "site.downloadApp": "download the app",
  "site.databaseNoticeHtml": 'Download the <a href="https://aoe2viewer.com/app/">AOE2 viewer app</a> to enjoy the <a href="https://aoe2viewer.com/app/#load-recent-replays-instantly">one-click replay launch</a> and the <a href="https://aoe2viewer.com/app/#aoe2-spy">AOE2 spy</a> feature that shows your opponent\'s strategies in live games!',
  "language.label": "Language",
  "features.overlay.title": "Synced event overlay",
  "features.overlay.body": "Key build, economy, and age-up events stay synced over the game view.",
  "features.overlay.alt": "Synced event overlay on an AOE2 match",
  "features.spy.title": "AOE2 Spy",
  "features.spy.body": "Display opponent's ELO and past strategies.",
  "features.spy.alt": "AOE2 Spy overlay showing opponent ELO and recent strategies",
  "features.pastePlay.title": "Paste 'n Play!",
  "features.pastePlay.body": "Paste a shared game link and launch the replay without digging through files.",
  "features.pastePlay.alt": "Paste 'n Play shared game launcher",
  "updates.toc.release261": "Version 2.6.1",
  "updates.release261.version": "Version 2.6.1",
  "updates.release261.heading": "Release 2.6.1",
  "updates.release261.date": "June 30, 2026",
  "updates.release261.summary":
    "This release adds AOE2 Spy for live game overlays and followup strategies.",
  "updates.release261.bodyHtml":
    '<section id="release-2-6-1-aoe2-spy">\n  <h3>AOE2 Spy live overlay</h3>\n  <p>AOE2 Spy shows an opponent\'s Elo and past strategies directly in the live game overlay.</p>\n</section>\n<section id="release-2-6-1-followup-strategies">\n  <h3>Followup strategies</h3>\n  <p>The app now adds followup strategies so you can see what players transition into after the opening.</p>\n</section>',
  "updates.toc.release251": "Version 2.5.1",
  "updates.release251.version": "Version 2.5.1",
  "updates.release251.heading": "Release 2.5.1",
  "updates.release251.date": "June 24, 2026",
  "updates.release251.summary":
    "This release adds strategy filters to Custom Search and Custom Follow, detects opening strategies, and makes game history refresh more robust.",
  "updates.release251.bodyHtml":
    '<section id="release-2-5-1-strategy-filters">\n  <h3>Strategy filters for Custom Search and Custom Follow</h3>\n  <p>Custom Search and Custom Follow now include strategy filters, so you can find and follow games by opening plan.</p>\n</section>\n<section id="release-2-5-1-detect-strategies">\n  <h3>Strategy detection</h3>\n  <p>The app can detect opening strategies for supported games and show them alongside the match.</p>\n</section>\n<section id="release-2-5-1-history-refresh">\n  <h3>More robust game history refresh</h3>\n  <p>Game history refresh is more reliable when loading and updating recent matches.</p>\n</section>',
  "updates.toc.release231": "Version 2.3.1",
  "updates.release231.version": "Version 2.3.1",
  "updates.release231.heading": "Release 2.3.1",
  "updates.release231.date": "June 11, 2026",
  "updates.release231.summary":
    "This release adds many more filters to Custom Search and Custom Follow, returns more follow results, and improves sharing and recorded-game playback.",
  "updates.release231.bodyHtml":
    '<section id="release-2-3-1-filters">\n  <h3>More Custom Search and Custom Follow filters</h3>\n  <p>Custom Search and Custom Follow now include many more filters, so you can narrow games by more match settings.</p>\n</section>\n<section id="release-2-3-1-follow-results">\n  <h3>More follow results</h3>\n  <p>Follow views return more matching games, giving you a deeper list to scan.</p>\n</section>\n<section id="release-2-3-1-sharing-playback">\n  <h3>Sharing and recorded-game playback improvements</h3>\n  <p>Sharing is smoother, and recorded-game playback is more reliable when opening games from the app.</p>\n</section>',
  "updates.toc.release220": "Version 2.2.0",
  "updates.release220.version": "Version 2.2.0",
  "updates.release220.heading": "Release 2.2.0",
  "updates.release220.date": "June 6, 2026",
  "updates.release220.summary":
    "This release adds Recent Games links across follow cards, clickable player names, and local database results in Custom Search.",
  "updates.release220.bodyHtml":
    '<section id="release-2-2-0-recent-games">\n  <h3>Recent Games links</h3>\n  <p>Follow cards now include Recent Games links so you can jump straight to a player\'s latest recorded matches.</p>\n</section>\n<section id="release-2-2-0-clickable-players">\n  <h3>Clickable player names</h3>\n  <p>Player names in match lists can open that player\'s recent games.</p>\n</section>\n<section id="release-2-2-0-local-search">\n  <h3>Local database results in Custom Search</h3>\n  <p>Custom Search can include local database results, making replay discovery faster and more complete.</p>\n</section>',
  "replaySearch.pageTitle": "AOE2 replay search",
  "replaySearch.eyebrow": "Replay search",
  "replaySearch.title": "Find Age of Empires 2 Definitive Edition replays and launch them instantly.",
  "replaySearch.lead":
    "Meet the most advanced replay search engine we have long been waiting for: search by any filter: player rating, game type, map, civilization, or even allow cheat settings. how do you turn this on {cobraCarIcon} No login required.",
  "replaySearch.installCallout":
    'Download the <a href="https://aoe2viewer.com/app/">AOE2 viewer app</a> to enjoy the <a href="https://aoe2viewer.com/app/#load-recent-replays-instantly">one-click replay launch</a> and the <a href="https://aoe2viewer.com/app/#aoe2-spy">AOE2 spy</a> feature that shows your opponent\'s strategies in live games!',
  "replaySearch.formTitle": "Replay search",
  "replaySearch.favorites": "Favorites",
  "replaySearch.searchHistory": "Search history",
  "replaySearch.recentHighlights": "Recent highlights",
  "replaySearch.runSavedSearch": "Search {name}",
  "replaySearch.pinSearch": "Pin search",
  "replaySearch.unpinSearch": "Unpin search",
  "replaySearch.elo": "Elo",
  "replaySearch.leaderboard": "Leaderboard",
  "replaySearch.gameMode": "Game mode",
  "replaySearch.strategy": "Strategy",
  "replaySearch.followup": "Followup",
  "replaySearch.map": "Map",
  "replaySearch.civilizationA": "Civ A",
  "replaySearch.civilizationB": "Civ B",
  "replaySearch.playerA": "Player A",
  "replaySearch.playerB": "Player B",
  "replaySearch.any": "Any",
  "replaySearch.moreFilters": "More filters",
  "replaySearch.fewerFilters": "Fewer filters",
  "replaySearch.aiPlayer": "AI players",
  "replaySearch.difficulty": "Difficulty",
  "replaySearch.startingAge": "Starting age",
  "replaySearch.endingAge": "Ending age",
  "replaySearch.fullTechTree": "Full tech tree",
  "replaySearch.allowCheats": "Allow cheats",
  "replaySearch.lockTeams": "Lock teams",
  "replaySearch.population": "Population",
  "replaySearch.resources": "Resources",
  "replaySearch.teamTogether": "Team together",
  "replaySearch.treatyLength": "Treaty length",
  "replaySearch.victory": "Victory",
  "replaySearch.revealMap": "Reveal map",
  "replaySearch.reset": "Reset",
  "replaySearch.search": "Search",
  "replaySearch.resultsEyebrow": "Search results",
  "replaySearch.readyTitle": "Search results",
  "replaySearch.readyMeta": "Results will appear here.",
  "replaySearch.emptyPrompt": "Use the filters above to search recorded games.",
  "replaySearch.loadingOptions": "Loading replay filters...",
  "replaySearch.searching": "Searching recorded games...",
  "replaySearch.searchFailed": "Replay search is temporarily unavailable.",
  "replaySearch.optionsFailed": "Replay filters are temporarily unavailable.",
  "replaySearch.noResults": "No recorded games matched these filters.",
  "replaySearch.resultsTitle": "Search results",
  "replaySearch.resultsMeta": "{total} results. Page {page} of {pages}.",
  "replaySearch.favoriteTitle": "Favorite games",
  "replaySearch.favoriteMeta": "{total} favorites saved in this browser.",
  "replaySearch.favoriteEmpty": "No favorite games saved in this browser yet.",
  "replaySearch.play": "Play",
  "replaySearch.addFavorite": "Add to favorites",
  "replaySearch.removeFavorite": "Remove favorite",
  "replaySearch.share": "Download",
  "replaySearch.actions": "Actions",
  "replaySearch.dateTime": "Date Time",
  "replaySearch.playersA": "Players A",
  "replaySearch.playersB": "Players B",
  "replaySearch.civs": "Civs",
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
  "directory.strategies.pageTitle": "AOE2 strategies",
  "directory.strategies.description": "Browse Age of Empires II opening strategies and open replay search results for each strategy.",
  "directory.strategies.eyebrow": "Strategies",
  "directory.strategies.title": "Age of Empires II strategies",
  "directory.strategies.intro": "Choose an opening strategy to find recorded games that match it.",
  "directory.strategies.empty": "Strategies are temporarily unavailable.",
  "directory.followups.pageTitle": "AOE2 followups",
  "directory.followups.description": "Browse Age of Empires II Castle Age followups and open replay search results for each followup.",
  "directory.followups.eyebrow": "Followups",
  "directory.followups.title": "Age of Empires II followups",
  "directory.followups.intro": "Choose a Castle Age followup to find recorded games that match it.",
  "directory.followups.empty": "Followups are temporarily unavailable.",
  "replaySearch.date": "Date",
  "replaySearch.length": "Length",
  "replaySearch.previous": "Previous",
  "replaySearch.next": "Next",
  "replaySearch.pageOf": "Page {page} of {pages}",
  "replaySearch.searchByPlayer": "Search by {player}",
  "replaySearch.searchByMap": "Search by {map}",
  "replaySearch.playerRankLoading": "Loading player rank...",
  "replaySearch.playerRankUnavailable": "Player rank unavailable.",
  "option.leaderboard.ew_1v1": "Empire Wars 1v1",
  "option.leaderboard.ew_1v1_console": "Empire Wars 1v1 Console",
  "option.leaderboard.ew_team": "Empire Wars Team",
  "option.leaderboard.qp_rm_1v1": "Quick Play Random Map 1v1",
  "option.leaderboard.qp_rm_team": "Quick Play Random Map Team",
  "option.leaderboard.rm_1v1": "Random Map 1v1",
  "option.leaderboard.rm_1v1_console": "Random Map 1v1 Console",
  "option.leaderboard.rm_team": "Random Map Team",
  "option.leaderboard.rm_team_console": "Random Map Team Console",
  "option.leaderboard.unknown": "Unknown",
  "option.leaderboard.unranked": "Unranked",
  "option.boolean.no": "No",
  "option.boolean.yes": "Yes",
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
  "footer.community": "Community",
  "footer.discord": "Discord",
  "footer.github": "GitHub",
  "footer.sources": "Data sources",
  "footer.ageStats": "Age of Empires stats",
  "footer.aoe2recs": "aoe2recs live feed",
  "footer.aoe2Companion": "AOE2 Companion",
  "footer.aoeElo": "AOE Elo ratings",
  "footer.liquipedia": "Liquipedia Age of Empires",
  "footer.privacy": "Privacy policy",
  "sponsors.empty": "No public sponsors yet.",
  "sponsors.error": "Sponsors are temporarily unavailable.",
};

let activeMessages = { ...DEFAULT_MESSAGES };

const replaySearchState = {
  page: 1,
  pageCount: 1,
  total: 0,
  criteria: null,
  matches: [],
  sortedMatches: [],
  options: null,
  favorites: [],
  searchHistory: [],
  pendingStrategyMatchIds: new Set(),
  view: "search",
  sort: { key: "dateTime", direction: "desc" },
  urlProfileIds: {},
  lastSearchHadResults: false,
  errorMessage: "",
  loading: false,
};

const playerRankTooltipCache = new Map();
let activePlayerTooltipTarget = null;
let activePlayerTooltipRequest = 0;

function normalizeLocale(value) {
  return String(value || "").trim().replace(/_/g, "-").toLowerCase();
}

function resolveLocale(value) {
  const normalized = normalizeLocale(value);
  if (LOCALE_ALIASES[normalized]) {
    return LOCALE_ALIASES[normalized];
  }

  const primary = normalized.split("-")[0];
  if (LOCALE_ALIASES[primary]) {
    return LOCALE_ALIASES[primary];
  }

  return DEFAULT_LOCALE;
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

function readLocaleCookie() {
  const prefix = `${LOCALE_COOKIE_NAME}=`;
  for (const part of document.cookie.split(";")) {
    const cookie = part.trim();
    if (cookie.startsWith(prefix)) {
      return decodeURIComponent(cookie.slice(prefix.length));
    }
  }
  return "";
}

function rememberLocale(locale) {
  const resolved = resolveLocale(locale);
  window.localStorage.setItem(LOCALE_STORAGE_KEY, resolved);
  document.cookie = `${LOCALE_COOKIE_NAME}=${encodeURIComponent(resolved)}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

function explicitLocalePreference() {
  const params = new URLSearchParams(window.location.search);
  const queryLocale = resolveExplicitLocale(params.get("lang"));
  if (queryLocale) {
    return queryLocale;
  }
  return (
    resolveExplicitLocale(window.localStorage.getItem(LOCALE_STORAGE_KEY)) ||
    resolveExplicitLocale(readLocaleCookie())
  );
}

function explicitUrlLocalePreference() {
  const params = new URLSearchParams(window.location.search);
  return resolveExplicitLocale(params.get("lang"));
}

function currentSeoLocale() {
  return (
    explicitUrlLocalePreference() ||
    DEFAULT_LOCALE
  );
}

function preferredLocale() {
  const params = new URLSearchParams(window.location.search);
  const queryLocale = resolveExplicitLocale(params.get("lang"));
  if (queryLocale) {
    return queryLocale;
  }

  const savedLocale = resolveExplicitLocale(window.localStorage.getItem(LOCALE_STORAGE_KEY));
  if (savedLocale) {
    return savedLocale;
  }

  const cookieLocale = resolveExplicitLocale(readLocaleCookie());
  if (cookieLocale) {
    return cookieLocale;
  }

  for (const locale of navigator.languages || [navigator.language]) {
    const resolved = resolveLocale(locale);
    if (resolved) {
      return resolved;
    }
  }

  return DEFAULT_LOCALE;
}

async function loadMessages(locale) {
  const response = await fetch(`/locales/${locale}.json`, { cache: "no-cache" });
  if (!response.ok) {
    throw new Error(`Could not load locale ${locale}`);
  }
  return response.json();
}

function t(key, replacements = {}) {
  const template = activeMessages[key] || DEFAULT_MESSAGES[key] || key;
  return String(template).replace(/\{(\w+)\}/g, (_match, name) =>
    Object.prototype.hasOwnProperty.call(replacements, name) ? String(replacements[name]) : `{${name}}`
  );
}

function createCobraCarIcon() {
  const icon = document.createElement("img");
  icon.className = "cobra-car-icon";
  icon.src = COBRA_CAR_ICON_PATH;
  icon.alt = "AOE2 Cobra Car icon";
  icon.decoding = "async";
  icon.loading = "lazy";
  return icon;
}

function renderTextWithCobraCarIcon(node, text) {
  const parts = String(text).split(COBRA_CAR_ICON_TOKEN);
  node.replaceChildren();
  parts.forEach((part, index) => {
    if (part) {
      node.appendChild(document.createTextNode(part));
    }
    if (index < parts.length - 1) {
      node.appendChild(createCobraCarIcon());
    }
  });
}

function applyTranslations(locale) {
  document.documentElement.lang = locale;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const text = t(node.dataset.i18n);
    if (text.includes(COBRA_CAR_ICON_TOKEN)) {
      renderTextWithCobraCarIcon(node, text);
    } else {
      node.textContent = text;
    }
  });
  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    node.innerHTML = t(node.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
    for (const pair of node.dataset.i18nAttr.split(",")) {
      const [attribute, key] = pair.split(":").map((part) => part.trim());
      if (attribute && key) {
        node.setAttribute(attribute, t(key));
      }
    }
  });
  const titleKey = document.body?.dataset?.i18nTitle;
  if (titleKey) {
    document.title = t(titleKey);
  }
  syncSeoLinks(currentSeoLocale());
  renderLanguageCrawlLinks(currentSeoLocale());
  updateScreenshots(locale);
}

function updateScreenshots(locale) {
  const screenshotPath = (index) => `/images/localized/${locale}/aoe2_game_viewer_screenshot_${index}.png`;
  const sharedPath = (index) => `/images/aoe2_game_viewer_screenshot_${index}.png`;
  const fallbackPath = (index) =>
    index === 0 || index === 3 || index === 4 || index === 5
      ? sharedPath(index)
      : `/images/localized/en/aoe2_game_viewer_screenshot_${index}.png`;
  const targets = [
    ["heroScreenshot", 0, true],
    ["replayScreenshot", 1, false],
    ["liveScreenshot", 2, false],
    ["overlayScreenshot", 3, true],
    ["spyScreenshot", 5, true],
    ["pastePlayScreenshot", 4, true],
  ];

  for (const [id, index, isShared] of targets) {
    const image = document.getElementById(id);
    if (!image) {
      continue;
    }
    image.src = isShared ? sharedPath(index) : screenshotPath(index);
    image.onerror = () => {
      image.onerror = null;
      image.src = fallbackPath(index);
    };
  }
}

async function setLocale(locale, options = {}) {
  const resolved = resolveLocale(locale);
  try {
    activeMessages = { ...DEFAULT_MESSAGES, ...(await loadMessages(resolved)) };
  } catch {
    try {
      activeMessages = { ...DEFAULT_MESSAGES, ...(await loadMessages(DEFAULT_LOCALE)) };
    } catch {
      activeMessages = { ...DEFAULT_MESSAGES };
    }
  }

  if (options.remember) {
    rememberLocale(resolved);
  }
  applyTranslations(resolved);

  const select = document.getElementById("languageSelect");
  if (select) {
    select.value = resolved;
  }

  if (isReplaySearchExperience()) {
    if (replaySearchState.options) {
      populateReplayFilterOptions(replaySearchState.options);
    }
    renderReplayState();
  }
}

function setupLanguageSelect() {
  const select = document.getElementById("languageSelect");
  if (!select) {
    return;
  }

  for (const locale of SUPPORTED_LOCALES) {
    if (Array.from(select.options).some((option) => option.value === locale)) {
      continue;
    }
    const option = document.createElement("option");
    option.value = locale;
    option.textContent = LOCALE_LABELS[locale] || locale;
    select.append(option);
  }

  select.addEventListener("change", () => {
    rememberLocale(select.value);
    const path = staticSeoPathname();
    if (path) {
      window.location.href = localizedAbsoluteUrl(path, select.value).replace(SITE_ORIGIN, "");
      return;
    }
    const next = new URL(window.location.href);
    next.searchParams.set("lang", select.value);
    window.location.href = `${next.pathname}${next.search}${next.hash}`.replace(/\+/g, "%20");
  });
}

function urlWithLocalePreference(href, locale) {
  const resolved = resolveExplicitLocale(locale);
  if (!resolved) {
    return href;
  }

  let url;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return href;
  }

  if (![window.location.origin, SITE_ORIGIN].includes(url.origin) || !["http:", "https:"].includes(url.protocol)) {
    return href;
  }

  url.searchParams.set("lang", resolved);
  return `${url.pathname}${url.search}${url.hash}`.replace(/\+/g, "%20");
}

function staticSeoPathname(pathname = window.location.pathname) {
  return STATIC_SEO_PAGE_PATHS.get(pathname) || "";
}

function localizedAbsoluteUrl(path, locale) {
  const url = new URL(path || "/", SITE_ORIGIN);
  if (locale && locale !== DEFAULT_LOCALE) {
    url.searchParams.set("lang", locale);
  }
  return url.toString().replace(/\+/g, "%20");
}

function queryStringFromParams(params) {
  return params.toString().replace(/\+/g, "%20");
}

function ensureHeadLink(selector, attributes) {
  let link = document.head.querySelector(selector);
  if (!link) {
    link = document.createElement("link");
    document.head.append(link);
  }
  for (const [name, value] of Object.entries(attributes)) {
    link.setAttribute(name, value);
  }
  return link;
}

function syncSeoLinks(locale) {
  const path = staticSeoPathname();
  if (!path) {
    return;
  }

  const canonical = localizedAbsoluteUrl(path, locale);
  ensureHeadLink('link[rel="canonical"]', {
    rel: "canonical",
    href: canonical,
  });
  for (const code of SUPPORTED_LOCALES) {
    ensureHeadLink(`link[rel="alternate"][hreflang="${code}"]`, {
      rel: "alternate",
      hreflang: code,
      href: localizedAbsoluteUrl(path, code),
    });
  }
  ensureHeadLink('link[rel="alternate"][hreflang="x-default"]', {
    rel: "alternate",
    hreflang: "x-default",
    href: localizedAbsoluteUrl(path, DEFAULT_LOCALE),
  });

  const ogUrl = document.head.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute("content", canonical);
  }
}

function applyLocaleToInternalLinks(locale = explicitLocalePreference()) {
  const resolved = resolveExplicitLocale(locale);
  if (!resolved) {
    return;
  }

  document.querySelectorAll("a[href]").forEach((link) => {
    if (link.closest("[data-language-crawl-links]")) {
      return;
    }
    const href = link.getAttribute("href") || "";
    const localized = urlWithLocalePreference(href, resolved);
    if (localized !== href) {
      link.setAttribute("href", localized);
    }
  });

  document.querySelectorAll('form[method="get"], form:not([method])').forEach((form) => {
    let action;
    try {
      action = new URL(form.getAttribute("action") || window.location.href, window.location.href);
    } catch {
      return;
    }
    if (action.origin !== window.location.origin) {
      return;
    }
    let input = form.querySelector('input[name="lang"]');
    if (!input) {
      input = document.createElement("input");
      input.type = "hidden";
      input.name = "lang";
      form.append(input);
    }
    input.value = resolved;
  });
}

function renderLanguageCrawlLinks(locale = explicitLocalePreference() || DEFAULT_LOCALE) {
  const path = staticSeoPathname() || "/";
  const current = resolveLocale(locale);
  document.querySelectorAll("[data-language-crawl-links]").forEach((container) => {
    container.replaceChildren(
      ...SUPPORTED_LOCALES.map((code) => {
        const link = document.createElement("a");
        link.href = localizedAbsoluteUrl(path, code).replace(SITE_ORIGIN, "");
        link.hreflang = code;
        link.lang = code;
        link.textContent = LOCALE_LABELS[code] || code;
        if (code === current) {
          link.setAttribute("aria-current", "true");
        }
        return link;
      })
    );
  });
}

async function loadSponsors() {
  const list = document.getElementById("sponsorList");
  if (!list) {
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/sponsors`, { headers: { Accept: "application/json" } });
    if (!response.ok) {
      throw new Error(`Sponsor API returned ${response.status}`);
    }
    const payload = await response.json();
    const sponsors = Array.isArray(payload.data) ? payload.data : [];
    list.replaceChildren();

    if (!sponsors.length) {
      const item = document.createElement("li");
      item.textContent = t("sponsors.empty");
      list.append(item);
      return;
    }

    for (const sponsor of sponsors) {
      const username = String(sponsor.username || "").trim();
      if (!username) {
        continue;
      }
      const item = document.createElement("li");
      item.textContent = username;
      list.append(item);
    }
  } catch {
    list.replaceChildren();
    const item = document.createElement("li");
    item.textContent = t("sponsors.error");
    list.append(item);
  }
}

function isReplaySearchPage() {
  return document.body?.dataset?.page === "replay-search";
}

function isReplaySearchResultsPage() {
  return document.body?.dataset?.page === "replay-search-results";
}

function isReplaySearchExperience() {
  return isReplaySearchPage() || isReplaySearchResultsPage();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function parsePositiveInteger(value) {
  const parsed = Number.parseInt(String(value ?? "").trim(), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function normalizeFavorite(value) {
  const match = value?.match && typeof value.match === "object" ? value.match : value;
  const matchId = parsePositiveInteger(value?.matchId || match?.id || match?.matchId);
  if (!matchId) {
    return null;
  }
  return {
    matchId,
    favoritedAt: String(value?.favoritedAt || new Date().toISOString()),
    match: normalizeMatch({ ...match, id: matchId }),
  };
}

function loadFavoriteGames() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(FAVORITES_STORAGE_KEY) || "[]");
    const byId = new Map();
    for (const entry of Array.isArray(parsed) ? parsed : []) {
      const favorite = normalizeFavorite(entry);
      if (favorite) {
        byId.set(favorite.matchId, favorite);
      }
    }
    return Array.from(byId.values()).sort((left, right) =>
      Date.parse(right.favoritedAt || "") - Date.parse(left.favoritedAt || "")
    );
  } catch {
    return [];
  }
}

function saveFavoriteGames() {
  window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(replaySearchState.favorites));
}

function isFavorite(matchId) {
  const id = parsePositiveInteger(matchId);
  return Boolean(id && replaySearchState.favorites.some((entry) => entry.matchId === id));
}

function updateFavoriteCount() {
  const target = document.getElementById("favoriteCount");
  if (target) {
    target.textContent = String(replaySearchState.favorites.length);
  }
}

function searchHistoryDateValue(value) {
  const parsed = Date.parse(String(value || ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

function normalizeSearchHistoryFormValues(values = {}) {
  const normalized = {};
  for (const name of SEARCH_HISTORY_FORM_FIELDS) {
    let value = String(values?.[name] ?? "").trim();
    if (!value && name === "ratingRange") {
      value = DATA_API_DEFAULT_FILTERS.ratingRange;
    } else if (!value && Object.prototype.hasOwnProperty.call(DATA_API_DEFAULT_FILTERS, name)) {
      value = DATA_API_DEFAULT_FILTERS[name];
    }
    normalized[name] = value;
  }
  return normalized;
}

function formValuesFromCriteria(criteria = {}) {
  const players = Array.isArray(criteria?.players) ? criteria.players : [];
  const civs = Array.isArray(criteria?.civs) ? criteria.civs : [];
  const values = {
    ratingRange: criteria?.ratingRange || DATA_API_DEFAULT_FILTERS.ratingRange,
    playerA: players[0]?.input || players[0]?.name || "",
    playerB: players[1]?.input || players[1]?.name || "",
    civA: civs[0] || "",
    civB: civs[1] || "",
    leaderboard: criteria?.leaderboard || "",
    map: criteria?.map || "",
    gameMode: criteria?.gameMode || "",
    lengthRange: criteria?.lengthRange || DATA_API_DEFAULT_FILTERS.lengthRange,
    strategy: criteria?.strategy || "",
    followup: criteria?.followup || "",
  };
  for (const name of SEARCH_HISTORY_ADVANCED_FIELDS) {
    values[name] = String(criteria?.[name] ?? DATA_API_DEFAULT_FILTERS[name] ?? "");
  }
  return normalizeSearchHistoryFormValues(values);
}

function formValuesFromForm(form = document.getElementById("replaySearchForm")) {
  const values = {};
  for (const name of SEARCH_HISTORY_FORM_FIELDS) {
    const field = form?.elements?.[name];
    values[name] = field ? String(field.value || "").trim() : "";
  }
  return normalizeSearchHistoryFormValues(values);
}

function searchParamsFromFormValues(values, page = 1) {
  const normalized = normalizeSearchHistoryFormValues(values);
  const params = new URLSearchParams();
  const playerA = String(normalized.playerA || "").trim();
  const playerB = String(normalized.playerB || "").trim();
  if (playerA) {
    params.set("player", playerA);
    const first = selectedReplayPlayer(playerA);
    const firstProfileId = first?.profileId || replaySearchState.urlProfileIds.playerA;
    if (firstProfileId) params.set("profileId", String(firstProfileId));
  }
  if (playerB) {
    params.set("player2", playerB);
    const second = selectedReplayPlayer(playerB);
    const secondProfileId = second?.profileId || replaySearchState.urlProfileIds.playerB;
    if (secondProfileId) params.set("profileId2", String(secondProfileId));
  }
  const directMap = {
    civA: "civ",
    civB: "civ2",
    map: "map",
    leaderboard: "leaderboard",
    gameMode: "gameMode",
    lengthRange: "lengthRange",
    strategy: "strategy",
    followup: "followup",
  };
  for (const [field, param] of Object.entries(directMap)) {
    const value = String(normalized[field] || "").trim();
    if (value && value.toLowerCase() !== "any") {
      params.set(param, value);
    }
  }
  if (normalized.ratingRange && normalized.ratingRange !== DATA_API_DEFAULT_FILTERS.ratingRange) {
    params.set("ratingRange", normalized.ratingRange);
  }
  for (const field of SEARCH_HISTORY_ADVANCED_FIELDS) {
    const value = String(normalized[field] || "").trim();
    if (value && value !== String(DATA_API_DEFAULT_FILTERS[field] ?? "")) {
      params.set(field, value);
    }
  }
  if (Number(page) > 1) {
    params.set("page", String(Math.max(1, Number(page) || 1)));
  }
  const currentLang = explicitLocalePreference();
  if (currentLang) {
    params.set("lang", currentLang);
  }
  return params;
}

function searchUrlFromFormValues(values, page = 1) {
  const params = searchParamsFromFormValues(values, page);
  const query = queryStringFromParams(params);
  return `/search/${query ? `?${query}` : ""}`;
}

function pushSearchUrl(page = 1) {
  if (!window.history?.pushState) {
    return;
  }
  const url = searchUrlFromFormValues(formValuesFromForm(), page);
  window.history.pushState({ replaySearch: true }, "", url);
}

function updateSearchUrlForPage(page = 1) {
  if (!window.history?.replaceState) {
    return;
  }
  if (isReplaySearchResultsPage()) {
    const url = new URL(window.location.href);
    const safePage = Math.max(1, Number(page) || 1);
    if (safePage > 1) {
      url.searchParams.set("page", String(safePage));
    } else {
      url.searchParams.delete("page");
    }
    window.history.replaceState({ replaySearch: true }, "", `${url.pathname}${url.search}`.replace(/\+/g, "%20"));
    return;
  }
  const url = searchUrlFromFormValues(formValuesFromForm(), page);
  window.history.replaceState({ replaySearch: true }, "", url);
}

function formValuesFromSearchParams(params = new URLSearchParams(window.location.search)) {
  const values = {};
  if (params.has("ratingRange")) values.ratingRange = params.get("ratingRange");
  if (params.has("player")) values.playerA = params.get("player");
  if (params.has("player2")) values.playerB = params.get("player2");
  if (params.has("civ")) values.civA = params.get("civ");
  if (params.has("civ2")) values.civB = params.get("civ2");
  for (const field of ["leaderboard", "map", "gameMode", "lengthRange", "strategy", "followup", ...SEARCH_HISTORY_ADVANCED_FIELDS]) {
    if (params.has(field)) {
      values[field] = params.get(field);
    }
  }
  return normalizeSearchHistoryFormValues(values);
}

function syncReplaySearchFormRatingRange(form = document.getElementById("replaySearchForm")) {
  if (!form) {
    return;
  }
  const playerA = String(form.elements?.playerA?.value || "").trim();
  const playerB = String(form.elements?.playerB?.value || "").trim();
  if (!playerA && !playerB) {
    return;
  }
}

function rememberProfileIdsFromSearchParams(params = new URLSearchParams(window.location.search), values = formValuesFromSearchParams(params)) {
  const profileId = parsePositiveInteger(params.get("profileId"));
  const profileId2 = parsePositiveInteger(params.get("profileId2"));
  replaySearchState.urlProfileIds = {
    playerA: values.playerA && profileId ? profileId : 0,
    playerB: values.playerB && profileId2 ? profileId2 : 0,
  };
}

function currentSearchPageFromUrl() {
  return Math.max(1, Number(new URLSearchParams(window.location.search).get("page")) || 1);
}

function hasReplaySearchQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return [
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
    ...SEARCH_HISTORY_ADVANCED_FIELDS,
  ].some((key) => params.has(key));
}

function searchHistoryFingerprint(values) {
  const normalized = normalizeSearchHistoryFormValues(values);
  return SEARCH_HISTORY_FORM_FIELDS.map((name) => `${name}=${normalized[name]}`).join("\n");
}

function searchHistoryIdFromValues(values) {
  const fingerprint = searchHistoryFingerprint(values);
  let hash = 2166136261;
  for (let index = 0; index < fingerprint.length; index += 1) {
    hash ^= fingerprint.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return `search-${(hash >>> 0).toString(36)}`;
}

function searchHistoryOptionSourceForField(name) {
  const form = document.getElementById("replaySearchForm");
  const field = form?.elements?.[name];
  if (field?.dataset?.optionSource) {
    return field.dataset.optionSource;
  }
  if (name === "civA" || name === "civB") {
    return "civilizations";
  }
  if (name === "ratingRange") {
    return "ratingRanges";
  }
  return name;
}

function searchHistoryFieldValueLabel(name, value) {
  const text = String(value ?? "").trim();
  if (!text) {
    return "";
  }
  if (text.toLowerCase() === "any") {
    return t("replaySearch.any");
  }
  if (name === "ratingRange" && text === REPLAY_RATING_ANY_VALUE) {
    return t("replaySearch.any");
  }
  if (name === "playerA" || name === "playerB") {
    return text;
  }

  const form = document.getElementById("replaySearchForm");
  const field = form?.elements?.[name];
  const option = field?.options
    ? Array.from(field.options).find((entry) => String(entry.value || "") === text)
    : null;
  const optionText = String(option?.textContent || "").trim();
  if (optionText) {
    return optionText;
  }
  if (text === "0" || text === "1") {
    return t(text === "1" ? "option.boolean.yes" : "option.boolean.no");
  }

  const source = searchHistoryOptionSourceForField(name);
  if (source === "civilizations") {
    return localizedOptionLabel("civ", text, humanizeOptionLabel(text));
  }
  if (source && source !== "ratingRanges") {
    return localizedOptionLabel(source, text, humanizeOptionLabel(text, { stripKnownPrefixes: source === "map" }));
  }
  return humanizeOptionLabel(text);
}

function searchHistoryNameFromValues(values) {
  const normalized = normalizeSearchHistoryFormValues(values);
  const parts = [];
  const ratingLabel = searchHistoryFieldValueLabel("ratingRange", normalized.ratingRange);
  if (ratingLabel && normalized.ratingRange !== REPLAY_RATING_ANY_VALUE) {
    parts.push(ratingLabel);
  }
  for (const name of ["playerA", "playerB", "civA", "civB", "leaderboard", "map", "gameMode", "lengthRange", "strategy", "followup"]) {
    const value = normalized[name];
    if (!value || value.toLowerCase() === "any") {
      continue;
    }
    const label = searchHistoryFieldValueLabel(name, value);
    if (label) {
      parts.push(label);
    }
  }
  for (const name of SEARCH_HISTORY_ADVANCED_FIELDS) {
    const value = normalized[name];
    const defaultValue = String(DATA_API_DEFAULT_FILTERS[name] ?? "");
    if (!value || value === defaultValue) {
      continue;
    }
    const label = searchHistoryFieldValueLabel(name, value);
    if (label) {
      parts.push(`${t(SEARCH_HISTORY_ADVANCED_LABELS[name] || name)}: ${label}`);
    }
  }
  return parts.join("|") || t("replaySearch.search");
}

function truncateSearchHistoryName(name) {
  const characters = Array.from(String(name || ""));
  if (characters.length <= SEARCH_HISTORY_NAME_MAX_LENGTH) {
    return characters.join("");
  }
  return `${characters.slice(0, Math.max(0, SEARCH_HISTORY_NAME_MAX_LENGTH - 3)).join("")}...`;
}

function orderedSearchHistory(entries) {
  return (Array.isArray(entries) ? entries : []).slice().sort((left, right) => {
    if (Boolean(left.pinned) !== Boolean(right.pinned)) {
      return left.pinned ? -1 : 1;
    }
    return searchHistoryDateValue(right.searchedAt) - searchHistoryDateValue(left.searchedAt);
  });
}

function pruneSearchHistory(entries, protectedId = "") {
  const next = orderedSearchHistory(entries);
  while (next.length > SEARCH_HISTORY_LIMIT) {
    let removableIndex = -1;
    for (let index = next.length - 1; index >= 0; index -= 1) {
      if (!next[index].pinned && next[index].id !== protectedId) {
        removableIndex = index;
        break;
      }
    }
    if (removableIndex < 0) {
      break;
    }
    next.splice(removableIndex, 1);
  }
  return next;
}

function normalizeSearchHistoryEntry(value) {
  if (!value || typeof value !== "object") {
    return null;
  }
  const formValues = normalizeSearchHistoryFormValues(value.formValues || formValuesFromCriteria(value.criteria));
  const id = String(value.id || searchHistoryIdFromValues(formValues)).trim();
  if (!id) {
    return null;
  }
  return {
    id,
    name: String(value.name || searchHistoryNameFromValues(formValues)).trim(),
    formValues,
    pinned: Boolean(value.pinned),
    searchedAt: searchHistoryDateValue(value.searchedAt) ? String(value.searchedAt) : new Date().toISOString(),
  };
}

function loadSearchHistory() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(SEARCH_HISTORY_STORAGE_KEY) || "[]");
    const byId = new Map();
    for (const value of Array.isArray(parsed) ? parsed : []) {
      const entry = normalizeSearchHistoryEntry(value);
      if (!entry) {
        continue;
      }
      const previous = byId.get(entry.id);
      if (!previous || searchHistoryDateValue(entry.searchedAt) >= searchHistoryDateValue(previous.searchedAt)) {
        byId.set(entry.id, { ...entry, pinned: Boolean(entry.pinned || previous?.pinned) });
      } else if (entry.pinned) {
        previous.pinned = true;
      }
    }
    return pruneSearchHistory(Array.from(byId.values()));
  } catch {
    return [];
  }
}

function saveSearchHistory() {
  const payload = replaySearchState.searchHistory.map((entry) => ({
    id: entry.id,
    name: entry.name,
    formValues: entry.formValues,
    pinned: Boolean(entry.pinned),
    searchedAt: entry.searchedAt,
  }));
  window.localStorage.setItem(SEARCH_HISTORY_STORAGE_KEY, JSON.stringify(payload));
}

function searchHistoryNameForEntry(entry) {
  return searchHistoryNameFromValues(entry?.formValues) || String(entry?.name || "").trim() || t("replaySearch.search");
}

function renderSearchHistory() {
  const container = document.getElementById("searchHistory");
  const list = document.getElementById("searchHistoryList");
  if (!container || !list) {
    return;
  }
  const entries = orderedSearchHistory(replaySearchState.searchHistory);
  container.hidden = entries.length === 0;
  list.setAttribute("aria-label", t("replaySearch.searchHistory"));
  list.innerHTML = entries
    .map((entry) => {
      const fullName = searchHistoryNameForEntry(entry);
      const displayName = truncateSearchHistoryName(fullName);
      const pinLabel = t(entry.pinned ? "replaySearch.unpinSearch" : "replaySearch.pinSearch");
      return `
        <li class="search-history-item ${entry.pinned ? "pinned" : ""}">
          <button class="search-history-link" type="button" data-action="run-search-history" data-history-id="${escapeHtml(
            entry.id
          )}" title="${escapeHtml(fullName)}" aria-label="${escapeHtml(t("replaySearch.runSavedSearch", { name: fullName }))}">
            <span class="search-history-name">${escapeHtml(displayName)}</span>
          </button>
          <button class="search-history-pin ${entry.pinned ? "active" : ""}" type="button" data-action="toggle-search-history-pin" data-history-id="${escapeHtml(
            entry.id
          )}" title="${escapeHtml(pinLabel)}" aria-label="${escapeHtml(pinLabel)}">
            ${searchHistoryPinIconSvg(entry.pinned)}
            <span class="sr-only">${escapeHtml(pinLabel)}</span>
          </button>
        </li>`;
    })
    .join("");
}

function addCurrentSearchToHistory() {
  const form = document.getElementById("replaySearchForm");
  if (!form) {
    return;
  }
  const formValues = formValuesFromForm(form);
  const id = searchHistoryIdFromValues(formValues);
  const previous = replaySearchState.searchHistory.find((entry) => entry.id === id);
  const entry = {
    id,
    name: searchHistoryNameFromValues(formValues),
    formValues,
    pinned: Boolean(previous?.pinned),
    searchedAt: new Date().toISOString(),
  };
  replaySearchState.searchHistory = pruneSearchHistory(
    [entry, ...replaySearchState.searchHistory.filter((item) => item.id !== id)],
    id
  );
  saveSearchHistory();
  renderSearchHistory();
}

function toggleSearchHistoryPin(historyId) {
  const id = String(historyId || "");
  const index = replaySearchState.searchHistory.findIndex((entry) => entry.id === id);
  if (index < 0) {
    return;
  }
  const next = replaySearchState.searchHistory.slice();
  next[index] = { ...next[index], pinned: !next[index].pinned };
  replaySearchState.searchHistory = pruneSearchHistory(next, next[index].pinned ? id : "");
  saveSearchHistory();
  renderSearchHistory();
}

function setSearchHistoryFormValue(form, name, value) {
  const field = form?.elements?.[name];
  if (!field) {
    return;
  }
  const text = String(value ?? "").trim();
  if (String(field.tagName || "").toUpperCase() === "SELECT") {
    if (text && !Array.from(field.options).some((option) => option.value === text)) {
      const option = document.createElement("option");
      option.value = text;
      option.textContent = searchHistoryFieldValueLabel(name, text) || text;
      field.append(option);
    }
    field.value = text;
    return;
  }
  field.value = text;
}

function hasAdvancedSearchHistoryValues(values) {
  const normalized = normalizeSearchHistoryFormValues(values);
  return SEARCH_HISTORY_ADVANCED_FIELDS.some((name) => {
    const value = normalized[name];
    return value && value !== String(DATA_API_DEFAULT_FILTERS[name] ?? "");
  });
}

function applySearchHistoryFormValues(values) {
  const form = document.getElementById("replaySearchForm");
  if (!form) {
    return false;
  }
  const normalized = normalizeSearchHistoryFormValues(values);
  for (const name of SEARCH_HISTORY_FORM_FIELDS) {
    setSearchHistoryFormValue(form, name, normalized[name]);
  }
  syncReplaySearchFormRatingRange(form);
  setMoreFiltersVisible(hasAdvancedSearchHistoryValues(normalized));
  return true;
}

function runSearchHistoryEntry(historyId) {
  const entry = replaySearchState.searchHistory.find((item) => item.id === String(historyId || ""));
  if (!entry) {
    return;
  }
  if (!applySearchHistoryFormValues(entry.formValues)) {
    window.location.assign(searchUrlFromFormValues(entry.formValues));
    return;
  }
  replaySearchState.view = "search";
  searchReplays(1);
}

function normalizeMember(member) {
  const profileId = parsePositiveInteger(member?.profileId || member?.id);
  return {
    profileId,
    name: String(member?.name || member?.alias || (profileId ? `Profile ${profileId}` : t("common.unknown"))).trim(),
    civ: String(member?.civ || member?.civilization || t("common.unknown")).trim(),
    teamId: Number.isFinite(Number(member?.teamId)) ? Number(member.teamId) : null,
    outcome: String(member?.outcome || member?.result || "").trim(),
    replayAvailable: Boolean(member?.replayAvailable || member?.replay),
    recordGame: Number(member?.recordGame) === 1 ? 1 : 0,
  };
}

function normalizeMatch(match) {
  const id = parsePositiveInteger(match?.id || match?.matchId);
  const members = Array.isArray(match?.members) ? match.members.map(normalizeMember) : [];
  const replayMember =
    members.find((member) => Number(member.recordGame) === 1 && parsePositiveInteger(member.profileId)) ||
    members.find((member) => parsePositiveInteger(member.profileId));
  const selectedProfileId = parsePositiveInteger(match?.selectedProfileId) || parsePositiveInteger(replayMember?.profileId);
  return {
    id,
    matchId: id,
    selectedProfileId,
    startTime: parsePositiveInteger(match?.startTime),
    completionTime: Number(match?.completionTime) || 0,
    map: String(match?.map || t("common.unknown")).trim(),
    description: String(match?.description || "").trim(),
    result: String(match?.result || "").trim(),
    playersA: Array.isArray(match?.playersA) ? match.playersA.map(String) : [],
    playersB: Array.isArray(match?.playersB) ? match.playersB.map(String) : [],
    civsA: Array.isArray(match?.civsA) ? match.civsA.map(String) : [],
    civsB: Array.isArray(match?.civsB) ? match.civsB.map(String) : [],
    playerAStrategy: String(match?.playerAStrategy || "").trim(),
    playerBStrategy: String(match?.playerBStrategy || "").trim(),
    playerAFollowup: String(match?.playerAFollowup || "").trim(),
    playerBFollowup: String(match?.playerBFollowup || "").trim(),
    hosted: Boolean(match?.hosted),
    official: Boolean(match?.official),
    members,
  };
}

function formatDateTime(seconds) {
  const value = parsePositiveInteger(seconds);
  if (!value) {
    return t("common.unknown");
  }
  try {
    return new Intl.DateTimeFormat(document.documentElement.lang || undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(value * 1000));
  } catch {
    return new Date(value * 1000).toISOString();
  }
}

function formatDuration(seconds) {
  const total = Number(seconds) || 0;
  if (total <= 0) {
    return t("common.unknown");
  }
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const remainingSeconds = Math.floor(total % 60);
  const parts = hours ? [hours, minutes, remainingSeconds] : [minutes, remainingSeconds];
  return parts.map((part) => String(part).padStart(2, "0")).join(":");
}

function teamMembersFromMatch(match) {
  const members = Array.isArray(match.members) ? match.members : [];
  if (!members.length) {
    return { teamA: [], teamB: [] };
  }
  const teamIds = Array.from(new Set(members.map((member) => member.teamId).filter((teamId) => teamId != null)));
  const selected = members.find((member) => member.profileId === match.selectedProfileId) || members[0] || null;
  const selectedTeam = selected?.teamId ?? teamIds[0] ?? null;
  if (selectedTeam == null) {
    return {
      teamA: members.slice(0, Math.ceil(members.length / 2)),
      teamB: members.slice(Math.ceil(members.length / 2)),
    };
  }
  return {
    teamA: members.filter((member) => member.teamId === selectedTeam),
    teamB: members.filter((member) => member.teamId !== selectedTeam),
  };
}

function splitTeamsFromMembers(match) {
  const { teamA, teamB } = teamMembersFromMatch(match);
  if (!teamA.length && !teamB.length && (match.playersA.length || match.playersB.length)) {
    return {
      playersA: match.playersA,
      playersB: match.playersB,
      civsA: match.civsA,
      civsB: match.civsB,
      membersA: [],
      membersB: [],
    };
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

function isReplayStrategyApplicable(match, teams = splitTeamsFromMembers(normalizeMatch(match))) {
  const normalized = normalizeMatch(match);
  const memberCount = normalized.members.length || normalized.playersA.length + normalized.playersB.length;
  return memberCount === 2 && teams.playersA.length <= 1 && teams.playersB.length <= 1;
}

function replayStrategyNameKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

function replayLabelGeneratedKey(prefix, value) {
  const words = String(value || "")
    .trim()
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

function localizedReplayMessage(key) {
  return key ? activeMessages[key] || DEFAULT_MESSAGES[key] || "" : "";
}

function localizedReplayStrategyName(value) {
  const text = String(value || "").trim();
  if (!text) {
    return "";
  }
  const key = REPLAY_STRATEGY_LABEL_KEYS.get(replayStrategyNameKey(text));
  return key ? t(key) : text;
}

function localizedReplayFollowupName(value) {
  const text = String(value || "").trim();
  if (!text) {
    return "";
  }
  const parts = text.split(/\s*\+\s*/).filter(Boolean);
  if (parts.length > 1) {
    return parts.map((part) => localizedReplayFollowupName(part)).join(" + ");
  }
  const key =
    REPLAY_FOLLOWUP_LABEL_KEYS.get(replayStrategyNameKey(text)) ||
    replayLabelGeneratedKey("replaySearch.followupName", text);
  const localized = localizedReplayMessage(key);
  return localized || text;
}

function replayStrategySortLabel(match, key) {
  const normalized = normalizeMatch(match);
  if (normalized[key]) {
    return localizedReplayStrategyName(normalized[key]);
  }
  return isReplayStrategyApplicable(normalized) ? t("replaySearch.clickToDetect") : t("replaySearch.notApplicable");
}

function replayFollowupSortLabel(match, key) {
  const normalized = normalizeMatch(match);
  if (normalized[key]) {
    return localizedReplayFollowupName(normalized[key]);
  }
  return isReplayStrategyApplicable(normalized) ? t("replaySearch.clickToDetect") : t("replaySearch.notApplicable");
}

function renderReplayStrategyFieldCell(match, key, teams, options = {}) {
  const normalized = normalizeMatch(match);
  if (!isReplayStrategyApplicable(normalized, teams)) {
    return `<span class="replay-strategy-status">${escapeHtml(t("replaySearch.notApplicable"))}</span>`;
  }
  const value = normalized[key];
  if (value) {
    return escapeHtml(options.followup ? localizedReplayFollowupName(value) : options.localized === false ? value : localizedReplayStrategyName(value));
  }
  const matchId = parsePositiveInteger(normalized.id || normalized.matchId);
  if (matchId && replaySearchState.pendingStrategyMatchIds.has(matchId)) {
    return `<span class="replay-strategy-status detecting"><span class="spinner" aria-hidden="true"></span> ${escapeHtml(t("replaySearch.detecting"))}</span>`;
  }
  return `<button class="replay-text-action replay-strategy-detect" type="button" data-action="detect-replay-strategy" data-match-id="${escapeHtml(matchId)}">${escapeHtml(t("replaySearch.clickToDetect"))}</button>`;
}

function renderReplayStrategyCell(match, key, teams) {
  return renderReplayStrategyFieldCell(match, key, teams);
}

function renderReplayFollowupCell(match, key, teams) {
  return renderReplayStrategyFieldCell(match, key, teams, { followup: true });
}

function listText(values) {
  const clean = (Array.isArray(values) ? values : []).map((value) => String(value || "").trim()).filter(Boolean);
  return clean.length ? clean.join(", ") : t("common.unknown");
}

function replaySortCollator() {
  try {
    return new Intl.Collator([document.documentElement.lang || DEFAULT_LOCALE, "en"], {
      usage: "sort",
      sensitivity: "base",
      numeric: true,
      ignorePunctuation: true,
    });
  } catch {
    return new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });
  }
}

function currentReplaySort() {
  const sort = replaySearchState.sort || {};
  const key = REPLAY_TABLE_COLUMNS.some((column) => column.key === sort.key) ? sort.key : "dateTime";
  return {
    key,
    direction: sort.direction === "asc" ? "asc" : "desc",
  };
}

function toggleReplaySort(key) {
  if (!REPLAY_TABLE_COLUMNS.some((column) => column.key === key)) {
    return false;
  }
  const current = currentReplaySort();
  replaySearchState.sort =
    current.key === key
      ? { key, direction: current.direction === "asc" ? "desc" : "asc" }
      : { key, direction: "asc" };
  return true;
}

function replaySortValue(match, key) {
  const normalized = normalizeMatch(match);
  const teams = splitTeamsFromMembers(normalized);
  switch (key) {
    case "dateTime":
      return Number(normalized.startTime) || null;
    case "length":
      return Number(normalized.completionTime) || null;
    case "map":
      return localizedOptionLabel("map", normalized.map) || "";
    case "playersA":
      return listText(teams.playersA);
    case "playersB":
      return listText(teams.playersB);
    case "civsA":
      return localizedListText(teams.civsA, "civ");
    case "civsB":
      return localizedListText(teams.civsB, "civ");
    case "playerAStrategy":
    case "playerBStrategy":
      return replayStrategySortLabel(normalized, key);
    case "playerAFollowup":
    case "playerBFollowup":
      return replayFollowupSortLabel(normalized, key);
    default:
      return "";
  }
}

function compareMissingValues(leftValue, rightValue) {
  const leftMissing = leftValue == null || leftValue === "";
  const rightMissing = rightValue == null || rightValue === "";
  if (leftMissing && rightMissing) return 0;
  if (leftMissing) return 1;
  if (rightMissing) return -1;
  return 0;
}

function sortedReplayMatches(matches) {
  if (!Array.isArray(matches) || matches.length < 2) {
    return matches;
  }
  const sort = currentReplaySort();
  const collator = replaySortCollator();
  return matches
    .map((match, index) => ({ match, index }))
    .sort((left, right) => {
      const leftValue = replaySortValue(left.match, sort.key);
      const rightValue = replaySortValue(right.match, sort.key);
      const missingComparison = compareMissingValues(leftValue, rightValue);
      if (missingComparison) {
        return missingComparison;
      }
      const comparison =
        typeof leftValue === "number" && typeof rightValue === "number"
          ? leftValue - rightValue
          : collator.compare(String(leftValue), String(rightValue));
      return comparison ? (sort.direction === "desc" ? -comparison : comparison) : left.index - right.index;
    })
    .map(({ match }) => match);
}

function replayProfileIdForMatch(match) {
  const normalized = normalizeMatch(match);
  const replayMember =
    normalized.members.find((member) => Number(member.recordGame) === 1 && parsePositiveInteger(member.profileId)) ||
    normalized.members.find((member) => parsePositiveInteger(member.profileId));
  return parsePositiveInteger(normalized.selectedProfileId) || parsePositiveInteger(replayMember?.profileId);
}

function officialPlayUrl(matchId, profileId) {
  return `aoe2gv://official/?matchId=${encodeURIComponent(String(matchId))}&profileId=${encodeURIComponent(String(profileId))}`;
}

function officialShareUrl(matchId, profileId) {
  const numericProfileId = parsePositiveInteger(profileId);
  return `https://www.aoe2viewer.com/shared_game?matchId=${encodeURIComponent(String(matchId))}${numericProfileId ? `&profileId=${encodeURIComponent(String(numericProfileId))}` : ""}`;
}

function playUrlForMatch(match) {
  const id = parsePositiveInteger(match?.id || match?.matchId);
  const profileId = replayProfileIdForMatch(match);
  return id && profileId ? officialPlayUrl(id, profileId) : "";
}

function downloadUrlForMatch(match) {
  const id = parsePositiveInteger(match?.id || match?.matchId);
  const profileId = replayProfileIdForMatch(match);
  return id && profileId ? officialShareUrl(id, profileId) : "";
}

function canUseReplayActions(match) {
  return Boolean(parsePositiveInteger(match?.id || match?.matchId) && replayProfileIdForMatch(match));
}

function replayActionIconSvg() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 6.5v11l9-5.5Z" fill="currentColor" stroke="none" />
    </svg>`;
}

function favoriteActionIconSvg(active = false) {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3.6 2.6 5.2 5.8.8-4.2 4.1 1 5.7-5.2-2.7-5.2 2.7 1-5.7-4.2-4.1 5.8-.8Z" fill="${
        active ? "currentColor" : "none"
      }" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" />
    </svg>`;
}

function searchHistoryPinIconSvg(active = false) {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="${active ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14.5 4.5 19.5 9.5" />
      <path d="m9 10.5 4.5-4.5 4.5 4.5-4.5 4.5" />
      <path d="m10.5 13.5-5 5" />
      <path d="M7.5 16.5 4.5 19.5" />
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

function isWinningMember(member) {
  const normalized = String(member?.outcome || "").trim().toLowerCase();
  return normalized === "win" || normalized === "winner" || normalized === "won";
}

function matchSideWon(match, side) {
  const teams = splitTeamsFromMembers(normalizeMatch(match));
  const members = side === "A" ? teams.membersA : teams.membersB;
  return Array.isArray(members) && members.some(isWinningMember);
}

function replayHeaderCell(column) {
  const sort = currentReplaySort();
  const direction = sort.key === column.key ? sort.direction : "";
  const ariaSort = direction === "asc" ? "ascending" : direction === "desc" ? "descending" : "none";
  const indicator = direction === "asc" ? "↑" : direction === "desc" ? "↓" : "↕";
  return `
    <th scope="col" aria-sort="${ariaSort}">
      <button class="replay-sort-button ${direction ? "active" : ""}" type="button" data-action="sort-replay-results" data-sort-key="${escapeHtml(
        column.key
      )}">
        <span>${escapeHtml(t(column.labelKey))}</span>
        <span class="replay-sort-indicator" aria-hidden="true">${indicator}</span>
      </button>
    </th>`;
}

function renderMapCell(match) {
  const map = String(match?.map || "").trim();
  if (!map || map === t("common.unknown")) {
    return escapeHtml(map || t("common.unknown"));
  }
  const label = localizedOptionLabel("map", map);
  const params = new URLSearchParams({ map });
  const lang = explicitLocalePreference();
  if (lang) {
    params.set("lang", lang);
  }
  return `<a class="replay-text-action replay-map-link" href="/search/?${queryStringFromParams(params)}" data-action="filter-map" data-map="${escapeHtml(
    map
  )}" aria-label="${escapeHtml(t("replaySearch.searchByMap", { map: label }))}">
    ${escapeHtml(label)}
  </a>`;
}

function renderPlayerButton(member) {
  const normalized = normalizeMember(member);
  const name = normalized.name || t("common.unknown");
  const profileId = parsePositiveInteger(normalized.profileId);
  const params = new URLSearchParams({ player: name });
  if (profileId) {
    params.set("profileId", String(profileId));
  }
  const lang = explicitLocalePreference();
  if (lang) {
    params.set("lang", lang);
  }
  const href = `/search/?${queryStringFromParams(params)}`;
  return `<a class="replay-text-action replay-player-link" href="${escapeHtml(href)}" data-action="filter-player" data-player-name="${escapeHtml(
    name
  )}" ${profileId ? `data-profile-id="${escapeHtml(profileId)}"` : ""} aria-label="${escapeHtml(t("replaySearch.searchByPlayer", { player: name }))}">
    ${escapeHtml(name)}
  </a>`;
}

function renderPlayerList(members, fallbackValues) {
  const cleanMembers = (Array.isArray(members) ? members : []).filter((member) => String(member?.name || "").trim());
  if (cleanMembers.length) {
    return cleanMembers.map(renderPlayerButton).join('<span class="replay-player-separator" aria-hidden="true">, </span>');
  }
  return escapeHtml(listText(fallbackValues));
}

function renderSideCell(members, fallbackValues, won) {
  return `
    <div class="replay-side-cell">
      ${won ? trophyIconSvg() : ""}
      <span class="replay-player-list">${renderPlayerList(members, fallbackValues)}</span>
    </div>`;
}

function renderMatchRow(match) {
  const normalized = normalizeMatch(match);
  const teams = splitTeamsFromMembers(normalized);
  const replayActionsAvailable = canUseReplayActions(normalized);
  const favorite = isFavorite(normalized.id);
  const favoriteLabel = t(favorite ? "replaySearch.removeFavorite" : "replaySearch.addFavorite");
  const playLabel = t("replaySearch.play");
  const downloadLabel = t("replaySearch.share");
  const playAction = replayActionsAvailable
    ? `<a class="replay-icon-action primary" href="${escapeHtml(playUrlForMatch(normalized))}" aria-label="${escapeHtml(
        playLabel
      )}" title="${escapeHtml(playLabel)}">
          ${replayActionIconSvg()}
          <span class="sr-only">${escapeHtml(playLabel)}</span>
        </a>`
    : `<span class="replay-icon-action primary disabled" role="link" aria-disabled="true" aria-label="${escapeHtml(
        playLabel
      )}" title="${escapeHtml(playLabel)}">
          ${replayActionIconSvg()}
          <span class="sr-only">${escapeHtml(playLabel)}</span>
        </span>`;
  const favoriteAction = `<button class="replay-icon-action favorite-toggle ${favorite ? "active" : ""}" type="button" data-action="toggle-favorite" data-match-id="${escapeHtml(
    normalized.id
  )}" aria-label="${escapeHtml(favoriteLabel)}" title="${escapeHtml(favoriteLabel)}">
        ${favoriteActionIconSvg(favorite)}
        <span class="sr-only">${escapeHtml(favoriteLabel)}</span>
      </button>`;
  const downloadAction = replayActionsAvailable
    ? `<a class="replay-icon-action" href="${escapeHtml(downloadUrlForMatch(normalized))}" aria-label="${escapeHtml(
        downloadLabel
      )}" title="${escapeHtml(downloadLabel)}">
          ${downloadActionIconSvg()}
          <span class="sr-only">${escapeHtml(downloadLabel)}</span>
        </a>`
    : `<span class="replay-icon-action disabled" role="link" aria-disabled="true" aria-label="${escapeHtml(
        downloadLabel
      )}" title="${escapeHtml(downloadLabel)}">
          ${downloadActionIconSvg()}
          <span class="sr-only">${escapeHtml(downloadLabel)}</span>
        </span>`;
  return `
    <tr data-match-id="${escapeHtml(normalized.id)}">
      <td class="replay-actions-cell">
        <div class="replay-row-actions">
          ${playAction}
          ${favoriteAction}
          ${downloadAction}
        </div>
      </td>
      <td>${escapeHtml(formatDateTime(normalized.startTime))}</td>
      <td>${renderMapCell(normalized)}</td>
      <td class="replay-length-cell">${escapeHtml(formatDuration(normalized.completionTime))}</td>
      <td>${renderSideCell(teams.membersA, teams.playersA, matchSideWon(normalized, "A"))}</td>
      <td>${escapeHtml(localizedListText(teams.civsA, "civ"))}</td>
      <td>${renderReplayStrategyCell(normalized, "playerAStrategy", teams)}</td>
      <td>${renderReplayFollowupCell(normalized, "playerAFollowup", teams)}</td>
      <td>${renderSideCell(teams.membersB, teams.playersB, matchSideWon(normalized, "B"))}</td>
      <td>${escapeHtml(localizedListText(teams.civsB, "civ"))}</td>
      <td>${renderReplayStrategyCell(normalized, "playerBStrategy", teams)}</td>
      <td>${renderReplayFollowupCell(normalized, "playerBFollowup", teams)}</td>
    </tr>
  `;
}

function pagedMatches(matches, page = replaySearchState.page) {
  const visiblePage = Math.max(1, Number(page) || 1);
  const start = (visiblePage - 1) * REPLAY_PAGE_SIZE;
  return (Array.isArray(matches) ? matches : []).slice(start, start + REPLAY_PAGE_SIZE);
}

function renderMatchTable(matches, options = {}) {
  const visibleMatches = options.paged === false ? matches : pagedMatches(matches);
  return `
    <div class="replay-results-table-wrap">
      <table class="replay-results-table">
        <thead>
          <tr>
            <th scope="col" class="replay-actions-head">${escapeHtml(t("replaySearch.actions"))}</th>
            ${REPLAY_TABLE_COLUMNS.map(replayHeaderCell).join("")}
          </tr>
        </thead>
        <tbody>
          ${visibleMatches.map(renderMatchRow).join("")}
        </tbody>
      </table>
    </div>`;
}

function renderPagination(page, pageCount) {
  const container = document.getElementById("replayPagination");
  if (!container) {
    return;
  }
  if (pageCount <= 1) {
    container.hidden = true;
    container.innerHTML = "";
    return;
  }
  container.hidden = false;
  container.innerHTML = `
    <button class="button secondary compact" type="button" data-action="search-page" data-page="${page - 1}" ${page <= 1 ? "disabled" : ""}>
      ${escapeHtml(t("replaySearch.previous"))}
    </button>
    <span>${escapeHtml(t("replaySearch.pageOf", { page, pages: pageCount }))}</span>
    <button class="button secondary compact" type="button" data-action="search-page" data-page="${page + 1}" ${page >= pageCount ? "disabled" : ""}>
      ${escapeHtml(t("replaySearch.next"))}
    </button>
  `;
}

function hydrateSeoReplayResults() {
  if (!isReplaySearchResultsPage()) {
    return;
  }
  const payloadNode = document.getElementById("seoReplayResultsData");
  if (!payloadNode) {
    return;
  }
  try {
    const payload = JSON.parse(payloadNode.textContent || "{}");
    const matches = Array.isArray(payload.matches) ? payload.matches.map(normalizeMatch).filter((match) => match.id) : [];
    replaySearchState.matches = matches;
    replaySearchState.total = Number(payload.total) || matches.length;
    replaySearchState.page = Math.max(1, Number(payload.page) || currentSearchPageFromUrl());
    replaySearchState.pageCount = Math.max(1, Number(payload.pageCount) || Math.ceil(matches.length / REPLAY_PAGE_SIZE));
    replaySearchState.lastSearchHadResults = true;
  } catch {
    replaySearchState.matches = [];
  }
}

function setResultsHeading({ title, meta, eyebrow = "replaySearch.resultsEyebrow" }) {
  const eyebrowNode = document.getElementById("replayResultsEyebrow");
  const titleNode = document.getElementById("replayResultsTitle");
  const metaNode = document.getElementById("replayResultsMeta");
  if (eyebrowNode) eyebrowNode.textContent = t(eyebrow);
  if (titleNode) titleNode.textContent = title;
  if (metaNode) metaNode.textContent = meta;
}

function renderReplayState() {
  if (!isReplaySearchExperience()) {
    return;
  }
  updateFavoriteCount();
  renderSearchHistory();
  const results = document.getElementById("replayResults");
  if (!results) {
    return;
  }
  if (replaySearchState.view === "favorites") {
    const favoriteMatches = replaySearchState.favorites.map((entry) => entry.match);
    setResultsHeading({
      title: t("replaySearch.favoriteTitle"),
      meta: t("replaySearch.favoriteMeta", { total: replaySearchState.favorites.length }),
    });
    renderPagination(1, 1);
    results.className = favoriteMatches.length ? "replay-results" : "replay-results empty-state";
    results.innerHTML = favoriteMatches.length
      ? renderMatchTable(sortedReplayMatches(favoriteMatches), { paged: false })
      : `<p>${escapeHtml(t("replaySearch.favoriteEmpty"))}</p>`;
    return;
  }

  if (replaySearchState.view === "highlights") {
    const sortedMatches = sortedReplayMatches(replaySearchState.matches);
    replaySearchState.sortedMatches = sortedMatches;
    const totalMatches = sortedMatches.length;
    const pageCount = Math.max(1, Math.ceil(totalMatches / REPLAY_PAGE_SIZE));
    replaySearchState.page = Math.min(Math.max(1, Number(replaySearchState.page) || 1), pageCount);
    setResultsHeading({
      title: t("replaySearch.recentHighlights"),
      meta: replaySearchState.loading
        ? t("replaySearch.searching")
        : replaySearchState.errorMessage
          ? replaySearchState.errorMessage
          : t("replaySearch.resultsMeta", {
              total: totalMatches,
              page: replaySearchState.page,
              pages: pageCount,
            }),
    });
    renderPagination(replaySearchState.page, pageCount);
    results.className = totalMatches ? "replay-results" : "replay-results empty-state";
    results.innerHTML = replaySearchState.loading
      ? `<p><span class="spinner" aria-hidden="true"></span> ${escapeHtml(t("replaySearch.searching"))}</p>`
      : totalMatches
        ? renderMatchTable(sortedMatches)
        : `<p>${escapeHtml(replaySearchState.errorMessage || t("replaySearch.noResults"))}</p>`;
    return;
  }

  const sortedMatches = sortedReplayMatches(replaySearchState.matches);
  replaySearchState.sortedMatches = sortedMatches;
  const totalMatches = sortedMatches.length;
  const pageCount = Math.max(1, Math.ceil(totalMatches / REPLAY_PAGE_SIZE));
  replaySearchState.page = Math.min(Math.max(1, Number(replaySearchState.page) || 1), pageCount);
  if (!replaySearchState.lastSearchHadResults && !replaySearchState.matches.length) {
    setResultsHeading({
      title: t("replaySearch.readyTitle"),
      meta: t("replaySearch.readyMeta"),
    });
    renderPagination(1, 1);
    results.className = "replay-results empty-state";
    results.innerHTML = `<p>${escapeHtml(t("replaySearch.emptyPrompt"))}</p>`;
    return;
  }

  if (replaySearchState.errorMessage) {
    setResultsHeading({
      title: t("replaySearch.resultsTitle"),
      meta: replaySearchState.errorMessage,
    });
    renderPagination(1, 1);
    results.className = "replay-results empty-state";
    results.innerHTML = `<p>${escapeHtml(replaySearchState.errorMessage)}</p>`;
    return;
  }

  setResultsHeading({
    title: t("replaySearch.resultsTitle"),
    meta: t("replaySearch.resultsMeta", {
      total: totalMatches,
      page: replaySearchState.page,
      pages: pageCount,
    }),
  });
  renderPagination(replaySearchState.page, pageCount);
  results.className = replaySearchState.matches.length ? "replay-results" : "replay-results empty-state";
  results.innerHTML = replaySearchState.matches.length
    ? renderMatchTable(sortedMatches)
    : `<p>${escapeHtml(t("replaySearch.noResults"))}</p>`;
}

function selectedReplayPlayer(inputValue) {
  const text = String(inputValue || "").trim();
  if (!text) {
    return null;
  }
  const options = Array.isArray(replaySearchState.options?.players) ? replaySearchState.options.players : [];
  const byText = options.find((player) => {
    const label = optionLabelForPlayer(player);
    return [label, player?.name, player?.alias]
      .map((value) => String(value || "").trim().toLowerCase())
      .filter(Boolean)
      .includes(text.toLowerCase());
  });
  const profileId = parsePositiveInteger(byText?.profileId || byText?.id);
  return profileId
    ? { input: byText.name || byText.alias || text, profileId }
    : { input: text };
}

function setSelectToValue(select, value, label = value) {
  if (!select || !value) {
    return;
  }
  const textValue = String(value);
  if (!Array.from(select.options).some((option) => option.value === textValue)) {
    const option = document.createElement("option");
    option.value = textValue;
    option.textContent = label || textValue;
    select.append(option);
  }
  select.value = textValue;
}

function resetReplaySearchFormForResultFilter() {
  const form = document.getElementById("replaySearchForm");
  if (!form) {
    return null;
  }
  applySearchHistoryFormValues({});
  return form;
}

function searchByPlayerFromResult(target) {
  const name = String(target?.getAttribute("data-player-name") || "").trim();
  const profileId = parsePositiveInteger(target?.getAttribute("data-profile-id"));
  if (!name) {
    return;
  }
  if (isReplaySearchPage()) {
    const href = target?.getAttribute("href");
    if (href) {
      window.location.assign(href);
    }
    return;
  }
  const form = resetReplaySearchFormForResultFilter();
  if (!form) {
    const href = target?.getAttribute("href");
    if (href) {
      window.location.href = href;
    }
    return;
  }
  form.elements.playerA.value = name;
  if (profileId) {
    replaySearchState.options = replaySearchState.options || { players: [] };
    const players = Array.isArray(replaySearchState.options.players) ? replaySearchState.options.players : [];
    if (!players.some((player) => parsePositiveInteger(player?.profileId || player?.id) === profileId)) {
      replaySearchState.options.players = [{ name, profileId }, ...players].slice(0, 120);
      populatePlayerDatalist(replaySearchState.options.players);
    }
  }
  replaySearchState.view = "search";
  replaySearchState.urlProfileIds = { playerA: profileId, playerB: 0 };
  searchReplays(1);
}

function searchByMapFromResult(target) {
  const map = String(target?.getAttribute("data-map") || "").trim();
  if (!map) {
    return;
  }
  if (isReplaySearchPage()) {
    const href = target?.getAttribute("href");
    if (href) {
      window.location.assign(href);
    }
    return;
  }
  const form = resetReplaySearchFormForResultFilter();
  if (!form) {
    const href = target?.getAttribute("href");
    if (href) {
      window.location.href = href;
    }
    return;
  }
  const mapSelect = form.elements.map;
  setSelectToValue(mapSelect, map, localizedOptionLabel("map", map));
  replaySearchState.view = "search";
  searchReplays(1);
}

function playerTooltipNode() {
  let tooltip = document.getElementById("playerRankTooltip");
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.id = "playerRankTooltip";
    tooltip.className = "player-rank-tooltip";
    tooltip.setAttribute("role", "tooltip");
    tooltip.hidden = true;
    document.body.append(tooltip);
  }
  return tooltip;
}

function placePlayerTooltip(target) {
  const tooltip = playerTooltipNode();
  const rect = target.getBoundingClientRect();
  tooltip.style.left = `${Math.round(rect.left + rect.width / 2)}px`;
  tooltip.style.top = `${Math.round(rect.top + window.scrollY - 10)}px`;
}

function showPlayerTooltip(target, text, loading = false) {
  const tooltip = playerTooltipNode();
  tooltip.textContent = text;
  tooltip.classList.toggle("loading", loading);
  tooltip.hidden = false;
  target.setAttribute("aria-describedby", tooltip.id);
  placePlayerTooltip(target);
}

function hidePlayerTooltip(target = activePlayerTooltipTarget) {
  if (target) {
    target.removeAttribute("aria-describedby");
  }
  activePlayerTooltipTarget = null;
  activePlayerTooltipRequest += 1;
  const tooltip = document.getElementById("playerRankTooltip");
  if (tooltip) {
    tooltip.hidden = true;
    tooltip.textContent = "";
    tooltip.classList.remove("loading");
  }
}

async function fetchPlayerRankSummary(profileId) {
  const id = parsePositiveInteger(profileId);
  if (!id) {
    return "";
  }
  if (playerRankTooltipCache.has(id)) {
    return playerRankTooltipCache.get(id);
  }
  const response = await fetch(`/api/player-rank?profileId=${encodeURIComponent(String(id))}`, {
    headers: { Accept: "application/json" },
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload?.status !== "OK") {
    throw new Error(payload?.errorMessage || `Player rank returned ${response.status}`);
  }
  const summary = String(payload?.data?.summary || "").trim();
  if (!summary) {
    throw new Error("Player rank unavailable");
  }
  playerRankTooltipCache.set(id, summary);
  return summary;
}

async function loadPlayerRankTooltip(target) {
  const profileId = parsePositiveInteger(target?.getAttribute("data-profile-id"));
  if (!target || !profileId) {
    return;
  }
  activePlayerTooltipTarget = target;
  const requestId = activePlayerTooltipRequest + 1;
  activePlayerTooltipRequest = requestId;
  const cached = playerRankTooltipCache.get(profileId);
  showPlayerTooltip(target, cached || t("replaySearch.playerRankLoading"), !cached);
  if (cached) {
    return;
  }
  try {
    const summary = await fetchPlayerRankSummary(profileId);
    if (activePlayerTooltipTarget === target && activePlayerTooltipRequest === requestId) {
      showPlayerTooltip(target, summary);
    }
  } catch {
    if (activePlayerTooltipTarget === target && activePlayerTooltipRequest === requestId) {
      showPlayerTooltip(target, t("replaySearch.playerRankUnavailable"));
    }
  }
}

function selectValue(formData, name, fallback = "") {
  const value = String(formData.get(name) || "").trim();
  return value || fallback;
}

function selectAnyValue(formData, name) {
  const value = selectValue(formData, name);
  return value && value.toLowerCase() !== "any" ? value : "";
}

function currentCriteriaFromForm() {
  const form = document.getElementById("replaySearchForm");
  const data = new FormData(form);
  const civs = [data.get("civA"), data.get("civB")]
    .map((value) => String(value || "").trim().toLowerCase())
    .filter(Boolean);
  const players = [selectedReplayPlayer(data.get("playerA")), selectedReplayPlayer(data.get("playerB"))].filter(Boolean);
  return {
    ratingRange: REPLAY_RATING_RANGES.includes(selectValue(data, "ratingRange"))
      ? selectValue(data, "ratingRange")
      : DATA_API_DEFAULT_FILTERS.ratingRange,
    players,
    civs,
    leaderboard: selectAnyValue(data, "leaderboard"),
    map: selectAnyValue(data, "map"),
    gameMode: selectAnyValue(data, "gameMode"),
    lengthRange: selectValue(data, "lengthRange", DATA_API_DEFAULT_FILTERS.lengthRange),
    strategy: selectAnyValue(data, "strategy"),
    followup: selectAnyValue(data, "followup"),
    aiPlayer: selectValue(data, "aiPlayer", DATA_API_DEFAULT_FILTERS.aiPlayer),
    difficulty: selectValue(data, "difficulty", DATA_API_DEFAULT_FILTERS.difficulty),
    startingAge: selectValue(data, "startingAge", DATA_API_DEFAULT_FILTERS.startingAge),
    fullTechTree: selectValue(data, "fullTechTree", DATA_API_DEFAULT_FILTERS.fullTechTree),
    allowCheats: selectValue(data, "allowCheats", DATA_API_DEFAULT_FILTERS.allowCheats),
    endingAge: selectValue(data, "endingAge", DATA_API_DEFAULT_FILTERS.endingAge),
    lockTeams: selectValue(data, "lockTeams", DATA_API_DEFAULT_FILTERS.lockTeams),
    population: selectValue(data, "population", DATA_API_DEFAULT_FILTERS.population),
    resources: selectValue(data, "resources", DATA_API_DEFAULT_FILTERS.resources),
    teamTogether: selectValue(data, "teamTogether", DATA_API_DEFAULT_FILTERS.teamTogether),
    treatyLength: selectValue(data, "treatyLength", DATA_API_DEFAULT_FILTERS.treatyLength),
    victory: selectValue(data, "victory", DATA_API_DEFAULT_FILTERS.victory),
    revealMap: selectValue(data, "revealMap", DATA_API_DEFAULT_FILTERS.revealMap),
  };
}

async function searchReplays(page = 1, options = {}) {
  const results = document.getElementById("replayResults");
  replaySearchState.view = "search";
  replaySearchState.page = Math.max(1, Number(page) || 1);
  replaySearchState.criteria = currentCriteriaFromForm();
  addCurrentSearchToHistory();
  if (page <= 1 && !options.skipUrlUpdate) {
    pushSearchUrl(1);
  }
  replaySearchState.lastSearchHadResults = true;
  replaySearchState.errorMessage = "";
  setResultsHeading({
    title: t("replaySearch.resultsTitle"),
    meta: t("replaySearch.searching"),
  });
  renderPagination(1, 1);
  if (results) {
    results.className = "replay-results empty-state";
    results.innerHTML = `<p><span class="spinner" aria-hidden="true"></span> ${escapeHtml(t("replaySearch.searching"))}</p>`;
  }

  try {
    const response = await fetch("/api/replay-search", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        criteria: replaySearchState.criteria,
      }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || payload?.status !== "OK") {
      throw new Error(payload?.errorMessage || `Replay search returned ${response.status}`);
    }
    const data = payload.data || {};
    replaySearchState.criteria = data.criteria || replaySearchState.criteria;
    replaySearchState.total = Number(data.total) || 0;
    replaySearchState.matches = (Array.isArray(data.matches) ? data.matches : []).map(normalizeMatch);
  } catch {
    replaySearchState.total = 0;
    replaySearchState.matches = [];
    replaySearchState.errorMessage = t("replaySearch.searchFailed");
  } finally {
    replaySearchState.page = Math.max(1, Number(page) || 1);
    renderReplayState();
  }
}

async function loadRecentHighlights() {
  replaySearchState.view = "highlights";
  replaySearchState.page = 1;
  replaySearchState.sort = { key: "dateTime", direction: "desc" };
  replaySearchState.criteria = {
    ...DATA_API_DEFAULT_FILTERS,
    ratingRange: RECENT_HIGHLIGHTS_RATING_RANGE,
    lengthRange: RECENT_HIGHLIGHTS_LENGTH_RANGE,
    players: [],
    civs: [],
  };
  replaySearchState.matches = [];
  replaySearchState.total = 0;
  replaySearchState.loading = true;
  replaySearchState.errorMessage = "";
  renderReplayState();

  try {
    const response = await fetch("/api/replay-search", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ criteria: replaySearchState.criteria }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || payload?.status !== "OK") {
      throw new Error(payload?.errorMessage || `Replay search returned ${response.status}`);
    }
    const data = payload.data || {};
    replaySearchState.criteria = data.criteria || replaySearchState.criteria;
    replaySearchState.total = Number(data.total) || 0;
    replaySearchState.matches = (Array.isArray(data.matches) ? data.matches : []).map(normalizeMatch);
  } catch {
    replaySearchState.errorMessage = t("replaySearch.searchFailed");
  } finally {
    replaySearchState.loading = false;
    renderReplayState();
  }
}

function optionLabelForPlayer(player) {
  const name = String(player?.name || player?.alias || "").trim();
  return name || `Profile ${parsePositiveInteger(player?.id || player?.profileId)}`;
}

function humanizeOptionLabel(value, options = {}) {
  const text = String(value ?? "").trim();
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

function optionLabelKey(source, value) {
  const normalizedSource = String(source || "").trim();
  const normalizedValue = String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
  return normalizedSource && normalizedValue ? `option.${normalizedSource}.${normalizedValue}` : "";
}

function localizedHumanizeOptionLabel(source, value) {
  const label = humanizeOptionLabel(value, { stripKnownPrefixes: source === "map" });
  if (source !== "map") {
    return label;
  }
  return label
    .split(/\s+/)
    .map((word) => {
      const key = `option.word.${word.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`;
      return activeMessages[key] || DEFAULT_MESSAGES[key] || word;
    })
    .filter(Boolean)
    .join(" ")
    .trim();
}

function duplicateMapLabelSuffix(value) {
  const normalized = String(value ?? "").trim().toLowerCase().replace(/-/g, "_");
  if (!DUPLICATE_MAP_LABEL_VALUES.has(normalized)) {
    return "";
  }
  if (/^rm_qs[_-]/.test(normalized)) {
    return "rm_qs";
  }
  const match = normalized.match(/^([a-z]+)[_-]/);
  return match?.[1] || "";
}

function localizedOptionLabel(source, value, fallback = "") {
  const text = String(value ?? "").trim();
  if (!text) {
    return "";
  }
  const category = source === "civilizations" ? "civ" : source;
  const key = optionLabelKey(category, text);
  if (category === "map") {
    const suffix = duplicateMapLabelSuffix(text);
    if (suffix) {
      if (key && activeMessages[key]) {
        return activeMessages[key];
      }
      if (key && DEFAULT_MESSAGES[key]) {
        return DEFAULT_MESSAGES[key];
      }
      return `${localizedHumanizeOptionLabel(category, text)} (${suffix})`;
    }
  }
  if (key && activeMessages[key]) {
    return activeMessages[key];
  }
  if (key && DEFAULT_MESSAGES[key]) {
    return DEFAULT_MESSAGES[key];
  }
  return fallback || localizedHumanizeOptionLabel(category, text);
}

function localizedListText(values, source) {
  const clean = (Array.isArray(values) ? values : []).map((value) => String(value || "").trim()).filter(Boolean);
  return clean.length ? clean.map((value) => localizedOptionLabel(source, value, value)).join(", ") : t("common.unknown");
}

function compareOptionData(left, right) {
  const collator = replaySortCollator();
  const labelComparison = collator.compare(String(left?.label || ""), String(right?.label || ""));
  return labelComparison || collator.compare(String(left?.value || ""), String(right?.value || ""));
}

function appendOptions(select, values, mapper, options = {}) {
  const first = select.querySelector("option[value='']");
  const any = select.querySelector("option[value='any']");
  const previousValue = String(select.value || "").trim();
  const defaultValue = String(options.defaultValue ?? select.dataset.defaultValue ?? "").trim();
  const defaultOption = defaultValue
    ? Array.from(select.options).find((option) => option.value === defaultValue)
    : null;
  select.replaceChildren();
  const usedValues = new Set();
  if (first) {
    select.append(first);
    usedValues.add(first.value);
  } else if (any) {
    select.append(any);
    usedValues.add(any.value);
  }
  const optionDataList = [];
  for (const value of Array.isArray(values) ? values : []) {
    const optionData = mapper(value);
    if (!optionData?.value || !optionData?.label) {
      continue;
    }
    const optionValue = String(optionData.value);
    if (usedValues.has(optionValue)) {
      continue;
    }
    usedValues.add(optionValue);
    optionDataList.push({ ...optionData, value: optionValue });
  }
  if (options.sort) {
    optionDataList.sort(compareOptionData);
  }
  for (const optionData of optionDataList) {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.textContent = optionData.label;
    if (optionData.name) {
      option.dataset.name = optionData.name;
    }
    select.append(option);
  }
  if (defaultOption && defaultValue && !usedValues.has(defaultValue)) {
    select.append(defaultOption);
    usedValues.add(defaultValue);
  }
  if (previousValue && usedValues.has(previousValue)) {
    select.value = previousValue;
  } else if (defaultValue && usedValues.has(defaultValue)) {
    select.value = defaultValue;
  }
}

function populatePlayerDatalist(players) {
  const datalist = document.getElementById("replayPlayerOptions");
  if (!datalist) {
    return;
  }
  datalist.replaceChildren();
  const playerOptions = (Array.isArray(players) ? players : [])
    .map((player) => ({
      profileId: parsePositiveInteger(player?.profileId || player?.id),
      label: optionLabelForPlayer(player),
    }))
    .filter((player) => player.profileId && player.label)
    .sort(compareOptionData);
  for (const player of playerOptions) {
    const option = document.createElement("option");
    option.value = player.label;
    option.label = player.label;
    option.dataset.profileId = String(player.profileId);
    datalist.append(option);
  }
}

function populateReplayFilterOptions(data = replaySearchState.options || {}) {
  const values = data.values || {};
  populatePlayerDatalist(data.players);
  document.querySelectorAll('select[data-option-source="ratingRanges"]').forEach((select) => {
    appendOptions(
      select,
      data.ratingRanges || REPLAY_RATING_RANGES,
      (value) => {
        const ratingValue = String(value);
        return {
          value: ratingValue,
          label: ratingValue === REPLAY_RATING_ANY_VALUE ? t("replaySearch.any") : ratingValue,
        };
      },
      {
        defaultValue: REPLAY_RATING_ANY_VALUE,
      }
    );
  });
  document.querySelectorAll('select[data-option-source="civilizations"]').forEach((select) => {
    appendOptions(select, data.civilizations, (entry) => {
      const value = String(entry?.value || "").toLowerCase();
      return {
        value,
        label: localizedOptionLabel("civ", value, String(entry?.label || entry?.value || "")),
      };
    }, { sort: true });
  });
  document.querySelectorAll("select[data-option-source]").forEach((select) => {
    const source = select.dataset.optionSource || "";
    if (source === "ratingRanges" || source === "civilizations") {
      return;
    }
    const sourceValues = source === "treatyLength" ? data.treatyLengths : values[source];
    appendOptions(select, sourceValues, (value) => ({
      value: String(value),
      label: source === "strategy" ? localizedReplayStrategyName(value) : source === "followup" ? localizedReplayFollowupName(value) : localizedOptionLabel(source, value),
    }), { sort: REPLAY_LOCALIZED_SORT_OPTION_SOURCES.has(source) });
  });
  syncReplaySearchFormRatingRange();
}

async function loadReplayOptions() {
  try {
    const response = await fetch("/api/replay-search/options", { headers: { Accept: "application/json" } });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || payload?.status !== "OK") {
      throw new Error(payload?.errorMessage || `Replay filter API returned ${response.status}`);
    }
    const data = payload.data || {};
    replaySearchState.options = data;
    populateReplayFilterOptions(data);
    if (hasReplaySearchQueryParams()) {
      const params = new URLSearchParams(window.location.search);
      const values = formValuesFromSearchParams(params);
      rememberProfileIdsFromSearchParams(params, values);
      if (!applySearchHistoryFormValues(values)) {
        return;
      }
      replaySearchState.view = "search";
      await searchReplays(currentSearchPageFromUrl(), { skipUrlUpdate: true });
    }
  } catch {
    setResultsHeading({
      title: t("replaySearch.readyTitle"),
      meta: t("replaySearch.optionsFailed"),
    });
  }
}

async function webMcpJsonFetch(path, options = {}) {
  const response = await fetch(path, {
    ...options,
    headers: {
      Accept: "application/json",
      ...(options.headers || {}),
    },
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload?.status === "ERROR") {
    throw new Error(payload?.errorMessage || `Request failed with HTTP ${response.status}`);
  }
  return payload;
}

function normalizeWebMcpSearchCriteria(input = {}) {
  const criteria = input && typeof input === "object" && !Array.isArray(input) ? input : {};
  const players = Array.isArray(criteria.players)
    ? criteria.players
    : [criteria.player, criteria.playerA, criteria.playerB].filter(Boolean);
  const civs = Array.isArray(criteria.civs)
    ? criteria.civs
    : [criteria.civ, criteria.civA, criteria.civB].filter(Boolean);
  return {
    ratingRange: String(criteria.ratingRange || REPLAY_RATING_ANY_VALUE),
    players: players
      .map((player) => {
        if (typeof player === "string") {
          return { input: player };
        }
        return {
          input: String(player?.input || player?.name || "").trim(),
          profileId: parsePositiveInteger(player?.profileId || player?.id) || undefined,
        };
      })
      .filter((player) => player.input || player.profileId)
      .slice(0, 2),
    civs: civs.map((civ) => String(civ || "").trim().toLowerCase()).filter(Boolean).slice(0, 2),
    map: String(criteria.map || "").trim(),
    leaderboard: String(criteria.leaderboard || "").trim(),
    gameMode: String(criteria.gameMode || "").trim(),
    lengthRange: String(criteria.lengthRange || "").trim(),
    strategy: String(criteria.strategy || "").trim(),
    followup: String(criteria.followup || "").trim(),
    aiPlayer: String(criteria.aiPlayer || "").trim(),
    difficulty: String(criteria.difficulty || "").trim(),
    startingAge: String(criteria.startingAge || "").trim(),
    endingAge: String(criteria.endingAge || "").trim(),
    population: String(criteria.population || "").trim(),
    resources: String(criteria.resources || "").trim(),
    victory: String(criteria.victory || "").trim(),
    revealMap: String(criteria.revealMap || "").trim(),
  };
}

function compactObject(value) {
  return Object.fromEntries(
    Object.entries(value || {}).filter(([, entry]) =>
      Array.isArray(entry) ? entry.length > 0 : entry !== undefined && entry !== null && String(entry).trim() !== ""
    )
  );
}

function registerWebMcpTools() {
  const modelContext = document?.modelContext || globalThis.navigator?.modelContext;
  if (!modelContext || typeof modelContext.registerTool !== "function") {
    return;
  }
  const controller = new AbortController();
  const register = (tool) => {
    try {
      const registration = modelContext.registerTool(tool, { signal: controller.signal });
      if (registration && typeof registration.catch === "function") {
        registration.catch(() => {});
      }
    } catch {
    }
  };

  register({
    name: "get_replay_search_options",
    title: "Get replay search options",
    description: "Fetch valid Age of Empires II replay search filter values, defaults, civilization identifiers, and top player suggestions from AOE2 Viewer.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
    annotations: {
      readOnlyHint: true,
      untrustedContentHint: true,
    },
    execute: async () => webMcpJsonFetch("/api/replay-search/options"),
  });

  register({
    name: "search_replays",
    title: "Search AOE2 replays",
    description: "Search AOE2 Viewer match records by player, profile ID, civilization, map, leaderboard, rating range, length range, strategy, followup, and game settings.",
    inputSchema: {
      type: "object",
      properties: {
        ratingRange: { type: "string", description: "Rating range such as 1700-4000 or 0-4000." },
        players: {
          type: "array",
          maxItems: 2,
          items: {
            type: "object",
            properties: {
              input: { type: "string", description: "Player name search text." },
              profileId: { type: "integer", minimum: 1, description: "Exact Age of Empires profile ID." },
            },
            additionalProperties: false,
          },
        },
        player: { type: "string", description: "Convenience player name search for one player." },
        civs: { type: "array", maxItems: 2, items: { type: "string" } },
        map: { type: "string" },
        leaderboard: { type: "string" },
        gameMode: { type: "string" },
        lengthRange: { type: "string", description: "Inclusive match length range formatted as HH:MM:SS-HH:MM:SS." },
        strategy: { type: "string" },
        followup: { type: "string" },
      },
      additionalProperties: true,
    },
    annotations: {
      readOnlyHint: true,
      untrustedContentHint: true,
    },
    execute: async (input = {}) => webMcpJsonFetch("/api/replay-search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        criteria: compactObject(normalizeWebMcpSearchCriteria(input)),
      }),
    }),
  });

  register({
    name: "get_player_rank",
    title: "Get player rank",
    description: "Look up an Age of Empires II player rank summary by profile ID.",
    inputSchema: {
      type: "object",
      required: ["profileId"],
      properties: {
        profileId: { type: "integer", minimum: 1 },
      },
      additionalProperties: false,
    },
    annotations: {
      readOnlyHint: true,
      untrustedContentHint: true,
    },
    execute: async (input = {}) => {
      const profileId = parsePositiveInteger(input.profileId);
      if (!profileId) {
        throw new Error("profileId is required");
      }
      return webMcpJsonFetch(`/api/player-rank?profileId=${encodeURIComponent(String(profileId))}`);
    },
  });
}

function toggleFavorite(matchId) {
  const id = parsePositiveInteger(matchId);
  if (!id) {
    return;
  }
  if (isFavorite(id)) {
    replaySearchState.favorites = replaySearchState.favorites.filter((entry) => entry.matchId !== id);
  } else {
    const match =
      replaySearchState.matches.find((entry) => Number(entry.id) === id) ||
      replaySearchState.favorites.find((entry) => entry.matchId === id)?.match;
    if (!match) {
      return;
    }
    replaySearchState.favorites = [
      {
        matchId: id,
        favoritedAt: new Date().toISOString(),
        match: normalizeMatch(match),
      },
      ...replaySearchState.favorites.filter((entry) => entry.matchId !== id),
    ];
  }
  saveFavoriteGames();
  renderReplayState();
}

function updateReplayStrategyMatch(matchId, data = {}) {
  const id = parsePositiveInteger(matchId || data.matchId);
  if (!id) {
    return;
  }
  const patch = {
    playerAStrategy: String(data.playerAStrategy || "").trim(),
    playerBStrategy: String(data.playerBStrategy || "").trim(),
    playerAFollowup: String(data.playerAFollowup || "").trim(),
    playerBFollowup: String(data.playerBFollowup || "").trim(),
  };
  replaySearchState.matches = replaySearchState.matches.map((match) =>
    Number(match.id || match.matchId) === id ? normalizeMatch({ ...match, ...patch }) : match
  );
  replaySearchState.sortedMatches = replaySearchState.sortedMatches.map((match) =>
    Number(match.id || match.matchId) === id ? normalizeMatch({ ...match, ...patch }) : match
  );
  let favoritesChanged = false;
  replaySearchState.favorites = replaySearchState.favorites.map((entry) => {
    if (Number(entry.matchId) !== id) {
      return entry;
    }
    favoritesChanged = true;
    return {
      ...entry,
      match: normalizeMatch({ ...entry.match, ...patch }),
    };
  });
  if (favoritesChanged) {
    saveFavoriteGames();
  }
}

async function detectReplayStrategy(matchId) {
  const id = parsePositiveInteger(matchId);
  if (!id || replaySearchState.pendingStrategyMatchIds.has(id)) {
    return;
  }
  replaySearchState.pendingStrategyMatchIds.add(id);
  renderReplayState();
  try {
    const response = await fetch("/api/replay-search/detect-strategy", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ matchId: id }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || payload?.status !== "OK") {
      throw new Error(payload?.errorMessage || `Strategy detection returned ${response.status}`);
    }
    const data = payload.data || {};
    if (data.status === "not_applicable") {
      updateReplayStrategyMatch(id, { playerAStrategy: "", playerBStrategy: "", playerAFollowup: "", playerBFollowup: "" });
    } else {
      updateReplayStrategyMatch(id, data);
    }
  } catch {
    window.alert(t("replaySearch.strategyDetectFailed"));
  } finally {
    replaySearchState.pendingStrategyMatchIds.delete(id);
    renderReplayState();
  }
}

function setMoreFiltersVisible(visible) {
  const panel = document.getElementById("moreFiltersPanel");
  const toggle = document.getElementById("moreFiltersToggle");
  if (!panel || !toggle) {
    return;
  }
  panel.hidden = !visible;
  toggle.setAttribute("aria-expanded", visible ? "true" : "false");
  toggle.textContent = t(visible ? "replaySearch.fewerFilters" : "replaySearch.moreFilters");
}

function resetReplaySearchFormDefaults() {
  const form = document.getElementById("replaySearchForm");
  if (!form) {
    return;
  }
  form.querySelectorAll("select[data-default-value]").forEach((select) => {
    const defaultValue = select.dataset.defaultValue || "";
    if (Array.from(select.options).some((option) => option.value === defaultValue)) {
      select.value = defaultValue;
    }
  });
  const rating = form.elements.ratingRange;
  if (rating) {
    rating.value = REPLAY_RATING_ANY_VALUE;
  }
  setMoreFiltersVisible(false);
}

let replayScrollbarState = null;

function setupReplayResultsFloatingScrollbar() {
  if (!isReplaySearchExperience()) {
    return;
  }
  if (replayScrollbarState) {
    return;
  }

  const shim = document.createElement("div");
  shim.className = "replay-scrollbar-shim";
  shim.setAttribute("aria-hidden", "true");
  const inner = document.createElement("div");
  inner.className = "replay-scrollbar-shim-inner";
  shim.appendChild(inner);
  document.body.appendChild(shim);

  const state = {
    shim,
    inner,
    wrap: null,
    sentinel: null,
    observer: null,
    scrollListener: null,
    syncing: false,
    raf: 0,
  };
  replayScrollbarState = state;

  shim.addEventListener("scroll", () => {
    if (state.syncing || !state.wrap) {
      return;
    }
    state.syncing = true;
    state.wrap.scrollLeft = shim.scrollLeft;
    state.syncing = false;
  }, { passive: true });

  const scheduleUpdate = () => {
    if (state.raf) {
      return;
    }
    state.raf = requestAnimationFrame(() => {
      state.raf = 0;
      attachToCurrentReplayWrap();
    });
  };

  window.addEventListener("resize", scheduleUpdate, { passive: true });
  window.addEventListener("scroll", scheduleUpdate, { passive: true });

  const results = document.getElementById("replayResults");
  if (results) {
    const mo = new MutationObserver(scheduleUpdate);
    mo.observe(results, { childList: true, subtree: true });
  }

  attachToCurrentReplayWrap();
}

function attachToCurrentReplayWrap() {
  const state = replayScrollbarState;
  if (!state) {
    return;
  }
  const wrap = document.querySelector(".replay-results-table-wrap");

  if (state.wrap === wrap) {
    updateReplayScrollbarGeometry();
    updateReplayScrollbarVisibility();
    return;
  }

  if (state.scrollListener && state.wrap) {
    state.wrap.removeEventListener("scroll", state.scrollListener);
  }
  if (state.sentinel) {
    state.sentinel.remove();
    state.sentinel = null;
  }
  if (state.observer) {
    state.observer.disconnect();
    state.observer = null;
  }

  state.wrap = wrap;

  if (!wrap) {
    state.shim.classList.add("is-hidden");
    return;
  }

  state.scrollListener = () => {
    if (state.syncing) {
      return;
    }
    state.syncing = true;
    state.shim.scrollLeft = wrap.scrollLeft;
    state.syncing = false;
  };
  wrap.addEventListener("scroll", state.scrollListener, { passive: true });

  const sentinel = document.createElement("div");
  sentinel.className = "replay-scrollbar-sentinel";
  wrap.appendChild(sentinel);
  state.sentinel = sentinel;

  const observer = new IntersectionObserver(
    () => updateReplayScrollbarVisibility(),
    { threshold: 0 }
  );
  observer.observe(sentinel);
  state.observer = observer;

  updateReplayScrollbarGeometry();
  updateReplayScrollbarVisibility();
}

function updateReplayScrollbarGeometry() {
  const state = replayScrollbarState;
  if (!state || !state.wrap) {
    return;
  }
  const wrap = state.wrap;
  const needsScroll = wrap.scrollWidth > wrap.clientWidth + 1;
  if (!needsScroll) {
    state.shim.classList.add("is-hidden");
    return;
  }
  state.inner.style.width = `${wrap.scrollWidth}px`;
  const rect = wrap.getBoundingClientRect();
  state.shim.style.left = `${rect.left}px`;
  state.shim.style.width = `${wrap.clientWidth}px`;
  if (!state.shim.classList.contains("is-hidden")) {
    state.syncing = true;
    state.shim.scrollLeft = wrap.scrollLeft;
    state.syncing = false;
  }
}

function updateReplayScrollbarVisibility() {
  const state = replayScrollbarState;
  if (!state || !state.wrap) {
    return;
  }
  const wrap = state.wrap;
  const needsScroll = wrap.scrollWidth > wrap.clientWidth + 1;
  if (!needsScroll) {
    state.shim.classList.add("is-hidden");
    return;
  }
  const rect = wrap.getBoundingClientRect();
  const vh = window.innerHeight;
  const wrapVisible = rect.top < vh && rect.bottom > 0;
  const nativeScrollbarVisible = rect.bottom <= vh;
  if (wrapVisible && !nativeScrollbarVisible) {
    state.shim.classList.remove("is-hidden");
    state.syncing = true;
    state.shim.scrollLeft = wrap.scrollLeft;
    state.syncing = false;
  } else {
    state.shim.classList.add("is-hidden");
  }
}

function setupReplaySearch() {
  if (!isReplaySearchExperience()) {
    return;
  }
  if (isReplaySearchPage() && hasReplaySearchQueryParams()) {
    const params = new URLSearchParams(window.location.search);
    const values = formValuesFromSearchParams(params);
    rememberProfileIdsFromSearchParams(params, values);
    window.location.replace(searchUrlFromFormValues(values, currentSearchPageFromUrl()));
    return;
  }
  replaySearchState.favorites = loadFavoriteGames();
  replaySearchState.searchHistory = loadSearchHistory();
  updateFavoriteCount();
  hydrateSeoReplayResults();
  setupReplayResultsFloatingScrollbar();

  const form = document.getElementById("replaySearchForm");
  form?.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }
    if (target.matches("input[name='playerA'], input[name='playerB']")) {
      syncReplaySearchFormRatingRange(form);
    }
  });
  form?.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }
    if (target.matches("input[name='playerA'], input[name='playerB']")) {
      syncReplaySearchFormRatingRange(form);
    }
  });
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    replaySearchState.urlProfileIds = {};
    addCurrentSearchToHistory();
    window.location.assign(searchUrlFromFormValues(formValuesFromForm(form)));
  });
  form?.addEventListener("reset", () => {
    window.setTimeout(() => {
      resetReplaySearchFormDefaults();
      replaySearchState.view = "search";
      replaySearchState.matches = [];
      replaySearchState.sortedMatches = [];
      replaySearchState.total = 0;
      replaySearchState.page = 1;
      replaySearchState.lastSearchHadResults = false;
      replaySearchState.errorMessage = "";
      renderReplayState();
    }, 0);
  });

  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target.closest("[data-action]") : null;
    if (!target) {
      return;
    }
    const action = target.getAttribute("data-action");
    if (action === "show-favorites") {
      event.preventDefault();
      replaySearchState.view = replaySearchState.view === "favorites"
        ? (isReplaySearchPage() ? "highlights" : "search")
        : "favorites";
      renderReplayState();
      document.getElementById("replayResults")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (action === "toggle-more-filters") {
      event.preventDefault();
      const panel = document.getElementById("moreFiltersPanel");
      setMoreFiltersVisible(Boolean(panel?.hidden));
    }
    if (action === "toggle-favorite") {
      event.preventDefault();
      toggleFavorite(target.getAttribute("data-match-id"));
    }
    if (action === "detect-replay-strategy") {
      event.preventDefault();
      detectReplayStrategy(target.getAttribute("data-match-id"));
    }
    if (action === "run-search-history") {
      event.preventDefault();
      runSearchHistoryEntry(target.getAttribute("data-history-id"));
    }
    if (action === "toggle-search-history-pin") {
      event.preventDefault();
      toggleSearchHistoryPin(target.getAttribute("data-history-id"));
    }
    if (action === "filter-player") {
      event.preventDefault();
      searchByPlayerFromResult(target);
    }
    if (action === "filter-map") {
      event.preventDefault();
      searchByMapFromResult(target);
    }
    if (action === "search-page") {
      event.preventDefault();
      replaySearchState.page = Math.max(1, Number(target.getAttribute("data-page")) || 1);
      if (replaySearchState.view !== "highlights") {
        replaySearchState.view = "search";
        updateSearchUrlForPage(replaySearchState.page);
      }
      renderReplayState();
      document.getElementById("replayResults")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (action === "sort-replay-results") {
      event.preventDefault();
      if (toggleReplaySort(target.getAttribute("data-sort-key"))) {
        renderReplayState();
      }
    }
  });

  document.addEventListener("pointerover", (event) => {
    const target = event.target instanceof Element ? event.target.closest(".replay-player-link[data-profile-id]") : null;
    if (target) {
      loadPlayerRankTooltip(target);
    }
  });
  document.addEventListener("pointerout", (event) => {
    const target = event.target instanceof Element ? event.target.closest(".replay-player-link[data-profile-id]") : null;
    if (target && (!(event.relatedTarget instanceof Node) || !target.contains(event.relatedTarget))) {
      hidePlayerTooltip(target);
    }
  });
  document.addEventListener("focusin", (event) => {
    const target = event.target instanceof Element ? event.target.closest(".replay-player-link[data-profile-id]") : null;
    if (target) {
      loadPlayerRankTooltip(target);
    }
  });
  document.addEventListener("focusout", (event) => {
    const target = event.target instanceof Element ? event.target.closest(".replay-player-link[data-profile-id]") : null;
    if (target) {
      hidePlayerTooltip(target);
    }
  });
  window.addEventListener("scroll", () => hidePlayerTooltip(), { passive: true });
  window.addEventListener("resize", () => hidePlayerTooltip(), { passive: true });
  window.addEventListener("popstate", () => {
    if (hasReplaySearchQueryParams()) {
      const params = new URLSearchParams(window.location.search);
      const values = formValuesFromSearchParams(params);
      rememberProfileIdsFromSearchParams(params, values);
      if (!applySearchHistoryFormValues(values)) {
        return;
      }
      searchReplays(currentSearchPageFromUrl(), { skipUrlUpdate: true });
    }
  });

  renderReplayState();
  if (isReplaySearchPage()) {
    loadReplayOptions();
    loadRecentHighlights();
  }
}

async function init() {
  setupLanguageSelect();
  registerWebMcpTools();
  setupReplaySearch();
  await setLocale(preferredLocale(), { remember: Boolean(explicitLocalePreference()) });
  applyLocaleToInternalLinks();
  await loadSponsors();
}

init();
