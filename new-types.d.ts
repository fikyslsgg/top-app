declare module '*.svg' {
	const content: React.FC<React.SVGAttributes<SVGElement>>;
	export default content;
}

declare module '*.svg?url' {
	const content: React.FC<React.SVGAttributes<SVGElement>>;
	export default content;
}
