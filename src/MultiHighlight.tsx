// src/MultiHighlight.tsx
import React, { type FC, type ReactElement } from "react";

/**
 * Interface for matcher objects.
 * @property {string} text - The text to match and highlight.
 * @property {string} classname - The class name to apply to the highlighted text.
 */
interface Matcher {
	text: string;
	classname: string;
}

/**
 * Props for the MultiHighlight component.
 * @property {string} children - The text to search for matches.
 * @property {Matcher[]} matchers - Array of matcher objects containing text and classname.
 * @property {boolean} [caseSensitive] - Whether the matching should be case-sensitive. Defaults to false.
 * @property {(className: string, text: string, key: number) => ReactElement} [wrapperElement] - Custom wrapper element for the highlighted text.
 */
interface MultiHighlightProps {
	children: string;
	matchers: Matcher[];
	caseSensitive?: boolean;
	wrapperElement?: (
		className: string,
		text: string,
		key: number,
	) => ReactElement;
}

/**
 * MultiHighlight component to highlight specific words in a text based on matchers.
 * @param {MultiHighlightProps} props - The props for the component.
 * @returns {ReactElement} The rendered component.
 */
const MultiHighlight: FC<MultiHighlightProps> = ({
	children,
	matchers,
	caseSensitive = false,
	wrapperElement = (className, text, key) => (
		<span key={key} className={className}>
			{text}
		</span>
	),
}) => {
	if (!children) return <p />;

	// Filter out empty matcher texts
	const filteredMatchers = matchers.filter((matcher) => matcher.text);

	const regexFlags = caseSensitive ? "g" : "gi";
	const regexPattern = filteredMatchers
		.map(
			(matcher) => `(${matcher.text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
		)
		.join("|");
	const regex = new RegExp(regexPattern, regexFlags);

	const parts = children.split(regex);

	const highlightedText = parts.map((part, index) => {
		if (typeof part === "string" && regex.test(part)) {
			const matcher = filteredMatchers.find((m) =>
				caseSensitive
					? m.text === part
					: m.text.toLowerCase() === part.toLowerCase(),
			);
			if (matcher) {
				return wrapperElement(matcher.classname, part, index);
			}
		}
		return part;
	});

	return <p>{highlightedText}</p>;
};

export default MultiHighlight;
