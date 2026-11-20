<!-- Ironshade README header, Rotex layout (same order as rotex-core, rotex-shader, rotex-examples).
     Recommended hosting: add the kit's github/ folder to rotex-assets under brand/ironshade/ and pin the URLs
     to a tag or commit, exactly as the other Rotex repos pin rotex-assets. Replace <REF> with that tag or SHA.
     If you keep the files inside the ironshade repo instead, use docs/brand/ironshade-readme-banner-{dark,light}.svg. -->
<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/rotex-labs/rotex-assets/<REF>/brand/ironshade/github/ironshade-readme-banner-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/rotex-labs/rotex-assets/<REF>/brand/ironshade/github/ironshade-readme-banner-light.svg">
    <img alt="Ironshade: One shader source. Every target. Checked." src="https://raw.githubusercontent.com/rotex-labs/rotex-assets/<REF>/brand/ironshade/github/ironshade-readme-banner-light.svg" width="1200">
  </picture>
</p>

# ironshade

A pure-Rust shader compiler for Rotex Engine. It aims to compile the Slang™ shading language to SPIR-V, WGSL, GLSL ES, HLSL and legacy Direct3D bytecode through a pluggable backend HAL.

> [!WARNING]
> **Early development, pre-1.0.** M0 establishes the compiler contracts and the shader oracle harness.
> Shader emission starts in M1 (SPIR-V and WGSL). APIs, crate boundaries and the artifact format can change in any 0.x release.

## Overview

<!-- keep the existing Overview text; it already follows the Rotex voice: what it does, what it does not do -->

## Crates

| Package | Description | Version |
|---------|-------------|---------|
| [`ironshade`](crates/ironshade) | Umbrella library and the `ironshadec` CLI | 0.0.0 |
| [`ironshade-ir`](crates/ironshade-ir) | Ironshade Graph IR, shared by text and graph input | 0.0.0 |
| [`ironshade-caps`](crates/ironshade-caps) | Capability vocabulary and legalization planning | 0.0.0 |
| [`ironshade-target`](crates/ironshade-target) | Public backend HAL | 0.0.0 |
| [`ironshade-artifact`](crates/ironshade-artifact) | Versioned reflection and artifact format | 0.0.0 |
| [`ironshade-runtime`](crates/ironshade-runtime) | Live compilation service *(planned)* | 0.0.0 |

## Targets

<!-- reuse the Rotex badge style: solid = in progress / active, dashed = planned. Update when the code changes. -->
| Output | Environment | Status |
|---|---|---|
| SPIR-V | Vulkan | M1, in progress |
| WGSL | WebGPU / wgpu | M1, in progress |
| GLSL ES 3.00 | WebGL2 | planned (M3) |
| HLSL source | Direct3D | planned (M3) |
| DXIL via DXC | Direct3D 12 | planned (M4) |
| DXBC | Direct3D 10 / 11 | planned (M5) |
| SM 2/3 tokens | Direct3D 9 | planned (M6) |

## License

Licensed under either the [Apache License, Version 2.0](LICENSE-APACHE) or the [MIT license](LICENSE-MIT), at your option.

<sub>Part of <a href="https://github.com/rotex-labs">Rotex Engine</a> · Brand assets: <a href="https://github.com/rotex-labs/rotex-assets">rotex-assets</a> · Slang™ and the Slang logo are trademarks of the Khronos Group Inc. Ironshade is not affiliated with or endorsed by the Khronos Group.</sub>
