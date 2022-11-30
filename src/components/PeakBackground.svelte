<script lang="ts">
	import { timeAngle, backgroundColor } from '../stores';
	import { onMount } from 'svelte';
	import { colors, duration, getColorComplement, randomizeSvgStr } from '../utils';
	import { tweened } from 'svelte/motion';
	import { interpolateRgb } from 'd3-interpolate';

	let upperStr: string = '';
	let lowerStr: string = '';

	const upperColor = tweened(colors.ink, { duration: duration, interpolate: interpolateRgb });
	const lowerColor = tweened(colors.ink, { duration: duration, interpolate: interpolateRgb });
	let background = tweened(colors.ink, { duration: duration, interpolate: interpolateRgb });

	onMount(() => {
		generate();
	});

	function generate() {
		const _upper = '320L137 389L274 332L411 373L549 346L686 339L823';

		upperStr = randomizeSvgStr(_upper, 10);

		const _lower = '406L137 353L274 398L411 430L549 372L686 424L823';

		lowerStr = randomizeSvgStr(_lower, 10);
	}

	backgroundColor.subscribe((value) => {
		background.set(value);
	});

	timeAngle.subscribe((value) => {
		const _upper = getColorComplement(value, $background, 5);
		const _lower = getColorComplement(value, $background, 10);
		upperColor.set(_upper);
		lowerColor.set(_lower);
	});
</script>

<div class="absolute h-full w-full top-0 bottom-0 left-0 right-0">
	<svg
		viewBox="0 0 960 540"
		width="100%"
		height="100%"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		version="1.1"
	>
		<path
			d="M0 {upperStr} 337L960 381L960 541L823 541L686 541L549 541L411 541L274 541L137 541L0 541Z"
			fill={$upperColor}
		/>
		<path
			d="M0 {lowerStr} 355L960 413L960 541L823 541L686 541L549 541L411 541L274 541L137 541L0 541Z"
			fill={$lowerColor}
		/>
	</svg>
</div>
