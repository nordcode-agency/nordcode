# @nordcode/ui

## Getting started

First, add all the base styles by importing:

```js
import "@nordcode/compiled/bundle"
```

It exports the following css:

```css
@import "./config/bundle.css";
@import "./utils/media.css";

@import "./theme/colors.css";

@import "./utils/reset.css";
@import "./utils/easings.css";
@import "./utils/layouts.css";
@import "./utils/spacing-utils.css";
@import "./utils/exceptions.css";
```

If you want to have CSS components too, instead add:

```js
import "@nordcode/compiled/complete"
```

It exports the following css:

```css
@import "./badges.css";
@import "./buttons.css";
@import "./card.css";
@import "./dialogs.css";
@import "./gallery.css";
@import "./inputs.css";
@import "./ramGrid.css";
@import "./stack.css";
@import "./notifications.css";
```

When you're using the `@nordcode/postcss-config` package in your project, feel free to used the uncompiled version:

```js
import "@nordcode/bundle"
```

```js
import "@nordcode/complete"
```

To add fonts, import the following:

```js
import "@nordcode/fonts"
```
