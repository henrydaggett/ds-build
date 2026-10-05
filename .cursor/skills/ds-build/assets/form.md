# DsForm

A native `<form>` that stacks its children vertically with 20px spacing and validates the fields inside on submit. `DsFormActions` is its row of buttons at the end.

## Quick reference

```tsx
import { DsForm, DsFormActions, DsField, DsTextInput, DsButton } from '@ds-build/ui';

<DsForm>
  <DsField label="Label" name="label">
    <DsTextInput />
  </DsField>
  <DsFormActions>
    <DsButton type="submit">Submit</DsButton>
  </DsFormActions>
</DsForm>
```

Allowed props: none on `DsForm`. `align` on `DsFormActions`. Nothing else.

## Import

Use one import line from `@ds-build/ui` with `DsForm`, `DsFormActions` (if there are buttons) and every component inside:

```tsx
import { DsForm, DsFormActions, DsFieldset, DsField, DsTextInput, DsSelect, DsCheckbox, DsButton } from '@ds-build/ui';
```

Never import from sub-paths. No CSS import is needed.

## Structure

`DsForm` children, in the order shown in the input:

- [`DsField`](field.md)s, each with a `name`
- [`DsFieldset`](fieldset.md)s for titled sections (their Fields also get a `name`)
- [`DsCheckboxGroup`](checkbox-group.md)s with a `name`
- Standalone [`DsCheckbox`](checkbox.md)es with a `name`
- One `DsFormActions`, always last, containing [`DsButton`](button.md)s

```tsx
<DsForm>
  <DsFieldset legend="…">
    <DsField label="…" name="…">…</DsField>
  </DsFieldset>
  <DsCheckboxGroup label="…" name="…">…</DsCheckboxGroup>
  <DsCheckbox name="…" label="…" />
  <DsFormActions>
    <DsButton type="submit">…</DsButton>
    <DsButton appearance="outline">…</DsButton>
  </DsFormActions>
</DsForm>
```

## Props

**DsForm:** no props. Never write `onSubmit`, `onFormSubmit`, `action`, `method`, `errors`, `validationMode`, `className` or `style`.

**DsFormActions:**

| Prop       | Write as        | Default (omit) | Notes                                      |
| ---------- | --------------- | -------------- | ------------------------------------------ |
| `align`    | `align="end"`   | `start`        | Pushes the buttons to the right edge.      |
| `children` | `DsButton`s       | –              | Required. Buttons only, 12px apart.        |

## Base setup

Start from the minimal form:

```tsx
<DsForm>
  <DsField label="Label" name="label">
    <DsTextInput />
  </DsField>
  <DsFormActions>
    <DsButton type="submit">Submit</DsButton>
  </DsFormActions>
</DsForm>
```

Then:

1. Add each field, section, group and checkbox in the order shown.
2. Give every `DsField`, `DsCheckboxGroup` and standalone `DsCheckbox` a `name`: a short lowercase id from its label (`"Email address"` → `"email"`, `"Company name"` → `"company"`). Names are unique.
3. Mark mandatory controls `required` and give their DsField an `error` message (see [field.md](field.md)).
4. Put the buttons in one `DsFormActions` at the end, primary action first. Give the submitting button `type="submit"`.
5. Add `align="end"` to `DsFormActions` if the buttons sit on the right.

### Composing rules

- Only use a `DsForm` when the input is a form (fields with a submit action). A lone search box or a settings toggle doesn't need one.
- No wrappers between `DsForm` and its children: the 20px spacing is built in. Don't add `<div>`s, spacing styles or dividers.
- Exactly one button has `type="submit"`. Other buttons (Cancel, Back) have no `type`.
- Buttons inside `DsFormActions` follow [button.md](button.md); `DsFormActions` holds nothing but Buttons.
- Fields inside a DsForm fill its width. If the input shows a narrow form, put a layout `style` with a `maxWidth` on a wrapping `<div>` only if the user asks for a specific width.

## Visual identification

Use this to match forms in an image.

| Looks like                                                        | Means                       |
| ----------------------------------------------------------------- | --------------------------- |
| Labelled inputs stacked 20px apart, with buttons at the bottom    | `DsForm` + `DsField`s + `DsFormActions` |
| Buttons left-aligned under the fields, 12px apart                 | `<DsFormActions>`             |
| Buttons right-aligned                                             | `<DsFormActions align="end">` |
| Section titles splitting the fields                               | `DsFieldset`s                 |

A form inside a card, modal or page with a heading: build only the form and report the card/modal/heading under "Not available" if no asset covers it.

