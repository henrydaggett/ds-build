import type { SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon({ children, ...props }: IconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function DsPlusIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 5v14M5 12h14" />
    </BaseIcon>
  );
}

export function DsArrowRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </BaseIcon>
  );
}

export function DsTrashIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3" />
    </BaseIcon>
  );
}

export function DsCheckIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </BaseIcon>
  );
}

export function DsMinusIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12h14" />
    </BaseIcon>
  );
}

export function DsChevronDownIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 9l6 6 6-6" />
    </BaseIcon>
  );
}

export function DsBoldIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 5h6a3.5 3.5 0 0 1 0 7H7zM7 12h7a3.5 3.5 0 0 1 0 7H7z" />
    </BaseIcon>
  );
}

export function DsItalicIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M19 4h-9M14 20H5M15 4L9 20" />
    </BaseIcon>
  );
}

export function DsUnderlineIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 4v6a6 6 0 0 0 12 0V4M4 20h16" />
    </BaseIcon>
  );
}

export function DsAlignLeftIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 6h16M4 12h10M4 18h14" />
    </BaseIcon>
  );
}

export function DsAlignCenterIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 6h16M7 12h10M5 18h14" />
    </BaseIcon>
  );
}

export function DsAlignRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 6h16M10 12h10M6 18h14" />
    </BaseIcon>
  );
}
