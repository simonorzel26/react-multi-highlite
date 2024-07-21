

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
- **caseSensitive**: (optional) Whether the matching should be case-sensitive. Defaults to `false`.
- **wrapperElement**: (optional) Custom wrapper element for the highlighted text. This should be a function that returns a React element.

## Examples

### Basic Usage

```jsx
import React from 'react';
import MultiHighLite from 'react-multi-highlite';

const text = "In software development, highlighting important pieces of information can greatly improve readability and comprehension.";
const matchers = [
  { text: "highlighting", classname: "bg-red-200 text-black" },
  { text: "important", classname: "bg-green-300 text-black" },
  { text: "information", classname: "bg-gray-600 text-white" },
];

<MultiHighLite matchers={matchers}>{text}</MultiHighLite>
```

### Dynamic Highlighting

```jsx
import React, { useState } from 'react';
import MultiHighLite from 'react-multi-highlite';

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
      <MultiHighLite matchers={dynamicMatchers}>{text}</MultiHighLite>
    </div>
  );
};

export default DynamicHighlighting;
```

### Case-Sensitive Highlighting

```jsx
import React from 'react';
import MultiHighLite from 'react-multi-highlite';

const text = "In software development, highlighting Important pieces of information can greatly improve readability and comprehension.";
const matchers = [
  { text: "highlighting", classname: "bg-red-200 text-black" },
  { text: "Important", classname: "bg-blue-200 text-black" },
  { text: "information", classname: "bg-green-300 text-black" },
];

<MultiHighLite matchers={matchers} caseSensitive>{text}</MultiHighLite>
```

### Custom Wrapper Element

```jsx
import React from 'react';
import MultiHighLite from 'react-multi-highlite';

const text = "In software development, highlighting important pieces of information can greatly improve readability and comprehension.";
const matchers = [
  { text: "highlighting", classname: "bg-red-200 text-black" },
  { text: "important", classname: "bg-green-300 text-black" },
  { text: "information", classname: "bg-gray-600 text-white" },
];

const customWrapper = (className, text, key) => (
  <strong key={key} className={className}>{text}</strong>
);

<MultiHighLite matchers={matchers} wrapperElement={customWrapper}>{text}</MultiHighLite>
```

## License

MIT

## Why 'Lite'?

`react-multi-highlite` is designed to be lightweight and efficient. It doesn't bring in large dependencies, making it ideal for projects where performance and bundle size are critical considerations.
```

### MultiHighLite Component

Here is the updated `MultiHighLite` component:

```tsx
// src/MultiHighLite.tsx
import React, { type FC, type ReactElement } from "react";

/**
 * Interface for matcher objects.
 * @property {string} text - The text to match and highlight.
 * @property {string} classname - The class name to apply to the highlighted text.
 */
interface Matcher {
	text: string;
	classname: string;
}

/**
 * Props for the MultiHighLite component.
 * @property {string} children - The text to search for matches.
 * @property {Matcher[]} matchers - Array of matcher objects containing text and classname.
 * @property {boolean} [caseSensitive] - Whether the matching should be case-sensitive. Defaults to false.
 * @property {(className: string, text: string, key: number) => ReactElement} [wrapperElement] - Custom wrapper element for the highlighted text.
 */
interface MultiHighLiteProps {
	className?: string;
	children: string;
	matchers: Matcher[];
	caseSensitive?: boolean;
	wrapperElement?: (
		className: string,
		text: string,
		key: number,
	) => ReactElement;
}

/**
 * MultiHighLite component to highlight specific words in a text based on matchers.
 * @param {MultiHighLiteProps} props - The props for the component.
 * @returns {ReactElement} The rendered component.
 */
const MultiHighLite: FC<MultiHighLiteProps> = ({
	className = "",
	children,
	matchers,
	caseSensitive = false,
	wrapperElement = (className, text, key) => (
		<span key={key} className={className}>
			{text}
		</span>
	),
}) => {
	if (!children) return <p />;

	// Filter out empty matcher texts
	const filteredMatchers = matchers.filter((matcher) => matcher.text);

	const regexFlags = caseSensitive ? "g" : "gi";
	const regexPattern = filteredMatchers
		.map(
			(matcher) => `(${matcher.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
		)
		.join("|");
	const regex = new RegExp(regexPattern, regexFlags);

	const parts = children.split(regex);

	const highlightedText = parts.map((part, index) => {
		if (typeof part === "string" && regex.test(part)) {
			const matcher = filteredMatchers.find((m) =>
				caseSensitive
					? m.text === part
					: m.text.toLowerCase() === part.toLowerCase(),
			);
			if (matcher) {
				return wrapperElement(matcher.classname, part, index);
			}
		}
		return part;
	});

	return <div className={className}>{highlightedText}</div>;
};

export default MultiHighLite;
```
