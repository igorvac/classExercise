class User{
    #password;
    #active;
    constructor(name, username, password, active){
        try{

            if (typeof(name) !== 'string') {
                throw "O nome não é uma string";
            }
            
            if (typeof(username) !== 'string') {
                throw "O username não é uma string"; 
            }

            if (password.lenght < 8) {
                throw "A senha tem mens de 8 caracteres";
            }

            if (typeof(active) === 'boolean') {
                throw "A atividade do usuário deve ser definido em verdadeiro e falso";
            }
        }

        catch(err){
            console.error(err);
        }

        this.name = name;
        this.username = username;
        this.#password = password;
        this.#active = active; 
    }

    isActive(){
        if (this.#active === true) {
            console.log("Usuário ativo");
        }
        else{
            console.log("Usuário inativo");
        }
    }

    login(usr, pass){
        if (usr === this.username && pass === this.#password) {
            return true;
        }
        else{
            return false;
        }
    }
}

class Cliente extends User{
    #saldo;
    constructor(saldo){
        this.#saldo = saldo;
    }

    deposit(vlr){
        this.#saldo += vlr;
    }

    saque(vlr){
        this.#saldo += vlr;
    }
}