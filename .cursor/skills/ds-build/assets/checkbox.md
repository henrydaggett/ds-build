# DsCheckbox

A checkbox with its label to the right. Clicking the label toggles the box. Can be ticked, unticked or indeterminate (a dash).

## Quick reference

```tsx
import { DsCheckbox } from '@ds-build/ui';

<DsCheckbox label="Label" />
```

Allowed props: `label`, `aria-label` (no visible label only), `size`, `defaultChecked`, `indeterminate`, `disabled`, `required`, `name`, `value` (inside a `DsCheckboxGroup`). Nothing else.

## Import

Use one import line from `@ds-build/ui`, shared with the other components in the snippet:

```tsx
import { DsCheckbox } from '@ds-build/ui';
```

Never import from sub-paths. No CSS import is needed. Don't import `DsCheckIcon` or `DsMinusIcon`: the box draws its own.

## Structure

A DsCheckbox is used in one of three places:

- **On its own** (e.g. "Remember me"): `<DsCheckbox label="…" />`.
- **In a `DsCheckboxGroup`** for a labelled set of options: give it a `value` and leave out `size`, `defaultChecked` and `name`. See [checkbox-group.md](checkbox-group.md).
- **In a `DsField`**, only when it needs helper text or an error message (e.g. "You must accept the terms"). The text stays on the checkbox's `label`; the DsField adds `description`/`error` and gets no `label`. See [field.md](field.md).

```tsx
<DsCheckbox label="Remember me" />

<DsField error="You must accept the terms.">
  <DsCheckbox label="I agree to the terms" required />
</DsField>
```

## Props

