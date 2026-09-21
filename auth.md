# auth.md

AOE2 Viewer public replay search is available to agents without registration.

## Audience

AI agents, assistants, crawlers, and developer tools that need to search Age of Empires II: Definitive Edition match records.

## Public API

- API docs: `https://aoe2viewer.com/docs/api.md`
- OpenAPI: `https://aoe2viewer.com/openapi.json`
- API catalog: `https://aoe2viewer.com/.well-known/api-catalog`
- Search endpoint: `POST https://aoe2viewer.com/api/replay-search`
- Filter metadata: `GET https://aoe2viewer.com/api/replay-search/options`

## Authentication

No registration, OAuth client, API key, bearer token, cookie, or user login is required for the public replay search API.

Agents should not attempt credential discovery or account creation. If a future protected API is added, this file and the OAuth protected resource metadata will be updated with issuer and scope information.

## Credential Use

Do not send credentials to the public API. Requests should include:

```http
Accept: application/json
Content-Type: application/json
```

## Contact

Project website: `https://aoe2viewer.com`
