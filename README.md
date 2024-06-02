# Treeshakable <img src="https://github.com/react18-tools/treeshakable/blob/main/popper.png?raw=true" style="height: 40px"/>

[![test](https://github.com/react18-tools/treeshakable/actions/workflows/test.yml/badge.svg)](https://github.com/react18-tools/treeshakable/actions/workflows/test.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/fa9dc6dd9d9afeeca32d/maintainability)](https://codeclimate.com/github/react18-tools/treeshakable/maintainability) [![codecov](https://codecov.io/gh/react18-tools/treeshakable/graph/badge.svg)](https://codecov.io/gh/react18-tools/treeshakable) [![Version](https://img.shields.io/npm/v/treeshakable.svg?colorB=green)](https://www.npmjs.com/package/treeshakable) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/treeshakable.svg)](https://www.npmjs.com/package/treeshakable) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/treeshakable) [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

![Treeshakable](./treeshakable.webp)

Treeshakable is a comprehensive library designed to unlock the full potential of React 18 server components. It provides customizable loading animation components and a fullscreen loader container, seamlessly integrating with React and Next.js.

✅ Fully Treeshakable (import from `treeshakable/client/loader-container`)

✅ Fully TypeScript Supported

✅ Leverages the power of React 18 Server components

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

### Import Styles

You can import styles globally or within specific components.

```css
/* globals.css */
@import "treeshakable/dist";
```

```tsx
// layout.tsx
import "treeshakable/dist/index.css";
```

For selective imports:

```css
/* globals.css */
@import "treeshakable/dist/client"; /** required if you are using LoaderContainer */
@import "treeshakable/dist/server/bars/bars1";
```

### Usage

Using loaders is straightforward.

```tsx
import { Bars1 } from "treeshakable/dist/server/bars/bars1";

export default function MyComponent() {
  return someCondition ? <Bars1 /> : <>Something else...</>;
}
```

For detailed API and options, refer to [the API documentation](https://react18-tools.github.io/treeshakable).

**Using LoaderContainer**

`LoaderContainer` is a fullscreen component. You can add this component directly in your layout and then use `useLoader` hook to toggle its visibility.

```tsx
// layout.tsx
<LoaderContainer />
	 ...
```

```tsx
// some other page or component
import { useLoader } from "treeshakable/dist/hooks";

export default MyComponent() {
	const { setLoading } = useLoader();
	useCallback(()=>{
		setLoading(true);
		...do some work
		setLoading(false);
	}, [])
	...
}
```

![Repo Stats](https://repobeats.axiom.co/api/embed/c48bd4105676d990159fd3f80896d179b39254b9.svg "Repobeats analytics image")

## License

This library is licensed under the MPL-2.0 open-source license.

> <img src="https://github.com/react18-tools/treeshakable/blob/main/popper.png?raw=true" style="height: 20px"/> Please consider enrolling in [our courses](https://mayank-chaudhari.vercel.app/courses) or [sponsoring](https://github.com/sponsors/mayank1513) our work.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
