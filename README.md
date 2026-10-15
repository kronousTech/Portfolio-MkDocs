# Portfolio-MkDocs

Portfolio of João Santos, Unity Game Developer and AR/VR Engineer.

**Live site:** https://kronoustech.github.io/Portfolio-MkDocs/

Built with [MkDocs](https://www.mkdocs.org/) and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

## Run locally

```bash
pip install -r requirements.txt
mkdocs serve
```

Then open http://127.0.0.1:8000.

## Deploy

```bash
mkdocs gh-deploy
```

## Structure

| Path | What it holds |
| --- | --- |
| `docs/index.md` | Home page with featured work |
| `docs/projects/` | Project pages, split into `personal/` and `professional/<company>/` |
| `docs/asset-store-products/` | Unity Asset Store packages |
| `docs/content/` | Images and videos used by the pages |
| `docs/tags.md` | Auto-generated tag index (from each page's `tags:` front matter) |
| `docs/javascripts/slider.js`, `docs/stylesheets/` | Media slider and style tweaks |

## Adding a project

1. Create a page under `docs/projects/...` with `tags:` front matter (see any existing page).
2. Put its media in `docs/content/...`.
3. Add it to `nav` in `mkdocs.yml`.
