
let deck = [];
const tipos = ['C','D','H','S' ]
const cartasEspeciales = ['A','J','Q','K']

const crearDeck = () => {
for (let i = 2; i <= 10; i++) {
    for ( tipo of tipos) {
        deck.push( i + 'tipo');
        
    }


}
console.log(deck);
}
crearDeck()