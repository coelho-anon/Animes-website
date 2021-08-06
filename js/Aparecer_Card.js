/*
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
============================================ATENÇÃO!==================================================
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

NOTA 1- cada função representa um card, quando clicado no card, uma caixa é criada com as informações
do card, então quando se o usuario clicar em outro dia da semana por exemplo, as informações do card
mudarão, mas as da caixa não, então caso o usuario queira as novas informações do card 1 por exemplo,
ele precisa apenas clicar no card desejado. (isso está totalmente correto, as informações NÃO devem
ser atualizadas conforme clicado nos dias da semana, e sim quando clicado no card)

NOTA 2- os argumento nas funções representam o card em questão.

NOTA 3- as linhas comentadas com "//////..." são indicativos de que o codigo dentro dessas barras de
comentarios são alteraveis para caso seja decidido futumente mudar alguma variavel como titulo, sinopse...

NOTA 3.5- os comentarios com mais barras (mais grossos) semelhantes ao comentario de atenção no inicio
do documento server como indicativo de inicio de uma função de uma card.

NOTA 4- NÃO É NECESSARIO ALTERAR NADA DENTRO DAS FUNÇÕES, POIS AS VARIAVEIS LA DENTRO SÃO ALTERADAS COM
O ARGUMENTO DA FUNÇÃO, QUE POR SUA VEZ INDICAM NOS ARRAYS UMA POSIÇÃO, QUE SERVE PARA DIZER DE QUAL CARD
SE TRATA AS INFORMAÇÕES.
*/


