import { validarLogin } from './validarUsuario.js';

const btnCadastrarObj = document.getElementById('btnCadastrar');
const irLoginObj = document.getElementById('irLogin');
const btnEntrarObj = document.getElementById('btnEntrar');
const irCadastroObj = document.getElementById('irCadastro');

btnCadastrarObj.addEventListener('click', btnCadastrar);
irLoginObj.addEventListener('click', irLogin);
btnEntrarObj.addEventListener('click', btnEntrar);
irCadastroObj.addEventListener('click', irCadastro);

const cpfInput = document.getElementById('cpfCadastro');
cpfInput.addEventListener('input', atualizarCampoCPF);

function btnCadastrar() {

    let nome = document.querySelector('#nomeCadastro');
    let email = document.querySelector('#emailCadastro');
    let senha = document.querySelector('#senhaCadastro');
    let cpf = document.querySelector('#cpfCadastro');

    let infosUser = [nome.value, email.value, senha.value, cpf.value];

    const inputsAlterarEstiloCadastroAll = document.querySelectorAll('#InputTCadastro'); 

    if(checkInputs(infosUser, inputsAlterarEstiloCadastroAll, 1) && validarLogin()) {

        nome.value = "";
        email.value = "";
        senha.value = "";
        cpf.value = "";
        
        cadastrado();
    }
    
}

function cadastrado() {
    
    let notifyInicial = document.querySelector('#on_of_notify');
    notifyInicial.style = "display: flex;";

    setTimeout(function () {
        notifyInicial.style = "display: none;";
    }, 3500);

    irLogin();
}

function btnEntrar() {

    let email = document.querySelector('#emailLogar');
    let senha = document.querySelector('#senhaLogar');

    let infosUser = [email.value, senha.value];
    const inputsAlterarEstiloLoginAll = document.querySelectorAll('#InputTLogin'); 

    if(checkInputs(infosUser, inputsAlterarEstiloLoginAll, 2)) {
    
        email.value = "";
        senha.value = "";
        logado();
    
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

function checkInputs(inputsAVerificar, inputsAlterarEstiloAll, tipoTela) {
    
    let inputsProntosVerificar;
    inputsProntosVerificar = removerEspacos(inputsAVerificar);

    let posicaoEmail, posicaoSenha;

    if (tipoTela == 1) {
        posicaoEmail = 1;
        posicaoSenha = 2;
    }else if(tipoTela == 2) {
        posicaoEmail = 0;
        posicaoSenha = 1;
    }

    if(!verificarInputVazio(inputsProntosVerificar, inputsAlterarEstiloAll)) {
        return false;
    }

    if(!verificarInputEmail(inputsProntosVerificar[posicaoEmail], inputsAlterarEstiloAll[posicaoEmail])) {
        return false;
    }

    if(!verificarInputSenha(inputsProntosVerificar[posicaoSenha], inputsAlterarEstiloAll[posicaoSenha])) {
        return false;
    }

    if(!verificarInputTamanho(inputsProntosVerificar, inputsAlterarEstiloAll)) {
        return false;
    }

    if(tipoTela == 1) {
        if(!verificarInputTamanhoCpf(inputsProntosVerificar[3], inputsAlterarEstiloAll[3])) {
            return false;
        }
    }

    return true;
}

function formatarCPF(cpf) {

    cpf = cpf.replace(/\D/g, '');

    if (cpf.length > 11) {
        cpf = cpf.substring(0, 11);
    }

    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  
    return cpf;
}

function atualizarCampoCPF() {

    cpfInput.value = formatarCPF(cpfInput.value);

}

function removerEspacos(inputsAVerificar) {

    for(let i = 0; i < inputsAVerificar.length; i++) {
        
        inputsAVerificar[i] = (inputsAVerificar[i]).replace(/\s/g, "");
    
    }

    return inputsAVerificar;
}

function verificarInputVazio(inputsProntosVerificar, inputsAlterarEstilo) {
    
    let camposVerificados = true; 

    for(let i = 0; i < inputsProntosVerificar.length; i++) {
        if(inputsProntosVerificar[i] === '') {
            inputsAlterarEstilo[i].style.borderColor = "red";
            camposVerificados = false;
        }else {
            inputsAlterarEstilo[i].style.borderColor = "#3A4149";
        }
    }

    return camposVerificados;
}

function verificarInputEmail(inputEmail, inputAlterarEstilo) {

    if (inputEmail.indexOf("@") !== -1 && inputEmail.indexOf(".") !== -1) {  
        inputAlterarEstilo.style.borderColor = "#3A4149";
    }else {
        inputAlterarEstilo.style.borderColor = "red";
        return false;
    }

    return true;
}

function verificarInputSenha(inputSenha, inputAlterarEstilo) {

    if (inputSenha.length >= 5) {  
        inputAlterarEstilo.style.borderColor = "#3A4149";
    }else {
        inputAlterarEstilo.style.borderColor = "red";
        return false;
    }

    return true;
}

function verificarInputTamanho(inputsProntosVerificar, inputsAlterarEstilo) {
    
    let camposVerificados = true; 

    for(let i = 0; i < inputsProntosVerificar.length; i++) {
        if(inputsProntosVerificar[i].length > 50) {
            inputsAlterarEstilo[i].style.borderColor = "red";
            camposVerificados = false;
        }else {
            inputsAlterarEstilo[i].style.borderColor = "#3A4149";
        }
    }

    return camposVerificados;
}

function verificarInputTamanhoCpf(inputCPF, AlterarEstilo) {

    if(inputCPF.length < 11) {
        AlterarEstilo.style.borderColor = "red";
        return false;
    }else {
        AlterarEstilo.style.borderColor = "#3A4149";
        return true;
    }

}

function authLogin(emailLogin, senhaLogin) {

    const authEmail = emailLogin.value == infosUser[1] ? true : false;
    const authSenha = senhaLogin.value == infosUser[2] ? true : false;

    const authFull = authEmail && authSenha ? true : false;

    return authFull;
}

function mostrarCampoPersonalizado(selectElement) {
  
    const campoPersonalizado = document.getElementById('campoPersonalizado');
  const frutaPersonalizadaInput = document.getElementById('frutaPersonalizada');

  if (selectElement.value === 'personalizado') {
    campoPersonalizado.style.display = 'block';
    frutaPersonalizadaInput.required = true;
  } else {
    campoPersonalizado.style.display = 'none';
    frutaPersonalizadaInput.required = false;
  }

}