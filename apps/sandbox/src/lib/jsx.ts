type Attr = string | false | null | undefined;

const indent = (text: string) =>
  text
    .split('\n')
    .map((line) => `  ${line}`)
    .join('\n');

/** Builds a JSX string. String children stay inline; arrays go on indented lines. */
export function jsx(tag: string, attrs: Attr[] = [], children?: string | string[]): string {
  const attrText = attrs.filter(Boolean).join(' ');
  const open = attrText ? `<${tag} ${attrText}` : `<${tag}`;

  if (children == null || (Array.isArray(children) && children.length === 0)) {
    return `${open} />`;
  }
  if (typeof children === 'string') {
    return `${open}>${children}</${tag}>`;
  }
  return `${open}>\n${children.map(indent).join('\n')}\n</${tag}>`;
}

/** Like `jsx`, but with one attribute per line for long tags. */
export function jsxStacked(tag: string, attrs: Attr[] = [], children?: string | string[]): string {
  const attrLines = attrs.filter(Boolean).map((attr) => indent(attr as string));
  const open = `<${tag}\n${attrLines.join('\n')}\n`;

  if (children == null || (Array.isArray(children) && children.length === 0)) {
    return `${open}/>`;
  }
  const body = typeof children === 'string' ? [children] : children;
  return `${open}>\n${body.map(indent).join('\n')}\n</${tag}>`;
}

/** `name="value"`, omitted when empty or equal to the default. */
export const str = (name: string, value: string | undefined, defaultValue?: string): Attr =>
  value && value !== defaultValue ? `${name}="${value}"` : false;

/** Bare boolean attribute, omitted when false. */
export const bool = (name: string, value: boolean): Attr => (value ? name : false);

/** `name={expression}`, omitted when the expression is empty. */
export const expr = (name: string, value: string | undefined): Attr =>
  value ? `${name}={${value}}` : false;
