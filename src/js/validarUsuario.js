export function validarLogin(InfosRecebidas, emailLogin, senhaLogin) {

    const authEmail = emailLogin === InfosRecebidas.email ? true : false;
    const authSenha = senhaLogin === InfosRecebidas.senha ? true : false;

    return authEmail && authSenha ? true : false;
}

