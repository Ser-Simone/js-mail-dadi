/*Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.*/

// Dichiarazione delle variabili
let mail = prompt ("inserisci la tua mail");
let mailPresenti = ["matteo@gmail.com" , "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
let pippo=0;
// Condizioni
 
for (let i=0; i<mailPresenti.length; i++)
{
    if(mail == mailPresenti[i])
    {
        alert ("la tua mail è accettata")
        break;
    }
    else
    { 
        pippo = 1
    }

}
if(pippo!=0)
{
    alert ("la tua mail non è accettata")
}

//document.getElementById("costo").innerHTML = costo;
