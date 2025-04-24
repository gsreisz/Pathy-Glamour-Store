let motherColor = true;

function colorChange() {
const button = document.getElementById('btncolor');
if (motherColor) {
    document.body.style.backgroundColor = 'black';
    document.getElementById('masculino').style.color = 'white'
    document.getElementById('feminino').style.color = 'white'
    document.getElementById('bolsa').style.color = 'white'
    document.getElementById('scroll-destaque').style.color = 'white'
    document.getElementById('contato-text').style.color = 'white'
    document.getElementById('copyright').style.color = 'white'
    const listLength = document.getElementsByClassName('item-destaque').length 
    const list = document.getElementsByClassName('item-destaque')
    // (declaração e criação de variavel index que guarda valor inicial) ; (condição para manter o laço de repetição aberto) ; (ação a ser tomada após fim do ciclo)
    for( let index = 0 ; index < listLength ; index ++) {
    list[index].children[2].style.color = 'white'
    list[index].children[3].style.color = 'white'
    }
}
else {
    document.body.style.backgroundColor = 'white';
    document.getElementById('masculino').style.color = '#6f2438'
    document.getElementById('feminino').style.color = '#6f2438'
    document.getElementById('bolsa').style.color = '#6f2438'
    document.getElementById('scroll-destaque').style.color = '#6f2438'
    document.getElementById('contato-text').style.color = 'white'
    const listLength = document.getElementsByClassName('item-destaque').length 
    const list = document.getElementsByClassName('item-destaque')
    // (declaração e criação de variavel index que guarda valor inicial) ; (condição para manter o laço de repetição aberto) ; (ação a ser tomada após fim do ciclo)
    for( let index = 0 ; index < listLength ; index ++) {
    list[index].children[2].style.color = '#6f2438'
    list[index].children[3].style.color = '#6f2438'
    }
}
motherColor = !motherColor;
}

    let currentIndex = 0;
    const banners = document.querySelectorAll('.banners img');

    function showNextBanner() {
    banners[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % banners.length;
    banners[currentIndex].classList.add('active');
}

setInterval(showNextBanner, 5000); // Muda a imagem a cada 5 segundos

// Função para cadastrar usuário
    document.getElementById('formCadastro')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('cadastroEmail').value;
    const senha = document.getElementById('cadastroSenha').value;

    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html';
});

// Função para efetuar login
    document.getElementById('formLogin')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const bancoEmail = localStorage.getItem('email');
    const bancoSenha = localStorage.getItem('senha');

if (email === bancoEmail && senha === bancoSenha) {
        window.location.href = 'index.html';
    } 
else {
        alert('Email ou senha incorretos!');
    }
});

// Função para mostrar informações do usuário na página principal
    if (document.getElementById('profileInfo')) {
    const email = localStorage.getItem('email');
}    
