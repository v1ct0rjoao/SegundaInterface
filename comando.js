const menuIcon = document.querySelector(".icone-opcoes");
const menu = document.querySelector(".menu");
const aba1 = document.querySelector('.aba-1');
const aba2 = document.querySelector('.aba-2');
const aba3 = document.querySelector('.aba-3');

const documentos = document.querySelector(".pagina-processamento");
const documentosAtualizacao = document.querySelector(".pagina-atualizacao");
const documentosAutorizacao = document.querySelector(".pagina-autorizacao");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuIcon.classList.toggle('abrir');
  if (documentos.classList.contains('aba-1')) {
    documentos.classList.remove('aba-1');
  }
  if (documentosAtualizacao.classList.contains('aba-2')) {
    documentosAtualizacao.classList.remove('aba-2');
  }
  if (documentosAutorizacao.classList.contains('aba-3')) {
    documentosAutorizacao.classList.remove('aba-3');
  }
});

const closeMenuLink = document.querySelector(".fecha-menu");
closeMenuLink.addEventListener("click", () => {
  menu.classList.remove("open");
  menuIcon.classList.remove("abrir");
});

const botaoDoccumentosProcessados = document.querySelector(".aba-1");
botaoDoccumentosProcessados.addEventListener("click", () => {
  if (!documentos.classList.contains('aba-1')) {
    documentos.classList.add('aba-1');
    documentosAtualizacao.classList.remove('aba-2');
    documentosAutorizacao.classList.remove('aba-3');
    menu.classList.remove("open");
    menuIcon.classList.remove("abrir");
  }
});

const botaoAtualizacao = document.querySelector(".aba-2");
botaoAtualizacao.addEventListener("click", () => {
  if (!documentosAtualizacao.classList.contains('aba-2')) {
    documentosAtualizacao.classList.add('aba-2');
    documentos.classList.remove('aba-1');
    documentosAutorizacao.classList.remove('aba-3');
    menu.classList.remove("open");
    menuIcon.classList.remove("abrir");
  }
});

const botaoAutorizada = document.querySelector(".aba-3");
botaoAutorizada.addEventListener("click", () => {
  if (!documentosAutorizacao.classList.contains('aba-3')) {
    documentosAutorizacao.classList.add('aba-3');
    documentos.classList.remove('aba-1');
    documentosAtualizacao.classList.remove('aba-2');
    menu.classList.remove("open");
    menuIcon.classList.remove("abrir");
  }
});