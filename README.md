
---

## Demo

Check out the live demo [here](https://react-multi-highlite.vercel.app/).

# react-multi-highlite

`react-multi-highlite` is a lightweight React component that allows you to highlight specific words or phrases within a block of text. This component is very lightweight as it doesn't use highlight.js or lowlight and doesn't include bulky coding languages. It's a basic text highlighter designed to be simple and efficient.

## Installation

You can install the library using npm, Yarn, pnpm, or Bun:

### npm

```bash
npm install react-multi-highlite
```

### Yarn

```bash
yarn add react-multi-highlite
```

### pnpm

```bash
pnpm add react-multi-highlite
```

### Bun

```bash
bun add react-multi-highlite
```

## Usage

To use the `MultiHighLite` component, import it and pass the text you want to highlight along with an array of matcher objects. Each matcher object should contain the text to highlight and the class name to apply to the highlighted text.

```jsx
import React from 'react';
import MultiHighLite from 'react-multi-highlite';

const App = () => {
  const text = "In software development, highlighting important pieces of information can greatly improve readability and comprehension. For instance, highlighting code snippets, errors, or important notes in documentation can make a significant difference.";
  const matchers = [
    { text: "highlighting", classname: "bg-red-200 text-black" },
    { text: "important", classname: "bg-green-300 text-black" },
    { text: "information", classname: "bg-gray-600 text-white" },
  ];

  return (
    <div>
      <MultiHighLite matchers={matchers}>{text}</MultiHighLite>
    </div>
  );
};

export default App;
```

## Props

### MultiHighLite

The `MultiHighLite` component accepts the following props:

- **children**: The text to search for matches (required).
- **matchers**: Array of matcher objects containing `text` and `classname` (required).
  - `text`: The text to match and highlight.
  - `classname`: The class name to apply to the highlighted text.
- **className**: The class name of the entire line div (optional).
- **caseSensitive**: (optional) Whether the matching should be case-sensitive. Defaults to `false`.
- **wrapperElement**: (optional) Custom wrapper element for the highlighted text. This should be a function that returns a React element.

## Examples

### Basic Usage

```jsx
import React from 'react';
import BasicUsage from '~/components/BasicUsage';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center bg-[#f0f4f8] text-gray-800 space-y-8 p-6 min-h-screen">
      <section className="w-full max-w-3xl">
        <BasicUsage />
      </section>
    </main>
  );
}
```

### Dynamic Highlighting

```jsx
import React, { useState } from 'react';
import DynamicHighlighting from '~/components/DynamicHighlighting';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center bg-[#f0f4f8] text-gray-800 space-y-8 p-6 min-h-screen">
      <section className="w-full max-w-3xl">
        <DynamicHighlighting />
      </section>
    </main>
  );
}
```

### Case-Sensitive Highlighting

```jsx
import React from 'react';
import CaseSensitiveHighlighting from '~/components/CaseSensitiveHighlighting';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center bg-[#f0f4f8] text-gray-800 space-y-8 p-6 min-h-screen">
      <section className="w-full max-w-3xl">
        <CaseSensitiveHighlighting />
      </section>
    </main>
  );
}
```

### Custom Wrapper Element

```jsx
import React from 'react';
import CustomWrapperElement from '~/components/CustomWrapperElement';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center bg-[#f0f4f8] text-gray-800 space-y-8 p-6 min-h-screen">
      <section className="w-full max-w-3xl">
        <CustomWrapperElement />
      </section>
    </main>
  );
}
```

## License

MIT

## Why 'Lite'?

`react-multi-highlite` is designed to be lightweight and efficient. It doesn't bring in large dependencies, making it ideal for projects where performance and bundle size are critical considerations.

---
