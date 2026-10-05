# DsField

Wraps one form control with a label, helper text and an error message. Built on the [Base UI Field](https://base-ui.com/react/components/field), which wires up the label, `aria-describedby` and validation automatically.

```tsx
import { DsField } from '@ds-build/ui';
```

## Props

| Prop          | Type        | Default | Notes                                                             |
| ------------- | ----------- | ------- | ----------------------------------------------------------------- |
| `children`    | `ReactNode` | –       | Required. One `DsTextInput`, `DsSelect` or `DsCheckbox`.                |
| `label`       | `ReactNode` | –       | Shown above the control. Not rendered for a `DsCheckbox`.           |
| `description` | `ReactNode` | –       | Helper text under the control.                                    |
| `error`       | `ReactNode` | –       | Error text under the description. Shown on failed validation, or always with `invalid`. |
| `invalid`     | `boolean`   | –       | Forces the invalid state (red control border) and shows `error`.  |
| `disabled`    | `boolean`   | `false` | Disables the control and greys out the label.                     |
| `name`        | `string`    | –       | Form field name. Takes precedence over the control's `name`.      |

## Rules

- One control per DsField. For several checkboxes, use `DsCheckboxGroup` instead.
- With a `DsCheckbox`, put the text on the checkbox's own `label` and leave the DsField's `label` out. Use the DsField for its `description` and `error`.
- Put `required`, `type`, `placeholder` etc. on the control, not the DsField.
- Without `invalid`, `error` only appears after the control fails native validation (e.g. `required` and empty on submit).
- Fields stack with even spacing inside a `DsForm` or `DsFieldset`.

## Examples

```tsx
<DsField label="Email" description="We'll never share your email.">
  <DsTextInput type="email" placeholder="you@example.com" required />
</DsField>

<DsField label="Username" invalid error="This username is taken.">
  <DsTextInput defaultValue="henry" />
</DsField>

<DsField label="Role">
  <DsSelect
    placeholder="Select a role"
    items={[
      { value: 'designer', label: 'Designer' },
      { value: 'engineer', label: 'Engineer' },
    ]}
  />
</DsField>

<DsField name="terms" error="You must accept the terms.">
  <DsCheckbox label="I agree to the terms" required />
</DsField>
```
