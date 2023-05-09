import { ElementType } from 'react';

type Variant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'body'
	| 'body-small'
	| 'small';

interface TypographyProps {
	variant: Variant;
	children: React.ReactNode;
	className?: string;
	as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	h6: 'h6',
	body: 'p',
	'body-small': 'p',
	small: 'p',
};

const sizes: Record<Variant, string> = {
  h1: "text-h1Mobile sm:text-h1Tablet md:text-h1",
  h2: "text-h2Mobile sm:text-h2Tablet md:text-h2",
  h3: "text-h3Mobile sm:text-h3Tablet md:text-h3",
  h4: "text-h4Mobile sm:text-h4Tablet md:text-h4",
  h5: "text-h5Mobile sm:text-h5Tablet md:text-h5",
  h6: "text-h6Mobile sm:text-h6Tablet md:text-h6",
  body: "text-body",
  "body-small": "caption",
  small: "footnote"
};

export const Typography: React.FC<TypographyProps> = ({
	children,
	variant,
	as,
	className,
}) => {
	const sizeClasses = sizes[variant];
	const Tag = as || tags[variant];

	return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>;
};
