var infosUser;

function btnCadastrar() {
    
    let nome = document.querySelector('#nomeCadastro');
    let email = document.querySelector('#emailCadastro');
    let senha = document.querySelector('#senhaCadastro');
    let cpf = document.querySelector('#cpfCadastro');

    infosUser = [nome.value, email.value, senha.value, cpf.value]

    nome.value = "";
    email.value = "";
    senha.value = "";
    cpf.value = "";

    alert("Cadastrado!");

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

function authLogin(emailLogin, senhaLogin) {

    const authEmail = emailLogin.value == infosUser[1] ? true : false;
    const authSenha = senhaLogin.value == infosUser[2] ? true : false;

    const authFull = authEmail && authSenha ? true : false;

    return authFull;
}

