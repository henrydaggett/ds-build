# DsToggleGroup

A set of `DsToggle`s that share pressed state, styled as a segmented control (a grey track with a raised white segment for the pressed toggle). Single choice by default, or several at once with `multiple`.

## Quick reference

```tsx
import { DsToggleGroup, DsToggle } from '@ds-build/ui';

<DsToggleGroup aria-label="View" defaultValue={['list']}>
  <DsToggle value="list">List</DsToggle>
  <DsToggle value="board">Board</DsToggle>
</DsToggleGroup>
```

Allowed props: `aria-label`, `size`, `multiple`, `defaultValue`, `orientation`, `disabled`, and `DsToggle` children. Nothing else.

## Import

Use one import line from `@ds-build/ui`, shared with the other components in the snippet. Always import `DsToggle` with it, plus only the icons used:

```tsx
import { DsToggleGroup, DsToggle, DsAlignLeftIcon, DsAlignCenterIcon, DsAlignRightIcon } from '@ds-build/ui';
```

Never import from sub-paths. No CSS import is needed.

## Structure

Children are `DsToggle`s only, each with a unique `value`. DsToggle props are in [toggle.md](toggle.md).

```tsx
<DsToggleGroup aria-label="…">
  <DsToggle value="a">A</DsToggle>
  <DsToggle value="b">B</DsToggle>
</DsToggleGroup>
```

Inside a group, a DsToggle takes `value`, `children`, `iconNode`, `aria-label` (icon-only) and `disabled`. Never `size` or `defaultPressed`: the group sets those.

## Props

| Prop           | Write as                                    | Default (omit)  | Notes                                                     |
| -------------- | ------------------------------------------- | --------------- | --------------------------------------------------------- |
| `aria-label`   | `aria-label="Text alignment"`               | –               | Required. Names the choice.                               |
| `size`         | `size="small"`, `size="large"`              | `medium`        | Sizes every toggle. Group heights 28/36/44px.             |
| `multiple`     | `multiple`                                  | off             | Allow several pressed at once.                            |
| `defaultValue` | `defaultValue={['left']}`, `defaultValue={['bold', 'italic']}` | nothing pressed | `value`s of the pressed toggles. Always an array. |
| `orientation`  | `orientation="vertical"`                    | `horizontal`    | Stacks the toggles in a column.                           |
| `disabled`     | `disabled`                                  | off             | Disables every toggle.                                    |

These are the only props to use. No `value`, `onValueChange`, `className`, `style` or event handlers.

## Base setup

Start from the minimal group:

```tsx
<DsToggleGroup aria-label="Label">
  <DsToggle value="one">One</DsToggle>
  <DsToggle value="two">Two</DsToggle>
</DsToggleGroup>
```

Then add only the props the input needs, in this order:

1. `size="small"` or `size="large"` if it isn't medium
2. `orientation="vertical"` if the toggles are stacked
3. `multiple` if more than one can be pressed
4. `defaultValue={[…]}` if any toggle is shown pressed
5. `disabled` if the whole group is disabled

Every compatible prop at once, for reference only:

```tsx
<DsToggleGroup
  aria-label="Text formatting"
  size="large"
  orientation="vertical"
  multiple
  defaultValue={['bold', 'italic']}
  disabled
>
  <DsToggle value="bold" iconNode={<DsBoldIcon />} aria-label="Bold" />
  <DsToggle value="italic" iconNode={<DsItalicIcon />} aria-label="Italic" />
  <DsToggle value="underline" iconNode={<DsUnderlineIcon />} aria-label="Underline" />
</DsToggleGroup>
```

### Composing rules

- Leave out props set to their defaults. Never write `size="medium"`, `orientation="horizontal"` or `multiple={false}`.
- `defaultValue` is always an array, even for one value: `defaultValue={['left']}`.
- Without `multiple`, `defaultValue` has at most one value. If the input shows two pressed, add `multiple`.
- Each `value` is a short lowercase id derived from the label (`"Align left"` → `"left"`, `"Board view"` → `"board"`). Every `defaultValue` entry must match a child's `value`.
- To disable one toggle, put `disabled` on that `DsToggle`; to disable all, put it on the group.
- Put the attributes on one line unless the tag runs past ~100 characters, then one attribute per line.

## Valid variants

| Variant                | Write as                                      |
| ---------------------- | --------------------------------------------- |
| Single choice          | `<DsToggleGroup aria-label="…">`                |
| Multiple choice        | `<DsToggleGroup aria-label="…" multiple>`       |
| Vertical               | `<DsToggleGroup aria-label="…" orientation="vertical">` |

Toggles can be text, icon and text, or icon-only, and can be mixed.

## Visual identification

Use this to match segmented controls and toggle toolbars in an image.

| Looks like                                                                   | Means                 |
| ---------------------------------------------------------------------------- | --------------------- |
| Light grey track `#eeeef0` with a 1px border `#dcdce0` and 3px inner padding | The `DsToggleGroup`     |
| Borderless segment, transparent on the track, dark grey text `#3f3f46`       | DsToggle not pressed    |
| Raised white segment with a soft shadow, near-black text `#18181b`           | Pressed (in `defaultValue`) |
| Grey text `#7d7d86`                                                          | Disabled              |
| Two or more white segments at once                                           | `multiple`            |

