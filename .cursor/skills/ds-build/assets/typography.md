# Typography

CSS utility classes for headings and body text. Apply them with `className` on plain text elements (`h1`–`h6`, `p`, `span`). They set the font family, size, line height, weight and text colour, and reset the element's margin to `0`.

## Quick reference

```tsx
<h1 className="ds-h1">Page title</h1>
<p className="ds-text-medium">Body copy.</p>
```

Allowed classes: `ds-h1`, `ds-h2`, `ds-h3`, `ds-h4`, `ds-h5`, `ds-h6`, `ds-text-large`, `ds-text-medium`, `ds-text-small`. Nothing else.

## Import

No import is needed. The classes load with any import from `@ds-build/ui`. If the snippet uses no components, still add the package import so the styles load:

```tsx
import '@ds-build/ui';
```

## Utilities

| Class | Use on | Font size | Line height | Weight | Letter spacing |
|---|---|---|---|---|---|
| `ds-h1` | `<h1>` | 32px | 40px | 600 | -0.02em |
| `ds-h2` | `<h2>` | 28px | 36px | 600 | -0.015em |
| `ds-h3` | `<h3>` | 24px | 32px | 600 | -0.01em |
| `ds-h4` | `<h4>` | 20px | 28px | 600 | normal |
| `ds-h5` | `<h5>` | 18px | 26px | 600 | normal |
| `ds-h6` | `<h6>` | 16px | 24px | 600 | normal |
| `ds-text-large` | `<p>`, `<span>` | 16px | 24px | 400 | normal |
| `ds-text-medium` | `<p>`, `<span>` | 14px | 20px | 400 | normal |
| `ds-text-small` | `<p>`, `<span>` | 13px | 18px | 400 | normal |

All classes use the Inter font stack and text colour `#18181b`.

## Composing rules

- Match the heading class to the element: `<h2 className="ds-h2">`. Don't put `ds-h1` on a `<p>` or `ds-text-small` on an `<h3>`.
- One typography class per element.
- Typography classes reset margins to `0`. Add space with the spacing utilities in [spacing.md](spacing.md), e.g. `className="ds-h2 ds-mb-8"`.
- Component text (DsButton labels, DsField labels, DsFieldset legends) is already styled. Never add typography classes to components or their props.
- Don't add `style` for font size, weight, colour or line height.

## Visual identification

| What you see | Class |
|---|---|
| Biggest bold title at the top of a page | `ds-h1` |
| Section title, clearly bold, ~28px | `ds-h2` |
| Sub-section or card title, ~24px | `ds-h3` |
| Small bold title, ~16–20px | `ds-h4` to `ds-h6` (closest size) |
| Lead or intro paragraph, regular weight, ~16px | `ds-text-large` |
| Normal body text, ~14px | `ds-text-medium` |
| Captions, meta text, footnotes, ~13px | `ds-text-small` |

If the input shows a size between two steps, use the closer one. If it shows a colour (grey, blue), use the class anyway and list the colour under **Differences**.

## Input-to-class mapping

| Input says | Write |
|---|---|
| "title", "page heading", "H1" | `<h1 className="ds-h1">` |
| "section heading", "H2" | `<h2 className="ds-h2">` |
| "subheading", "H3" | `<h3 className="ds-h3">` |
| "paragraph", "body text", "description" | `<p className="ds-text-medium">` |
| "intro", "lead text", "large text" | `<p className="ds-text-large">` |
| "caption", "small print", "helper text" (outside a DsField) | `<p className="ds-text-small">` |
| `<h1 class="text-4xl font-bold">` (code input) | `<h1 className="ds-h1">` |

## Not supported

- Colours (muted, brand, error text), italics, underline, alignment, truncation, uppercase.
- Bold or medium body text.
- Display sizes above `ds-h1`.

Leave these out and list them under **Differences**.

## Example

```tsx
import '@ds-build/ui';

export default function App() {
  return (
    <>
      <h1 className="ds-h1 ds-mb-8">Account settings</h1>
      <p className="ds-text-large ds-mb-24">Manage your profile and notifications.</p>
      <h2 className="ds-h2 ds-mb-4">Profile</h2>
      <p className="ds-text-small">Last updated 2 days ago.</p>
    </>
  );
}
```
