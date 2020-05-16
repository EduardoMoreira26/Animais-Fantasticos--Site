//Function animação ao scroll
export default function initiAnimationScroll() {
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
        else if (section.classList.contains("ativo")) {
          section.classList.remove("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}