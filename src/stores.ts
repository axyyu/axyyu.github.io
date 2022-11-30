import { writable } from 'svelte/store';
import { colors, gradient } from './utils';

// Color of time display (and mouse hover)
export const activeColor = writable(colors.cloud);

export const backgroundColor = writable(gradient[0]);

// Percentage of time throughout the day
export const timeAngle = writable(0);

export const ready = writable(false);
