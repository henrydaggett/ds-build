# Spacing guidelines

## When to use

- Use spacing classes for space between and around elements that components don't already space.
- Don't add spacing inside DsForm, DsFieldset, DsCheckboxGroup or DsToggleGroup; they space their own content.
- Prefer `gap` on a flex or grid parent over margins on each child.
- Use margins for one-off space, like below a heading.

## Content

- Use the smaller steps (4, 8, 12px) between closely related items, like a heading and its text or a row of buttons.
- Use the middle steps (16, 20, 24px) between groups and for padding around content.
- Use the larger steps (32, 48px) between page sections.
- Use `ds-gap-8` between buttons in a row.

## Layout

- Keep spacing consistent: the same kind of gap uses the same step everywhere on the page.
- Put more space between groups than inside them, so related items read as one group.
- Use one spacing class per side; don't stack margin on a child and gap on its parent for the same space.
- Only add a padding wrapper when the content needs space from the edge of the page.
