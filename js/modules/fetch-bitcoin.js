export default function initFetchBitcoin() {
  const span = document.querySelector(".btc-preco");


fetch("https://blockchain.info/ticker")
.then(r => r.json())
.then(bitcoin => {
  
  span.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
}).catch(erro => {
  Error(erro);
})
}







