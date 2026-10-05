# DsToggle

A two-state button that can be pressed or not. Built on the [Base UI Toggle](https://base-ui.com/react/components/toggle).

```tsx
import { DsToggle } from '@ds-build/ui';
```

## Props

| Prop             | Type                             | Default    | Notes                                                                  |
| ---------------- | -------------------------------- | ---------- | ---------------------------------------------------------------------- |
| `children`       | `ReactNode`                      | –          | The label. Omit for an icon-only toggle.                               |
| `iconNode`       | `ReactNode`                      | –          | Leading icon. Required when there's no `children`.                     |
| `aria-label`     | `string`                         | –          | Required for icon-only toggles.                                        |
| `size`           | `'small' \| 'medium' \| 'large'` | `'medium'` | Heights: 28px, 36px, 44px. Ignored inside a `DsToggleGroup`.             |
| `defaultPressed` | `boolean`                        | `false`    | Starts pressed (uncontrolled).                                         |
| `pressed`        | `boolean`                        | –          | Controlled pressed state. Use with `onPressedChange`.                  |
| `value`          | `string`                         | –          | Identifies the toggle inside a `DsToggleGroup`.                          |
| `disabled`       | `boolean`                        | `false`    |                                                                        |

Other native button and Base UI props are passed through.

## Rules

- Icon-only toggles must have an `aria-label` (enforced by the types).
- Inside a `DsToggleGroup`, give each toggle a `value` and set `size` on the group instead.
- Use a DsToggle for an on/off setting that applies immediately (e.g. Bold). For actions, use `DsButton`.

## Examples

```tsx
<DsToggle>Bold</DsToggle>

<DsToggle defaultPressed iconNode={<DsBoldIcon />}>Bold</DsToggle>

<DsToggle iconNode={<DsItalicIcon />} aria-label="Italic" />

<DsToggle size="small" disabled>Wrap text</DsToggle>
```
