    //Captura o botão de inserir
    const insereModal = document.getElementById('insere');    
    const tabela = document.querySelector('.tabela-center');

    insereModal.addEventListener('click', carregaModal)


    
    //Função para Carregar o modal de inserção na tela
    function carregaModal() {
        //container-central
        //modal-insere
        // const container = document.querySelector('.container-central');
        const modal = document.querySelector('.modal-insere');
        modal.classList.add('pop-modal');
        tabela.style.display = 'none';

        const fecharModal = modal.querySelector('.close-btn');
        fecharModal.addEventListener('click', () => {
            modal.classList.remove('pop-modal');
            tabela.style.display = 'flex'
        })
        const btnModal = modal.querySelector('.confirma');

        btnModal.addEventListener('click', confirmacao);

        function confirmacao() {
            let confirma = modal.querySelector('.textConfirma');
            console.log(confirma)
            confirma.style.display = 'block';
            setTimeout(() => {
                confirma.style.display = 'none';
            }, 850);
            editarModal()
        }
    }


    /*----------------------EDITAR  dados modal -----------------------*/

    function editarModal() {
        const btnEditarDados = document.querySelector('.editar');
        btnEditarDados.addEventListener('click',abreModalEditar)

    }

    function abreModalEditar(){
        const modalEditar = document.querySelector('.modal-edita');
        modalEditar.classList.add('pop-modal');
        tabela.style.display = 'none'
    }


    /*--------------------------------------------------------------*/