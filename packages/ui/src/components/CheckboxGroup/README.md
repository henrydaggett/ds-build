# DsCheckboxGroup

A labelled set of `DsCheckbox`es that share one value (an array of the ticked checkboxes' `value`s). Built on the Base UI [DsCheckbox Group](https://base-ui.com/react/components/checkbox-group), [DsFieldset](https://base-ui.com/react/components/fieldset) and [DsField](https://base-ui.com/react/components/field).

```tsx
import { DsCheckboxGroup, DsCheckbox } from '@ds-build/ui';
```

## Props

| Prop           | Type                             | Default      | Notes                                                    |
| -------------- | -------------------------------- | ------------ | -------------------------------------------------------- |
| `label`        | `ReactNode`                      | –            | Group label, rendered as a legend above the checkboxes.  |
| `description`  | `ReactNode`                      | –            | Helper text under the checkboxes.                        |
| `error`        | `ReactNode`                      | –            | Error text. Shown on failed validation, or always with `invalid`. |
| `invalid`      | `boolean`                        | –            | Forces the invalid state and shows `error`.              |
| `size`         | `'small' \| 'medium' \| 'large'` | `'medium'`   | Sets every checkbox's size.                              |
| `orientation`  | `'vertical' \| 'horizontal'`     | `'vertical'` | Horizontal wraps onto new lines when needed.             |
| `defaultValue` | `string[]`                       | –            | `value`s of the checkboxes that start ticked.            |
| `value`        | `string[]`                       | –            | Controlled. Use with `onValueChange`.                    |
| `name`         | `string`                         | –            | Form field name for the whole group.                     |
| `disabled`     | `boolean`                        | `false`      | Disables every checkbox.                                 |
| `aria-label`   | `string`                         | –            | Only when there's no `label`.                            |

## Rules

- Children are `DsCheckbox`es, each with a `label` and a unique `value`.
- Tick checkboxes through the group's `defaultValue`, not `defaultChecked` on each checkbox.
- Don't wrap a `DsCheckboxGroup` in a `DsField`; it already includes its own label, description and error.

## Examples

```tsx
<DsCheckboxGroup label="Notifications" defaultValue={['email']}>
  <DsCheckbox value="email" label="Email" />
  <DsCheckbox value="sms" label="SMS" />
  <DsCheckbox value="push" label="Push notifications" />
</DsCheckboxGroup>

<DsCheckboxGroup
  label="Interests"
  orientation="horizontal"
  invalid
  error="Choose at least one interest"
>
  <DsCheckbox value="design" label="Design" />
  <DsCheckbox value="code" label="Code" />
</DsCheckboxGroup>
```
