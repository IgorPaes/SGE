// if(localStorage.getItem('infosCadastro') === null) {
//     window.location.href = "inicial.html";
// }

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
    // Seleciona o primeiro elemento com a classe 'obterElementos' que é o último adicionado
    var ultimoItemCriado = document.querySelector('.obterElementos');
    // Pega todos os inputs dentro desse último item
    var inputs = ultimoItemCriado.querySelectorAll('input[type="text"]');
    // Cria um array para armazenar os valores dos inputs
    var valores = [];
    // Itera sobre os inputs para pegar os valores
    inputs.forEach(function(input) {
        valores.push(input.value);
    });
    // Retorna o array com os valores
    return valores; // Modificado para retornar o array de valores
}

let vecProdutos = [];


function recebeDados() {
    
    const valoresProd = ValoresProd();    
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

        vecProdutos.push(Produto);

        if(localStorage.getItem('ProdutosCriados') !== null) {
            const vecLocal = localStorage.getItem('ProdutosCriados');
            let conv = JSON.parse(vecLocal);
            conv.forEach((item) => {
                conv.push(item);
            });
        }
        
        localStorage.setItem('ProdutosCriados', JSON.stringify(vecProdutos)) // Atribui o segundo valor do array

    }else {
        console.log('Não há valores suficientes para acessar o segundo elemento.');
    }
}

function recuperarProdutos() {
    localStorage.getItem('ProdutoCriado');
    console.log(localStorage.getItem('ProdutoCriado',));
}
recuperarProdutos()


function btnCarregarListaProdutos(){
    const blocoPai = document.getElementById('add_container')
    console.log(blocoPai);
    const vecLocal = localStorage.getItem('ProdutosCriados');
    let conv = JSON.parse(vecLocal);

    contador = 0;
    conv.forEach((item) => {
        const collapseId = 'collapseExample' + contador;
        blocoPai.innerHTML += `<div class="itemlist">
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
    
        </section>  
        <p class="d-inline-flex gap-1">
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#${collapseId}" role="button" aria-expanded="false" aria-controls="${collapseId}">
              ^
            </a>
        </p>
          <div class="collapse" id="${collapseId}"   style="width: 50vw;">
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
                        <input type="text" placeholder="Bom brill (Eco)" name="nome">
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
                        <label for="marca">Marca</label>
                        <input type="text" placeholder="Bom Bril" name="marca">
                    </div>
                    <div class="entradas">
                        <label for="qnt">Quantidade</label>
                        <input type="text" placeholder="10.000" name="qnt">
                    </div>                                
                    <div class="entradas">
                        <label for="entry">Preço</label>
                        
                        <input type="text" placeholder="R$10.50" name="entry">
                    </div>
                    <div class="entradas">
                        <label for="forn">Fornecedor</label>
                        <input type="text" placeholder="Bom brill Inc" name="forn">
                    </div>
                    <div class="entradas">
                        <label for="cod">Codigo de barras</label>
                        <input type="text" placeholder="3565.65564.3443-54" name="cod">
                    </div>   
                    <button type="button" onclick="btnSalvar(id)">+ Salvar as alteracoes</button>                                                      
                </section>
            </div>
            </div>                    
          </div>            
    </div>`
    contador++;
    })
} 


//DESCOBRIR COMO LIMPAR O HTML ANTES DE ENVIAR UMA NOVA FUNCAO DE RENDERIZACAO
/////CRIAR FUNCAO PARA EDITAR ITENS ÚNICOS, UTILIZANDO IDS UNICOS
function CarregarCriarProdutos() {
    const blocoPai = document.getElementById('add_container')
    return blocoPai.innerHTML += `<div class="testar">
                
    <div class="divtest">
        
        <div class="obterElementos">
            <div class="ladoFotos">
                <div class="foto">
                    <label for="">Imagem do Produto</label>
                    <img src="/assets/images/esponja.png" alt="">
                    <button type="button">+ Adicionar imagem</button>
                </div>
                <div class="active"><button type="button" onclick="activedItem()">Ativar</button></div>
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
        <button type="button" class="btn btn-primary" onclick="recebeDados()">Criar</button>
    </div>
</div>`
}







function editarItem() {  
    let conv = JSON.parse(localStorage.getItem('ProdutosCriados'));
    //let id = conv.length
    let id = conv.quantidadeProd
    console.log(id);
    //console.log(conv);
}

editarItem()

document.querySelector('.active').addEventListener('click', (e) => {
    console.log(e);
    console.log(e[0]);
    console.log(e[1]);
})