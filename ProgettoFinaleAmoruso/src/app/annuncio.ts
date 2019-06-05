import {Commento} from './commento';
export class Annuncio
{
    username: String;
    data: String;
    titolo: String;
    descrizione : String;
    risposte : Commento[];
    constructor(un : String, d : String, t : String, des : String, ris : Commento[])
    {
        this.username = un;
        this.data = d;
        this.titolo = t;
        this.descrizione = des;
        this.risposte = ris;
    }
}
