import { useDialKit } from 'dialkit';
import {
  DsAlignCenterIcon,
  DsAlignLeftIcon,
  DsAlignRightIcon,
  DsBoldIcon,
  DsItalicIcon,
  DsToggle,
  DsToggleGroup,
  DsUnderlineIcon,
  type ToggleGroupSize,
} from '@ds-build/ui';
import { Stage } from '../components/Playground';
import { bool, jsx, str } from '../lib/jsx';

const sizes: ToggleGroupSize[] = ['small', 'medium', 'large'];

const groupContent = {
  alignment: [
    { value: 'left', label: 'Align left', icon: <DsAlignLeftIcon />, iconName: 'DsAlignLeftIcon' },
    { value: 'center', label: 'Align center', icon: <DsAlignCenterIcon />, iconName: 'DsAlignCenterIcon' },
    { value: 'right', label: 'Align right', icon: <DsAlignRightIcon />, iconName: 'DsAlignRightIcon' },
  ],
  formatting: [
    { value: 'bold', label: 'Bold', icon: <DsBoldIcon />, iconName: 'DsBoldIcon' },
    { value: 'italic', label: 'Italic', icon: <DsItalicIcon />, iconName: 'DsItalicIcon' },
    { value: 'underline', label: 'Underline', icon: <DsUnderlineIcon />, iconName: 'DsUnderlineIcon' },
  ],
  text: [
    { value: 'list', label: 'List', icon: null, iconName: '' },
    { value: 'board', label: 'Board', icon: null, iconName: '' },
    { value: 'timeline', label: 'Timeline', icon: null, iconName: '' },
  ],
};

const groupLabels: Record<keyof typeof groupContent, string> = {
  alignment: 'Text alignment',
  formatting: 'Text formatting',
  text: 'View',
};

export function ToggleGroupPlayground() {
  const dial = useDialKit('Toggle group', {
    content: { type: 'select', options: Object.keys(groupContent), default: 'alignment' },
    size: { type: 'select', options: sizes, default: 'medium' },
    multiple: false,
    orientation: { type: 'select', options: ['horizontal', 'vertical'], default: 'horizontal' },
    disabled: false,
  });

  const contentKey = dial.content as keyof typeof groupContent;
  const content = groupContent[contentKey];
  const groupLabel = groupLabels[contentKey];
  const size = dial.size as ToggleGroupSize;
  const orientation = dial.orientation as 'horizontal' | 'vertical';
  const defaultValue = [content[0].value];

  const snippet = jsx(
    'DsToggleGroup',
    [
      str('size', size, 'medium'),
      bool('multiple', dial.multiple),
      str('orientation', orientation, 'horizontal'),
      `aria-label="${groupLabel}"`,
      `defaultValue={['${defaultValue[0]}']}`,
      bool('disabled', dial.disabled),
    ],
    content.map((item) =>
      item.icon
        ? jsx('DsToggle', [`value="${item.value}"`, `iconNode={<${item.iconName} />}`, `aria-label="${item.label}"`])
        : jsx('DsToggle', [`value="${item.value}"`], item.label),
    ),
  );

  return (
    <Stage snippet={snippet}>
      <DsToggleGroup
        key={`${dial.content}-${dial.multiple}`}
        size={size}
        multiple={dial.multiple}
        orientation={orientation}
        disabled={dial.disabled}
        defaultValue={defaultValue}
        aria-label={groupLabel}
      >
        {content.map((item) =>
          item.icon ? (
            <DsToggle key={item.value} value={item.value} iconNode={item.icon} aria-label={item.label} />
          ) : (
            <DsToggle key={item.value} value={item.value}>
              {item.label}
            </DsToggle>
          ),
        )}
      </DsToggleGroup>
    </Stage>
  );
}
