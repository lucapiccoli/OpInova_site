// Espera o carregamento da página
window.onload = function() {
    var postagens = document.querySelectorAll('.postagem');
    
    // Adiciona a animação de fade-in nas postagens
    for (var i = 0; i < postagens.length; i++) {
        setTimeout(function(i) {
            postagens[i].classList.add('fade-in');
        }, 500 * i, i);
    }

    // Seleciona todas as imagens do slider
    var slides = document.querySelectorAll('.slide');
    var currentIndex = 0;

    // Função para mostrar a imagem ativa
    function showSlide(index) {
        slides.forEach(function(slide, i) {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    // Função que detecta a rolagem e move as imagens
    window.onscroll = function() {
        var scrollPosition = window.scrollY;
        var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        
        // Calcular qual imagem mostrar com base na rolagem
        var index = Math.floor((scrollPosition / maxScroll) * slides.length);
        
        // Atualiza o slide com base no índice calculado
        showSlide(index);
    };

    // Inicializa o slider com a primeira imagem visível
    showSlide(currentIndex);
};
