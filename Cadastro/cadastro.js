const EMAIL = document.getElementById('email');
const SENHA = document.getElementById('senha');
const NOME = document.getElementById('nome');
const NASCIMENTO = document.getElementById('dataNascimento');
let CONFIRMA_SENHA = document.getElementById('confirmaSenha');

const BOTAO = document.querySelector('.submit');

window.localStorage.clear() // 

BOTAO.addEventListener('click', function(){

    if(SENHA.value === CONFIRMA_SENHA.value && SENHA.value != ''){
        window.localStorage.setItem('usuario', EMAIL.value);
        window.localStorage.setItem('senha', SENHA.value);
        window.localStorage.setItem('dataNascimento', NASCIMENTO.value);
        window.localStorage.setItem('nome', NOME.value);

        window.location.href = '../Entrar/entrar.html'
        console.log(window.location.href);
    }else{
        alert("Senhas não combinam");
    }

})