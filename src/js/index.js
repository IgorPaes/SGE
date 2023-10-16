function btnCadastrar() {
    
    let nome = document.querySelector('#nomeCadastro');
    let email = document.querySelector('#emailCadastro');
    let senha = document.querySelector('#senhaCadastro');
    let cpf = document.querySelector('#cpfCadastro');

    let infosUser = [nome.value, email.value, senha.value, cpf.value];

    senha.value = "";

    if(checkInputs(infosUser)) {
        nome.value = "";
        email.value = "";
        cpf.value = "";
        cadastrado();
    }

}

function cadastrado() {
    
    alert("Cadastrado!");
    irLogin();

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

function checkInputs(inputsAVerificar) {
    
    let inputsProntosVerificar;
    inputsProntosVerificar = removerEspacos(inputsAVerificar);

    const inputsAlterarEstiloCadastroAll = document.querySelectorAll('#InputTCadastro'); 

    if(!verificarInputVazio(inputsProntosVerificar, inputsAlterarEstiloCadastroAll)) {
        return false;
    }

    if(!verificarInputEmail(inputsProntosVerificar[1], inputsAlterarEstiloCadastroAll[1])) {
        return false;
    }

    // return cpf.replace(/[^\d]/g, "");

    return true;
}

function btnLogar() {

    const emailLogin = document.querySelector('#emailLogar');
    const senhaLogin = document.querySelector('#senhaLogar');    

    const autenticado = authLogin(emailLogin, senhaLogin);

    if(autenticado) { 
        alert("Autenticado!");
    }else {
        alert("Login ou senha incorreto!");
        emailLogin.value = "";
        senhaLogin.value = "";
    }

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

function authLogin(emailLogin, senhaLogin) {

    const authEmail = emailLogin.value == infosUser[1] ? true : false;
    const authSenha = senhaLogin.value == infosUser[2] ? true : false;

    const authFull = authEmail && authSenha ? true : false;

    return authFull;
}