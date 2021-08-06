var checkBoxLuminosidade = document.getElementById('checkBoxLuminosidade')
function luminosidade_animes_section (argument) {
	if (checkBoxLuminosidade.checked == false) {
		document.getElementById('imagem_de_background').style.filter = 'brightness(50%)'
		document.getElementById('dia').style.opacity = '.5'
		document.getElementById('noite').style.opacity = '1'
		document.getElementById('menu').style.backgroundColor = '#9a0a55e6'
		document.getElementById('menu').style.color = '#939396'
		document.getElementById('menu').onmouseover = function (argument) {
			/* body... #050d40b3*/
			document.getElementById('menu').style.backgroundColor = 'black'
		}
		document.getElementById('menu').onmouseout = function (argument) {
			/* body... */
			document.getElementById('menu').style.backgroundColor = '#9a0a55e6';
		}

		for (var i = 0; i < 27; i++) {
			document.getElementsByClassName('alfabeto')[i].style.color = '#939396'
			document.getElementsByClassName('alfabeto')[i].onmouseover = function (argument) {
				/* body... */
				argument.toElement.style.backgroundColor = '#050d40b3'
			}
			document.getElementsByClassName('alfabeto')[i].onmouseout = function (argument) {
				/* body... */
				if(argument.path[0].id != 'categorias'){
					argument.path[0].style.backgroundColor = '#1b1717'
				}
			}
		}

		document.getElementsByClassName('menu')[0].style.backgroundColor = '#9a0a55e6'
		document.getElementsByClassName('menu')[1].style.backgroundColor = '#9a0a55e6'
		document.getElementsByClassName('menu')[2].style.backgroundColor = '#9a0a55e6'

		document.getElementsByClassName('menu')[0].style.color = '#939396'
		document.getElementsByClassName('menu')[1].style.color = '#939396'
		document.getElementsByClassName('menu')[2].style.color = '#939396'



		for (var i = 0; i < 3; i++) {
			document.getElementsByClassName('menu')[i].onmouseover = function (argument) {
				/* body... */
				argument.toElement.style.backgroundColor = 'black'
			}
			document.getElementsByClassName('menu')[i].onmouseout = function (argument) {
				/* body... */
				if(argument.path[0].id != 'categorias'){
					argument.path[0].style.backgroundColor = '#9a0a55e6'
				}
			}
		}


		document.getElementById('caixa_Principal_animes').style.backgroundColor = '#0d024a87'
		document.getElementById('categorias').style.backgroundColor = '#070927a8'
		document.getElementById('palavra_genero').style.color = '#939396'
		//console.log(document.getElementById('categorias').lastChild.innerHTML)
		document.getElementById('entrada').style.backgroundColor = '#23043c80'
		document.getElementById('entrada').style.boxShadow = '-9px 0px 20px 16px #35111178'
		document.getElementById('procurar').style.backgroundColor = '#031f3a'
		document.getElementById('procurar').style.color = '#939396'
		document.getElementById('procurar').style.boxShadow = '9px 1px 20px 13px #35111178'
		for (var i = 0; i < genero_categorias.length; i++) {
			document.getElementsByClassName('categorias')[i].style.backgroundColor = '#030a4ab3'
			document.getElementsByClassName('categorias')[i].style.color = '#939396'
			document.getElementsByClassName('categorias')[i].onmouseover = function (argument) {
				/* body... */
				argument.toElement.style.backgroundColor = 'black'
			}
			document.getElementsByClassName('categorias')[i].onmouseout = function (argument) {
				/* body... */
				if(argument.path[0].id != 'categorias'){
					argument.path[0].style.backgroundColor = 'rgba(3, 10, 74, 0.7)'
				}
			}
		}



		for (var i = 0; i < idCaixaEncontrados.length; i++) {
			idCaixaEncontrados[i].style.backgroundColor = "#06022fc9";
			idCaixaEncontrados[i].style.border = "5px solid #040227";
			idCaixaEncontrados[i].style.boxShadow = "#060733 0px 0px 20px 12px";

			document.getElementById('btnBaixar' + i).style.backgroundColor = '#03194a'
			document.getElementById('btnBaixar' + i).style.boxShadow = "#000000bf 0px 0px 20px 14px";
			document.getElementById('btnBaixar' + i).style.color = '#939396'

			document.getElementById('assistir_online' + i).style.backgroundColor = '#042906'
			document.getElementById('assistir_online' + i).style.color = '#939396'
			document.getElementById('assistir_online' + i).style.boxShadow = "rgb(28, 5, 56) 0px 0px 20px 14px";

			document.getElementById('tr2Id' + i).lastElementChild.style.color = '#939396';
			document.getElementById('animes_tabela' + i).lastElementChild.style.color = '#939396'
		}

		//for (var i = 0; i < document.getElementsByClassName('td4_luminosidade').childNodes.length; i++) {
			//console.log(document.getElementsByClassName('td4_luminosidade')[0].childNodes)
		//}

		for (var i = 0; i < idCaixaEncontrados.length; i++) {
			document.getElementById('imagem_anime' + i).style.filter = 'brightness(50%)'
			document.getElementsByClassName('zippyshareImg')[i].style.filter = 'brightness(50%)'
			for (var j = 0; j < document.getElementsByClassName('td4_luminosidade')[i].childNodes.length; j++) {
				document.getElementsByClassName('td4_luminosidade')[i].childNodes[j].style.backgroundColor = '#021d02'
				//document.getElementsByClassName('td4_luminosidade')[i].childNodes[j].style.color = 'red'
				document.getElementsByClassName('td4_luminosidade')[i].childNodes[j].firstChild.style.color = '#939396'

				
			}

			for (var j = 0; j < document.getElementsByClassName('td5_luminosidade')[i].childNodes.length; j++) {
				document.getElementsByClassName('td5_luminosidade')[i].childNodes[j].style.backgroundColor = '#150429'
				//document.getElementsByClassName('td4_luminosidade')[i].childNodes[j].style.color = 'red'
				document.getElementsByClassName('td5_luminosidade')[i].childNodes[j].style.color = '#939396'

				document.getElementsByClassName('titulo_caixa_luminosidade')[i].style.color = '#939396'
				document.getElementsByClassName('statusP_luminosidade')[i].style.color = '#939396'
				document.getElementsByClassName('palavraSinopse_luminosidade')[i].style.color = '#939396'
				document.getElementsByClassName('sinopseTexto_luminosidade')[i].style.color = '#939396'
			}

			document.getElementById('btn-luminosidade').style.color = '#939396'
			document.getElementById('descricao').style.color = '#939396'
			document.getElementById('tamanho_das_letras').style.color = '#939396'
			document.getElementById('tooltiptextLuminosidade').style.color = '#939396'
			document.getElementById('tooltiptext').style.color = '#939396'
			document.getElementById('fechar-nav').style.color = '#939396'

			document.getElementById('fechar-nav').onmouseover = function (argument) {
				/* body... #032154*/
				document.getElementById('fechar-nav').style.color = '#790606'
			}

			document.getElementById('fechar-nav').onmouseout = function (argument) {
				/* body... */
				document.getElementById('fechar-nav').style.color = '#939396'
			}



			document.getElementById('luminosidade').onmouseover = function (argument) {
				/* body... */
				document.getElementById('luminosidade').style.backgroundColor = '#042e75'
			}

			document.getElementById('luminosidade').onmouseout = function (argument) {
				/* body... */
				document.getElementById('luminosidade').style.backgroundColor = ''
			}


			document.getElementById('tooltip').onmouseover = function (argument) {
				/* body... */
				document.getElementById('tooltip').style.backgroundColor = '#042e75'
			}

			document.getElementById('tooltip').onmouseout = function (argument) {
				/* body... */
				document.getElementById('tooltip').style.backgroundColor = ''
			}


			document.getElementById('tamanho_das_letras').onmouseover = function (argument) {
				/* body... */
				document.getElementById('tamanho_das_letras').style.backgroundColor = '#042e75'
			}

			document.getElementById('tamanho_das_letras').onmouseout = function (argument) {
				/* body... */
				document.getElementById('tamanho_das_letras').style.backgroundColor = ''
			}

			document.getElementById('abrir-nav').style.color = '#939396'
			document.getElementById('abrir-nav').style.boxShadow = '#07887c'

			document.getElementById('logo').style.color = 'blue'
			document.getElementById('logo').style.backgroundImage = 'linear-gradient(to right, red, blue)'
			document.getElementById('logo').style.animation = 'none'

			document.getElementById('caixa_search').style.backgroundColor = '#100335'

			document.getElementsByClassName('font_tamanho')[0].style.backgroundColor = '#270550'
			document.getElementsByClassName('font_tamanho')[1].style.backgroundColor = '#270550'
			document.getElementsByClassName('font_tamanho')[2].style.backgroundColor = '#270550'

			document.getElementsByClassName('font_tamanho')[0].style.color = '#939396'
			document.getElementsByClassName('font_tamanho')[1].style.color = '#939396'
			document.getElementsByClassName('font_tamanho')[2].style.color = '#939396'

			
			

		}

	}



////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////



	if (checkBoxLuminosidade.checked) {
		document.getElementById('imagem_de_background').style.filter = 'brightness(100%)'
		document.getElementById('dia').style.opacity = '1'
		document.getElementById('noite').style.opacity = '.5'
		document.getElementById('menu').style.backgroundColor = '#da78abe6'
		document.getElementById('menu').style.color = 'white'
		document.getElementById('menu').onmouseover = function (argument) {
			/* body... */
			document.getElementById('menu').style.backgroundColor = 'black'
		}
		document.getElementById('menu').onmouseout = function (argument) {
			/* body... */
			document.getElementById('menu').style.backgroundColor = '#da78abe6';
		}


		for (var i = 0; i < 27; i++) {
			document.getElementsByClassName('alfabeto')[i].style.color = 'white'
			document.getElementsByClassName('alfabeto')[i].onmouseover = function (argument) {
				/* body... */
				argument.toElement.style.backgroundColor = '#46e214b3'
			}
			document.getElementsByClassName('alfabeto')[i].onmouseout = function (argument) {
				/* body... */
				if(argument.path[0].id != 'categorias'){
					argument.path[0].style.backgroundColor = '#1b1717'
				}
			}
		}


		document.getElementsByClassName('menu')[0].style.backgroundColor = '#da78abe6'
		document.getElementsByClassName('menu')[1].style.backgroundColor = '#da78abe6'
		document.getElementsByClassName('menu')[2].style.backgroundColor = '#da78abe6'

		document.getElementsByClassName('menu')[0].style.color = 'white'
		document.getElementsByClassName('menu')[1].style.color = 'white'
		document.getElementsByClassName('menu')[2].style.color = 'white'

		for (var i = 0; i < 3; i++) {
			document.getElementsByClassName('menu')[i].onmouseover = function (argument) {
				/* body... */
				argument.toElement.style.backgroundColor = 'black'
			}
			document.getElementsByClassName('menu')[i].onmouseout = function (argument) {
				/* body... */
				if(argument.path[0].id != 'categorias'){
					argument.path[0].style.backgroundColor = '#da78abe6'
				}
			}
		}


		document.getElementById('caixa_Principal_animes').style.backgroundColor = '#8778da87'
		document.getElementById('categorias').style.backgroundColor = '#48a098a8'
		document.getElementById('palavra_genero').style.color = 'white'
		document.getElementById('entrada').style.backgroundColor = '#821ece80'
		document.getElementById('entrada').style.boxShadow = '-9px 0px 20px 16px #ffffff78'
		document.getElementById('procurar').style.backgroundColor = 'DodgerBlue'
		document.getElementById('procurar').style.color = 'white'
		document.getElementById('procurar').style.boxShadow = '9px 1px 20px 13px #ffffff7a'
		for (var i = 0; i < genero_categorias.length; i++) {
			document.getElementsByClassName('categorias')[i].style.backgroundColor = '#37e8e0b3'
			document.getElementsByClassName('categorias')[i].style.color = 'white'
			document.getElementsByClassName('categorias')[i].onmouseover = function (argument) {
				/* body... */
				argument.toElement.style.backgroundColor = '#46e214b3'
			}
			document.getElementsByClassName('categorias')[i].onmouseout = function (argument) {
				/* body... */
				if(argument.path[0].id != 'categorias'){
					argument.path[0].style.backgroundColor = '#37e8e0b3'
				}
			}
		}

		for (var i = 0; i < idCaixaEncontrados.length; i++) {
			document.getElementById('imagem_anime' + i).style.filter = 'brightness(100%)'
			document.getElementsByClassName('zippyshareImg')[i].style.filter = 'brightness(100%)'
			idCaixaEncontrados[i].style.backgroundColor = "#78c0da87";
			idCaixaEncontrados[i].style.border = "5px solid #32d486";
			idCaixaEncontrados[i].style.boxShadow = "0 0 20px 12px #fbff0b";

			document.getElementById('btnBaixar' + i).style.backgroundColor = "#1c49bb"
			document.getElementById('btnBaixar' + i).style.boxShadow = "0 0 20px 14px #17b32ef0";
			document.getElementById('btnBaixar' + i).style.color = 'white'

			document.getElementById('assistir_online' + i).style.backgroundColor = '#17b32ef0'
			document.getElementById('assistir_online' + i).style.color = 'white'
			document.getElementById('assistir_online' + i).style.boxShadow = "0 0 20px 14px #702dbf";

			document.getElementById('tr2Id' + i).lastElementChild.style.color = 'white';
			document.getElementById('animes_tabela' + i).lastElementChild.style.color = 'white'
		}

		for (var i = 0; i < idCaixaEncontrados.length; i++) {
			for (var j = 0; j < document.getElementsByClassName('td4_luminosidade')[i].childNodes.length; j++) {
				document.getElementsByClassName('td4_luminosidade')[i].childNodes[j].style.backgroundColor = 'green'
				//document.getElementsByClassName('td4_luminosidade')[i].childNodes[j].style.color = 'red'
				document.getElementsByClassName('td4_luminosidade')[i].childNodes[j].firstChild.style.color = 'white'

				
			}
		}

		for (var i = 0; i < idCaixaEncontrados.length; i++) {
			for (var j = 0; j < document.getElementsByClassName('td5_luminosidade')[i].childNodes.length; j++) {
				document.getElementsByClassName('td5_luminosidade')[i].childNodes[j].style.backgroundColor = '#702dbf'
				//document.getElementsByClassName('td4_luminosidade')[i].childNodes[j].style.color = 'red'
				document.getElementsByClassName('td5_luminosidade')[i].childNodes[j].style.color = 'white'

				
			}

			document.getElementsByClassName('titulo_caixa_luminosidade')[i].style.color = 'white'
			document.getElementsByClassName('statusP_luminosidade')[i].style.color = 'white'
			document.getElementsByClassName('palavraSinopse_luminosidade')[i].style.color = 'white'
			document.getElementsByClassName('sinopseTexto_luminosidade')[i].style.color = 'white'
		}

		document.getElementById('btn-luminosidade').style.color = 'white'
		document.getElementById('descricao').style.color = 'white'
		document.getElementById('tamanho_das_letras').style.color = 'white'
		document.getElementById('tooltiptextLuminosidade').style.color = 'white'
		document.getElementById('tooltiptext').style.color = 'white'
		document.getElementById('fechar-nav').style.color = 'white'

		document.getElementById('fechar-nav').onmouseover = function (argument) {
			/* body... */
			document.getElementById('fechar-nav').style.color = 'red'
		}

		document.getElementById('fechar-nav').onmouseout = function (argument) {
			/* body... */
			document.getElementById('fechar-nav').style.color = 'white'
		}


		document.getElementById('luminosidade').onmouseover = function (argument) {
			/* body... */
			document.getElementById('luminosidade').style.backgroundColor = '#0852d0'
		}

		document.getElementById('luminosidade').onmouseout = function (argument) {
			/* body... */
			document.getElementById('luminosidade').style.backgroundColor = ''
		}



		document.getElementById('tooltip').onmouseover = function (argument) {
			/* body... */
			document.getElementById('tooltip').style.backgroundColor = '#0852d0'
		}

		document.getElementById('tooltip').onmouseout = function (argument) {
			/* body... */
			document.getElementById('tooltip').style.backgroundColor = ''
		}


		document.getElementById('tamanho_das_letras').onmouseover = function (argument) {
			/* body... */
			document.getElementById('tamanho_das_letras').style.backgroundColor = '#0852d0'
		}

		document.getElementById('tamanho_das_letras').onmouseout = function (argument) {
			/* body... */
			document.getElementById('tamanho_das_letras').style.backgroundColor = ''
		}

		document.getElementById('abrir-nav').style.color = 'white'
		document.getElementById('abrir-nav').style.boxShadow = '#1ee2d0'

		document.getElementById('logo').style.color = 'white'
		document.getElementById('logo').style.backgroundImage = 'linear-gradient(to right, rgba(20, 253, 99, 0.82), rgba(76, 101, 226, 0.85), rgba(60,210,255,1))'
		document.getElementById('logo').style.animation = 'sombra 20s infinite'


		document.getElementById('caixa_search').style.backgroundColor = 'rgb(27, 156, 212)'

		for (var i = 0; i < idSearchElementos.length; i++) {
			idSearchElementos[i].style.color = 'white'
		}

		document.getElementById('entrada').style.color = 'white'
		document.getElementById('procurar').style.color = 'white'

		document.getElementsByClassName('font_tamanho')[0].style.backgroundColor = '#540aad'
		document.getElementsByClassName('font_tamanho')[1].style.backgroundColor = '#540aad'
		document.getElementsByClassName('font_tamanho')[2].style.backgroundColor = '#540aad'

		document.getElementsByClassName('font_tamanho')[0].style.color = 'white'
		document.getElementsByClassName('font_tamanho')[1].style.color = 'white'
		document.getElementsByClassName('font_tamanho')[2].style.color = 'white'


	}

	
}