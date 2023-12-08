import select from "../components/select.js";

select();

try{
    const infoArmazenada = localStorage.getItem('infosCadastro');
    const vetorRecebido = JSON.parse(infoArmazenada);
    document.getElementById('nome_usuario').textContent = vetorRecebido[0];
}catch{
    alert('problema no cadastro!')
}