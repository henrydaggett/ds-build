# DsButton

Triggers an action. Built on the [Base UI Button](https://base-ui.com/react/components/button), which provides button semantics, keyboard handling, and disabled behavior.

```tsx
import { DsButton } from '@ds-build/ui';
```

## Props

| Prop         | Type                               | Default     | Notes                                                        |
| ------------ | ---------------------------------- | ----------- | ------------------------------------------------------------ |
| `appearance` | `'default' \| 'outline'`           | `'default'` | `outline` is a neutral bordered button with a fixed style.   |
| `size`       | `'small' \| 'medium' \| 'large'`   | `'medium'`  | Heights: 28px, 36px, 44px.                                   |
| `color`      | `'primary' \| 'blue' \| 'red'`     | `'primary'` | Only allowed when `appearance` is `default`.                 |
| `icon`       | `boolean`                          | `false`     | Shows a leading icon (a plus by default).                    |
| `iconNode`   | `ReactNode`                        | –           | Replaces the default icon. Only rendered when `icon` is true. |
| `disabled`   | `boolean`                          | `false`     | The "disabled" state. Omit for the default state.            |
| `children`   | `ReactNode`                        | –           | The button label.                                            |

All other native button props (`onClick`, `type`, `aria-*`, …) and Base UI props (`focusableWhenDisabled`, `render`) are passed through.

## Rules

- `color` only applies to `appearance="default"`. Passing `color` with `appearance="outline"` is a type error.
- Use `red` for destructive actions, `blue` for the main call to action on a page with a lot of neutral UI, and `primary` everywhere else.
- Use at most one `default`-appearance button per group; pair secondary actions with `outline`.
- Set `type="submit"` explicitly for form submission (Base UI does not default to submit).

## Examples

```tsx
<DsButton>Save changes</DsButton>

<DsButton color="blue" icon>New project</DsButton>

<DsButton color="red" icon iconNode={<DsTrashIcon />}>Delete</DsButton>

<DsButton appearance="outline" size="small">Cancel</DsButton>

<DsButton size="large" disabled>Publishing…</DsButton>
```
