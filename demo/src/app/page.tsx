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
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <ul className="list-disc pl-6">
          <li><code>children</code>: The text to search for matches (required).</li>
          <li><code>matchers</code>: Array of matcher objects containing `text` and `classname` (required).</li>
          <li><code>className</code>: The className of the entire line div (optional).</li>
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
    </main>
  );
}
