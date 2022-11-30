<script lang="ts">
	import { backgroundColor } from '../stores';
	import { tweened } from 'svelte/motion';
	import { interpolateRgb } from 'd3-interpolate';
	import WaveBackground from './WaveBackground.svelte';
	import PeakBackground from './PeakBackground.svelte';
	import { colors, duration } from '../utils';
	import TimeIcon from './TimeIcon.svelte';

	const background = tweened(colors.ink, { duration: duration, interpolate: interpolateRgb });

	backgroundColor.subscribe((value) => {
		background.set(value);
	});
</script>

<div
	class="rounded-2xl overflow-hidden aspect-video relative pt-16 shadow-lg"
	style="background-color: {$background};"
>
	<TimeIcon />
	<PeakBackground />
	<WaveBackground />
</div>
