const cpfInput = document.getElementById('cpfCadastro');
cpfInput.addEventListener('input', atualizarCampoCPF);

export default function checkInputs(inputsAVerificar, inputsAlterarEstiloAll, tipoTela) {
    
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