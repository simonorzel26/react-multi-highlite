'use client'
import React, { useState } from 'react';
import MultiHighlight from '../../../src/MultiHighlight';

export default function HomePage() {
  const initialText = "This is a sample paragraph for testing highlighting.";
  const [text, setText] = useState(initialText);
  const [highlight, setHighlight] = useState("");

  const staticMatchers = [
    { text: "sample", classname: "bg-red-200 text-black" },
    { text: "testing", classname: "bg-green-300 text-black" },
    { text: "highlighting", classname: "bg-gray-600 text-white" },
    { text: "this", classname: "bg-purple-300 text-black" }, // Case-sensitive example
  ];

  const dynamicMatchers = [
    { text: highlight, classname: "bg-yellow-300 text-black" },
  ];

  const customWrapper = (className: string, text: string, key: number) => (
    <strong key={key} className={className}>{text}</strong>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white space-y-8">
      <section>
        <h2 className="text-xl mb-4">Basic Usage</h2>
        <MultiHighlight matchers={staticMatchers}>{initialText}</MultiHighlight>
      </section>

      <section>
        <h2 className="text-xl mb-4">Dynamic Highlighting</h2>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          className="p-2 mb-2 text-black"
        />
        <input
          value={highlight}
          onChange={e => setHighlight(e.target.value)}
          placeholder="Enter text to highlight"
          className="p-2 mb-2 text-black"
        />
        <MultiHighlight matchers={dynamicMatchers}>{text}</MultiHighlight>
      </section>

      <section>
        <h2 className="text-xl mb-4">Case-Sensitive Highlighting</h2>
        <MultiHighlight matchers={staticMatchers} caseSensitive>{initialText}</MultiHighlight>
      </section>

      <section>
        <h2 className="text-xl mb-4">Custom Wrapper Element</h2>
        <MultiHighlight matchers={staticMatchers} wrapperElement={customWrapper}>{initialText}</MultiHighlight>
      </section>
    </main>
  );
}
