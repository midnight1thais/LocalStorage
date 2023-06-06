const USUARIO = document.getElementById('usuario');
const SENHA = document.getElementById('senha');
const BOTAO = document.querySelector('.submit');


BOTAO.addEventListener('click', function(){
    let usuarioSalvo = window.localStorage.getItem('usuario');
    let usuarioAtual = USUARIO.value;

    let senhaSalvo = window.localStorage.getItem('senha');
    let senhaAtual = SENHA.value;

    if(usuarioAtual === usuarioSalvo && senhaAtual === senhaSalvo){
        window.location.href = '../Entrar/entrar.html'
    }else{
        alert("Usuário ou Senha incorretos")
    }
})