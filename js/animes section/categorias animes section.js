

palavra_genero = document.createElement('h1');
palavra_genero.innerHTML = "Gêneros";
palavra_genero.style.color = 'white';
palavra_genero.id = 'palavra_genero'
document.getElementById('categorias').appendChild(palavra_genero);



var genero_categorias = ['Filme','OVA','Tv','Ação', 'Aposta', 'Luta', 'Aventura', 'Comédia', 'Corrida', 
'Cyberpunk', 'Drama', 'Demência', 'Ecchi', 'Escolar', 'Espaço', 'Esporte', 'Fantasia',
'Harem', 'Historico', 'Horror', 'Infantil', 'Jogo', 'Josei', 'Lolicon', 'Magia', 'Mecha',
'Militar', 'Mistério', 'Música', 'Ninja', 'Paródia', 'Policial', 'Romance', 'Psicologico', 
'Pós-Apocalípse', 'Samurai', 'Sci-fi', 'Seinen', 'Shoujo Ai', 'Shounen', 'Shounen Ai', 
'Slice of Life', 'Sobre-natural', 'Super-poderes', 'Thriller', 'Vampiros', 'Yaoi', 'Yuri', 
'#']



var categoria_btn = [null];
var categoria_ativas = [];


for (var i = 0; i < genero_categorias.length; i++) {
	btn_genero_categorias = document.createElement('button');
	btn_genero_categorias.className = 'categorias';
	btn_genero_categorias.id = 'categoria_btn' + i;
	btn_genero_categorias.innerHTML = genero_categorias[i];
	document.getElementById('categorias').appendChild(btn_genero_categorias);


	categoria_btn[i] = document.getElementById('categoria_btn' + i);

	var points = 0;
	var diminuir_filtro_genero = [null];
	var counter = 0
	//var colorir = [null]
	//var primeira_vez = [null];


	btn_genero_categorias.onclick =  (param) => {
		filtrar(param)
	};

	function filtrar (parametro){

	//se o usuario clicar em uma categoria o poupup da categoria aparece
	if (parametro != null) {

		for (var is = 0; is < genero_categorias.length; is++) {
			if (btn_filtro_categorias_Array[is].firstChild.data.toUpperCase() == parametro.toElement.innerHTML.toUpperCase() && btn_filtro_categorias_Array[is].style.display == 'none'){
				btn_filtro_categorias_Array[is].style.display = ''
				
				categoria_ativas.push(btn_filtro_categorias_Array[is].firstChild.data.toUpperCase())

			}
		}
	}



	

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

	var checkBox = document.getElementById('checkBox')
	//se o filtro familia estiver ativo
	if (checkBox.checked) {

		document.getElementById('familiaOff').style.opacity = '.5';
		document.getElementById('f').style.opacity = '1';
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
		//se nenhuma categoria estiver ativada e nenhuma letra do alfabeto ativa.
		if (categoria_ativas == '' && letra_ativa == null) {
			//filtra os animes de categoria indescente e faz eles sumirem
			for (var i = 0; i < animes.length; i++) {
				for (var j = 0; j < animes[i].categorias.length; j++) {
					if (animes[i].categorias[j] == 'ECCHI'
					 || animes[i].categorias[j] == 'SEINEN'
					 || animes[i].categorias[j] == 'THRILLER' 
					 || animes[i].categorias[j] == 'HORROR'
					 || animes[i].categorias[j] == 'DEMÊNCIA') {

						contador = 1;
					}
				}

				if (contador == 1) {
					animes_da_tabela[i].style.display = "none";
					episodios_da_tabela[i].style.display = "none";
				}

				contador = 0;
			}
		}


////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////


		//se categoria estiver ativada e letra do alfabeto ativa.
		if (categoria_ativas != '' && letra_ativa != null) {

			//contabilisa os animes que tem a mesma categoria do filtro
			for (var i = 0; i < animes.length; i++){

					counter = 0
					//ta rodando o i do animes.length
					for(number in categoria_ativas){
						//ta rodando o k do animes[i].categorias.length
						for(categAnime in animes[i].categorias){
							//se categorias_ativas[i] == animes[i].categorias[k]
							if(categoria_ativas[number] == animes[i].categorias[categAnime]){
								//contador += 1
								counter += 1
							}
						}
					}

				//se o contador, ou seja, o anime, tiver a mesma quantidade ou mais
				//de categorias correspondentes as ativas (categoria_ativas) e a primeira
				//letra do anime for igual a letra do alfabeto que está ativa, o anime
				//em questão é mostrado
				if(counter >= categoria_ativas.length && animes_da_tabela[i].innerText.toUpperCase().charAt(0).indexOf(letra_ativa) > -1){
					errado = 0
					for (var ij = 0; ij < animes_nao_familia.length; ij++) {
							//se o anime for diferente dos animes não familia ele aparece.
							if (animes_da_tabela[i].innerText != animes_nao_familia[ij]) {
								animes_da_tabela[i].style.display = "";
								episodios_da_tabela[i].style.display = "";

							}

							else {
								/*
								animes_da_tabela[i].style.display = 'none'
								episodios_da_tabela[i].style.display = 'none'
								*/
								errado = 1
							}
					}
					if (errado == 1) {
						animes_da_tabela[i].style.display = 'none'
						episodios_da_tabela[i].style.display = 'none'
					}
					errado = 0
				}
				//caso contrario, ele some.
				else{
					animes_da_tabela[i].style.display = "none";
					episodios_da_tabela[i].style.display = "none";
				}
				
			}//for (var i = 0; i < animes.length; i++)

		}//if (categoria_ativas != '' && letra_ativa != null)


////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

		//categoria ativada e alfabeto desativado.
		if (categoria_ativas != '' && letra_ativa == null) {

			//contabilisa os animes que tem a mesma categoria do filtro
			for (var i = 0; i < animes.length; i++){

					counter = 0
					//ta rodando o i do animes.length
					for(number in categoria_ativas){
						//ta rodando o k do animes[i].categorias.length
						for(categAnime in animes[i].categorias){
							//se categorias_ativas[i] == animes[i].categorias[k]
							if(categoria_ativas[number] == animes[i].categorias[categAnime]){
								//contador += 1
								counter += 1
							}
						}
					}

				
				//o anime é mostrado se ele tiver a mesma categoria.
				if(counter >= categoria_ativas.length){
					errado = 0
					for (var ij = 0; ij < animes_nao_familia.length; ij++) {
							//se o anime for diferente dos animes não familia ele aparece.
							if (animes_da_tabela[i].innerText != animes_nao_familia[ij]) {
								animes_da_tabela[i].style.display = "";
								episodios_da_tabela[i].style.display = "";

							}

							else {
								/*
								animes_da_tabela[i].style.display = 'none'
								episodios_da_tabela[i].style.display = 'none'
								*/
								errado = 1
							}
					}
					if (errado == 1) {
						animes_da_tabela[i].style.display = 'none'
						episodios_da_tabela[i].style.display = 'none'
					}
					errado = 0
				}
				//caso contrario, ele some.
				else{
					animes_da_tabela[i].style.display = "none";
					episodios_da_tabela[i].style.display = "none";
				}
				
			}//for (var i = 0; i < animes.length; i++)

		}//if (categoria_ativas != '' && letra_ativa == null)

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////


		//categoria desativada alfabeto ativado.
		if (categoria_ativas == '' && letra_ativa != null) {

			//contabilisa os animes que tem a mesma categoria do filtro
			for (var i = 0; i < animes.length; i++){

					counter = 0
					//ta rodando o i do animes.length
					for(number in categoria_ativas){
						//ta rodando o k do animes[i].categorias.length
						for(categAnime in animes[i].categorias){
							//se categorias_ativas[i] == animes[i].categorias[k]
							if(categoria_ativas[number] == animes[i].categorias[categAnime]){
								//contador += 1
								counter += 1
							}
						}
					}

				
				//o anime é mostrado se ele tiver a mesma letra inicial.
				if(animes_da_tabela[i].innerText.toUpperCase().charAt(0).indexOf(letra_ativa) > -1){
					errado = 0
					for (var ij = 0; ij < animes_nao_familia.length; ij++) {
							//se o anime for diferente dos animes não familia ele aparece.
							if (animes_da_tabela[i].innerText != animes_nao_familia[ij]) {
								animes_da_tabela[i].style.display = "";
								episodios_da_tabela[i].style.display = "";

							}

							else {
								/*
								animes_da_tabela[i].style.display = 'none'
								episodios_da_tabela[i].style.display = 'none'
								*/
								errado = 1
							}
					}
					if (errado == 1) {
						animes_da_tabela[i].style.display = 'none'
						episodios_da_tabela[i].style.display = 'none'
					}
					errado = 0
				}
				//caso contrario, ele some.
				else{
					animes_da_tabela[i].style.display = "none";
					episodios_da_tabela[i].style.display = "none";
				}
				
			}//for (var i = 0; i < animes.length; i++)

		}//if (categoria_ativas == '' && letra_ativa != null)

	}//if (checkbox.checked)

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

	//se o filtro familia estiver desativado
	if (checkBox.checked == false) {
		document.getElementById('familiaOff').style.opacity = '1';
		document.getElementById('f').style.opacity = '.5';
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
		//se nenhuma categoria estiver ativada e nenhuma letra do alfabeto ativa.
		if (categoria_ativas == '' && letra_ativa == null) {

			//filtra os animes de categoria indescente e faz eles sumirem
			for (var i = 0; i < animes.length; i++) {

					animes_da_tabela[i].style.display = "";
					episodios_da_tabela[i].style.display = "";
			}
		}


////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////


		//se categoria estiver ativada e letra do alfabeto ativa.
		if (categoria_ativas != '' && letra_ativa != null) {

			//contabilisa os animes que tem a mesma categoria do filtro
			for (var i = 0; i < animes.length; i++){

					counter = 0
					//ta rodando o i do animes.length
					for(number in categoria_ativas){
						//ta rodando o k do animes[i].categorias.length
						for(categAnime in animes[i].categorias){
							//se categorias_ativas[i] == animes[i].categorias[k]
							if(categoria_ativas[number] == animes[i].categorias[categAnime]){
								//contador += 1
								counter += 1
							}
						}
					}

				//se o contador, ou seja, o anime, tiver a mesma quantidade ou mais
				//de categorias correspondentes as ativas (categoria_ativas) e a primeira
				//letra do anime for igual a letra do alfabeto que está ativa, o anime
				//em questão é mostrado
				if(counter >= categoria_ativas.length && animes_da_tabela[i].innerText.toUpperCase().charAt(0).indexOf(letra_ativa) > -1){
					
					animes_da_tabela[i].style.display = "";
					episodios_da_tabela[i].style.display = "";
				}
				//caso contrario, ele some.
				else{
					animes_da_tabela[i].style.display = "none";
					episodios_da_tabela[i].style.display = "none";
				}
				
			}//for (var i = 0; i < animes.length; i++)

		}//if (categoria_ativas != '' && letra_ativa != null)


////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

		//se categoria estiver ativada e letra do alfabeto ativa.
		if (categoria_ativas != '' && letra_ativa == null) {

			//contabilisa os animes que tem a mesma categoria do filtro
			for (var i = 0; i < animes.length; i++){

					counter = 0
					//ta rodando o i do animes.length
					for(number in categoria_ativas){
						//ta rodando o k do animes[i].categorias.length
						for(categAnime in animes[i].categorias){
							//se categorias_ativas[i] == animes[i].categorias[k]
							if(categoria_ativas[number] == animes[i].categorias[categAnime]){
								//contador += 1
								counter += 1
							}
						}
					}

				//se o contador, ou seja, o anime, tiver a mesma quantidade ou mais
				//de categorias correspondentes as ativas (categoria_ativas) e a primeira
				//letra do anime for igual a letra do alfabeto que está ativa, o anime
				//em questão é mostrado
				if(counter >= categoria_ativas.length){
					
					animes_da_tabela[i].style.display = "";
					episodios_da_tabela[i].style.display = "";
				}
				//caso contrario, ele some.
				else{
					animes_da_tabela[i].style.display = "none";
					episodios_da_tabela[i].style.display = "none";
				}
				
			}//for (var i = 0; i < animes.length; i++)

		}//if (categoria_ativas != '' && letra_ativa == null)


////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

		//se categoria estiver ativada e letra do alfabeto ativa.
		if (categoria_ativas == '' && letra_ativa != null) {

			//contabilisa os animes que tem a mesma categoria do filtro
			for (var i = 0; i < animes.length; i++){

					counter = 0
					//ta rodando o i do animes.length
					for(number in categoria_ativas){
						//ta rodando o k do animes[i].categorias.length
						for(categAnime in animes[i].categorias){
							//se categorias_ativas[i] == animes[i].categorias[k]
							if(categoria_ativas[number] == animes[i].categorias[categAnime]){
								//contador += 1
								counter += 1
							}
						}
					}

				//se o contador, ou seja, o anime, tiver a mesma quantidade ou mais
				//de categorias correspondentes as ativas (categoria_ativas) e a primeira
				//letra do anime for igual a letra do alfabeto que está ativa, o anime
				//em questão é mostrado
				if(animes_da_tabela[i].innerText.toUpperCase().charAt(0).indexOf(letra_ativa) > -1){
					
					animes_da_tabela[i].style.display = "";
					episodios_da_tabela[i].style.display = "";
				}
				//caso contrario, ele some.
				else{
					animes_da_tabela[i].style.display = "none";
					episodios_da_tabela[i].style.display = "none";
				}
				
			}//for (var i = 0; i < animes.length; i++)

		}//if (categoria_ativas == '' && letra_ativa != null)


////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

	} //if (checkBox.checked == false)
























	/*
	if (categoria_ativas == null && letra_ativa != null) {

		for (var i = 0; i < animesNomeArray.length; i++) {

			//mostra os animes que tenham a mesma primeira letra do alfabeto
			if(animesNomeArray[i].toUpperCase().charAt(0).indexOf(letra_ativa) > -1){

                animes_da_tabela[i].style.display = "";
                episodios_da_tabela[i].style.display = "";
                //colorir.push(animes_da_tabela[i]);
                //primeira_vez[0] = 1;
                familia();
            }

            else {
                animes_da_tabela[i].style.display = "none";
                episodios_da_tabela[i].style.display = "none";
            }

		}

	}
	*/

	/*
	//se um btn da categoria for clicado, vai aparecer o poupUp da categoria.
	if (parametro != null) {

		for (var is = 0; is < genero_categorias.length; is++) {
			if (btn_filtro_categorias_Array[is].firstChild.data.toUpperCase() == parametro.toElement.innerHTML.toUpperCase() && btn_filtro_categorias_Array[is].style.display == 'none'){
				btn_filtro_categorias_Array[is].style.display = ''
				
				categoria_ativas.push(btn_filtro_categorias_Array[is].firstChild.data.toUpperCase())

			}
		}
	}
	*/


	/*
		for (var i = 0; i < animes.length; i++){
			counter = 0
			//ta rodando o i do animes.length
			for(number in categoria_ativas){
				//ta rodando o k do animes[i].categorias.length
				for(categAnime in animes[i].categorias){
					//se categorias_ativas[i] == animes[i].categorias[k]
					if(categoria_ativas[number] == animes[i].categorias[categAnime]){
						//contador += 1
						counter += 1
					}
				}
			}



			if (letra_ativa != null && categoria_ativas != null) {

				//se o contador, ou seja, o anime, tiver a mesma quantidade ou mais
				//de categorias correspondentes as ativas (categoria_ativas) e a primeira
				//letra do anime for igual a letra do alfabeto que está ativa, o anime
				//em questão é mostrado
				if(counter >= categoria_ativas.length && animesNomeArray[i].toUpperCase().charAt(0).indexOf(letra_ativa) > -1){
					animes_da_tabela[i].style.display = "";
					episodios_da_tabela[i].style.display = "";
					//primeira_vez[1] = 1;
					familia();
				}
				//caso contrario, ele some.
				else{
					animes_da_tabela[i].style.display = "none";
					episodios_da_tabela[i].style.display = "none";
				}
				//listrar_tabela()
			}

			if (letra_ativa == null) {
				//se o contador, ou seja, o anime, tiver a mesma quantidade ou mais
				//de categorias correspondentes as ativas (categoria_ativas), o anime
				//em questão é mostrado
				if(counter >= categoria_ativas.length){
					animes_da_tabela[i].style.display = "";
					episodios_da_tabela[i].style.display = "";
					//primeira_vez[2] = 1;
					familia();
				}
				//caso contrario, ele some.
				else{
					animes_da_tabela[i].style.display = "none";
					episodios_da_tabela[i].style.display = "none";
				}
				//listrar_tabela()
			}
		}
		*/

		/*
		var checkBox = document.getElementById('checkBox')
		//se o filtro familia estiver ativo
		if (checkBox.checked) {

			//se apenas o filtro familia estiver ativo
			if (categoria_ativas == null && letra_ativa == null) {

			}
		}

		//se o filtro familia estiver desativado
		if (checkBox.checked == false) {
			alert('falso')
		}
		*/
	};


}
