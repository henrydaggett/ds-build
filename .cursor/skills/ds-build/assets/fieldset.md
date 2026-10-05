# DsFieldset

Groups related fields under a section title (legend) with optional description. Renders a native `<fieldset>` with no border or background; the children stack with 16px spacing.

## Quick reference

```tsx
import { DsFieldset, DsField, DsTextInput } from '@ds-build/ui';

<DsFieldset legend="Section title">
  <DsField label="Label">
    <DsTextInput />
  </DsField>
</DsFieldset>
```

Allowed props: `legend`, `description`, `disabled`, and form children. Nothing else.

## Import

Use one import line from `@ds-build/ui`, shared with the fields inside:

```tsx
import { DsFieldset, DsField, DsTextInput } from '@ds-build/ui';
```

Never import from sub-paths. No CSS import is needed.

## Structure

Children are `DsField`s, `DsCheckboxGroup`s and standalone `DsCheckbox`es, in the order shown. A DsFieldset usually sits inside a [`DsForm`](form.md), one per titled section. Don't nest Fieldsets, and don't put `DsFormActions` inside one.

```tsx
<DsForm>
  <DsFieldset legend="Billing details" description="Used on your invoices.">
    <DsField label="Company">
      <DsTextInput />
    </DsField>
  </DsFieldset>
  <DsFormActions>
    <DsButton type="submit">Save</DsButton>
  </DsFormActions>
</DsForm>
```

## Props

| Prop          | Write as                               | Default (omit) | Notes                                          |
| ------------- | -------------------------------------- | -------------- | ---------------------------------------------- |
| `legend`      | `legend="Billing details"`             | –              | Section title above the fields.                |
| `description` | `description="Used on your invoices."` | –              | Grey text under the legend.                    |
| `disabled`    | `disabled`                             | off            | Disables and greys out every field inside.     |

These are the only props to use. No `className`, `style`, `name` or event handlers.

## Base setup

Start from the minimal fieldset:

```tsx
<DsFieldset legend="Section title">
  <DsField label="Label">
    <DsTextInput />
  </DsField>
</DsFieldset>
```

Then add only the props the input needs, in this order:

1. `legend="…"` (almost always; without it a DsFieldset adds nothing visible)
2. `description="…"` if there's text under the title
3. `disabled` if the whole section is disabled

Every compatible prop at once, for reference only:

```tsx
<DsFieldset legend="Shipping address" description="Where we'll send your order." disabled>
  <DsField label="Street">
    <DsTextInput />
  </DsField>
  <DsField label="City">
    <DsTextInput />
  </DsField>
</DsFieldset>
```

### Composing rules

- Only use a DsFieldset when the input shows or names a titled section of fields. A single list of fields under a page heading doesn't need one.
- Don't wrap one `DsCheckboxGroup` in a DsFieldset just to title it: give the group a `label` instead.
- `disabled` on the DsFieldset replaces `disabled` on each DsField inside. Don't repeat it.
- Don't add spacing between children; the 16px gap is built in.

## Visual identification

Use this to match form sections in an image.

| Looks like                                                                 | Means                    |
| -------------------------------------------------------------------------- | ------------------------ |
| 16px medium-weight title `#18181b` above a set of fields, no border        | `legend`                 |
| 13px grey text `#7d7d86` directly under the title (4px gap)                | `description`            |
| Fields 16px apart under the title                                          | the DsFieldset's children  |
| Every label and control in the section greyed out                          | `disabled`               |

A section with a visible border, card or background is still a DsFieldset; report the box under "Differences". A 14px title directly above checkboxes is a `DsCheckboxGroup` label, not a legend.

## Input-to-prop mapping

| User says                                            | Write as                    |
| ---------------------------------------------------- | --------------------------- |
| section, group of fields, step, "X details" heading  | `<DsFieldset legend="…">`     |
| section subtitle, intro text, explanation            | `description="…"`           |
| whole section disabled, locked section               | `disabled`                  |

## Not supported

The DsFieldset can't do any of the following. Don't approximate them. Build the closest supported version (or leave it out) and report it under "Differences" or "Not available":

- Borders, cards, backgrounds or dividers around the section.
- Collapsible or accordion sections.
- Multi-column field layouts (e.g. first and last name side by side). Stack the fields and report it.
- Headings other than the legend (no separate titles inside).
- Step indicators or numbering.
- Any custom `className` or `style`.

## legend and description

```tsx
<DsFieldset legend="Account" description="How you sign in.">
  <DsField label="Email">
    <DsTextInput type="email" />
  </DsField>
  <DsField label="Password">
    <DsTextInput type="password" />
  </DsField>
</DsFieldset>
```

## disabled

```tsx
<DsFieldset legend="Team settings" disabled>
  <DsField label="Team name">
    <DsTextInput defaultValue="Design" />
  </DsField>
  <DsCheckbox label="Allow guests" defaultChecked />
</DsFieldset>
```

## Combined example

```tsx
<DsFieldset legend="Preferences" description="You can change these later.">
  <DsField label="Language">
    <DsSelect
      defaultValue="en"
      items={[
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'French' },
      ]}
    />
  </DsField>
  <DsCheckboxGroup label="Email me about" defaultValue={['product']}>
    <DsCheckbox value="product" label="Product updates" />
    <DsCheckbox value="events" label="Events" />
  </DsCheckboxGroup>
</DsFieldset>
```

## Code snippet translation

Input:

```html
<fieldset class="border rounded p-3">
  <legend class="h5">Billing details</legend>
  <p class="text-muted">Used on your invoices.</p>
  <div class="row">
    <div class="col"><label>Company</label><input class="form-control"></div>
    <div class="col"><label>VAT number</label><input class="form-control" placeholder="GB123456789"></div>
  </div>
</fieldset>
```

Output:

```tsx
import { DsFieldset, DsField, DsTextInput } from '@ds-build/ui';

<DsFieldset legend="Billing details" description="Used on your invoices.">
  <DsField label="Company">
    <DsTextInput />
  </DsField>
  <DsField label="VAT number">
    <DsTextInput placeholder="GB123456789" />
  </DsField>
</DsFieldset>
```

- `<legend>` → `legend`; the muted `<p>` → `description`.
- Each label + input pair becomes a `DsField` with a `DsTextInput`.
- **Differences:** the border and padding are dropped, and the two-column row is stacked.
