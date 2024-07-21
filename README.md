
# react-multi-highlite

`react-multi-highlite` is a React component that allows you to highlite specific words or phrases within a block of text. This can be particularly useful for emphasizing important information, highliteing search terms, or making certain parts of the text stand out.

## Installation

You can install the library using npm:

```bash
npm install react-multi-highlite
```

## Usage

To use the `Multihighlite` component, import it and pass the text you want to highlite along with an array of matcher objects. Each matcher object should contain the text to highlite and the class name to apply to the highliteed text.

```jsx
import React from 'react';
import Multihighlite from 'react-multi-highlite';

const App = () => {
  const text = "In software development, highliteing important pieces of information can greatly improve readability and comprehension. For instance, highliteing code snippets, errors, or important notes in documentation can make a significant difference.";
  const matchers = [
    { text: "highliteing", classname: "bg-red-200 text-black" },
    { text: "important", classname: "bg-green-300 text-black" },
    { text: "information", classname: "bg-gray-600 text-white" },
  ];

  return (
    <div>
      <Multihighlite matchers={matchers}>{text}</Multihighlite>
    </div>
  );
};

export default App;
```

## Props

### Multihighlite

The `Multihighlite` component accepts the following props:

- **children**: The text to search for matches (required).
- **matchers**: Array of matcher objects containing `text` and `classname` (required).
  - `text`: The text to match and highlite.
  - `classname`: The class name to apply to the highliteed text.
- **caseSensitive**: (optional) Whether the matching should be case-sensitive. Defaults to `false`.
- **wrapperElement**: (optional) Custom wrapper element for the highliteed text. This should be a function that returns a React element.

## Examples

### Basic Usage

```jsx
import React from 'react';
import Multihighlite from 'react-multi-highlite';

const text = "In software development, highliteing important pieces of information can greatly improve readability and comprehension.";
const matchers = [
  { text: "highliteing", classname: "bg-red-200 text-black" },
  { text: "important", classname: "bg-green-300 text-black" },
  { text: "information", classname: "bg-gray-600 text-white" },
];

<Multihighlite matchers={matchers}>{text}</Multihighlite>
```

### Dynamic highliteing

```jsx
import React, { useState } from 'react';
import Multihighlite from 'react-multi-highlite';

const Dynamichighliteing = () => {
  const initialText = "In software development, highliteing important pieces of information can greatly improve readability and comprehension.";
  const [text, setText] = useState(initialText);
  const [highlite, sethighlite] = useState("");

  const dynamicMatchers = [
    { text: highlite, classname: "bg-yellow-300 text-black" },
  ];

  return (
    <div>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter text"
      />
      <input
        value={highlite}
        onChange={e => sethighlite(e.target.value)}
        placeholder="Enter text to highlite"
      />
      <Multihighlite matchers={dynamicMatchers}>{text}</Multihighlite>
    </div>
  );
};

export default Dynamichighliteing;
```

### Case-Sensitive highliteing

```jsx
import React from 'react';
import Multihighlite from 'react-multi-highlite';

const text = "In software development, highliteing Important pieces of information can greatly improve readability and comprehension.";
const matchers = [
  { text: "highliteing", classname: "bg-red-200 text-black" },
  { text: "Important", classname: "bg-blue-200 text-black" },
  { text: "information", classname: "bg-green-300 text-black" },
];

<Multihighlite matchers={matchers} caseSensitive>{text}</Multihighlite>
```

### Custom Wrapper Element

```jsx
import React from 'react';
import Multihighlite from 'react-multi-highlite';

const text = "In software development, highliteing important pieces of information can greatly improve readability and comprehension.";
const matchers = [
  { text: "highliteing", classname: "bg-red-200 text-black" },
  { text: "important", classname: "bg-green-300 text-black" },
  { text: "information", classname: "bg-gray-600 text-white" },
];

const customWrapper = (className, text, key) => (
  <strong key={key} className={className}>{text}</strong>
);

<Multihighlite matchers={matchers} wrapperElement={customWrapper}>{text}</Multihighlite>
```

## License

MIT