import { useState, type ReactNode } from 'react';
import { useDialKit } from 'dialkit';
import {
  DsButton,
  DsCheckbox,
  DsCheckboxGroup,
  DsField,
  DsFieldset,
  DsForm,
  DsFormActions,
  DsSelect,
  DsTextInput,
} from '@ds-build/ui';
import { Stage } from '../components/Playground';
import { jsx, jsxStacked, str } from '../lib/jsx';

const roles = [
  { value: 'designer', label: 'Designer' },
  { value: 'engineer', label: 'Engineer' },
  { value: 'pm', label: 'Product manager' },
];

const rolesSnippet = `{[\n${roles
  .map((r) => `  { value: '${r.value}', label: '${r.label}' },`)
  .join('\n')}\n]}`;

export function FormPlayground() {
  const dial = useDialKit('Form', {
    fieldset: true,
    align: { type: 'select', options: ['start', 'end'], default: 'start' },
    validationMode: { type: 'select', options: ['onSubmit', 'onBlur', 'onChange'], default: 'onSubmit' },
  });
  const [submitted, setSubmitted] = useState<Record<string, unknown> | null>(null);

  const align = dial.align as 'start' | 'end';
  const validationMode = dial.validationMode as 'onSubmit' | 'onBlur' | 'onChange';

  const fieldSnippets = [
    jsx('DsField', ['label="Name"', 'name="name"', 'error="Enter your name."'], [
      jsx('DsTextInput', ['placeholder="Ada Lovelace"', 'required']),
    ]),
    jsx('DsField', ['label="Email"', 'name="email"', 'error="Enter a valid email address."'], [
      jsx('DsTextInput', ['type="email"', 'placeholder="you@example.com"', 'required']),
    ]),
    jsx('DsField', ['label="Role"', 'name="role"'], [
      jsxStacked('DsSelect', ['placeholder="Select a role"', `items=${rolesSnippet}`]),
    ]),
  ];

  const snippet = jsx('DsForm', [str('validationMode', validationMode, 'onSubmit')], [
    ...(dial.fieldset ? [jsx('DsFieldset', ['legend="Account"'], fieldSnippets)] : fieldSnippets),
    jsxStacked(
      'DsCheckboxGroup',
      ['label="Notifications"', 'name="notifications"', "defaultValue={['email']}"],
      [jsx('DsCheckbox', ['value="email"', 'label="Email"']), jsx('DsCheckbox', ['value="sms"', 'label="SMS"'])],
    ),
    jsx('DsField', ['name="terms"', 'error="You must accept the terms."'], [
      jsx('DsCheckbox', ['label="I agree to the terms"', 'required']),
    ]),
    jsx('DsFormActions', [str('align', align, 'start')], [
      jsx('DsButton', ['type="submit"'], 'Create account'),
      jsx('DsButton', ['appearance="outline"', 'type="reset"'], 'Cancel'),
    ]),
  ]);

  const fields: ReactNode = (
    <>
      <DsField label="Name" name="name" error="Enter your name.">
        <DsTextInput placeholder="Ada Lovelace" required />
      </DsField>
      <DsField label="Email" name="email" error="Enter a valid email address.">
        <DsTextInput type="email" placeholder="you@example.com" required />
      </DsField>
      <DsField label="Role" name="role">
        <DsSelect placeholder="Select a role" items={roles} />
      </DsField>
    </>
  );

  return (
    <Stage
      snippet={snippet}
      width={400}
      note={submitted ? `Submitted: ${JSON.stringify(submitted)}` : undefined}
    >
      <DsForm validationMode={validationMode} onFormSubmit={(values) => setSubmitted(values)}>
        {dial.fieldset ? <DsFieldset legend="Account">{fields}</DsFieldset> : fields}
        <DsCheckboxGroup label="Notifications" name="notifications" defaultValue={['email']}>
          <DsCheckbox value="email" label="Email" />
          <DsCheckbox value="sms" label="SMS" />
        </DsCheckboxGroup>
        <DsField name="terms" error="You must accept the terms.">
          <DsCheckbox label="I agree to the terms" required />
        </DsField>
        <DsFormActions align={align}>
          <DsButton type="submit">Create account</DsButton>
          <DsButton appearance="outline" type="reset" onClick={() => setSubmitted(null)}>
            Cancel
          </DsButton>
        </DsFormActions>
      </DsForm>
    </Stage>
  );
}
