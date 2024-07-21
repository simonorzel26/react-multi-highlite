// src/components/BasicUsage.tsx
import React from 'react';
import MultiHighlight from '../../../src/MultiHighlight';

const BasicUsage: React.FC = () => {
  const text = "In software development, highlighting important pieces of information can greatly improve readability and comprehension. For instance, highlighting code snippets, errors, or important notes in documentation can make a significant difference.";
  const matchers = [
    { text: "highlighting", classname: "bg-red-200 text-black" },
    { text: "important", classname: "bg-green-300 text-black" },
    { text: "information", classname: "bg-gray-600 text-white" },
    { text: "documentation", classname: "bg-purple-300 text-black" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-black w-full">
      <h2 className="text-2xl mb-4 font-bold">Basic Usage</h2>
      <MultiHighlight matchers={matchers}>{text}</MultiHighlight>
      <pre className="mt-4 p-4 bg-gray-800 text-white rounded overflow-auto">
        {`const text = "In software development, highlighting important pieces of information can greatly improve readability and comprehension. For instance, highlighting code snippets, errors, or important notes in documentation can make a significant difference.";
const matchers = [
  { text: "highlighting", classname: "bg-red-200 text-black" },
  { text: "important", classname: "bg-green-300 text-black" },
  { text: "information", classname: "bg-gray-600 text-white" },
  { text: "documentation", classname: "bg-purple-300 text-black" },
];
<MultiHighlight matchers={matchers}>{text}</MultiHighlight>`}
      </pre>
    </div>
  );
};

export default BasicUsage;
