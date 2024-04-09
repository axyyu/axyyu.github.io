<script lang="ts">
	import { timeAngle } from '../stores';

	let greeting: string = 'Hello';

	timeAngle.subscribe((value) => {
		// 0 - morning
		// 90 - noon
		// 180 - evening
		// 270 - midnight
		if (value > 180) {
			greeting = 'Good evening';
		} else if (value > 90) {
			greeting = 'Good afternoon';
		} else {
			greeting = 'Good morning';
		}
	});
</script>

<h1 class="title">{greeting}!</h1>
<p class="paragraph">
	Nice to meet you! I'm Andrew, a software engineer currently living in Seattle, Washington.
</p>

<a class="mb-24" href="/resume.pdf" target="_blank">
	<button class="button bg-ink">View Resume</button>
</a>

<h4 class="subtitle">Featured Projects</h4>
<div class="flex flex-row flex-wrap gap-3 my-3">
	<a href="https://apps.apple.com/us/app/rainflower/id6477651788" target="_blank" rel="noreferrer">
		<button class="button button-small bg-rainflower">Rainflower</button>
	</a>
	<!-- <a href="https://www.glimmr.io/" target="_blank" rel="noreferrer">
		<button class="button button-small bg-glimmr">Glimmr</button>
	</a> -->
	<a href="https://www.precise.ly/" target="_blank" rel="noreferrer">
		<button class="button button-small bg-precisely">Precise.ly</button>
	</a>
	<a href="https://www.everestpros.com/" target="_blank" rel="noreferrer">
		<button class="button button-small bg-everest">Everest Pro</button>
	</a>
	<a href="https://www.discoverlearningva.com/" target="_blank" rel="noreferrer">
		<button class="button button-small bg-discover">Discover Learning</button>
	</a>
	<!-- <a href="https://www.hopechineseschool.org/" target="_blank" rel="noreferrer">
		<button class="button button-small bg-hope">Hope Chinese School</button>
	</a> -->
</div>
