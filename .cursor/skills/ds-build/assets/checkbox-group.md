# DsCheckboxGroup

A labelled set of `DsCheckbox`es that share one value (the list of ticked options). Has its own label, helper text and error, so it never goes inside a `DsField`. Renders a `<fieldset>` with a legend.

## Quick reference

```tsx
import { DsCheckboxGroup, DsCheckbox } from '@ds-build/ui';

<DsCheckboxGroup label="Label">
  <DsCheckbox value="one" label="One" />
  <DsCheckbox value="two" label="Two" />
</DsCheckboxGroup>
```

Allowed props: `label`, `aria-label` (no visible label only), `description`, `error`, `invalid`, `size`, `orientation`, `defaultValue`, `name`, `disabled`, and `DsCheckbox` children. Nothing else.

## Import

Use one import line from `@ds-build/ui`, shared with the other components in the snippet. Always import `DsCheckbox` with it:

```tsx
import { DsCheckboxGroup, DsCheckbox } from '@ds-build/ui';
```

Never import from sub-paths. No CSS import is needed.

## Structure

Children are `DsCheckbox`es only, each with a unique `value` and a `label`. Inside a group, a DsCheckbox takes only `value`, `label` and `disabled`. DsCheckbox props are in [checkbox.md](checkbox.md).

```tsx
<DsCheckboxGroup label="…">
  <DsCheckbox value="a" label="A" />
  <DsCheckbox value="b" label="B" />
</DsCheckboxGroup>
```

## Props

| Prop           | Write as                                        | Default (omit) | Notes                                                    |
| -------------- | ----------------------------------------------- | -------------- | -------------------------------------------------------- |
| `label`        | `label="Notifications"`                         | –              | Heading above the checkboxes.                            |
| `aria-label`   | `aria-label="Columns"`                          | –              | Only when there's no visible heading. Required then.     |
| `description`  | `description="Choose how we contact you."`      | –              | Grey helper text under the checkboxes.                   |
| `error`        | `error="Choose at least one."`                  | –              | Red text under the description. See composing rules.     |
| `invalid`      | `invalid`                                       | off            | Shows `error` immediately.                               |
| `size`         | `size="small"`, `size="large"`                  | `medium`       | Sizes every checkbox.                                    |
| `orientation`  | `orientation="horizontal"`                      | `vertical`     | Puts the checkboxes in a wrapping row.                   |
| `defaultValue` | `defaultValue={['email']}`, `defaultValue={['email', 'sms']}` | nothing ticked | `value`s of the ticked checkboxes. Always an array. |
| `name`         | `name="notifications"`                          | –              | Only inside a [`DsForm`](form.md).                         |
| `disabled`     | `disabled`                                      | off            | Disables every checkbox.                                 |

These are the only props to use. No `value`, `onValueChange`, `className`, `style` or event handlers.

## Base setup

Start from the minimal group:

```tsx
<DsCheckboxGroup label="Label">
  <DsCheckbox value="one" label="One" />
  <DsCheckbox value="two" label="Two" />
</DsCheckboxGroup>
```

Then add only the props the input needs, in this order:

1. `label="…"`, or `aria-label="…"` if there's no visible heading
2. `name="…"` if it's inside a `DsForm`
3. `description="…"` if there's helper text
4. `size="small"` or `size="large"` if it isn't medium
5. `orientation="horizontal"` if the checkboxes sit in a row
6. `defaultValue={[…]}` if any are ticked
7. `invalid` and `error="…"` if an error is shown
8. `disabled` if the whole group is disabled

Every compatible prop at once, for reference only:

```tsx
<DsCheckboxGroup
  label="Interests"
  name="interests"
  description="Pick as many as you like."
  size="large"
  orientation="horizontal"
  defaultValue={['design']}
  invalid
  error="Choose at least one interest."
  disabled
>
  <DsCheckbox value="design" label="Design" />
  <DsCheckbox value="code" label="Code" />
</DsCheckboxGroup>
```

### Composing rules

- Leave out props set to their defaults. Never write `size="medium"` or `orientation="vertical"`.
- Tick checkboxes through the group's `defaultValue`, never `defaultChecked` on a child. Every entry must match a child's `value`.
- Each `value` is a short lowercase id derived from the label (`"Push notifications"` → `"push"`).
- `error` without `invalid` only appears after a failed submit, so it's invisible in a static snippet. Write `invalid` with `error` when the error is shown in the input; write `error` alone only when the user describes a validation message for a form.
- To disable one option, put `disabled` on that `DsCheckbox`; to disable all, put it on the group.
- Never wrap a DsCheckboxGroup in a `DsField`.
- Open tag on one line if it fits in ~100 characters, otherwise one attribute per line.

## Valid variants

| Variant      | Write as                                            |
| ------------ | --------------------------------------------------- |
| Vertical     | `<DsCheckboxGroup label="…">`                         |
| Horizontal   | `<DsCheckboxGroup label="…" orientation="horizontal">` |
| Invalid      | `<DsCheckboxGroup label="…" invalid error="…">`       |

## Visual identification

Use this to match groups of checkboxes in an image.

