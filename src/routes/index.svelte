<script>
	import stores from '../stores';
	import Message from '../components/Message.svelte';
	import { onMount } from 'svelte';
	import Player from '../components/Player.svelte';
	import { writable } from 'svelte/store';
	import getPlayer from '../helpers/getPlayer';

	let video;
	let messages = [];
	let videoId = writable('');
	let player = '';

	onMount(() => {
		stores.subscribe((currentMessage) => {
			try {
				const parsed = JSON.parse(currentMessage);
				if (parsed?.videoId) {
					if ($videoId.length > 0) {
						if (!player) player = getPlayer();

						player.loadVideoById(parsed).pauseVideo();
					}
					videoId.set(parsed.videoId);
				}
			} catch {}
		});
	});

	function onSendMessage() {
		if (video.length > 0) {
			stores.sendMessage(video);
			video = '';
		}
	}
</script>

<input type="text" bind:value={video} />
<button on:click={onSendMessage}> Send Message </button>

{#each messages as message, i}
	<Message {message} direction={i % 2 == 0 ? 'left' : 'right'} />
{/each}

{#if $videoId.length > 0}
	<Player videoId={$videoId} />
{/if}
