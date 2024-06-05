# Treeshakable <img src="https://github.com/react18-tools/treeshakable/blob/main/popper.png?raw=true" style="height: 40px"/>

[![test](https://github.com/react18-tools/treeshakable/actions/workflows/test.yml/badge.svg)](https://github.com/react18-tools/treeshakable/actions/workflows/test.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/fa9dc6dd9d9afeeca32d/maintainability)](https://codeclimate.com/github/react18-tools/treeshakable/maintainability) [![codecov](https://codecov.io/gh/react18-tools/treeshakable/graph/badge.svg)](https://codecov.io/gh/react18-tools/treeshakable) [![Version](https://img.shields.io/npm/v/treeshakable.svg?colorB=green)](https://www.npmjs.com/package/treeshakable) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/treeshakable.svg)](https://www.npmjs.com/package/treeshakable) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/treeshakable) [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

![Treeshakable](./treeshakable.webp)

Treeshakable is a comprehensive library designed to unlock the full potential of React 18 server components. It enhances any state management library with full tree-shaking capabilities, ensuring efficient state management and reducing package size by facilitating shared state even when importing components from separate files. Additionally, it improves performance by avoiding redundant state creation steps.

> If you're in need of basic global state management for your library, consider using ["React18 Global Store"](https://github.com/react18-tools/react18-global-store), as its smaller npm bundle size ![npm bundle size](https://img.shields.io/bundlephobia/minzip/r18gs) will lead to improved performance and reduced overall bundle size.

## Why Treeshakable?

In modern JavaScript applications, especially those using React, tree-shaking is a crucial optimization technique. Tree-shaking helps eliminate dead code, reducing the overall bundle size and improving load times. However, when importing components from separate files, state management libraries can create separate stores, leading to redundancy and increased package size. Additionally, the creation of multiple stores can break the functionality of the library, as different components or hooks imported from different files end up interacting with isolated stores. This issue is particularly prevalent with libraries built using Zustand and similar libraries.

Without Treeshakable:

- Importing components from different files may lead to multiple instances of the same store.
- This redundancy increases package size and memory usage.
- It can degrade performance due to unnecessary state management overhead.
- Importing components from different files may break functionality that depends on a central global store.

Treeshakable addresses these challenges by ensuring a single shared state across different imports, optimizing tree-shaking, and reducing overall package size.

For a live example demonstrating these concerns see the [official website](https://treeshakable.vercel.app/)

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

In this example, Treeshakable is applied as a higher-order function to enhance the Zustand store with tree-shaking capabilities.

### Why use `treeshakable('my-store', () => createStore(...))` and not `treeshakable('my-store', createStore(...))`?

The distinction here is critical:

- **`treeshakable('my-store', createStore(...))`** would immediately invoke `createStore` and create the store instance during module initialization. This approach can defeat the purpose of tree-shaking because the store would be created regardless of whether it is used or not.
- **`treeshakable('my-store', () => createStore(...))`** passes a function that returns the store instance. This approach ensures the store creation happens only once, optimizing performance and reducing bundle size through lazy initialization.

For detailed API and options, refer to [the API documentation](https://react18-tools.github.io/treeshakable).

## Motivation

I developed Treeshakable after encountering issues with importing from specific folders for better tree-shaking, which resulted in the creation of separate Zustand stores and increased package size. Treeshakable addresses this by ensuring shared state across different imports, optimizing tree-shaking, and reducing overall package size.

![Repo Stats](https://repobeats.axiom.co/api/embed/c48bd4105676d990159fd3f80896d179b39254b9.svg "Repobeats analytics image")

## License

This library is licensed under the MPL-2.0 open-source license.

> <img src="https://github.com/react18-tools/treeshakable/blob/main/popper.png?raw=true" style="height: 20px"/> Please consider enrolling in [our courses](https://mayank-chaudhari.vercel.app/courses) or [sponsoring](https://github.com/sponsors/mayank1513) our work.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
