let tebak = true;
let angkaTebakan = Math.floor(Math.random() * 10) + 1; // Memilih angka random antara 1-10
let kesempatan = 3;

while (tebak) {
    alert('Tebak angka dari 1-10 \n Kamu punya ' + kesempatan + ' kesempatan');

    // Menangkap pilihan player
    let u = prompt('Masukan angka tebakan');

    if (u === null) { // Jika player membatalkan input
        alert('Permainan dibatalkan');
        tebak = false;
        break;
    }

    if (isNaN(u) || u < 1 || u > 10) { // Jika input bukan angka atau diluar rentang 1-10
        alert('Input harus berupa angka antara 1-10');
        continue;
    }

    if (u == angkaTebakan) { // Jika player menebak benar
        alert('Selamat, kamu menebak angka ' + angkaTebakan + ' dengan benar!');
        tebak = false;
    } else { // Jika player menebak salah
        kesempatan--; //belum berkurang kesempatannya
        if (kesempatan === 0) { //sudah berkurang kesempatannya
            alert('Kesempatan habis. Angka yang harus ditebak adalah ' + angkaTebakan);
            tebak = false;
        } else {
            alert('Salah! Angka yang kamu masukkan terlalu ' + (u < angkaTebakan ? 'rendah' : 'tinggi'));
        }
    }
}

alert('Terimakasih sudah bermain!');