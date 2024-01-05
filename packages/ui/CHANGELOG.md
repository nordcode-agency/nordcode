# @nordcode/ui

## 1.2.0

### Minor Changes

-   Lots of small tweaks and new layouts

## 1.1.2

### Patch Changes

-   Feat: use primary contrast color in checkboxes

## 1.1.1

### Patch Changes

-   Fix generated dark theme

## 1.1.0

### Minor Changes

-   Fix dark theme, tweak styles, add easings
-   ab524dd: Fix Icon Button and remove rlh support checks

## 1.0.0

### Major Changes

-   First proper release

    ## 2023-12-17: Chroma-js & color renames

    **Includes Breaking Changes**

    -   switched to chroma-js to generate all colors based on a scale
    -   renamed `color-brand-primary-subtle` to `color-brand-primary-surface` to better reflect its
        purpose
    -   renamed `color-brand-surface-subtle` to `color-brand-surface-surface` to better reflect its
        purpose
    -   renamed `color-info-subtle` to `color-info-surface` to better reflect its purpose
    -   renamed `color-warning-subtle` to `color-warning-surface` to better reflect its purpose
    -   renamed `color-success-subtle` to `color-success-surface` to better reflect its purpose
    -   renamed `color-danger-subtle` to `color-danger-surface` to better reflect its purpose

    _Notes: Needs tweaking for some of the values_

    ## 2023-12-18: Tweak presets

    Tweak preset and color generations a little bit.

    ## 2023-12-19: Tweak presets, design improvements

    -   Tweak preset values for `brutalist`
    -   Change default text-underline-offset to `0.25lh`
    -   Fix description-list style

    ## 2023-12-22: Fix shadow generation

    ## 2023-12-25: Extend color possibilities

    -   Split Neutral Chroma into 3 for FG, BG and Borders
    -   Allow secondary brand color to be used in generating FG and BG neutral colors

    ## 2023-12-27: More color tweaks

    -   tweak button colors and fix base button hover
    -   use base chroma and hue in generation of scales when generating colors

### Minor Changes

-   d829e99: added --gallery-scroll-snap-stop css prop to gallery
-   6025a83: add first batch of css component styles
-   c42d1f3: add new export /media for css @custom-media

### Patch Changes

-   a59822e: fixed border-radius-round typo (1e5px)
-   bcae962: add icons and assets exports

## 0.0.1

### Patch Changes

-   65eca97: first try of changesets
