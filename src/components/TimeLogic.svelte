<script lang="ts" type="module">
	import { activeColor, backgroundColor, ready, timeAngle } from '../stores.js';
	import dayjs from 'dayjs';
	import { onDestroy, onMount } from 'svelte';
	import { interpolateRgb } from 'd3-interpolate';
	import { colors, gradient, interpolateGradient } from '../utils.js';

	const iBackground = interpolateGradient(gradient);

	// recalculate every minute
	const interval = setInterval(() => {
		calculate();
	}, 60 * 1000);

	onMount(() => calculate());

	onDestroy(() => {
		clearInterval(interval);
	});

	function calculate() {
		const _now = dayjs();
		const _start = _now.startOf('day');
		const _secInDay = 60 * 60 * 24;

		// get difference from start of day
		const _diff = _now.diff(_start, 'seconds');
		const _perc = Math.floor(360 * (_diff / _secInDay));

		// shift values over by 90 (6 hours)
		// 90 - 270 sun is out
		// < 90 && > 270 moon is out
		const _percOffset = (_perc < 90 ? _perc + 360 : _perc) - 90;

		// 0 - morning
		// 90 - noon
		// 180 - evening
		// 270 - midnight
		// timeAngle.update((n) => (n + 1) % 360);

		// when time angle is updated, recalculate color
		const _i =
			_percOffset <= 180
				? interpolateRgb(colors.yellow, colors.orange) // morning
				: interpolateRgb(colors.blue, colors.darkblue); // evening

		// get values in range 0-180
		const _percAmount = _percOffset < 180 ? _percOffset : _percOffset - 180;
		const _color = _i(_percAmount / 180);

		activeColor.set(_color);

		backgroundColor.set(iBackground(_percOffset / 360));

		timeAngle.set(_percOffset);
		ready.set(true);
	}
</script>
