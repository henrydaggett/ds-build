# Asset template

Section order for `.cursor/skills/ds-build/assets/<name>.md`. Replace `<...>` placeholders. Drop sections that don't apply. See [../ds-build/assets/button.md](../ds-build/assets/button.md) for a complete example.

````markdown
# <Name>

<One sentence: what it does. What it renders, e.g. a native `<button>`.>

## Quick reference

```tsx
import { <Name> } from '@ds-build/ui';

<minimal valid usage>
```

Allowed props: <comma-separated list>. Nothing else.

## Import

Use one import line from `@ds-build/ui`. Include `<Name>` and only the <icons/subcomponents> the snippet actually uses:

```tsx
import { <Name>, <...> } from '@ds-build/ui';
```

Never import from sub-paths. No CSS import is needed: the design tokens load with the package.

## Structure

<Compound components only: required nesting of subcomponents, as a minimal JSX example.>

## Props

| Prop | Write as | Default (omit) | Notes |
| ---- | -------- | -------------- | ----- |
| `<prop>` | `<exact JSX for each non-default value>` | `<default>` | <constraint or dependency> |

These are the only props to use. No `className`, `style`, `type`, `aria-*` or event handlers.

<What `children` accepts.>

## Base setup

Start from the minimal <name>:

```tsx
<minimal valid usage>
```

Then add only the props the input needs, in this order:

1. <prop> if <condition>
2. ...

Every compatible prop at once, for reference only:

```tsx
<full example, no defaults, no inline comments>
```

### Composing rules

- Leave out any prop that's set to its default value. Never write <list default values as JSX>.
- Write boolean props as bare attributes.
- <Invalid combinations and what to do when the input asks for one.>
- <Prop dependencies.>

## Valid variants

| Variant | Write as |
| ------- | -------- |
| <name> | `<JSX>` |

Anything outside these doesn't exist.

## Visual identification

Use this to match <name>s in an image.

**Variant:**

| Looks like | Variant |
| ---------- | ------- |
| <fill/text/border with hex> | <variant> |
| <disabled or other state looks> | <state> |

<Ambiguous cases (states that look identical) and what to write.>

<Shades and unsupported colours: map to nearest or default, and report under "Differences".>

**Size** (pick the nearest):

| Size | Height | Text | Corner radius |
| ---- | ------ | ---- | ------------- |
| <size> | <px> | <px> | <px> |

<Fallback when there's nothing to measure against.>

## Input-to-prop mapping

| User says | Write as |
| --------- | -------- |
| <synonyms> | `<JSX>` or no props |

Map the user's description, not the content or label.

## Not supported

The <Name> can't do any of the following. Don't approximate them with other props, wrappers, raw HTML or styles. Build the closest supported version (or leave it out) and report it under "Differences" or "Not available":

- <capability> <what to do instead>

## <prop>

<One section per prop with a short tsx example of each value.>

## Combined example

```tsx
<several props together>
```

## Code snippet translation

Input:

```html
<realistic Bootstrap/Tailwind/HTML snippet, including one element with no equivalent>
```

Output:

```tsx
<converted JSX>
```

- <class/attribute> → <prop>
- <what was dropped and why>
````
