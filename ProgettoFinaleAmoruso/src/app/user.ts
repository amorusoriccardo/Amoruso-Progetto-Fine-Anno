export class Utente
{
    username : String;
    password : String;
    email : String;
    nome : String;
    cognome: String;
    constructor()

    constructor(username : String,
        password : String,
        email : String,
        nome : String,
        cognome: String)

    constructor(username? : String,
        password? : String,
        email? : String,
        nome? : String,
        cognome?: String)
        {
            this.username = username;
            this.password = password;
            this.email = email;
            this.nome = nome;
            this.cognome = cognome;
        }
}
