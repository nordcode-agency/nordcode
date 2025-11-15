# @nordcode/ui

Hello and welcome to our little design system.
This repository holds most of the styles we use as base for our projects.

It's a collection of base styles, components and utilities, that can be imported either as bundle or as granularly as you desire.

**Note**: We only processed the exported in `/compiled`. The other files may use cutting edge CSS features, so be sure to process them to your desired target.
You can use this browserlist config to target the Baseline Widely Adapted standard:

https://github.com/web-platform-dx/browserslist-config-baseline

## Usecase examples

### Bundle

`bundle.css`
Imported as `"@nordcode/compiled/bundle"` / `"@nordcode/bundle"`:

This is the a good starting point for most. It includes base styles and utilities, but no components.
You can start right away with this one, as it includes our color palette and config.

**Note**: There is a `bundle-configless.css`, that does not include the config.
You can grab your from our Design Config generator: [https://design-ui.nordcode.agency/](https://design-ui.nordcode.agency/)

### Complete

`complete.css`
Imported as `"@nordcode/compiled/complete"` / `"@nordcode/complete"`:

This one is the full package. All our styles and included.

First, add all the base styles by importing:

```css
@import "@nordcode/compiled/bundle";
```

### Granular

This one gives you the most control. Every import is a single file, most of them work on their own.
Check out the package.json for a full list.

#### Dependencies

All components heavily rely on `@nordcode/ui/colors` for their default styles, but can be overriden using CSS custom properties.

- Many components use classes from `@norcode/ui/utils/layouts.css` internally.
- `@norcode/ui/buttons.css` depends on `@nordcode/ui/utils/theme.css`.
- `@norcode/ui/badges.css` depends on `@nordcode/ui/utils/theme.css`.
- `@norcode/ui/inputs/*.css` all depend on `@nordcode/ui/inputs/base.css`. Be sure to import that first.

## Using Components

For the components, there is recommended markup, previews and usage information here: [https://design-ui.nordcode.agency/components/](https://design-ui.nordcode.agency/components/)
You can of course adapt them to your needs or copy them directly.

## Fonts

We also provide our font packages for ease of use. You can import them like this:

```css
@import "@nordcode/fonts";
```

## Extras

There are some utility svelte and typescript modules exported under `@nordcode/modules`.
They are not strictly part of the design system, but can be useful for your projects.

**Note**: They may be removed in the future. Use them at your own risk.

---

Thanks for checking this out, we hope you like it!

Lukas and Joshua
