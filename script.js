//selecionar elemento do document pelo ID
const animais = document.getElementById("animais");

//selecionar elemento pela class
const gridSection = document.getElementsByClassName("grid-section");

//selecionar elemento pela tag
const lista = document.getElementsByTagName("ul");

//querySelector seleciona da mesma forma que CSS com ex : ".animais"
// const animais = document.querySelector(".animais");

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const linkInterno = document.querySelector("[href^='#']");
console.log(linkInterno);

//Selecionar todos elementos que tiver a class
const animaisImg = document.querySelectorAll(".animais img");

console.log(animaisImg);

//DIferença entre estatico e ao vivo
//ao vivo atualiza na hora qualquer modificacao ex: getElements
//estatico nao atualiza ex: queryselector

const gridSectionHTML = document.getElementsByClassName("grid-section");

const gridSectionNode = document.querySelectorAll(".grid-section");

//querySelector tem forEach no get nao tem
//para acessar forEach no get tem que trasformar em um array
gridSectionNode.forEach(function (item, index) {
  console.log(item);
});

//trasformar em ARRAY para ter acessos a metodos de array

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function (item) {
  console.log(item);
});
