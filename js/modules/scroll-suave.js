//function scroll suave
export default function initScrollSuave() {
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
