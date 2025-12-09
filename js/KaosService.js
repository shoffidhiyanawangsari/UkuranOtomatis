import BajuService from "./BajuService.js";

export default class Kaos extends BajuService {

    constructor(tb, bb, gender) {
        super(tb, bb, gender);
    }

    hitungUkuran() {
        if (this.gender === "P") {
            if (this.bb < 48) return "M";
            if (this.bb < 55) return "L";
            if (this.bb < 65) return "XL";
            return "XXL";
        } else {
            if (this.bb < 55) return "M";
            if (this.bb < 65) return "L";
            if (this.bb < 80) return "XL";
            return "XXL";
        }
    }
}
