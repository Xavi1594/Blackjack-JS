
let deck = [];
const tipos = ['C','D','H','S' ]
const cartasEspeciales = ['A','J','Q','K']

let puntosJugador = 0;
puntosCpu = 0
const btnPedir = document.querySelector('#btnPedir')

const PuntosHtml = document.querySelectorAll('small')


const crearDeck = () => {

for (let i = 2; i <= 10; i++) {
    for ( let tipo of tipos) {
        deck.push( i + tipo);
    }
}
for (let tipo of tipos) {
    for (let esp of cartasEspeciales) {
        deck.push(esp + tipo);
    }
}
console.log(deck);
deck = _.shuffle( deck );
console.log(deck);
return deck;
}
crearDeck();

const pedirCarta = () => {
    if (deck.length=== 0) {
        throw 'No hay cartas en el deck'
        
    }

  const carta = deck.pop()
  return carta;
}

const valorCarta = (carta) => {

const valor = carta.substring(0, carta.length -1)
return ( isNaN(valor) ) ? 
        ( valor === 'A') ? 11 : 10
       : valor * 1
}

btnPedir.addEventListener('click', () => {

    const carta = pedirCarta()
     puntosJugador = puntosJugador + valorCarta(carta)
    PuntosHtml[0].innerText = puntosJugador;

    

})