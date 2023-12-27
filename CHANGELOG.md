---
'@nordcode/ui-generator': major
'@nordcode/ui': major
---

First proper release

## 2023-12-17: Chroma-js & color renames

**Includes Breaking Changes**

- switched to chroma-js to generate all colors based on a scale
- renamed `color-brand-primary-subtle` to `color-brand-primary-surface` to better reflect its
  purpose
- renamed `color-brand-surface-subtle` to `color-brand-surface-surface` to better reflect its
  purpose
- renamed `color-info-subtle` to `color-info-surface` to better reflect its purpose
- renamed `color-warning-subtle` to `color-warning-surface` to better reflect its purpose
- renamed `color-success-subtle` to `color-success-surface` to better reflect its purpose
- renamed `color-danger-subtle` to `color-danger-surface` to better reflect its purpose

*Notes: Needs tweaking for some of the values*

## 2023-12-18: Tweak presets

Tweak preset and color generations a little bit.

## 2023-12-19: Tweak presets, design improvements

- Tweak preset values for `brutalist`
- Change default text-underline-offset to `0.25lh`
- Fix description-list style

## 2023-12-22: Fix shadow generation

## 2023-12-25: Extend color possibilities

- Split Neutral Chroma into 3 for FG, BG and Borders
- Allow secondary brand color to be used in generating FG and BG neutral colors

## 2023-12-27: More color tweaks

- tweak button colors and fix base button hover
- use base chroma and hue in generation of scales when generating colors