//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
function card1(numero_Card){

	idCards[numero_Card].style.display = "";

	document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth'
    window.scrollTo(0, idCards[numero_Card].offsetTop);
    document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto'

	//////////////////////////////////////////////////////////////////////////////////////////////////////
	//RECEBE OS VALORES NOVOS NO CARD CRIADO QUANDO CLICADO.
	//cards clicados     //cards
	idCards_img[numero_Card].src = id_img_card[numero_Card].src;
	idCards_nome[numero_Card].innerHTML = id_nome_card[numero_Card].innerHTML;
	idCards_status[numero_Card].innerHTML = id_status_card[numero_Card].innerHTML;
	idCards_sinopse[numero_Card].innerHTML = id_sinopse_card[numero_Card].innerHTML;
	//////////////////////////////////////////////////////////////////////////////////////////////////////
	


	//////////////////////////////////////////////////////////////////////////////////////////////////////
	for (var i = 1; i <= ep_aux_card[numero_Card]; i++) {

		idCards_td4[numero_Card].removeChild(idCards_td4[numero_Card].childNodes[0]);
		idCards_td5[numero_Card].removeChild(idCards_td5[numero_Card].childNodes[0]);
	}

	ep_aux_card[numero_Card] = id_episodios_card[numero_Card].innerHTML

    for (var j = 1; j <= ep_aux_card[numero_Card]; j++) {

	//////////////////////////////////////////////////////////////////////////////////////////////////////

    	if(j >=10){
        	episodios [j] = [j];
    	}else{
    		episodios [j] = ['0' + j];
    	}

        btn_ep_baixar = document.createElement("button");
        btn_ep_baixar.className = "botao";    
        btn_ep_baixar.style.fontSize = "3em";
        btn_ep_baixar.style.color = "white";
        btn_ep_baixar.style.marginLeft = "1.5%";

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        idCards_td4[numero_Card].appendChild(btn_ep_baixar);

        //////////////////////////////////////////////////////////////////////////////////////////////////////

    	links = document.createElement("a");
        links.innerHTML = episodios[j];
    	//trocar futuramente por algo como... animesPostagens[i].sourceEpisodio
    	links.href = animes[i].nome.innerHTML + " " + j + " ANIMES PARADISE";
    	links.target = "_blanck";
    	links.id = 'ep' + j;
        links.value = j;
    	btn_ep_baixar.appendChild(links);

        links.onclick = (thisEl) => {
            thisEl.path[1].style.backgroundColor = '#1c49bb';
            if(animesEpClicadosBaixar[thisEl.path[0].value].indexOf(Number(thisEl.toElement.innerHTML)) == -1){
                animesEpClicadosBaixar[thisEl.path[0].value].push(Number(thisEl.toElement.innerHTML))
            }
        }
        links.onmouseover = (thisEl) => {
            thisEl.path[1].style.backgroundColor = '#1c49bb'
            thisEl.path[1].style.webkitTransform = 'scale(1.3)'
            thisEl.path[1].style.msTransform = 'scale(1.1)'
            thisEl.path[1].style.transform = 'scale(1.1)'
        }
        links.onmouseout = (thisEl) => {
            if(animesEpClicadosBaixar[thisEl.path[0].value].indexOf(Number(thisEl.path[0].innerHTML)) == -1){
                thisEl.path[1].style.backgroundColor = 'green';
            }
            thisEl.path[1].style.webkitTransform = 'scale(1)';
            thisEl.path[1].style.msTransform = 'scale(1)';
            thisEl.path[1].style.transform = 'scale(1)';
        }

    	var btn_assistir_online = document.createElement('button');
    	btn_assistir_online.innerHTML = episodios[j];
    	btn_assistir_online.className = "episodio";
        btn_assistir_online.value = j;

        //////////////////////////////////////////////////////////////////////////////////////////////////////

    	idCards_td5[numero_Card].appendChild(btn_assistir_online);

    	//////////////////////////////////////////////////////////////////////////////////////////////////////


        btn_assistir_online.onclick = (thisEl) => {
            thisEl.toElement.style.backgroundColor = "#46e214b3"
            var x = document.getElementById('video');
            x.style.display = "block";
            x.src = "video/baki/Baki " + Number(thisEl.toElement.innerHTML) +".mp4";
            if(animesEpClicadosAssistir[thisEl.toElement.value].indexOf(Number(thisEl.toElement.innerHTML)) == -1){
                animesEpClicadosAssistir[thisEl.toElement.value].push(Number(thisEl.toElement.innerHTML))
            }
        }
        btn_assistir_online.onmouseover = (thisEl) => {
            thisEl.toElement.style.backgroundColor = '#46e214b3'
            thisEl.toElement.style.webkitTransform = 'scale(1.3)'
            thisEl.toElement.style.msTransform = 'scale(1.1)'
            thisEl.toElement.style.transform = 'scale(1.1)'
        }
        btn_assistir_online.onmouseout = (thisEl) => {
            if(animesEpClicadosAssistir[thisEl.path[0].value].indexOf(Number(thisEl.path[0].innerHTML)) == -1){
                thisEl.path[0].style.backgroundColor = '#702dbf';
            }
            thisEl.path[0].style.webkitTransform = 'scale(1)';
            thisEl.path[0].style.msTransform = 'scale(1)';
            thisEl.path[0].style.transform = 'scale(1)';
        }
    }


}//fim da função card1


//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////


