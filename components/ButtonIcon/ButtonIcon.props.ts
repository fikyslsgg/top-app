import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import close from './close-icon.svg';
import menu from './menu-icon.svg';
import up from './up-icon.svg';

export const icons = {
	up,
	close,
	menu,
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	icon: IconName;
	appearance: 'primary' | 'white';
}
