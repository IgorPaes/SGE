const linhasBlocos = document.querySelectorAll('.caixa_selecao');
if(sessionStorage.getItem('linhaSelecionadaNav') === null) {
    sessionStorage.setItem('linhaSelecionadaNav', '0');
    linhasBlocos[0].classList.add('selecionado');
}else {
    const linhaArmazenada = sessionStorage.getItem('linhaSelecionadaNav');
    linhasBlocos[parseInt(linhaArmazenada)].classList.add('selecionado');
}

linhasBlocos.forEach((linha, index) => {
    if(!linha.classList.contains('sair')) { 
        linha.addEventListener('click', () => {   
            const ultimaSelecionada = sessionStorage.getItem('linhaSelecionadaNav');
            linhasBlocos[ultimaSelecionada].classList.toggle('selecionado');

            linha.classList.toggle('selecionado');
            sessionStorage.setItem('linhaSelecionadaNav', index);
        });
    }
});
