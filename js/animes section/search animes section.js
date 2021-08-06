




var boxSearch = document.createElement('div');
    //boxSearch.style.border = "2px solid green";
    boxSearch.style.backgroundColor = "#1b9cd4";
    boxSearch.style.width = "27.5%";
    boxSearch.style.height = "49%";
    boxSearch.style.overflow = "auto";
    boxSearch.style.position = "absolute";
    boxSearch.style.top = '55.4%';
    boxSearch.style.left = '53%';
    boxSearch.style.display = "none";
    boxSearch.id = 'caixa_search'
    document.body.appendChild(boxSearch);


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
            
            if(document.getElementById("entrada").value.toUpperCase() == ''){
                boxSearch.style.display = "none";
            }

            else{
                if(animesNomeArray[i].toUpperCase().indexOf(entrada) > -1){
                    idSearchElementos[i].style.display = "";
                    boxSearch.style.display = "";
                }
                else{
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
            window.scrollTo(0, idCaixaEncontrados[i].offsetTop);
            document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto'
		}
		else{
            /*
			idCaixaEncontrados[i].style.display = "none";
            document.getElementById('caixa_search').style.backgroundColor = "red";
            alert('message?: DOMString')
            */
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