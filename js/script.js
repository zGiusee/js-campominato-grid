// CREO LA FUNZIONE CHE FACCIA IL SINGOLO QUADRATO DELLA GRIGLIA
function createSquare(){

    const square = document.createElement('div');

    square.classList.add('square');

    return square;
}

// RECUPERO IL CONTENITORE DEI QUADRATI/GRIGLIA
const griglia = document.getElementById('griglia');


// ESEGUO UN CICLO CHE MOLTIPLICHI LA QUANTITà DI QUADRATI CHE VOGLIO AVERE NELLA GRIGLIA
for(let i = 0; i< 100 )
