# Skill: Search AOE2 Viewer Replays

Use this skill when an agent needs to find Age of Empires II: Definitive Edition matches, replays, players, civilizations, maps, strategies, or followups through AOE2 Viewer.

## API First

Use the public JSON API instead of scraping the website.

- API docs: `https://aoe2viewer.com/docs/api.md`
- OpenAPI: `https://aoe2viewer.com/openapi.json`
- Options endpoint: `GET https://aoe2viewer.com/api/replay-search/options`
- Search endpoint: `POST https://aoe2viewer.com/api/replay-search`

## Workflow

1. Fetch `/api/replay-search/options` when you need exact filter values.
2. Build a `criteria` object with player names or profile IDs, civilizations, map, rating range, leaderboard, strategy, or followup.
3. POST the criteria to `/api/replay-search`.
4. Use returned match fields such as `map`, `playersA`, `playersB`, `civsA`, `civsB`, `startTime`, `highestRating`, `shareUrl`, `downloadUrl`, and `instantPlayUrl`.

## Example

```http
POST https://aoe2viewer.com/api/replay-search
Accept: application/json
Content-Type: application/json

{
  "criteria": {
    "players": [{ "input": "Hera" }],
    "ratingRange": "0-4000",
    "map": "rm_arabia"
  }
}
```

## Authentication

No authentication is required for public replay search.
