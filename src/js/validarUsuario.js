export function validarLogin(InfosRecebidas, emailLogin, senhaLogin) {

    const authEmail = emailLogin === InfosRecebidas.email ? true : false;
    const authSenha = senhaLogin === InfosRecebidas.senha ? true : false;

    console.log(authEmail);
    console.log(authSenha);
    return authEmail && authSenha ? true : false;
}

