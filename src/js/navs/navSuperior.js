import select from "../components/select.js";

select();

const infoArmazenada = localStorage.getItem('infosCadastro');
const vetorRecebido = JSON.parse(infoArmazenada);
document.getElementById('nome_usuario').textContent = vetorRecebido[0];
