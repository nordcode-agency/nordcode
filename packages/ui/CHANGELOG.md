## 2.0.0 (2025-05-02)

### BREAKING CHANGES

Rename tokens:

--control-height-base: Used to be --button-height-base. Renamed for clarity, because it also affects inputs.
--control-height-small: Used to be --button-height-small. Renamed for clarity, because it also affects inputs.

Add new design tokens:

--control-spacing-minimal
--control-spacing-tiny
--control-spacing-nearest
--control-spacing-near
--control-spacing-base
--control-spacing-far
--control-spacing-farthest

These tokens are `em` based and are used to style the control elements, mostly inputs and buttons, but also other styled elements like your lists and details. Changing the spacings can be used for a more dense or more spacious layout.

## 1.3.2 (2025-04-18)

### improvements

- Tweak measure to better resemble old ch measurements in `.nc-flow`

## 1.3.1 (2025-04-18)

### improvements

- Tweak measure to better resemble old ch measurements

## 1.3.0 (2025-04-18)

### improvements

- Switch from ch (and in some cases lh) to em for more consistent sizing and to prevent possible CLS due to font switching
- Add new typography token: `--font-size-medium` to provide a token for slightly larger text

## 1.2.0 (2025-04-03)

### Improvements

- Add clickable card class

## 1.1.6 (2025-01-09)

### Improvements

- Small changes to spacings.

## 1.1.5 (2025-01-09)

### Improvements

- Add `themed` class to apply `var(--text)` and `var(--surface)` colors

### Fixes

- Fix text colors for `<ins>` and `<del>`

## 1.1.4 (2025-01-04)

### Fixes

- Fix summary border-radius by using a border-radius token

## 1.1.3 (2025-01-04)

### Fixes

- Small design fixes and improvements

## 1.1.2 (2025-01-03)

### Fixes

- Fix switch component not working

## 1.1.1 (2025-01-03)

### Fixes

- Made details full width again

## 1.1.0 (2025-01-03)

Lots of spring cleaning

### Improvements

- Line height tokens now use unitless values to allow proper inheritance
- Changed default styling for details
- Cleanup unused styles

## 1.0.10 (2024-12-27)

### Fixes

- Fix radius for real

## 1.0.9 (2024-12-27)

### Improvements

- Tweak Dialog Radius and mobile styles

## 1.0.8 (2024-12-27)

### Improvements

- Tweak Dialog Styles
- Disable scroll when modal dialog is open

### Fixes

- Fix user selection styles

## v1.0.5 (2024-11-28)

### Fixes

- Fix fields not compiling

## v1.0.5 (2024-11-28)

### Features

Make fieldset-based inputs more accessible by adding legends. This affects:
- `nc-tag-select`
- `nc-segmented-control`
- `nc-radio-field`
- `nc-checkbox-field`

Be sure to checkout the updated markup for these components in the documentation.

## v1.0.4 (2024-09-15)

### New Features

- Added `.nc-alert` class, an alert and utility class for notifications.
- Added `-aligned` variant to `.nc-button`, which applies negative margin, so you can visually align stealth buttons

### Fixes

- Fixed Webkit `<detail>` style
- Shadows not working using `light-dark`
