//Function que anima a FAQ list
export default function initAccordion() {
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
