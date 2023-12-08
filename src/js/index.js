document.addEventListener('load', () => CarregarCriarProdutos());

document.getElementById('btnSair').addEventListener('click', () => {

    localStorage.removeItem('infosCadastro');
    localStorage.setItem('manterLogado', '0');
    window.location.href = "inicial.html";
})

document.getElementById('btnTelaHome').addEventListener('click', () => {
    CarregarCriarProdutos();
    document.getElementById('recebeDados').addEventListener('click', () => {
        recebeDados();
    });
})

document.getElementById('btnTelaProdutos').addEventListener('click', () => {
    btnCarregarListaProdutos();
})

localStorage.setItem('activedItem', '0');
// Função para mudar o número armazenado no localStorage
function activedItem() {
    var numeroAtual = localStorage.getItem('activedItem')

    if(numeroAtual == 0){
        numeroAtual = 1
        localStorage.setItem('activedItem',numeroAtual)
    }else{
        numeroAtual = 0
        localStorage.setItem('activedItem',numeroAtual)
    }
}

function ValoresProd() {
    var ultimoItemCriado = document.querySelector('.obterElementos');

    var inputs = ultimoItemCriado.querySelectorAll('input[type="text"]');

    var valores = [];

    inputs.forEach(function(input) {
        valores.push(input.value);
    });

    return valores; 
}

function recebeDados() {
    let vecProdutos = [];

    var valoresProd = ValoresProd();    
    Produto = {
        nomeProd : '',
        marcaProd : '',
        quantidadeProd : 0,
        categoriaProd : '',
        precoProd : 0.0,
        codBarrasProd : '',
        FornecedorProd : '',
        tags: ''
    }

    if(valoresProd.length > 1) {
        Produto.nomeProd = valoresProd[0];
        Produto.marcaProd = valoresProd[1];
        Produto.quantidadeProd = valoresProd[2];
        Produto.categoriaProd = document.querySelector('.categoria').value;
        Produto.precoProd = valoresProd[3];
        Produto.codBarrasProd = valoresProd[4];
        Produto.FornecedorProd = valoresProd[5];
        Produto.tags = document.querySelector('.tag').value;

        if(localStorage.getItem('ProdutosCriados') !== null) {
            var vecLocal = localStorage.getItem('ProdutosCriados');
            let conv = JSON.parse(vecLocal);
            conv.forEach((item) => {
                vecProdutos.push(item);
            });
        }
        
        vecProdutos.push(Produto);        
        localStorage.setItem('ProdutosCriados', JSON.stringify(vecProdutos)) // Atribui o segundo valor do array
        alert("Produto criado!");
    }else {
        console.log('Não há valores suficientes para acessar o segundo elemento.');
    }
}

function btnCarregarListaProdutos(){

    const blocoPai = document.getElementById('add_container');
    if (localStorage.getItem('ProdutosCriados') == null || localStorage.getItem('ProdutosCriados') == '' || localStorage.getItem('ProdutosCriados') == ' ') {
        localStorage.setItem('ProdutosCriados', JSON.stringify([]));
        blocoPai.innerHTML = '';
    }else {
        blocoPai.innerHTML = '';
        const vecLocal = localStorage.getItem('ProdutosCriados');
        
        try{
            let conv = JSON.parse(vecLocal);
            let contador = 0;
            conv.forEach((item) => {
                let collapseId = 'collapseExample' + contador;
                blocoPai.insertAdjacentElement('beforeend', criaItemLista(collapseId, item));
                contador++;
            });
        }catch{
            alert('Deu problema na porra do CONV de novo.')
        }

        carregaBtnsSalvar();
        removeProduto()
        removerQuantidade()
        adicionarQuantidade()
    }
} 

function carregaBtnsSalvar() {
    const vecBtns = document.querySelectorAll('#add_container .itemlist #btnEditar');
    vecBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {

            let vecProdutos = JSON.parse(localStorage.getItem('ProdutosCriados'));
            let infosEditar = vecProdutos[index];
            
            const paiItensEditar = btn.parentNode;

            infosEditar.nomeProd = paiItensEditar.querySelector('#inputNomeItem').value;
            infosEditar.marcaProd = paiItensEditar.querySelector('#inputMarcaItem').value;
            infosEditar.quantidadeProd = paiItensEditar.querySelector('#inputQtdItem').value;
            infosEditar.categoriaProd = paiItensEditar.querySelector('#inputSelectItem').value;
            infosEditar.precoProd = paiItensEditar.querySelector('#inputPrecoItem').value;
            infosEditar.codBarrasProd = paiItensEditar.querySelector('#inputCodigoBarrasItem').value;
            infosEditar.FornecedorProd = paiItensEditar.querySelector('#inputFornecedorItem').value;

            vecProdutos[index] = infosEditar;

            localStorage.setItem('ProdutosCriados', JSON.stringify(vecProdutos));

        })
    })
}

function removeProduto() {
    const vecBtns = document.querySelectorAll('#add_container .itemlist #btnDeletar');
    vecBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            let vecProdutos = JSON.parse(localStorage.getItem('ProdutosCriados'));
            vecProdutos.splice(index, 1);
            localStorage.setItem('ProdutosCriados', JSON.stringify(vecProdutos));
            btnCarregarListaProdutos()
        })
    })

}

function removerQuantidade() {
    const vecBtns = document.querySelectorAll('#rmvBtn');
    let vecProdutos = JSON.parse(localStorage.getItem('ProdutosCriados'));
    let obj;
    vecBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {

            obj = vecProdutos[index]
            obj.quantidadeProd = (parseFloat(obj.quantidadeProd) -1)
            vecProdutos[index] = obj
            console.log( vecProdutos[index])
            localStorage.setItem('ProdutosCriados', JSON.stringify(vecProdutos));
            btnCarregarListaProdutos()
        }
     
    )})
}