function card2(numero_Card){

	idCards[numero_Card].style.display = "";

	document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth'
    window.scrollTo(0, idCards[numero_Card].offsetTop);
    document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto'

	//////////////////////////////////////////////////////////////////////////////////////////////////////
	//RECEBE OS VALORES NOVOS NO CARD CRIADO QUANDO CLICADO.
	//cards clicados     //cards
	idCards_img[numero_Card].src = id_img_card[numero_Card].src;
	idCards_nome[numero_Card].innerHTML = id_nome_card[numero_Card].innerHTML;
	idCards_status[numero_Card].innerHTML = id_status_card[numero_Card].innerHTML;
	idCards_sinopse[numero_Card].innerHTML = id_sinopse_card[numero_Card].innerHTML;
	//////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////

	for (var i = 1; i <= ep_aux_card[numero_Card]; i++) {

		idCards_td4[numero_Card].removeChild(idCards_td4[numero_Card].childNodes[0]);
		idCards_td5[numero_Card].removeChild(idCards_td5[numero_Card].childNodes[0]);
	}

	ep_aux_card[numero_Card] = id_episodios_card[numero_Card].innerHTML

    for (var j = 1; j <= ep_aux_card[numero_Card]; j++) {

	//////////////////////////////////////////////////////////////////////////////////////////////////////

    	if(j >=10){
        	episodios [j] = [j];
    	}else{
    		episodios [j] = ['0' + j];
    	}

        btn_ep_baixar = document.createElement("button");
        btn_ep_baixar.className = "botao";    
        btn_ep_baixar.style.fontSize = "3em";
        btn_ep_baixar.style.color = "white";
        btn_ep_baixar.style.marginLeft = "1.5%";

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        idCards_td4[numero_Card].appendChild(btn_ep_baixar);

        //////////////////////////////////////////////////////////////////////////////////////////////////////

    	links = document.createElement("a");
        links.innerHTML = episodios[j];
    	//trocar futuramente por algo como... animesPostagens[i].sourceEpisodio
    	links.href = animes[i].nome.innerHTML + " " + j + " ANIMES PARADISE";
    	links.target = "_blanck";
    	links.id = 'ep' + j;
        links.value = j;
    	btn_ep_baixar.appendChild(links);

        links.onclick = (thisEl) => {
            thisEl.path[1].style.backgroundColor = '#1c49bb';
            if(animesEpClicadosBaixar[thisEl.path[0].value].indexOf(Number(thisEl.toElement.innerHTML)) == -1){
                animesEpClicadosBaixar[thisEl.path[0].value].push(Number(thisEl.toElement.innerHTML))
            }
        }
        links.onmouseover = (thisEl) => {
            thisEl.path[1].style.backgroundColor = '#1c49bb'
            thisEl.path[1].style.webkitTransform = 'scale(1.3)'
            thisEl.path[1].style.msTransform = 'scale(1.1)'
            thisEl.path[1].style.transform = 'scale(1.1)'
        }
        links.onmouseout = (thisEl) => {
            if(animesEpClicadosBaixar[thisEl.path[0].value].indexOf(Number(thisEl.path[0].innerHTML)) == -1){
                thisEl.path[1].style.backgroundColor = 'green';
            }
            thisEl.path[1].style.webkitTransform = 'scale(1)';
            thisEl.path[1].style.msTransform = 'scale(1)';
            thisEl.path[1].style.transform = 'scale(1)';
        }

    	var btn_assistir_online = document.createElement('button');
    	btn_assistir_online.innerHTML = episodios[j];
    	btn_assistir_online.className = "episodio";
        btn_assistir_online.value = j;

        //////////////////////////////////////////////////////////////////////////////////////////////////////

    	idCards_td5[numero_Card].appendChild(btn_assistir_online);

    	//////////////////////////////////////////////////////////////////////////////////////////////////////


        btn_assistir_online.onclick = (thisEl) => {
            thisEl.toElement.style.backgroundColor = "#46e214b3"
            var x = document.getElementById('video');
            x.style.display = "block";
            x.src = "video/baki/Baki " + Number(thisEl.toElement.innerHTML) +".mp4";
            if(animesEpClicadosAssistir[thisEl.toElement.value].indexOf(Number(thisEl.toElement.innerHTML)) == -1){
                animesEpClicadosAssistir[thisEl.toElement.value].push(Number(thisEl.toElement.innerHTML))
            }
        }
        btn_assistir_online.onmouseover = (thisEl) => {
            thisEl.toElement.style.backgroundColor = '#46e214b3'
            thisEl.toElement.style.webkitTransform = 'scale(1.3)'
            thisEl.toElement.style.msTransform = 'scale(1.1)'
            thisEl.toElement.style.transform = 'scale(1.1)'
        }
        btn_assistir_online.onmouseout = (thisEl) => {
            if(animesEpClicadosAssistir[thisEl.path[0].value].indexOf(Number(thisEl.path[0].innerHTML)) == -1){
                thisEl.path[0].style.backgroundColor = '#702dbf';
            }
            thisEl.path[0].style.webkitTransform = 'scale(1)';
            thisEl.path[0].style.msTransform = 'scale(1)';
            thisEl.path[0].style.transform = 'scale(1)';
        }
    }

    

}//fim da função card2

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

