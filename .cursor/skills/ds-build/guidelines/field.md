# DsField guidelines

## When to use

- Wrap every DsTextInput and DsSelect that has a visible label in a DsField.
- Wrap a DsCheckbox in a DsField only when it needs helper text or an error.
- Use one control per DsField.

## Content

- Keep labels short nouns: "Email", "Company name".
- Use sentence case and no colon after the label.
- Use the description for format hints or why the info is needed.
- Write errors that say how to fix the problem: "Enter a valid email address".
- Only show an error state when the input shows or describes one.

## Layout

- Stack Fields vertically, one per row.
- Let DsForm or DsFieldset handle the spacing between Fields.
- Use disabled on the DsField rather than on the control.
