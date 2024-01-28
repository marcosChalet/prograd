const elementosNav = document.getElementById("nav--js");
const navLinks = elementosNav.getElementsByTagName("a");

const elementosConteudo = document.getElementById("content--js");
const listaConteudo = elementosConteudo.getElementsByTagName("div");

function mudaEstiloNav(item, servicoClicado) {
  item.style.backgroundColor = "#d1d5db";
  item.style.color = "#9ca3af";
  if (item.getAttribute("href") === "#" + servicoClicado.toUpperCase()) {
    item.style.backgroundColor = "#2563eb";
    item.style.color = "white";
  }
}

function mudaConteudo(listaConteudo, servicoClicado) {
  for (i = 0; i < listaConteudo.length; i++) {
    if (listaConteudo[i].id) {
      listaConteudo[i].style.display = "none";
      if (listaConteudo[i].id === servicoClicado) {
        listaConteudo[i].style.display = "flex";
        listaConteudo[i].style.flexDirection = "column";
      }
    }
  }
}

function atualizaServico(servicoClicado) {
  for (i = 0; i < navLinks.length; i++) {
    mudaEstiloNav(navLinks[i], servicoClicado);
  }
  mudaConteudo(listaConteudo, servicoClicado);
}
