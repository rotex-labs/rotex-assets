# ironshadec terminal style

`ironshadec` speaks the Rotex voice in the terminal: precise, calm, no decoration. Color is a second channel, never the only one. Every line also carries a word (`error`, `warning`, `native`) or a symbol.

## Rules

- Honor `NO_COLOR`, `CLICOLOR=0`, `CLICOLOR_FORCE=1` and a `--color auto|always|never` flag. Default to `auto` (color only on a TTY).
- No banners, ASCII art or spinners on normal runs. `--version` prints `ironshadec 0.1.0 (Rotex Engine)` on one line.
- Bold for the severity word and the first line only. Never blink, never use background fills except the one-line summary chip below.
- Paths, crate names, entry points, profiles and capability names in **plain** text (they are mono already in a terminal); highlight only the span the diagnostic points at.
- Diagnostics follow the rustc layout (`error[IS0042]: message`, `--> file:line:col`, gutter `|`, `= note:` and `= help:` lines), so Rust users read them without learning anything new.

## Palette

Truecolor values come from the brand. The 256-color and 16-color fallbacks are chosen to read on both dark and light terminal themes.

| Role | Used for | Truecolor (dark term) | Truecolor (light term) | 256 | 16 |
|---|---|---|---|---|---|
| error | `error`, failed target | `#F87171` | `#B42323` | 203 | red |
| warning | `warning`, fallback chosen | `#FFBE3B` Amber 400 | `#8C4F00` Amber 800 | 214 | yellow |
| note / help | `note`, `help`, `-->` arrow, gutter | `#7FE3FA` Shade Cyan 300 | `#0B7593` Cyan 700 | 81 | cyan |
| accent | `Compiling`, `Emitting`, target names in status lines | `#3FD0F2` Shade Cyan 400 | `#0B7593` | 45 | bright cyan |
| success | `Finished` | `#34D399` Native 400 | `#0E7A55` | 78 | green |
| muted | timings, hashes, paths in status lines | `#7C88A8` Graphite 400 | `#5B6688` | 103 | bright black |

Capability states use exactly the Rotex mapping, with a symbol as well as a color:

| State | Symbol | Color |
|---|---|---|
| Native | `●` | success green |
| Lowered | `◐` | accent cyan |
| Emulated | `◐` | warning amber (needs explicit policy approval, say so) |
| Unsupported | `–` | error red |
| Unknown | `?` | muted |

On terminals without Unicode (Windows console without UTF-8, `TERM=dumb`), fall back to `[N]`, `[L]`, `[E]`, `[-]`, `[?]`.

## Status-line shape

```
   Compiling nova_particle.slang (vertexMain, fragmentMain)
    Emitting spirv-1.5  ● 42 ops  0.8 ms
    Emitting wgsl       ● 42 ops  1.1 ms
warning[IS0107]: `WaveActiveSum` lowered to a workgroup reduction on wgsl
  --> shaders/nova_particle.slang:88:17
   |
88 |     let s = WaveActiveSum(v);
   |             ^^^^^^^^^^^^^^^^ Emulated on wgsl, Native on spirv
   = help: allow with `--policy emulate=wave-ops` or gate the call on `Supports<WaveOps>`
    Finished 2 targets in 3.4 ms (1 warning)
```

The right-aligned verbs (`Compiling`, `Emitting`, `Finished`) follow Cargo, width 12, so `ironshadec` output sits naturally next to `cargo build` output.

## Rust snippet (anstyle + anstream)

```rust
use anstyle::{AnsiColor, Color, RgbColor, Style};

pub struct Theme { pub error: Style, pub warning: Style, pub note: Style, pub accent: Style, pub success: Style, pub muted: Style }

impl Theme {
    /// Truecolor values for dark terminals (the common default). anstream strips styles when
    /// NO_COLOR is set or stdout is not a TTY.
    pub fn truecolor() -> Self {
        let rgb = |r, g, b| Some(Color::Rgb(RgbColor(r, g, b)));
        Self {
            error:   Style::new().fg_color(rgb(0xF8, 0x71, 0x71)).bold(),
            warning: Style::new().fg_color(rgb(0xFF, 0xBE, 0x3B)).bold(),
            note:    Style::new().fg_color(rgb(0x7F, 0xE3, 0xFA)).bold(),
            accent:  Style::new().fg_color(rgb(0x3F, 0xD0, 0xF2)).bold(),
            success: Style::new().fg_color(rgb(0x34, 0xD3, 0x99)).bold(),
            muted:   Style::new().fg_color(rgb(0x7C, 0x88, 0xA8)),
        }
    }
    /// Safe on any background: 16-color ANSI, used unless COLORTERM=truecolor|24bit.
    pub fn ansi16() -> Self {
        let c = |a| Some(Color::Ansi(a));
        Self {
            error:   Style::new().fg_color(c(AnsiColor::Red)).bold(),
            warning: Style::new().fg_color(c(AnsiColor::Yellow)).bold(),
            note:    Style::new().fg_color(c(AnsiColor::Cyan)).bold(),
            accent:  Style::new().fg_color(c(AnsiColor::BrightCyan)).bold(),
            success: Style::new().fg_color(c(AnsiColor::Green)).bold(),
            muted:   Style::new().fg_color(c(AnsiColor::BrightBlack)),
        }
    }
}
// usage: anstream::eprintln!("{}error{}: {msg}", t.error.render(), t.error.render_reset());
```

If you render diagnostics with `annotate-snippets` or `codespan-reporting`, map their severity styles to this table rather than using their defaults.

Sample paths use the `.slang` extension for shader source. Slang™ and the Slang logo are trademarks of the Khronos Group Inc.
