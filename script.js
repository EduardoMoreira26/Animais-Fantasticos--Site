function initTabNav() {
  //Criacção de navegação pelo click do usuário nas imagens.
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    //função que inclui a classe ativo nas section e remove das outras
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });

      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao);
    }
    //evento para mudar class ativo nos itens pelo click
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

//Function que anima a FAQ list
function initAccordion() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  const activeClass = "ativo";

  if (accordionList.length) {
    //matendo sempre o primeiro elemento ativo
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    //adiciona ativo quando nao tem e remove quando tem
    //do primeiro e no proximo elemento
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    //evento de click
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

//function scroll suave
function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']"
  );

  function scrollToSection(event) {
    //linkando href com ID das section
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    //criando efeito scroll ate o topo
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    //forma alternativa
    // const topo = section.offsetTop;
    //efeito scroll passado por objeto
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  //adicionando um evento ao clique
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

//Function animação ao scroll
function initiAnimationScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    //variavel que calcula tamanho da tela para criar animação evitando tela em branco
    const windowMetade = window.innerHeight * 0.6;

    //function que calcula o topo da section com o scroll
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initiAnimationScroll();
