btn_galeria_BX.style.top = (galeria.offsetTop + galeria.offsetHeight - 200) + 'px'

animesPostagens = []
for(i = animes.length; i >= animes.length - 42; i--){
	//animesPostagens.push(animes[i])
	animesPostagens.push(animes[i-1])
}
console.log(animesPostagens)
var animes_dia = [
	hackDUSK = {
		nome:".hack//DUSK",
		status: "Estreia: 2003 <br> Qualidade: Tv <br> Número de episódios: 12 (Completo)",
		sinopse: ".hack//DUSK conta a história de Shugo e Rena, um casal de irmãos gêmeos que viviam separados devido ao divórcio dos pais. Sem ter o contato de seu irmão, Rena acaba entrando em um concurso da CC Corporation e ganha como prêmio os personagens de Kite e Black Rose, os lendários .hackers que, há quatro anos atrás, haviam salvo o The World e como recompensa o modelo (skin) de seus personagens não poderiam mais ser utilizados por ninguem. Aproveitando isso, Rena incentiva seu irmão Shugo a usar o personagen de Kite e a passar a se encontrar com ela dentro do The World. No entanto, ao mesmo tempo que os irmãos começão a jogar e conhecer novos amigos, eventos misteriosos começam a ocorrer no The World, pessoas começam a cair em coma na vida real e monstros \"bugados\" voltam a atacar o mundo (semelhante ao incidente do crepúsculo). Mas como isso pode ser possivel se os .hackers resolveram o incidente? Qual a ligação dos problemas recentes e o retorno dos personagens lendários Kite e Black Rose?",
		episodios: 150,
		img: "images/animes_semanais/01.jpg"
	},
	asas = {
		nome: "assa",
		status: "asdas",
		sinopse: "sdad",
		episodios: 20,
		img: "images/animes_semanais/03.jpg"
	},
	asas1 = {
		nome: "efe",
		status: "asdas",
		sinopse: "sdad",
		episodios: 14,
		img: "images/animes_semanais/12.jpg"
	},
	asas2 = {
		nome: "vfdv",
		status: "asdas",
		sinopse: "sdad",
		episodios: 12,
		img: "images/animes_semanais/05.jpg"
	},
	asas3 = {
		nome: "mkl",
		status: "asdas",
		sinopse: "sdad",
		episodios: 35,
		img: "images/animes_semanais/06.jpg"
	},
	asas4 = {
		nome: "qw",
		 status: "asdas",
		 sinopse: "sdad",
		 episodios: 12,
		 img: "images/animes_semanais/07.jpg"
	},
	asas5 = {
		nome: "ae",
		status: "asdas",
		sinopse: "sdad",
		episodios: 64,
		img: "images/animes_semanais/08.jpg"
	},
	asas6 = {
		nome: "as",
		status: "asdas",
		sinopse: "sdad",
		episodios: 24,
		img: "images/animes_semanais/09.jpg"
	}
];



var btnPostAtual = 1
for(i = 1; i <= 7; i++){
	btnPost = document.createElement('button')
	btn_galeria_BX.appendChild(btnPost)

	btnPost.innerHTML = i;
	btnPost.className = 'btn_dia';
	btnPost.id = 'btn_dia' + i;
	btnPost.onclick = (param)=>{
		if(Number(param.toElement.innerHTML) != document.getElementById('btn_dia' + btnPostAtual).innerHTML){
			document.getElementById('btn_dia' + btnPostAtual).style.backgroundColor = "#1370dac2";
			document.getElementById('btn_dia' + btnPostAtual).style.color = "white";
		}

		btnPostAtual = Number(param.toElement.innerHTML)
		for(var i = 1; i <= 6; i++){
			id_nome_card[i-1].innerHTML = animes_dia[i-1].nome;

			id_img_card[i-1].src = animes_dia[i-1].img;

			id_sinopse_card[i-1].innerHTML = animes_dia[i-1].sinopse;

			id_status_card[i-1].innerHTML = animes_dia[i-1].status;

			id_episodios_card[i-1].innerHTML = animes_dia[i-1].episodios;
		}
	}
	btnPost.onmouseover = (param)=>{
		document.getElementById('btn_dia' + param.toElement.innerHTML).style.backgroundColor = "#46e214b3";
		document.getElementById('btn_dia' + param.toElement.innerHTML).style.color = "Black";
	}
	btnPost.onmouseout = (param)=>{
		if(btnPostAtual != Number(param.path[0].innerHTML)){
			param.path[0].style.backgroundColor = "#1370dac2"
			param.path[0].style.color = "white";
		}
	}
	if(i == 1){
		document.getElementById('btn_dia' + i).style.backgroundColor = "#46e214b3";
		document.getElementById('btn_dia' + i).style.color = "Black";
	}
}



var id_nome_card = [null];
var id_img_card = [null];
var id_sinopse_card = [null];
var id_status_card = [null];
var id_episodios_card = [null];

//adiciona a galeria 1 dos animes recentes.
for (var i = 1; i <= 6; i++) {
	id_nome_card[i-1] = document.getElementById('nome_card'+i);
	id_nome_card[i-1].innerHTML = animesPostagens[i-1].nome;

	id_img_card[i-1] = document.getElementById('img_card'+i);
	id_img_card[i-1].src = animesPostagens[i-1].img;

	id_sinopse_card[i-1] = document.getElementById('sinopse_card'+i);
	id_sinopse_card[i-1].innerHTML = animesPostagens[i-1].sinopse;

	id_status_card[i-1] = document.getElementById('status_card'+i);
	id_status_card[i-1].innerHTML = animesPostagens[i-1].status;

	id_episodios_card[i-1] = document.getElementById('episodios_card'+i);
	id_episodios_card[i-1].innerHTML = animesPostagens[i-1].episodios;
}

//adiciona a galeria 1 dos animes recentes quando clicado.
//console.log(id_nome_card)





