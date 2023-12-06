if(localStorage.getItem('infosCadastro') === null) {
    window.location.href = "inicial.html";
}

/*const blocoPai = document.querySelector('#add_container');

function cria() {
    blocoPai.insertAdjacentHTML('afterbegin', criarItem());
}

function criarItem() {
    return `<div class="obterElementos">
    <div class="ladoFotos">
        <div class="foto">
            <label for="">Imagem do Produto</label>
            <img src="/assets/images/esponja.png" alt="">
            <button type="button">+ Adicionar imagem</button>
        </div>
        <div class="active"><button type="button">Ativar</button></div>
    </div>
    <div class="ladoDados">
        <div class="entradas">
            <label for="nome">Nome do produto</label>
            <input type="text" placeholder="Bom brill (Eco)" name="nome">
        </div>
        <div class="entradas">
            <label for="nome">Marca</label>
            <input type="text" placeholder="Bom brill (Eco)" name="nome">
        </div>
        <div class="entradas">
            <label for="nome">Quantidade</label>
            <input type="text" placeholder="Bom brill (Eco)" name="nome">
        </div>
        <div class="entradas">
            <label for="nome">Categoria</label>
            <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </select>
        </div>
        <div class="entradas">
            <label for="nome">Preço</label>
            <input type="text" placeholder="Bom brill (Eco)" name="nome">
        </div>
        <div class="entradas">
            <label for="nome">Codigo de barras</label>
            <input type="text" placeholder="Bom brill (Eco)" name="nome">
        </div>
        <div class="entradas">
            <label for="nome">Fornecedor</label>
            <input type="text" placeholder="Bom brill (Eco)" name="nome">
        </div>
        <div class="entradas">
            <label for="nome">Tags</label>
            <input type="text" placeholder="Bom brill (Eco)" name="nome">
        </div>
    </div>
</div>`
}
*/


function pegarValoresDosUltimosInputs() {
    // Seleciona o primeiro elemento com a classe 'obterElementos' que é o último adicionado
    var ultimoItemCriado = document.querySelector('.obterElementos');
console.log(ultimoItemCriado);
    // Pega todos os inputs dentro desse último item
    var inputs = ultimoItemCriado.querySelectorAll('input[type="text"]');
    console.log(inputs);
    // Cria um array para armazenar os valores dos inputs
    var valores = [];

    // Itera sobre os inputs para pegar os valores
    inputs.forEach(function(input) {
        valores.push(input.value);
    });

    // Retorna o array com os valores
    return inputs;
}