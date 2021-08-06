var epAssistirClicadosRecom = []
for(i = 1; i <= 12; i++){
	epAssistir = document.getElementById('ep-assistir')
	btnAssistir = document.createElement('button')

	epAssistir.appendChild(btnAssistir)

	btnAssistir.className = 'episodio'
	btnAssistir.id = 'assistir' + i
	if(i.toString().length == 1){
		btnAssistir.innerHTML = '0' + i
	}
	else{
		btnAssistir.innerHTML = i
	}
	btnAssistir.onclick = (thisEl) => {
  		var x = document.getElementById('video');
  		x.style.display = "block";
		x.src = "video/baki/Baki " + Number(thisEl.toElement.innerHTML) +".mp4";
		thisEl.toElement.style.backgroundColor = "#46e214b3"
		if(epAssistirClicadosRecom.indexOf(Number(thisEl.toElement.innerHTML)) == -1){
			epAssistirClicadosRecom.push(Number(thisEl.toElement.innerHTML))
		}
	}
	btnAssistir.onmouseover = (thisEl) => {
		thisEl.toElement.style.backgroundColor = '#46e214b3'
		thisEl.toElement.style.webkitTransform = 'scale(1.3)'
		thisEl.toElement.style.msTransform = 'scale(1.1)'
		thisEl.toElement.style.transform = 'scale(1.1)'
	}
	btnAssistir.onmouseout = (thisEl) => {
		if(epAssistirClicadosRecom.indexOf(Number(thisEl.path[0].innerHTML)) == -1){
            thisEl.path[0].style.backgroundColor = '#702dbf';
		}
		thisEl.path[0].style.webkitTransform = 'scale(1)';
        thisEl.path[0].style.msTransform = 'scale(1)';
        thisEl.path[0].style.transform = 'scale(1)';
	}
}


var epBaixarClicadosRecom = []
for(i = 1; i <= 12; i++){
	epBaixar = document.getElementById('ep-baixar')
	btnBaixar = document.createElement('button')

	epBaixar.appendChild(btnBaixar)

	btnBaixar.className = 'botao'
	btnBaixar.id = 'ep' + i


	aBaixar = document.createElement('a')
	btnBaixar.appendChild(aBaixar)
	aBaixar.target = '_blank'
	aBaixar.href = '#'
	if(i.toString().length == 1){
		aBaixar.innerHTML = '0' + i
	}
	else{
		aBaixar.innerHTML = i
	}
	aBaixar.onclick = (thisEl) => {
        thisEl.path[1].style.backgroundColor = '#1c49bb';
		if(epBaixarClicadosRecom.indexOf(Number(thisEl.toElement.innerHTML)) == -1){
			epBaixarClicadosRecom.push(Number(thisEl.toElement.innerHTML))
		}
	}
	aBaixar.onmouseover = (thisEl) => {
		thisEl.path[1].style.backgroundColor = '#1c49bb'
		thisEl.path[1].style.webkitTransform = 'scale(1.3)'
		thisEl.path[1].style.msTransform = 'scale(1.1)'
		thisEl.path[1].style.transform = 'scale(1.1)'
	}
	aBaixar.onmouseout = (thisEl) => {
		if(epBaixarClicadosRecom.indexOf(Number(thisEl.path[0].innerHTML)) == -1){
            thisEl.path[1].style.backgroundColor = 'green';
		}
		thisEl.path[1].style.webkitTransform = 'scale(1)';
        thisEl.path[1].style.msTransform = 'scale(1)';
        thisEl.path[1].style.transform = 'scale(1)';
	}
}


/*TEM UM FOR LA EMBAIXO... A IDEIA É QUE QUANDO UM ANIME FOR
ADICIONADO AO ARRAY ANIMES, AUTOMATICAMENTE ESSES ULTIMOS
ANIMES QUE ACABARAM DE SER ADICIONADOS SERÃO COPIADOS
PELO ARRAY DO animes_dia, POUPANDO ASSIM O TRABALHO DE
ADICIONAR O MESMO ANIME DUAS VEZES.
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
		  img: "images/animes_semanais/04.jpg"
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

A IDEIA É QUE QUANDO UM ANIME FOR
ADICIONADO AO ARRAY ANIMES, AUTOMATICAMENTE ESSES ULTIMOS
ANIMES QUE ACABARAM DE SER ADICIONADOS SERÃO COPIADOS
PELO ARRAY DO animes_dia, POUPANDO ASSIM O TRABALHO DE
ADICIONAR O MESMO ANIME DUAS VEZES.

for (var i = animes.length - 42; i < animes.length; i++) {
	animes_dia[i - 42].nome = animes[i].nome;
	animes_dia[i - 42].status = animes[i].status;
	animes_dia[i - 42].sinopse = animes[i].sinopse;
	animes_dia[i - 42].episodios = animes[i].episodios;
	animes_dia[i - 42].img = animes[i].img;
}
*/




