import BajuService from "./BajuService.js";

export default class Hoodie extends BajuService {

    constructor(tb, bb, gender) {
        super(tb, bb, gender);
    }

    hitungUkuran() {
        if (this.gender === "P") {
            if (this.bb < 46) return "M";
            if (this.bb < 53) return "L";
            if (this.bb < 60) return "XL";
            return "XXL";
        } else {
            if (this.bb < 55) return "M";
            if (this.bb < 63) return "L";
            if (this.bb < 75) return "XL";
            return "XXL";
        }
    }
}
