# DsToggleGroup

Shares pressed state across a set of `DsToggle`s, styled as a segmented control. Built on the [Base UI Toggle Group](https://base-ui.com/react/components/toggle-group).

```tsx
import { DsToggleGroup, DsToggle } from '@ds-build/ui';
```

## Props

| Prop           | Type                             | Default        | Notes                                                    |
| -------------- | -------------------------------- | -------------- | -------------------------------------------------------- |
| `size`         | `'small' \| 'medium' \| 'large'` | `'medium'`     | Sets every toggle's size. Group heights: 28, 36, 44px.   |
| `multiple`     | `boolean`                        | `false`        | Allow more than one toggle pressed at once.              |
| `defaultValue` | `string[]`                       | –              | Values of the toggles that start pressed.                |
| `value`        | `string[]`                       | –              | Controlled. Use with `onValueChange`.                    |
| `orientation`  | `'horizontal' \| 'vertical'`     | `'horizontal'` |                                                          |
| `disabled`     | `boolean`                        | `false`        | Disables every toggle.                                   |
| `aria-label`   | `string`                         | –              | Names the group for assistive tech.                      |

## Rules

- Children are `DsToggle`s, each with a unique `value`.
- `defaultValue` is always an array, even when `multiple` is off: `defaultValue={['left']}`.
- Without `multiple`, pressing one toggle unpresses the others (single choice).
- Give the group an `aria-label` describing the choice (e.g. "Text alignment").

## Examples

```tsx
<DsToggleGroup aria-label="Text alignment" defaultValue={['left']}>
  <DsToggle value="left" iconNode={<DsAlignLeftIcon />} aria-label="Align left" />
  <DsToggle value="center" iconNode={<DsAlignCenterIcon />} aria-label="Align center" />
  <DsToggle value="right" iconNode={<DsAlignRightIcon />} aria-label="Align right" />
</DsToggleGroup>

<DsToggleGroup multiple aria-label="Text formatting" defaultValue={['bold']}>
  <DsToggle value="bold" iconNode={<DsBoldIcon />} aria-label="Bold" />
  <DsToggle value="italic" iconNode={<DsItalicIcon />} aria-label="Italic" />
  <DsToggle value="underline" iconNode={<DsUnderlineIcon />} aria-label="Underline" />
</DsToggleGroup>

<DsToggleGroup size="small" aria-label="View" defaultValue={['list']}>
  <DsToggle value="list">List</DsToggle>
  <DsToggle value="board">Board</DsToggle>
</DsToggleGroup>
```
