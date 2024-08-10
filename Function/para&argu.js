// jika parameter dan argument sesuai//
// function tambah(a, b) { //parameter//
//     return a + b;
// }

// function kali(a, b) { //parameter//
//     return a * b;
// }

// let a = parseInt(prompt('Masukkan nilai 1:'));  //argument//
// let b = parseInt(prompt('Masukkan nilai 2:'));  //argument//

// let hasil = kali(tambah(1, 2), tambah(3, 4)); //argument//
// console.log(hasil);

//jika parameter tidak sesuai dengan argumen atau sebaliknya//
function tambah() {
    let hasil = 0;
    for (let i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;

}
let coba = tambah(1, 2, 3, 4, 5);
console.log(coba);