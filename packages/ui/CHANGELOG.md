# @nordcode/ui

## 2.2.0

### Minor Changes

-   ## Small tweaks and additions

    -   add all font sizes as utility classes
    -   add sr-only as screen-reader class too
    -   make details more clickable by adding the padding to the summary instead
    -   add badges variants for primary & secondary
    -   make breadcrumbs and buttons more consistent

## 2.1.0

### Minor Changes

-   ## Tweaks to base styles

    -   Add missing style: `var`
    -   Add text-rendering: optimizeSpeed;
    -   Fix Metalist styles
    -   Increase details default padding
    -   Simplify and improve blockquote styles
    -   Make em and i serif for improved italics
    -   Add font-smoothing to base
    -   Use `ex` in nc-flow for improved vertical rhythm
    -   Update line-height calculations after switching to `ex`-based line-heights in the generator

## 2.0.0

### Major Changes

-   Change most spacings to use lh,ch and ex

    ## What changed

    -   Most components now have their spacings based on lh, ch and ex instead of the spacings

    ## Why we did it

    -   We keep a consistent and flexible UI like this
    -   AND we can be more flexible in the spacing scale without creating UI issues in the components

    ## How to migrate

    Probably just use it and make sure, your styles are not broken

## 1.2.0

### Minor Changes

-   Lots of small tweaks and new layouts
-   feat(ui): extend styles for kbd and code and at scroll-margin to :target
-   feat(ui): remove padding on small icon buttons
-   feat(ui): simplify .text-assistive style
-   feat(ui): add more layout utilities
    -   .nc-region for page sections
    -   .nc-grid for common grid layouts (50:50 / thirds)
    -   .nc-switcher for items that go beneath each other automatically
    -   add -between to cluster to provide for spacing-between
-   feat(ui): add style for <del>

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