function card3(numero_Card){

	idCards[numero_Card].style.display = "";

	document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth'
    window.scrollTo(0, idCards[numero_Card].offsetTop);
    document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto'

	//////////////////////////////////////////////////////////////////////////////////////////////////////
	//RECEBE OS VALORES NOVOS NO CARD CRIADO QUANDO CLICADO.
	//cards clicados     //cards
	idCards_img[numero_Card].src = id_img_card[numero_Card].src;
	idCards_nome[numero_Card].innerHTML = id_nome_card[numero_Card].innerHTML;
	idCards_status[numero_Card].innerHTML = id_status_card[numero_Card].innerHTML;
	idCards_sinopse[numero_Card].innerHTML = id_sinopse_card[numero_Card].innerHTML;
	//////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////

	for (var i = 1; i <= ep_aux_card[numero_Card]; i++) {

		idCards_td4[numero_Card].removeChild(idCards_td4[numero_Card].childNodes[0]);
		idCards_td5[numero_Card].removeChild(idCards_td5[numero_Card].childNodes[0]);
	}

	ep_aux_card[numero_Card] = id_episodios_card[numero_Card].innerHTML

    for (var j = 1; j <= ep_aux_card[numero_Card]; j++) {

	//////////////////////////////////////////////////////////////////////////////////////////////////////

    	if(j >=10){
        	episodios [j] = [j];
    	}else{
    		episodios [j] = ['0' + j];
    	}

        btn_ep_baixar = document.createElement("button");
        btn_ep_baixar.className = "botao";    
        btn_ep_baixar.style.fontSize = "3em";
        btn_ep_baixar.style.color = "white";
        btn_ep_baixar.style.marginLeft = "1.5%";

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        idCards_td4[numero_Card].appendChild(btn_ep_baixar);

        //////////////////////////////////////////////////////////////////////////////////////////////////////

    	links = document.createElement("a");
        links.innerHTML = episodios[j];
    	//trocar futuramente por algo como... animesPostagens[i].sourceEpisodio
    	links.href = animes[i].nome.innerHTML + " " + j + " ANIMES PARADISE";
    	links.target = "_blanck";
    	links.id = 'ep' + j;
        links.value = j;
    	btn_ep_baixar.appendChild(links);

        links.onclick = (thisEl) => {
            thisEl.path[1].style.backgroundColor = '#1c49bb';
            if(animesEpClicadosBaixar[thisEl.path[0].value].indexOf(Number(thisEl.toElement.innerHTML)) == -1){
                animesEpClicadosBaixar[thisEl.path[0].value].push(Number(thisEl.toElement.innerHTML))
            }
        }
        links.onmouseover = (thisEl) => {
            thisEl.path[1].style.backgroundColor = '#1c49bb'
            thisEl.path[1].style.webkitTransform = 'scale(1.3)'
            thisEl.path[1].style.msTransform = 'scale(1.1)'
            thisEl.path[1].style.transform = 'scale(1.1)'
        }
        links.onmouseout = (thisEl) => {
            if(animesEpClicadosBaixar[thisEl.path[0].value].indexOf(Number(thisEl.path[0].innerHTML)) == -1){
                thisEl.path[1].style.backgroundColor = 'green';
            }
            thisEl.path[1].style.webkitTransform = 'scale(1)';
            thisEl.path[1].style.msTransform = 'scale(1)';
            thisEl.path[1].style.transform = 'scale(1)';
        }

    	var btn_assistir_online = document.createElement('button');
    	btn_assistir_online.innerHTML = episodios[j];
    	btn_assistir_online.className = "episodio";
        btn_assistir_online.value = j;

        //////////////////////////////////////////////////////////////////////////////////////////////////////

    	idCards_td5[numero_Card].appendChild(btn_assistir_online);

    	//////////////////////////////////////////////////////////////////////////////////////////////////////


        btn_assistir_online.onclick = (thisEl) => {
            thisEl.toElement.style.backgroundColor = "#46e214b3"
            var x = document.getElementById('video');
            x.style.display = "block";
            x.src = "video/baki/Baki " + Number(thisEl.toElement.innerHTML) +".mp4";
            if(animesEpClicadosAssistir[thisEl.toElement.value].indexOf(Number(thisEl.toElement.innerHTML)) == -1){
                animesEpClicadosAssistir[thisEl.toElement.value].push(Number(thisEl.toElement.innerHTML))
            }
        }
        btn_assistir_online.onmouseover = (thisEl) => {
            thisEl.toElement.style.backgroundColor = '#46e214b3'
            thisEl.toElement.style.webkitTransform = 'scale(1.3)'
            thisEl.toElement.style.msTransform = 'scale(1.1)'
            thisEl.toElement.style.transform = 'scale(1.1)'
        }
        btn_assistir_online.onmouseout = (thisEl) => {
            if(animesEpClicadosAssistir[thisEl.path[0].value].indexOf(Number(thisEl.path[0].innerHTML)) == -1){
                thisEl.path[0].style.backgroundColor = '#702dbf';
            }
            thisEl.path[0].style.webkitTransform = 'scale(1)';
            thisEl.path[0].style.msTransform = 'scale(1)';
            thisEl.path[0].style.transform = 'scale(1)';
        }
    }


}//fim da função card3

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

