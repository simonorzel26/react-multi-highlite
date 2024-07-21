'use client';
import React from 'react';
import BasicUsage from '~/components/BasicUsage';
import CaseSensitivehighliteing from '~/components/CaseSensitivehighliteing';
import CustomWrapperElement from '~/components/CustomWrapperElement';
import Dynamichighliteing from '~/components/Dynamichighliteing';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center bg-blue-400 text-white space-y-8 p-4 min-h-screen">
      <section className="bg-white text-black p-6 rounded-lg shadow-lg w-full">
        <h1 className="text-3xl font-bold mb-4">react-multi-highlite</h1>
        <p className="mb-4">
          <code>react-multi-highlite</code> is a React component that allows you to highlite specific words or phrases within a block of text. This can be particularly useful for emphasizing important information, highliteing search terms, or making certain parts of the text stand out.
        </p>
        <h2 className="text-2xl font-bold mb-4">Installation</h2>
        <pre className="p-4 bg-gray-800 text-white rounded mb-4">
          npm install react-multi-highlite
        </pre>
        <h2 className="text-2xl font-bold mb-4">Usage</h2>
        <p className="mb-4">
          To use the <code>Multihighlite</code> component, import it and pass the text you want to highlite along with an array of matcher objects. Each matcher object should contain the text to highlite and the class name to apply to the highliteed text.
        </p>
        <pre className="p-4 bg-gray-800 text-white rounded mb-4">
          {`import Multihighlite from 'react-multi-highlite';

const text = "In software development, highliteing important pieces of information can greatly improve readability and comprehension.";
const matchers = [
  { text: "highliteing", classname: "bg-red-200 text-black" },
  { text: "important", classname: "bg-green-300 text-black" },
  { text: "information", classname: "bg-gray-600 text-white" },
];

<Multihighlite matchers={matchers}>{text}</Multihighlite>`}
        </pre>
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <ul className="list-disc pl-6">
          <li><code>children</code>: The text to search for matches.</li>
          <li><code>matchers</code>: Array of matcher objects containing text and classname.</li>
          <li><code>caseSensitive</code> (optional): Whether the matching should be case-sensitive. Defaults to false.</li>
          <li><code>wrapperElement</code> (optional): Custom wrapper element for the highliteed text.</li>
        </ul>
      </section>

      <section className="w-full">
        <BasicUsage />
      </section>

      <section className="w-full">
        <Dynamichighliteing />
      </section>

      <section className="w-full">
        <CaseSensitivehighliteing />
      </section>

      <section className="w-full">
        <CustomWrapperElement />
      </section>
    </main>
  );
}
