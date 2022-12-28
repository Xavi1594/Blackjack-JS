
let deck = [];
const tipos = ['C','D','H','S' ]
const cartasEspeciales = ['A','J','Q','K']

const crearDeck = () => {
for (let i = 2; i <= 10; i++) {
    for ( tipo of tipos) {
        deck.push( i + 'tipo');
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