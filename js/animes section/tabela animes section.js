
tabela = document.createElement('table')
tabela.id = 'tableAnimes'
document.getElementById('caixa_Principal_animes').appendChild(tabela)


//tabela.style.overflowY = 'auto'
//tabela.style.overflowX = 'visible'
//tabela.style.height = (categorias.offsetHeight) + 'px';
//tabela.style.tableLayout = 'fixed';
//tabela.style.maxWidth = (caixa_Principal_animes.offsetWidth) + 'px';

//Tirei o absolute porque se não a caixa de background não seria alterada conforme a quantidade de animes.
// estilo da tabela => coloquei a table como position absolute.
// o y dele se tornou o y da 'categorias'.
// o x dele se tornou o (x + width + 5) da 'categorias'.

/*
tableAnimes.style.position = 'absolute';
tableAnimes.style.top = categorias.offsetTop + 'px';
tableAnimes.style.left = (categorias.offsetLeft + categorias.offsetWidth + 5) + 'px';
*/

tr = document.createElement('tr')
tr.className = 'trAnimesTable'
tabela.appendChild(tr);

th = document.createElement('th')
th.className = 'espacamento'
th.className = 'thAnimesTable'
th.innerHTML = 'Título'
tr.appendChild(th);

th2 = document.createElement('th')
th2.className = 'espacamento'
th2.className = 'thAnimesTable'
th2.innerHTML = 'Episódios'
th2.style.textAlign = 'center'
tr.appendChild(th2);

/* NO ARRAY DOS ANIMES NÃO TEM NOTA NEM TIPO AINDA.
!talvez não seja uma boa ideia colocar nota e tipo do anime
já que praticamente apenas o site Anbient usa isso, então se vier
um anime que não tenha lá (coisa que é bem rara), ele ficaria sem essas
categorias.

th3 = document.createElement('tr')
th3.className = 'espacamento'
th3.innerHTML = 'Nota'
tr.appendChild(th3);

th4 = document.createElement('tr')
th4.className = 'espacamento'
th4.innerHTML = 'Tipo'
tr.appendChild(th4);
*/
var animes_da_tabela = [null]
var episodios_da_tabela = [null]
var trAnimesTable = [null]
for (var i = 0; i < animes.length; i++) {
	tr2 = document.createElement('tr')
	tr2.className = 'trAnimesTable'
	tr2.id = 'tr2Id'+ i;
	tr2.style.display = ''
	
	tabela.appendChild(tr2);

	trAnimesTable[i] = document.getElementById('tr2Id'+i);

	tr2.onclick = function (argument) {

		for (var i = 0; i < animes.length; i++) {
			if (argument.toElement.textContent == animes[i].nome) {
				aparecer_anime(i)
			}
		}
	};

	td = document.createElement('td')
	//td.className = 'espacamento'
	td.className = 'tdAnimesTable'
	td.id = 'animes_tabela' + i
	//td.innerHTML = animes[i].nome
	td.style.width = '100%'
	td.style.height = '10%';
	td.style.overflow = 'auto'
	tr2.appendChild(td);

	nome_do_anime = document.createElement('h1');
	nome_do_anime.innerHTML = animes[i].nome;	
	nome_do_anime.style.padding = '1%'
	nome_do_anime.style.fontSize = '1.5em'
	td.appendChild(nome_do_anime)


	animes_da_tabela[i] = document.getElementById('animes_tabela' + i)

	td2 = document.createElement('td')
	td2.className = 'espacamento'
	td2.className = 'tdAnimesTable'
	td2.id = 'episodios_tabela' + i
	td2.innerHTML = animes[i].episodios
	td2.style.textAlign = 'center'
	td2.style.fontSize = '1.5em'
	tr2.appendChild(td2);

	// td2.style.width = '100px'

	episodios_da_tabela[i] = document.getElementById('episodios_tabela' + i)
}

var animes_nao_familia = [];
var contero = 0;
//filtra os animes de categoria indescente e faz eles sumirem
for (iz in animes) {
	for (jz in animes[iz].categorias) {

		if (animes[iz].categorias[jz] == 'ECCHI'
			|| animes[iz].categorias[jz] == 'SEINEN'
			|| animes[iz].categorias[jz] == 'THRILLER' 
			|| animes[iz].categorias[jz] == 'HORROR'
			|| animes[iz].categorias[jz] == 'DEMÊNCIA') {

			contero = 1;

		}
		
	}

	if (contero == 1) {
		animes_nao_familia.push(animes[iz].nome)
	}

	contero = 0;
	
}
console.log(animes_nao_familia)

