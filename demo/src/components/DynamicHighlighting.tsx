'use client'
// src/components/DynamicHighlighting.tsx
import React, { useState } from 'react';
import MultiHighlight from '../../../src/MultiHighlight';

const DynamicHighlighting: React.FC = () => {
  const initialText = "In software development, highlighting important pieces of information can greatly improve readability and comprehension. For instance, highlighting code snippets, errors, or important notes in documentation can make a significant difference.";
  const [text, setText] = useState(initialText);
  const [highlight, setHighlight] = useState("");

  const dynamicMatchers = [
    { text: highlight, classname: "bg-yellow-300 text-black" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-black w-full">
      <h2 className="text-2xl mb-4 font-bold">Dynamic Highlighting</h2>
      <input
        value={highlight}
        onChange={e => setHighlight(e.target.value)}
        placeholder="Enter text to highlight"
        className="p-2 mb-2 w-full text-black border rounded"
      />
      <MultiHighlight matchers={dynamicMatchers}>{text}</MultiHighlight>
      <pre className="mt-4 p-4 bg-gray-800 text-white rounded overflow-auto">
        {`const initialText = "In software development, highlighting important pieces of information can greatly improve readability and comprehension. For instance, highlighting code snippets, errors, or important notes in documentation can make a significant difference.";
const [text, setText] = useState(initialText);
const [highlight, setHighlight] = useState("");

const dynamicMatchers = [
  { text: highlight, classname: "bg-yellow-300 text-black" },
];

<textarea value={text} onChange={e => setText(e.target.value)} />
<input value={highlight} onChange={e => setHighlight(e.target.value)} placeholder="Enter text to highlight" />
<MultiHighlight matchers={dynamicMatchers}>{text}</MultiHighlight>`}
      </pre>
    </div>
  );
};

export default DynamicHighlighting;