| Looks like                                                                | Means                    |
| ------------------------------------------------------------------------- | ------------------------ |
| A 14px medium-weight heading `#18181b`, then checkboxes 8px apart         | `label` + vertical group |
| Checkboxes side by side, 20px apart, wrapping onto new lines              | `orientation="horizontal"` |
| 13px grey text `#7d7d86` under the checkboxes                             | `description`            |
| 13px red text `#dc2626` under the checkboxes                              | `invalid error="…"`      |
| Grey heading and checkboxes                                               | `disabled`               |

Two or more checkboxes with no heading and no shared meaning are separate `DsCheckbox`es, not a group. DsCheckbox box sizes are in [checkbox.md](checkbox.md); use them to pick `size`.

## Input-to-prop mapping

| User says                                                  | Write as                      |
| ---------------------------------------------------------- | ----------------------------- |
| checkbox list, "choose any", "select all that apply", options under a heading | `<DsCheckboxGroup>` |
| inline, in a row, side by side                             | `orientation="horizontal"`    |
| "X and Y are ticked/selected"                              | `defaultValue={['x', 'y']}`   |
| helper text, hint                                          | `description="…"`             |
| error, "must choose one", validation message shown         | `invalid error="…"`           |
| small, compact / large, big                                | `size="small"` / `size="large"` |
| disabled, greyed out                                       | `disabled`                    |

## Not supported

The DsCheckboxGroup can't do any of the following. Don't approximate them. Build the closest supported group (or leave it out) and report it under "Differences" or "Not available":

- Radio groups (pick exactly one, round inputs). Leave them out and report them under "Not available".
- A "select all" parent that controls the others (it can't be wired up statically). Build it as a separate `DsCheckbox` with `indeterminate` above the group only if the user asks, and report that it isn't connected.
- Nested groups or indented sub-options.
- Columns or grid layouts beyond the wrapping row.
- Description text under each option.
- Children other than `DsCheckbox`.
- Any custom `className` or `style`.

## label and description

```tsx
<DsCheckboxGroup label="Notifications" description="We'll only send what you choose.">
  <DsCheckbox value="email" label="Email" />
  <DsCheckbox value="sms" label="SMS" />
</DsCheckboxGroup>
```

## orientation

```tsx
<DsCheckboxGroup label="Days" orientation="horizontal">
  <DsCheckbox value="mon" label="Mon" />
  <DsCheckbox value="tue" label="Tue" />
  <DsCheckbox value="wed" label="Wed" />
</DsCheckboxGroup>
```

## defaultValue

```tsx
<DsCheckboxGroup label="Notifications" defaultValue={['email', 'push']}>
  <DsCheckbox value="email" label="Email" />
  <DsCheckbox value="sms" label="SMS" />
  <DsCheckbox value="push" label="Push notifications" />
</DsCheckboxGroup>
```

## size

```tsx
<DsCheckboxGroup label="Filters" size="small">
  <DsCheckbox value="open" label="Open" />
  <DsCheckbox value="closed" label="Closed" />
</DsCheckboxGroup>
```

## invalid and error

```tsx
<DsCheckboxGroup label="Interests" invalid error="Choose at least one interest.">
  <DsCheckbox value="design" label="Design" />
  <DsCheckbox value="code" label="Code" />
</DsCheckboxGroup>
```

## disabled

```tsx
<DsCheckboxGroup label="Sync" defaultValue={['calendar']} disabled>
  <DsCheckbox value="calendar" label="Calendar" />
  <DsCheckbox value="contacts" label="Contacts" />
</DsCheckboxGroup>

<DsCheckboxGroup label="Sync">
  <DsCheckbox value="calendar" label="Calendar" />
  <DsCheckbox value="contacts" label="Contacts" disabled />
</DsCheckboxGroup>
```

## Combined example

```tsx
<DsCheckboxGroup
  label="Toppings"
  description="Up to three."
  orientation="horizontal"
  defaultValue={['cheese', 'basil']}
>
  <DsCheckbox value="cheese" label="Cheese" />
  <DsCheckbox value="basil" label="Basil" />
  <DsCheckbox value="olives" label="Olives" />
  <DsCheckbox value="anchovies" label="Anchovies" disabled />
</DsCheckboxGroup>
```

## Code snippet translation

Input:

```html
<fieldset>
  <legend>Contact preferences</legend>
  <label><input type="checkbox" name="contact" value="email" checked> Email</label>
  <label><input type="checkbox" name="contact" value="phone"> Phone</label>
  <label><input type="checkbox" name="contact" value="post" disabled> Post</label>
  <small class="text-muted">You can change this later.</small>
  <button type="button" onclick="selectAll()">Select all</button>
</fieldset>
```

Output:

```tsx
import { DsCheckboxGroup, DsCheckbox } from '@ds-build/ui';

<DsCheckboxGroup label="Contact preferences" description="You can change this later." defaultValue={['email']}>
  <DsCheckbox value="email" label="Email" />
  <DsCheckbox value="phone" label="Phone" />
  <DsCheckbox value="post" label="Post" disabled />
</DsCheckboxGroup>
```

- `<fieldset>` + `<legend>` → `DsCheckboxGroup label`; `<small>` → `description`.
- Each `<input type="checkbox">` becomes a `DsCheckbox`; its `value` is kept and `checked` moves to the group's `defaultValue`.
- `name` is dropped because there's no `DsForm` around it.
- The "Select all" button is left out: **Not available:** "Select all" action (can't be wired up statically).
