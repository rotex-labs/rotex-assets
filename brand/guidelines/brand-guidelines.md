# Rotex brand guidelines, v1.0

The paged version, one topic per page, is in `brand-guidelines.html` and `brand-guidelines.pdf`. This file is the plain-text reference.

---

## 1. Story and positioning

**Rotex Engine** is a modular Rust graphics engine. Its core is one zero-cost rendering API (the RHI) over Vulkan, Direct3D 12, OpenGL / WebGL and wgpu. It is split into small crates and organised in **vertical feature slices**:
- **Core slices** behave the same on every backend.
- **Extension slices** (ray tracing, mesh shaders, bindless and others) are opt-in at compile time through `Supports<Feature>`.
- Every feature reports **Native, Emulated or Absent** for each backend, so the engine never hides a gap.

**Positioning line:** *One API. Every GPU. Zero cost.*

**Who it is for:** engine and tools programmers who want native performance on every platform without writing four renderers.

**Proof points:** static dispatch (`Device<B>`, no vtable), an explicit capability table, one shader source cooked to SPIR-V, DXIL/HLSL, MSL, GLSL and WGSL, and a render graph with automatic barriers.

## 2. Name usage

| Use | Avoid |
|---|---|
| **Rotex** in running text; **Rotex Engine** on first mention or in formal contexts | ROTEX in body text (all caps belongs to the wordmark only), RoTex, Rotex™, R0tex |
| `rotex-core`, `rotex-vulkan`: crate names in lowercase code style | "Rotex-Core", "RotexCore" |
| GitHub org: **rotex-labs** | "rotexengine" (old org name; update the `Cargo.toml` repository URLs) |
| "the Rotex RHI" or "the Rotex API" | "RTX" (NVIDIA trademark), "Rotex DirectX" |

Write backend names exactly: **Vulkan**, **Direct3D 12** (short form **D3D12**), **OpenGL**, **OpenGL ES**, **WebGL** (or WebGL2), **wgpu** (always lowercase), **WebGPU**, **Metal**. These are trademarks of their owners: Khronos, Microsoft, Apple, and the gfx-rs / wgpu project. Use them as plain text and never use their logos in Rotex marketing art.

## 3. Logo

**The mark: Rotor Cube.** An isometric hexagon split into three faces. Each face is twisted 22° around a triangular hub. It reads as:
- **Cube:** 3D rendering and the GPU.
- **Twist:** the rotor and the name Rotex. This is the evolution of the old three-blade mark.
- **Hub:** the single API that every slice passes through.

**Construction.** Hexagon of radius R. The hub triangle has a circumradius of 0.24R, the twist is 22°, the gaps are 0.065R and the corner radius is 0.08R. The three tones are:

| Background | Lit | Mid | Shade |
|---|---|---|---|
| Dark | Amber 300 | Amber 500 | Amber 700 |
| Light | Amber 500 | Amber 600 | Amber 800 |

**Lockups** (`logo/`):

| Lockup | Construction |
|---|---|
| horizontal (primary) | mark height M, wordmark cap height 0.40M, gap 0.30M, wordmark centred on the mark |
| stacked | wordmark cap height 0.32M, gap 0.26M |
| wordmark only | the wordmark on its own |
| mark only | the mark on its own |

Each lockup comes in four colour versions: `color-on-dark`, `color-on-light`, `mono-black` and `mono-white`. The SVG files are the masters. The PNGs are exports.

**Clear space.** Keep at least **x** free on every side, where x = the wordmark cap height = 0.4 × mark height. For the mark alone, x = 0.25 × mark height. The lockup SVGs already include this padding. The mark SVGs include only a 10% safe margin, so add the rest in layout.

**Minimum sizes**

| Asset | Minimum size |
|---|---|
| Mark | 16 px / 4 mm (use the favicon cut, which has wider gaps and smaller corners, at 32 px and below) |
| Horizontal lockup | 96 px / 20 mm wide |
| Stacked lockup | 64 px / 15 mm wide |
| Wordmark | 64 px wide |

