import { useDialKit } from 'dialkit';
import { DsField, DsFieldset, DsTextInput } from '@ds-build/ui';
import { Stage } from '../components/Playground';
import { bool, jsx, jsxStacked, str } from '../lib/jsx';

export function FieldsetPlayground() {
  const dial = useDialKit('Fieldset', {
    legend: { type: 'text', default: 'Billing details', placeholder: 'Legend' },
    description: { type: 'text', default: 'Used on your invoices.', placeholder: 'Description' },
    disabled: false,
  });

  const snippet = jsxStacked(
    'DsFieldset',
    [str('legend', dial.legend), str('description', dial.description), bool('disabled', dial.disabled)],
    [
      jsx('DsField', ['label="Company"'], [jsx('DsTextInput', ['placeholder="Acme Inc."'])]),
      jsx('DsField', ['label="VAT number"'], [jsx('DsTextInput', ['placeholder="GB123456789"'])]),
    ],
  );

  return (
    <Stage snippet={snippet} width={360}>
      <DsFieldset
        legend={dial.legend || undefined}
        description={dial.description || undefined}
        disabled={dial.disabled}
      >
        <DsField label="Company">
          <DsTextInput placeholder="Acme Inc." />
        </DsField>
        <DsField label="VAT number">
          <DsTextInput placeholder="GB123456789" />
        </DsField>
      </DsFieldset>
    </Stage>
  );
}
