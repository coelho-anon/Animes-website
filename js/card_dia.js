

//SERVE PRA QUANDO CLICAR EM UM CARD, A FUNÇÃO DE APARECER O CARD (Aparecer_Cards.js)
//ATUALIZE O CARD PELO ID DOS ELEMENTOS DO CARD QUE APARECEU.
var idCards = [null]
var idCards_img = [null]
var idCards_nome = [null]
var idCards_status = [null]
var idCards_sinopse = [null]
var idCards_episodiosBaixar = [null]
var idCards_episodiosAssistir = [null]
var idCards_td4 = [null]
var idCards_td5 = [null]
var ep_aux_card = [null]

for (var i = 0; i < id_episodios_card.length; i++) {
	ep_aux_card[i] = id_episodios_card[i].innerHTML;
}

for (var i = 1; i <= 6; i++) {

//caixa dos cards (CARD 1)
var tabela = document.createElement('table');
    tabela.style.backgroundColor = "#78c0da87";
    tabela.style.height = "100%";
    tabela.style.width = "89%";
    tabela.style.marginTop = "5%";
    tabela.style.marginBottom = "10%";
    tabela.style.marginLeft = "5%";
    tabela.style.border = "5px solid #32d486";
    tabela.style.borderRadius = "15px";
    tabela.style.boxShadow = "0 0 20px 12px #fbff0b";
    tabela.id = "card_bx" + i;
    tabela.style.display = "none";
	document.body.appendChild(tabela);

	idCards[i-1] = document.getElementById("card_bx" + i)



var tr1 = document.createElement('tr');
tabela.appendChild(tr1);



var td1 = document.createElement('td');
td1.style.width = "41.5%"
tr1.appendChild(td1)

var imgAnime = document.createElement('img');

///////////////////////////////////////////////////////////////////////////////////

    imgAnime.src = id_img_card[i-1].src;

///////////////////////////////////////////////////////////////////////////////////
	//imgAnime.src = id_img_card[0].src;
    imgAnime.style.height = "30%";
    imgAnime.style.width = "100%";
    imgAnime.style.marginTop = "5%"
    imgAnime.style.marginLeft = "2.5%"
    //imgAnime.style.marginBottom = "100%";
    //imgAnime.style.position = "absolute";
    //imgAnime.style.display = "table";
    imgAnime.style.objectFit = "cover";
    //imgAnime.style.borderRadius = "30px";
    //imgAnime.style.backgroundColor = "green"
    imgAnime.id = "img_card_clicado" + i;
    td1.appendChild(imgAnime);

    idCards_img[i-1] = document.getElementById("img_card_clicado" + i);


var td2 = document.createElement('td');
td2.style.height = "50%";
td2.style.width = "50%";
td2.style.position = "absolute"
//td2.style.paddingBottom = "15%";
td2.style.overflow = "auto";
tr1.appendChild(td2);

var titulo = document.createElement("h1");
///////////////////////////////////////////////////////////////////////////////////

    titulo.innerHTML = id_nome_card[i-1].innerHTML;

///////////////////////////////////////////////////////////////////////////////////
    //titulo.innerHTML = id_nome_card[0].innerHTML;
    titulo.style.marginLeft = "8%";
    titulo.style.marginTop = "5%";
    titulo.style.float = "top";
    titulo.style.color = "white";
    //titulo.style.position = "absolute";
    titulo.id = "titulo_card_clicado" + i;
    td2.appendChild(titulo);

    idCards_nome[i-1] = document.getElementById("titulo_card_clicado" + i);


//status
    var statusP = document.createElement("p");
///////////////////////////////////////////////////////////////////////////////////

    statusP.innerHTML = id_status_card[i-1].innerHTML;

///////////////////////////////////////////////////////////////////////////////////
    //statusP.innerHTML = animes[i].status;
    statusP.style.marginLeft = "8%";
    statusP.style.color = "white";
    statusP.id = "status_card_clicado" + i;
    td2.appendChild(statusP);

    idCards_status[i-1] = document.getElementById("status_card_clicado" + i);



     //palavra sinopse que fica em cima da sinopse
    var palavraSinopse = document.createElement("h1");
    palavraSinopse.innerHTML = "Sinopse";
    palavraSinopse.style.marginLeft = "8%";
    palavraSinopse.style.color = "white";
    td2.appendChild(palavraSinopse);


    //sinopse do anime
    var sinopseTexto = document.createElement("h3");

///////////////////////////////////////////////////////////////////////////////////

    sinopseTexto.innerHTML = id_sinopse_card[i-1].innerHTML;

///////////////////////////////////////////////////////////////////////////////////
    //sinopseTexto.innerHTML = id_sinopse_card[0].innerHTML;
    sinopseTexto.style.marginLeft = "8%";
    sinopseTexto.style.color = "white";
    sinopseTexto.id = "sinopse_card_cliclado" + i;
    td2.appendChild(sinopseTexto);

    idCards_sinopse[i-1] = document.getElementById("sinopse_card_cliclado" + i)
    


var tr2 = document.createElement('tr');

tabela.appendChild(tr2);

var td3 = document.createElement('td');
td3.style.width = "200%";
td3.style.display = "inline-block";
//td3.style.border = "5px solid white";
tr2.appendChild(td3)

var td3_1 = document.createElement('td');
td3_1.style.display = "inline-block";
//td3_1.style.border = "5px solid white";
td3.appendChild(td3_1)
 //botão indicativo de baixar na recomendação do patrão
    var btnBaixar =  document.createElement("button");
    btnBaixar.innerHTML = "BAIXAR";
    btnBaixar.style.backgroundColor = "#1c49bb";
    btnBaixar.style.border = "none";
    btnBaixar.style.fontSize = "3em";
    btnBaixar.style.marginTop = "10%";
    btnBaixar.style.marginLeft = "2.5%";
    btnBaixar.style.borderRadius = "5px"
    btnBaixar.style.color = "white";
    btnBaixar.style.boxShadow = "0 0 20px 14px #17b32ef0";
    //btnBaixar.style.position = "absolute";
    //btnBaixar.style.display = "inline-block";
    td3_1.appendChild(btnBaixar);

var td3_2 = document.createElement('td');
td3_2.style.display = "inline-block";
//td3_2.style.border = "5px solid white";
td3.appendChild(td3_2)

var zippyshareImg = document.createElement("img");
    zippyshareImg.src = "images/download.png";
    //zippyshareImg.style.position = "absolute";
    zippyshareImg.style.top = "52%";
    zippyshareImg.style.left = "17%";
    td3_2.appendChild(zippyshareImg);


var td3_3 = document.createElement('td');
td3_3.style.display = "inline-block";
//td3_3.style.border = "5px solid white";
td3.appendChild(td3_3);

//palavra assistir online que fica em cima dos botões de assistir
var assistir_online = document.createElement('button');
    assistir_online.innerHTML = 'ASSISTIR ONLINE';
    assistir_online.style.backgroundColor = "#17b32ef0";
    assistir_online.style.border = "none";
    assistir_online.style.fontSize = "3em";
    assistir_online.style.borderRadius = "5px";
    assistir_online.style.color = "white";
    assistir_online.style.boxShadow = "0 0 20px 14px #702dbf";
    td3_3.style.marginLeft = "1%";

    td3_3.appendChild(assistir_online);

var tr3 = document.createElement('tr');
//tr3.style.border = "5px solid green";
tr3.style.display = "inline-block";
//tr3.style.height = "10%";
tr3.style.width = "240%";
//tr3.style.overflow = "auto";
tabela.appendChild(tr3);

var td4 = document.createElement('td');
td4.style.display = "inline-block";
//td4.style.border = "5px solid white";
td4.style.width = "42%";
td4.style.overflow = "auto";
td4.style.height = "200px";
td4.id = "td4_card_cliclado" + i;
tr3.appendChild(td4);

idCards_td4[i-1] = document.getElementById("td4_card_cliclado" + i)

var td5 = document.createElement('td');
td5.style.display = "inline-block";
//td5.style.border = "5px solid white";
td5.style.overflow = "auto";
td5.style.height = "220px";
td5.style.width = "47%";
td5.style.marginLeft = "2%";
td5.id = "td5_card_cliclado" + i;
tr3.appendChild(td5);

idCards_td5[i-1] = document.getElementById("td5_card_cliclado" + i)

//botões de baixar
    var episodios = ['01'];

    animesEpClicadosBaixar.push([])
    animesEpClicadosAssistir.push([])

///////////////////////////////////////////////////////////////////////////////////

    for (var j = 1; j <= id_episodios_card[i-1].innerHTML; j++) {

///////////////////////////////////////////////////////////////////////////////////

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
        btn_ep_baixar.id = "epBaixar_card_cliclado" + j;
        td4.appendChild(btn_ep_baixar);

        idCards_episodiosBaixar[j-1] = document.getElementById("epBaixar_card_cliclado" + j);

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
        btn_assistir_online.id = "epAssistir_card_cliclado" + j;
    	td5.appendChild(btn_assistir_online);

    	idCards_episodiosAssistir[j-1] = document.getElementById("epAssistir_card_cliclado" + j);


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

    //ESSA PARADA TODA TEM QUE COLOCAR DENTRO DE UMA FUNÇÃO DOS BOTÕES DE ASSISTIR
    //PRO VIDEO APARECER SO QUANDO CLICAR NO EPISODIO, SE NÃO VAI PESAR MUITO.

    //episodio em video do anime
    var videoAnimes = document.createElement("video");
    //quando o video tiver de aparecer o display recebe BLOCK e não "", por causa do alinhamento.
    videoAnimes.style.display = "none";
    videoAnimes.style.marginLeft = "auto";
    videoAnimes.style.marginRight = "auto";
    videoAnimes.id = "idVideoAnimes" + i;
    document.body.appendChild(videoAnimes);

    //pega o id do video para mudar quando clicado no btn do episodio
    videoAnimesArrayId[i] = document.getElementById("idVideoAnimes" + i);

    var videoAnimes_Src = document.createElement("source");
    videoAnimes_Src.src = "video/Tokyo Ghoul re/Tokyo Ghoul re - 08.mp4";
    videoAnimes_Src.type = "video/mp4";
    var naoSuportVideoHTML5 =  document.createElement("h1");
    naoSuportVideoHTML5.innerHTML = "Seu navegador não suporta videos em HTML5.";
    naoSuportVideoHTML5.style.color = "red";
    naoSuportVideoHTML5.style.fontSize = "5em"
    videoAnimes.appendChild(naoSuportVideoHTML5);
    videoAnimes.appendChild(videoAnimes_Src);

} //fim do for que cria a caixa dos cards

