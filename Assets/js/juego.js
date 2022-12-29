let deck = [];
const tipos = ["C", "D", "H", "S"];
const cartasEspeciales = ["A", "J", "Q", "K"];

let puntosJugador = 0;
puntosCpu = 0;
const btnPedir = document.querySelector("#btnPedir");
const btnPlantarse = document.querySelector("#btnPlantarse");

const divCartasJugador = document.querySelector("#jugador-cartas");
const divCartasCpu = document.querySelector("#cpu-cartas");

const PuntosHtml = document.querySelectorAll("small");

const crearDeck = () => {
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tipos) {
    for (let esp of cartasEspeciales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);

  return deck;
};
crearDeck();

const pedirCarta = () => {
  if (deck.length === 0) {
    throw "No hay cartas en el deck";
  }

  const carta = deck.pop();
  return carta;
};

const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};

//TURNO CPU
const turnoCpu = (puntosMinimos) => {
  do {
    const carta = pedirCarta();

    puntosCpu = puntosCpu + valorCarta(carta);
    PuntosHtml[1].innerText = puntosCpu;

    const imgCarta = document.createElement("img");
    imgCarta.src = `Assets/Cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasCpu.append(imgCarta);

    if (puntosMinimos >= 21) {
      break;
    }
  } while (puntosCpu < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosCpu === puntosMinimos) {
      alert("Empate");
    } else if (puntosMinimos > 21) {
      alert("Gana la Cpu");
    } else if (puntosCpu > 21) {
      alert("Gana jugador 1");
    } else {
      alert("Gana la cpu");
    }
  }, 60);
};

btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();
  puntosJugador = puntosJugador + valorCarta(carta);
  PuntosHtml[0].innerText = puntosJugador;

  const imgCarta = document.createElement("img");
  imgCarta.src = `Assets/Cartas/${carta}.png`;
  imgCarta.classList.add("carta");
  divCartasJugador.append(imgCarta);

  if (puntosJugador > 21) {
    {
    }
    btnPedir.disabled = true;
    btnPlantarse.disabled = true;
    turnoCpu(puntosJugador);
  } else if (puntosJugador === 21) {
    btnPedir.disabled = true;
    btnPlantarse.disabled = true;
    turnoCpu(puntosJugador);
  }
});

btnPlantarse.addEventListener("click", () => {
  btnPedir.disabled = true;
  btnPlantarse.disabled = true;
  turnoCpu(puntosJugador);
});
btnNuevo.addEventListener("click", () => {
    
  deck = crearDeck();

  puntosJugador = 0;
  puntosCpu = 0;
  PuntosHtml[0].innerText = 0
  PuntosHtml [1].innerText = 0
  divCartasCpu.innerHTML = '';
  divCartasJugador.innerHTML = ''
  btnPedir.disabled = false;
  btnPlantarse.disabled = false;
  
});
