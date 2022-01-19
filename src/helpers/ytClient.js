export let player;

const ytClient = async (videoId) => {
	const ytScript = document.createElement('script');
	ytScript.src = 'https://www.youtube.com/iframe_api';
	document.body.appendChild(ytScript);

	window.onYouTubeIframeAPIReady = () => {
		// eslint-disable-next-line no-undef
		new YT.Player('player', {
			height: '390',
			width: '640',
			videoId,
			playerVars: {
				playsinline: 1
			},
			events: {}
		});
	};

	return player;
};

export default ytClient;
