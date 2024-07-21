'use client';
import React from 'react';
import BasicUsage from '~/components/BasicUsage';
import CaseSensitiveHighlighting from '~/components/CaseSensitiveHighlighting';
import CustomWrapperElement from '~/components/CustomWrapperElement';
import DynamicHighlighting from '~/components/DynamicHighlighting';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center bg-blue-400 text-white space-y-8 p-4 min-h-screen">
      <section className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">react-multi-highlite</h1>
        <p className="mb-4">
          <code>react-multi-highlite</code> is a React component that allows you to highlight specific words or phrases within a block of text. This can be particularly useful for emphasizing important information, highlighting search terms, or making certain parts of the text stand out.
        </p>
        <h2 className="text-2xl font-bold mb-4">Installation</h2>
        <pre className="p-4 bg-gray-800 text-white rounded mb-4">
          npm install react-multi-highlite
        </pre>
        <h2 className="text-2xl font-bold mb-4">Usage</h2>
        <p className="mb-4">
          To use the <code>MultiHighLite</code> component, import it and pass the text you want to highlight along with an array of matcher objects. Each matcher object should contain the text to highlight and the class name to apply to the highlighted text.
        </p>
        <pre className="p-4 bg-gray-800 text-white rounded mb-4">
          {`import MultiHighLite from 'react-multi-highlite';

const text = "In software development, highlighting important pieces of information can greatly improve readability and comprehension.";
const matchers = [
  { text: "highlighting", classname: "bg-red-200 text-black" },
  { text: "important", classname: "bg-green-300 text-black" },
  { text: "information", classname: "bg-gray-600 text-white" },
];

<MultiHighLite matchers={matchers}>{text}</MultiHighLite>`}
        </pre>
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <ul className="list-disc pl-6">
          <li><code>children</code>: The text to search for matches (required).</li>
          <li><code>matchers</code>: Array of matcher objects containing `text` and `classname` (required).</li>
          <li><code>caseSensitive</code> (optional): Whether the matching should be case-sensitive. Defaults to false.</li>
          <li><code>wrapperElement</code> (optional): Custom wrapper element for the highlighted text. This should be a function that returns a React element.</li>
        </ul>
      </section>

      <section className="w-full max-w-3xl">
        <BasicUsage />
      </section>

      <section className="w-full max-w-3xl">
        <DynamicHighlighting />
      </section>

      <section className="w-full max-w-3xl">
        <CaseSensitiveHighlighting />
      </section>

      <section className="w-full max-w-3xl">
        <CustomWrapperElement />
      </section>

      <section className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">API</h2>
        <p className="mb-4">The <code>MultiHighLite</code> component accepts the following props:</p>
        <ul className="list-disc pl-6 mb-4">
          <li><code>children</code>: The text to search for matches (required).</li>
          <li><code>matchers</code>: Array of matcher objects containing <code>text</code> and <code>classname</code> (required).
            <ul className="list-disc pl-6">
              <li><code>text</code>: The text to match and highlight.</li>
              <li><code>classname</code>: The class name to apply to the highlighted text.</li>
            </ul>
          </li>
          <li><code>caseSensitive</code> (optional): Whether the matching should be case-sensitive. Defaults to false.</li>
          <li><code>wrapperElement</code> (optional): Custom wrapper element for the highlighted text. This should be a function that returns a React element.</li>
        </ul>
      </section>
    </main>
  );
}
