// src/MultiHighlight.tsx
import { type FC } from 'react';

interface Matcher {
  text: string;
  classname: string;
}

interface MultiHighlightProps {
  children: string;
  matchers: Matcher[];
}

const MultiHighlight: FC<MultiHighlightProps> = ({ children, matchers }) => {
  // Build a single regex pattern to match all keywords
  const regexPattern: string = matchers.map((matcher: Matcher) => `(${matcher.text})`).join('|');
  const regex: RegExp = new RegExp(regexPattern, 'gi');

  // Split text by regex matches
  const parts: (string | JSX.Element)[] = children.split(regex);

  // Iterate through parts and wrap matches with spans
  const highlightedText: (string | JSX.Element)[] = parts.map((part: string | JSX.Element, index: number) => {
    if (regex.test(String(part))) {
      const matcher: Matcher | undefined = matchers.find((m: Matcher) => m.text.toLowerCase() === part.toString().toLowerCase());
      if (matcher) {
        return (
          <span key={index} className={matcher.classname}>
            {part}
          </span>
        );
      }
    }
    return part;
  });

  return <p>{highlightedText}</p>;
};

export default MultiHighlight;
