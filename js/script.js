// Efeito de Fade nas Postagens
window.onload = function() {
    var postagens = document.querySelectorAll('.postagem');
    
    // Adicionar a classe de fade-in com um pequeno delay para cada postagem
    for (let i = 0; i < postagens.length; i++) {
        setTimeout(function() {
            postagens[i].classList.add('fade-in');
        }, 500 * i);  // Atraso de 500ms por postagem
    }
};

// Slider automático para a primeira postagem
var slides = document.querySelectorAll('.slide2'); // Seleciona todas as imagens
var currentIndex = 0; // Índice do slide atual

function showSlide(index) {
    slides.forEach(function(slide, i) {
        slide.classList.remove('active'); // Remove a classe 'active' de todas as imagens
        if (i === index) {
            slide.classList.add('active'); // Adiciona a classe 'active' à imagem atual
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Incrementa o índice e reinicia quando chega no final
    showSlide(currentIndex); // Exibe o slide atual
}

showSlide(currentIndex); // Exibe o primeiro slide
setInterval(nextSlide, 3000); // Muda de imagem a cada 3 segundos

// Slider com navegação manual para a segunda postagem
var currentIndex2 = 0; // Índice da imagem na segunda postagem
var slides2 = document.querySelectorAll('.postagem:nth-of-type(2) .slide'); // Seleciona todas as imagens da segunda postagem

function showSlide2(index) {
    if (index >= slides2.length) {
        currentIndex2 = 0; // Se chegar ao final, começa do primeiro slide
    } else if (index < 0) {
        currentIndex2 = slides2.length - 1; // Se chegar ao começo, vai para o último slide
    } else {
        currentIndex2 = index;
    }
    
    // Ajustar a posição das imagens com base no índice atual
    document.querySelector('.slider-images').style.transform = 'translateX(' + (-currentIndex2 * 100) + '%)';
}

// Função para mover para o slide anterior ou próximo
function moveSlide(direction) {
    showSlide2(currentIndex2 + direction); // Atualiza o índice com base na direção
}

// Inicializar o slider
showSlide2(currentIndex2);

// Slider com navegação manual para a terceira postagem
var currentIndex3 = 0; // Índice da imagem na terceira postagem
var slides3 = document.querySelectorAll('.postagem:nth-of-type(3) .slide3'); // Seleciona todas as imagens da terceira postagem

function showSlide3(index) {
    if (index >= slides3.length) {
        currentIndex3 = 0; // Se chegar ao final, começa do primeiro slide
    } else if (index < 0) {
        currentIndex3 = slides3.length - 1; // Se chegar ao começo, vai para o último slide
    } else {
        currentIndex3 = index;
    }
    
    // Ajustar a posição das imagens com base no índice atual
    document.querySelector('.slider-images3').style.transform = 'translateX(' + (-currentIndex3 * 100) + '%)';
}

// Função para mover para o slide anterior ou próximo
function moveSlide3(direction) {
    showSlide3(currentIndex3 + direction); // Atualiza o índice com base na direção
}

// Inicializar o slider
showSlide3(currentIndex3);
