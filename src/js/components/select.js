window.addEventListener('load', () => {
    const listaSelect = document.getElementById('lista_select');
    const options = listaSelect.querySelectorAll('#lista_select li');
    for(let i = 0; i < options.length; i++) {
        options[i].addEventListener('click', function() {
            for(let i = 0; i < options.length; i++) {
                options[i].classList.remove('selecionado');
            }
            options[i].classList.add('selecionado');
            document.querySelector('.icone_txt_select span').textContent = options[i].textContent;
            listaSelect.style.display = 'none';
        });
    }
});

document.getElementById("bloco_drop").addEventListener('click', () => {
    const listaSelect = document.getElementById('lista_select');
    listaSelect.style.display = (listaSelect.style.display === 'grid') ? 'none' : 'grid';
    let cond = true;
    if(cond) {
        cond = false;
        document.addEventListener('click', (event) => {
            if(event.target.classList[0] === 'main_container') {
                listaSelect.style.display = 'none';
            }
        });
    }
});