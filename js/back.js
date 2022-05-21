window.addEventListener('DOMContentLoaded', () => {

    let s = localStorage.getItem('dados');
    if (s) {
        dados = JSON.parse(s);
        preencheDados();
    }
});
const limpaDadosGeral = document.getElementById('limpaTudo');
limpaDadosGeral.addEventListener('click', function () {
    let limpa = confirm('Limpar Todos os Dados?'); {
        if (limpa) {
            localStorage.clear();
            window.location.reload();
        }
    }
})
let dados = new Array();


//Seleciona o formulario para enviar os dados
const confirma = document.querySelector('.confirma');
confirma.addEventListener('click', insereDados);
//Captura o local aonde os dados serão inseridos
const tbody = document.querySelector('tbody');

function insereDados() {
    //Limpa a tela e preenche posteriormente com o Preenche Dados
    tbody.innerHTML = ""
    let n = document.querySelector('.nome');
    let s = document.querySelector('.sobrenome');
    let t = document.querySelector('.telefone');
    let e = document.querySelector('.email');

    dados.push({
        'nome': n.value,
        'sobrenome': s.value,
        'telefone': t.value,
        'email': e.value
    });

    //Executa o preenchimento dos dados
    preencheDados();
    salvar();
    //Limpa os campos
    n.value = '';
    s.value = '';
    t.value = '';
    e.value = '';
}




function preencheDados() {
    tbody.innerHTML = ''
    //Cria o identificador do Array

    let linha = 0;
    dados.forEach((d) => {
        tbody.innerHTML +=
            `<tr >
                <td class="n">${d.nome}</td>
                <td class="s">${d.sobrenome}</td>
                <td class="t">${d.telefone}</td>
                <td class="e">${d.email}</td>
                <td>
                    <button type="button" class="editar" data-indexArray="${linha}"> U</button>
                    <button type="button" class="deletar" data-indexArray="${linha}"> D</button>
                    </td>
                    </tr>`
        linha++
    });
    updateDados()
}

let dataSet;


function updateDados() {
    const updateBtn = document.querySelectorAll('.editar');
    updateBtn.forEach((btnU) => {
        btnU.addEventListener("click", function () {
            //Captura o indice do botão;
            dataSet = parseInt(btnU.dataset.indexarray);
            configuraTela.classList.add('pop-modal');
            tabela.style.display = 'none';
            editaCampo();
        });
    });

    const deleteBtn = document.querySelectorAll('.deletar');
    deleteBtn.forEach((btnD) => {
        btnD.addEventListener("click", function () {
            //Captura o indice do botão;
            dataSet = parseInt(btnD.dataset.indexarray);
            deletaCampo();
        });
    });

}

const formEditar = document.querySelector('.modal-edita').children;

let nE = formEditar[0];
let sE = formEditar[1];
let tE = formEditar[2];
let eE = formEditar[3];
let confirmaEdicao = document.querySelector('.edita');

function editaCampo() {

    nE.value = dados[dataSet].nome;
    sE.value = dados[dataSet].sobrenome;
    tE.value = dados[dataSet].telefone;
    eE.value = dados[dataSet].email;
    confirmaEdicao.addEventListener('click', confirmaEditar);
}

function confirmaEditar() {

    dados[dataSet] = {
        'nome': nE.value,
        'sobrenome': sE.value,
        'telefone': tE.value,
        'email': eE.value
    }
    nE.value = '';
    sE.value = '';
    tE.value = '';
    eE.value = '';
    configuraTela.classList.remove('pop-modal');
    tabela.style.display = 'flex';
    preencheDados();
    salvar();
}

function deletaCampo() {
    let confirmarDeletar = confirm('Tem certeza?');
    if (confirmarDeletar) {
        dados.splice(dataSet, 1);
        preencheDados();
        salvar();
        if (dados.length === 0) {
            localStorage.clear();
            console.log(dados.length)
        }
    } else {
        preencheDados();
    }
}

/* Gravar na mémoria LOCAL/STORAGE */
function salvar() {
    localStorage.clear();
    let d = JSON.stringify(dados);
    console.log(d);
    localStorage.setItem('dados', d);
}