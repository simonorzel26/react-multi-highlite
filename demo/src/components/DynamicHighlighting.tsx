'use client'
import React, { useState } from 'react';
import MultiHighLite from 'react-multi-highlite';

const DynamicHighLighting: React.FC = () => {
  const initialText = "In software development, highliteing important pieces of information can greatly improve readability and comprehension. For instance, highliteing code snippets, errors, or important notes in documentation can make a significant difference.";
  const [text, setText] = useState(initialText);
  const [highlite, sethighlite] = useState("");

  const dynamicMatchers = [
    { text: highlite, classname: "bg-yellow-300 text-black" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-black w-full">
      <h2 className="text-2xl mb-4 font-bold">Dynamic highliteing</h2>
      <input
        value={highlite}
        onChange={e => sethighlite(e.target.value)}
        placeholder="Enter text to highlite"
        className="p-2 mb-2 w-full text-black border rounded"
      />
      <MultiHighLite matchers={dynamicMatchers}>{text}</MultiHighLite>
      <pre className="mt-4 p-4 bg-gray-800 text-white rounded overflow-auto">
        {`const initialText = "In software development, highliteing important pieces of information can greatly improve readability and comprehension. For instance, highliteing code snippets, errors, or important notes in documentation can make a significant difference.";
const [text, setText] = useState(initialText);
const [highlite, sethighlite] = useState("");

const dynamicMatchers = [
  { text: highlite, classname: "bg-yellow-300 text-black" },
];

<textarea value={text} onChange={e => setText(e.target.value)} />
<input value={highlite} onChange={e => sethighlite(e.target.value)} placeholder="Enter text to highlite" />
<MultiHighLite matchers={dynamicMatchers}>{text}</MultiHighLite>`}
      </pre>
    </div>
  );
};

export default DynamicHighLighting;
