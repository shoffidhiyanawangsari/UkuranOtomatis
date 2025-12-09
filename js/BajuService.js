class BajuService {
    constructor(tb, bb, gender) {
        this.tb = tb;
        this.bb = bb;
        this.gender = gender;
    }

    hitungUkuran() {
        throw new Error("Method harus di override");
    }
}

export default BajuService;
