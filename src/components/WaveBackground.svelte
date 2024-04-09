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
		const _upper =
			'409L22.8 416.5C45.7 424 91.3 439 137 445C182.7 451 228.3 448 274 445.5C319.7 443 365.3 441 411.2 435.7C457 430.3 503 421.7 548.8 424C594.7 426.3 640.3 439.7 686 451C731.7 462.3 777.3 471.7 823 466.3C868.7 461 914.3 441 937.2';

		upperStr = randomizeSvgStr(_upper, 5);

		const _lower =
			'496L22.8 498.5C45.7 501 91.3 506 137 502C182.7 498 228.3 485 274 478.7C319.7 472.3 365.3 472.7 411.2 475.3C457 478 503 483 548.8 489.3C594.7 495.7 640.3 503.3 686 507.7C731.7 512 777.3 513 823 510.3C868.7 507.7 914.3 501.3 937.2';

		lowerStr = randomizeSvgStr(_lower, 5);
	}

	backgroundColor.subscribe((value) => {
		background.set(value);
	});

	function updateColors(timeVal, bgColor) {
		const _upper = getColorComplement(timeVal, bgColor, 15);
		const _lower = getColorComplement(timeVal, bgColor, 20);
		upperColor.set(_upper);
		lowerColor.set(_lower);
	}

	$: updateColors($timeAngle, $background);
</script>

<div class="absolute h-full w-full top-0 bottom-0 left-0 right-0">
	<svg
		viewBox="0 0 960 540"
		width="100%"
		height="100%"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		version="1.1"
		><path
			d="M0 {upperStr} 431L960 421L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
			fill={$upperColor}
		/><path
			d="M0 {lowerStr} 498.2L960 495L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
			fill={$lowerColor}
		/></svg
	>
</div>
