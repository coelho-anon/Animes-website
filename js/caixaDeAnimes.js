//criar mais um atributo nos objeto... animes[i].sourceEpisodio

//animes[i].sourceEpisodio vai ser o link dos episodios, dependendo do caso é interessante
//fazer dois novos atributos animes[i].sourceEpisodioAssistir e animes[i].sourceEpisodioBaixar


//inserindo até o array 'animes' ter 100 animes
animesNomeLetras = [
	'a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','w','x','y','z'
]
var randomAnime = () => {
	animeObj = {
		nome: '',
		status: '',
		sinopse: '',
		episodios: parseInt(Math.random() * 20),
        img: 'images/animes_semanais/12.jpg'
	}

	for(var i = 0; i < 5; i++){
		animeObj.nome += animesNomeLetras[parseInt(Math.random() * animesNomeLetras.length)]
		animeObj.status += animesNomeLetras[parseInt(Math.random() * animesNomeLetras.length)]

        for (var j = 0; j < 20; j++) {
            animeObj.sinopse += animesNomeLetras[parseInt(Math.random() * animesNomeLetras.length)] + "<br>"
        }
		
	}

	return animeObj
}

for(i = animes.length; i < 100; i++){
	animes.push(randomAnime())
}


var idSearchElementos = [null];
var idCaixaEncontrados = [null];

//vai ser usado para fazer a comparação entre a entrada do usuario e esse array com o nome dos animes
var animesNomeArray = [null];
var videoAnimesArrayId = [null];


var boxSearch = document.createElement('div');
    //boxSearch.style.border = "2px solid green";
    boxSearch.style.backgroundColor = "#1b9cd4";
    boxSearch.style.width = "30%";
    boxSearch.style.height = "49%";
    boxSearch.style.overflow = "auto";
    boxSearch.style.position = "absolute";
    boxSearch.style.top = (entrada.offsetTop + entrada.offsetHeight) + 'px';
    boxSearch.style.left = entrada.offsetLeft + 'px';
    boxSearch.style.display = "none";
    document.body.appendChild(boxSearch);


