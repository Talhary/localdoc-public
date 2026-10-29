# LocalCast – public resources

LocalCast Doc Converter is a 100% offline document, image and PDF converter for Windows.
**Your files never leave this computer.**

The application source is private. This repository holds only what the app or its users must be able to fetch
without authentication. Nothing here compiles into the app.

| Path | Contents |
| --- | --- |
| `catalogue/models.json` | Optional AI model catalogue (id, size, SHA-256, licence, source). Model files are published as Releases of this repo |
| `docs/` | Landing page, screenshots and privacy policy (served by GitHub Pages) |
| `docs/.well-known/security.txt` | Security contact |
| `THIRD-PARTY.md` | Licences of every bundled library, codec, font, model and dictionary |
| `.github/ISSUE_TEMPLATE/` | Bug report and feature request templates |

## The only host LocalCast contacts

LocalCast connects to the internet only when you choose to download an optional AI model, and only to this
repository's Releases on github.com. It never uploads your files.

## Reporting problems

- Bugs and feature requests: open an issue. **Do not attach personal files to public issues.**
- Anything involving one of your files: use *Report a problem* inside the app, which composes a private email.
- Security issues: see `docs/.well-known/security.txt`.

Everything in this repository must be redistributable under its licence. GPL, AGPL and non-commercial material is excluded.