## Input-to-prop mapping

| User says                                     | Write as                         |
| --------------------------------------------- | -------------------------------- |
| form, sign-up, login, checkout, contact form  | `<DsForm>`                         |
| submit, save, send, create, sign in (button)  | `<DsButton type="submit">` in `DsFormActions` |
| cancel, back, reset (button)                  | `<DsButton appearance="outline">` in `DsFormActions` |
| buttons on the right, right-aligned actions   | `<DsFormActions align="end">`      |
| required, mandatory field                     | `required` on the control + `error` on its DsField |

## Not supported

The DsForm can't do any of the following. Don't approximate them with other props, wrappers, raw HTML or styles. Build the closest supported form (or leave it out) and report it under "Differences" or "Not available":

- Multi-column layouts or fields side by side. Stack them and report it.
- Multi-step wizards, progress bars or step indicators.
- A form title, intro paragraph or card container. No asset covers headings or cards; report them under "Not available".
- Server error summaries or success banners.
- Links in the actions row (e.g. "Forgot password?"). Leave them out and report them.
- Buttons outside `DsFormActions`, or `DsFormActions` anywhere but last.
- Any custom `className` or `style` on `DsForm` or `DsFormActions`.

## DsFormActions align

```tsx
<DsFormActions>
  <DsButton type="submit">Save</DsButton>
  <DsButton appearance="outline">Cancel</DsButton>
</DsFormActions>

<DsFormActions align="end">
  <DsButton appearance="outline">Cancel</DsButton>
  <DsButton type="submit">Save</DsButton>
</DsFormActions>
```

With `align="end"`, keep the input's button order (often Cancel first, primary last).

## Combined example

```tsx
import { DsForm, DsFormActions, DsFieldset, DsField, DsTextInput, DsSelect, DsCheckboxGroup, DsCheckbox, DsButton } from '@ds-build/ui';

<DsForm>
  <DsFieldset legend="Account">
    <DsField label="Name" name="name" error="Enter your name.">
      <DsTextInput placeholder="Ada Lovelace" required />
    </DsField>
    <DsField label="Email" name="email" error="Enter a valid email address.">
      <DsTextInput type="email" placeholder="you@example.com" required />
    </DsField>
    <DsField label="Role" name="role">
      <DsSelect
        placeholder="Select a role"
        items={[
          { value: 'designer', label: 'Designer' },
          { value: 'engineer', label: 'Engineer' },
        ]}
      />
    </DsField>
  </DsFieldset>
  <DsCheckboxGroup label="Notifications" name="notifications" defaultValue={['email']}>
    <DsCheckbox value="email" label="Email" />
    <DsCheckbox value="sms" label="SMS" />
  </DsCheckboxGroup>
  <DsField name="terms" error="You must accept the terms.">
    <DsCheckbox label="I agree to the terms" required />
  </DsField>
  <DsFormActions>
    <DsButton type="submit">Create account</DsButton>
    <DsButton appearance="outline">Cancel</DsButton>
  </DsFormActions>
</DsForm>
```

## Code snippet translation

Input:

```html
<form action="/login" method="post" class="card p-4">
  <h2>Sign in</h2>
  <div class="mb-3">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" class="form-control" required>
  </div>
  <div class="mb-3">
    <label for="pw">Password</label>
    <input type="password" id="pw" name="password" class="form-control" required>
  </div>
  <div class="form-check mb-3">
    <input type="checkbox" id="remember" name="remember" class="form-check-input">
    <label for="remember">Remember me</label>
  </div>
  <div class="d-flex justify-content-end gap-2">
    <a href="/forgot">Forgot password?</a>
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
```

Output:

```tsx
import { DsForm, DsFormActions, DsField, DsTextInput, DsCheckbox, DsButton } from '@ds-build/ui';

<DsForm>
  <DsField label="Email" name="email">
    <DsTextInput type="email" required />
  </DsField>
  <DsField label="Password" name="password">
    <DsTextInput type="password" required />
  </DsField>
  <DsCheckbox name="remember" label="Remember me" />
  <DsFormActions align="end">
    <DsButton type="submit">Sign in</DsButton>
  </DsFormActions>
</DsForm>
```

- `<form>` → `DsForm`; `action`, `method` and the `card p-4` styling are dropped.
- Each label + input → `DsField` + `DsTextInput`; the input's `name` moves to the DsField.
- `justify-content-end` → `DsFormActions align="end"`; `btn-primary` → default DsButton.
- **Not available:** "Sign in" heading, card container, "Forgot password?" link.
