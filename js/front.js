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
            editarModal()
            let confirma = modal.querySelector('.textConfirma');
            confirma.style.display = 'block';
            setTimeout(() => {
                confirma.style.display = 'none';
            }, 850);


        }
    }


    /*----------------------EDITAR  dados modal -----------------------*/
    const configuraTela = document.querySelector('.configsAparencia');
    console.log(configuraTela);
    function editarModal(){
        let botoesEditar = document.querySelectorAll('.editar');
        console.log(botoesEditar);
        botoesEditar.forEach((bE)=>{
            bE.addEventListener('click',function(){
                configuraTela.classList.add('pop-modal');
                tabela.style.display = 'none';
            })
        });
        const fecharModal = configuraTela.querySelector('.close-btn');
        fecharModal.addEventListener('click', () => {
            configuraTela.classList.remove('pop-modal');
            tabela.style.display = 'flex'
           
        })
    }

    /*--------------------------------------------------------------*/