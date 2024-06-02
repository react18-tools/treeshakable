# Treeshakable <img src="https://github.com/react18-tools/treeshakable/blob/main/popper.png?raw=true" style="height: 40px"/>

[![test](https://github.com/react18-tools/treeshakable/actions/workflows/test.yml/badge.svg)](https://github.com/react18-tools/treeshakable/actions/workflows/test.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/fa9dc6dd9d9afeeca32d/maintainability)](https://codeclimate.com/github/react18-tools/treeshakable/maintainability) [![codecov](https://codecov.io/gh/react18-tools/treeshakable/graph/badge.svg)](https://codecov.io/gh/react18-tools/treeshakable) [![Version](https://img.shields.io/npm/v/treeshakable.svg?colorB=green)](https://www.npmjs.com/package/treeshakable) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/treeshakable.svg)](https://www.npmjs.com/package/treeshakable) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/treeshakable) [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

![Treeshakable](./treeshakable.webp)

Treeshakable is a comprehensive library designed to unlock the full potential of React 18 server components. It is a universal library designed to enhance any state management library with full tree-shaking capabilities. This optimization ensures efficient state management and reduces package size by facilitating shared state even when importing components from separate files. Not only that, it also improves performance by avoiding redundant state creation steps.

✅ Universal Compatibility: Works with various state management libraries.

✅ Tree-Shaking Optimization: Enables full tree-shaking for efficient code splitting and reduced package size.

✅ Shared State Management: Facilitates shared state across different imports, preventing the creation of multiple stores.

✅ Create fully Treeshakable (import from `treeshakable/client/loader-container`)

✅ Fully TypeScript Supported

✅ Leverage the power of React 18 Server components

✅ Compatible with all React 18 build systems/tools/frameworks

✅ Documented with [Typedoc](https://react18-tools.github.io/treeshakable) ([Docs](https://react18-tools.github.io/treeshakable))

✅ Examples for Next.js, Vite, and Remix

> <img src="https://github.com/react18-tools/treeshakable/blob/main/popper.png?raw=true" style="height: 20px"/> Please consider starring [this repository](https://github.com/react18-tools/treeshakable) and sharing it with your friends.

## Getting Started

### Installation

```bash
$ pnpm add treeshakable
```

**_or_**

```bash
$ npm install treeshakable
```

**_or_**

```bash
$ yarn add treeshakable
```

### Usage

Here is a basic example of how to use Treeshakable with a state management library:

```tsx
import treeshakable from "treeshakable";
import { create } from "zustand";

interface CounterState {
  count: number;
  setCount: (count: number) => void;
}

export const useTreeshakableCounterStore = treeshakable("counter-store", () =>
  create<CounterState>(set => ({
    count: 0,
    setCount: count => set({ count }),
  })),
);
```

In this example, treeshakable is applied as a higher-order function to enhance the Zustand store with tree-shaking capabilities. For detailed API and options, refer to [the API documentation](https://react18-tools.github.io/treeshakable).

## Motivation

I developed Treeshakable after encountering issues with importing from specific folders for better tree-shaking, which resulted in the creation of separate Zustand stores and increased package size. Treeshakable addresses this by ensuring shared state across different imports, optimizing tree-shaking, and reducing overall package size.

![Repo Stats](https://repobeats.axiom.co/api/embed/c48bd4105676d990159fd3f80896d179b39254b9.svg "Repobeats analytics image")

## License

This library is licensed under the MPL-2.0 open-source license.

> <img src="https://github.com/react18-tools/treeshakable/blob/main/popper.png?raw=true" style="height: 20px"/> Please consider enrolling in [our courses](https://mayank-chaudhari.vercel.app/courses) or [sponsoring](https://github.com/sponsors/mayank1513) our work.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
