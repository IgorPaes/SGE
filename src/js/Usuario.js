export class Usuario {
    
    #classInfos;
    #senha;
    #email;

    constructor(infos = new InfosUsuario(nome, cpf), senha, email) {
        this.#classInfos = infos;
        this.#senha = senha;
        this.#email = email;
    }

    get senha() {
        return this.#senha;
    }
    set senha(value) {
        this.#senha = value;
    }

    get email() {
        return this.#email;
    }
    set email(value) {
        this.#email = value;
    }

    get classInfos() {
        return this.#classInfos;
    }
    set classInfos(value) {
        this.#classInfos = value;
    }

}

export class InfosUsuario {

    #nome;
    #cpf;

    constructor(nome, cpf) {
        this.#nome = nome;
        this.#cpf = cpf;
    }

    get nome() {
        return this.#nome;
    }
    set nome(value) {
        this.#nome = value;
    }
    
    get cpf() {
        return this.#cpf;
    }
    set cpf(value) {
        this.#cpf = value;
    }

}