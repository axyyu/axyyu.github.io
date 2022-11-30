<script lang="ts">
	import TimeLogic from '../components/TimeLogic.svelte';
	import TimeDisplay from '../components/TimeDisplay.svelte';
	import TextDisplay from '../components/TextDisplay.svelte';

	import { ready } from '../stores';
	import { tweened } from 'svelte/motion';
	import { duration } from '../utils';

	const opacity = tweened(0, { duration: duration });

	ready.subscribe((value) => setTimeout(() => (value ? opacity.set(1) : opacity.set(0)), duration));
</script>

<svelte:head>
	<title>Andrew Wang</title>
</svelte:head>

<TimeLogic />

<section class="container mb-16" style="opacity:{$opacity};">
	<TimeDisplay />
</section>

<section class="container" style="opacity:{$opacity};">
	<TextDisplay />
</section>
