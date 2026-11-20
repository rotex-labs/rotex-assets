# Ironshade logo files

The Shade Cube is the Rotor Cube at rest: the same hexagon, hub, gaps and corners, with no twist, a banded shade face and a Rotor Amber hub. Ironshade is a Rotex Engine sub-brand. Construction, clear space and the do/don't list are in [`../guidelines/brand-guidelines.md`](../guidelines/brand-guidelines.md).

| Folder | Contents | Use |
|---|---|---|
| `mark/` | Shade Cube, square viewBox | Avatars, favicons, small spaces |
| `endorsed/` | mark + wordmark + Rotex endorsement line (**primary**) | README banners, social, docs home |
| `horizontal/` | mark + wordmark, side by side | Navbars, small spaces |
| `stacked/` | mark above the wordmark | Square-ish spaces, merch |
| `wordmark/` | IRONSHADE letters only | When the mark is already nearby |

Every lockup comes in four colour versions:

| Version | Use on |
|---|---|
| `color-on-dark` | Graphite 950–800 or other dark grounds |
| `color-on-light` | Paper 50 / white |
| `mono-black` | Single-colour print, engraving, light photos |
| `mono-white` | Dark photos, single-colour merch on dark fabric |

SVG is the master format. The PNGs are transparent exports: 512 and 128 px for the mark, 1200 px wide for the endorsed, horizontal and wordmark lockups, and 800 px wide for the stacked lockup.

## Mark SVGs

| File | Ground |
|---|---|
| [`mark/ironshade-mark-color-on-dark.svg`](mark/ironshade-mark-color-on-dark.svg) | Dark |
| [`mark/ironshade-mark-color-on-light.svg`](mark/ironshade-mark-color-on-light.svg) | Light |
| [`mark/ironshade-mark-mono-black.svg`](mark/ironshade-mark-mono-black.svg) | Single colour, dark ink |
| [`mark/ironshade-mark-mono-white.svg`](mark/ironshade-mark-mono-white.svg) | Single colour, light ink |

## Clear space
Keep at least **x** clear on every side, where **x = the wordmark cap height**. For the mark alone, keep 0.25 × mark height clear. The endorsed, horizontal, stacked and wordmark SVGs already include this padding. The mark SVG includes a 10% safe margin. See [`../../guidelines/img/clear-space.svg`](../../guidelines/img/clear-space.svg).

## Minimum size

| Asset | Minimum |
|---|---|
| Mark | 16 px / 4 mm. At 32 px and below, use [`../icons/favicon.svg`](../icons/favicon.svg) or the `ironshade-favicon-*` small cut, which has two bands and wider gaps. |
| Endorsed lockup | Keep the wordmark at least 64 px wide |
| Horizontal lockup | 96 px / 20 mm wide |
| Stacked lockup | 64 px / 15 mm wide |
| Wordmark | 64 px wide |

## Construction
The mark is a hexagon of radius R with no twist. The hub triangle has a circumradius of 0.24R. Gaps are 0.065R and the corner radius is 0.08R. The shade face is three bands. The hub is filled.

| Background | Lit face | Mid face | Bands, outer to inner | Hub |
|---|---|---|---|---|
| Dark | #AEEEFC | #3FD0F2 | #0B7593, #0A93B8, #12B5DD | #FFA81F |
| Light | #3FD0F2 | #0A93B8 | #073F51, #0A5B73, #0B7593 | #E88A00 |

The wordmark is Inter Tight 720, tracking +11%, outlined. The endorsed lockup is the only Ironshade file that contains the Rotor Cube, and it places that cube on the endorsement line, beside the wordmark, never inside the Shade Cube.

## Small sizes
`../icons/favicon.svg` switches with `prefers-color-scheme`. Fixed cuts for 16 and 32 px are `ironshade-favicon-dark-*` and `ironshade-favicon-light-*`. The avatar is `ironshade-avatar.svg` and `ironshade-avatar-512.png`.
