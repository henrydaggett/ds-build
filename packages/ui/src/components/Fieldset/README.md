# DsFieldset

Groups related fields under a shared legend. Built on the [Base UI Fieldset](https://base-ui.com/react/components/fieldset) and renders a native `<fieldset>`.

```tsx
import { DsFieldset } from '@ds-build/ui';
```

## Props

| Prop          | Type        | Default | Notes                                        |
| ------------- | ----------- | ------- | -------------------------------------------- |
| `children`    | `ReactNode` | –       | Required. `DsField`s, `DsCheckboxGroup`s or `DsCheckbox`es. |
| `legend`      | `ReactNode` | –       | Section title (16px, medium weight).         |
| `description` | `ReactNode` | –       | Short text under the legend.                 |
| `disabled`    | `boolean`   | `false` | Disables every field inside.                 |

## Rules

- Use it to split a longer `DsForm` into titled sections (e.g. "Billing details", "Shipping address").
- Children stack vertically with 16px spacing.

## Examples

```tsx
<DsFieldset legend="Billing details" description="Used on your invoices.">
  <DsField label="Company">
    <DsTextInput placeholder="Acme Inc." />
  </DsField>
  <DsField label="VAT number">
    <DsTextInput placeholder="GB123456789" />
  </DsField>
</DsFieldset>
```
