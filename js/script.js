// CREO LA FUNZIONE CHE FACCIA IL SINGOLO QUADRATO DELLA GRIGLIA
function createSquare(num){

    // Creo il quadrato
    const square = document.createElement('div');

    // Aggiungo la classe di presonalizzazione
    square.classList.add('square');

    // Aggiungo il numero dentro il quadrato 
    square.innerText = num;

    // BONUS AL CLICK CAMBIA COLORE

    // Faccio tornare il risultato
    return square;
}

// RECUPERO IL CONTENITORE DEI QUADRATI/GRIGLIA
const griglia = document.getElementById('griglia');


// ESEGUO UN CICLO CHE MOLTIPLICHI LA QUANTITà DI QUADRATI CHE VOGLIO AVERE NELLA GRIGLIA
for(let i = 0; i< 100; i++){

    // Richiamo la funzione con la variabile square
    let square = createSquare(i+1);

    // Appendo i quadrati alla griglia
    griglia.appendChild(square);
}
