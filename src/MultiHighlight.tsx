// src/Multihighlite.tsx
import React, { type FC, type ReactElement } from "react";

/**
 * Interface for matcher objects.
 * @property {string} text - The text to match and highlite.
 * @property {string} classname - The class name to apply to the highliteed text.
 */
interface Matcher {
	text: string;
	classname: string;
}

/**
 * Props for the Multihighlite component.
 * @property {string} children - The text to search for matches.
 * @property {Matcher[]} matchers - Array of matcher objects containing text and classname.
 * @property {boolean} [caseSensitive] - Whether the matching should be case-sensitive. Defaults to false.
 * @property {(className: string, text: string, key: number) => ReactElement} [wrapperElement] - Custom wrapper element for the highliteed text.
 */
interface MultihighliteProps {
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
 * Multihighlite component to highlite specific words in a text based on matchers.
 * @param {MultihighliteProps} props - The props for the component.
 * @returns {ReactElement} The rendered component.
 */
const Multihighlite: FC<MultihighliteProps> = ({
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

	const highliteedText = parts.map((part, index) => {
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

	return <p>{highliteedText}</p>;
};

export default Multihighlite;
