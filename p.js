const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('stream');
console.log(url)
videojs("player", {
	controls: true,
	sources: [{
		src: url,
		type: 'application/x-mpegURL'
	}],
	autoplay: true
})









// window.addEventListener("message", function (e) {

// 	console.log('IFRAMEEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
// 	var video_config_media = JSON.parse(e.data.video_config_media);
// 	var user_lang = e.data.lang[0];
//     console.log(video_config_media.streams)

// 	//console.log(video_config_media);

// 	var stream = video_config_media.streams.find(stream => {
// 		return stream.format === 'adaptive_hls' && stream.hardsub_lang === user_lang
// 	})

// 	if (stream !== undefined) {
// 		var url = stream.url.replace("pl.crunchyroll.com", "dl.v.vrv.co")
// 		console.log(url)
// 		//Inicia o player
// 		var playerInstance = videojs("player", {
//             controls: true,
// 			sources: [{
// 				src: url,
// 				type: 'application/x-mpegURL'
// 			}],
//             autoplay: true
// 		})
		
// 	}
// });
