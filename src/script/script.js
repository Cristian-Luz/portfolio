/*CARROSEL*/
/*----------------------------------------------------------------------------------------------*/

const scrollLeftButton = document.getElementById("scrollLeftButton");
const tecBox = document.getElementById("tec-box");
const scrollRightButton = document.getElementById("scrollRightButton");

const scrollAmount = 194; 

scrollLeftButton.addEventListener("click", function() {
  tecBox.scrollLeft -= scrollAmount;
});

scrollRightButton.addEventListener("click", function() {
  tecBox.scrollLeft += scrollAmount;
});

const scrollLeftButtonProjetos = document.getElementById("scrollLeftButtonProjetos");
const scrollRightButtonProjetos = document.getElementById("scrollRightButtonProjetos");
const projetos = document.getElementById("projetos");
const scrollAmountProjetos = 388;


scrollLeftButtonProjetos.addEventListener("click", function() {
  projetos.scrollLeft -= scrollAmountProjetos;
});

scrollRightButtonProjetos.addEventListener("click", function() {
  projetos.scrollLeft += scrollAmountProjetos;
});

const scrollLeftButtonSkill = document.getElementById("scrollLeftButtonSkill");
const scrollRightButtonSkill = document.getElementById("scrollRightButtonSkill");
const skillsbox = document.getElementById("skillsbox");
const scrollAmountSkill = 388;

scrollLeftButtonSkill.addEventListener("click", function() {
  skillsbox.scrollLeft -= scrollAmountSkill;
});

scrollRightButtonSkill.addEventListener("click", function() {
  skillsbox.scrollLeft += scrollAmountSkill;
});

/*CARROSEL*/
/*----------------------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function () {
    var tecBox = document.getElementById('tec-box');
    var isDragging = false;
    var startPosition = 0;
    var startScrollLeft = 0;

    tecBox.addEventListener('mousedown', function (event) {
        if (event.button === 0) {
            // Se o botão esquerdo do mouse foi pressionado
            if (event.target.tagName.toLowerCase() === 'img') {
                // Se o clique foi diretamente na imagem
                return; // Não inicia o arraste, permitindo a abertura do link
            }

            isDragging = true;
            startPosition = event.clientX;
            startScrollLeft = tecBox.scrollLeft;
            tecBox.style.cursor = 'grabbing';

            // Impede a seleção de texto durante o arrasto
            document.body.style.userSelect = 'none';

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        }
    });

    function onMouseMove(event) {
        if (isDragging) {
            var delta = event.clientX - startPosition;
            tecBox.scrollLeft = startScrollLeft - delta;
        }
    }

    function onMouseUp() {
        if (isDragging) {
            isDragging = false;
            tecBox.style.cursor = 'grab';

            // Restaura a capacidade de seleção de texto após o arrasto
            document.body.style.userSelect = '';

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth',
              });
          }
      });
  });
});








