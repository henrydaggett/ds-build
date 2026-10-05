---
name: ds-build
description: Generates a single static React snippet built only from the ds-build design system components documented in this skill's assets and guidelines folders. Use when the user asks to build, generate, recreate or mock up UI from a text prompt, an image/screenshot, or a code snippet using the design system, or invokes /ds-build.
disable-model-invocation: true
---

# ds-build UI Generator

Turns a user prompt (text, an image, or a code snippet) into one copy/paste-ready React snippet built only from design system components.

## Folders

- `assets/` - one file per component (e.g. `assets/button.md`). The source of truth for imports, props, allowed values, states and usage examples.
- `guidelines/` - one file per component (e.g. `guidelines/button.md`), plus any global guidelines. When and how to use each component, layout patterns, spacing, and dos/don'ts.

File names are the lowercase component name without the `Ds` prefix: `DsButton` → `button.md`, `DsCheckboxGroup` → `checkbox-group.md`. Every component and icon is exported with the `Ds` prefix.

## Rules

1. Create a single static react snippet that can be copy/pasted into a react sandbox
2. Only use components from the design system in assets
3. Take the user's input at face value, do not add additional UI or elements
4. Keep the output as simple, do not add wrappers or elements that serve no purpose
5. Never guess components or classes, always follow what's in the assets or guidelines

### Additional rules

- **Static only**: no state, effects, handlers, data fetching or props on the exported component. Hardcode the content shown or described by the user.
- **Imports come from the asset file**: use the exact import path and named exports documented there. Never invent an import path.
- **Props come from the asset file**: only use prop names and values the asset documents. Don't pass undocumented props, even if they'd probably work.
- **Missing or empty docs**: if an element has no asset file, or its asset file is empty, don't approximate it with another component or raw HTML. Leave it out and list it under "Not available" in the response.
- **Conflicts**: if the user's input conflicts with an asset or guideline (e.g. an image shows a colour the component doesn't offer), follow the asset/guideline and point out the difference in the response.
- **Text and spacing**: style headings and body text with the classes in `assets/typography.md`, and gaps, padding and margins with the classes in `assets/spacing.md`. These are the only classes allowed, and only on plain elements (never on design system components).
- **Custom styling**: only add inline `style` for layout that no class covers (e.g. `display: flex`, `flex-direction`, `align-items`). Never inline spacing, colours or typography. No other custom classes.

## Steps

Copy this checklist and track progress:

```
- [ ] 1. Read input and list elements
- [ ] 2. Read assets and guidelines
- [ ] 3. Compose markup
- [ ] 4. Review
- [ ] 5. Generate output
```

### 1. Read the input

Read the user's input. Identify every UI element that they describe or will need to fulfill their request. Also identify those components props, states and layout patterns

By input type:
- **Text**: pull out each element the user names and any described variant, size, state or label.
- **Image**: list each visible element top-to-bottom, left-to-right, with its visible label, apparent variant (filled/outline, colour, size), state (disabled, etc.) and how it's arranged relative to its neighbours.
- **Code snippet**: map each existing element to its design system equivalent. Drop anything that has no equivalent and report it.

Write the list down (element → likely component → props/state) before moving on.

### 2. Read the assets and guidelines

Before writing any code read the relevent component files in assets and guidelines for every element that you plan to use. Match each element to it's corresponding asset file and use the documented setup exactly.

- Use the Glob tool on `assets/*.md` and `guidelines/*.md` (relative to this skill folder) to see what's available. Don't rely on memory.
- Read any global guideline files (anything in `guidelines/` that isn't named after a component) before the component files.
- Read both `assets/<component>.md` and `guidelines/<component>.md` for every component on your list.
- Read `assets/typography.md` and `guidelines/typography.md` if the UI has any headings or text, and `assets/spacing.md` and `guidelines/spacing.md` if it has any gaps, padding or margins.

### 3. Compose the markup

Compose the markup, assembling the full interface. Use minimal custom styling

- Keep the user's order and grouping.
- Use the user's exact text for labels and content.
- Only nest elements where the layout needs it.

### 4. Review

Review, verifying every component, property and element. Ensure all link to an asset or guideline. Remove any that don't.

For every line of the snippet, check:
- [ ] Each import path and name matches an asset file exactly
- [ ] Each component is documented in `assets/`
- [ ] Each prop name and value is documented in that component's asset file
- [ ] Each `className` is listed in `assets/typography.md` or `assets/spacing.md`
- [ ] Usage follows that component's guideline file
- [ ] Every wrapper element has a layout purpose. If not, remove it
- [ ] Nothing appears that the user didn't ask for
- [ ] No state, handlers or effects

### 5. Generate the output

Generate the final react fragment ready to be copied into a sandbox

## Output format

Reply with the snippet, then short notes only when needed:

````markdown
```tsx
import { DsButton } from '<import path from assets/button.md>';

export default function App() {
  return (
    <>
      {/* components */}
    </>
  );
}
```

**Not available:** <elements left out because they have no asset, if any>
**Differences:** <where assets/guidelines overrode the input, if any>
````

- One code block, one default-exported component that returns a fragment (`<>...</>`) unless a guideline says to use a specific root.
- Leave out the notes lines when they're empty. No other explanation unless the user asks for it.
