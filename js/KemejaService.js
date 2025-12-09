import BajuService from "./BajuService.js";

export default class Kemeja extends BajuService {

    constructor(tb, bb, lingkarDada, lebarBahu, gender) {
        super(tb, bb, gender);
        this.lingkarDada = lingkarDada;
        this.lebarBahu = lebarBahu;
    }

    hitungUkuran() {
        const nilai = (this.tb / 2) + (this.bb / 4) + (this.lingkarDada / 6) + (this.lebarBahu / 6);

        if (this.gender === "L") {
            if (nilai < 95) return "S";
            if (nilai < 105) return "M";
            if (nilai < 115) return "L";
            return "XL";
        } else {
            if (nilai < 85) return "S";
            if (nilai < 95) return "M";
            if (nilai < 105) return "L";
            return "XL";
        }
    }
}
