# DsField

Wraps one form control with a label above it and optional helper text and error message below. Connects the label, description and validation to the control automatically.

## Quick reference

```tsx
import { DsField, DsTextInput } from '@ds-build/ui';

<DsField label="Label">
  <DsTextInput />
</DsField>
```

Allowed props: `label`, `description`, `error`, `invalid`, `disabled`, `name`, and exactly one control child. Nothing else.

## Import

Use one import line from `@ds-build/ui`, shared with the control and other components:

```tsx
import { DsField, DsTextInput, DsSelect } from '@ds-build/ui';
```

Never import from sub-paths. No CSS import is needed.

## Structure

Exactly one child, which must be a `DsTextInput`, `DsSelect` or `DsCheckbox`. Put control props (`type`, `placeholder`, `required`, `items`…) on the child, as documented in [text-input.md](text-input.md), [select.md](select.md) and [checkbox.md](checkbox.md).

```tsx
<DsField label="Email" description="We'll never share it." error="Enter a valid email.">
  <DsTextInput type="email" required />
</DsField>
```

Order on screen: label, control, description, error.

With a `DsCheckbox`, the DsField takes no `label`: the text stays on the checkbox, and the DsField only adds `description` and/or `error`. Only use a DsField around a checkbox when one of those is needed.

```tsx
<DsField error="You must accept the terms.">
  <DsCheckbox label="I agree to the terms" required />
</DsField>
```

## Props

| Prop          | Write as                                 | Default (omit) | Notes                                                       |
| ------------- | ---------------------------------------- | -------------- | ----------------------------------------------------------- |
| `label`       | `label="Email"`                          | –              | Text above the control. Never with a `DsCheckbox` child.      |
| `description` | `description="We'll never share it."`    | –              | Grey helper text under the control.                         |
| `error`       | `error="Enter a valid email address."`   | –              | Red text under the description. See composing rules.        |
| `invalid`     | `invalid`                                | off            | Red control border and shows `error` immediately.           |
| `disabled`    | `disabled`                               | off            | Disables the control and greys out the label.               |
| `name`        | `name="email"`                           | –              | Only inside a [`DsForm`](form.md). Lowercase id from the label. |

These are the only props to use. No `className`, `style`, `id`, `aria-*` or event handlers.

## Base setup

Start from the minimal field:

```tsx
<DsField label="Label">
  <DsTextInput />
</DsField>
```

Then add only the props the input needs, in this order:

1. `label="…"` (skip for a `DsCheckbox` child)
2. `name="…"` if it's inside a `DsForm`
3. `description="…"` if there's helper text
4. `invalid` if the field is shown in an error state
5. `error="…"` if there's an error message
6. `disabled` if the field is disabled

Every compatible prop at once, for reference only:

```tsx
<DsField
  label="Username"
  name="username"
  description="Letters and numbers only."
  invalid
  error="This username is taken."
  disabled
>
  <DsTextInput defaultValue="henry" />
</DsField>
```

### Composing rules

- Write boolean props as bare attributes: `invalid`, `disabled`.
- **Static errors:** `error` alone only shows after a failed submit, so it's invisible in a static snippet. When the input shows or describes an error message *now*, write `invalid` with `error`. Write `error` without `invalid` only for a validation message on a `required` control in a `DsForm` ("show 'Enter your name' if it's left empty").
- `invalid` without `error` gives a red border and no message. Only use it when the input shows a red field with no text.
- Prefer `disabled` on the DsField over `disabled` on the control: it greys out the label too.
- `required` goes on the control, not the DsField. There is no required asterisk.
- One control per DsField. Several checkboxes under one heading are a [`DsCheckboxGroup`](checkbox-group.md), which never goes in a DsField.
- Fields stack with even spacing inside a `DsForm` or `DsFieldset`. Outside them, place Fields one after another without wrappers unless the layout needs one.
- Open tag on one line if it fits in ~100 characters, otherwise one attribute per line.

## Valid variants

| Variant           | Write as                                         |
| ----------------- | ------------------------------------------------ |
| Label only        | `<DsField label="…">`                              |
| With helper text  | `<DsField label="…" description="…">`              |
| Invalid           | `<DsField label="…" invalid error="…">`            |
| Disabled          | `<DsField label="…" disabled>`                     |
| DsCheckbox with error | `<DsField error="…">` around a `DsCheckbox`        |

