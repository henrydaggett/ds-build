# DsTextInput

A single-line text input. Built on the [Base UI Input](https://base-ui.com/react/components/input), so it picks up label, validation and invalid styling from `DsField`.

```tsx
import { DsTextInput } from '@ds-build/ui';
```

## Props

| Prop           | Type                             | Default    | Notes                                                  |
| -------------- | -------------------------------- | ---------- | ------------------------------------------------------ |
| `size`         | `'small' \| 'medium' \| 'large'` | `'medium'` | Heights: 28px, 36px, 44px. Replaces the native `size`. |
| `type`         | `string`                         | `'text'`   | `text`, `email`, `password`, `search`, `tel`, `url`, `number`. |
| `placeholder`  | `string`                         | –          |                                                        |
| `defaultValue` | `string`                         | –          | Starting value (uncontrolled).                         |
| `value`        | `string`                         | –          | Controlled. Use with `onValueChange`.                  |
| `disabled`     | `boolean`                        | `false`    |                                                        |
| `required`     | `boolean`                        | `false`    | Triggers the `DsField` error when empty on submit.       |
| `name`         | `string`                         | –          | Prefer `name` on the wrapping `DsField`.                 |

All other native input props (`autoComplete`, `maxLength`, `pattern`, …) are passed through.

## Rules

- Fills the width of its container.
- Always give it a label: wrap it in `<DsField label="…">`, or pass `aria-label` when there's no visible label.
- Invalid styling comes from the wrapping `DsField` (`invalid` prop or failed validation), not from the input.
- Not for dates or multi-line text.

## Examples

```tsx
<DsField label="Email">
  <DsTextInput type="email" placeholder="you@example.com" />
</DsField>

<DsTextInput size="small" type="search" placeholder="Search" aria-label="Search" />

<DsTextInput defaultValue="Acme Inc." disabled aria-label="Company" />
```
