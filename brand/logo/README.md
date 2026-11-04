# Rotex logo files

| Folder | Contents | Use |
|---|---|---|
| `mark/` | Rotor Cube mark, 120×120 viewBox | Avatars, favicons, small spaces |
| `horizontal/` | mark + wordmark, side by side (**primary**) | Headers, READMEs, slides |
| `stacked/` | mark above the wordmark | Square-ish spaces, merch |
| `wordmark/` | ROTEX letters only | When the mark is already nearby |

Every lockup comes in four colour versions:

| Version | Use on |
|---|---|
| `color-on-dark` | Graphite 950–800 or other dark grounds |
| `color-on-light` | Paper 50 / white |
| `mono-black` | Single-colour print, engraving, faxes, light photos |
| `mono-white` | Dark photos, single-colour merch on dark fabric |

SVG is the master format. The PNGs are transparent exports: 512 / 1024 px for the mark, 1200 / 2400 px wide for the horizontal lockup, 800 / 1600 px wide for the stacked lockup and 1200 px wide for the wordmark.

## Clear space
Keep at least **x** clear on every side, where **x = the wordmark cap height = 0.4 × mark height**. For the mark alone, keep 0.25 × mark height clear. The horizontal, stacked and wordmark SVGs already include this padding. The mark SVG includes a 10% safe margin. See `../guidelines/img/clear-space.png`.

## Minimum size

| Asset | Minimum |
|---|---|
| Mark | 16 px / 4 mm. At 32 px and below, use `../icons/favicon.svg`, which has wider gaps for small sizes. |
| Horizontal lockup | 96 px / 20 mm wide |
| Stacked lockup | 64 px / 15 mm wide |
| Wordmark | 64 px wide |

## Construction
The mark is a hexagon of radius R, split into three faces from a hub triangle. The hub triangle has a circumradius of 0.24R. Each face is twisted 22°, with gaps of 0.065R and a corner radius of 0.08R.

| Background | Lit face | Mid face | Shade face |
|---|---|---|---|
| Dark | #FFD06B | #FFA81F | #B86A00 |
| Light | #FFA81F | #E88A00 | #8C4F00 |

The wordmark is drawn on a grid: stroke weight 0.2 × cap height, with the spacing around the T tightened by 28%. All shapes are outlined, so no font is required.

The generator lives in `../src/brand.py`, and `python3 src/kit_logo.py` regenerates every file.
