class UserInput {
    constructor() {
        this.gender = "";
        this.tinggi = 0;
        this.berat = 0;
        this.dada = 0;
        this.bahu = 0;
        this.jenisBaju = "";
    }

    setGender(val) { this.gender = val; }
    getGender() { return this.gender; }

    setJenisBaju(val) { this.jenisBaju = val; }
    getJenisBaju() { return this.jenisBaju; }

    setTinggi(val) { this.tinggi = val; }
    getTinggi() { return this.tinggi; }

    setBerat(val) { this.berat = val; }
    getBerat() { return this.berat; }

    setDada(val) { this.dada = val; }
    getDada() { return this.dada; }

    setBahu(val) { this.bahu = val; }
    getBahu() { return this.bahu; }
}

export default UserInput;
