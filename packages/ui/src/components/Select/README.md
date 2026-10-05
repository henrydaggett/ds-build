# DsSelect

A single-choice dropdown. Built on the [Base UI Select](https://base-ui.com/react/components/select), wrapped into one component that takes an `items` array.

```tsx
import { DsSelect } from '@ds-build/ui';
```

## Props

| Prop           | Type                                                 | Default    | Notes                                                 |
| -------------- | ---------------------------------------------------- | ---------- | ----------------------------------------------------- |
| `items`        | `{ value: string; label: string; disabled?: boolean }[]` | –      | Required. The options, in order.                      |
| `placeholder`  | `string`                                             | –          | Shown when nothing is selected.                       |
| `size`         | `'small' \| 'medium' \| 'large'`                     | `'medium'` | Trigger heights: 28px, 36px, 44px.                    |
| `defaultValue` | `string`                                             | –          | `value` of the item selected initially.               |
| `value`        | `string \| null`                                     | –          | Controlled. Use with `onValueChange`.                 |
| `disabled`     | `boolean`                                            | `false`    |                                                       |
| `required`     | `boolean`                                            | `false`    |                                                       |
| `readOnly`     | `boolean`                                            | `false`    |                                                       |
| `name`         | `string`                                             | –          | Prefer `name` on the wrapping `DsField`.                |
| `aria-label`   | `string`                                             | –          | Required when not inside a `DsField` with a `label`.    |

## Rules

- Fills the width of its container, like `DsTextInput`.
- Wrap it in `<DsField label="…">` for a visible label. `DsField` renders the label as a `<div>` for DsSelect so clicking it doesn't open the popup.
- `defaultValue` must match one of the items' `value`s.
- Single choice only. No groups, search or multi-select.

## Examples

```tsx
<DsField label="Country">
  <DsSelect
    placeholder="Select a country"
    items={[
      { value: 'uk', label: 'United Kingdom' },
      { value: 'us', label: 'United States' },
      { value: 'fr', label: 'France' },
    ]}
  />
</DsField>

<DsSelect
  size="small"
  aria-label="Sort by"
  defaultValue="newest"
  items={[
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
  ]}
/>
```
