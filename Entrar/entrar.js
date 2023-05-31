const usuarioSalvo = window.localStorage.getItem('nome');
let texto = document.querySelector('h2');

texto.textContent = 'Olá, ' + usuarioSalvo;
