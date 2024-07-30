import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'page',
};

export default function PageProducts({
	params,
}: {
	params: { alias: string };
}) {
	return <div>123{params.alias}</div>;
}