function card4(numero_Card){

	idCards[numero_Card].style.display = "";

	document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth'
    window.scrollTo(0, idCards[numero_Card].offsetTop);
    document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto'


	//////////////////////////////////////////////////////////////////////////////////////////////////////
	//RECEBE OS VALORES NOVOS NO CARD CRIADO QUANDO CLICADO.
	//cards clicados     //cards
	idCards_img[numero_Card].src = id_img_card[numero_Card].src;
	idCards_nome[numero_Card].innerHTML = id_nome_card[numero_Card].innerHTML;
	idCards_status[numero_Card].innerHTML = id_status_card[numero_Card].innerHTML;
	idCards_sinopse[numero_Card].innerHTML = id_sinopse_card[numero_Card].innerHTML;
	//////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////

	for (var i = 1; i <= ep_aux_card[numero_Card]; i++) {

		idCards_td4[numero_Card].removeChild(idCards_td4[numero_Card].childNodes[0]);
		idCards_td5[numero_Card].removeChild(idCards_td5[numero_Card].childNodes[0]);
	}

	ep_aux_card[numero_Card] = id_episodios_card[numero_Card].innerHTML

    for (var j = 1; j <= ep_aux_card[numero_Card]; j++) {

	//////////////////////////////////////////////////////////////////////////////////////////////////////

    	if(j >=10){
        	episodios [j] = [j];
    	}else{
    		episodios [j] = ['0' + j];
    	}

        btn_ep_baixar = document.createElement("button");
        btn_ep_baixar.className = "botao";    
        btn_ep_baixar.style.fontSize = "3em";
        btn_ep_baixar.style.color = "white";
        btn_ep_baixar.style.marginLeft = "1.5%";

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        idCards_td4[numero_Card].appendChild(btn_ep_baixar);

        //////////////////////////////////////////////////////////////////////////////////////////////////////

    	links = document.createElement("a");
        links.innerHTML = episodios[j];
    	//trocar futuramente por algo como... animesPostagens[i].sourceEpisodio
    	links.href = animes[i].nome.innerHTML + " " + j + " ANIMES PARADISE";
    	links.target = "_blanck";
    	links.id = 'ep' + j;
        links.value = j;
    	btn_ep_baixar.appendChild(links);

        links.onclick = (thisEl) => {
            thisEl.path[1].style.backgroundColor = '#1c49bb';
            if(animesEpClicadosBaixar[thisEl.path[0].value].indexOf(Number(thisEl.toElement.innerHTML)) == -1){
                animesEpClicadosBaixar[thisEl.path[0].value].push(Number(thisEl.toElement.innerHTML))
            }
        }
        links.onmouseover = (thisEl) => {
            thisEl.path[1].style.backgroundColor = '#1c49bb'
            thisEl.path[1].style.webkitTransform = 'scale(1.3)'
            thisEl.path[1].style.msTransform = 'scale(1.1)'
            thisEl.path[1].style.transform = 'scale(1.1)'
        }
        links.onmouseout = (thisEl) => {
            if(animesEpClicadosBaixar[thisEl.path[0].value].indexOf(Number(thisEl.path[0].innerHTML)) == -1){
                thisEl.path[1].style.backgroundColor = 'green';
            }
            thisEl.path[1].style.webkitTransform = 'scale(1)';
            thisEl.path[1].style.msTransform = 'scale(1)';
            thisEl.path[1].style.transform = 'scale(1)';
        }

    	var btn_assistir_online = document.createElement('button');
    	btn_assistir_online.innerHTML = episodios[j];
    	btn_assistir_online.className = "episodio";
        btn_assistir_online.value = j;

        //////////////////////////////////////////////////////////////////////////////////////////////////////

    	idCards_td5[numero_Card].appendChild(btn_assistir_online);

    	//////////////////////////////////////////////////////////////////////////////////////////////////////


        btn_assistir_online.onclick = (thisEl) => {
            thisEl.toElement.style.backgroundColor = "#46e214b3"
            var x = document.getElementById('video');
            x.style.display = "block";
            x.src = "video/baki/Baki " + Number(thisEl.toElement.innerHTML) +".mp4";
            if(animesEpClicadosAssistir[thisEl.toElement.value].indexOf(Number(thisEl.toElement.innerHTML)) == -1){
                animesEpClicadosAssistir[thisEl.toElement.value].push(Number(thisEl.toElement.innerHTML))
            }
        }
        btn_assistir_online.onmouseover = (thisEl) => {
            thisEl.toElement.style.backgroundColor = '#46e214b3'
            thisEl.toElement.style.webkitTransform = 'scale(1.3)'
            thisEl.toElement.style.msTransform = 'scale(1.1)'
            thisEl.toElement.style.transform = 'scale(1.1)'
        }
        btn_assistir_online.onmouseout = (thisEl) => {
            if(animesEpClicadosAssistir[thisEl.path[0].value].indexOf(Number(thisEl.path[0].innerHTML)) == -1){
                thisEl.path[0].style.backgroundColor = '#702dbf';
            }
            thisEl.path[0].style.webkitTransform = 'scale(1)';
            thisEl.path[0].style.msTransform = 'scale(1)';
            thisEl.path[0].style.transform = 'scale(1)';
        }
    }


}//fim da função card4


