// function jumlahVolumeDuaKubus(a, b) {
//     let volumeA;
//     let volumeB;
//     let total;

//     volumeA = a * a * a
//     volumeB = b * b * b

//     total = volumeA + volumeB;

//     return total;
// }
// alert(jumlahVolumeDuaKubus(8, 3));

// Versi singkat(refactoring sederhana)//
function jumlahVolumeDuaKubus(a, b) {
    return a * a * a + b * b * b;
}
alert(jumlahVolumeDuaKubus(8, 3));