# DsTextInput

A single-line text input that fills the width of its container. Renders a native `<input>`. Its label, helper text and error come from a wrapping [`DsField`](field.md).

## Quick reference

```tsx
import { DsField, DsTextInput } from '@ds-build/ui';

<DsField label="Label">
  <DsTextInput />
</DsField>
```

Allowed props: `size`, `type`, `placeholder`, `defaultValue`, `required`, `disabled`, `aria-label` (no visible label only). Nothing else.

## Import

Use one import line from `@ds-build/ui`, shared with the other components in the snippet:

```tsx
import { DsField, DsTextInput } from '@ds-build/ui';
```

Never import from sub-paths. No CSS import is needed.

## Structure

A DsTextInput with a visible label always goes inside a `DsField`; the label, description and error are DsField props (see [field.md](field.md)). Without a visible label (e.g. a search bar), use it on its own with `aria-label`.

```tsx
<DsField label="Email" description="We'll never share it.">
  <DsTextInput type="email" placeholder="you@example.com" />
</DsField>

<DsTextInput type="search" placeholder="Search" aria-label="Search" />
```

## Props

| Prop           | Write as                                                     | Default (omit) | Notes                                                       |
| -------------- | ------------------------------------------------------------ | -------------- | ----------------------------------------------------------- |
| `size`         | `size="small"`, `size="large"`                               | `medium`       | Heights 28/36/44px.                                         |
| `type`         | `type="email"`, `type="password"`, `type="search"`, `type="tel"`, `type="url"`, `type="number"` | `text` | Never `type="text"`. Never `date`, `checkbox`, `file` etc. |
| `placeholder`  | `placeholder="you@example.com"`                              | none           | Grey hint text shown while empty.                           |
| `defaultValue` | `defaultValue="Acme Inc."`                                   | empty          | Text already typed in.                                      |
| `required`     | `required`                                                   | off            | Fails validation when empty on submit (see [form.md](form.md)). |
| `disabled`     | `disabled`                                                   | off            | Disabled state. Prefer `disabled` on the `DsField` when there is one. |
| `aria-label`   | `aria-label="Search"`                                        | –              | Only when there's no `DsField` with a `label`. Required then. |

These are the only props to use. No `value`, `onChange`, `name` (put it on the `DsField`), `id`, `className`, `style` or event handlers. No children: the tag is always self-closing.

## Base setup

Start from the minimal labelled input:

```tsx
<DsField label="Label">
  <DsTextInput />
</DsField>
```

Then add only the props the input needs, in this order:

1. `size="small"` or `size="large"` if it isn't medium
2. `type="…"` if it's an email, password, search, phone, URL or number field
3. `placeholder="…"` if there's grey hint text
4. `defaultValue="…"` if it already contains text
5. `required` if the user says it's required (or it's marked with an asterisk)
6. `disabled` if it's disabled and there's no `DsField`
7. `aria-label="…"` if there's no `DsField` label

Every compatible prop at once, for reference only:

```tsx
<DsTextInput
  size="large"
  type="email"
  placeholder="you@example.com"
  defaultValue="ada@example.com"
  required
  disabled
  aria-label="Email"
/>
```

### Composing rules

- Leave out any prop that's set to its default. Never write `size="medium"` or `type="text"`.
- Write boolean props as bare attributes: `required`, `disabled`.
- Placeholder vs value: grey text in an empty-looking input is `placeholder`; dark text is `defaultValue`.
- Never use `aria-label` inside a `DsField` that has a `label`.
- Red/invalid styling comes from the `DsField` (`invalid` + `error`), never from the input.
- Keep it on one line unless it runs past ~100 characters, then one attribute per line.

## Valid variants

| Variant           | Write as                                               |
| ----------------- | ------------------------------------------------------ |
| Empty             | `<DsTextInput />` or `<DsTextInput placeholder="…" />`     |
| Filled            | `<DsTextInput defaultValue="…" />`                       |
| Disabled          | `<DsField label="…" disabled>` around `<DsTextInput />`    |
| Invalid           | `<DsField label="…" invalid error="…">` around `<DsTextInput />` |

There's one visual style. No filled/underlined/borderless variants.

## Visual identification

Use this to match text inputs in an image.

| Looks like                                                    | Means                          |
| ------------------------------------------------------------- | ------------------------------ |
| White box, 1px grey border `#c4c4ca`, full width              | DsTextInput                      |
| Grey text `#7d7d86` inside                                    | `placeholder`                  |
| Near-black text `#18181b` inside                              | `defaultValue`                 |
| Red border `#dc2626`, usually with red text below             | Invalid: `DsField invalid error="…"` |
| Light grey fill `#eeeef0`, light border `#dcdce0`, grey text  | Disabled                       |
| Blue double ring around it (`#2563eb`)                        | Focus. Can't be set statically; ignore it |

