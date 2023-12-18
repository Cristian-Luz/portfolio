
const buttonNav = document.getElementById("button-nav");
const barraNavegacao = document.getElementById("barra-navegacao");

buttonNav.addEventListener("click", function() {
  if (barraNavegacao.style.display === "flex") {
    barraNavegacao.style.display = "none";
  } else {
    barraNavegacao.style.display = "flex";
  }
});

// Função para verificar a largura da tela e definir o display com base nela
function checkScreenWidth() {
  if (window.innerWidth > 920) {
    barraNavegacao.style.display = "flex";
  } else {
    barraNavegacao.style.display = "none";
  }
}

// Adicione um ouvinte de mídia para verificar a largura da tela
window.addEventListener("resize", checkScreenWidth);

// Execute a função no carregamento da página para definir o estado inicial
window.addEventListener("load", checkScreenWidth);







