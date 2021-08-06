
var idSearchElementos = [null];
var idCaixaEncontrados = [null];

//vai ser usado para fazer a comparação entre a entrada do usuario e esse array com o nome dos animes
var animesNomeArray = [null];
var videoAnimesArrayId = [null];


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
    tabela.style.marginBottom = "10%";
    tabela.style.marginLeft = "5%";
    tabela.style.border = "5px solid #32d486";
    tabela.style.borderRadius = "15px";
    tabela.style.boxShadow = "0 0 20px 12px #fbff0b";
    tabela.id = "caixa_patrao" + i;
    tabela.style.display = "none";
	document.body.appendChild(tabela);

    idCaixaEncontrados[i] = document.getElementById("caixa_patrao" + i)

var tr0 = document.createElement('tr');
tr0.style.width = '100%'
tabela.appendChild(tr0);

var fechar_btn_categ = document.createElement('button');
fechar_btn_categ.innerHTML = 'Fechar';
fechar_btn_categ.style.marginLeft = '2%'
fechar_btn_categ.className = 'fecharBTN_BX_patrao'
fechar_btn_categ.value = i;
fechar_btn_categ.onclick = function (argument) {
    /* body... */
    argument.toElement.parentNode.style.display = 'none';
    document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth'
    window.scrollTo(0, document.getElementsByTagName('html').offsetTop);
    document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto'
}
tabela.appendChild(fechar_btn_categ);

var fechar_btn_todos = document.createElement('button');
fechar_btn_todos.innerHTML = 'Fechar todos';
fechar_btn_todos.style.marginLeft = '2%'
fechar_btn_todos.className = 'fecharBTN_BX_patrao'
fechar_btn_todos.onclick = function (argument) {
    /* body... */

    document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth'
    window.scrollTo(0, document.getElementsByTagName('html').offsetTop);
    document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto'
    for (var i = 0; i < idCaixaEncontrados.length; i++) {
        idCaixaEncontrados[i].style.display = 'none'

    }
}
tabela.appendChild(fechar_btn_todos);

var tr1 = document.createElement('tr');
tabela.appendChild(tr1);



var td1 = document.createElement('td');
td1.style.width = "41.5%"
tr1.appendChild(td1)
/*
var membrana1 = document.createElement('span');
membrana1.style.width = "41.5%"
membrana1.style.backgroundColor = 'black'
tr1.appendChild(membrana1)
*/
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
    imgAnime.id = 'imagem_anime' + i;
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
    titulo.className = 'titulo_caixa_luminosidade'
    //titulo.style.position = "absolute";
    td2.appendChild(titulo);


//status
    var statusP = document.createElement("p");
    statusP.innerHTML = animes[i].status;
    statusP.style.marginLeft = "8%";
    statusP.style.color = "white";
    statusP.className = 'statusP_luminosidade'
    td2.appendChild(statusP);

     //palavra sinopse que fica em cima da sinopse
    var palavraSinopse = document.createElement("h1");
    palavraSinopse.innerHTML = "Sinopse";
    palavraSinopse.style.marginLeft = "8%";
    palavraSinopse.style.color = "white";
    palavraSinopse.className = 'palavraSinopse_luminosidade'
    td2.appendChild(palavraSinopse);


    //sinopse do anime
    var sinopseTexto = document.createElement("h3");
    sinopseTexto.innerHTML = animes[i].sinopse;
    sinopseTexto.style.marginLeft = "8%";
    sinopseTexto.style.color = "white";
    sinopseTexto.className = 'sinopseTexto_luminosidade'
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
    btnBaixar.id = 'btnBaixar' + i;
    td3_1.appendChild(btnBaixar);

var td3_2 = document.createElement('td');
td3_2.style.display = "inline-block";
//td3_2.style.border = "5px solid white";
//td3_2.style.backgroundColor = 'red'
td3.appendChild(td3_2)

var zippyshareImg = document.createElement("img");
    zippyshareImg.src = "images/download.png";
    //zippyshareImg.style.position = "absolute";
    zippyshareImg.style.top = "52%";
    zippyshareImg.style.left = "17%";
    zippyshareImg.className = 'zippyshareImg'
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
    assistir_online.id = 'assistir_online' + i;
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
td4.className = 'td4_luminosidade'
tr3.appendChild(td4);

