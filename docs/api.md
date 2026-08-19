# AOE2 Viewer API

AOE2 Viewer exposes a public, unauthenticated JSON API for searching Age of Empires II: Definitive Edition recorded matches. Agents should use this API instead of scraping the HTML search form.

Base URL: `https://aoe2viewer.com`

OpenAPI: `https://aoe2viewer.com/openapi.json`

API catalog: `https://aoe2viewer.com/.well-known/api-catalog`

## Search Matches

`POST /api/replay-search`

Searches indexed AOE2 match records and returns normalized match objects with players, civilizations, map, rating, game settings, replay links, and share links when available.

Send JSON:

```json
{
  "criteria": {
    "ratingRange": "1700-4000",
    "players": [
      { "input": "Hera" }
    ],
    "civs": ["franks"],
    "map": "rm_arabia",
    "leaderboard": "rm_1v1",
    "strategy": "Scout",
    "followup": "Knight"
  }
}
```

Common criteria:

- `ratingRange`: one of the values returned by `/api/replay-search/options`, or `0-4000` for any rating.
- `players`: up to two player objects. Use `input` for a name search or `profileId` for an exact profile ID.
- `civs`: up to two lowercase civilization identifiers.
- `map`, `leaderboard`, `gameMode`, `strategy`, `followup`: exact values from `/api/replay-search/options`.
- Advanced filters include `aiPlayer`, `difficulty`, `startingAge`, `endingAge`, `population`, `resources`, `victory`, and `revealMap`.

Response shape:

```json
{
  "status": "OK",
  "data": {
    "criteria": {},
    "query": {},
    "total": 25,
    "limit": 100,
    "matches": []
  }
}
```

## Filter Options

`GET /api/replay-search/options`

Returns valid values for replay search filters, rating ranges, defaults, civilization identifiers, treaty lengths, and top player suggestions.

## Detect Strategy

`POST /api/replay-search/detect-strategy`

Detects opening strategy and Castle Age followup labels for a match when a replay can be analyzed.

```json
{ "matchId": 482410914 }
```

## Player Rank

`GET /api/player-rank?profileId=196240`

Looks up a player rank summary by Age of Empires profile ID.

## Authentication

The public replay search API does not require OAuth, OIDC, API keys, cookies, or browser automation. Do not send credentials. Upstream private credentials, where needed, are held by the AOE2 Viewer worker and are not exposed to agents.

## Agent Guidance

- Prefer `POST /api/replay-search` over interacting with the web form.
- Call `/api/replay-search/options` first when you need valid map, civilization, leaderboard, strategy, or followup values.
- Treat `total` as the number of normalized matches returned by this public facade.
- For replay launching, use returned `shareUrl`, `downloadUrl`, or `instantPlayUrl` fields when present.