function adicionarQuantidade() {
    const vecBtns = document.querySelectorAll('#addBtn');
    let vecProdutos = JSON.parse(localStorage.getItem('ProdutosCriados'));
    let obj;
    vecBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {

            obj = vecProdutos[index]
            obj.quantidadeProd = (parseFloat(obj.quantidadeProd) + 1)
            vecProdutos[index] = obj
            console.log( vecProdutos[index])
            localStorage.setItem('ProdutosCriados', JSON.stringify(vecProdutos));
            btnCarregarListaProdutos();

        }
     
    )})
}

function criaItemLista(collapseId, item) {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="itemlist">
        <section class="imageProd">
            <div class="vazio1">
                <input type="checkbox">
                <figure>
                    <img src="/assets//images/esponja.png" alt="">
                </figure>
                <label for="">${item.nomeProd}</label>
            </div>
            <div class="vazio2">

            </div>
        </section>
        <section class="infoProd">
            <label for="" class="categoriaItem">${item.categoriaProd}</label>
            <label for="">${item.quantidadeProd}</label>
            <label for="">R$${item.precoProd}</label>
            <label for="">R$${item.quantidadeProd * item.precoProd}</label>
            <label for=""></label>
            <label for="">${Date.now()}</label>

            <section>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">              
                <button id="rmvBtn"  type="button" class="btn btn-danger">-</button>  
                <button id="addBtn"  type="button" class="btn btn-success">+</button>    
            </div>
        </section>
        </section>  
               
        <p class="d-inline-flex gap-1">
        <button id="btnDeletar" class="btn btn-danger">D </button>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#${collapseId}" role="button" aria-expanded="false" aria-controls="${collapseId}">
            ^
            </a>
        </p>
        <div class="collapse bloco_edit" id="${collapseId}">
            <div class="card card-body">
                <div class="container-card-content">
                <section class="sect-image">
                    <img src="/assets/images/esponja.png" alt="">
                    <div>
                        <button type="button"> + Add Image</button>
                    </div>
                </section>
                <section class="content-card">
                    <div class="entradas">
                        <label for="nome">Nome do produto</label>
                        <input id="inputNomeItem" type="text" placeholder="Bom brill (Eco)" name="nome">
                    </div>
                    <div class="entradas">
                        <label for="catg">Categoria</label>
                        <select id="inputSelectItem" class="form-select categoria" aria-label="Default select example" style="width: 200px;">
                            <option value="médio">médio</option>
                            <option value="bom">bom</option>
                            <option selected value="ótimo">ótimo</option>
                        </select>
                    </div>
                    <div class="entradas">
                        <label for="marca">Marca</label>
                        <input id="inputMarcaItem" type="text" placeholder="Bom Bril" name="marca">
                    </div>
                    <div class="entradas">
                        <label for="qnt">Quantidade</label>
                        <input id="inputQtdItem" type="text" placeholder="10.000" name="qnt">
                    </div>                                
                    <div class="entradas">
                        <label for="entry">Preço</label>
                        
                        <input id="inputPrecoItem" type="text" placeholder="R$10.50" name="entry">
                    </div>
                    <div class="entradas">
                        <label for="forn">Fornecedor</label>
                        <input id="inputFornecedorItem" type="text" placeholder="Bom brill Inc" name="forn">
                    </div>
                    <div class="entradas">
                        <label for="cod">Codigo de barras</label>
                        <input id="inputCodigoBarrasItem" type="text" placeholder="3565.65564.3443-54" name="cod">
                    </div>   
                    <button type="button" id="btnEditar" class='active'>+ Salvar as alteracoes</button>                                                 
                </section>
            </div>
            </div>                    
        </div>            
    </div>
    `;
    return div.firstElementChild;
}

function CarregarCriarProdutos() {
    const blocoPai = document.getElementById('add_container');
    return blocoPai.innerHTML = `
    <div class="testar">       
        <div class="divtest">
            <div class="obterElementos">
                <div class="ladoFotos">
                   
                </div>
                <div class="ladoDados">
                    <div class="entradas">
                        <label for="nome">Nome do produto</label>
                        <input type="text" placeholder="Bom brill (Eco)" name="nome">
                    </div>
                    <div class="entradas">
                        <label for="marca">Marca</label>
                        <input type="text" placeholder="Bom Bril" name="marca">
                    </div>
                    <div class="entradas">
                        <label for="qnt">Quantidade</label>
                        <input type="text" placeholder="10.000" name="qnt">
                    </div>
                    <div class="entradas">
                        <label for="catg">Categoria</label>
                        <select class="form-select categoria" aria-label="Default select example" style="width: 200px;">
                            <option value="médio">médio</option>
                            <option value="bom">bom</option>
                            <option selected value="ótimo">ótimo</option>
                        </select>
                    </div>
                    <div class="entradas">
                        <label for="entry">Preço</label>
                        
                        <input type="text" placeholder="R$10.50" name="entry">
                    </div>
                    <div class="entradas">
                        <label for="cod">Codigo de barras</label>
                        <input type="text" placeholder="3565.65564.3443-54" name="cod">
                    </div>
                    <div class="entradas">
                        <label for="forn">Fornecedor</label>
                        <input type="text" placeholder="Bom brill Inc" name="forn">
                    </div>
                    <div class="entradas">
                        <label for="tag">Tags</label>
                        <input type="text" placeholder="Prod Bom" name="tag" class="tag">
                    </div>
                </div>
            </div>  
            <button type="button" class="btn-close " aria-label="Close"></button>                  
        </div>                
    </div> 
    <div class="botoes">
        <div>
            <button type="button" class="btn btn-primary" id="recebeDados">Criar</button>           
        </div>
    </div>`
}