**The wordmark** is custom-drawn geometric capitals, outlined, so no font is needed. Never retype it in a font.

**Do**
- Use the colour versions on Graphite or Paper.
- Use the mono versions on photographs, merch or single-colour print.
- Keep the mark upright.

**Don't**
- Stretch the logo, rotate the lockup or rearrange its parts.
- Recolour it, especially in rust or red (that is Sidermux's territory).
- Add shadows, glows or outlines.
- Put it on mid-amber or busy backgrounds.
- Retype the wordmark.

See `img/dodont/`.

## 4. Colour

| Token | Hex | RGB | Role |
|---|---|---|---|
| Graphite 950 | #0B0F1C | 11 15 28 | Primary dark background |
| Graphite 900 | #10162A | 16 22 42 | Raised surfaces |
| Graphite 800 | #1A2238 | 26 34 56 | Cards, chips |
| Graphite 700 | #283252 | 40 50 82 | Borders on dark |
| Graphite 600 | #3D4870 | 61 72 112 | Muted text on light |
| Graphite 400 | #7C88A8 | 124 136 168 | Subtle text on dark, Absent |
| Graphite 300 | #A9B3CC | 169 179 204 | Muted text on dark |
| Paper 50 | #F6F8FC | 246 248 252 | Light background, text on dark |
| Amber 300 | #FFD06B | 255 208 107 | Mark lit face, amber text on dark |
| **Rotor Amber 500** | **#FFA81F** | 255 168 31 | Primary brand colour, buttons, Emulated |
| Amber 600 | #E88A00 | 232 138 0 | Mark mid face (light), hover |
| Amber 700 | #B86A00 | 184 106 0 | Mark shade (dark) |
| Amber 800 | #8C4F00 | 140 79 0 | Amber text on light, mark shade (light) |
| Signal Cyan 400 | #3FD0F2 | 63 208 242 | Links, technical accent on dark |
| Cyan 700 | #0B7593 | 11 117 147 | Links on light |
| Native 400 / 700 | #34D399 / #0E7A55 | | Capability: Native |

**Why this palette.** The old orange (#FF8A3D) sat too close to Sidermux, which uses rust #E25E28 on neutral iron #0E1013. Rotex moves about 20° toward gold (Rotor Amber, hue ≈ 36° against Sidermux ≈ 17°) and swaps neutral black for a cool **graphite blue**. Together, the two shifts make the brands easy to tell apart side by side, while longtime users still recognise a warm rotating mark.

**Ratio.** Graphite about 70%, Paper/neutral about 20%, Amber about 8%, Cyan about 2%. Amber is a signal colour, not a page colour.

**WCAG contrast, measured**

```
Paper text on Graphite 950                    #F6F8FC / #0B0F1C  17.97:1  AAA
Muted text on Graphite 950                    #A9B3CC / #0B0F1C   9.10:1  AAA
Subtle text on Graphite 950                   #7C88A8 / #0B0F1C   5.41:1  AA
Rotor Amber on Graphite 950                   #FFA81F / #0B0F1C   9.89:1  AAA
Amber 300 on Graphite 950                     #FFD06B / #0B0F1C  13.18:1  AAA
Signal Cyan on Graphite 950                   #3FD0F2 / #0B0F1C  10.48:1  AAA
Native green on Graphite 950                  #34D399 / #0B0F1C   9.94:1  AAA
Graphite 950 on Rotor Amber (buttons)         #0B0F1C / #FFA81F   9.89:1  AAA
Graphite text on Paper 50                     #0B0F1C / #F6F8FC  17.97:1  AAA
Muted text on Paper 50                        #3D4870 / #F6F8FC   8.37:1  AAA
Subtle text on White                          #5B6688 / #FFFFFF   5.67:1  AA
Amber 700 on White                            #B86A00 / #FFFFFF   4.12:1  AA Large / UI
Amber 800 on White                            #8C4F00 / #FFFFFF   6.49:1  AA
Cyan 700 on White                             #0B7593 / #FFFFFF   5.28:1  AA
Native 700 on White                           #0E7A55 / #FFFFFF   5.34:1  AA
Rotor Amber on White (graphics only)          #FFA81F / #FFFFFF   1.93:1  Fail (decor only)
```

**Rules**
- Never set amber *text* on light backgrounds in 500 or 600. Use Amber 800.
- Rotor Amber on white fails as text. Use it only for graphics and button fills, with Graphite text on top (9.9:1).

## 5. Typography

All three typefaces are under the SIL Open Font License 1.1. The files and licence texts are in `fonts/`.

| Role | Face | Weights | Notes |
|---|---|---|---|
| Display, headlines | **Inter Tight** | 650–750 | tracking −1 to −2% |
| UI and body | **Inter** | 400 / 500 / 600 | 16 px base, 1.6 line height |
| Code, crate names, labels | **JetBrains Mono** | 400 / 500 / 700 | uppercase labels tracked +12% |

**Scale.** 1.25 (major third): 12 / 14 / 16 / 20 / 25 / 31 / 39 / 49 / 61 px. The tokens are in `docs/rotex-tokens.css`.

**Crate and type names** are always in mono: `rotex-core`, `Device<Vulkan>`, `Supports<RayTracing>`.

## 6. Imagery and pattern language

- **Isometric lattice.** Lines at +30°, −30° and vertical, the same geometry as the mark. Use it at 3–7% opacity on backgrounds (`patterns/`).
- **Ghost mark.** An oversized, cropped Rotor Cube at about 7–10% opacity, anchored to one edge.
- **Cube field.** A tiled grid of small marks at varying opacity. Use it for covers, stickers and video end-cards.
- **One warm glow.** A single soft amber radial in one corner. Never use more than one.
- **Diagrams.** Mermaid with `docs/mermaid-theme-dark.json` or `docs/mermaid-theme-light.json`. Amber borders mark the API, cyan marks data and shader flow, and green, amber and grey mark Native, Emulated and Absent.
- **Avoid** stock photos of GPUs, lens flares, neon cyberpunk looks and vendor logos.

## 7. Components

| Component | Location and details |
|---|---|
| Backend badges | `badges/backend/{dark,light}/`, name-only and with-status versions. The statuses are **active** (Vulkan, wgpu), **in progress** (D3D12) and **planned** (OpenGL, WebGL, Metal). Update the status when the code changes. |
| Capability tags | `badges/capability/`. These map one-to-one to `rotex_types::Support`. **Native** is a solid dot, **Emulated** a half dot, **Absent** a dash with a dashed outline. Never use colour alone, because the shape carries the meaning for colour-blind readers. |
| Crate header cards | `docs/crate-headers/`, 1200×300, dark and light. The layer stack on the right highlights the crate's layer. The `_template-header.svg` uses live text. |
| README banners | `github/rotex-readme-banner-{dark,light}.svg`. Use them with a `<picture>` element (see `github/org-profile-README.md`). |

## 8. Voice and tone

Rotex speaks like an engineer to engineers: **precise, honest and calm**.

- **Say what is native and what is emulated.** "Mesh shaders: native on Vulkan and D3D12, absent on WebGL2", not "works everywhere!"
- **Show code before claims.** One snippet beats three adjectives.
- **Use short sentences and active verbs.** Avoid hype words such as "revolutionary", "blazing" and "next-gen".
- **Be warm in the community.** Thank contributors by name and explain the reason behind every "no".

| Instead of | Write |
|---|---|
| "Blazing-fast next-gen renderer for every platform!!" | "One API over Vulkan, D3D12, GL and wgpu. Static dispatch, no vtable." |
| "Ray tracing support" | "Ray tracing: native on Vulkan (KHR) and D3D12 (DXR); absent on GL/WebGL." |

## 9. Taglines

1. **One API. Every GPU. Zero cost.** (recommended): it states the whole value proposition in six words and puts the three claims in order of importance.
2. *Write it once. Render it natively.*: friendlier, and good for talks and the website hero.
3. *The zero-cost graphics spine for Rust.*: precise, and good for crates.io and the GitHub description.

## 10. Asset index

See `README.md` at the root of the kit.