## Visual identification

Use this to match labelled form fields in an image.

| Looks like                                                            | Means                       |
| --------------------------------------------------------------------- | --------------------------- |
| 14px medium-weight text `#18181b` directly above an input or dropdown (6px gap) | `label`           |
| 13px grey text `#7d7d86` under the control                            | `description`               |
| 13px red text `#dc2626` under the control (below any description)     | `invalid error="…"`         |
| Red control border `#dc2626` with no message                          | `invalid`                   |
| Grey label `#7d7d86` and a grey disabled control                      | `disabled`                  |

Placeholder-only inputs with no text above them have no DsField label: use the control on its own with `aria-label`. A label to the left of the control is still a DsField label above it; report the layout under "Differences".

A red asterisk next to the label means the control is `required`; the asterisk itself isn't rendered (report it under "Differences").

## Input-to-prop mapping

| User says                                              | Write as                          |
| ------------------------------------------------------ | --------------------------------- |
| label, field name, title above the input               | `label="…"`                       |
| helper text, hint, description, note under the field   | `description="…"`                 |
| error, invalid, "shows an error", validation message (visible) | `invalid error="…"`        |
| "show X if left empty", "validate on submit"           | `error="…"` + `required` on the control, inside a `DsForm` |
| disabled, locked, greyed out                           | `disabled`                        |
| required, mandatory, asterisk                          | `required` on the control         |

## Not supported

The DsField can't do any of the following. Don't approximate them with other props, wrappers, raw HTML or styles. Build the closest supported field (or leave it out) and report it under "Differences" or "Not available":

- Required asterisks or "(optional)" markers. Put `required` on the control and report the marker.
- Labels beside the control (horizontal layout). Use the default stacked layout and report it.
- Success or warning states (green/amber text or borders).
- Icons in the label, tooltips or info buttons next to the label.
- Character counts or links in the description.
- Controls other than `DsTextInput`, `DsSelect` and `DsCheckbox`, or more than one control.
- Any custom `className` or `style`.

## label

```tsx
<DsField label="Full name">
  <DsTextInput />
</DsField>
```

## description

```tsx
<DsField label="Password" description="At least 8 characters.">
  <DsTextInput type="password" />
</DsField>
```

## invalid and error

```tsx
<DsField label="Email" invalid error="Enter a valid email address.">
  <DsTextInput type="email" defaultValue="ada@" />
</DsField>

<DsForm>
  <DsField label="Name" name="name" error="Enter your name.">
    <DsTextInput required />
  </DsField>
</DsForm>
```

## disabled

```tsx
<DsField label="Plan" disabled>
  <DsSelect
    defaultValue="pro"
    items={[
      { value: 'free', label: 'Free' },
      { value: 'pro', label: 'Pro' },
    ]}
  />
</DsField>
```

## With a DsCheckbox

```tsx
<DsField description="We'll email you once a month.">
  <DsCheckbox label="Subscribe to the newsletter" />
</DsField>
```

## Combined example

```tsx
<DsField label="Country" description="Where your company is registered." invalid error="Choose a country.">
  <DsSelect
    placeholder="Select a country"
    required
    items={[
      { value: 'uk', label: 'United Kingdom' },
      { value: 'fr', label: 'France' },
    ]}
  />
</DsField>
```

## Code snippet translation

Input:

```html
<div class="form-group has-error">
  <label for="phone">Phone <span class="required">*</span></label>
  <input id="phone" type="tel" class="form-control" value="0123">
  <small class="form-text text-muted">Include your country code.</small>
  <span class="help-block error">That number looks too short.</span>
</div>
```

Output:

```tsx
import { DsField, DsTextInput } from '@ds-build/ui';

<DsField
  label="Phone"
  description="Include your country code."
  invalid
  error="That number looks too short."
>
  <DsTextInput type="tel" defaultValue="0123" required />
</DsField>
```

- `<label>` → `label`; `.form-text` → `description`; `.help-block.error` + `has-error` → `invalid error="…"`.
- `value` → `defaultValue` on the control; `type="tel"` is kept.
- The asterisk becomes `required` on the control: **Differences:** the required asterisk isn't shown.
- `id`, `for`, classes and the wrapper `<div>` are dropped (the DsField replaces it).
