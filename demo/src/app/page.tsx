import React from 'react';
import BasicUsage from '~/components/BasicUsage';
import CaseSensitiveHighlighting from '~/components/CaseSensitiveHighlighting';
import CustomWrapperElement from '~/components/CustomWrapperElement';
import DynamicHighlighting from '~/components/DynamicHighlighting';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'React Multi Highlite - Highlight Text in React.js',
  description: 'React.js component to highlight specific words or phrases. Used by adfree-recipe.com.',
  openGraph: {
    title: 'React Multi Highlite',
    description: 'Highlight specific words or phrases in React. Check it out on adfree-recipe.com.',
    url: 'https://github.com/simonorzel26/react-multi-highlite',
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center bg-[#f0f4f8] text-gray-800 space-y-8 p-6 min-h-screen">
      <section className="bg-white text-gray-800 p-6 rounded-lg shadow-md w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-4 text-black-700">react-multi-highlite</h1>
        <p className="mb-4">
          <code className="text-green-600">react-multi-highlite</code> is a React component that allows you to highlight specific words or phrases within a block of text. This can be particularly useful for emphasizing important information, highlighting search terms, or making certain parts of the text stand out.
        </p>
        <p className="mb-4">
          It is used by <Link href="https://adfree-recipe.com">adfree-recipe.com</Link> in the recipe section.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><a href="https://www.npmjs.com/package/react-multi-highlite" className="text-purple-600 underline">NPM Package</a></li>
          <li><a href="https://github.com/simonorzel26/react-multi-highlite" className="text-purple-600 underline">GitHub Repository</a></li>
        </ul>
        <h2 className="text-2xl font-bold mb-4 text-black-700">Installation</h2>
        <pre className="p-4 bg-gray-100 text-gray-800 rounded mb-4">
          npm install react-multi-highlite
        </pre>
        <h2 className="text-2xl font-bold mb-4 text-black-700">Props</h2>
        <ul className="list-disc pl-6">
          <li><code className="text-green-600">children</code>: The text to search for matches (required).</li>
          <li><code className="text-green-600">matchers</code>: Array of matcher objects containing `text` and `classname` (required).</li>
          <li><code className="text-green-600">className</code>: The className of the entire line div (optional).</li>
          <li><code className="text-green-600">caseSensitive</code> (optional): Whether the matching should be case-sensitive. Defaults to false.</li>
          <li><code className="text-green-600">wrapperElement</code> (optional): Custom wrapper element for the highlighted text. This should be a function that returns a React element.</li>
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
