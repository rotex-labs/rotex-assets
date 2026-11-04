# Code blocks and diagrams

## Code blocks
- **Font:** JetBrains Mono, 14–15 px in docs and 28–32 px on slides, line height 1.55. Turn ligatures off (`font-variant-ligatures: none`) so `->`, `::` and `!=` read exactly as typed.
- **Container:** `--rx-code-bg` (#0E1324 dark / #F0F3F9 light), with a 1 px `--rx-border` and `--rx-radius-md` (10 px) corners. Padding is 16 × 24 px.
- **Label:** put the language or file name above the block in the uppercase mono label style (`.rx-label`, for example `RUST · src/main.rs`).
- **Syntax roles** (tokens in `rotex-tokens.css`):

| Role | Dark | Light |
|---|---|---|
| keyword (`fn`, `impl`, `let`) | Amber 300 #FFD06B | Amber 800 #8C4F00 |
| type / trait (`Device`, `Supports`) | Cyan 400 #3FD0F2 | Cyan 700 #0B7593 |
| string | Native 400 #34D399 | Native 700 #0E7A55 |
| number / const | Lilac #C4A5FF | #6B47B8 |
| comment | Graphite 400 #7C88A8, italic | Graphite 500 #5B6688, italic |
| function name | Paper, 600 weight | Graphite 950, 600 weight |

  Every pair passes WCAG AA (4.5:1 or better) on its code background.
- **Highlighting:** emphasise a line with a 3 px Amber 500 left rule and a 6% amber tint. Never use red or green for highlighting, because those colours mean capability status.
- **Content:** examples should compile. Use `B: Backend` generics rather than a concrete backend, unless the example is about a backend.

## Diagrams (Mermaid)
- **Config:** use `docs/mermaid-theme-dark.json` or `docs/mermaid-theme-light.json`.
  - CLI: `mmdc -i in.mmd -o out.svg -c docs/mermaid-theme-dark.json -b "#0B0F1C"`.
  - Inline: paste `themeVariables` into `%%{init: {...}}%%`.
- **Colour meaning:**

| Colour | Meaning |
|---|---|
| Amber border | the Rotex API and spine |
| Cyan | data, shaders and command flow |
| Dashed cluster | a crate or layer boundary |
| Green / amber / grey | Native / Emulated / Absent (add the word to the label as well) |

- **Layout:** top-to-bottom for stacks (app → graph → spine → backends) and left-to-right for pipelines. Keep each node to six words or fewer, with details in edge labels or notes.
- **Labels:** sentence case. Write crate names in backticks or mono.
- **Sample renders:** `docs/mermaid-samples/rotex-api-{dark,light}.png`.
