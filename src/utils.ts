import { interpolateRgb } from 'd3-interpolate';
import tinycolor from 'tinycolor2';

export const duration: number = 100;

export const colors = {
	cloud: '#edf2f4',
	ink: '#00171f',
	yellow: '#f5af19',
	orange: '#f12711',
	darkblue: '#021B79',
	blue: '#0575E6'
};

export const gradient = [
	'#004372',
	'#004372',
	'#016792',
	'#07729f',
	'#12a1c0',
	'#efeebc',
	'#fee154',
	'#fdc352',
	'#ffac6f',
	'#fda65a',
	'#fd9e58',
	'#f18448',
	'#f06b7e',
	'#ca5a92',
	'#5b2c83',
	'#371a79',
	'#28166b',
	'#192861',
	'#040b3c',
	'#040b3c',
	'#012459',
	'#003972',
	'#003972',
	'#004372'
];

export function interpolateGradient(colors: string[]) {
	if (colors.length < 2) throw Error('Need more than 1 color');

	const _funcs: ((t: number) => string)[] = [];
	for (let i = 0; i < colors.length; i++) {
		_funcs.push(interpolateRgb(colors[i], colors[i + 1]));
	}

	return (n: number) => {
		const index = Math.floor(n * colors.length);
		const num = n * colors.length - index;
		const i = _funcs[index];
		return i(num);
	};
}

export function getColorComplement(time: number, backgroundColor: string, delta: number): string {
	const multiplier = Math.sin((time * Math.PI) / 180) * delta;
	let color = tinycolor(backgroundColor);
	if (multiplier < 0) {
		color = color.lighten(Math.abs(multiplier));
	} else {
		color = color.darken(Math.abs(multiplier));
	}
	return color.toString();
}

export interface Point {
	x: number;
	y: number;
}

/**
 * Returns random integer between min/max inclusive
 * @param min
 * @param max
 * @returns integer
 */
export function getRandomInt(min: number, max: number): number {
	const range = max - min + 1;
	return Math.floor(Math.random() * range + min);
}

/**
 * Returns random float between min/max
 * @param min
 * @param max
 * @returns float
 */
export function getRandomFloat(min: number, max: number): number {
	const range = max - min;
	return Math.random() * range + min;
}

/**
 * Randomizes values in a SVG string
 * @param str
 * @param delta
 * @returns SVG string
 */
export function randomizeSvgStr(str: string, delta: number): string {
	const regex = /\d+(\.\d|)/gm;
	let match: RegExpExecArray | null;
	let newStr = '';
	let lastIndex = 0;

	while ((match = regex.exec(str)) != null) {
		if (!match) return str;

		newStr += str.substring(lastIndex, match.index);

		const newValue = parseFloat(match[0]) + getRandomInt(-delta, delta);

		newStr += newValue;
		lastIndex = regex.lastIndex;
	}
	return newStr;
}
