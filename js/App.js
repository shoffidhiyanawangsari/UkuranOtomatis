import Kaos from "./KaosService.js";
import Hoodie from "./HoodieService.js";
import Kemeja from "./KemejaService.js";

/* ===============================
   FUNGSI TAMPILKAN GAMBAR BAJU
=================================*/
function tampilkanGambar(jenis, gender) {
    const img = document.getElementById("gambarBaju");

    if (jenis === "kaos" && gender === "laki") {
        img.src = "properti/Kaos Laki laki.jpeg";
    } 
    else if (jenis === "kaos" && gender === "perempuan") {
        img.src = "properti/kaos Wanita.jpeg";
    } 
    else if (jenis === "kemeja" && gender === "laki") {
        img.src = "properti/Kemeja Laki Laki.jpeg";
    } 
    else if (jenis === "kemeja" && gender === "perempuan") {
        img.src = "properti/Kemeja Wanita.jpeg";
    } 
    else if (jenis === "hoodie" && gender === "laki") {
        img.src = "properti/Hoodie Laki laki.jpeg";
    } 
    else if (jenis === "hoodie" && gender === "perempuan") {
        img.src = "properti/Hoodie Wanita.jpeg";
    }

    img.style.display = "block";
}

/* ===============================
            CLASS APP
=================================*/
class App {

    static hitung() {

        const gender = document.getElementById("gender").value;   // "L" atau "P"
        const jenis  = document.getElementById("jenis").value;

        const tb = parseInt(document.getElementById("tb").value);
        const bb = parseInt(document.getElementById("bb").value);

        if (!tb || !bb) {
            alert("Tinggi badan dan berat badan wajib diisi!");
            return;
        }

        let hasil;

        // === Jika KEMEJA ===
        if (jenis === "kemeja") {
            const ld = parseInt(document.getElementById("lingkarDada").value);
            const lb = parseInt(document.getElementById("lebarBahu").value);

            if (!ld || !lb) {
                alert("Lingkar dada dan lebar bahu wajib diisi!");
                return;
            }

            const baju = new Kemeja(tb, bb, ld, lb, gender);
            hasil = baju.hitungUkuran();
        } 

        // === Jika KAOS ===
        else if (jenis === "kaos") {
            const baju = new Kaos(tb, bb, gender);
            hasil = baju.hitungUkuran();
        } 
        
        // === Jika HOODIE ===
        else if (jenis === "hoodie") {
            const baju = new Hoodie(tb, bb, gender);
            hasil = baju.hitungUkuran();
        }

        /* ==========================
           DESKRIPSI UKURAN BAJU
        ===========================*/
        const deskripsiData = {
            kaos: {
                S: "Kaos ukuran S: panjang 65 cm, lebar dada 48 cm, lengan 19 cm.",
                M: "Kaos ukuran M: panjang 68 cm, lebar dada 50 cm, lengan 20 cm.",
                L: "Kaos ukuran L: panjang 70 cm, lebar dada 53 cm, lengan 21 cm.",
                XL:"Kaos ukuran XL: panjang 73 cm, lebar dada 56 cm, lengan 22 cm.",
                XXL:"Kaos ukuran XXL: panjang 76 cm, lebar dada 60 cm, lengan 23 cm.",
            },
            hoodie: {
                S: "Hoodie S: panjang 66 cm, lebar dada 50 cm, lengan 60 cm.",
                M: "Hoodie M: panjang 69 cm, lebar dada 53 cm, lengan 62 cm.",
                L: "Hoodie L: panjang 72 cm, lebar dada 56 cm, lengan 64 cm.",
                XL:"Hoodie XL: panjang 75 cm, lebar dada 59 cm, lengan 66 cm.",
                XXL:"Hoodie XXL: panjang 78 cm, lebar dada 62 cm, lengan 68 cm.",
            },
            kemeja: {
                S: "Kemeja S: lingkar dada 96 cm, bahu 42 cm, panjang 70 cm.",
                M: "Kemeja M: lingkar dada 100 cm, bahu 44 cm, panjang 72 cm.",
                L: "Kemeja L: lingkar dada 106 cm, bahu 46 cm, panjang 74 cm.",
                XL:"Kemeja XL: lingkar dada 112 cm, bahu 48 cm, panjang 76 cm.",
            }
        };

        /* ==========================
           TAMPILKAN HASIL DI HTML
        ===========================*/

        document.getElementById("hasilAkhir").innerHTML = `
            <h3>Ukuran Anda: <b>${hasil}</b></h3>
        `;

        // Gender L → laki, P → perempuan
        const genderFix = (gender === "L") ? "laki" : "perempuan";

        tampilkanGambar(jenis, genderFix);

        document.getElementById("hasilDeskripsi").innerHTML = `
            <b>Detail ukuran ${hasil}:</b><br>${deskripsiData[jenis][hasil]}
        `;

        nextStep(4); // ke halaman hasil
    }
}

window.App = App;
