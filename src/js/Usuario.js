export class Usuario {

    constructor(infos = new Infos(nome, cpf), senha, email) {
        this.classInfos = infos;
        this._senha = senha;
        this._email = email;
    }

    get senha() {
        return this._senha;
    }
    set senha(value) {
        this._senha = value;
    }

    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }

}

export class Infos {

    constructor(nome, cpf) {
        this._nome = nome;
        this._cpf = cpf;
    }

    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    
    get cpf() {
        return this._cpf;
    }
    set cpf(value) {
        this._cpf = value;
    }

}