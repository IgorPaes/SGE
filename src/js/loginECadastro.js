import checkInputs from './validarInputs.js';
import { Usuario, InfosUsuario } from './Usuario.js';

const btnCadastrarObj = document.getElementById('btnCadastrar');
const btnEntrarObj = document.getElementById('btnEntrar');
const btnLoginObj = document.getElementById('irLogin');
const btnCadastroObj = document.getElementById('irCadastro');
const btnEsqueciSenhaObj = document.getElementById('irEsqueceuSenha');
const btnFecharObj = document.getElementById('fechar');

const btnOlhoFechado = document.querySelector('#olho_fechado_login');
const olhoAberto = document.querySelector('#olho_aberto_login');
btnOlhoFechado.addEventListener('click', function() {
    btnOcultarSenha('#senhaLogar');
    btnOlhoFechado.style = 'display: none;';
    olhoAberto.style = 'display: block;';
});
olhoAberto.addEventListener('click', function() {
    btnDesocultarSenha('#senhaLogar');
    olhoAberto.style = 'display: none;';
    btnOlhoFechado.style = 'display: block;';
});

const btnOlhoFechadoDois = document.querySelector('#olho_fechado_cadastro');
const btnOlhoAbertoDois = document.querySelector('#olho_aberto_cadastro');
btnOlhoFechadoDois.addEventListener('click', function() {
    btnOcultarSenha('#senhaCadastro');
    btnOlhoAbertoDois.style = 'display: block;';
    btnOlhoFechadoDois.style = 'display: none;';
});
btnOlhoAbertoDois.addEventListener('click', function() {
    btnDesocultarSenha('#senhaCadastro');
    btnOlhoAbertoDois.style = 'display: none;';
    btnOlhoFechadoDois.style = 'display: block;';
});

btnCadastrarObj.addEventListener('click', btnCadastrar);
btnEntrarObj.addEventListener('click', btnEntrar);
btnLoginObj.addEventListener('click', irLogin);
btnCadastroObj.addEventListener('click', irCadastro);
btnEsqueciSenhaObj.addEventListener('click', irEsqueceuSenha);

btnFecharObj.addEventListener('click', function() {
    fecharTela('#balao_esqueceu_senha');
});

const InfosRecebidas = new Usuario(new InfosUsuario());

function btnOcultarSenha(inputSenha){

    const inputPassword = document.querySelector(`${inputSenha}`);

    inputPassword.setAttribute('type','text');

}

function btnDesocultarSenha(inputSenha){

    const inputPassword = document.querySelector(`${inputSenha}`);
    inputPassword.setAttribute('type','password');

}

function btnCadastrar() {

    const nome = document.querySelector('#nomeCadastro');
    const email = document.querySelector('#emailCadastro');
    const senha = document.querySelector('#senhaCadastro');
    const cpf = document.querySelector('#cpfCadastro');

    let valorNome = nome.value;
    let valorEmail = email.value;
    let valorSenha = senha.value;
    let valorCpf = cpf.value;

    InfosRecebidas.infos = new InfosUsuario(valorNome, valorCpf);
    InfosRecebidas.senha = valorSenha;
    InfosRecebidas.email = valorEmail;

    let infosUser = [valorNome, valorEmail, valorSenha, valorCpf];

    const inputsAlterarEstiloCadastroAll = document.querySelectorAll('#InputTCadastro'); 

    if(checkInputs(infosUser, inputsAlterarEstiloCadastroAll, 1)) {

        nome.value = "";
        email.value = "";
        senha.value = "";
        cpf.value = "";
        
        cadastrado();
    }
    
}

function cadastrado() {
    
    irLogin();
    notificacaoInicial('Cadastro concluído com sucesso!');
}

function btnEntrar() {

    const email = document.querySelector('#emailLogar');
    const senha = document.querySelector('#senhaLogar');

    const valorEmail = email.value;
    const valorSenha = senha.value;

    let infosUser = [email.value, senha.value];
    const inputsAlterarEstiloLoginAll = document.querySelectorAll('#InputTLogin'); 

    if(checkInputs(infosUser, inputsAlterarEstiloLoginAll, 2) && Usuario.validarLogin(InfosRecebidas, valorEmail, valorSenha)) {
    
        email.value = "";
        senha.value = "";
        logado();
    
    }else {

        notificacaoInicial('Login ou senha incorreto!');

    }

}

function logado() {

    window.location.href = "principal.html";

}

function irCadastro() {

    const telaLogin = document.querySelector('#tela_login');
    const telaCadastro = document.querySelector('#tela_cadastro');

    telaLogin.style = "display: none;";
    telaCadastro.style = "display: flex;";

    

}

function irLogin() {

    const telaCadastro = document.querySelector('#tela_cadastro');
    const telaLogin = document.querySelector('#tela_login');

    telaCadastro.style = "display: none;";
    telaLogin.style = "display: flex;";

}

function irEsqueceuSenha() {

    const telaEsqueceuSenha = document.querySelector('#balao_esqueceu_senha');

    telaEsqueceuSenha.style = "display: flex;";

}

function fecharTela(telaFecharObj) {

    const telaFechar = document.querySelector(`${telaFecharObj}`);
    telaFechar.style = "display: none;";

}

function notificacaoInicial(texto) {

    document.querySelector('.conteudo_notify > p').textContent = texto;
 
    const notifyInicial = document.querySelector('#on_of_notify');
    notifyInicial.style = "display: flex;";

    setTimeout(() => {
        notifyInicial.classList.add('notify_anim_saida');
        setTimeout(() => {
            notifyInicial.style = "display: none;";
            notifyInicial.classList.remove('notify_anim_saida');
        }, 400);
    }, 3500);

}