| Prop             | Write as                           | Default (omit) | Notes                                                            |
| ---------------- | ---------------------------------- | -------------- | ---------------------------------------------------------------- |
| `label`          | `label="Remember me"`              | –              | The visible text. Plain text.                                    |
| `aria-label`     | `aria-label="DsSelect row"`          | –              | Only when there's no visible text. Required then, and never with `label`. |
| `size`           | `size="small"`, `size="large"`     | `medium`       | Box 14/16/18px. Never inside a `DsCheckboxGroup`.                  |
| `defaultChecked` | `defaultChecked`                   | unticked       | Starts ticked. Never inside a `DsCheckboxGroup` (use the group's `defaultValue`). |
| `indeterminate`  | `indeterminate`                    | off            | Shows a dash (e.g. a "Select all" with some selected).           |
| `disabled`       | `disabled`                         | off            | Disabled state.                                                  |
| `required`       | `required`                         | off            | Must be ticked to submit a [`DsForm`](form.md).                    |
| `name`           | `name="terms"`                     | –              | Only for a checkbox directly inside a `DsForm` (no `DsField` or group around it; otherwise `name` goes on the wrapper). |
| `value`          | `value="email"`                    | –              | Only inside a `DsCheckboxGroup`, where it's required and unique.   |

These are the only props to use. No `checked`, `onCheckedChange`, `className`, `style` or event handlers. No children: the tag is always self-closing and the text goes in `label`.

## Base setup

Start from the minimal checkbox:

```tsx
<DsCheckbox label="Label" />
```

Then add only the props the input needs, in this order:

1. `value="…"` if it's inside a `DsCheckboxGroup`
2. `name="…"` if it's directly inside a `DsForm`
3. `label="…"`, or `aria-label="…"` if there's no visible text
4. `size="small"` or `size="large"` if it isn't medium (not in a group)
5. `defaultChecked` if it's ticked (not in a group)
6. `indeterminate` if it shows a dash
7. `required` if it must be ticked
8. `disabled` if it's disabled

Every compatible prop at once, for reference only:

```tsx
<DsCheckbox name="terms" label="I agree to the terms" size="large" defaultChecked required disabled />
```

### Composing rules

- Leave out any prop that's set to its default. Never write `size="medium"` or `defaultChecked={false}`.
- Write boolean props as bare attributes.
- Use `label` for the text. Never wrap a DsCheckbox in a `<label>`, `<span>` or `DsField label`.
- `indeterminate` overrides the tick visually, so don't combine it with `defaultChecked`.
- Several related checkboxes under one heading go in a `DsCheckboxGroup`, not separate Fields.

## Valid variants

| Variant       | Write as                                    |
| ------------- | ------------------------------------------- |
| Unticked      | `<DsCheckbox label="…" />`                    |
| Ticked        | `<DsCheckbox label="…" defaultChecked />`     |
| Indeterminate | `<DsCheckbox label="…" indeterminate />`      |
| No visible label | `<DsCheckbox aria-label="…" />`            |

Each works in every size and can be disabled.

## Visual identification

Use this to match checkboxes in an image. A round control is a radio button, which isn't supported.

| Looks like                                                       | Means             |
| ---------------------------------------------------------------- | ----------------- |
| Small white square, 1px grey border `#c4c4ca`                    | Unticked          |
| Near-black square `#18181b` with a white tick                    | `defaultChecked`  |
| Near-black square `#18181b` with a white dash                    | `indeterminate`   |
| Light grey square `#eeeef0`, light border `#dcdce0`, grey tick or empty, grey label `#7d7d86` | `disabled` (ticked if the tick shows) |
| Red border `#dc2626` with red text below                         | In a `DsField` with `invalid error="…"` |

A ticked checkbox in any other colour (blue, green) is still `defaultChecked`; report the colour under "Differences".

**Size** (pick the nearest; measure the box):

| Size   | Box  | Label text | Box radius | Gap to label |
| ------ | ---- | ---------- | ---------- | ------------ |
| small  | 14px | 13px       | 3px        | 6px          |
| medium | 16px | 14px       | 4px        | 8px          |
| large  | 18px | 16px       | 5px        | 10px         |

If unclear, use medium (omit `size`).

## Input-to-prop mapping

| User says                                         | Write as                     |
| ------------------------------------------------- | ---------------------------- |
| checkbox, tick box, check box, opt-in             | `<DsCheckbox label="…" />`     |
| checked, ticked, selected, on                     | `defaultChecked`             |
| unchecked, empty, off                             | no props                     |
| partially selected, mixed, some selected, dash    | `indeterminate`              |
| required, must accept                             | `required`                   |
| disabled, greyed out                              | `disabled`                   |
| small, compact / large, big                       | `size="small"` / `size="large"` |
| list of checkboxes, "choose any", multiple options under a heading | `DsCheckboxGroup`, see [checkbox-group.md](checkbox-group.md) |
| switch, on/off slider                             | Not supported (see below)    |

## Not supported

The DsCheckbox can't do any of the following. Don't approximate them with other props, wrappers, raw HTML or styles. Build the closest supported checkbox (or leave it out) and report it under "Differences" or "Not available":

- Radio buttons (single choice, round). Leave them out and report them under "Not available". Don't substitute checkboxes.
- Switches. Leave them out and report them under "Not available".
- DsCheckbox cards or tiles (a bordered box around the checkbox and text).
- A description line under the label. Wrap in a `DsField` with `description` if the user asks for helper text.
- Links or bold text inside the label. Use plain text and report it.
- Label on the left of the box.
- Colours other than black for the ticked box.
- Sizes other than small, medium and large.
- Any custom `className` or `style`.

## label and aria-label

```tsx
<DsCheckbox label="Remember me" />
<DsCheckbox aria-label="DsSelect row" />
```

## size

```tsx
<DsCheckbox size="small" label="Small" />
<DsCheckbox label="Medium" />
<DsCheckbox size="large" label="Large" />
```

## defaultChecked and indeterminate

```tsx
<DsCheckbox label="Email me updates" defaultChecked />
<DsCheckbox label="Select all" indeterminate />
```

## disabled

```tsx
<DsCheckbox label="Sync contacts" disabled />
<DsCheckbox label="Sync contacts" defaultChecked disabled />
```

## required and name

```tsx
<DsForm>
  <DsCheckbox name="remember" label="Remember me" />
  <DsField name="terms" error="You must accept the terms.">
    <DsCheckbox label="I agree to the terms" required />
  </DsField>
</DsForm>
```

## Combined example

```tsx
<DsCheckbox size="small" label="Include archived projects" defaultChecked disabled />
```

## Code snippet translation

Input:

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="remember" checked>
  <label class="form-check-label" for="remember">Remember me</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="terms" required>
  <label class="form-check-label" for="terms">I accept the <a href="/terms">terms</a></label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="plan" id="free">
  <label class="form-check-label" for="free">Free</label>
</div>
```

Output:

```tsx
import { DsCheckbox } from '@ds-build/ui';

<DsCheckbox label="Remember me" defaultChecked />
<DsCheckbox label="I accept the terms" required />
```

- Each `form-check` becomes one `DsCheckbox`; the `<label>` text moves to `label`; `checked` → `defaultChecked`.
- The link is flattened to text: **Differences:** "terms" is plain text, not a link.
- The radio button is left out: **Not available:** "Free" radio button.
- `id`, `for` and classes are dropped.
