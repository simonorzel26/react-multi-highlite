// src/MultiHighlight.tsx
import React, { type FC, type ReactElement } from "react";

interface Matcher {
	text: string;
	classname: string;
}

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
