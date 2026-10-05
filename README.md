# ds-build

A small React design system built on [Base UI](https://base-ui.com), plus a Vite sandbox with [DialKit](https://www.dialkit.dev) for tweaking components live.

The longer-term goal is an agent skill that generates UI from these components. Each component ships a `README.md` with its props, rules, and examples so that skill can read it.

## Layout

```
packages/ui        @ds-build/ui: tokens, icons, components
  src/tokens.css   CSS variables (color, radius, spacing, type, motion)
  src/components/  one folder per component (tsx, CSS module, README)
apps/sandbox       Vite + React app for testing components with DialKit
```

## Run locally

Requires Node 20+ and pnpm 10.

```bash
pnpm install
pnpm dev          # sandbox at http://127.0.0.1:4317
```

Other scripts:

```bash
pnpm typecheck    # typecheck every package
pnpm build        # typecheck the UI package and build the sandbox
```

## Components

| Component | Docs |
| --- | --- |
| DsButton | [packages/ui/src/components/Button/README.md](packages/ui/src/components/Button/README.md) |
| DsToggle | [packages/ui/src/components/Toggle/README.md](packages/ui/src/components/Toggle/README.md) |
| DsToggleGroup | [packages/ui/src/components/ToggleGroup/README.md](packages/ui/src/components/ToggleGroup/README.md) |
| DsTextInput | [packages/ui/src/components/TextInput/README.md](packages/ui/src/components/TextInput/README.md) |
| DsSelect | [packages/ui/src/components/Select/README.md](packages/ui/src/components/Select/README.md) |
| DsCheckbox | [packages/ui/src/components/Checkbox/README.md](packages/ui/src/components/Checkbox/README.md) |
| DsCheckboxGroup | [packages/ui/src/components/CheckboxGroup/README.md](packages/ui/src/components/CheckboxGroup/README.md) |
| DsField | [packages/ui/src/components/Field/README.md](packages/ui/src/components/Field/README.md) |
| DsFieldset | [packages/ui/src/components/Fieldset/README.md](packages/ui/src/components/Fieldset/README.md) |
| DsForm | [packages/ui/src/components/Form/README.md](packages/ui/src/components/Form/README.md) |

## Using the package

The sandbox consumes `@ds-build/ui` from source through the pnpm workspace. Import the tokens once at the app root:

```tsx
import '@ds-build/ui/tokens.css';
import { DsButton } from '@ds-build/ui';

<DsButton color="blue" icon>New project</DsButton>
```

## Adding a component

1. Create `packages/ui/src/components/<Name>/` with `<Name>.tsx`, `<Name>.module.css`, `index.ts`, and `README.md`.
2. Build on the matching Base UI primitive when there is one, and style it with tokens from `tokens.css`.
3. Export it from `packages/ui/src/index.ts`.
4. Add a playground page in `apps/sandbox/src/pages/` that uses `useDialKit` for its props.
