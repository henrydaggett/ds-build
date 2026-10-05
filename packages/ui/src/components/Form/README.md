# DsForm

A native `<form>` that stacks its fields and collects their validation. Built on the [Base UI Form](https://base-ui.com/react/components/form). `DsFormActions` lays out the buttons at the end.

```tsx
import { DsForm, DsFormActions } from '@ds-build/ui';
```

## DsForm props

| Prop             | Type                                      | Default      | Notes                                                           |
| ---------------- | ----------------------------------------- | ------------ | --------------------------------------------------------------- |
| `children`       | `ReactNode`                               | –            | `DsField`s, `DsFieldset`s, `DsCheckboxGroup`s, `DsCheckbox`es, then `DsFormActions`. |
| `onFormSubmit`   | `(values: Record<string, any>) => void`   | –            | Called with the field values keyed by `name` on valid submit.   |
| `errors`         | `Record<string, string \| string[]>`      | –            | Server errors keyed by field `name`.                            |
| `validationMode` | `'onSubmit' \| 'onBlur' \| 'onChange'`    | `'onSubmit'` | When fields validate.                                           |

Other native form props are passed through.

## DsFormActions props

| Prop       | Type               | Default   | Notes                             |
| ---------- | ------------------ | --------- | --------------------------------- |
| `children` | `ReactNode`        | –         | Required. `DsButton`s.              |
| `align`    | `'start' \| 'end'` | `'start'` | Horizontal alignment of the row.  |

## Rules

- The form fills its container's width; children stack with 20px spacing.
- Put the buttons in one `DsFormActions` as the last child.
- Give the submit button `type="submit"` (Base UI buttons don't submit by default).

## Examples

```tsx
<DsForm>
  <DsField label="Name">
    <DsTextInput required />
  </DsField>
  <DsField label="Email">
    <DsTextInput type="email" required />
  </DsField>
  <DsCheckbox label="Subscribe to updates" />
  <DsFormActions>
    <DsButton type="submit">Create account</DsButton>
    <DsButton appearance="outline">Cancel</DsButton>
  </DsFormActions>
</DsForm>
```
