
const form = document.getElementById('form_atividade');
const contato = [];
const numero = [];


let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adcLinha();
    attTabela();
});

function adcLinha() {
    const inputNomeContato = document.getElementById('nome_contato');
    const inputNumeroContato = document.getElementById('numero_contato');

    if (numero.includes(parseFloat(inputNumeroContato.value))) {
        alert(`O numero: ${inputNumeroContato.value} ja esta cadastrado em outro contato`)
        inputNumeroContato = '';
    } else {
        contato.push(inputNomeContato.value);
        numero.push(parseFloat(inputNumeroContato.value));
        
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>'
    
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}
function attTabela () {
    const tabela = document.querySelector ('tbody');
    tabela.innerHTML = linhas
}
