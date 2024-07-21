// src/components/CustomWrapperElement.tsx
import React from 'react';
import MultiHighlight from '../../../src/MultiHighlight';

const CustomWrapperElement: React.FC = () => {
  const text = "In software development, highlighting important pieces of information can greatly improve readability and comprehension. For instance, highlighting code snippets, errors, or important notes in documentation can make a significant difference.";
  const matchers = [
    { text: "highlighting", classname: "bg-red-200 text-black" },
    { text: "important", classname: "bg-green-300 text-black" },
    { text: "information", classname: "bg-gray-600 text-white" },
    { text: "documentation", classname: "bg-purple-300 text-black" },
  ];

  const customWrapper = (className: string, text: string, key: number) => (
    <strong key={key} className={className}>{text}</strong>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-black w-full">
      <h2 className="text-2xl mb-4 font-bold">Custom Wrapper Element</h2>
      <MultiHighlight matchers={matchers} wrapperElement={customWrapper}>{text}</MultiHighlight>
      <pre className="mt-4 p-4 bg-gray-800 text-white rounded overflow-auto">
        {`const text = "In software development, highlighting important pieces of information can greatly improve readability and comprehension. For instance, highlighting code snippets, errors, or important notes in documentation can make a significant difference.";
const matchers = [
  { text: "highlighting", classname: "bg-red-200 text-black" },
  { text: "important", classname: "bg-green-300 text-black" },
  { text: "information", classname: "bg-gray-600 text-white" },
  { text: "documentation", classname: "bg-purple-300 text-black" },
];

const customWrapper = (className: string, text: string, key: number) => (
  <strong key={key} className={className}>{text}</strong>
);

<MultiHighlight matchers={matchers} wrapperElement={customWrapper}>{text}</MultiHighlight>`}
      </pre>
    </div>
  );
};

export default CustomWrapperElement;
