import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	appearance?: 'small' | 'big';
	children: ReactNode;
}