var td5 = document.createElement('td');
td5.style.display = "inline-block";
//td5.style.border = "5px solid white";
td5.style.overflow = "auto";
td5.style.height = "200px";
td5.style.width = "47%";
td5.style.marginLeft = "2%";
td5.className = 'td5_luminosidade'
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

            if (checkBoxLuminosidade.checked == false) {
                thisEl.path[1].style.backgroundColor = '#030223'
            }

            else{
                thisEl.path[1].style.backgroundColor = '#1c49bb'
                thisEl.path[1].style.webkitTransform = 'scale(1.3)'
                thisEl.path[1].style.msTransform = 'scale(1.1)'
                thisEl.path[1].style.transform = 'scale(1.1)'
            }
        }
        links.onmouseout = (thisEl) => {

            if (checkBoxLuminosidade.checked == false) {
                //#939396

                if(animesEpClicadosBaixar[thisEl.path[0].value].indexOf(Number(thisEl.path[0].innerHTML)) == -1){
                    thisEl.path[1].style.backgroundColor = '#021d02';
                }
                thisEl.path[1].style.webkitTransform = 'scale(1)';
                thisEl.path[1].style.msTransform = 'scale(1)';
                thisEl.path[1].style.transform = 'scale(1)';
            }

            else{

                if(animesEpClicadosBaixar[thisEl.path[0].value].indexOf(Number(thisEl.path[0].innerHTML)) == -1){
                    thisEl.path[1].style.backgroundColor = 'green';
                }
                thisEl.path[1].style.webkitTransform = 'scale(1)';
                thisEl.path[1].style.msTransform = 'scale(1)';
                thisEl.path[1].style.transform = 'scale(1)';
            }
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
            //problema 2- quando eu clico em um btn de assistir de qualquer caixa, o video que recebe display
            // auto/"" é apenas o primeiro da lista.
            //=========================================== ATENÇÃO ===========================================//
            //APARENTEMENTE, O PROBLEMA É SIMPLES. esse videoAnimes.id = "idVideoAnimes" + i; é o id que está
            //sendo colocado nos videos, entretando o a variavel x que está logo abaixo dentro desse bloco
            //está pegando um id diferente, logo, acontece um erro.
            ///////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////
            console.log("video/"+animes[thisEl.toElement.value].nome+"/"+animes[thisEl.toElement.value].nome + Number(thisEl.toElement.innerHTML) +".mp4")
            showVideoDivAnime("video/"+animes[thisEl.toElement.value].nome+"/"+animes[thisEl.toElement.value].nome + Number(thisEl.toElement.innerHTML) +".mp4")

            if(animesEpClicadosAssistir[thisEl.toElement.value].indexOf(Number(thisEl.toElement.innerHTML)) == -1){
                animesEpClicadosAssistir[thisEl.toElement.value].push(Number(thisEl.toElement.innerHTML))
            }
            ///////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////
        }
        btn_assistir_online.onmouseover = (thisEl) => {
            
            if (checkBoxLuminosidade.checked == false) {
                thisEl.toElement.style.backgroundColor = '#081d01b3'
            }

            else{
                thisEl.toElement.style.backgroundColor = '#46e214b3'
                thisEl.toElement.style.webkitTransform = 'scale(1.3)'
                thisEl.toElement.style.msTransform = 'scale(1.1)'
                thisEl.toElement.style.transform = 'scale(1.1)'
            }
        }
        btn_assistir_online.onmouseout = (thisEl) => {

            if (checkBoxLuminosidade.checked == false) {
                if(animesEpClicadosAssistir[thisEl.path[0].value].indexOf(Number(thisEl.path[0].innerHTML)) == -1){
                    thisEl.path[0].style.backgroundColor = '#150429';
                }
            }

            else {
                if(animesEpClicadosAssistir[thisEl.path[0].value].indexOf(Number(thisEl.path[0].innerHTML)) == -1){
                    thisEl.path[0].style.backgroundColor = '#702dbf';
                }
                thisEl.path[0].style.webkitTransform = 'scale(1)';
                thisEl.path[0].style.msTransform = 'scale(1)';
                thisEl.path[0].style.transform = 'scale(1)';
            }
            
        }
    }
}