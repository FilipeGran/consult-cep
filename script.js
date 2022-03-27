const form = document.querySelector('form');
const conteudoCep = document.querySelector('.conteudo-cep');
const conteudo = document.querySelector('.conteudo');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validator.validatorSubmit()) {
        limparArea();
        carregarCep(input.value);
    }
});

async function carregarCep(cep) {
    cep = cep.replace('-', '');
    const retornoCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const json = await retornoCep.json();
    if (json.erro !== true) {
        mostrarCepTela(json);
    }
}

function mostrarCepTela(json) {
    const elementoCep = document.createElement('div');
    const logradouro = document.createElement('div');
    const complemento = document.createElement('div');
    const bairro = document.createElement('div');
    const localidade = document.createElement('div');
    const uf = document.createElement('div');
    elementoCep.innerText = `CEP: ${json.cep}`;
    logradouro.innerText = `Logradouro: ${json.logradouro}`;
    complemento.innerText = `Complemento: ${json.complemento}`;
    bairro.innerText - `Bairro: ${json.bairro}`;
    localidade.innerText = `Cidade: ${json.localidade}`;
    uf.innerText = `UF: ${json.uf}`;
    conteudo.appendChild(elementoCep);
    conteudo.appendChild(logradouro);
    conteudo.appendChild(complemento);
    conteudo.appendChild(bairro);
    conteudo.appendChild(localidade);
    conteudo.appendChild(uf);
}

function limparArea() {
    conteudo.innerHTML = '';
}