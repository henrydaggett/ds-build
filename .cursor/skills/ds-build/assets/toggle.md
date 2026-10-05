# DsToggle

A two-state button that's either pressed or not (e.g. Bold on/off). Renders a native `<button>` with `aria-pressed`.

## Quick reference

```tsx
import { DsToggle } from '@ds-build/ui';

<DsToggle>Label</DsToggle>
```

Allowed props: `size`, `iconNode`, `aria-label` (icon-only toggles), `defaultPressed`, `disabled`, `value` (inside a `DsToggleGroup`), and plain-text `children`. Nothing else.

## Import

Use one import line from `@ds-build/ui`, shared with the other components in the snippet. Include `DsToggle` and only the icons the snippet actually uses:

```tsx
import { DsToggle, DsBoldIcon, DsItalicIcon } from '@ds-build/ui';
```

Never import from sub-paths. No CSS import is needed: the design tokens load with the package.

## Props

| Prop             | Write as                                     | Default (omit) | Notes                                                                 |
| ---------------- | -------------------------------------------- | -------------- | --------------------------------------------------------------------- |
| `children`       | `<DsToggle>Bold</DsToggle>`                      | –              | Plain-text label. Omit for an icon-only toggle.                       |
| `iconNode`       | `iconNode={<DsBoldIcon />}`                    | none           | Leading icon. Required when there's no `children`.                    |
| `aria-label`     | `aria-label="Bold"`                          | –              | Required for icon-only toggles, and only for them.                    |
| `size`           | `size="small"`, `size="large"`               | `medium`       | Heights 28/36/44px. Never inside a `DsToggleGroup` (set it on the group). |
| `defaultPressed` | `defaultPressed`                             | off            | Starts pressed. Never inside a `DsToggleGroup` (use the group's `defaultValue`). |
| `disabled`       | `disabled`                                   | off            | Disabled state.                                                       |
| `value`          | `value="bold"`                               | –              | Only inside a `DsToggleGroup`, where it's required and unique.          |

These are the only props to use. No `pressed`, `onPressedChange`, `className`, `style` or event handlers.

`children` is the label text only. Never put icons or markup inside it; icons go through `iconNode`.

## Base setup

Start from the minimal toggle:

```tsx
<DsToggle>Label</DsToggle>
```

Then add only the props the input needs, in this order:

1. `value="…"` if it's inside a `DsToggleGroup`
2. `size="small"` or `size="large"` if it isn't medium (standalone only)
3. `iconNode={<…Icon />}` if it has an icon
4. `aria-label="…"` if it has an icon and no label
5. `defaultPressed` if it's shown pressed (standalone only)
6. `disabled` if it's disabled

Every compatible prop at once, for reference only:

```tsx
<DsToggle size="large" iconNode={<DsBoldIcon />} defaultPressed disabled>
  Bold
</DsToggle>
```

Icon-only:

```tsx
<DsToggle iconNode={<DsItalicIcon />} aria-label="Italic" />
```

### Composing rules

- Leave out any prop that's set to its default value. Never write `size="medium"` or `defaultPressed={false}`.
- Write boolean props as bare attributes: `defaultPressed`, `disabled`.
- An icon-only toggle is self-closing and must have both `iconNode` and `aria-label`. Use the icon's meaning as the label ("Bold", "Align left").
- Don't add `aria-label` to a toggle that has visible text.
- The icon is always leading (left of the label).
- Inside a `DsToggleGroup`: add `value`, and leave out `size` and `defaultPressed`. See [toggle-group.md](toggle-group.md).

## Valid variants

| Variant           | Write as                                         |
| ----------------- | ------------------------------------------------ |
| Text              | `<DsToggle>Bold</DsToggle>`                          |
| Icon and text     | `<DsToggle iconNode={<DsBoldIcon />}>Bold</DsToggle>`  |
| Icon only         | `<DsToggle iconNode={<DsBoldIcon />} aria-label="Bold" />` |

Each works in every size, pressed or not, disabled or not. There are no colour variants.

## Visual identification

Use this to match toggles in an image. A standalone toggle looks like an outline button that turns grey when pressed. Toggles joined in a grey track are a `DsToggleGroup`.

**State:**

| Looks like                                                       | State                 |
| ---------------------------------------------------------------- | --------------------- |
| White fill, grey border `#c4c4ca`, dark grey text `#3f3f46`      | Not pressed (no props) |
| Light grey fill `#eeeef0`, grey border `#c4c4ca`, near-black text `#18181b` | `defaultPressed` |
| White fill, light border `#dcdce0`, grey text `#7d7d86`          | `disabled`            |
| Light grey fill `#eeeef0`, light border `#dcdce0`, grey text `#7d7d86` | `defaultPressed disabled` |

A white bordered element that looks like a button but isn't part of an on/off set is a `DsButton` with `appearance="outline"`, not a DsToggle. Only use a DsToggle when the input describes an on/off or pressed state.

**Size** (pick the nearest; height is the most reliable signal):

| Size   | Height | Text | Corner radius | Icon |
| ------ | ------ | ---- | ------------- | ---- |
| small  | 28px   | 13px | 6px           | 14px |
| medium | 36px   | 14px | 8px           | 16px |
| large  | 44px   | 16px | 10px          | 18px |

Icon-only toggles are square (width = height). Text is medium weight (500). If unclear, use medium (omit `size`).

**Icon:**

| Icon in image               | Write as                        |
| --------------------------- | ------------------------------- |
| Bold **B**                  | `iconNode={<DsBoldIcon />}`       |
| Italic *I*                  | `iconNode={<DsItalicIcon />}`     |
| Underlined U                | `iconNode={<DsUnderlineIcon />}`  |
| Lines aligned left          | `iconNode={<DsAlignLeftIcon />}`  |
| Lines centred               | `iconNode={<DsAlignCenterIcon />}` |
| Lines aligned right         | `iconNode={<DsAlignRightIcon />}` |
| Plus `+`                    | `iconNode={<DsPlusIcon />}`       |
| Tick / check mark           | `iconNode={<DsCheckIcon />}`      |
| Any other icon              | Leave the icon out (keep the label; for icon-only, leave the toggle out) and report it |

## Input-to-prop mapping

| User says                                           | Write as                    |
| --------------------------------------------------- | --------------------------- |
| toggle, toggle button, on/off button, pressable     | `<DsToggle>`                  |
| pressed, on, active, selected, enabled (state)      | `defaultPressed`            |
| unpressed, off, inactive (state)                    | no props                    |
| small, compact, sm                                  | `size="small"`              |
| large, big, lg                                      | `size="large"`              |
| icon only, just an icon                             | `iconNode` + `aria-label`, no children |
| disabled, greyed out, unavailable                   | `disabled`                  |
| segmented control, button group with one selected, toolbar of toggles | `DsToggleGroup`, see [toggle-group.md](toggle-group.md) |

A switch (sliding pill with a knob) isn't a DsToggle; see "Not supported".

## Not supported

The DsToggle can't do any of the following. Don't approximate them with other props, wrappers, raw HTML or styles. Build the closest supported toggle (or leave it out) and report it under "Differences" or "Not available":

- Switches (sliding pill with a knob). Leave it out and report it under "Not available". Don't substitute a DsToggle or DsCheckbox.
- Colours (blue, red) or a coloured pressed state. Pressed is always light grey.
- Trailing icons. Use a leading icon and report it.
- Icons other than those listed above.
- Badges, counts or a second line of text.
- Sizes other than small, medium and large.
- Any custom `className` or `style`.

## children and iconNode

```tsx
<DsToggle>Bold</DsToggle>
<DsToggle iconNode={<DsBoldIcon />}>Bold</DsToggle>
<DsToggle iconNode={<DsBoldIcon />} aria-label="Bold" />
```

## size

```tsx
<DsToggle size="small">Small</DsToggle>
<DsToggle>Medium</DsToggle>
<DsToggle size="large">Large</DsToggle>
```

## defaultPressed

```tsx
<DsToggle>Wrap text</DsToggle>
<DsToggle defaultPressed>Wrap text</DsToggle>
```

## disabled

```tsx
<DsToggle disabled>Wrap text</DsToggle>
<DsToggle defaultPressed disabled>Wrap text</DsToggle>
```

## Combined example

```tsx
<DsToggle size="small" iconNode={<DsUnderlineIcon />} aria-label="Underline" defaultPressed />
```

## Code snippet translation

Input:

```html
<button class="btn btn-outline-secondary active" aria-pressed="true" onclick="toggleBold()">
  <i class="bi bi-type-bold"></i> Bold
</button>
<button class="btn btn-outline-secondary btn-sm" aria-pressed="false" title="Italic">
  <i class="bi bi-type-italic"></i>
</button>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="dark"> <label for="dark">Dark mode</label>
</div>
```

Output:

```tsx
import { DsToggle, DsBoldIcon, DsItalicIcon } from '@ds-build/ui';

<DsToggle iconNode={<DsBoldIcon />} defaultPressed>Bold</DsToggle>
<DsToggle size="small" iconNode={<DsItalicIcon />} aria-label="Italic" />
```

- `aria-pressed="true"` / `active` → `defaultPressed`; `btn-sm` → `size="small"`.
- The `<i>` icons become `iconNode`. The icon-only button's `title` becomes `aria-label`.
- `onclick` and classes are dropped (static output).
- The switch is left out and reported: **Not available:** "Dark mode" switch.
