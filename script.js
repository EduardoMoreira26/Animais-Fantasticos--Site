//Criacção de navegação pelo click do usuário nas imagens.
const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("ativo");
  //função que inclui a classe ativo nas secton e remove das outras
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }
  //evento para mudar class ativo nos itens pelo click
  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
