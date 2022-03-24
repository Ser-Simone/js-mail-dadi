/*Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo.Una volta terminato il controllo della mail, 
chiedere all'utente nel caso in cui la mail non fosse presente all'interno della lista, 
se la vuole aggiungere alla lista delle email accettate.
 Stampare la nuova lista di email accettate in console (oppure se volete provate in HTML).*/

// Dichiarazione delle variabili
let mail = prompt ("inserisci la tua mail");
let mailPresenti = ["matteo@gmail.com" , "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
let pippo=0;
let risposta;
// Condizioni
 
for (let i=0; i<mailPresenti.length; i++)
{
    if(mail == mailPresenti[i])
    {
        alert ("la tua mail è accettata")
        pippo=1
        break;
    }
   

}
if(pippo==0)
{
    alert ("la tua mail non è accettata");
    risposta = prompt("Vuoi inserire la tua mail?");
}
if ((risposta == 'Si') || (risposta == 'si'))
{
    let mailNuova = prompt("Inserisci la tua mail")
    mailPresenti.push(mailNuova)
    console.log(mailPresenti)
}

