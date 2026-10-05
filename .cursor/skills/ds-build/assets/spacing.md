# Spacing

CSS utility classes for gap, padding and margin on an 8px-based scale. Apply them with `className` on layout wrappers and text elements.

## Quick reference

```tsx
<div style={{ display: 'flex' }} className="ds-gap-8">
  ...
</div>
<p className="ds-text-medium ds-mb-16">Body copy.</p>
```

Allowed classes: `ds-{property}-{pixels}` from the tables below. Nothing else.

## Import

No import is needed. The classes load with any import from `@ds-build/ui`. If the snippet uses no components, add `import '@ds-build/ui';`.

## Scale

The number in each class is the value in pixels: `ds-mb-4` is a 4px bottom margin. This is not the Tailwind scale, where `mb-4` means 16px.

| Class value | Pixels | Token |
|---|---|---|
| `0` | 0px | (padding and margin only) |
| `4` | 4px | `--ds-space-1` |
| `8` | 8px | `--ds-space-2` |
| `12` | 12px | `--ds-space-3` |
| `16` | 16px | `--ds-space-4` |
| `20` | 20px | `--ds-space-5` |
| `24` | 24px | `--ds-space-6` |
| `32` | 32px | `--ds-space-8` |
| `48` | 48px | `--ds-space-12` |

There is no 28, 36, 40 or any other value.

## Utilities

| Class | CSS property | Values |
|---|---|---|
| `ds-gap-{pixels}` | `gap` | 4, 8, 12, 16, 20, 24, 32, 48 |
| `ds-p-{pixels}` | `padding` | 0, 4, 8, 12, 16, 20, 24, 32, 48 |
| `ds-px-{pixels}` | `padding-inline` (left and right) | 4, 8, 12, 16, 20, 24, 32, 48 |
| `ds-py-{pixels}` | `padding-block` (top and bottom) | 4, 8, 12, 16, 20, 24, 32, 48 |
| `ds-m-{pixels}` | `margin` | 0, 4, 8, 12, 16, 20, 24, 32, 48 |
| `ds-mt-{pixels}` | `margin-top` | 4, 8, 12, 16, 20, 24, 32, 48 |
| `ds-mb-{pixels}` | `margin-bottom` | 4, 8, 12, 16, 20, 24, 32, 48 |

Examples: `ds-gap-8` is an 8px gap, `ds-p-16` is 16px padding, `ds-mb-48` is a 48px bottom margin.

## Composing rules

- `gap` only works on flex or grid containers. Set `display` with inline `style` (layout is allowed inline) and the gap with a class: `<div style={{ display: 'flex' }} className="ds-gap-12">`.
- Prefer `gap` on the parent over margins on each child.
- Combine classes with spaces: `className="ds-h2 ds-mb-8"`.
- Never write `gap`, `padding` or `margin` in inline `style`. Use these classes instead.
- Don't add spacing to `DsForm`, `DsFieldset`, `DsCheckboxGroup` or `DsToggleGroup` children; those components space their own content.
- Never pass spacing classes to design system components. Put them on a wrapper or text element.

## Visual identification

Measure the space in the input and pick the closest value:

| Measured space | Class value |
|---|---|
| 1–5px | `4` |
| 6–9px | `8` |
| 10–13px | `12` |
| 14–17px | `16` |
| 18–21px | `20` |
| 22–27px | `24` |
| 28–39px | `32` |
| 40px and above | `48` |

If the input's spacing falls off the scale (e.g. 10px or 40px), use the closest value and list it under **Differences** only if the change is noticeable.

## Input-to-class mapping

| Input says | Write |
|---|---|
| "tight", "small gap" | `ds-gap-8` |
| "gap between buttons" | `ds-gap-8` |
| "space between sections" | `ds-gap-32` or `ds-mb-32` |
| "padded", "with padding" | `ds-p-16` |
| `gap: 16px` / Tailwind `gap-4` (code input) | `ds-gap-16` |
| `padding: 24px` / Tailwind `p-6` (code input) | `ds-p-24` |
| `margin-bottom: 8px` / Tailwind `mb-2` (code input) | `ds-mb-8` |

## Not supported

- Negative margins, `margin-left`/`margin-right` on their own, `margin: auto`.
- Individual `padding-top`/`padding-left` etc.
- Values off the scale.

## Example

```tsx
import { DsButton } from '@ds-build/ui';

export default function App() {
  return (
    <div className="ds-p-24">
      <h3 className="ds-h3 ds-mb-8">Delete project</h3>
      <p className="ds-text-medium ds-mb-24">This can't be undone.</p>
      <div style={{ display: 'flex' }} className="ds-gap-8">
        <DsButton appearance="outline">Cancel</DsButton>
        <DsButton color="red">Delete</DsButton>
      </div>
    </div>
  );
}
```
