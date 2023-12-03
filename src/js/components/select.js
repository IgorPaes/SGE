document.getElementById("drop_block").addEventListener('click', () => {
    const listaSelect = document.getElementById('select_list');
    const options = listaSelect.querySelectorAll('#select_list li');
    let ultimoSelecionado = options[0];
    options.forEach((option) => {        
        option.addEventListener('click', () => {
            ultimoSelecionado.classList.remove('selecionado');
            ultimoSelecionado = option;
            option.classList.add('selecionado');
            document.querySelector('#ti_select span').textContent = option.textContent;
            listaSelect.style.display = 'none';
        });
    });
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