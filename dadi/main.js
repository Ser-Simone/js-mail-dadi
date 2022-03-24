/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

// Dichiarazione delle variabili
const numeroGiocatore = Math.floor(Math.random(1) * 6);
const numeroPC = Math.floor(Math.random(1) * 6);
console.log(numeroGiocatore);
console.log(numeroPC);
// Condizioni
 
    if(numeroGiocatore>numeroPC)
    {
        alert ("Hai Vinto")
        
    }
    else if(numeroGiocatore<numeroPC)
    { 
        alert ("Hai Vinto il Computer")
    }
    else
    {
        alert ("Pareggio")
    }



