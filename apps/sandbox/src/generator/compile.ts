import type { ComponentType } from 'react';
import * as React from 'react';
import * as jsxRuntime from 'react/jsx-runtime';
import * as ui from '@ds-build/ui';
import { transform } from 'sucrase';

export type CompileResult = { Component: ComponentType } | { error: string } | { hint: string };

const modules: Record<string, unknown> = {
  react: React,
  'react/jsx-runtime': jsxRuntime,
  '@ds-build/ui': ui,
};

/** Uses the first ```tsx/jsx fenced block if the text has one, so a whole skill reply can be pasted. */
function extractCode(text: string): string {
  const fenced = text.match(/```(?:tsx|jsx|ts|js)?[^\n]*\n([\s\S]*?)```/);
  return fenced ? fenced[1] : text;
}

function require(name: string): unknown {
  if (name in modules) return modules[name];
  throw new Error(`Unknown import "${name}". Only react and @ds-build/ui are available.`);
}

export function compile(text: string): CompileResult {
  const source = extractCode(text);
  if (!source.trim()) return { hint: 'Paste a ds-build snippet to see a preview.' };

  let code: string;
  try {
    code = transform(source, {
      transforms: ['typescript', 'jsx', 'imports'],
      jsxRuntime: 'automatic',
      production: true,
    }).code;
  } catch (error) {
    return { error: `Syntax error: ${(error as Error).message}` };
  }

  try {
    const module = { exports: {} as Record<string, unknown> };
    new Function('require', 'module', 'exports', code)(require, module, module.exports);
    const Component = module.exports.default;
    if (typeof Component !== 'function') {
      return { error: 'The snippet needs a default export: export default function App() { … }' };
    }
    return { Component: Component as ComponentType };
  } catch (error) {
    return { error: `Runtime error: ${(error as Error).message}` };
  }
}
