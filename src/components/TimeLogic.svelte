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
		const _sunrise = _start.add(6, 'hours'); // 6AM sunrise
		// const _sunset = _start.add(12+6, 'hours'); // 6PM sunset

		// get difference in seconds
		const _secInDay = 60 * 60 * 24;
		let _diff = _now.diff(_sunrise, 'seconds');

		// if between _start & _sunrise, add a day
		if (_diff < 0) _diff += _secInDay;

		const _perc = Math.floor(360 * (_diff / _secInDay));
		timeAngle.set(_perc);
		// timeAngle.update((n) => (n + 1) % 360);

		// when time angle is updated, recalculate color
		const _i =
			_perc < 180
				? interpolateRgb(colors.yellow, colors.orange) // morning
				: interpolateRgb(colors.blue, colors.darkblue); // evening

		const _color = _i((_perc < 180 ? _perc : _perc - 180) / 180);
		activeColor.set(_color);

		backgroundColor.update((_) => iBackground(_perc / 360));
		ready.set(true);
	}
</script>
