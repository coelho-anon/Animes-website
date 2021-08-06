function aparecer_anime (argument) {


	idCaixaEncontrados[argument].style.display = '';

    document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth'
    window.scrollTo(0, idCaixaEncontrados[argument].offsetTop);
    document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto'
}

/*
document.getElementsByTagName('html')[0].style.scrollBehavior = 'smooth'
    window.scrollTo(0, document.getElementsByTagName('html').offsetTop);
    document.getElementsByTagName('html')[0].style.scrollBehavior = 'auto'
    */