//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////



function card5(numero_Card){

	idCards[numero_Card].style.display = "";

	document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth'
    window.scrollTo(0, idCards[numero_Card].offsetTop);
    document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto'


	//////////////////////////////////////////////////////////////////////////////////////////////////////
	//RECEBE OS VALORES NOVOS NO CARD CRIADO QUANDO CLICADO.
	//cards clicados     //cards
	idCards_img[numero_Card].src = id_img_card[numero_Card].src;
	idCards_nome[numero_Card].innerHTML = id_nome_card[numero_Card].innerHTML;
	idCards_status[numero_Card].innerHTML = id_status_card[numero_Card].innerHTML;
	idCards_sinopse[numero_Card].innerHTML = id_sinopse_card[numero_Card].innerHTML;
	//////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////

	for (var i = 1; i <= ep_aux_card[numero_Card]; i++) {

		idCards_td4[numero_Card].removeChild(idCards_td4[numero_Card].childNodes[0]);
		idCards_td5[numero_Card].removeChild(idCards_td5[numero_Card].childNodes[0]);
	}

	ep_aux_card[numero_Card] = id_episodios_card[numero_Card].innerHTML

    for (var j = 1; j <= ep_aux_card[numero_Card]; j++) {

	//////////////////////////////////////////////////////////////////////////////////////////////////////

    	if(j >=10){
        	episodios [j] = [j];
    	}else{
    		episodios [j] = ['0' + j];
    	}

        btn_ep_baixar = document.createElement("button");
        btn_ep_baixar.className = "botao";    
        btn_ep_baixar.style.fontSize = "3em";
        btn_ep_baixar.style.color = "white";
        btn_ep_baixar.style.marginLeft = "1.5%";

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        idCards_td4[numero_Card].appendChild(btn_ep_baixar);

        //////////////////////////////////////////////////////////////////////////////////////////////////////

    	links = document.createElement("a");
        links.innerHTML = episodios[j];
    	//trocar futuramente por algo como... animesPostagens[i].sourceEpisodio
    	links.href = animes[i].nome.innerHTML + " " + j + " ANIMES PARADISE";
    	links.target = "_blanck";
    	links.id = 'ep' + j;
        links.value = j;
    	btn_ep_baixar.appendChild(links);

        links.onclick = (thisEl) => {
            thisEl.path[1].style.backgroundColor = '#1c49bb';
            if(animesEpClicadosBaixar[thisEl.path[0].value].indexOf(Number(thisEl.toElement.innerHTML)) == -1){
                animesEpClicadosBaixar[thisEl.path[0].value].push(Number(thisEl.toElement.innerHTML))
            }
        }
        links.onmouseover = (thisEl) => {
            thisEl.path[1].style.backgroundColor = '#1c49bb'
            thisEl.path[1].style.webkitTransform = 'scale(1.3)'
            thisEl.path[1].style.msTransform = 'scale(1.1)'
            thisEl.path[1].style.transform = 'scale(1.1)'
        }
        links.onmouseout = (thisEl) => {
            if(animesEpClicadosBaixar[thisEl.path[0].value].indexOf(Number(thisEl.path[0].innerHTML)) == -1){
                thisEl.path[1].style.backgroundColor = 'green';
            }
            thisEl.path[1].style.webkitTransform = 'scale(1)';
            thisEl.path[1].style.msTransform = 'scale(1)';
            thisEl.path[1].style.transform = 'scale(1)';
        }

    	var btn_assistir_online = document.createElement('button');
    	btn_assistir_online.innerHTML = episodios[j];
    	btn_assistir_online.className = "episodio";
        btn_assistir_online.value = j;

        //////////////////////////////////////////////////////////////////////////////////////////////////////

    	idCards_td5[numero_Card].appendChild(btn_assistir_online);

    	//////////////////////////////////////////////////////////////////////////////////////////////////////


        btn_assistir_online.onclick = (thisEl) => {
            thisEl.toElement.style.backgroundColor = "#46e214b3"
            var x = document.getElementById('video');
            x.style.display = "block";
            x.src = "video/baki/Baki " + Number(thisEl.toElement.innerHTML) +".mp4";
            if(animesEpClicadosAssistir[thisEl.toElement.value].indexOf(Number(thisEl.toElement.innerHTML)) == -1){
                animesEpClicadosAssistir[thisEl.toElement.value].push(Number(thisEl.toElement.innerHTML))
            }
        }
        btn_assistir_online.onmouseover = (thisEl) => {
            thisEl.toElement.style.backgroundColor = '#46e214b3'
            thisEl.toElement.style.webkitTransform = 'scale(1.3)'
            thisEl.toElement.style.msTransform = 'scale(1.1)'
            thisEl.toElement.style.transform = 'scale(1.1)'
        }
        btn_assistir_online.onmouseout = (thisEl) => {
            if(animesEpClicadosAssistir[thisEl.path[0].value].indexOf(Number(thisEl.path[0].innerHTML)) == -1){
                thisEl.path[0].style.backgroundColor = '#702dbf';
            }
            thisEl.path[0].style.webkitTransform = 'scale(1)';
            thisEl.path[0].style.msTransform = 'scale(1)';
            thisEl.path[0].style.transform = 'scale(1)';
        }
    }


}//fim da função card5


