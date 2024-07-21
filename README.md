
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

To use the `MultiHighlight` component, import it and pass the text you want to highlight along with an array of matcher objects. Each matcher object should contain the text to highlight and the class name to apply to the highlighted text.

```jsx
import React from 'react';
import MultiHighlight from 'react-multi-highlite';

const App = () => {
  const text = "In software development, highlighting important pieces of information can greatly improve readability and comprehension. For instance, highlighting code snippets, errors, or important notes in documentation can make a significant difference.";
  const matchers = [
    { text: "highlighting", classname: "bg-red-200 text-black" },
    { text: "important", classname: "bg-green-300 text-black" },
    { text: "information", classname: "bg-gray-600 text-white" },
  ];

  return (
    <div>
      <MultiHighlight matchers={matchers}>{text}</MultiHighlight>
    </div>
  );
};

export default App;
```

## Props

### MultiHighlight

The `MultiHighlight` component accepts the following props:

- **children**: The text to search for matches (required).
- **matchers**: Array of matcher objects containing `text` and `classname` (required).
  - `text`: The text to match and highlight.
  - `classname`: The class name to apply to the highlighted text.
- **caseSensitive**: (optional) Whether the matching should be case-sensitive. Defaults to `false`.
- **wrapperElement**: (optional) Custom wrapper element for the highlighted text. This should be a function that returns a React element.

## Examples

### Basic Usage

```jsx
import React from 'react';
import MultiHighlight from 'react-multi-highlite';

const text = "In software development, highlighting important pieces of information can greatly improve readability and comprehension.";
const matchers = [
  { text: "highlighting", classname: "bg-red-200 text-black" },
  { text: "important", classname: "bg-green-300 text-black" },
  { text: "information", classname: "bg-gray-600 text-white" },
];

<MultiHighlight matchers={matchers}>{text}</MultiHighlight>
```

### Dynamic Highlighting

```jsx
import React, { useState } from 'react';
import MultiHighlight from 'react-multi-highlite';

const DynamicHighlighting = () => {
  const initialText = "In software development, highlighting important pieces of information can greatly improve readability and comprehension.";
  const [text, setText] = useState(initialText);
  const [highlight, setHighlight] = useState("");

  const dynamicMatchers = [
    { text: highlight, classname: "bg-yellow-300 text-black" },
  ];

  return (
    <div>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter text"
      />
      <input
        value={highlight}
        onChange={e => setHighlight(e.target.value)}
        placeholder="Enter text to highlight"
      />
      <MultiHighlight matchers={dynamicMatchers}>{text}</MultiHighlight>
    </div>
  );
};

export default DynamicHighlighting;
```

### Case-Sensitive Highlighting

```jsx
import React from 'react';
import MultiHighlight from 'react-multi-highlite';

const text = "In software development, highlighting Important pieces of information can greatly improve readability and comprehension.";
const matchers = [
  { text: "highlighting", classname: "bg-red-200 text-black" },
  { text: "Important", classname: "bg-blue-200 text-black" },
  { text: "information", classname: "bg-green-300 text-black" },
];

<MultiHighlight matchers={matchers} caseSensitive>{text}</MultiHighlight>
```

### Custom Wrapper Element

```jsx
import React from 'react';
import MultiHighlight from 'react-multi-highlite';

const text = "In software development, highlighting important pieces of information can greatly improve readability and comprehension.";
const matchers = [
  { text: "highlighting", classname: "bg-red-200 text-black" },
  { text: "important", classname: "bg-green-300 text-black" },
  { text: "information", classname: "bg-gray-600 text-white" },
];

const customWrapper = (className, text, key) => (
  <strong key={key} className={className}>{text}</strong>
);

<MultiHighlight matchers={matchers} wrapperElement={customWrapper}>{text}</MultiHighlight>
```

## License

MIT