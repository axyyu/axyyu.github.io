<script lang="ts">
	import { timeAngle } from '../stores';
	import Moon from '../assets/moon.svg?component';
	import Sun from '../assets/sun.svg?component';
	import { tweened } from 'svelte/motion';
	import { interpolateRgb } from 'd3-interpolate';
	import { colors, duration } from '../utils';

	const color = tweened(colors.cloud, { duration: duration, interpolate: interpolateRgb });

	const x = tweened(0, {
		duration: duration
	});

	const y = tweened(0, {
		duration: duration
	});

	let icon: ConstructorOfATypedSvelteComponent = Sun;

	timeAngle.subscribe((value) => {
		icon = value < 180 ? Sun : Moon;
		color.set(value < 180 ? colors.orange : colors.cloud);

		const _theta = ((value < 180 ? value : value - 180) * Math.PI) / 180; // theta should be between [0,pi]

		x.set((Math.cos(_theta) + 1) / 2); // transform range from [-1, 1] -> [0, 1]
		y.set(Math.sin(_theta)); // transform range from [0, 1] -> [0,1]
	});

	$: bottom = $y * 100;
	$: left = $x * 100;
</script>

<div class="w-full h-full relative -scale-x-100">
	<svelte:component
		this={icon}
		class="absolute -translate-x-1/2 translate-y-1/2"
		style="bottom: {bottom}%; left:{left}%;"
		height="64"
		width="64"
		fill={$color}
		stroke={$color}
	/>
</div>
