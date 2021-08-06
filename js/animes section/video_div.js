//div do <video>
var videoDivAnime = document.createElement('div')
var sourceVideoDivAnimeEpisodio = document.createElement('source')

function criarDivVideo(){
	document.body.appendChild(videoDivAnime)

	videoDivAnime.style.position = 'fixed';
	videoDivAnime.style.height = '100%';
	videoDivAnime.style.width = '100%';
	videoDivAnime.style.left = '-100%';
	videoDivAnime.style.top = '0px';
	videoDivAnime.style.zIndex = '9998';

	//background semi-tranparente
	var backgroundSemiTransparenteVideoDivAnime = document.createElement('div');
	backgroundSemiTransparenteVideoDivAnime.style.backgroundColor = '#423b3b';
	backgroundSemiTransparenteVideoDivAnime.style.position = 'absolute'
	backgroundSemiTransparenteVideoDivAnime.style.height = '100%'
	backgroundSemiTransparenteVideoDivAnime.style.width = '100%'
	backgroundSemiTransparenteVideoDivAnime.style.opacity = '0.7'
	videoDivAnime.appendChild(backgroundSemiTransparenteVideoDivAnime)

	//<video>
	var videoDivAnimeEpisodio = document.createElement('video')
	videoDivAnime.appendChild(videoDivAnimeEpisodio)

	videoDivAnimeEpisodio.controls = 'true';
	videoDivAnimeEpisodio.style.zIndex = '9999';
	videoDivAnimeEpisodio.style.position = 'relative'
	videoDivAnimeEpisodio.style.left = '10%';
	videoDivAnimeEpisodio.style.top = '20%';
	videoDivAnimeEpisodio.style.width = '80%';
	videoDivAnimeEpisodio.style.height = '60%';

	videoDivAnimeEpisodio.appendChild(sourceVideoDivAnimeEpisodio)

	sourceVideoDivAnimeEpisodio.type = 'video/mp4';

	var closeXDivVideo = document.createElement('div')
	closeXDivVideo.innerHTML = 'X FECHAR'
	closeXDivVideo.style.position = 'absolute'
	closeXDivVideo.style.right = '10px'
	closeXDivVideo.style.top = '10px'
	closeXDivVideo.style.padding = '10px 15px'
	closeXDivVideo.style.fontSize = '25px'
	closeXDivVideo.style.backgroundColor = '#883535'
	closeXDivVideo.style.color = '#ffffff'
	closeXDivVideo.style.borderRadius = '90px'
	closeXDivVideo.style.cursor = 'pointer'
	closeXDivVideo.style.transition = '.2s'
	closeXDivVideo.onmouseover = function (argument) {
		/* body... */
		closeXDivVideo.style.backgroundColor = '#cc1616'
		closeXDivVideo.style.transition = '.2s'
	}
	closeXDivVideo.onmouseout = function (argument) {
		/* body... */
		closeXDivVideo.style.backgroundColor = '#883535'
		closeXDivVideo.style.transition = '.2s'
	}
	videoDivAnime.appendChild(closeXDivVideo)

	closeXDivVideo.onclick = () => {
		posX = 0
		animação_da_janela = setInterval(function(){
			posX += 4;
			videoDivAnime.style.left = -posX + '%';
			if(posX >= 100){
				clearInterval(animação_da_janela)
			}
		}, 10)
	}
}


function showVideoDivAnime(link){
	posX = -100
	animação_da_janela = setInterval(function(){
		posX += 4;
		videoDivAnime.style.left = posX + '%';
		if(posX >= 0){
			clearInterval(animação_da_janela)
		}
	}, 10)

	sourceVideoDivAnimeEpisodio.src = link;
}

criarDivVideo()