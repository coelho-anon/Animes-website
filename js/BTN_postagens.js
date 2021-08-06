

//TODAS as funções mudam o conteudo dos cards quando clicados


document.getElementById("btn_dia1").addEventListener("click", function(){

	for (var i = 0; i < 6; i++) {
		id_nome_card[i].innerHTML = animesPostagens[i].nome;

		id_img_card[i].src = animesPostagens[i].img;

		id_sinopse_card[i].innerHTML = animesPostagens[i].sinopse;

		id_status_card[i].innerHTML = animesPostagens[i].status;

		id_episodios_card[i].innerHTML = animesPostagens[i].episodios;
	}

});

document.getElementById("btn_dia2").addEventListener("click", function(){

	for (var i = 6; i < 12; i++) {
		id_nome_card[i-6].innerHTML = animesPostagens[i].nome;

		id_img_card[i-6].src = animesPostagens[i].img;

		id_sinopse_card[i-6].innerHTML = animesPostagens[i].sinopse;

		id_status_card[i-6].innerHTML = animesPostagens[i].status;

		id_episodios_card[i-6].innerHTML = animesPostagens[i].episodios;
	}

});





document.getElementById("btn_dia3").addEventListener("click", function(){

	for (var i = 12; i < 18; i++) {
		id_nome_card[i-12].innerHTML = animesPostagens[i].nome;

		id_img_card[i-12].src = animesPostagens[i].img;

		id_sinopse_card[i-12].innerHTML = animesPostagens[i].sinopse;

		id_status_card[i-12].innerHTML = animesPostagens[i].status;

		id_episodios_card[i-12].innerHTML = animesPostagens[i].episodios;
	}

});

document.getElementById("btn_dia4").addEventListener("click", function(){

	for (var i = 18; i < 24; i++) {
		id_nome_card[i-18].innerHTML = animesPostagens[i].nome;

		id_img_card[i-18].src = animesPostagens[i].img;

		id_sinopse_card[i-18].innerHTML = animesPostagens[i].sinopse;

		id_status_card[i-18].innerHTML = animesPostagens[i].status;

		id_episodios_card[i-18].innerHTML = animesPostagens[i].episodios;
	}

});



document.getElementById("btn_dia5").addEventListener("click", function(){

	for (var i = 24; i < 30; i++) {
		id_nome_card[i-24].innerHTML = animesPostagens[i].nome;

		id_img_card[i-24].src = animesPostagens[i].img;

		id_sinopse_card[i-24].innerHTML = animesPostagens[i].sinopse;

		id_status_card[i-24].innerHTML = animesPostagens[i].status;

		id_episodios_card[i-24].innerHTML = animesPostagens[i].episodios;
	}

});




document.getElementById("btn_dia6").addEventListener("click", function(){

	for (var i = 30; i < 36; i++) {
		id_nome_card[i-30].innerHTML = animesPostagens[i].nome;

		id_img_card[i-30].src = animesPostagens[i].img;

		id_sinopse_card[i-30].innerHTML = animesPostagens[i].sinopse;

		id_status_card[i-30].innerHTML = animesPostagens[i].status;

		id_episodios_card[i-30].innerHTML = animesPostagens[i].episodios;
	}

});



document.getElementById("btn_dia7").addEventListener("click", function(){

	for (var i = 36; i < 42; i++) {
		id_nome_card[i-36].innerHTML = animesPostagens[i].nome;

		id_img_card[i-36].src = animesPostagens[i].img;

		id_sinopse_card[i-36].innerHTML = animesPostagens[i].sinopse;

		id_status_card[i-36].innerHTML = animesPostagens[i].status;

		id_episodios_card[i-36].innerHTML = animesPostagens[i].episodios;
	}

});

