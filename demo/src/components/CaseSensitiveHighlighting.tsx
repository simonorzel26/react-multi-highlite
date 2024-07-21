// src/components/CaseSensitivehighliteing.tsx
import React from 'react';
import Multihighlite from '../../../src/Multihighlite';

const CaseSensitivehighliteing: React.FC = () => {
  const text = "In software development, highliteing Important pieces of information can greatly improve readability and comprehension. For instance, highliteing code snippets, errors, or important notes in Documentation can make a significant difference.";
  const matchers = [
    { text: "highliteing", classname: "bg-red-200 text-black" },
    { text: "Important", classname: "bg-blue-200 text-black" },
    { text: "information", classname: "bg-green-300 text-black" },
    { text: "Documentation", classname: "bg-purple-300 text-black" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-black w-full">
      <h2 className="text-2xl mb-4 font-bold">Case-Sensitive highliteing</h2>
      <Multihighlite matchers={matchers} caseSensitive>{text}</Multihighlite>
      <pre className="mt-4 p-4 bg-gray-800 text-white rounded overflow-auto">
        {`const text = "In software development, highliteing Important pieces of information can greatly improve readability and comprehension. For instance, highliteing code snippets, errors, or important notes in Documentation can make a significant difference.";
const matchers = [
  { text: "highliteing", classname: "bg-red-200 text-black" },
  { text: "Important", classname: "bg-blue-200 text-black" },
  { text: "information", classname: "bg-green-300 text-black" },
  { text: "Documentation", classname: "bg-purple-300 text-black" },
];
<Multihighlite matchers={matchers} caseSensitive>{text}</Multihighlite>`}
      </pre>
    </div>
  );
};

export default CaseSensitivehighliteing;