A box with a chevron on the right is a [`DsSelect`](select.md), not a DsTextInput. A dotted/masked value (`••••`) means `type="password"`. A magnifying glass icon means `type="search"`; the icon itself isn't supported (report it).

**Size** (pick the nearest; height is the most reliable signal):

| Size   | Height | Text | Corner radius | Side padding |
| ------ | ------ | ---- | ------------- | ------------ |
| small  | 28px   | 13px | 6px           | 8px          |
| medium | 36px   | 14px | 8px           | 12px         |
| large  | 44px   | 16px | 10px          | 16px         |

If unclear, use medium (omit `size`).

## Input-to-prop mapping

| User says                                         | Write as                  |
| ------------------------------------------------- | ------------------------- |
| text field, input, text box, name field           | `<DsTextInput />` in a `DsField` |
| email                                             | `type="email"`            |
| password                                          | `type="password"`         |
| search, search bar                                | `type="search"` (usually with `aria-label`) |
| phone, telephone, mobile number                   | `type="tel"`              |
| website, URL, link                                | `type="url"`              |
| number, amount, quantity                          | `type="number"`           |
| hint, placeholder, example text                   | `placeholder="…"`         |
| prefilled, with value, already filled in          | `defaultValue="…"`        |
| required, mandatory                               | `required`                |
| disabled, read-only look, greyed out              | `disabled` (on the `DsField` if there is one) |
| small, compact / large, big                       | `size="small"` / `size="large"` |

## Not supported

The DsTextInput can't do any of the following. Don't approximate them with other props, wrappers, raw HTML or styles. Build the closest supported input (or leave it out) and report it under "Differences" or "Not available":

- Multi-line text (textarea). Leave it out and report it under "Not available".
- Date, time, colour, file or range inputs. Leave them out and report them under "Not available".
- Leading or trailing icons, prefixes/suffixes (`$`, `.com`), clear buttons, show-password buttons. Build the plain input and report it.
- Character counters.
- Fixed or custom widths. It always fills its container; constrain width with a layout `style` on a parent only if the input requires it.
- Inline labels or floating labels. Use a `DsField` label above.
- Sizes other than small, medium and large.
- Any custom `className` or `style`.

## size

```tsx
<DsTextInput size="small" aria-label="Small" />
<DsTextInput aria-label="Medium" />
<DsTextInput size="large" aria-label="Large" />
```

## type

```tsx
<DsField label="Email">
  <DsTextInput type="email" />
</DsField>
<DsField label="Password">
  <DsTextInput type="password" />
</DsField>
```

## placeholder and defaultValue

```tsx
<DsField label="Company">
  <DsTextInput placeholder="Acme Inc." />
</DsField>
<DsField label="Company">
  <DsTextInput defaultValue="Acme Inc." />
</DsField>
```

## required

```tsx
<DsField label="Name" error="Enter your name.">
  <DsTextInput required />
</DsField>
```

## disabled

```tsx
<DsField label="Workspace URL" disabled>
  <DsTextInput defaultValue="acme.ds-build.app" />
</DsField>
<DsTextInput disabled aria-label="Search" />
```

## aria-label

```tsx
<DsTextInput size="small" type="search" placeholder="Search projects" aria-label="Search projects" />
```

## Combined example

```tsx
<DsField label="Email" description="We'll send a confirmation link." invalid error="Enter a valid email address.">
  <DsTextInput size="large" type="email" defaultValue="ada@example" required />
</DsField>
```

## Code snippet translation

Input:

```html
<div class="mb-3">
  <label for="email" class="form-label">Email address</label>
  <input type="email" class="form-control is-invalid" id="email" placeholder="name@example.com" required>
  <div class="invalid-feedback">Please enter a valid email.</div>
</div>
<div class="input-group">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control form-control-sm" placeholder="Username">
</div>
<textarea class="form-control" rows="3"></textarea>
```

Output:

```tsx
import { DsField, DsTextInput } from '@ds-build/ui';

<DsField label="Email address" invalid error="Please enter a valid email.">
  <DsTextInput type="email" placeholder="name@example.com" required />
</DsField>
<DsTextInput size="small" placeholder="Username" aria-label="Username" />
```

- `<label>` + `.invalid-feedback` + `is-invalid` → `DsField label`, `error`, `invalid`.
- `form-control-sm` → `size="small"`. With no label, the placeholder text becomes `aria-label`.
- The `@` prefix is dropped: **Differences:** "@" prefix left off the Username input.
- The textarea is left out: **Not available:** multi-line text area.
- `id`, `for`, `class` and `mb-3` wrapper are dropped.
