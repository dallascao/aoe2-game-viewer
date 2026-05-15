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
const API_BASE_URL = "https://api.aoe2viewer.com";
let activeMessages = {};

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

function preferredLocale() {
  const params = new URLSearchParams(window.location.search);
  const queryLocale = params.get("lang");
  if (queryLocale) {
    return resolveLocale(queryLocale);
  }

  const savedLocale = window.localStorage.getItem("aoe2viewer.locale");
  if (savedLocale) {
    return resolveLocale(savedLocale);
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
  const response = await fetch(`locales/${locale}.json`, { cache: "no-cache" });
  if (!response.ok) {
    throw new Error(`Could not load locale ${locale}`);
  }
  return response.json();
}

function t(key) {
  return activeMessages[key] || key;
}

function applyTranslations(locale) {
  document.documentElement.lang = locale;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
    for (const pair of node.dataset.i18nAttr.split(",")) {
      const [attribute, key] = pair.split(":").map((part) => part.trim());
      if (attribute && key) {
        node.setAttribute(attribute, t(key));
      }
    }
  });
  updateScreenshots(locale);
}

function updateScreenshots(locale) {
  const screenshotPath = (index) => `images/localized/${locale}/aoe2_game_viewer_screenshot_${index}.png`;
  const fallbackPath = (index) => `images/localized/en/aoe2_game_viewer_screenshot_${index}.png`;
  const sharedPath = (index) => `images/localized/en/aoe2_game_viewer_screenshot_${index}.png`;
  const targets = [
    ["heroScreenshot", 0, true],
    ["replayScreenshot", 1, false],
    ["liveScreenshot", 2, false],
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

async function setLocale(locale) {
  const resolved = resolveLocale(locale);
  try {
    activeMessages = await loadMessages(resolved);
  } catch {
    activeMessages = await loadMessages(DEFAULT_LOCALE);
  }

  window.localStorage.setItem("aoe2viewer.locale", resolved);
  applyTranslations(resolved);

  const select = document.getElementById("languageSelect");
  if (select) {
    select.value = resolved;
  }
}

function setupLanguageSelect() {
  const select = document.getElementById("languageSelect");
  if (!select) {
    return;
  }

  for (const locale of SUPPORTED_LOCALES) {
    const option = document.createElement("option");
    option.value = locale;
    option.textContent = LOCALE_LABELS[locale] || locale;
    select.append(option);
  }

  select.addEventListener("change", () => setLocale(select.value));
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

async function init() {
  setupLanguageSelect();
  await setLocale(preferredLocale());
  await loadSponsors();
}

init();