animesEpClicadosBaixar = []
animesEpClicadosAssistir = []
// Criando tablelas do search
for (var i = 0; i < animes.length; i++){
    animesNomeArray[i] = animes[i].nome;


//resultados do search
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
    tabela.id = "caixa_patrao" + i;
    tabela.style.display = "none";
	document.body.appendChild(tabela);

	idCaixaEncontrados[i] = document.getElementById("caixa_patrao" + i)



var tr1 = document.createElement('tr');
tabela.appendChild(tr1);



var td1 = document.createElement('td');
td1.style.width = "41.5%"
tr1.appendChild(td1)

var imgAnime = document.createElement('img');
    imgAnime.src = "images/11.jpg";
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
    td1.appendChild(imgAnime);


var td2 = document.createElement('td');
td2.style.height = "50%";
td2.style.width = "50%";
td2.style.position = "absolute"
//td2.style.paddingBottom = "15%";
td2.style.overflow = "auto";
tr1.appendChild(td2);

var titulo = document.createElement("h1");
    titulo.innerHTML = animesNomeArray[i];
    titulo.style.marginLeft = "8%";
    titulo.style.marginTop = "5%";
    titulo.style.float = "top";
    titulo.style.color = "white";
    //titulo.style.position = "absolute";
    td2.appendChild(titulo);


//status
    var statusP = document.createElement("p");
    statusP.innerHTML = animes[i].status;
    statusP.style.marginLeft = "8%";
    statusP.style.color = "white";
    td2.appendChild(statusP);

     //palavra sinopse que fica em cima da sinopse
    var palavraSinopse = document.createElement("h1");
    palavraSinopse.innerHTML = "Sinopse";
    palavraSinopse.style.marginLeft = "8%";
    palavraSinopse.style.color = "white";
    td2.appendChild(palavraSinopse);


    //sinopse do anime
    var sinopseTexto = document.createElement("h3");
    sinopseTexto.innerHTML = animes[i].sinopse;
    sinopseTexto.style.marginLeft = "8%";
    sinopseTexto.style.color = "white";
    td2.appendChild(sinopseTexto);
    


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
 //botão de baixar na recomendação do patrão
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
tr3.appendChild(td4);

var td5 = document.createElement('td');
td5.style.display = "inline-block";
//td5.style.border = "5px solid white";
td5.style.overflow = "auto";
td5.style.height = "200px";
td5.style.width = "47%";
td5.style.marginLeft = "2%";
tr3.appendChild(td5);

//botões de baixar
    var episodios = ['01'];

    animesEpClicadosBaixar.push([])
    animesEpClicadosAssistir.push([])

    for (var j = 1; j < animes[i].episodios + 1; j++) {
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
        btn_ep_baixar.id = 'download' + j;
        td4.appendChild(btn_ep_baixar);

    	links = document.createElement("a");
        links.innerHTML = episodios[j];
    	//trocar futuramente por algo como... animes[i].sourceEpisodio
    	links.href = animes[i].nome.innerHTML + " " + j + " ANIMES PARADISE";
    	links.target = "_blanck";
    	links.id = 'ep' + j;
        links.value = i
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
        btn_assistir_online.value = i;
    	/*
    	btn_assistir_online.onclick = function(thisEl, i){alert(thisEl.toElement.innerHTML)}
    	*/
    	td5.appendChild(btn_assistir_online);


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
}


for (var i = 0; i < animesNomeArray.length; i++) {
	animesNomeArray[i] = animes[i].nome;

    //cria os elementos (h1) que vão aparecer conforme o usuario digita
    var nomesSearch = document.createElement('h1');
    nomesSearch.innerHTML = animesNomeArray[i];
    boxSearch.appendChild(nomesSearch);

    nomesSearch.id = 'elementosDoSearch' + i;
    nomesSearch.className = "elementosDoSearch";
    idSearchElementos[i] = document.getElementById('elementosDoSearch' + i);

    nomesSearch.addEventListener('click', (param) => {
		//param.toElement.style.backgroundColor = "red";
		var entrada = document.getElementById("entrada");
		entrada.value = param.toElement.innerHTML;
		boxSearch.style.display = "none";

	})
}

//console.log(animes);
//console.log(animesNomeArray)
//console.log(idSearchElementos);
//console.log(nomesQueAparecemNoSearch);

//quando o usuario digitar ou apagar alguma coisa do input (entrada), essa função é ativada e vai fazer a comparação entre o que o usuario digitou e os nomes dos animes... essa função NÃO é sensitive case.
entrada.onkeyup = (param) => {
    //esse negócio é para mandar detectar o Enter no input e já chamar a função de aparecer
    if(param.key == 'Enter'){
        aparecer()
    }
    else{
        var entrada = document.getElementById("entrada").value.toUpperCase();

        for (var i = 0; i < animesNomeArray.length; i++){
            if(entrada.innerHTML == "" || entrada.text == ""){
                boxSearch.style.display = "none";
            }else{
                if(animesNomeArray[i].toUpperCase().indexOf(entrada) > -1){
                    idSearchElementos[i].style.display = "";
                    boxSearch.style.display = "";
                }else{
                    idSearchElementos[i].style.display = "none";
                }
            }
        }
    }
}

//console.log(animesNomeArray);


//============================ATENÇÃO======================= Eu iria mudar esse negócio do aparecer mas...
//é melhor deixar assim, porque (opinião minha) é bom usar o ENTER e chamar a função aparecer
document.getElementById("procurar").addEventListener('click', aparecer);
function aparecer(){

    var input = document.getElementById("entrada").value.toUpperCase();
    var animesNotFound = true;
    for (var i = 0; i < animesNomeArray.length; i++){
        if(animesNomeArray[i].toUpperCase().indexOf(input) != -1){
			idCaixaEncontrados[i].style.display = "";
			animesNotFound = false
            document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth'
            window.scrollTo(0, document.getElementById('video').offsetTop + document.getElementById('video').offsetHeight);
            document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto'
		}
		else{
			idCaixaEncontrados[i].style.display = "none";
		}
	}
    
	// "se 'anime não encontrado' for verdadeiro, então apareça essa janela"
    if(animesNotFound){
    	//document.getElementById('res').style.display = "none";

		var x = document.getElementById("snackbar");
		x.className = "show";
		setTimeout(function(){
			x.className = x.className.replace("show", "");
		}, 3000);
    }
}

//se a pessoa clicar em algum lugar a caixa do search some.
document.addEventListener('click', function(){
	boxSearch.style.display = "none";
})
