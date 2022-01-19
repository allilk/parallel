<script>
	import { onMount } from 'svelte';

	import ytClient from '../helpers/ytClient';

	export let videoId;

	onMount(() => {
		ytClient(videoId);
	});
</script>

<div id="player" />
