const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

// abrir/fechar menu
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("active");
});

// fechar ao clicar fora
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
    menu.classList.remove("active");
  }
});

// fechar ao clicar em link
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

function lerPagina() {
  const texto = document.querySelector("section").innerText;
  
  const fala = new SpeechSynthesisUtterance(texto);
  fala.lang = "pt-BR";

  speechSynthesis.speak(fala);
}

function pararLeitura() {
  speechSynthesis.cancel();
}

function abrirTelaCheia() {
    let iframe = document.getElementById("gameFrame");

    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
    }
}

// impedir a página de subir com as setas
window.addEventListener("keydown", function(e) {
    if(["ArrowUp", "ArrowDown", " "].includes(e.key)) {
        e.preventDefault();
    }
});