A row of separate bordered toggles with gaps (no shared track) isn't a group. Write them as standalone `DsToggle`s and report the segmented look under "Differences" only if the user asked for a group.

**Size** (measure the whole track; pick the nearest):

| Size   | Track height | Segment height | Text | Track radius |
| ------ | ------------ | -------------- | ---- | ------------ |
| small  | 28px         | 20px           | 13px | 6px          |
| medium | 36px         | 28px           | 14px | 8px          |
| large  | 44px         | 36px           | 16px | 10px         |

If unclear, use medium (omit `size`).

## Input-to-prop mapping

| User says                                                       | Write as                       |
| --------------------------------------------------------------- | ------------------------------ |
| segmented control, tabs-style switcher, view switcher, pick one of | `<DsToggleGroup>` (single)    |
| toolbar, formatting buttons, pick several, multi-select toggles | `multiple`                     |
| vertical, stacked, column                                       | `orientation="vertical"`       |
| "X is selected/active/on"                                       | `defaultValue={['x']}`         |
| small, compact / large, big                                     | `size="small"` / `size="large"` |
| disabled, greyed out                                            | `disabled`                     |

Navigation tabs that switch page content are not a DsToggleGroup; see "Not supported".

## Not supported

The DsToggleGroup can't do any of the following. Don't approximate them. Build the closest supported group (or leave it out) and report it under "Differences" or "Not available":

- Tabs with panels (content that changes below). Leave the tabs out and report them under "Not available".
- Radio buttons (round inputs with a dot). Leave them out and report them under "Not available".
- Children other than `DsToggle` (no Buttons, separators or dropdowns inside).
- A visible label or legend for the group. Report it; `aria-label` names the group invisibly.
- Coloured tracks or a coloured selected segment.
- Full-width groups or segments of fixed width.
- Sizes other than small, medium and large.
- Any custom `className` or `style`.

## size

```tsx
<DsToggleGroup aria-label="View" size="small" defaultValue={['list']}>
  <DsToggle value="list">List</DsToggle>
  <DsToggle value="board">Board</DsToggle>
</DsToggleGroup>
```

## multiple

```tsx
<DsToggleGroup aria-label="Text formatting" multiple defaultValue={['bold', 'underline']}>
  <DsToggle value="bold" iconNode={<DsBoldIcon />} aria-label="Bold" />
  <DsToggle value="italic" iconNode={<DsItalicIcon />} aria-label="Italic" />
  <DsToggle value="underline" iconNode={<DsUnderlineIcon />} aria-label="Underline" />
</DsToggleGroup>
```

## orientation

```tsx
<DsToggleGroup aria-label="Panel" orientation="vertical" defaultValue={['layers']}>
  <DsToggle value="layers">Layers</DsToggle>
  <DsToggle value="assets">Assets</DsToggle>
</DsToggleGroup>
```

## disabled

```tsx
<DsToggleGroup aria-label="View" defaultValue={['list']} disabled>
  <DsToggle value="list">List</DsToggle>
  <DsToggle value="board">Board</DsToggle>
</DsToggleGroup>

<DsToggleGroup aria-label="View" defaultValue={['list']}>
  <DsToggle value="list">List</DsToggle>
  <DsToggle value="board" disabled>Board</DsToggle>
</DsToggleGroup>
```

## Combined example

```tsx
<DsToggleGroup aria-label="Text alignment" size="small" defaultValue={['left']}>
  <DsToggle value="left" iconNode={<DsAlignLeftIcon />} aria-label="Align left" />
  <DsToggle value="center" iconNode={<DsAlignCenterIcon />} aria-label="Align center" />
  <DsToggle value="right" iconNode={<DsAlignRightIcon />} aria-label="Align right" />
</DsToggleGroup>
```

## Code snippet translation

Input:

```html
<div class="btn-group" role="group" aria-label="Billing period">
  <input type="radio" class="btn-check" name="period" id="monthly" checked>
  <label class="btn btn-outline-primary" for="monthly">Monthly</label>
  <input type="radio" class="btn-check" name="period" id="yearly">
  <label class="btn btn-outline-primary" for="yearly">Yearly <span class="badge">-20%</span></label>
</div>
```

Output:

```tsx
import { DsToggleGroup, DsToggle } from '@ds-build/ui';

<DsToggleGroup aria-label="Billing period" defaultValue={['monthly']}>
  <DsToggle value="monthly">Monthly</DsToggle>
  <DsToggle value="yearly">Yearly</DsToggle>
</DsToggleGroup>
```

- A `btn-group` of radio buttons → single-choice `DsToggleGroup`; `checked` → `defaultValue`.
- The group's `aria-label` is kept. Each `id` becomes the toggle's `value`.
- `btn-outline-primary` colour is dropped: **Differences:** the selected segment is white, not blue.
- The badge is dropped: **Differences:** "-20%" badge left off the Yearly toggle.
