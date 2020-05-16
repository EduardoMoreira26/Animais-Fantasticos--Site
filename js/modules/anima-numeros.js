//Function que anima a FAQ list
export default function initAnimaNumeros() {
  function animaNumeros() {

    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100); //faz com que os numeros cheguem ao total no mesmo time

      let start = 0;


      const timer = setInterval(() => {
        start = start + incremento;
        numero.innerText = start; //inicia o numero com 0
        if (start > total) {
          numero.innerText = total; //iguala o numero ao completar 
          clearInterval(timer);
        }
      }, 25 * Math.random())
    })
  }


  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }


  const alvoObservado = document.querySelector(".numeros");

  const observer = new MutationObserver(handleMutation);

  observer.observe(alvoObservado, {
    attributes: true
  });
}