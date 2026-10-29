# Third-party licences

Generated from the Cargo dependency graph by `tools/third_party.py` in the app repository; a release fails if any
licence is outside the allow-list (MIT, Apache-2.0, BSD, ISC, MPL-2.0, Zlib, OFL-1.1 and similar).

LocalCast is built with the open-source components below.

## Fonts

PDF output uses Noto Sans, Noto Serif, Noto Sans Mono, Noto Naskh Arabic and Noto Sans SC, bundled in the app under the SIL Open Font License 1.1 (Copyright The Noto Project Authors; licence texts in `crates/localcast-core/fonts/`). Scripts they do not cover fall back to fonts installed with Windows. The PDF renderer bundles the Foxit standard fonts (BSD licence).

## Crates

| Crate | Version | Licence | Source |
| --- | --- | --- | --- |
| accesskit | 0.24.1 | MIT OR Apache-2.0 | https://github.com/AccessKit/accesskit |
| accesskit_consumer | 0.35.0 | MIT OR Apache-2.0 | https://github.com/AccessKit/accesskit |
| accesskit_windows | 0.32.1 | MIT OR Apache-2.0 | https://github.com/AccessKit/accesskit |
| accesskit_winit | 0.32.2 | Apache-2.0 | https://github.com/AccessKit/accesskit |
| adler2 | 2.0.1 | 0BSD OR MIT OR Apache-2.0 | https://github.com/oyvindln/adler2 |
| aes | 0.9.2 | MIT OR Apache-2.0 | https://github.com/RustCrypto/block-ciphers |
| ahash | 0.8.12 | MIT OR Apache-2.0 | https://github.com/tkaitchuck/ahash |
| aho-corasick | 1.1.5 | Unlicense OR MIT | https://github.com/BurntSushi/aho-corasick |
| alloc-no-stdlib | 2.0.4 | BSD-3-Clause | https://github.com/dropbox/rust-alloc-no-stdlib |
| alloc-stdlib | 0.2.4 | BSD-3-Clause | https://github.com/dropbox/rust-alloc-no-stdlib |
| ammonia | 4.2.3 | MIT OR Apache-2.0 | https://github.com/rust-ammonia/ammonia |
| approx | 0.5.1 | Apache-2.0 | https://github.com/brendanzab/approx |
| ar_archive_writer | 0.5.3 | Apache-2.0 WITH LLVM-exception | https://github.com/rust-lang/ar_archive_writer |
| arboard | 3.7.0 | MIT OR Apache-2.0 | https://github.com/1Password/arboard |
| arrayref | 0.3.9 | BSD-2-Clause | https://github.com/droundy/arrayref |
| arrayvec | 0.7.8 | MIT OR Apache-2.0 | https://github.com/bluss/arrayvec |
| atoi_simd | 0.18.1 | MIT OR Apache-2.0 | https://github.com/RoDmitry/atoi_simd |
| autocfg | 1.5.1 | Apache-2.0 OR MIT | https://github.com/cuviper/autocfg |
| az | 1.3.0 | MIT/Apache-2.0 | https://gitlab.com/tspiteri/az |
| base64 | 0.22.1 | MIT OR Apache-2.0 | https://github.com/marshallpierce/rust-base64 |
| base64 | 0.23.1 | MIT OR Apache-2.0 | https://github.com/marshallpierce/rust-base64 |
| biblatex | 0.12.0 | MIT OR Apache-2.0 | https://github.com/typst/biblatex |
| bincode | 1.3.3 | MIT | https://github.com/servo/bincode |
| bit-set | 0.8.0 | Apache-2.0 OR MIT | https://github.com/contain-rs/bit-set |
| bit-vec | 0.8.0 | Apache-2.0 OR MIT | https://github.com/contain-rs/bit-vec |
| bitflags | 2.13.2 | MIT OR Apache-2.0 | https://github.com/bitflags/bitflags |
| block-buffer | 0.12.1 | MIT OR Apache-2.0 | https://github.com/RustCrypto/utils |
| block-padding | 0.4.2 | MIT OR Apache-2.0 | https://github.com/RustCrypto/utils |
| brotli | 8.0.4 | BSD-3-Clause AND MIT | https://github.com/dropbox/rust-brotli |
| brotli-decompressor | 5.0.3 | BSD-3-Clause/MIT | https://github.com/dropbox/rust-brotli-decompressor |
| bumpalo | 3.20.3 | MIT OR Apache-2.0 | https://github.com/fitzgen/bumpalo |
| by_address | 1.2.1 | MIT OR Apache-2.0 | https://github.com/mbrubeck/by_address |
| bytemuck | 1.25.2 | Zlib OR Apache-2.0 OR MIT | https://github.com/Lokathor/bytemuck |
| bytemuck_derive | 1.12.1 | Zlib OR Apache-2.0 OR MIT | https://github.com/Lokathor/bytemuck |
| byteorder | 1.5.0 | Unlicense OR MIT | https://github.com/BurntSushi/byteorder |
| byteorder-lite | 0.1.0 | Unlicense OR MIT | https://github.com/image-rs/byteorder-lite |
| calamine | 0.36.1 | MIT | https://github.com/tafia/calamine |
| cbc | 0.2.1 | MIT OR Apache-2.0 | https://github.com/RustCrypto/block-modes |
| cc | 1.10.0 | MIT OR Apache-2.0 | https://github.com/rust-lang/cc-rs |
| cfg-if | 1.0.5 | MIT OR Apache-2.0 | https://github.com/rust-lang/cfg-if |
| cfg_aliases | 0.2.2 | MIT | https://github.com/katharostech/cfg_aliases |
| chacha20 | 0.10.2 | MIT OR Apache-2.0 | https://github.com/RustCrypto/stream-ciphers |
| chinese-number | 0.7.8 | MIT | https://github.com/magiclen/chinese-number |
| chinese-variant | 1.1.6 | MIT | https://github.com/magiclen/chinese-variant |
| chrono | 0.4.45 | MIT OR Apache-2.0 | https://github.com/chronotope/chrono |
| ciborium | 0.2.2 | Apache-2.0 | https://github.com/enarx/ciborium |
| ciborium-io | 0.2.2 | Apache-2.0 | https://github.com/enarx/ciborium |
| ciborium-ll | 0.2.2 | Apache-2.0 | https://github.com/enarx/ciborium |
| cipher | 0.5.2 | MIT OR Apache-2.0 | https://github.com/RustCrypto/traits |
| citationberg | 0.7.0 | MIT OR Apache-2.0 | https://github.com/typst/citationberg |
| clipboard-win | 5.4.3 | BSL-1.0 | https://github.com/DoumanAsh/clipboard-win |
| cobs | 0.3.0 | MIT OR Apache-2.0 | https://github.com/jamesmunns/cobs.rs |
| codepage | 0.1.3 | Apache-2.0 OR MIT | https://github.com/hsivonen/codepage |
| codex | 0.3.0 | Apache-2.0 | https://github.com/typst/codex |
| color | 0.3.3 | Apache-2.0 OR MIT | https://github.com/linebender/color |
| color_quant | 1.1.0 | MIT | https://github.com/image-rs/color_quant.git |
| comemo | 0.5.1 | MIT OR Apache-2.0 | https://github.com/typst/comemo |
| comemo-macros | 0.5.1 | MIT OR Apache-2.0 | https://github.com/typst/comemo |
| const-oid | 0.10.2 | Apache-2.0 OR MIT | https://github.com/RustCrypto/formats |
| core_detect | 1.0.0 | MIT/Apache-2.0 | https://github.com/thomcc/core_detect |
| core_maths | 0.1.1 | MIT | https://github.com/robertbastian/core_maths |
| cpubits | 0.1.1 | MIT OR Apache-2.0 | https://github.com/RustCrypto/utils |
| cpufeatures | 0.3.1 | MIT OR Apache-2.0 | https://github.com/RustCrypto/utils |
| crc32fast | 1.5.3 | MIT OR Apache-2.0 | https://github.com/srijs/rust-crc32fast |
| crossbeam-deque | 0.8.8 | MIT OR Apache-2.0 | https://github.com/crossbeam-rs/crossbeam |
| crossbeam-epoch | 0.9.21 | MIT OR Apache-2.0 | https://github.com/crossbeam-rs/crossbeam |
| crossbeam-utils | 0.8.23 | MIT OR Apache-2.0 | https://github.com/crossbeam-rs/crossbeam |
| crypto-common | 0.2.2 | MIT OR Apache-2.0 | https://github.com/RustCrypto/traits |
| cssparser | 0.38.0 | MPL-2.0 | https://github.com/servo/rust-cssparser |
| csv | 1.4.0 | Unlicense/MIT | https://github.com/BurntSushi/rust-csv |
| csv-core | 0.1.13 | Unlicense/MIT | https://github.com/BurntSushi/rust-csv |
| cursor-icon | 1.2.0 | MIT OR Apache-2.0 OR Zlib | https://github.com/rust-windowing/cursor-icon |
| curve25519-dalek | 5.0.0 | BSD-3-Clause | https://github.com/dalek-cryptography/curve25519-dalek/tree/main/curve25519-dalek |
| curve25519-dalek-derive | 0.1.1 | MIT/Apache-2.0 | https://github.com/dalek-cryptography/curve25519-dalek |
| data-url | 0.3.2 | MIT OR Apache-2.0 | https://github.com/servo/rust-url |
| debug_unsafe | 0.1.4 | MIT OR Apache-2.0 | https://github.com/RoDmitry/debug_unsafe |
| deranged | 0.5.9 | MIT OR Apache-2.0 | https://github.com/jhpratt/deranged |
| digest | 0.11.3 | MIT OR Apache-2.0 | https://github.com/RustCrypto/traits |
| dirs | 6.0.0 | MIT OR Apache-2.0 | https://github.com/soc/dirs-rs |
| dirs-sys | 0.5.0 | MIT OR Apache-2.0 | https://github.com/dirs-dev/dirs-sys-rs |
| displaydoc | 0.2.7 | MIT OR Apache-2.0 | https://github.com/yaahc/displaydoc |
| document-features | 0.2.12 | MIT OR Apache-2.0 | https://github.com/slint-ui/document-features |
| dpi | 0.1.2 | Apache-2.0 AND MIT | https://github.com/rust-windowing/winit |
| dtoa | 1.0.11 | MIT OR Apache-2.0 | https://github.com/dtolnay/dtoa |
| dtoa-short | 0.3.5 | MPL-2.0 | https://github.com/upsuper/dtoa-short |
| ecb | 0.2.1 | MIT OR Apache-2.0 | https://github.com/RustCrypto/block-modes |
| ecolor | 0.36.2 | MIT OR Apache-2.0 | https://github.com/emilk/egui |
| ecow | 0.2.6 | MIT OR Apache-2.0 | https://github.com/typst/ecow |
| ed25519 | 3.0.0 | Apache-2.0 OR MIT | https://github.com/RustCrypto/signatures |
| ed25519-dalek | 3.0.0 | BSD-3-Clause | https://github.com/dalek-cryptography/curve25519-dalek/tree/main/ed25519-dalek |
| eframe | 0.36.2 | MIT OR Apache-2.0 | https://github.com/emilk/egui/tree/main/crates/eframe |
| egui | 0.36.2 | MIT OR Apache-2.0 | https://github.com/emilk/egui |
| egui-winit | 0.36.2 | MIT OR Apache-2.0 | https://github.com/emilk/egui/tree/main/crates/egui-winit |
| egui_commonmark | 0.25.0 | MIT OR Apache-2.0 | https://github.com/lampsitter/egui_commonmark |
| egui_commonmark_backend | 0.25.0 | MIT OR Apache-2.0 | https://github.com/lampsitter/egui_commonmark |
| egui_extras | 0.36.2 | MIT OR Apache-2.0 | https://github.com/emilk/egui |
| egui_glow | 0.36.2 | MIT OR Apache-2.0 | https://github.com/emilk/egui/tree/main/crates/egui_glow |
| either | 1.19.0 | MIT OR Apache-2.0 | https://github.com/rayon-rs/either |
| emath | 0.36.2 | MIT OR Apache-2.0 | https://github.com/emilk/egui/tree/main/crates/emath |
| embed-resource | 3.0.12 | MIT | https://github.com/nabijaczleweli/rust-embed-resource |
| encoding_rs | 0.8.42 | (Apache-2.0 OR MIT) AND BSD-3-Clause | https://github.com/hsivonen/encoding_rs |
| enum-map | 2.7.3 | MIT OR Apache-2.0 | https://codeberg.org/xfix/enum-map |
| enum-map-derive | 0.17.0 | MIT OR Apache-2.0 | https://codeberg.org/xfix/enum-map |
| enum-ordinalize | 4.3.2 | MIT | https://github.com/magiclen/enum-ordinalize |
| enum-ordinalize-derive | 4.3.2 | MIT | https://github.com/magiclen/enum-ordinalize |
| enumn | 0.1.14 | MIT OR Apache-2.0 | https://github.com/dtolnay/enumn |
| epaint | 0.36.2 | MIT OR Apache-2.0 | https://github.com/emilk/egui/tree/main/crates/epaint |
| epaint_default_fonts | 0.36.2 | (MIT OR Apache-2.0) AND OFL-1.1 AND Ubuntu-font-1.0 | https://github.com/emilk/egui/tree/main/crates/epaint_default_fonts |
| equivalent | 1.0.3 | Apache-2.0 OR MIT | https://github.com/indexmap-rs/equivalent |
| error-code | 3.4.0 | BSL-1.0 | https://github.com/DoumanAsh/error-code |
| euclid | 0.22.14 | MIT OR Apache-2.0 | https://github.com/servo/euclid |
| fancy-regex | 0.16.2 | MIT | https://github.com/fancy-regex/fancy-regex |
| fast-float2 | 0.2.4 | MIT OR Apache-2.0 | https://github.com/Alexhuszagh/fast-float-rust |
| fastrand | 2.5.0 | Apache-2.0 OR MIT | https://github.com/smol-rs/fastrand |
| fax | 0.2.7 | MIT | https://github.com/pdf-rs/fax |
| fdeflate | 0.3.7 | MIT OR Apache-2.0 | https://github.com/image-rs/fdeflate |
| fearless_simd | 0.4.1 | Apache-2.0 OR MIT | https://github.com/linebender/fearless_simd |
| find-msvc-tools | 0.1.15 | MIT OR Apache-2.0 | https://github.com/rust-lang/cc-rs |
| flate2 | 1.1.10 | MIT OR Apache-2.0 | https://github.com/rust-lang/flate2-rs |
| float-cmp | 0.9.0 | MIT | https://github.com/mikedilger/float-cmp |
| fnv | 1.0.7 | Apache-2.0 / MIT | https://github.com/servo/rust-fnv |
| foldhash | 0.2.0 | Zlib | https://github.com/orlp/foldhash |
| font-types | 0.11.3 | MIT OR Apache-2.0 | https://github.com/googlefonts/fontations |
| font-types | 0.12.7 | MIT OR Apache-2.0 | https://github.com/googlefonts/fontations |
| fontdb | 0.23.0 | MIT | https://github.com/RazrFalcon/fontdb |
| form_urlencoded | 1.2.2 | MIT OR Apache-2.0 | https://github.com/servo/rust-url |
| getrandom | 0.3.4 | MIT OR Apache-2.0 | https://github.com/rust-random/getrandom |
| getrandom | 0.4.3 | MIT OR Apache-2.0 | https://github.com/rust-random/getrandom |
| gif | 0.14.2 | MIT OR Apache-2.0 | https://github.com/image-rs/image-gif |
| gl_generator | 0.14.0 | Apache-2.0 | https://github.com/brendanzab/gl-rs/ |
| glidesort | 0.1.2 | MIT OR Apache-2.0 | https://github.com/orlp/glidesort |
| glifo | 0.1.1 | Apache-2.0 OR MIT | https://github.com/linebender/vello |
| glifo | 0.2.0 | Apache-2.0 OR MIT | https://github.com/linebender/vello |
| glob | 0.3.4 | MIT OR Apache-2.0 | https://github.com/rust-lang/glob |
| glow | 0.17.0 | MIT OR Apache-2.0 OR Zlib | https://github.com/grovesNL/glow |
| glutin | 0.32.3 | Apache-2.0 | https://github.com/rust-windowing/glutin |
| glutin-winit | 0.5.0 | MIT | https://github.com/rust-windowing/glutin |
| glutin_egl_sys | 0.7.1 | Apache-2.0 | https://github.com/rust-windowing/glutin |
| glutin_wgl_sys | 0.6.1 | Apache-2.0 | https://github.com/rust-windowing/glutin |
| guillotiere | 0.7.0 | MIT/Apache-2.0 | https://github.com/nical/guillotiere |
| half | 2.7.1 | MIT OR Apache-2.0 | https://github.com/VoidStarKat/half-rs |
| harfrust | 0.12.0 | MIT | https://github.com/harfbuzz/harfrust |
| hashbrown | 0.16.1 | MIT OR Apache-2.0 | https://github.com/rust-lang/hashbrown |
| hashbrown | 0.17.1 | MIT OR Apache-2.0 | https://github.com/rust-lang/hashbrown |
| hayagriva | 0.10.1 | MIT OR Apache-2.0 | https://github.com/typst/hayagriva |
| hayro | 0.7.1 | Apache-2.0 OR MIT | https://github.com/LaurenzV/hayro |
| hayro-ccitt | 0.3.0 | Apache-2.0 OR MIT | https://github.com/LaurenzV/hayro |
| hayro-cmap | 0.1.0 | Apache-2.0 OR MIT | https://github.com/LaurenzV/hayro |
| hayro-interpret | 0.7.0 | Apache-2.0 OR MIT | https://github.com/LaurenzV/hayro |
| hayro-jbig2 | 0.3.0 | Apache-2.0 OR MIT | https://github.com/LaurenzV/hayro |
| hayro-jpeg2000 | 0.3.5 | Apache-2.0 OR MIT | https://github.com/LaurenzV/hayro |
| hayro-postscript | 0.1.0 | Apache-2.0 OR MIT | https://github.com/LaurenzV/hayro |
| hayro-svg | 0.7.0 | Apache-2.0 OR MIT | https://github.com/LaurenzV/hayro |
| hayro-syntax | 0.7.2 | Apache-2.0 OR MIT | https://github.com/LaurenzV/hayro |
| hayro-write | 0.7.0 | Apache-2.0 OR MIT | https://github.com/LaurenzV/hayro |
| heck | 0.5.0 | MIT OR Apache-2.0 | https://github.com/withoutboats/heck |
| htmd | 0.5.5 | Apache-2.0 | https://github.com/letmutex/htmd |
| html5ever | 0.38.0 | MIT OR Apache-2.0 | https://github.com/servo/html5ever |
| html5ever | 0.40.1 | MIT OR Apache-2.0 | https://github.com/servo/html5ever |
| hybrid-array | 0.4.15 | MIT OR Apache-2.0 | https://github.com/RustCrypto/hybrid-array |
| hypher | 0.1.8 | MIT OR Apache-2.0 | https://github.com/typst/hypher |
| icu_collator | 2.4.0 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| icu_collator_data | 2.4.0 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| icu_collections | 2.4.0 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| icu_locale | 2.4.0 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| icu_locale_core | 2.4.0 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| icu_locale_data | 2.4.0 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| icu_locale_fallback | 2.4.0 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| icu_locale_fallback_data | 2.4.0 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| icu_normalizer | 2.4.0 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| icu_normalizer_data | 2.4.0 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| icu_properties | 2.4.0 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| icu_properties_data | 2.4.0 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| icu_provider | 2.4.0 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| icu_provider_blob | 2.4.0 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| icu_segmenter | 2.4.0 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| icu_segmenter_data | 2.4.0 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| idna | 1.1.0 | MIT OR Apache-2.0 | https://github.com/servo/rust-url/ |
| idna_adapter | 1.2.2 | Apache-2.0 OR MIT | https://github.com/hsivonen/idna_adapter |
| image | 0.25.10 | MIT OR Apache-2.0 | https://github.com/image-rs/image |
| image-webp | 0.2.4 | MIT OR Apache-2.0 | https://github.com/image-rs/image-webp |
| imagesize | 0.14.0 | MIT | https://github.com/Roughsketch/imagesize |
| indexmap | 2.14.2 | Apache-2.0 OR MIT | https://github.com/indexmap-rs/indexmap |
| infer | 0.19.0 | MIT | https://github.com/bojand/infer |
| inout | 0.2.5 | MIT OR Apache-2.0 | https://github.com/RustCrypto/utils |
| itertools | 0.15.0 | MIT OR Apache-2.0 | https://github.com/rust-itertools/itertools |
| itoa | 1.0.18 | MIT OR Apache-2.0 | https://github.com/dtolnay/itoa |
| jobserver | 0.1.35 | MIT OR Apache-2.0 | https://github.com/rust-lang/jobserver-rs |
| kamadak-exif | 0.6.1 | BSD-2-Clause | https://github.com/kamadak/exif-rs |
| khronos_api | 3.1.0 | Apache-2.0 | https://github.com/brendanzab/gl-rs/ |
| krilla | 0.8.2 | MIT OR Apache-2.0 | https://github.com/LaurenzV/krilla |
| krilla-svg | 0.8.1 | MIT OR Apache-2.0 | https://github.com/LaurenzV/krilla |
| kurbo | 0.13.1 | Apache-2.0 OR MIT | https://github.com/linebender/kurbo |
| libc | 0.2.191 | MIT OR Apache-2.0 | https://github.com/rust-lang/libc |
| libdeflate-sys | 1.26.1 | Apache-2.0 | https://github.com/libdeflater/libdeflater |
| libdeflater | 1.26.1 | Apache-2.0 | https://github.com/libdeflater/libdeflater |
| libloading | 0.8.9 | ISC | https://github.com/nagisa/rust_libloading/ |
| libm | 0.2.16 | MIT | https://github.com/rust-lang/compiler-builtins |
| libwebp-sys | 0.9.6 | MIT | https://github.com/NoXF/libwebp-sys |
| linebender_resource_handle | 0.1.1 | Apache-2.0 OR MIT | https://github.com/linebender/raw_resource_handle |
| linked-hash-map | 0.5.6 | MIT/Apache-2.0 | https://github.com/contain-rs/linked-hash-map |
| lipsum | 0.9.1 | MIT | https://github.com/mgeisler/lipsum/ |
| litemap | 0.8.3 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| litrs | 1.0.1 | MIT OR Apache-2.0 | https://github.com/LukasKalbertodt/litrs |
| lock_api | 0.4.14 | MIT OR Apache-2.0 | https://github.com/Amanieu/parking_lot |
| log | 0.4.34 | MIT OR Apache-2.0 | https://github.com/rust-lang/log |
| lopdf | 0.45.0 | MIT | https://github.com/J-F-Liu/lopdf.git |
| maplit | 1.0.2 | MIT/Apache-2.0 | https://github.com/bluss/maplit |
| markup5ever | 0.38.0 | MIT OR Apache-2.0 | https://github.com/servo/html5ever |
| markup5ever | 0.40.0 | MIT OR Apache-2.0 | https://github.com/servo/html5ever |
| markup5ever_rcdom | 0.38.0+unofficial | MIT OR Apache-2.0 | https://github.com/servo/html5ever |
| md-5 | 0.11.0 | MIT OR Apache-2.0 | https://github.com/RustCrypto/hashes |
| memchr | 2.8.3 | Unlicense OR MIT | https://github.com/BurntSushi/memchr |
| memmap2 | 0.9.12 | MIT OR Apache-2.0 | https://github.com/RazrFalcon/memmap2-rs |
| miniz_oxide | 0.8.9 | MIT OR Zlib OR Apache-2.0 | https://github.com/Frommi/miniz_oxide/tree/master/miniz_oxide |
| miniz_oxide | 0.9.1 | MIT OR Zlib OR Apache-2.0 | https://github.com/Frommi/miniz_oxide/tree/master/miniz_oxide |
| moxcms | 0.8.1 | BSD-3-Clause OR Apache-2.0 | https://github.com/awxkee/moxcms.git |
| multiversion_no_op | 1.0.0 | Apache-2.0 OR MIT | https://github.com/hsivonen/multiversion_no_op |
| mutate_once | 0.1.2 | BSD-2-Clause | https://github.com/kamadak/mutate_once-rs |
| new_debug_unreachable | 1.0.6 | MIT | https://github.com/mbrubeck/rust-debug-unreachable |
| nohash-hasher | 0.2.0 | Apache-2.0 OR MIT | https://github.com/paritytech/nohash-hasher |
| nom | 8.0.0 | MIT | https://github.com/rust-bakery/nom |
| num-bigint | 0.4.8 | MIT OR Apache-2.0 | https://github.com/rust-num/num-bigint |
| num-conv | 0.2.2 | MIT OR Apache-2.0 | https://github.com/jhpratt/num-conv |
| num-integer | 0.1.47 | MIT OR Apache-2.0 | https://github.com/rust-num/num-integer |
| num-traits | 0.2.19 | MIT OR Apache-2.0 | https://github.com/rust-num/num-traits |
| object | 0.39.1 | Apache-2.0 OR MIT | https://github.com/gimli-rs/object |
| once_cell | 1.21.4 | MIT OR Apache-2.0 | https://github.com/matklad/once_cell |
| option-ext | 0.2.0 | MPL-2.0 | https://github.com/soc/option-ext.git |
| oxipng | 10.2.1 | MIT | https://github.com/oxipng/oxipng |
| palette | 0.7.7 | MIT OR Apache-2.0 | https://github.com/Ogeon/palette |
| palette_derive | 0.7.7 | MIT OR Apache-2.0 | https://github.com/Ogeon/palette |
| palette_math | 0.7.7 | MIT OR Apache-2.0 | https://github.com/Ogeon/palette |
| parking_lot | 0.12.5 | MIT OR Apache-2.0 | https://github.com/Amanieu/parking_lot |
| parking_lot_core | 0.9.12 | MIT OR Apache-2.0 | https://github.com/Amanieu/parking_lot |
| paste | 1.0.15 | MIT OR Apache-2.0 | https://github.com/dtolnay/paste |
| pdf-writer | 0.15.0 | MIT OR Apache-2.0 | https://github.com/typst/pdf-writer |
| peniko | 0.6.1 | Apache-2.0 OR MIT | https://github.com/linebender/peniko |
| percent-encoding | 2.3.2 | MIT OR Apache-2.0 | https://github.com/servo/rust-url/ |
| phf | 0.13.1 | MIT | https://github.com/rust-phf/rust-phf |
| phf | 0.14.0 | MIT | https://github.com/rust-phf/rust-phf |
| phf_codegen | 0.13.1 | MIT | https://github.com/rust-phf/rust-phf |
| phf_codegen | 0.14.0 | MIT | https://github.com/rust-phf/rust-phf |
| phf_generator | 0.13.1 | MIT | https://github.com/rust-phf/rust-phf |
| phf_generator | 0.14.0 | MIT | https://github.com/rust-phf/rust-phf |
| phf_macros | 0.13.1 | MIT | https://github.com/rust-phf/rust-phf |
| phf_shared | 0.13.1 | MIT | https://github.com/rust-phf/rust-phf |
| phf_shared | 0.14.0 | MIT | https://github.com/rust-phf/rust-phf |
| pic-scale | 0.7.12 | BSD-3-Clause OR Apache-2.0 | https://github.com/awxkee/pic-scale |
| pico-args | 0.5.0 | MIT | https://github.com/RazrFalcon/pico-args |
| pin-project-lite | 0.2.17 | Apache-2.0 OR MIT | https://github.com/taiki-e/pin-project-lite |
| pixglyph | 0.6.1 | Apache-2.0 | https://github.com/typst/pixglyph |
| plist | 1.10.3 | MIT | https://github.com/ebarnard/rust-plist/ |
| png | 0.18.1 | MIT OR Apache-2.0 | https://github.com/image-rs/image-png |
| polycool | 0.4.0 | MIT OR Apache-2.0 | https://github.com/linebender/kurbo |
| portable-atomic | 1.15.0 | Apache-2.0 OR MIT | https://github.com/taiki-e/portable-atomic |
| postcard | 1.1.3 | MIT OR Apache-2.0 | https://github.com/jamesmunns/postcard |
| potential_utf | 0.1.6 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| powerfmt | 0.2.1 | MIT OR Apache-2.0 | https://github.com/jhpratt/powerfmt |
| ppv-lite86 | 0.2.21 | MIT OR Apache-2.0 | https://github.com/cryptocorrosion/cryptocorrosion |
| precomputed-hash | 0.1.1 | MIT | https://github.com/emilio/precomputed-hash |
| proc-macro-hack | 0.5.20+deprecated | MIT OR Apache-2.0 | https://github.com/dtolnay/proc-macro-hack |
| proc-macro2 | 1.0.107 | MIT OR Apache-2.0 | https://github.com/dtolnay/proc-macro2 |
| profiling | 1.0.18 | MIT OR Apache-2.0 | https://github.com/aclysma/profiling |
| psm | 0.1.32 | MIT OR Apache-2.0 | https://github.com/rust-lang/stacker/ |
| pulldown-cmark | 0.13.4 | MIT | https://github.com/raphlinus/pulldown-cmark |
| pulldown-cmark-escape | 0.11.0 | MIT | https://github.com/raphlinus/pulldown-cmark |
| pxfm | 0.1.30 | BSD-3-Clause OR Apache-2.0 | https://github.com/awxkee/pxfm |
| quick-error | 2.0.1 | MIT/Apache-2.0 | http://github.com/tailhook/quick-error |
| quick-xml | 0.38.4 | MIT | https://github.com/tafia/quick-xml |
| quick-xml | 0.41.0 | MIT | https://github.com/tafia/quick-xml |
| quick-xml | 0.42.0 | MIT | https://github.com/tafia/quick-xml |
| quote | 1.0.47 | MIT OR Apache-2.0 | https://github.com/dtolnay/quote |
| rand | 0.10.3 | MIT OR Apache-2.0 | https://github.com/rust-random/rand |
| rand | 0.8.8 | MIT OR Apache-2.0 | https://github.com/rust-random/rand |
| rand_chacha | 0.3.1 | MIT OR Apache-2.0 | https://github.com/rust-random/rand |
| rand_core | 0.10.1 | MIT OR Apache-2.0 | https://github.com/rust-random/rand_core |
| rand_core | 0.6.4 | MIT OR Apache-2.0 | https://github.com/rust-random/rand |
| rangemap | 1.8.0 | MIT/Apache-2.0 | https://github.com/jeffparsons/rangemap |
| raw-window-handle | 0.6.2 | MIT OR Apache-2.0 OR Zlib | https://github.com/rust-windowing/raw-window-handle |
| rayon | 1.12.0 | MIT OR Apache-2.0 | https://github.com/rayon-rs/rayon |
| rayon-core | 1.13.0 | MIT OR Apache-2.0 | https://github.com/rayon-rs/rayon |
| read-fonts | 0.39.2 | MIT OR Apache-2.0 | https://github.com/googlefonts/fontations |
| read-fonts | 0.41.0 | MIT OR Apache-2.0 | https://github.com/googlefonts/fontations |
| regex | 1.13.1 | MIT OR Apache-2.0 | https://github.com/rust-lang/regex |
| regex-automata | 0.4.18 | MIT OR Apache-2.0 | https://github.com/rust-lang/regex |
| regex-syntax | 0.8.11 | MIT OR Apache-2.0 | https://github.com/rust-lang/regex |
| resvg | 0.47.0 | Apache-2.0 OR MIT | https://github.com/linebender/resvg |
| rfd | 0.17.2 | MIT | https://github.com/PolyMeilex/rfd |
| rgb | 0.8.53 | MIT | https://github.com/kornelski/rust-rgb |
| roman-numerals-rs | 3.1.0 | 0BSD OR CC0-1.0 | https://github.com/AA-Turner/roman-numerals/ |
| ron | 0.12.2 | MIT OR Apache-2.0 | https://github.com/ron-rs/ron |
| roxmltree | 0.21.2 | MIT OR Apache-2.0 | https://github.com/RazrFalcon/roxmltree |
| rust_decimal | 1.43.0 | MIT | https://github.com/paupino/rust-decimal |
| rust_xlsxwriter | 0.99.1 | MIT OR Apache-2.0 | https://github.com/jmcnamara/rust_xlsxwriter |
| rustc-hash | 2.1.3 | Apache-2.0 OR MIT | https://github.com/rust-lang/rustc-hash |
| rustc_version | 0.4.1 | MIT OR Apache-2.0 | https://github.com/djc/rustc-version-rs |
| rustversion | 1.0.23 | MIT OR Apache-2.0 | https://github.com/dtolnay/rustversion |
| rustybuzz | 0.20.1 | MIT | https://github.com/harfbuzz/rustybuzz |
| ryu | 1.0.23 | Apache-2.0 OR BSL-1.0 | https://github.com/dtolnay/ryu |
| same-file | 1.0.6 | Unlicense/MIT | https://github.com/BurntSushi/same-file |
| scopeguard | 1.2.0 | MIT OR Apache-2.0 | https://github.com/bluss/scopeguard |
| self_cell | 1.3.0 | Apache-2.0 OR GPL-2.0-only | https://github.com/Voultapher/self_cell |
| semver | 1.0.28 | MIT OR Apache-2.0 | https://github.com/dtolnay/semver |
| serde | 1.0.229 | MIT OR Apache-2.0 | https://github.com/serde-rs/serde |
| serde_core | 1.0.229 | MIT OR Apache-2.0 | https://github.com/serde-rs/serde |
| serde_derive | 1.0.229 | MIT OR Apache-2.0 | https://github.com/serde-rs/serde |
| serde_json | 1.0.154 | MIT OR Apache-2.0 | https://github.com/serde-rs/json |
| serde_norway | 0.9.42 | MIT OR Apache-2.0 | https://github.com/cafkafk/serde-yaml |
| serde_path_to_error | 0.1.20 | MIT OR Apache-2.0 | https://github.com/dtolnay/path-to-error |
| serde_spanned | 0.6.9 | MIT OR Apache-2.0 | https://github.com/toml-rs/toml |
| serde_spanned | 1.1.2 | MIT OR Apache-2.0 | https://github.com/toml-rs/toml |
| serde_yaml | 0.9.34+deprecated | MIT OR Apache-2.0 | https://github.com/dtolnay/serde-yaml |
| sha2 | 0.11.1 | MIT OR Apache-2.0 | https://github.com/RustCrypto/hashes |
| shlex | 2.0.1 | MIT OR Apache-2.0 | https://github.com/comex/rust-shlex |
| signature | 3.0.0 | Apache-2.0 OR MIT | https://github.com/RustCrypto/traits |
| simd-adler32 | 0.3.10 | MIT | https://github.com/mcountryman/simd-adler32 |
| simdutf8 | 0.1.5 | MIT OR Apache-2.0 | https://github.com/rusticstuff/simdutf8 |
| simplecss | 0.2.2 | Apache-2.0 OR MIT | https://github.com/linebender/simplecss |
| siphasher | 1.0.4 | MIT OR Apache-2.0 | https://github.com/jedisct1/rust-siphash |
| skrifa | 0.42.1 | MIT OR Apache-2.0 | https://github.com/googlefonts/fontations |
| skrifa | 0.44.0 | MIT OR Apache-2.0 | https://github.com/googlefonts/fontations |
| slab | 0.4.12 | MIT | https://github.com/tokio-rs/slab |
| slotmap | 1.1.1 | Zlib | https://github.com/orlp/slotmap |
| smallvec | 1.16.4 | MIT OR Apache-2.0 | https://github.com/servo/rust-smallvec |
| smol_str | 0.2.2 | MIT OR Apache-2.0 | https://github.com/rust-analyzer/smol_str |
| spin | 0.9.9 | MIT | https://github.com/mvdnes/spin-rs.git |
| stable_deref_trait | 1.2.1 | MIT OR Apache-2.0 | https://github.com/storyyeller/stable_deref_trait |
| stacker | 0.1.25 | MIT OR Apache-2.0 | https://github.com/rust-lang/stacker |
| static_assertions | 1.1.0 | MIT OR Apache-2.0 | https://github.com/nvzqz/static-assertions-rs |
| strict-num | 0.1.1 | MIT | https://github.com/RazrFalcon/strict-num |
| string_cache | 0.11.0 | MIT OR Apache-2.0 | https://github.com/servo/string-cache |
| string_cache | 0.9.0 | MIT OR Apache-2.0 | https://github.com/servo/string-cache |
| string_cache_codegen | 0.11.2 | MIT OR Apache-2.0 | https://github.com/servo/string-cache |
| string_cache_codegen | 0.6.1 | MIT OR Apache-2.0 | https://github.com/servo/string-cache |
| stringprep | 0.1.5 | MIT/Apache-2.0 | https://github.com/sfackler/rust-stringprep |
| strum | 0.27.2 | MIT | https://github.com/Peternator7/strum |
| strum_macros | 0.27.2 | MIT | https://github.com/Peternator7/strum |
| subsetter | 0.2.6 | MIT OR Apache-2.0 | https://github.com/typst/subsetter |
| subtle | 2.6.1 | BSD-3-Clause | https://github.com/dalek-cryptography/subtle |
| svgtypes | 0.16.1 | Apache-2.0 OR MIT | https://github.com/linebender/svgtypes |
| syn | 2.0.119 | MIT OR Apache-2.0 | https://github.com/dtolnay/syn |
| syn | 3.0.9 | MIT OR Apache-2.0 | https://github.com/dtolnay/syn |
| synstructure | 0.14.0 | MIT | https://github.com/mystor/synstructure |
| syntect | 5.3.0 | MIT | https://github.com/trishume/syntect |
| tendril | 0.5.1 | MIT OR Apache-2.0 | https://github.com/servo/html5ever |
| thin-vec | 0.2.21 | MIT OR Apache-2.0 | https://github.com/mozilla/thin-vec |
| thiserror | 2.0.21 | MIT OR Apache-2.0 | https://github.com/dtolnay/thiserror |
| thiserror-impl | 2.0.21 | MIT OR Apache-2.0 | https://github.com/dtolnay/thiserror |
| tiff | 0.11.3 | MIT | https://github.com/image-rs/image-tiff |
| time | 0.3.55 | MIT OR Apache-2.0 | https://github.com/time-rs/time |
| time-core | 0.1.9 | MIT OR Apache-2.0 | https://github.com/time-rs/time |
| time-macros | 0.2.32 | MIT OR Apache-2.0 | https://github.com/time-rs/time |
| tiny-skia | 0.12.0 | BSD-3-Clause | https://github.com/linebender/tiny-skia |
| tiny-skia-path | 0.12.0 | BSD-3-Clause | https://github.com/linebender/tiny-skia/tree/master/path |
| tinystr | 0.8.5 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| tinyvec | 1.13.3 | Zlib OR Apache-2.0 OR MIT | https://github.com/Lokathor/tinyvec |
| toml | 0.8.23 | MIT OR Apache-2.0 | https://github.com/toml-rs/toml |
| toml | 1.1.8+spec-1.1.0 | MIT OR Apache-2.0 | https://github.com/toml-rs/toml |
| toml_datetime | 0.6.11 | MIT OR Apache-2.0 | https://github.com/toml-rs/toml |
| toml_datetime | 1.1.2+spec-1.1.0 | MIT OR Apache-2.0 | https://github.com/toml-rs/toml |
| toml_edit | 0.22.27 | MIT OR Apache-2.0 | https://github.com/toml-rs/toml |
| toml_parser | 1.1.5+spec-1.1.0 | MIT OR Apache-2.0 | https://github.com/toml-rs/toml |
| toml_write | 0.1.2 | MIT OR Apache-2.0 | https://github.com/toml-rs/toml |
| toml_writer | 1.1.3+spec-1.1.0 | MIT OR Apache-2.0 | https://github.com/toml-rs/toml |
| tracing | 0.1.44 | MIT | https://github.com/tokio-rs/tracing |
| tracing-attributes | 0.1.31 | MIT | https://github.com/tokio-rs/tracing |
| tracing-core | 0.1.36 | MIT | https://github.com/tokio-rs/tracing |
| ttf-parser | 0.25.1 | MIT OR Apache-2.0 | https://github.com/harfbuzz/ttf-parser |
| two-face | 0.4.5 | MIT OR Apache-2.0 | https://github.com/CosmicHorrorDev/two-face |
| typed-arena | 2.0.2 | MIT | https://github.com/SimonSapin/rust-typed-arena |
| typed-path | 0.12.4 | MIT OR Apache-2.0 | https://github.com/chipsenkbeil/typed-path |
| typeid | 1.0.3 | MIT OR Apache-2.0 | https://github.com/dtolnay/typeid |
| typenum | 1.20.1 | MIT OR Apache-2.0 | https://github.com/paholg/typenum |
| typst | 0.15.1 | Apache-2.0 | https://github.com/typst/typst |
| typst-assets | 0.15.1 | Apache-2.0 | https://github.com/typst/typst-assets |
| typst-eval | 0.15.1 | Apache-2.0 | https://github.com/typst/typst |
| typst-html | 0.15.1 | Apache-2.0 | https://github.com/typst/typst |
| typst-kit | 0.15.1 | Apache-2.0 | https://github.com/typst/typst |
| typst-layout | 0.15.1 | Apache-2.0 | https://github.com/typst/typst |
| typst-library | 0.15.1 | Apache-2.0 | https://github.com/typst/typst |
| typst-macros | 0.15.1 | Apache-2.0 | https://github.com/typst/typst |
| typst-pdf | 0.15.1 | Apache-2.0 | https://github.com/typst/typst |
| typst-realize | 0.15.1 | Apache-2.0 | https://github.com/typst/typst |
| typst-render | 0.15.1 | Apache-2.0 | https://github.com/typst/typst |
| typst-svg | 0.15.1 | Apache-2.0 | https://github.com/typst/typst |
| typst-syntax | 0.15.1 | Apache-2.0 | https://github.com/typst/typst |
| typst-timing | 0.15.1 | Apache-2.0 | https://github.com/typst/typst |
| typst-utils | 0.15.1 | Apache-2.0 | https://github.com/typst/typst |
| unic-langid | 0.9.6 | MIT OR Apache-2.0 | https://github.com/zbraniecki/unic-locale |
| unic-langid-impl | 0.9.6 | MIT OR Apache-2.0 | https://github.com/zbraniecki/unic-locale |
| unic-langid-macros | 0.9.6 | MIT OR Apache-2.0 | https://github.com/zbraniecki/unic-locale |
| unic-langid-macros-impl | 0.9.6 | MIT OR Apache-2.0 | https://github.com/zbraniecki/unic-locale |
| unicase | 2.10.0 | MIT OR Apache-2.0 | https://github.com/seanmonstar/unicase |
| unicode-bidi | 0.3.18 | MIT OR Apache-2.0 | https://github.com/servo/unicode-bidi |
| unicode-bidi-mirroring | 0.4.0 | MIT/Apache-2.0 | https://github.com/RazrFalcon/unicode-bidi-mirroring |
| unicode-ccc | 0.4.0 | MIT/Apache-2.0 | https://github.com/RazrFalcon/unicode-ccc |
| unicode-general-category | 1.1.0 | Apache-2.0 | https://github.com/yeslogic/unicode-general-category |
| unicode-ident | 1.0.27 | (MIT OR Apache-2.0) AND Unicode-3.0 | https://github.com/dtolnay/unicode-ident |
| unicode-math-class | 0.1.0 | MIT OR Apache-2.0 | https://github.com/typst/unicode-math-class |
| unicode-normalization | 0.1.26 | (MIT OR Apache-2.0) AND Unicode-3.0 | https://github.com/unicode-rs/unicode-normalization |
| unicode-properties | 0.1.4 | MIT/Apache-2.0 | https://github.com/unicode-rs/unicode-properties |
| unicode-script | 0.5.8 | MIT OR Apache-2.0 | https://github.com/unicode-rs/unicode-script |
| unicode-segmentation | 1.13.3 | MIT OR Apache-2.0 | https://github.com/unicode-rs/unicode-segmentation |
| unicode-vo | 0.1.0 | MIT/Apache-2.0 | https://github.com/RazrFalcon/unicode-vo |
| unsafe-libyaml | 0.2.11 | MIT | https://github.com/dtolnay/unsafe-libyaml |
| unsafe-libyaml-norway | 0.2.15 | MIT | https://github.com/cafkafk/unsafe-libyaml-norway |
| unscanny | 0.1.0 | MIT OR Apache-2.0 | https://github.com/typst/unscanny |
| url | 2.5.8 | MIT OR Apache-2.0 | https://github.com/servo/rust-url |
| usvg | 0.47.0 | Apache-2.0 OR MIT | https://github.com/linebender/resvg |
| utf16_iter | 1.0.5 | Apache-2.0 OR MIT | https://github.com/hsivonen/utf16_iter |
| utf8_iter | 1.0.4 | Apache-2.0 OR MIT | https://github.com/hsivonen/utf8_iter |
| uuid | 1.26.1 | Apache-2.0 OR MIT | https://github.com/uuid-rs/uuid |
| vello_common | 0.0.8 | Apache-2.0 OR MIT | https://github.com/linebender/vello |
| vello_common | 0.0.9 | Apache-2.0 OR MIT | https://github.com/linebender/vello |
| vello_common | 0.1.0 | Apache-2.0 OR MIT | https://github.com/linebender/vello |
| vello_cpu | 0.0.8 | Apache-2.0 OR MIT | https://github.com/linebender/vello |
| vello_cpu | 0.1.0 | Apache-2.0 OR MIT | https://github.com/linebender/vello |
| version_check | 0.9.5 | MIT/Apache-2.0 | https://github.com/SergioBenitez/version_check |
| vswhom | 0.1.0 | MIT | https://github.com/nabijaczleweli/vswhom.rs |
| vswhom-sys | 0.1.3 | MIT | https://github.com/nabijaczleweli/vswhom-sys.rs |
| walkdir | 2.5.0 | Unlicense/MIT | https://github.com/BurntSushi/walkdir |
| wasmi | 1.1.0 | MIT/Apache-2.0 | https://github.com/wasmi-labs/wasmi |
| wasmi_collections | 1.1.0 | MIT/Apache-2.0 | https://github.com/wasmi-labs/wasmi |
| wasmi_core | 1.1.0 | MIT/Apache-2.0 | https://github.com/wasmi-labs/wasmi |
| wasmi_ir | 1.1.0 | MIT/Apache-2.0 | https://github.com/wasmi-labs/wasmi |
| wasmparser | 0.239.0 | Apache-2.0 WITH LLVM-exception OR Apache-2.0 OR MIT | https://github.com/bytecodealliance/wasm-tools/tree/main/crates/wasmparser |
| web-time | 1.1.0 | MIT OR Apache-2.0 | https://github.com/daxpedda/web-time |
| web_atoms | 0.2.6 | MIT OR Apache-2.0 | https://github.com/servo/html5ever |
| web_atoms | 0.3.0 | MIT OR Apache-2.0 | https://github.com/servo/html5ever |
| webp | 0.3.1 | MIT OR Apache-2.0 | https://github.com/jaredforth/webp.git |
| weezl | 0.1.12 | MIT OR Apache-2.0 | https://github.com/image-rs/weezl |
| weezl | 0.2.1 | MIT OR Apache-2.0 | https://github.com/image-rs/weezl |
| winapi-util | 0.1.11 | Unlicense OR MIT | https://github.com/BurntSushi/winapi-util |
| windows | 0.62.2 | MIT OR Apache-2.0 | https://github.com/microsoft/windows-rs |
| windows-collections | 0.3.2 | MIT OR Apache-2.0 | https://github.com/microsoft/windows-rs |
| windows-core | 0.62.2 | MIT OR Apache-2.0 | https://github.com/microsoft/windows-rs |
| windows-future | 0.3.2 | MIT OR Apache-2.0 | https://github.com/microsoft/windows-rs |
| windows-implement | 0.60.2 | MIT OR Apache-2.0 | https://github.com/microsoft/windows-rs |
| windows-interface | 0.59.3 | MIT OR Apache-2.0 | https://github.com/microsoft/windows-rs |
| windows-link | 0.2.1 | MIT OR Apache-2.0 | https://github.com/microsoft/windows-rs |
| windows-numerics | 0.3.1 | MIT OR Apache-2.0 | https://github.com/microsoft/windows-rs |
| windows-result | 0.4.1 | MIT OR Apache-2.0 | https://github.com/microsoft/windows-rs |
| windows-strings | 0.5.1 | MIT OR Apache-2.0 | https://github.com/microsoft/windows-rs |
| windows-sys | 0.52.0 | MIT OR Apache-2.0 | https://github.com/microsoft/windows-rs |
| windows-sys | 0.61.2 | MIT OR Apache-2.0 | https://github.com/microsoft/windows-rs |
| windows-targets | 0.52.6 | MIT OR Apache-2.0 | https://github.com/microsoft/windows-rs |
| windows-threading | 0.2.1 | MIT OR Apache-2.0 | https://github.com/microsoft/windows-rs |
| windows_x86_64_msvc | 0.52.6 | MIT OR Apache-2.0 | https://github.com/microsoft/windows-rs |
| winit | 0.30.13 | Apache-2.0 | https://github.com/rust-windowing/winit |
| winnow | 0.7.15 | MIT | https://github.com/winnow-rs/winnow |
| winnow | 1.0.4 | MIT | https://github.com/winnow-rs/winnow |
| winreg | 0.56.0 | MIT | https://github.com/gentoo90/winreg-rs |
| write-fonts | 0.48.1 | MIT OR Apache-2.0 | https://github.com/googlefonts/fontations |
| write16 | 1.0.0 | Apache-2.0 OR MIT | https://github.com/hsivonen/write16 |
| writeable | 0.6.4 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| xml-rs | 0.8.29 | MIT | https://github.com/kornelski/xml-rs |
| xml5ever | 0.38.0 | MIT OR Apache-2.0 | https://github.com/servo/html5ever |
| xmlwriter | 0.1.0 | MIT | https://github.com/RazrFalcon/xmlwriter |
| xmp-writer | 0.3.3 | MIT OR Apache-2.0 | https://github.com/typst/xmp-writer |
| yaml-rust | 0.4.5 | MIT/Apache-2.0 | https://github.com/chyh1990/yaml-rust |
| yoke | 0.8.4 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| yoke-derive | 0.8.4 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| zerocopy | 0.8.63 | BSD-2-Clause OR Apache-2.0 OR MIT | https://github.com/google/zerocopy |
| zerocopy-derive | 0.8.63 | BSD-2-Clause OR Apache-2.0 OR MIT | https://github.com/google/zerocopy |
| zerofrom | 0.1.8 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| zerofrom-derive | 0.1.8 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| zeroize | 1.9.1 | Apache-2.0 OR MIT | https://github.com/RustCrypto/utils |
| zerotrie | 0.2.5 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| zerovec | 0.11.9 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| zerovec-derive | 0.11.7 | Unicode-3.0 | https://github.com/unicode-org/icu4x |
| zip | 8.6.0 | MIT | https://github.com/zip-rs/zip2 |
| zlib-rs | 0.6.8 | Zlib | https://github.com/trifectatechfoundation/zlib-rs |
| zmij | 1.0.23 | MIT | https://github.com/dtolnay/zmij |
| zopfli | 0.8.4 | Apache-2.0 | https://github.com/zopfli-rs/zopfli |
| zune-core | 0.5.3 | MIT OR Apache-2.0 OR Zlib | https://github.com/etemesi254/zune-image |
| zune-jpeg | 0.5.15 | MIT OR Apache-2.0 OR Zlib | https://github.com/etemesi254/zune-image/tree/dev/crates/zune-jpeg |