//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////


function card6(numero_Card){

	idCards[numero_Card].style.display = "";

	document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth'
    window.scrollTo(0, idCards[numero_Card].offsetTop);
    document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto'


	//////////////////////////////////////////////////////////////////////////////////////////////////////
	//RECEBE OS VALORES NOVOS NO CARD CRIADO QUANDO CLICADO.
	//cards clicados     //cards
	idCards_img[numero_Card].src = id_img_card[numero_Card].src;
	idCards_nome[numero_Card].innerHTML = id_nome_card[numero_Card].innerHTML;
	idCards_status[numero_Card].innerHTML = id_status_card[numero_Card].innerHTML;
	idCards_sinopse[numero_Card].innerHTML = id_sinopse_card[numero_Card].innerHTML;
	//////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////

	for (var i = 1; i <= ep_aux_card[numero_Card]; i++) {

		idCards_td4[numero_Card].removeChild(idCards_td4[numero_Card].childNodes[0]);
		idCards_td5[numero_Card].removeChild(idCards_td5[numero_Card].childNodes[0]);
	}

	ep_aux_card[numero_Card] = id_episodios_card[numero_Card].innerHTML

    for (var j = 1; j <= ep_aux_card[numero_Card]; j++) {

	//////////////////////////////////////////////////////////////////////////////////////////////////////

    	if(j >=10){
        	episodios [j] = [j];
    	}else{
    		episodios [j] = ['0' + j];
    	}

        btn_ep_baixar = document.createElement("button");
        btn_ep_baixar.className = "botao";    
        btn_ep_baixar.style.fontSize = "3em";
        btn_ep_baixar.style.color = "white";
        btn_ep_baixar.style.marginLeft = "1.5%";

        //////////////////////////////////////////////////////////////////////////////////////////////////////

        idCards_td4[numero_Card].appendChild(btn_ep_baixar);

        //////////////////////////////////////////////////////////////////////////////////////////////////////

    	links = document.createElement("a");
        links.innerHTML = episodios[j];
    	//trocar futuramente por algo como... animesPostagens[i].sourceEpisodio
    	links.href = animes[i].nome.innerHTML + " " + j + " ANIMES PARADISE";
    	links.target = "_blanck";
    	links.id = 'ep' + j;
        links.value = j;
    	btn_ep_baixar.appendChild(links);

        links.onclick = (thisEl) => {
            thisEl.path[1].style.backgroundColor = '#1c49bb';
            if(animesEpClicadosBaixar[thisEl.path[0].value].indexOf(Number(thisEl.toElement.innerHTML)) == -1){
                animesEpClicadosBaixar[thisEl.path[0].value].push(Number(thisEl.toElement.innerHTML))
            }
        }
        links.onmouseover = (thisEl) => {
            thisEl.path[1].style.backgroundColor = '#1c49bb'
            thisEl.path[1].style.webkitTransform = 'scale(1.3)'
            thisEl.path[1].style.msTransform = 'scale(1.1)'
            thisEl.path[1].style.transform = 'scale(1.1)'
        }
        links.onmouseout = (thisEl) => {
            if(animesEpClicadosBaixar[thisEl.path[0].value].indexOf(Number(thisEl.path[0].innerHTML)) == -1){
                thisEl.path[1].style.backgroundColor = 'green';
            }
            thisEl.path[1].style.webkitTransform = 'scale(1)';
            thisEl.path[1].style.msTransform = 'scale(1)';
            thisEl.path[1].style.transform = 'scale(1)';
        }

    	var btn_assistir_online = document.createElement('button');
    	btn_assistir_online.innerHTML = episodios[j];
    	btn_assistir_online.className = "episodio";
        btn_assistir_online.value = j;

        //////////////////////////////////////////////////////////////////////////////////////////////////////

    	idCards_td5[numero_Card].appendChild(btn_assistir_online);

    	//////////////////////////////////////////////////////////////////////////////////////////////////////


        btn_assistir_online.onclick = (thisEl) => {
            thisEl.toElement.style.backgroundColor = "#46e214b3"
            var x = document.getElementById('video');
            x.style.display = "block";
            x.src = "video/baki/Baki " + Number(thisEl.toElement.innerHTML) +".mp4";
            if(animesEpClicadosAssistir[thisEl.toElement.value].indexOf(Number(thisEl.toElement.innerHTML)) == -1){
                animesEpClicadosAssistir[thisEl.toElement.value].push(Number(thisEl.toElement.innerHTML))
            }
        }
        btn_assistir_online.onmouseover = (thisEl) => {
            thisEl.toElement.style.backgroundColor = '#46e214b3'
            thisEl.toElement.style.webkitTransform = 'scale(1.3)'
            thisEl.toElement.style.msTransform = 'scale(1.1)'
            thisEl.toElement.style.transform = 'scale(1.1)'
        }
        btn_assistir_online.onmouseout = (thisEl) => {
            if(animesEpClicadosAssistir[thisEl.path[0].value].indexOf(Number(thisEl.path[0].innerHTML)) == -1){
                thisEl.path[0].style.backgroundColor = '#702dbf';
            }
            thisEl.path[0].style.webkitTransform = 'scale(1)';
            thisEl.path[0].style.msTransform = 'scale(1)';
            thisEl.path[0].style.transform = 'scale(1)';
        }
    }


}//fim da função card6